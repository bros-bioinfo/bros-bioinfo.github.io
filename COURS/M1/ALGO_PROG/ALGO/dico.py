#!/usr/bin/env python
# coding: utf-8


def creer_pile():
    return[]


def creer_dictionnaire():
    index=0
    dico1 = creer_pile()
    empiler(dico1,index)
    return dico1


def empiler(pile, element):
    pile.append(element)


def depiler(pile):
    return pile.pop()

def inserer_association ( D,  cle ,  valeur  ):
    index=depiler(D)
    P2=creer_pile()
    i=0
    indexP2=0
    while i < index: #on dépile tout le dico dans une pile P2
        valeurlue=depiler(D)
        clelue=depiler(D)
        if clelue!=cle: #on empile pas la clé dans P2 si elle correspond à la nouvelle clé (on la supprime)
            empiler(P2,clelue)
            empiler(P2,valeurlue)
            indexP2=indexP2+1
        i+=1

    j=0
    while j < indexP2: #on enpile tout P2 dans le dico
        valeurP2=depiler(P2)
        cleP2=depiler(P2)
        empiler(D,cleP2)
        empiler(D,valeurP2)
        j=j+1

    if indexP2==index:
        # si dans P2 il y a eu autant d'élément que dans le dico c'est qu'il n'y a pas eu de remplacement de valeur dans une clé
        # donc la clé est bien une nouvelle clé il faut incrémenter l'index
        index=index+1

    empiler(D,cle)
    empiler(D,valeur)
    empiler(D,index)

def supprimer_association ( D,  cle ) :
    index=depiler(D)
    P2=creer_pile()
    i=0
    indexP2=0
    while i < index: #on dépile tout le dico dans une pile P2
        valeurlue=depiler(D)
        clelue=depiler(D)
        if clelue!=cle: #on empile pas la clé dans P2 si elle correspond à la nouvelle clé (on la supprime)
            empiler(P2,clelue)
            empiler(P2,valeurlue)
            indexP2=indexP2+1
        i+=1

    j=0
    while j < indexP2: #on enpile tout P2 dans le dico
        valeurP2=depiler(P2)
        cleP2=depiler(P2)
        empiler(D,cleP2)
        empiler(D,valeurP2)
        j=j+1

    index=index-1
    empiler(D,index)


def appartient_au_dictionnaire ( D,  cle ) :
    index=depiler(D)
    P2=creer_pile()
    i=0
    indexP2=0
    detected=0
    while i < index: #on dépile tout le dico dans une pile P2
        valeurlue=depiler(D)
        clelue=depiler(D)
        if clelue==cle:
            detected=1
        empiler(P2,clelue)
        empiler(P2,valeurlue)
        indexP2=indexP2+1
        i+=1

    j=0
    while j < indexP2: #on enpile tout P2 dans le dico
        valeurP2=depiler(P2)
        cleP2=depiler(P2)
        empiler(D,cleP2)
        empiler(D,valeurP2)
        j=j+1

    if detected > 0:
        renvoie=True
    else:
        renvoie=False


    empiler(D,index)
    return renvoie



def obtenir_valeur ( D,  cle ) :
    index=depiler(D)
    P2=creer_pile()
    i=0
    indexP2=0
    renvoie="La clé n'existe pas"
    while i < index: #on dépile tout le dico dans une pile P2
        valeurlue=depiler(D)
        clelue=depiler(D)
        if clelue==cle:
            renvoie=valeurlue
        empiler(P2,clelue)
        empiler(P2,valeurlue)
        indexP2=indexP2+1
        i+=1

    j=0
    while j < indexP2: #on enpile tout P2 dans le dico
        valeurP2=depiler(P2)
        cleP2=depiler(P2)
        empiler(D,cleP2)
        empiler(D,valeurP2)
        j=j+1

    empiler(D,index)
    return renvoie


D = creer_dictionnaire()
e = "COUCOU"
inserer_association(D,"test",2)
inserer_association(D,"autretest",9)
print D
inserer_association(D,"autretest",5)
inserer_association(D,"test2",15)
inserer_association(D,"test3","BONJOUR")

print D
supprimer_association(D,"test2")
print D

test=appartient_au_dictionnaire(D,"test3")
print test

valeur=obtenir_valeur(D,"test3")
print valeur
