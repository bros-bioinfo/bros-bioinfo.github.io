```bash
#!/bin/bash

NB_PARAMETERS=2
CODE_ERR_NB_PARAMETERS=1

show_usage ()
{
  echo Usage: $0 fichier_protéine_normalisé entier_strictement_positif
}

usage ()
{
  show_usage
  exit ${CODE_ERR_NB_PARAMETERS}
}

test $# -ne ${NB_PARAMETERS} && usage

## ---------------------------------------------

show_stars ()
{
  COUNTER=$1
  while [ ${COUNTER} -ge 1 ]
  do
    echo -n \*
    COUNTER=$(expr ${COUNTER} - 1)
  done
}

PROTEIN_FILE=$1
LONGUEUR_MAX=$2

LIST_AA=$(echo A C D E F G H I K L M N O P Q R S T U V W Y)

# COMPLETER CI-APRES ---------------------------

touch tmp
chmod +rwx tmp

for AA in ${LIST_AA}
do
    echo ${AA} $(cat ${PROTEIN_FILE} | grep -o ${AA} | wc -l) >> tmp
done

MAX=$(cat tmp | sort -nr -k2 | head -n1 | cut -d " " -f2)

cat tmp | while read LINE
do
    CURRENT=$(echo ${LINE} | cut -d " " -f2)
    let "N_STARS = ${CURRENT} * ${LONGUEUR_MAX} / ${MAX}"
    echo -n $(echo ${LINE} | cut -d " " -f1) " "; show_stars ${N_STARS} ; echo ""
done

rm tmp
```