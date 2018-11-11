```bash
#!/bin/bash

NB_PARAMETRES=1
CODE_ERREUR_NB_PARAMETRES=1

affiche_usage ()
{
  echo Usage: $0 [fichier_liste_des_sous_chaines]
}

usage ()
{
  affiche_usage
  exit $CODE_ERREUR_NB_PARAMETRES
}

test $# -gt $NB_PARAMETRES && usage

# COMPLETER CI-APRES ---------------------------

FICHIER=$1
MAX=0

for i in $(cat $FICHIER)
do
  NOMBRE=$(cat $FICHIER | grep -e $i | wc -w)
  if [ $NOMBRE -gt $MAX ]
  then
    MAX=$NOMBRE
    AA=$i
  fi
done
echo $MAX $AA

# $ seq 1 10 | while read UNE_LIGNE; do echo $UNE_LIGNE; done | tr [0-9] [A-J]

```