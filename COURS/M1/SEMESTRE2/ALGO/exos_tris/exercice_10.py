#!/usr/bin/env python
# -*- coding: utf-8 -*-
import exercice_1
import exercice_3
import random
import time

def melanger_tableau( t ):
    """
    Melange les cartes d'un paquet.
    
    Complexite : O(n)
    """
    for i in range( len(t) ):
        v = random.randint( i, len(t)-1 )
        exercice_3.echanger( t, i, v )

def tri_singe( t ):
    """
    Tri le tableau en utilisant l'algorithme du tri radix.
    
    Complexite :
        pire cas : Infini  (l'algorithme ne se termine jamais)
        meilleur cas : Omega(n)
        
        Complexite en moyene : O( n.n! )
            Cette algorithme à une complexite HORRIBLE !

        où n = len( t )

    Exemples:
        >>> T = [3432, 2341, 32232, 4344, 43322, 4323, 2316, 2322]
        >>> tri_singe( T )
        >>> T
        [2316, 2322, 2341, 3432, 4323, 4344, 32232, 43322]
        >>> T = []
        >>> tri_singe( T )
        >>> T
        []
        >>> T = [3]
        >>> tri_singe( T )
        >>> T
        [3]
        >>> T = [3, 1]
        >>> tri_singe( T )
        >>> T
        [1, 3]
        >>> T = [1, 3]
        >>> tri_singe( T )
        >>> T
        [1, 3]

    """
    while not exercice_1.est_trie( t ):
        melanger_tableau( t )
    return t

def factorielle(n):
    if n<2:
        return 1
    else:
        return n*factorielle(n-1)
# if __name__ == "__main__":
#     import doctest
#     doctest.testmod() 

T=[1,3,5,4,7,6,9,10,6,12,16,18,8]
for i in range(len(T)):
    t=T[0:i]
    b=len(t)*factorielle(len(t))
    start_time= time.time()
    a=tri_singe(t)
    print "i : ",i,"-->", (time.time() - start_time),"\ts","\tComplexite : \t",b