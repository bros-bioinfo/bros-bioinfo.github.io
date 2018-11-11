import path
from path import Path


cd = Path("/home/eliot/bros-bioinfo.github.io/COURS/M1/SEMESTRE1/ALGO_PROG/USI/TD/PROBLEME")

for file in cd.walkfiles():
    if file.ext == ".sh":
        with open(file, "r") as infile:
            with open(file.parent / file.stem + ".md", 'w') as outfile:
                outfile.write("```bash\n")
                outfile.write(infile.read())
                outfile.write("\n```")



