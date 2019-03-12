#!/usr/bin/env python
# -*- coding: utf-8 -*-
def recherche_dichotomique( T, e ):
    """
    Renvoie l'index de la première occurence de e dans le tableau.
    Si e n'existe pas, le programme renvoie -1.

    Complexité : 
        pire cas : O( ln(n) )
        meilleur cas : Omega( ln(n) )

        où n = len(T)

    Exemples:
        >>> recherche_dichotomique( [1,3,3,5,7], 3 )
        1
        >>> recherche_dichotomique( [], 3 )
        -1
        >>> recherche_dichotomique( [1,4,4,5,7,8], 3 )
        -1
        >>> recherche_dichotomique( [1,3,3,5,7], 1 )
        0
        >>> recherche_dichotomique( [1,3,3,5,7], 7 )
        4
    """
    if len(T) == 0:
        return -1
    i = 0
    j = len(T) - 1
    while i != j :
        milieu = (i + j)//2
        if T[milieu] >= e :
            j = milieu
        else:
            i = milieu + 1
    if T[i] == e:
        return i
    else:
        return -1

if __name__ == "__main__":
    import doctest
    doctest.testmod() 
