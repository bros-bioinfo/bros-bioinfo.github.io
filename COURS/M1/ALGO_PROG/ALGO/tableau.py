#!/usr/bin/env python
# coding: utf-8


def creer_pile():
    return[]


def creer_tableau():
    indice = -1
    tableau1 = creer_pile()
    empiler(tableau1, indice)
    return tableau1


def empiler(pile, element):
    pile.append(element)


def depiler(pile):
    return pile.pop()


def inserer_element(T, id, e):
    sommet = depiler(T)
    empiler(T, sommet)
    diff = id - sommet
    if diff <= 0:
        print("Votre indice est deja existant")
        return
    i = 1
    while i < diff:
        # on veut insérer ce qu'il manque donc ce qu'il y a entre les bornes (Ex on a un id de 4 et on veut aller jusqu'à 7 - on insère 5 et 6)
        empiler(T, "vide")
        empiler(T, sommet + i)  # TODO:INCREMENTER DE 1 la nouvelle liste
        i += 1
    empiler(T, e)
    empiler(T, id)


def supprimer_element(T, id):
    P2 = creer_pile()
    sommet = depiler(T)
    compteur = 0
    while sommet != id:
        element = depiler(T)
        empiler(P2, sommet)
        empiler(P2, element)
        sommet = depiler(T)
        compteur = compteur + 1

    depiler(T)  # on vire l'element, l'id etant deja depile
    i = 0
    if P2 != []:
        while i < compteur:
            element = depiler(P2)
            sommet = depiler(P2) - 1
            empiler(T, element)
            empiler(T, sommet)
            i += 1


def remplacer_element(T, id, e):
    P2 = creer_pile()
    sommet = depiler(T)
    compteur = 0
    while sommet != id:
        element = depiler(T)
        empiler(P2, sommet)
        empiler(P2, element)
        sommet = depiler(T)
        compteur = compteur + 1

    depiler(T)  # on vire l'element, l'id etant deja depile
    empiler(T, e)
    empiler(T, sommet)
    i = 0
    if P2 != []:
        while i < compteur:
            element = depiler(P2)
            sommet = depiler(P2)
            empiler(T, element)
            empiler(T, sommet)
            i += 1


def obtenir_element(T, id):
    P2 = creer_pile()
    sommet = depiler(T)
    compteur = 0
    while sommet != id:
        element = depiler(T)
        empiler(P2, sommet)
        empiler(P2, element)
        sommet = depiler(T)
        compteur = compteur + 1

    elementcherche = depiler(T)  # on vire l'element, l'id etant deja depile
    empiler(T, elementcherche)
    empiler(T, sommet)
    i = 0
    if P2 != []:
        while i < compteur:
            element = depiler(P2)
            sommet = depiler(P2)
            empiler(T, element)
            empiler(T, sommet)
            i += 1

    return elementcherche


T1 = creer_tableau()
e = "COUCOU"
inserer_element(T1, 4, "BATEAU")
inserer_element(T1, 6, "TEST")
inserer_element(T1, 8, e)

print T1
supprimer_element(T1, 4)
print T1

remplacer_element(T1, 7, "BLABLA")
print T1
test = obtenir_element(T1, 7)
print test
