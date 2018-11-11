import path
from path import Path

cd = Path(path.getcwdu())

for file in cd.files():
    if file.ext == ".sh":
        with open(file, "r") as infile:
            with open(file.stem + ".md", 'w') as outfile:
                outfile.write("```bash\n")
                outfile.write(infile.read())
                outfile.write("\n```")



