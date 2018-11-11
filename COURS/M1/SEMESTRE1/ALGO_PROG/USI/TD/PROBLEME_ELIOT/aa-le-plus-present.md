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

# COMPLETER CI-APRES ---------------------------

for AA in ${LISTE_AA}
do
    echo ${AA} $(cat ${PROTEINE_FILE} | grep -o ${AA} | wc -l) >> tmp
done
cat tmp | sort -nr -k2 | head -n1 | cut -d " " -f1 ; rm tmp
```