```bash
#!/bin/bash

NB_PARAMETRES=2
CODE_ERREUR_NB_PARAMETRES=1

affiche_usage ()
{
  echo Usage: $0 acide_aminé fichier_protéine_normalisé
}

usage ()
{
  affiche_usage
  exit $CODE_ERREUR_NB_PARAMETRES
}

test $# -ne $NB_PARAMETRES && usage

## ---------------------------------------------

AA=$1
PROTEINE_FILE=$2

# COMPLETER CI-APRES ---------------------------
cat $PROTEINE_FILE | tr -dc [$AA] | wc -m

```