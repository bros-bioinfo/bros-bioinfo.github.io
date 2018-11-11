```bash
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
POSITIONS_SOUS_CHAINE=$(echo $2 | tr ',' ' ')

# COMPLETER CI-APRES ---------------------------

PEPTID=$(cat $1)
for POS in ${POSITIONS_SOUS_CHAINE}
do
    if [ $(echo ${POS} | grep -o '-' | wc -l) == 1 ]; then
        DEBUT=$(( $(echo ${POS} | cut -d "-" -f1 ) - 1 ))
        FIN=$(( $(echo ${POS} | cut -d "-" -f2 )  ))
        let "LENGTH=$FIN - $DEBUT"
        echo -n ${PEPTID:$DEBUT:$LENGTH}
    else
        echo -n ${PEPTID:$(( ${POS} - 1 )) :1}
    fi
done

```