#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Exercice 7: Tri fusion.
# Le tri fusion consiste à couper le tableau en 2 de tailles identiques (à un élément près), à
# trier le tableau de gauche en utilisant l’algorithme de tri fusion, à trier le tableau de droite
# avec le même algorithme, puis à fusionner les deux tableaux.
# Écrire une procédure tri_fusion(t) qui implémente le tri fusion. Tester votre tableau sur
# plusieurs exemples.

def est_trie(t):
    for i in range(len(t)-1):
        if t[i+1]<t[i]:
            return False
    return True

def find(t):
    mini=t[0]
    maxi=t[0]
    for i in range(len(t)):
        if t[i]<mini:
            mini = t[i]
        if t[i]>maxi:
            maxi=t[i]
    milieu=maxi-((maxi-mini)/2)
    return mini,maxi,milieu



def separer(t):
    T=[]
    T1=[]
    a,b,c=find(t)
    for i in range(len(t)):
        if t[i]<c:
            T.append(t[i])
        if t[i]>=c:
            T1.append(t[i])
    t=T+T1
    return t

def tri_fusion(t):
    t=separer(t)
    a=False
    while a==False:
        print t
        t=separer(t)
        a=est_trie(t)
    return t
    
    


t=[8,7,2,5,1,4,9]
a,b,c=find(t)
t=tri_fusion(t)
print t