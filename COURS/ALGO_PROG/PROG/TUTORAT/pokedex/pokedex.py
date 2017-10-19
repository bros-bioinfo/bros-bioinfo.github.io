#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sys
import tkinter
import os
import Image
import csv
import random
from pick import pick
from pick import Picker
import time

def save(pokedex):
    os.system('clear')
    csvfile = "biokemon.txt"
    #Assuming res is a list of lists
    with open(csvfile, "w") as output:
        writer = csv.writer(output, lineterminator='\n')
        writer.writerows(pokedex)


def addpokemon(pokedex):
    os.system('clear')
    print pokedex
    name=raw_input("Quel est le nom de votre Biokemon ? ")
    poketype=raw_input("Quel est le type de votre Biokemon ? ")
    PV=input("Combien votre Biokemon a de PV ? ")
    Level=input("Quel est le level de votre Biokemon ? ")
    Attaque1=input("Quelle est la valeur d'attaque de votre Biokemon ? ")
    Attaque2=input("Quelle est la valeur d'attaque de votre Biokemon ? ")
    Attaque3=input("Quelle est la valeur d'attaque de votre Biokemon ? ")
    Attaque4=input("Quelle est la valeur d'attaque de votre Biokemon ? ")

    pokemon=[name,poketype,PV,Level,Attaque1,Attaque2,Attaque3,Attaque4]
    pokedex.append(pokemon)
    save(pokedex)

def showpokemon():
    os.system('clear')
    kelpokemon=raw_input("Quel est le nom de votre Biokemon ? ")
    i=0
    while i < len(pokedex):
        poketest=pokedex[i][0]
        if poketest==kelpokemon:
            print "\n Le Biokemon se nomme",pokedex[i][0]
            print " Il est de type",pokedex[i][1]
            print " Il a",pokedex[i][2]," PV"
            print " Il est level",pokedex[i][3]
            print " Sa première attaque  est:    ",pokedex[i][4]
            print " Sa deuxième attaque  est:    ",pokedex[i][5]
            print " Sa troisième attaque est:    ",pokedex[i][6]
            print " Sa quatrième attaque est:    ",pokedex[i][7]

        i+=1



def moypv(somme):
    os.system('clear')
    i=0
    while i < len(pokedex):
        somme=somme+pokedex[i][2]
        i+=1
    moyenne=somme/len(pokedex)
    print "Les Biokemons ont en moyenne: ",moyenne," PV"


def uppv():
    os.system('clear')
    audsusde=input("Afficher les Biokemons au dessus de combien de PV ? ")
    i=0
    print ""
    while i < len(pokedex):
        if pokedex[i][2] >= audsusde:
            print "- ",pokedex[i][0]
        i+=1


def samepokemon():
    os.system('clear')
    typecherche=raw_input("Vous cherchez quel type de Biokemon ? ")
    i=0
    print ""
    while i < len(pokedex):
        if pokedex[i][1] == typecherche:
            print "- ",pokedex[i][0]
        i+=1


def levelup():
    os.system('clear')
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
    ouiounon=raw_input("\n Voulez vous continuer ? (O|N) ")
    ouiounon=ouiounon.upper()
    if ouiounon=="N":
        sys.exit()

