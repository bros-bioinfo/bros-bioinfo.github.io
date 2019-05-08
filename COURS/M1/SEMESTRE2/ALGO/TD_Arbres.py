from typing import *


class Sommet:
    def __init__(self, pere, etiquette=None):
        self.pere = pere
        self.fils = []
        self.label = etiquette
        if pere:
            pere.fils.append(self)


class Arbre:
    def __init__(self):
        self.root = Sommet(None)


def fils(arbre: Arbre, sommet: Sommet) -> List[Sommet]:
    return sommet.fils


def pere(arbre: Arbre, sommet: Sommet) -> Sommet:
    return sommet.pere


def racine(arbre: Arbre) -> Sommet:
    return arbre.root


def etiquette(arbre: Arbre, sommet: Sommet):
    return sommet.label


def taille_arbre(arbre: Arbre):
    return rec_taille(arbre, racine(arbre))


def rec_taille(arbre: Arbre, sommet: Sommet) -> int:
    taille = 1
    for son in fils(arbre, sommet):
        taille += rec_taille(arbre, son)
    return taille

