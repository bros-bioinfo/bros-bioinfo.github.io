# Exo 1
def fils(A,p):
    return A[1][p]

def pere(A,f):
    return A[2][f]

def racine(A,p):
    return A[3]
def etiquette(A,f)
    return A[4][f]

# Exo 2
def creer_arbre_vide():
    A=[]
    pere = {}
    fils = {}
    racine = None
    return [A,pere,fils,racine]
def ajouter_racine(T,s):
    #ajoute dans A un sommet
    #s et le définis comme une 
    #racine
    assert (T[0] is None)
    sommet = T[0]
    pere = T[1]
    fils = T[2]
    assert (p in sommet and not f in sommet)
    T[3] = r
    sommet.append(r)
    pere[r] = None
    fils[r] = []
def ajouter_fils(T,f,p):
    #ajoute dans T le sommets
    #et definit p comme son père
    #p existe dans T
    #s n'exsiste pas dans T
    sommet = T[0]
    pere = T[1]
    fils = T[2]
    sommet.append(f)
    pere[f] = p
    fils[f] = []
    fils[p].append(f)

def taille_arbre(A):
    return taille_sous_arbre(A,racine(A))
def taille_sous_arbre(A,s):
    if s == None:
        return 0
    taille = 1 # la racine s du sous-arbre
    for f in fils(A,s):
        taille += taille_sous_arbre(A,f)
    return taille
'''
A = creer_arbre()
ajouter_racine(A,1)
ajouter_fils(A,4,1)
ajouter_fils(A,2,1)
ajouter_fils(A,3,1)
ajouter_fils(A,7,2)
ajouter_fils(A,5,2)
ajouter_fils(A,6,5)
print taille_arbre(A)
'''
