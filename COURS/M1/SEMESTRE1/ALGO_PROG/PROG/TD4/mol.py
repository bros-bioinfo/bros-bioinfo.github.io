#!/usr/bin/env python
# -*- coding: utf-8 -*-
i=0
n=0
max = 0
indice = 0
moyenne = 0
somme = 0


print "\nCombien voulez-vous rentrer d'enzymes ?"
nbenz= input()
print "\nVeuillez saisir vos enzymes:"

enzlist=[]
poidslist=[]

for i in range (0,nbenz):
    saisie=raw_input()
    enzlist.append(saisie)

print "\nVeuillez saisir le poids de vos enzymes:"


for n in range(len(enzlist)):
    print "\n",enzlist[n],":"
    saisiepoids=input()
    poidslist.append(saisiepoids)

#----------------------------------------------

print "\n-------------------------------------------------"
print "\nVoici la liste de vos enzymes et de leurs poids:"
for m in range(len(enzlist)):
    print " - ",enzlist[m],"a un poids de: ",poidslist[m]


for p in range(len(enzlist)):
    if max < poidslist[p]:
        max = poidslist[p]
        indice = p

print "\nL'enzyme ayant de poids max est :", enzlist[indice],"avec un poids de",max

#----------------------------------------------
for k in range (len(enzlist)):
    somme = somme + poidslist[k]

moyenne = somme / len(enzlist)
print "\nLa moyenne des poids est: ", moyenne

#----------------------------------------------
print "\nLes enzymes dont le poids est supérieur à la moyenne sont: "

for h in range (len(enzlist)):
    if poidslist[h] > moyenne:
        print " - ",enzlist[h]
