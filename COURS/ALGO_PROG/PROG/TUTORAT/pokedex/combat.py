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

    listeIA=[]
    IAname=[]
    IAname.append(raw_input("Comment s'appelle l'IA que vous voulez ajouter ?\n "))
    IAtype=raw_input("Quel est le type de votre IA ? ")
    IAname.append(IAtype)
    IALifePoints=input("Combien votre IA a de PV ? ")
    IAname.append(IALifePoints)
    IALevel=input("Quel est le level de votre IA ? ")
    IAname.append(IALevel)
    ATK1=raw_input("Quel est le nom de sa premiere attaque ? ")
    IAname.append(ATK1)
    ATK2=raw_input("Quel est le nom de sa deuxieme attaque ? ")
    IAname.append(ATK2)
    ATK3=raw_input("Quel est le nom de sa troiseme attaque ? ")
    IAname.append(ATK3)
    ATK4=raw_input("Quel est le nom de sa quatrieme attaque ? ")
    IAname.append(ATK4)
    listeIA.append(IAname)
    save(listeIA)



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
def save(listeIA):
    csvfile = open("biokeIA.txt","r")
    #Assuming res is a list of lists
    with open(csvfile, "a") as output:
        writer = csv.writer(output, lineterminator='\n')
        writer.writerows(listeIA)



#MAIN
k=0
select=0
IA=0
pokedex=[]
listeIA=[]
