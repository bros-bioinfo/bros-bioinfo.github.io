```bash
#!/bin/bash
### 2017-11-10
### SGC
### USI

# Pour obtenir de nombre d'acide aminé
##cat q9660.norm | wc -m

# nombre d'alanine
##cat q9660.norm | tr -dc [A] | wc -m

# fréquence d'alanine
##cat q9660.norm | tr -dc [A] | echo "scale=3;$(wc -m) / $(wc -m < q9660.norm)" | bc -l


# Script pour statbio.sh
FICHIER_NORM=$1
LISTE_AA=$(echo A B {C..I} {K..N} {P..W} X Y)
#echo {A..K} => A B C D E F G H I J K
for i in ${LISTE_AA}
do
  NOMBRE=$(cat ${FICHIER_NORM} | tr -dc [$i] | wc -m)
  FREQUENCE=$(echo "scale=3;$NOMBRE / $(wc -m < $FICHIER_NORM)" | bc -l)
  echo "$i  $NOMBRE $FREQUENCE" # affiche "acide aminé TAB nombre TAB frequence"
done

# trier par ordre croissant de nombre d'acide aminé
## cat q9660.stat | sort -n -k 2

# trier par ordre décroissant de nombre d'acide aminé
## cat q9660.stat | sort -n -r -k 2

```