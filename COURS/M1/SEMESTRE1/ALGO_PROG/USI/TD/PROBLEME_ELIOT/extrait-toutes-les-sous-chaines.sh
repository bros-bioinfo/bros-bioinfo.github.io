#!/bin/bash

NB_PARAMETRES=2
CODE_ERREUR_NB_PARAMETRES=1

affiche_usage ()
{
  echo Usage: $0 fichier_protéine_normalisé taille_des_sous_chaine_a_extraire
}

usage ()
{
  affiche_usage
  exit $CODE_ERREUR_NB_PARAMETRES
}

test $# -ne $NB_PARAMETRES && usage

## ---------------------------------------------

PROTEINE_FILE=$1
TAILLE_SOUS_CHAINE=$2

# COMPLETER CI-APRES ---------------------------
PEPTIDE=$(cat $1)

for POS in $(seq 0 $(( ${#PEPTIDE} - ${TAILLE_SOUS_CHAINE} - 1 )) )
do
echo ${PEPTIDE:${POS}:${TAILLE_SOUS_CHAINE}}
done # > $(echo "liste-sous-chaines-${TAILLE_SOUS_CHAINE}-${PROTEINE_FILE}.dat")

