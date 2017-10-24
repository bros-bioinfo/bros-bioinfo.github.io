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
from draw import *

def echec():
    print """
            ███████╗ ██████╗██╗  ██╗███████╗ ██████╗     ██████╗██████╗ ██╗████████╗██╗ ██████╗ ██╗   ██╗███████╗    ██╗
            ██╔════╝██╔════╝██║  ██║██╔════╝██╔════╝    ██╔════╝██╔══██╗██║╚══██╔══╝██║██╔═══██╗██║   ██║██╔════╝    ██║
            █████╗  ██║     ███████║█████╗  ██║         ██║     ██████╔╝██║   ██║   ██║██║   ██║██║   ██║█████╗      ██║
            ██╔══╝  ██║     ██╔══██║██╔══╝  ██║         ██║     ██╔══██╗██║   ██║   ██║██║▄▄ ██║██║   ██║██╔══╝      ╚═╝
            ███████╗╚██████╗██║  ██║███████╗╚██████╗    ╚██████╗██║  ██║██║   ██║   ██║╚██████╔╝╚██████╔╝███████╗    ██╗
            ╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝ ╚═════╝     ╚═════╝╚═╝  ╚═╝╚═╝   ╚═╝   ╚═╝ ╚══▀▀═╝  ╚═════╝ ╚══════╝    ╚═╝
"""
def pause():
    raw_input("\n   █ Appuyez sur ENTER pour continuer █")

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

    animcombat()

    k=int(player)
    csvfile2=open("biokeIA.txt","r")
    starter2()
    IA=random.randint(0,len(listeIA)-1)
    print "\n  Vous entrez en duel contre",listeIA[IA][0],"\n\n"

    #BARRES HP + PERSO (PAS TROUVE POUR METTRE DANS DEF A CAUSE DES PV)
    pvbarre=int(listeIA[IA][2])
    pvbarremanquant=50-pvbarre
    pvbarrejoueur=int(pokedex[k][2])
    pvbarremanquantjoueur=50-pvbarrejoueur
    print "\n\n"
    print "       "+str(pvbarre) +"/50"+"   "+ '█' * pvbarre +'░'*pvbarremanquant+" : HP |      " +listeIA[IA][0]
    versus()
    print "\n                                                 "+pokedex[k][0]+"      | HP: " + '█' * pvbarrejoueur +'░'*pvbarremanquantjoueur +"   "+str(pvbarrejoueur) +"/50"
    pause()
    # FIN HP + PERSO ANIMATION

    PV=int(listeIA[IA][2])
    PV2=int(pokedex[k][2])
    CP1=2
    CP2=4
    CP3=6
    CP4=20
    choice=0
    while (PV > 0 and PV2 >0) :
        #partie fight JOUEUR
        atk="\n     Quelle attaque voulez-vous utiliser ?\n"
        attaque1="CP: "+str(CP1)+"/2     | "+pokedex[k][4]
        attaque2="CP: "+str(CP2)+"/4     | "+pokedex[k][5]
        attaque3="CP: "+str(CP3)+"/6     | "+pokedex[k][6]
        attaque4="CP: "+str(CP4)+"/20   | "+pokedex[k][7]
        option=[attaque1,attaque2,attaque3,attaque4]
        option, index= pick(option,atk, indicator=' >')
        #choice=getpass.getpass("")
        #choice=int(choice)
        choice=index+1
        while (CP1 == 0 and choice+3 == 4) or (CP2 == 0 and choice+3 == 5) or (CP3 == 0 and choice+3 == 6) or (CP4 == 0 and choice+3 == 7):
            print "     Il vous faut choisir une autre attaque, vous n'avez plus assez de CP !!\n"
            time.sleep(2)
            os.system('clear')
            atk="\nQuelle attaque voulez-vous utiliser ?\n"
            attaque1="CP: "+str(CP1)+"/2     | "+pokedex[k][4]
            attaque2="CP: "+str(CP2)+"/4     | "+pokedex[k][5]
            attaque3="CP: "+str(CP3)+"/6     | "+pokedex[k][6]
            attaque4="CP: "+str(CP4)+"/20   | "+pokedex[k][7]
            option=[attaque1,attaque2,attaque3,attaque4]
            option, index= pick(option,atk, indicator=' >')
            #choice=getpass.getpass("")
            #choice=int(choice)
            choice=index+1
        atk=pokedex[k][choice+3]

        #BARRES HP + PERSO (PAS TROUVE POUR METTRE DANS DEF A CAUSE DES PV)
        os.system('clear')
        pvbarre=PV
        pvbarremanquant=50-pvbarre
        pvbarrejoueur=PV2
        pvbarremanquantjoueur=50-pvbarrejoueur
        print "\n\n"
        print "       "+str(pvbarre) +"/50"+"   "+ '█' * pvbarre +'░'*pvbarremanquant+" : HP |      " +listeIA[IA][0]
        versus()
        print "\n                                                 "+pokedex[k][0]+"      | HP: " + '█' * pvbarrejoueur +'░'*pvbarremanquantjoueur +"   "+str(pvbarrejoueur) +"/50"
        # FIN HP + PERSO ANIMATION


        print "\n\n\n      ",pokedex[k][0], "lance ", atk," ! \n"
        time.sleep(2)
        os.system('clear')
        if choice+3 == 4:
            CP1 -= 1
            dmg=random.randint(9,15)
            if dmg == 9:
                dmg=0
                echec()
                time.sleep(2)
            PV=PV-dmg
        if choice+3 == 5:
            CP2 -= 1
            dmg=random.randint(6,12)
            if dmg == 6:
                dmg=0
                echec()
                time.sleep(2)
            PV=PV-dmg
        if choice+3 == 6:
            CP3 -= 1
            dmg=random.randint(4,9)
            PV=PV-dmg
            if dmg == 4:
                dmg=0
                echec()
                time.sleep(2)
            PV=PV-dmg
        if choice+3 == 7:
            CP4 -= 1
            dmg=random.randint(0,5)
            PV=PV-dmg
            if dmg == 0:
                echec()
                time.sleep(2)
            PV=PV-dmg

        #BARRES HP + PERSO (PAS TROUVE POUR METTRE DANS DEF A CAUSE DES PV)
        os.system('clear')
        pvbarre=PV
        pvbarremanquant=50-pvbarre
        pvbarrejoueur=PV2
        pvbarremanquantjoueur=50-pvbarrejoueur
        print "\n\n"
        print "       "+str(pvbarre) +"/50"+"   "+ '█' * pvbarre +'░'*pvbarremanquant+" : HP |      " +listeIA[IA][0]
        versus()
        print "\n                                                 "+pokedex[k][0]+"      | HP: " + '█' * pvbarrejoueur +'░'*pvbarremanquantjoueur +"   "+str(pvbarrejoueur) +"/50"
        # FIN HP + PERSO ANIMATION

        print "\n\n"
        print "     ",listeIA[IA][0]," prends ",dmg," degats !"
        if PV <= 0:
            print "     ",listeIA[IA][0]," est au tapis !"
        if PV <0:
            print "     ",pokedex[k][0], " a gagne son du-du-du-duueeeeel !"
            print """

            ██╗   ██╗██╗ ██████╗████████╗ ██████╗ ██████╗ ██╗   ██╗
            ██║   ██║██║██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗╚██╗ ██╔╝
            ██║   ██║██║██║        ██║   ██║   ██║██████╔╝ ╚████╔╝
            ╚██╗ ██╔╝██║██║        ██║   ██║   ██║██╔══██╗  ╚██╔╝
             ╚████╔╝ ██║╚██████╗   ██║   ╚██████╔╝██║  ██║   ██║
              ╚═══╝  ╚═╝ ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝   ╚═╝

  """
        else:
            pause()
            os.system('clear')

        #partie fight IA
        if PV > 0:

            #BARRES HP + PERSO (PAS TROUVE POUR METTRE DANS DEF A CAUSE DES PV)
            os.system('clear')
            pvbarre=PV
            pvbarremanquant=50-pvbarre
            pvbarrejoueur=PV2
            pvbarremanquantjoueur=50-pvbarrejoueur
            print "\n\n"
            print "       "+str(pvbarre) +"/50"+"   "+ '█' * pvbarre +'░'*pvbarremanquant+" : HP |      " +listeIA[IA][0]
            versus()
            print "\n                                                 "+pokedex[k][0]+"      | HP: " + '█' * pvbarrejoueur +'░'*pvbarremanquantjoueur +"   "+str(pvbarrejoueur) +"/50"
            # FIN HP + PERSO ANIMATION

            ATK=random.randint(4,7)
            print "\n\n\n       ",listeIA[IA][0]," lance l'attaque ",listeIA[IA][ATK]," !"

            print "\n"
            if ATK == 4:
                DMG2=random.randint(9,15)
                if DMG2 == 9:
                    DMG2=0
                    os.system('clear')
                    echec()
                    time.sleep(2)
                PV2=PV2-DMG2
            if ATK == 5:
                DMG2=random.randint(6,12)
                if DMG2 == 6:
                    DMG2=0
                    os.system('clear')
                    echec()
                    time.sleep(2)
                PV2=PV2-DMG2
            if ATK == 6:
                DMG2=random.randint(4,9)
                if DMG2 == 4:
                    DMG2=0
                    os.system('clear')
                    echec()
                    time.sleep(2)
                PV2=PV2-DMG2
            if ATK == 7:
                DMG2=random.randint(0,5)
                if DMG2 == 0:
                    os.system('clear')
                    echec()
                    time.sleep(2)
                PV2=PV2-DMG2
            time.sleep(2)
            os.system('clear')

            #BARRES HP + PERSO (PAS TROUVE POUR METTRE DANS DEF A CAUSE DES PV)
            os.system('clear')
            pvbarre=PV
            pvbarremanquant=50-pvbarre
            pvbarrejoueur=PV2
            pvbarremanquantjoueur=50-pvbarrejoueur
            print "\n\n"
            print "       "+str(pvbarre) +"/50"+"   "+ '█' * pvbarre +'░'*pvbarremanquant+" : HP |      " +listeIA[IA][0]
            versus()
            print "\n                                                 "+pokedex[k][0]+"      | HP: " + '█' * pvbarrejoueur +'░'*pvbarremanquantjoueur +"   "+str(pvbarrejoueur) +"/50"
            # FIN HP + PERSO ANIMATION

            print "\n\n     ",pokedex[k][0]," prends ",DMG2," degats !"
            if PV2 <= 0:
                print "     ",pokedex[k][0]," est au tapis !"
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
                """
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
