#!/bin/bash
### 2017-11-10
### SGC
### USI

# Script permettant de normaliser un fichier format Fasta

### Déclaration des paramètres
FICHIER_FASTA=$1 # premier paramètre à déclarer après l'appel du script
FICHIER_NORM=$2  # deuxième paramètre

cat ${FICHIER_FASTA} | tr [:lower:] [:upper:] | tr -dc [A-Z] > ${FICHIER_NORM}

### OU cat ${FICHIER_FASTA} | tr [:lower:] [:upper:] | tr -d [:space:] > ${FICHIER_NORM}
