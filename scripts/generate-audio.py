#!/usr/bin/env python3
"""
Generate Microsoft Neural Voice audio narrations for all Collapse Recursion lessons.
Uses edge-tts — the same free neural voices built into Microsoft Edge browser.

Usage:
  python3 scripts/generate-audio.py           # generate all lessons
  python3 scripts/generate-audio.py L1        # single lesson
  python3 scripts/generate-audio.py L1 L2 L3  # specific lessons
  python3 scripts/generate-audio.py --list    # list available voices
"""

import asyncio
import re
import html
import os
import sys
from pathlib import Path

try:
    import edge_tts
except ImportError:
    print("Installing edge-tts...")
    os.system("pip3 install edge-tts")
    import edge_tts

# ── Configuration ──────────────────────────────────────────────────
VOICE = "en-US-ChristopherNeural"   # Deep, authoritative male — perfect for this course
# Other great options:
#   "en-US-GuyNeural"         — clear, confident male
#   "en-US-AndrewNeural"      — warm, measured male
#   "en-US-AriaNeural"        — clear female (default Edge voice)
#   "en-US-JennyNeural"       — conversational female
#   "en-US-EmmaNeural"        — expressive female

RATE  = "+0%"     # speaking rate  (e.g. "+10%" faster, "-5%" slower)
PITCH = "+0Hz"    # pitch shift    (e.g. "+10Hz" higher, "-5Hz" lower)

OUTPUT_DIR  = Path(__file__).parent.parent / "public" / "audio"
COURSE_DATA = Path(__file__).parent.parent / "lib" / "courseData.js"

# ── Text extraction helpers ────────────────────────────────────────

def strip_html(raw: str) -> str:
    """Turn HTML lesson content into clean narration-ready text."""
    # Convert block-level tags to natural pauses
    text = re.sub(r'<h2[^>]*>(.*?)</h2>', r'\1. ', raw, flags=re.DOTALL)
    text = re.sub(r'<h3[^>]*>(.*?)</h3>', r'\1. ', text, flags=re.DOTALL)
    text = re.sub(r'<h[1-6][^>]*>(.*?)</h[1-6]>', r'\1. ', text, flags=re.DOTALL)
    text = re.sub(r'<li[^>]*>(.*?)</li>', r'• \1 ', text, flags=re.DOTALL)
    text = re.sub(r'<br\s*/?>', ' ', text)
    text = re.sub(r'<[^>]+>', '', text)            # strip remaining tags
    text = html.unescape(text)                      # &amp; → &, etc.
    text = re.sub(r'•\s+', '. ', text)             # bullets → pauses
    text = re.sub(r'\s{2,}', ' ', text)
    text = re.sub(r'\n{2,}', '. ', text)
    text = re.sub(r'\s*\.\s*\.', '.', text)        # collapse double periods
    return text.strip()


def unescape_js_string(s: str) -> str:
    """Unescape a JS string value (handles \\n, \\", etc.)."""
    s = s.replace('\\n', '\n')
    s = s.replace('\\"', '"')
    s = s.replace("\\'", "'")
    s = s.replace('\\\\', '\\')
    return s


def extract_lessons(js_path: Path):
    """Parse courseData.js and return list of lesson dicts."""
    src = js_path.read_text(encoding='utf-8')
    lessons = []

    # Only match lesson blocks: id starts with L followed by digits (e.g. L1, L12)
    # Lessons always have: id "L\d+", number, title, subtitle, content
    pattern = re.compile(
        r'\{\s*id:\s*"(L\d+)"\s*,\s*number:\s*(\d+)\s*,\s*title:\s*"((?:[^"\\]|\\.)*)"\s*,'
        r'\s*subtitle:\s*"((?:[^"\\]|\\.)*)"'
        r'.*?content:\s*"((?:[^"\\]|\\.)*)"',
        re.DOTALL
    )

    for m in pattern.finditer(src):
        lesson_id  = m.group(1)
        number     = int(m.group(2))
        title      = unescape_js_string(m.group(3))
        subtitle   = unescape_js_string(m.group(4))
        raw_html   = unescape_js_string(m.group(5))
        clean_text = strip_html(raw_html)

        lessons.append({
            'id':       lesson_id,
            'number':   number,
            'title':    title,
            'subtitle': subtitle,
            'text':     clean_text,
        })

    return sorted(lessons, key=lambda x: x['number'])


def build_script(lesson: dict) -> str:
    """Build the full narration script for a lesson."""
    parts = [
        f"Lesson {lesson['number']}. {lesson['title']}.",
    ]
    if lesson['subtitle']:
        parts.append(f"{lesson['subtitle']}.")
    parts.append(lesson['text'])
    return ' '.join(parts)


# ── TTS generation ─────────────────────────────────────────────────

async def generate_lesson(lesson: dict, voice: str, overwrite: bool = False):
    out_file = OUTPUT_DIR / f"{lesson['id']}.mp3"
    if out_file.exists() and not overwrite:
        size_kb = out_file.stat().st_size // 1024
        print(f"  ✓ {lesson['id']}.mp3 already exists ({size_kb} KB), skipping  (use --overwrite to regenerate)")
        return True

    script = build_script(lesson)
    char_count = len(script)
    print(f"  Generating {lesson['id']}.mp3  ({char_count:,} chars, voice: {voice}) …")

    try:
        communicate = edge_tts.Communicate(script, voice, rate=RATE, pitch=PITCH)
        await communicate.save(str(out_file))
        size_kb = out_file.stat().st_size // 1024
        print(f"  ✓ {lesson['id']}.mp3  →  {size_kb} KB")
        return True
    except Exception as e:
        print(f"  ✗ Error for {lesson['id']}: {e}")
        return False


async def list_voices():
    voices = await edge_tts.list_voices()
    en_voices = [v for v in voices if v['Locale'].startswith('en-')]
    print(f"\n{'Name':<40} {'Gender':<8} {'Locale'}")
    print("-" * 65)
    for v in sorted(en_voices, key=lambda x: x['ShortName']):
        print(f"{v['ShortName']:<40} {v['Gender']:<8} {v['Locale']}")


async def main():
    args = sys.argv[1:]

    if '--list' in args:
        await list_voices()
        return

    overwrite = '--overwrite' in args
    args = [a for a in args if not a.startswith('--')]

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    print(f"\n{'='*60}")
    print(f"  Collapse Recursion — Audio Generator")
    print(f"  Voice : {VOICE}")
    print(f"  Output: {OUTPUT_DIR}")
    print(f"{'='*60}\n")

    lessons = extract_lessons(COURSE_DATA)
    if not lessons:
        print("No lessons found in courseData.js — check the file path.")
        return

    # Filter to requested lessons, or do all
    if args:
        requested = set(a.upper() for a in args)
        lessons = [l for l in lessons if l['id'].upper() in requested]
        if not lessons:
            print(f"No lessons matched: {args}")
            print(f"Available: {[l['id'] for l in extract_lessons(COURSE_DATA)]}")
            return

    total = len(lessons)
    print(f"Generating audio for {total} lesson(s)…\n")

    ok = 0
    for i, lesson in enumerate(lessons, 1):
        print(f"[{i}/{total}] Lesson {lesson['number']}: {lesson['title']}")
        success = await generate_lesson(lesson, VOICE, overwrite=overwrite)
        if success:
            ok += 1

    print(f"\n{'='*60}")
    print(f"  Done: {ok}/{total} lessons generated")
    print(f"  Files saved in: {OUTPUT_DIR}")
    print(f"{'='*60}\n")


if __name__ == "__main__":
    asyncio.run(main())
