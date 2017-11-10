#!/usr/bin/env python
# -*- coding: utf-8 -*-
import os
import sys

def sezienz(nbenz,table):
    os.system('clear')
    print "\n Veuillez saisir vos enzymes:"
    for i in range (0,nbenz):
        print "\n-------------------------------------------------\n"
        nom=raw_input(" Nom de votre enzyme "+str(i)+": ")
        inputpoids=input(" Poids de votre enzyme "+str(i)+": ")
        inputadn=raw_input(" Sequence de votre enzyme "+str(i)+": ")
        table[nom]={}
        table[nom]["poids"]=inputpoids
        table[nom]["adn"]=inputadn



def showListEP():
    os.system('clear')
    print "\n-------------------------------------------------"
    print "\nVoici la liste de vos enzymes et de leurs poids:"
    for m in table.keys():
        print " - ",m,"a un poids de: ",table[m][poids]," et sa sequence est: ",table[m][adn]


def showMaxP(max,table):
    os.system('clear')
    for p in table.keys():
        if max < table[p][0]:
            max = table[p][0]
            indice = p
    print "\nL'enzyme ayant de poids max est :", indice,"avec un poids de",max


def showMoy(somme,table):
    os.system('clear')
    for k in table.keys():
        somme = somme + table[k][0]
    moyenne = somme / len(table)
    print "\nLa moyenne des poids est: ", moyenne
    return moyenne

def showMoyplus(table,moyenne):
    print "\n Les enzymes dont le poids est supérieur à la moyenne sont: "
    for h in table.keys():
        if table[h][0] > moyenne:
            print " - ",h

def continueroupas():
    print "\n Voulez vous continuer ?"
    continuer = raw_input("(Y / N) :   ")
    continuer = continuer.upper()
    if continuer == "N":
        sys.exit()

def ecrire(table):
    fic=open("dict.txt","w")
    for cle in table.keys():
        fic.write(cle)
        fic.write(' ')
        fic.write(str(table[cle]))
        fic.write('\n')
    fic.close()

def lire(table):
    print "donnez un nom de fichier "
    nomfichier="dict.txt"
    fic=open(nomfichier,"r")
    for ligne in fic.readlines():
        if not ligne:
            break
        ligne=ligne.strip()
        enz=ligne.split()
        print enz
        nom=enz[0]
        lecturepoids=int(enz[1])
        lectureadn=enz[2]
        table[nom]={}
        table[nom]["poids"]=lecturepoids
        table[nom]["adn"]=lectureadn
    fic.close()
    for m in table.keys():
        print table[m]["poids"]



i=0
n=0
max = 0
indice = 0
moyenne = 0
somme = 0
enzlist=[]
poidslist=[]
continuer = "Y"
table={}


while continuer == "Y":
    lire(table)
    #os.system('clear')
    print '''

    \n Que voulez vous faire:
    \n [1] rentrer le nom, le poids et la séquence de vos enzymes
    \n [2] afficher la liste des Enzymes, leur poids et leur séquence ADN.
    \n [3] afficher l'Enzyme ayant le poids maximum.
    \n [4] afficher la moyenne des poids des Enzymes.
    \n [0] fermer le programme.
    \n-------------------------------------------------
    '''
    choix = input("Saisissez votre choix: ");

    if choix==0 :
        sys.exit()

    elif choix==1:
        os.system('clear')
        print "\nCombien voulez-vous rentrer d'enzymes ?"
        nbenz= input()
        sezienz(nbenz,table)
        ecrire(table)

    elif choix==2:
        showListEP()
        continueroupas()

    elif choix==3:
        showMaxP(max,table)
        continueroupas()

    elif choix==4:
        moyenne=showMoy(somme,table)
        showMoyplus(table,moyenne)
        continueroupas()

    else:
        print "Choix invalide - fin du programme"
        sys.exit()
