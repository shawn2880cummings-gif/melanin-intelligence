import asyncio
import edge_tts
import os
import re

# Voice configuration
VOICE = "en-US-GuyNeural"
OUTPUT_DIR = "/Users/Vine/.gemini/antigravity/scratch/vines-connection/public/audio/vines-connection"
COURSE_DATA_FILE = "/Users/Vine/.gemini/antigravity/scratch/vines-connection/lib/courseData.js"

async def generate_lesson_audio(lesson_id, text):
    output_path = os.path.join(OUTPUT_DIR, f"{lesson_id}.mp3")
    print(f"Generating audio for {lesson_id}...")
    communicate = edge_tts.Communicate(text, VOICE)
    await communicate.save(output_path)
    print(f"Saved: {output_path}")

async def main():
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)

    with open(COURSE_DATA_FILE, 'r') as f:
        content = f.read()

    # Find all lessons using a regex that captures id and content
    # Look for { id: "L...", ... content: "..." }
    lessons_raw = re.findall(r'id:\s*"(L\d+)",.*?content:\s*"(.*?)"', content, re.DOTALL)

    tasks = []
    for lesson_id, text in lessons_raw:
        # Clean up the content text (unescape quotes, newlines, etc.)
        clean_text = text.replace('\\n', ' ').replace('\\"', '"').replace('**', '')
        tasks.append(generate_lesson_audio(lesson_id, clean_text))

    if not tasks:
        print("No lessons found! Check the regex in generate_audio.py")
        return

    await asyncio.gather(*tasks)
    print("\n--- All 14 narrations generated successfully ---")

if __name__ == "__main__":
    asyncio.run(main())
