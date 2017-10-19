#!/usr/bin/env python
# -*- coding: utf-8 -*-

def sezienz(nbenz):
    print "\nVeuillez saisir vos enzymes:"
    for i in range (0,nbenz):
        saisie=raw_input()
        enzlist.append(saisie)

def sezipoids(enzlist):
    print "\n-------------------------------------------------"
    print "\nVeuillez saisir le poids de vos enzymes:"
    for n in range(len(enzlist)):
        print "\n",enzlist[n],":"
        saisiepoids=input()
        poidslist.append(saisiepoids)


def showListEP(enzlist,poidslist):
    print "\n-------------------------------------------------"
    print "\nVoici la liste de vos enzymes et de leurs poids:"
    for m in range(len(enzlist)):
        print " - ",enzlist[m],"a un poids de: ",poidslist[m]


def showMaxP(max,enzlist,poidslist):
    for p in range(len(enzlist)):
        if max < poidslist[p]:
            max = poidslist[p]
            indice = p
    print "\nL'enzyme ayant de poids max est :", enzlist[indice],"avec un poids de",max


def showMoy(somme,enzlist,poidslist):
    for k in range (len(enzlist)):
        somme = somme + poidslist[k]

    moyenne = somme / len(enzlist)
    print "\nLa moyenne des poids est: ", moyenne


def showMoyplus(enzlist,poidslist,moyenne):
    print "\nLes enzymes dont le poids est supérieur à la moyenne sont: "

    for h in range (len(enzlist)):
        if poidslist[h] > moyenne:
            print " - ",enzlist[h]

def continueroupas():
    print "\nVoulez vous continuer ?"
    continuer = raw_input("(Y / N) :   ")
    if continuer == N:
        sys.exit()


i=0
n=0
max = 0
indice = 0
moyenne = 0
somme = 0
enzlist=[]
poidslist=[]
continuer = "Y"

print "\nCombien voulez-vous rentrer d'enzymes ?"
nbenz= input()
sezienz(nbenz)
sezipoids(enzlist)

while continuer == "Y":
    print '''
    \n-------------------------------------------------
    \nQue voulez vous faire:
    \n [1] afficher la liste des Enzymes et leur poids.
    \n [2] afficher l'Enzyme ayant le poids maximum.
    \n [3] afficher la moyenne des poids des Enzymes.
    \n [0] fermer le programme.
    \n-------------------------------------------------
    '''
    choix = input("Saisissez votre choix: ");

    if choix==0 :
        sys.exit()

    elif choix==1:
        showListEP(enzlist,poidslist)
        continueroupas()

    elif choix==2:
        showMaxP(max,enzlist,poidslist)
        continueroupas()

    elif choix==3:
        moyenne=showMoy(somme,enzlist,poidslist)
        showMoyplus(enzlist,poidslist,moyenne)
        continueroupas()
