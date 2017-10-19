#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sys
import tkinter
from Tkinter import *
import os
import Image
import csv
import random


def save(pokedex):
    csvfile = "biokemon.txt"
    #Assuming res is a list of lists
    with open(csvfile, "w") as output:
        writer = csv.writer(output, lineterminator='\n')
        writer.writerows(pokedex)


def addpokemon(pokedex):
    print pokedex
    name=raw_input("Quel est le nom de votre Biokemon ? ")
    poketype=raw_input("Quel est le type de votre Biokemon ? ")
    PV=input("Combien votre Biokemon a de PV ? ")
    Level=input("Quel est le level de votre Biokemon ? ")


    pokemon=[name,poketype,PV,Level]
    pokedex.append(pokemon)
    save(pokedex)

def showpokemon():
    kelpokemon=raw_input("Quel est le nom de votre Biokemon ? ")
    i=0
    while i < len(pokedex):
        poketest=pokedex[i][0]
        if poketest==kelpokemon:
            print "\n Le Biokemon se nomme ",pokedex[i][0]
            print " Il est de type ",pokedex[i][1]
            print " Il a ",pokedex[i][2]," PV"
            print " Il est level ",pokedex[i][3]
        i+=1



def moypv(somme):
    i=0
    while i < len(pokedex):
        somme=somme+pokedex[i][2]
        i+=1
    moyenne=somme/len(pokedex)
    print "Les Biokemons ont en moyenne: ",moyenne," PV"


def uppv():
    audsusde=input("Afficher les Biokemons au dessus de combien de PV ? ")
    i=0
    print ""
    while i < len(pokedex):
        if pokedex[i][2] >= audsusde:
            print "- ",pokedex[i][0]
        i+=1


def samepokemon():
    typecherche=raw_input("Vous cherchez quel type de Biokemon ? ")
    i=0
    print ""
    while i < len(pokedex):
        if pokedex[i][1] == typecherche:
            print "- ",pokedex[i][0]
        i+=1


def levelup():
    wichpoke=raw_input("Vous voulez augmentez le niveau de quel Biokemon ? ")
    howmany=input("Combien prend-il de niveau ? ")
    i=0
    while i < len(pokedex):
        if pokedex[i][0] == wichpoke:
            pokedex[i][3]+=howmany
            print pokedex[i][1],"est maintenant level ",pokedex[i][3]
        i+=1

def exit():
    sys.exit()

def oncontinue():
    ouiounon=raw_input("\nVoulez vous continuer ? (O|N) ")
    ouiounon=ouiounon.upper()
    if ouiounon=="N":
        sys.exit()

def starter():
    with open('biokemon.txt') as inputfile:
        for row in csv.reader(inputfile):
            pokedex.append(row)

def fillListATK():
    for i in range(1,5): #on choisit 4 attaques
        attaque=raw_input("Nommer votre attaque: ")
        listeATK.append(attaque)
    print "1: ",listeATK[0],"          2: ",listeATK[1],"\n3: ",listeATK[2],"          4: ",listeATK[3]

def chooseATK(listeATK):
    ATK=input("Quelle attaque utiliser ? (1,2,3,4)\n")
    print pokedex[0][0]," utilise l'attaque",listeATK[ATK-1]," !"

def randomDMG():
    DMG=random.randint(1,5)
    print "Votre attaque fait ",DMG ,"degats !"



def menu():
    print menus
    choix=input("Sélectionnez une option: ")
    if (choix==0):
        addpokemon(pokedex)
    if (choix==1):
        showpokemon()
    if (choix==2):
        moypv(somme)
    if (choix==3):
        uppv()
    if (choix==4):
        samepokemon()
    if (choix==5):
        levelup()
    if (choix==6):
        fillListATK()
        chooseATK(listeATK)
        randomDMG()
    if (choix ==7):
        exit()






def GUI():
    root = Tk()
    img = PhotoImage(file="pokedex.png")

    panel = Label(root, image = img)
    panel.pack(side = "bottom", fill = "both", expand = "yes")
    root.mainloop()

menus="""
\n
  ██████╗ ██╗ ██████╗ ██╗  ██╗███████╗██████╗ ███████╗██╗  ██╗
  ██╔══██╗██║██╔═══██╗██║ ██╔╝██╔════╝██╔══██╗██╔════╝╚██╗██╔╝
  ██████╔╝██║██║   ██║█████╔╝ █████╗  ██║  ██║█████╗   ╚███╔╝
  ██╔══██╗██║██║   ██║██╔═██╗ ██╔══╝  ██║  ██║██╔══╝   ██╔██╗
  ██████╔╝██║╚██████╔╝██║  ██╗███████╗██████╔╝███████╗██╔╝ ██╗
  ╚═════╝ ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝ ╚══════╝╚═╝  ╚═╝
 \n  ----------------------------------------------------------
 |----------------------------------------------------------|
 | [0]: Ajouter un Biokemon                                 |
 | [1]: Afficher un Biokemon                                |
 | [2]: PV moyen des Biokemons                              |
 | [3]: Biokemons au dessus d'un certain seuil de PV        |
 | [4]: Afficher les Biokemons qui ont un certains type     |
 | [5]: Monter le niveau d'un Biokemon                      |
 | [6]: Combattre                                           |
 | [7]: Exit                                                |
 |----------------------------------------------------------|
  ----------------------------------------------------------
  ------------------------------------------------------------
 | \\                                                          \\
  \\ \\                                                          \\
   \\ \\                                                          \\
    \\ \\                                                          \\
     \\ \\                                                          \\
      \\ \\                                                          \\
       \\ \\__________________________________________________________\\
        \\|___________________________________________________________|
"""










pokedex=[]
listeATK=[]
somme=0
continuer=True

while continuer:
    starter()
    menu()
    oncontinue()
