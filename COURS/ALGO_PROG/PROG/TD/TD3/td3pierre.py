#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
compteur = 1
occurence = 11


print "\nDe quel table de multiplication voulez vous partir ?"
nombre = input()
print "\nEntrez un deuxième nombre"

nombre2 = input()

while nombre <= nombre2 :
    for compteur in range(1,occurence,1):
        table = nombre * compteur
        print nombre,"x",compteur,"=",table
    print "\n"
    nombre = nombre +1
"""

poidsmax = 0
print "\nCombien y a t'il d'animaux?"
max = input()

print "\nVeuillez saisir le poids des animaux"


for i in range(1,max,1):
    input = input()
    if (input > poidsmax):
        poidsmax = input

    somme = input
