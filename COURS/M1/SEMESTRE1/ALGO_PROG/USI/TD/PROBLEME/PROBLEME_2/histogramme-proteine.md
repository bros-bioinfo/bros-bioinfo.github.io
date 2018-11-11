```bash
#!/bin/bash

NB_PARAMETRES=2
CODE_ERREUR_NB_PARAMETRES=1

affiche_usage ()
{
  echo Usage: $0 fichier_protéine_normalisé entier_strictement_positif
}

usage ()
{
  affiche_usage
  exit $CODE_ERREUR_NB_PARAMETRES
}

test $# -ne $NB_PARAMETRES && usage

## ---------------------------------------------

affiche_etoiles ()
{
  COMPTEUR=$1
  while [ $COMPTEUR -ge 1 ]
  do
    echo -n \*
    COMPTEUR=$(expr $COMPTEUR - 1)
  done
}

PROTEINE_FILE=$1
LONGUEUR_MAX=$2

LISTE_AA=$(echo A {C..I} {K..W} Y)

# COMPLETER CI-APRES ---------------------------
MAX=-1
for i in $LISTE_AA
do
  NOMBRE=$(cat $PROTEINE_FILE | tr -c -d [$i] | wc -c)
  if [ $NOMBRE -gt $MAX ]
  then
     MAX=$NOMBRE
   fi
 done

for i in $LISTE_AA
do
  NOMBRE=$(cat $PROTEINE_FILE | tr -c -d [$i] | wc -c)
  ETOILE=$(expr $(expr $LONGUEUR_MAX \* $NOMBRE) / $MAX)
  echo $i : "$(affiche_etoiles $ETOILE)"
done

```