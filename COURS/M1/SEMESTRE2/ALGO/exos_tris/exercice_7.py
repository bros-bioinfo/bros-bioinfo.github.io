#!/usr/bin/env python
# -*- coding: utf-8 -*-
import exercice_3

def fusion( t, min, milieu, max ):
    """
    Compléxité :
        pire cas : O( max - min )
        meilleur cas : omega( max - min )
    """
    tmp = []
    i = min
    j = milieu + 1
    while i <= milieu or j <= max :
        if i > milieu :
            tmp.append( t[j] )
            j = j + 1
        elif j > max :
            tmp.append( t[i] )
            i = i + 1
        elif t[i] < t[j] :
            tmp.append( t[i] )
            i = i + 1
        else :
            tmp.append( t[j] )
            j = j + 1
    for i in range( len(tmp) ):
        t[min+i] = tmp[i]

def tri_fusion_recursif( t, i, j ):
    if( i < j ):
        milieu = (i+j)//2
        tri_fusion_recursif( t, i, milieu )
        tri_fusion_recursif( t, milieu+1, j )
        fusion( t, i, milieu, j )

def tri_fusion( t ):
    """
    Tri le tableau en utilisant l'algorithme du tri fusion.

    Complexité :
        pire cas : O( n.ln(n) )
        meilleur cas : O( n.ln(n) )

        où n = len( t )

    Exemples:
        >>> T = [3, 1, 5, 2, 4, 2, 3, 6, 2]
        >>> tri_fusion( T )
        >>> T
        [1, 2, 2, 2, 3, 3, 4, 5, 6]
        >>> T = []
        >>> tri_fusion( T )
        >>> T
        []
        >>> T = [3]
        >>> tri_fusion( T )
        >>> T
        [3]
        >>> T = [3, 1]
        >>> tri_fusion( T )
        >>> T
        [1, 3]
        >>> T = [1, 3]
        >>> tri_fusion( T )
        >>> T
        [1, 3]

    >>> l = [4,2,5,1]
    """
    tri_fusion_recursif( t, 0, len(t)-1 )


if __name__ == "__main__":
    import doctest
    doctest.testmod() 
