```bash
#!/usr/bin/env bash
OUT="$(echo $1 | cut -d '.' -f1).norm"
cat $1 | tr -d [:space:] | tr [:lower:] [:upper:] > $(echo ${OUT})
chmod u+x ${OUT}
TOTAL=$(echo $(wc -m < ${OUT}) )
echo $TOTAL AAs
A=$(cat ${OUT} | grep -o A | wc -l)
echo $A As
echo $(echo "scale=3; $A / $TOTAL * 100" | bc) "% of A"

```