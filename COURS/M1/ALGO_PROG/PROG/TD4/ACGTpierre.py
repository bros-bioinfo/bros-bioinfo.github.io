#!/usr/bin/env python
# -*- coding: utf-8 -*-
print "saisir un code ADN"
code= raw_input()
print "\nsaisir un code motif"
motif = raw_input()

ARN=""

codemotif = code
counter = 0
for i in range(len(codemotif)):
    if codemotif[:len(motif)] == motif:
        counter += 1
    codemotif = codemotif[1:]




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
print "\nNombre de motif dans la séquence",counter
