import json
import re

def parse_bibtex(file_path):

    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    entries = content.split("@")[1:]

    journals = []
    conferences = []

    for entry in entries:

        entry_type = entry.split("{")[0].strip().lower()

        title = extract(entry, "title")
        author = extract(entry, "author")
        year = extract(entry, "year")
        doi = extract(entry, "doi")
        booktitle = extract(entry, "booktitle")
        journal = extract(entry, "journal")

        paper = {
            "title": title,
            "author": author,
            "year": int(year) if year.isdigit() else 0,
            "venue": booktitle if booktitle else journal,
            "doi": doi
        }

        if entry_type == "inproceedings":
            conferences.append(paper)
        elif entry_type == "article":
            journals.append(paper)

    save("journals.json", journals)
    save("conferences.json", conferences)

def extract(text, field):

    pattern = rf"{field}\s*=\s*{{(.*?)}}"
    match = re.search(pattern, text, re.DOTALL)

    if match:
        return match.group(1).replace("\n", " ").strip()

    return ""

def save(filename, data):

    with open(filename, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

if __name__ == "__main__":
    parse_bibtex("research.bib")
    print("Conversion complete.")