#!/bin/bash

NB_PARAMETRES=2
CODE_ERREUR_NB_PARAMETRES=1

affiche_usage ()
{
  echo Usage: $0 fichier_protéine_normalisé liste_positions_des_acides_aminés
}

usage ()
{
  affiche_usage
  exit $CODE_ERREUR_NB_PARAMETRES
}

test $# -ne $NB_PARAMETRES && usage

## ---------------------------------------------

PROTEINE_FILE=$1
POSITIONS_SOUS_CHAINE=$2

# COMPLETER CI-APRES ---------------------------
cat $PROTEINE_FILE | cut -c $POSITIONS_SOUS_CHAINE
