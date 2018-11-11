```bash
#!/bin/bash
### 2017-11-10
### SGC
### USI

FICHIER_NORM=$1
MOTIF=$2

### grep -e est utile si le motif commence par -
### pour acccéder à toutes les options de grep : egrep ou grep -E
### cf feuille numéro pour grep

cat $FICHIER_NORM | grep -e $MOTIF 1> /dev/null 2> /dev/null && echo OK || echo KO

## Execution :
# s3b@s3b-N750BU:~/Documents/USI/shellProblem$ ./test_sous_sequence.sh q9660.norm WAK
#OK
#s3b@s3b-N750BU:~/Documents/USI/shellProblem$ ./test_sous_sequence.sh q9660.norm ADC
#KO

## Pour faire ressortir les aa non présents
#s3b@s3b-N750BU:~/Documents/USI/shellProblem$ cat q9660.stat | grep " 0 "
#B  0 0
#X  0 0

```