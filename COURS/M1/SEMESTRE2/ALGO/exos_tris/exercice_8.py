#!/usr/bin/env python
# -*- coding: utf-8 -*-
import exercice_3

def denombrer_elements( t, M ):
    """
    Compléxité :
        pire cas : O( M + n )
        meilleur cas : omega( M + n )

        où n = len(t)
    """
    tiroirs = [ 0 for i in range(M+1) ]
    for e in t:
        tiroirs[e] += 1
    return tiroirs

def tri_par_denombrement( t, M ):
    """
    Tri le tableau en utilisant l'algorithme du tri par dénombrement.

    Compléxité :
        pire cas : O( M + n )
        meilleur cas : O( M + n )

        où n = len( t )

    Exemples:
        >>> T = [3, 1, 5, 2, 4, 2, 3, 6, 2]
        >>> tri_par_denombrement( T, 10 )
        >>> T
        [1, 2, 2, 2, 3, 3, 4, 5, 6]
        >>> T = []
        >>> tri_par_denombrement( T, 10 )
        >>> T
        []
        >>> T = [3]
        >>> tri_par_denombrement( T, 10 )
        >>> T
        [3]
        >>> T = [3, 1]
        >>> tri_par_denombrement( T, 10 )
        >>> T
        [1, 3]
        >>> T = [1, 3]
        >>> tri_par_denombrement( T, 10 )
        >>> T
        [1, 3]

    >>> l = [4,2,5,1]
    """
    tiroirs = denombrer_elements( t, M )
    position = 0
    for element in range( len(tiroirs) ):
        for i in range( tiroirs[element] ):
            t[position] = element
            position += 1


if __name__ == "__main__":
    import doctest
    doctest.testmod() 
