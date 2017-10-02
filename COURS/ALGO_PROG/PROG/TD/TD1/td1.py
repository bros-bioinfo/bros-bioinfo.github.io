#!/usr/bin/env python
# -*- coding: utf-8 -*-

25*12 #return 300
12.4 -3 #return 9.4
11/4 #return 2
11.0/4 #return 2.75

i=3
 #return 3

i=i+2
 #return 5

j = 0
 #return 0

print "*Programme Horaire*\n"
print """
       _..._
      |_____|
      |_____|
      |_____|
      |_____|
      |_____|
     / _____ |
     ||  '  ||
     ||  |  ||
     ||- | -||)
     ||   \ ||
     ||__.__||
     \_______/
      |_____|
      |_____|
      |_____|
      |_____|
      |_   _|
        ```
"""
print "\nDonnez l'heure de début de l'experience"
print "------------------------------------------\n"

debut = input()
print "\nL'heure de début selectionnée est: ",debut,"H\n"

print "\nDites à quelle minute s'il vous plait:"
print "----------------------------------------\n"
debutmin = input()

print "\nLes minutes selectionnées sont: ",debutmin,"m\n"

print "\nCombien de minutes dure votre expérience ? :"
print "----------------------------------------------\n"
duree = input()
minrest = (debutmin+duree)%60
heure = duree/60

fin = debut + heure
jour = 0
if fin > 23:
    jour = fin/24
    fin = fin % 24
print "\nL'expérience finira au",jour,"°jour à",fin,"Heures et",minrest,"minutes."
