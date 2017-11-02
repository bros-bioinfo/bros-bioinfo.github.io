#!/usr/bin/env python
# -*- coding: utf-8


for animal in ("souris","rats","cobayes"):
    print "\nCombien y a t'il de",animal,"?"
    print "------------------------------"
    max = input()
    print "\nVeuillez saisir le poids des",animal
    poidsmax = 0
    somme = 0
    for i in range(0,max,1):
        saisie = input()
        if (saisie > poidsmax):
            poidsmax = saisie
        somme = somme + saisie

    print '\nLa somme des poids des',animal,'est:',somme
    print "Le poids le plus haut des",animal,"est:", poidsmax
    print "___________________________________________________________"
