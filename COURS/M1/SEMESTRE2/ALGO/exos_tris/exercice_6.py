#!/usr/bin/env python
# -*- coding: utf-8 -*-
import exercice_3



def partitioner( t, min, max ):
    """
    Déplace les éléments du tableau t entre la position min et max exlu
    en mettant à gauche du pivot t[max] les éléments plus petits que le pivot
    et à droite les éléments plus grands.

    Complexité :
        pire cas : O( max - min )
        meilleur cas : omega( max - min ) 
    """
    pivot = max
    i = min
    j = max - 1
    while( i<j ):
        if t[i] < t[pivot] :
             i = i + 1
        else:
            exercice_3.echanger( t, i, j )
            j = j - 1
    if t[i] < t[pivot] :
        exercice_3.echanger( t, i+1, pivot )
        pivot = i+1
    else :
        exercice_3.echanger( t, i, pivot )
        pivot = i
    return pivot

def tri_rapide_recursif( t, i, j ):
    """
    Compléxité :
        pire cas : O( (j-i)^2 )
        meilleur cas : O( (j-i).ln(j-i) )
    """
    if( i < j):
        pivot = partitioner( t, i, j )
        tri_rapide_recursif( t, i, pivot-1 )
        tri_rapide_recursif( t, pivot+1, j )

def tri_rapide( t ):
    """
    Tri le tableau en utilisant l'algorithme du tri rapide.

    Complexité :
        pire cas : O( n^2 )
        meilleur cas : O( n.ln(n) ) 

        où n = len( t )

    Exemples:
        >>> T = [3, 1, 5, 2, 4, 2, 3, 6, 2]
        >>> tri_rapide( T )
        >>> T
        [1, 2, 2, 2, 3, 3, 4, 5, 6]
        >>> T = []
        >>> tri_rapide( T )
        >>> T
        []
        >>> T = [3]
        >>> tri_rapide( T )
        >>> T
        [3]
        >>> T = [3, 1]
        >>> tri_rapide( T )
        >>> T
        [1, 3]
        >>> T = [1, 3]
        >>> tri_rapide( T )
        >>> T
        [1, 3]

    >>> l = [4,2,5,1]
    """
    tri_rapide_recursif( t, 0, len(t)-1 )


if __name__ == "__main__":
    import doctest
    doctest.testmod() 
