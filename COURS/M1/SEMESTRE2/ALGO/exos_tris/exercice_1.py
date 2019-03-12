#!/usr/bin/env python
# -*- coding: utf-8 -*-
def est_trie( T ):
    """
    Renvoie vraie si le tabelau est trie dans l'ordre croissant

    Complexite : 
        pire cas : O(n)
        meilleur cas : Omega(1)

    Exemples:
        >>> est_trie( [1,3,3,5,7] )
        True
        >>> est_trie( [1] )
        True
        >>> est_trie( [1,4,2,1,5] )
        False
        >>> est_trie( [4,2] )
        False
    """
    for i in range( len(T)-1 ):
        if T[i] > T[i+1]:
            return False
    return True

if __name__ == "__main__":
    import doctest
    doctest.testmod() 
