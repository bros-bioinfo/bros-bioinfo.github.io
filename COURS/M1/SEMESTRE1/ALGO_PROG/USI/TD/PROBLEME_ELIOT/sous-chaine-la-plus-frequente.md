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

cat ${1:-/dev/stdin} | sort | uniq -c | sort | tail -n1

```