```bash
#!/usr/bin/env bash
rm q9660.stat
list="A C D E F G H I K L M N O P Q R S T U V W Y Z"
for AA in ${list}
do
    echo ${AA} $(cat q9660.norm | grep -o ${AA} | wc -l) >> q9660.stat
done
cat q9660.stat | sort -nr -k2
```