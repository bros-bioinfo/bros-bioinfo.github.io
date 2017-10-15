def fillListEnz(nb): #créer la liste contenant le nom des enzymes
    for enz in range(nb):
      listenz.append(raw_input("Entrez le nom de vos enzymes:"))

def fillListPoids(nb): #créer la liste contenant la valeur des poids moléculaires
    for poids in range(nb):
      listpoids.append(input("Entrez vos poids moleculaires:"))

def displayResultEnz(listenz): #affiche chaque nom d'enzyme présent dans la liste
    for i in range(len(listenz)):
      print listenz[i]

def displayResultPoids(listenz): #affiche chaque valeur de poids moleculaires de la liste
    for i in range(len(listenz)):
      print listpoids[i]

def findMaxi(maxi,listpoids): #détermine la valeur maximale des poids moléculaires et l'affiche
    for i in range(len(listpoids)):
        if maxi < listpoids[i]:
            maxi=listpoids[i]
    print "Le poids le plus eleve est de :",maxi

def poidsMoy(moypoids): #determine le poids moleculaire moyen des enzymes et donne quelles enzymes ont un poids supérieur à la moyenne
    moypoids = sum(listpoids)/len(listpoids)
    for i in range(len(listpoids)):
        if listpoids[i] > moypoids:
            print listenz[i],"a un poids moleculaire superieur a la moyenne !"
    print "Le poids moleculaire moyen est de :",moypoids


#MAIN:

import sys
print "Combien de poids et d'enzymes voulez-vous saisir ?"
nb = input()
listenz = []
listpoids = []
maxi=0
moypoids=0

print '''
\n----------------------------------------------------------\n
                    [MENU]\n
[0]Fermer le programme
[1]Afficher les donnees relatives aux enzymes
[2]Afficher les donnees relatives aux poids moleculaires
[3]Tout afficher
\n---------------------------------------------------------\n
'''
choix = input("Quel est votre choix? ")

if choix == 0:
    print "Au revoir!"
    sys.exit(0)

if choix == 1:
    fillListEnz(nb)
    displayResultEnz(listenz)

if choix == 2:
    fillListPoids(nb)
    displayResultPoids(listpoids)

if choix == 3:
    fillListEnz(nb)
    fillListPoids(nb)
    displayResultEnz(listenz)
    displayResultPoids(listpoids)
    findMaxi(maxi,listpoids)
    poidsMoy(moypoids)
