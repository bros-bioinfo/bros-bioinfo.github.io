#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys
import tkinter
from Tkinter import *
import os
import Image
import csv
import random
from pick import pick
from pick import Picker
import time

def addIA(listeIA):
    os.system('clear')
    print """
  -._    _.--'"`'--._    _.--'"`'--._    _.--'"`'--._    _
      '-:`.'|`|"':-.  '-:`.'|`|"':-.  '-:`.'|`|"':-.  '.` :
    '.  '.  | |  | |'.  '.  | |  | |'.  '.  | |  | |'.  '.:
      '.  '.| |  | |  '.  '.| |  | |  '.  '.| |  | |  '.  '
        '.  `.:_ | :_.' '.  `.:_ | :_.' '.  `.:_ | :_.' '.
           `-..,..-'       `-..,..-'       `-..,..-'

    """
    name=raw_input("  Quel est le nom de votre PNJ ? ")
    name=name.upper()
    IAtype=raw_input("  Quel est le type de votre PNJ ? ")
    IAtype=IAtype.upper()
    PV=input("  Combien votre PNJ a de PV ? ")
    Level=input("  Quel est le level de votre PNJ ? ")
    Attaque1=raw_input("  Entrez le nom de la premiere attaque:  ")
    Attaque1=Attaque1.upper()
    Attaque2=raw_input("  Entrez le nom de la premiere attaque:  ")
    Attaque2=Attaque2.upper()
    Attaque3=raw_input("  Entrez le nom de la premiere attaque:  ")
    Attaque3=Attaque3.upper()
    Attaque4=raw_input("  Entrez le nom de la premiere attaque:  ")
    Attaque4=Attaque4.upper()

    IA=[name,IAtype,PV,Level,Attaque1,Attaque2,Attaque3,Attaque4]
    listeIA.append(IA)
    save1(listeIA)



def selecte(pokedex):
    csvfile = open("biokemon.txt","r")
    starter1()
    print "\n"
    names=[]
    for j in range(len(pokedex)):
        names.append(pokedex[j][0])

    selector="Entrez le nom du biokemon que vous voulez utiliser: "
    option=names
    option, index= pick(option, selector, indicator=' >')
    os.system('clear')
    print "Vous avez choisi ",option
    k=index
    return k

def fight(pokedex,player):
    k=int(player)
    csvfile2=open("biokeIA.txt","r")
    starter2()
    IA=random.randint(0,len(listeIA)-1)
    print "Vous entrez en duel avec",listeIA[IA][0]
    print "\n"
    atk="Quelle attaque voulez-vous utiliser ?"
    option=[pokedex[k][4],pokedex[k][5],pokedex[k][6],pokedex[k][7]]
    option, index= pick(option, atk, indicator=' >')
    os.system('clear')
    print pokedex[k][0], "lance ", pokedex[k][index+4]
    if index+4 == 4:
        dmg=random.randint(10,20)
        print listeIA[IA][0]," prends ",dmg," degats !"
    if index+4 == 5:
        dmg=random.randint(10,15)
        print listeIA[IA][0]," prends ",dmg," degats !"
    if index+4 == 6:
        dmg=random.randint(5,10)
        print listeIA[IA][0]," prends ",dmg," degats !"
    if index+4 == 7:
        dmg=random.randint(1,5)
        print listeIA[IA][0]," prends ",dmg," degats !"
    print "\n"
    PV=int(listeIA[IA][2])-dmg
    print "Il reste ",PV," a ",listeIA[IA][0]," !"

    ATK=random.randint(4,7)
    print listeIA[IA][0]," lance l'attaque ",listeIA[IA][ATK]," !"
    DMG2=random.randint(1,10)
    print listeIA[IA][0]," fait ",DMG2 ,"degats !"





def starter1():
    with open('biokemon.txt') as inputfile:
        if not pokedex:
            for row in csv.reader(inputfile):
                pokedex.append(row)

def starter2():
    with open('biokeIA.txt') as inputfile:
        if not listeIA:
            for row in csv.reader(inputfile):
                listeIA.append(row)
def save1(pokedex):
    os.system('clear')
    csvfile = "biokeIA.txt"
    #Assuming res is a list of lists
    with open(csvfile, "a") as output:
        writer = csv.writer(output, lineterminator='\n')
        writer.writerows(pokedex)



#MAIN
k=0
select=0
IA=0
pokedex=[]
listeIA=[]
