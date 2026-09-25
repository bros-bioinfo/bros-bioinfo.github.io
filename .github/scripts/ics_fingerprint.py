"""Empreinte stable d'un .ics ADE : ignore l'ordre des événements et les champs
qui changent à chaque export (DTSTAMP, LAST-MODIFIED, SEQUENCE, "Exporté le")."""
import re
import sys

VOLATILE = ("DTSTAMP:", "LAST-MODIFIED:", "SEQUENCE:")

text = open(sys.argv[1], encoding="utf-8").read().replace("\r\n", "\n")
text = re.sub(r"\n[ \t]", "", text)  # déplie les lignes continuées
events = []
for block in re.findall(r"BEGIN:VEVENT\n(.*?)END:VEVENT", text, re.S):
    lines = [l for l in block.splitlines() if not l.startswith(VOLATILE)]
    lines = [re.sub(r"\(Export[^)]*\)", "", l) for l in lines]
    events.append("\n".join(sorted(lines)))
print("\n--\n".join(sorted(events)))
