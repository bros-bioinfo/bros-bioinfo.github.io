```bash
#!/bin/bash

NB_PARAMETRES=1
CODE_ERREUR_NB_PARAMETRES=1

affiche_usage ()
{
  echo Usage: $0 fichier_protéine_normalisé
}

usage ()
{
  affiche_usage
  exit $CODE_ERREUR_NB_PARAMETRES
}

test $# -ne $NB_PARAMETRES && usage

## ---------------------------------------------

PROTEINE_FILE=$1

# Produit la liste des 22 acides aminés
LISTE_AA=$(echo A {C..I} {K..W} Y)
MAX=0

# COMPLETER CI-APRES ---------------------------
for i in $LISTE_AA
do
    NOMBRE=$(cat $PROTEINE_FILE | tr -c -d [$i] | wc -m)
    if [ $NOMBRE -gt $MAX ]
    then
      MAX=$NOMBRE
      AA=$i
    fi
done
echo $AA

```