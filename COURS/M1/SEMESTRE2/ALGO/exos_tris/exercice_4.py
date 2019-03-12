#!/usr/bin/env python
# -*- coding: utf-8 -*-
import exercice_3

def inserer_element( T, e ):
    """
    Complexité :
        pire cas : O(n)
        meilleur cas : omega(1)

        où n = len(T)
    """
    T.append( e )
    i = len(T)-1
    while i>0 and T[i] < T[i-1]:
        exercice_3.echanger( T, i, i-1 )
        i = i-1

def tri_insetion( T ):
    """
    Tri le tableau passé en paramètre en utilisant le tri par sélection.

    Complexité : 
        pire cas : O( n^2 )
        meilleur cas : omega( n )

        où n = len(T)

    Exemples:
        >>> T = [3, 1, 5, 2, 4, 2, 3, 6, 2]
        >>> tri_insetion( T )
        [1, 2, 2, 2, 3, 3, 4, 5, 6]
        >>> T = []
        >>> tri_insetion( T )
        []
        >>> T = [3]
        >>> tri_insetion( T )
        [3]
        >>> T = [3, 1]
        >>> tri_insetion( T )
        [1, 3]
        >>> T = [1, 3]
        >>> tri_insetion( T )
        [1, 3]
    """
    resultat = []
    for e in T:
        inserer_element( resultat, e )
    return resultat


def tri_insetion_en_continu():
    T = []
    entree = int( input("Donnez un entier") )
    while entree != -1:
        inserer_element( resultat, e )
        print( T )
        entree = int( input("Donnez un entier") )

if __name__ == "__main__":
    import doctest
    doctest.testmod() 
