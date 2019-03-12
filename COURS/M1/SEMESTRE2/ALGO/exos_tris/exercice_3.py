#!/usr/bin/env python
# -*- coding: utf-8 -*-
def echanger( T, i, j ):
    """
    Echange l'element situe à l'index i de T avec celui à l'index j

    Complexite:
        Pire cas : O(1)
        Meilleur cas: Omega(1)

    Exemples:
        >>> T = [0, 1, 2, 3, 4, 5]
        >>> echanger( T, 2, 4)
        >>> T
        [0, 1, 4, 3, 2, 5]
    """
    tmp = T[i]
    T[i] = T[j]
    T[j] = tmp

def rechercher_minimum( T, indice_debut, indice_fin ):
    """
    Renvoie l'indice du premier element de T qui est le plus petit element du 
    tableau dont l'indice est compris entre `indice_debut` inclu et 
    `indice_fin` exclu.

    Complexite:
        pire cas : O( indice_fin - indice_debut )
        meilleur cas : omega( indice_fin - indice_debut )

    Exemples:
        >>> T = [3,4,5,1,3,5,1,2]
        >>> rechercher_minimum( T, 0, len(T) )
        3
        >>> T = []
        >>> rechercher_minimum( T, 0, len(T) )
        >>> T = [3]
        >>> rechercher_minimum( T, 0, len(T) )
        0
        >>> T = [3,1]
        >>> rechercher_minimum( T, 0, len(T) )
        1
    """
    if indice_debut >= indice_fin :
        return None
    id_minimum = indice_debut
    minimum = T[indice_debut]
    for i in range( indice_debut, indice_fin ):
        if T[i] < minimum:
            id_minimum = i
            minimum = T[i]
    return id_minimum

def tri_selection( T ):
    """
    Tri le tableau passe en paramètre en utilisant le tri par selection.

    Complexite : 
        pire cas : O( n^2 )
        meilleur cas : omega( n^2 )

        où n = len(T)

    Exemples:
        >>> T = [3, 1, 5, 2, 4, 2, 3, 6, 2]
        >>> tri_selection( T )
        >>> T
        [1, 2, 2, 2, 3, 3, 4, 5, 6]
        >>> T = []
        >>> tri_selection( T )
        >>> T
        []
        >>> T = [3]
        >>> tri_selection( T )
        >>> T
        [3]
        >>> T = [3, 1]
        >>> tri_selection( T )
        >>> T
        [1, 3]
        >>> T = [1, 3]
        >>> tri_selection( T )
        >>> T
        [1, 3]
    """
    for i in range( len(T)-1 ):
        indice = rechercher_minimum( T, i, len(T) )
        echanger( T, i, indice )

if __name__ == "__main__":
    import doctest
    doctest.testmod() 
