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

#test $# -ne $NB_PARAMETRES && usage

## ---------------------------------------------

PROTEINE_FILE=$1

# COMPLETER CI-APRES ---------------------------
MAX=20
NB=1
while [ ${MAX} -gt 1 ]
do
    ((NB++))
    MAX=$(./extrait-toutes-les-sous-chaines.sh ${PROTEINE_FILE} ${NB} | sort | uniq -c | sort -nr | head -n1 | sed 's/^ *//g' | cut -d ' ' -f1 )

done
echo ${NB}