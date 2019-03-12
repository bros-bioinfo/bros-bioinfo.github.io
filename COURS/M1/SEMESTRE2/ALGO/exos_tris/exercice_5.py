#!/usr/bin/env python
# -*- coding: utf-8 -*-
import exercice_3

def remonter_les_bulles( T ):
    """
    Renvoie Vrai si le tableau est trié, sinon renvoie faux et réalise une étape
    du tri à bulle

    Compléxité :
        pire cas : O( n )
        meilleur cas : omega( n )

        où n = len( T )
    """
    resultat = True
    for i in range( len(T) - 1 ):
        if T[i+1] < T[i]:
            resultat = False
            exercice_3.echanger( T, i, i+1 )
    return resultat

def tri_bulle( T ):
    """
    Tri le tableau passé en paramètre en utilisant le tri par sélection.

    Complexité : 
        pire cas : O( n^2 )
        meilleur cas : Omega( n^2 )

        où n = len(T)

    Exemples:
        >>> T = [3, 1, 5, 2, 4, 2, 3, 6, 2]
        >>> tri_bulle( T )
        >>> T
        [1, 2, 2, 2, 3, 3, 4, 5, 6]
        >>> T = []
        >>> tri_bulle( T )
        >>> T
        []
        >>> T = [3]
        >>> tri_bulle( T )
        >>> T
        [3]
        >>> T = [3, 1]
        >>> tri_bulle( T )
        >>> T
        [1, 3]
        >>> T = [1, 3]
        >>> tri_bulle( T )
        >>> T
        [1, 3]
    """
    est_trie = False
    while not est_trie :
        est_trie = remonter_les_bulles(T)

if __name__ == "__main__":
    import doctest
    doctest.testmod() 
