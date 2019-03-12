#!/usr/bin/env python
# -*- coding: utf-8 -*-
import exercice_3

def convertir_liste( n, m, base=10 ):
    """
    Converit un nombre 'n' en en liste de 'm' entiers codant 'n' en base 'base'.
    Par default base vaut 10. 
    10.
    
    Complexité :
        pire cas : O( m )
        meilleur cas : omega( m )

    Exemples:
        >>> convertir_liste( 3518, 5 )
        [8, 1, 5, 3, 0]
        >>> convertir_liste( 8, 5)
        [8, 0, 0, 0, 0]
        >>> convertir_liste( 0, 3 )
        [0, 0, 0]
    """
    res = []
    for i in range( m ):
        res.append( n%base )
        n = n//base
    return res

def convertir_entier( l, base=10 ):
    """
    Convertie une liste d'entier codant un nombre en base 'base' en un entier.
    par default 'base' vaut 10.

    Complexité :
        pire cas : O( m )
        meilleur cas : omega( m )

    où m = len( l )

    Exemples:
        >>> convertir_entier( [4, 2, 5, 1] )
        1524
        >>> convertir_entier( [] )
        0
        >>> convertir_entier( [0, 0, 0] )
        0
        >>> convertir_entier( [4] )
        4
    """
    res = 0
    monome = 1
    for e in l:
        res += monome * e
        monome *= base
    return res

def tri_stable_d_une_entree( t, pos, base=10 ):
    """
    Complexité :
        pire cas : O( base + n )
        meilleur cas : omega( base + n )

    où n = len(t)
    """
    tiroirs = [ [] for k in range(base) ]
    for element in t:
        tiroirs[ element[pos] ].append( element )
    position = 0
    for i in range( len(tiroirs) ):
        for element in tiroirs[i]:
            t[position] = element
            position += 1

def tri_radix( t, m, base=10 ):
    """
    Tri le tableau en utilisant l'algorithme du tri radix
    
    Complexité :
        pire cas : O( m.base + m.n  )
        meilleur cas : O( m.base . m.n )

        où n = len( t )

        Il faut se méfier de la complexité apportée par m.
        Par exemples, si la liste t contient n comme élément, alors
        m est plus grand que ln(n).
        Ainsi la complexité de l'algorithme est plus grand que n.ln(n).

        Par contre si m est petit, la complexité du tri radix est identique
        à celui du tri par dénombrement. Ce qui est normal puisque le tri 
        radix utilise la mécanique du tri par dénombrement.

    Exemples:
        >>> T = [3432, 2341, 2315, 32232, 4344, 43322, 4323, 2316, 2322]
        >>> tri_radix( T, 5 )
        >>> T
        [2315, 2316, 2322, 2341, 3432, 4323, 4344, 32232, 43322]
        >>> T = []
        >>> tri_radix( T, 2 )
        >>> T
        []
        >>> T = [3]
        >>> tri_radix( T, 2 )
        >>> T
        [3]
        >>> T = [3, 1]
        >>> tri_radix( T, 2 )
        >>> T
        [1, 3]
        >>> T = [1, 3]
        >>> tri_radix( T, 2 )
        >>> T
        [1, 3]

    >>> l = [4,2,5,1]
    """
    for i in range(len(t)): # O(m.n)
        t[i] = convertir_liste(t[i] , m, base)
    for i in range( m ):
        tri_stable_d_une_entree(t, i, base)
    for i in range(len(t)): # O(m.n)
        t[i] = convertir_entier(t[i] , base)
    print t


if __name__ == "__main__":
    import doctest
    doctest.testmod() 
