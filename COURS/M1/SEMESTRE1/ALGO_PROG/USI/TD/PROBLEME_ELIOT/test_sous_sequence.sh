#!/usr/bin/env bash
NORM=$1
SSEQ=$2

if [ $(cat ${NORM} | grep -o ${SSEQ} | wc -l) == 0 ]
then echo KO
else echo OK
fi

cat q9660.stat | grep -w 0 | cut -d " " -f1 # Show non present AA in the sequence