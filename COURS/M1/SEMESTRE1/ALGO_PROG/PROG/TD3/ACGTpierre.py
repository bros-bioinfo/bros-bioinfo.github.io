#!/usr/bin/env python
# -*- coding: utf-8 -*-
print "saisir un code ADN"
code= raw_input()
print "\nsaisir un code motif"
motif = raw_input()

nbmotif = code.count(motif)
ARN=""

for i in code:
    if i == "A":
        i =  "U"

    elif i == "C":
        i =  "G"

    elif i == "G":
        i = "C"

    elif i == "T":
        i =  "A"

    ARN += i

print "\nLa séquence traduite est:",ARN
print "\nNombre de motif dans la séquence",nbmotif




"""
ACGT -> TGCU
ACGT -> saisir motif -> afficher combien de fois le motif est dans la chaine.
"""
