#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys
import os
import csv
import random
import getpass #permet de cacher l'input :)
from pick import pick
from pick import Picker
import time
from Tkinter import *

def pause():
    paused=""
    while paused != "A":
        paused=getpass.getpass("\nPause : appuyer sur A+ENTER pour continuer le combat\n")
        paused=paused.upper()
        if pause != "A":
            print "Allez, un petit effort, c'est pas si dur de trouver cette touche..."

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
    print "Vous entrez en duel contre",listeIA[IA][0]," !!\nPrepare your anus !\n"
    PV=int(listeIA[IA][2])
    PV2=int(pokedex[k][2])
    CP1=2
    CP2=4
    CP3=6
    CP4=20
    choice=0
    while (PV > 0 and PV2 >0) :
        #partie fight JOUEUR
        print "\nQuelle attaque voulez-vous utiliser ?\n"
        print "1: ",pokedex[k][4]," CP: ",CP1,"/2","\n"
        print "2: ",pokedex[k][5]," CP: ",CP2,"/4","\n"
        print "3: ",pokedex[k][6]," CP: ",CP3,"/6","\n"
        print "4: ",pokedex[k][7]," CP: ",CP4,"/20","\n"
        choice=getpass.getpass("")
        choice=int(choice)
        while (CP1 == 0 and choice+3 == 4) or (CP2 == 0 and choice+3 == 5) or (CP3 == 0 and choice+3 == 6) or (CP4 == 0 and choice+3 == 7):
            choice=getpass.getpass("Il vous faut choisir une autre attaque, vous n'avez plus assez de CP !!\n")
            choice=int(choice)
        atk=pokedex[k][choice+3]
        os.system('clear')
        print pokedex[k][0], "lance ", atk,"\n"
        if choice+3 == 4:
            CP1 -= 1
            dmg=random.randint(0,20)
            PV=PV-dmg
            if dmg == 0:
                print "ECHEC CRITIQUE !"
        if choice+3 == 5:
            CP2 -= 1
            dmg=random.randint(0,15)
            PV=PV-dmg
            if dmg == 0:
                print "ECHEC CRITIQUE !"
        if choice+3 == 6:
            CP3 -= 1
            dmg=random.randint(0,10)
            PV=PV-dmg
            if dmg == 0:
                print "ECHEC CRITIQUE !"
        if choice+3 == 7:
            CP4 -= 1
            dmg=random.randint(0,6)
            PV=PV-dmg
            if dmg == 0:
                print "ECHEC CRITIQUE !"

        print listeIA[IA][0]," prends ",dmg," degats !"
        if PV <= 0:
            print listeIA[IA][0]," est au tapis !"
        else:
            print "Il reste ",PV," PV a ",listeIA[IA][0]," !\n"
        if PV <0:
            print pokedex[k][0], " a gagne son du-du-du-duueeeeel !"
        else:
            pause()
            os.system('clear')

        #partie fight IA
        if PV > 0:
            ATK=random.randint(4,7)
            print listeIA[IA][0]," lance l'attaque ",listeIA[IA][ATK]," !"
            print "\n"
            if ATK == 4:
                DMG2=random.randint(0,20)
                PV2=PV2-DMG2
                if DMG2 == 0:
                    print "ECHEC CRITIQUE !"
            if ATK == 5:
                DMG2=random.randint(0,15)
                PV2=PV2-DMG2
                if DMG2 == 0:
                    print "ECHEC CRITIQUE !"
            if ATK == 6:
                DMG2=random.randint(0,10)
                PV2=PV2-DMG2
                if DMG2 == 0:
                    print "ECHEC CRITIQUE !"
            if ATK == 7:
                DMG2=random.randint(0,6)
                PV2=PV2-DMG2
                if DMG2 == 0:
                    print "ECHEC CRITIQUE !"
            print pokedex[k][0]," prends ",DMG2," degats !"
            if PV2 <= 0:
                print pokedex[k][0]," est au tapis !"
            else:
                print "Il reste ",PV2," PV a ",pokedex[k][0]," !\n"
            if PV2 <0:
                print pokedex[k][0]," est mort au combat !!\n"
                print """
  ▄████  ▄▄▄       ███▄ ▄███▓▓█████     ▒█████   ██▒   █▓▓█████  ██▀███
 ██▒ ▀█▒▒████▄    ▓██▒▀█▀ ██▒▓█   ▀    ▒██▒  ██▒▓██░   █▒▓█   ▀ ▓██ ▒ ██▒
▒██░▄▄▄░▒██  ▀█▄  ▓██    ▓██░▒███      ▒██░  ██▒ ▓██  █▒░▒███   ▓██ ░▄█ ▒
░▓█  ██▓░██▄▄▄▄██ ▒██    ▒██ ▒▓█  ▄    ▒██   ██░  ▒██ █░░▒▓█  ▄ ▒██▀▀█▄
░▒▓███▀▒ ▓█   ▓██▒▒██▒   ░██▒░▒████▒   ░ ████▓▒░   ▒▀█░  ░▒████▒░██▓ ▒██▒
 ░▒   ▒  ▒▒   ▓▒█░░ ▒░   ░  ░░░ ▒░ ░   ░ ▒░▒░▒░    ░ ▐░  ░░ ▒░ ░░ ▒▓ ░▒▓░
  ░   ░   ▒   ▒▒ ░░  ░      ░ ░ ░  ░     ░ ▒ ▒░    ░ ░░   ░ ░  ░  ░▒ ░ ▒░
░ ░   ░   ░   ▒   ░      ░      ░      ░ ░ ░ ▒       ░░     ░     ░░   ░
      ░       ░  ░       ░      ░  ░       ░ ░        ░     ░  ░   ░
                                                     ░                   """
            else:
                pause()
                os.system('clear')





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