def starter():
    os.system('clear')
    with open('biokemon.txt') as inputfile:
        for row in csv.reader(inputfile):
            pokedex.append(row)

    print """
 ____ _  _ ____ ____ ____ ____ _  _ ____ _  _ ___    ___  ____    _    ____
 |    |__| |__| |__/ | __ |___ |\/| |___ |\ |  |     |  \ |___    |    |__|
 |___ |  | |  | |  \ |__] |___ |  | |___ | \|  |     |__/ |___    |___ |  |

 ____ ____ _  _ _  _ ____ ____ ____ ____ ___  ____
 [__  |__| |  | |  | |___ | __ |__| |__/ |  \ |___
 ___] |  | |__|  \/  |___ |__] |  | |  \ |__/ |___ ...

 .---------------------------------.
 |  .---------------------------.  |
 |[]|                           |[]|
 |  |                           |  |
 |  |                           |  |
 |  |                           |  |
 |  |                           |  |
 |  |                           |  |
 |  |                           |  |
 |  |                           |  |
 |  |                           |  |
 |  `---------------------------'  |
 |      __________________ _____   |
 |     |   ___            |     |  |
 |     |  |   |           |     |  |
 |     |  |   |           |     |  |
 |     |  |   |           |     |  |
 |     |  |___|           |     |  |
 \_____|__________________|_____|__|
    """
    time.sleep(1)

def fillListATK():
    os.system('clear')
    for i in range(1,5): #on choisit 4 attaques
        attaque=raw_input("\n Nommer votre attaque: ")
        listeATK.append(attaque)
    print "1: ",listeATK[0],"          2: ",listeATK[1],"\n3: ",listeATK[2],"          4: ",listeATK[3]

def chooseATK(listeATK):
    ATK=input("\n Quelle attaque utiliser ? (1,2,3,4)\n")
    print pokedex[0][0]," utilise l'attaque",listeATK[ATK-1]," !"

def randomDMG():
    DMG=random.randint(1,5)
    print "\n Votre attaque fait ",DMG ,"degats !"


############################"MENU HERE"##########################
def menu():
    os.system('clear')
    options = [     '┃   Ajouter un Biokemon                                       ┃',     '┃   Afficher un Biokemon                                      ┃',     '┃   PV moyen des Biokemons                                    ┃',     "┃   Biokemons au dessus d'un certain seuil de PV              ┃",     '┃   Afficher les Biokemons qui ont un certains type           ┃',     "┃   Monter le niveau d'un Biokemon                            ┃",     '┃   Combattre                                                 ┃',     '┃   Exit                                                      ┃']
    option, index= pick(options, menus, indicator=' >')

#choix=input("Sélectionnez une option: ")
    if (index==0):
        addpokemon(pokedex)
    if (index==1):
        showpokemon()
    if (index==2):
        moypv(somme)
    if (index==3):
        uppv()
    if (index==4):
        samepokemon()
    if (index==5):
        levelup()
    if (index==6):
        fillListATK()
        chooseATK(listeATK)
        randomDMG()
    if (index ==7):
        exit()







######################"END MENU"######################

menus="""
   ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
  ╭--------------------------------------------------------------╮
  ┃                                                              ┃
  ┃ ██████╗ ██╗ ██████╗ ██╗  ██╗███████╗██████╗ ███████╗██╗  ██╗ ┃
  ┃ ██╔══██╗██║██╔═══██╗██║ ██╔╝██╔════╝██╔══██╗██╔════╝╚██╗██╔╝ ┃
  ┃ ██████╔╝██║██║   ██║█████╔╝ █████╗  ██║  ██║█████╗   ╚███╔╝  ┃
  ┃ ██╔══██╗██║██║   ██║██╔═██╗ ██╔══╝  ██║  ██║██╔══╝   ██╔██╗  ┃
  ┃ ██████╔╝██║╚██████╔╝██║  ██╗███████╗██████╔╝███████╗██╔╝ ██╗ ┃
  ┃ ╚═════╝ ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝ ╚══════╝╚═╝  ╚═╝ ┃
  ┃      __                                                      ┃
  ┃   __|  |__                        _____     _____            ┃
  ┃  |__    __|                      |  A  |   |  B  |           ┃
  ┃     |__|                         |_____|   |_____|           ┃
  ┃                                                              ┃
  ╰--------------------------------------------------------------╯
  ╰--------------------------------------------------------------╯
 /                                                                \\
"""



pokedex=[]
listeATK=[]
somme=0
continuer=True

starter()
while continuer:
    menu()
    oncontinue()
