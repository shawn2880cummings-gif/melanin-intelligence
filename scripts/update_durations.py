#!/usr/bin/env python3
import os
import re
import subprocess
import math

COURSE_DATA_FILE = "lib/courseData.js"
AUDIO_DIR = "public/audio"

def get_duration_formatted(filepath):
    try:
        # afinfo public/audio/L1.mp3 | grep "estimated duration"
        result = subprocess.run(["afinfo", filepath], capture_output=True, text=True)
        for line in result.stdout.split('\n'):
            if "estimated duration:" in line:
                # e.g., "estimated duration: 114.048000 sec"
                sec_str = line.split("estimated duration:")[1].split("sec")[0].strip()
                seconds = float(sec_str)
                minutes = math.floor(seconds / 60)
                remaining_seconds = round(seconds % 60)
                if remaining_seconds == 60:
                    minutes += 1
                    remaining_seconds = 0
                return f"{minutes}:{remaining_seconds:02d}"
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
    return None

def main():
    if not os.path.exists(COURSE_DATA_FILE):
        print(f"{COURSE_DATA_FILE} not found!")
        return

    with open(COURSE_DATA_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    # We need to find all id: "LXX" and update their duration
    # Since we can just process L1 to L36, we can do it with regex replacement.
    
    updated_count = 0
    for i in range(1, 40):
        lesson_id = f"L{i}"
        audio_file = os.path.join(AUDIO_DIR, f"{lesson_id}.mp3")
        
        if os.path.exists(audio_file):
            formatted_time = get_duration_formatted(audio_file)
            if formatted_time:
                # Find the location of id: "L{i}" and replace its duration
                # Regex to match: id: "L1", number: 1, title: "...", subtitle: "...", duration: "20 min"
                # We can replace duration: ".*?" near id: "L1".
                # But it's easier to just match the block: { id: "L1", ... duration: "old_val" }
                
                # We can use a regex that finds `id: "L1"` and then the closest `duration: "..."` and replaces it.
                pattern = re.compile(r'(id:\s*"' + lesson_id + r'".*?duration:\s*)"([^"]+)"', re.DOTALL)
                
                def replacer(match):
                    return match.group(1) + '"' + formatted_time + '"'
                
                new_content, count = pattern.subn(replacer, content, count=1)
                if count > 0:
                    content = new_content
                    print(f"Updated {lesson_id} duration to {formatted_time}")
                    updated_count += 1
                else:
                    print(f"Could not find duration field for {lesson_id} in courseData.js")
    
    if updated_count > 0:
        with open(COURSE_DATA_FILE, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Successfully updated {updated_count} lessons.")
    else:
        print("No lessons updated.")

if __name__ == "__main__":
    main()
