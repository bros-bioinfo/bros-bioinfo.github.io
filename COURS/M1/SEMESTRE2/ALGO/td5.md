#TD5 Arbre

```py
# Exo 1
def pere(A,f):
    return A[1][f]

def fils(A,p):
    return A[2][p]


def racine(A):
    return A[3]

def etiquette(A,f):
    return A[4][f]

# Exo 2
def creer_arbre():
    A=[]
    pere = {}
    fils = {}
    racine = None
    return [A,pere,fils,racine]
def ajouter_racine(T,r):
    #ajoute dans A un sommet
    #s et le definis comme une 
    #racine
    #assert (T[0] is None)
    sommet = T[0]
    sommet.append(r)
    pere = T[1]
    fils = T[2]
    T[3] = r
    pere[r] = None
    fils[r] = []
def ajouter_fils(T,f,p):
    #ajoute dans T le sommets
    #et definit p comme son pere
    #p existe dans T
    #s n'exsiste pas dans T
    sommet = T[0]
    pere = T[1]
    fils = T[2]
    sommet.append(f)
    pere[f] = p
    fils[f] = []
    fils[p].append(f)
# independant quelque soit l'implementation

# Exo 2
def taille_arbre(A):
    return taille_sous_arbre(A,racine(A))
def taille_sous_arbre(A,s):
    if s == None:
        return 0
    if (len(fils(A,s))==0):
        return 1
    taille = 1 # la racine s du sous-arbre
    for f in fils(A,s):
        taille += taille_sous_arbre(A,f)
    return taille

#Exo 3
def parcourir_arbre(A,p):
    return parcourir_sous_arbre(A,racine(A))
def parcourir_sous_arbre(A,s):
    if s == None:
        return p.append(racine(A))
    if len(fils(A,s))==0:
        return p.append(s)
    for f in fils(A,s):
        parcourir_sous_arbre(A,f)
    p.append(s)
    return p


#Exo 4

def parcours_niveau(A,h,p):
    k = 0
    return parcours_niveau_sous_arbre(A,h,k,racine(A),p)
def parcours_niveau_sous_arbre(A,h,k,s,p):
    if s == None:
        return p
    if k == h:
        return p.append(s)
    for f in fils(A,s):
        parcours_niveau_sous_arbre(A,h,k+1,f,p)
    return p

# Exo 5
def sommet_a_distance(A,s,h):
    k = 0
    p = []
    parcours_niveau_sous_arbre(A,h,k,s,p)
    return p

# Exo 6 
def parcours_feuille(A,p):
    return parcours_feuille_rec(A,racine(A),p)
def parcours_feuille_rec(A,s,p):
    if s == None:
        return p
    if len(fils(A,s)) == 0:
        return p.append(s)
    for f in fils(A,s):
        parcours_feuille_rec(A,f,p)
    return p


#Exo 7 
def parcours_sommets_internes(A,p):
    return parcours_sommets_internes_rec(A,racine(A),p)
def parcours_sommets_internes_rec(A,s,p):
    if s == None:
        return p
    if len(fils(A,s)) > 0 and s != racine(A):
        p.append(s)
    for f in fils(A,s):
        parcours_sommets_internes_rec(A,f,p)
    return p


# Exo 8
def ecrire(A):
    nom = "arbre.dot"
    fic=open(nom,"w")
    fic.write('digraph A{')
    fic.write('\n')
    fic.write('\tgraph [ordering="out"];')
    fic.write('\n')
    for x in A[2]:
        fic.write('\t')
        fic.write(str(x))
        fic.write(' -> {')
        for y in fils(A,x):
            fic.write(str(y))
            fic.write('; ')
        fic.write('}')
        fic.write('\n')
    fic.write("}")
    fic.write('\n')
    fic.close()

A = creer_arbre()
p = []
n = []
o = []
l = []
ajouter_racine(A,1)
ajouter_fils(A,4,1)
ajouter_fils(A,2,1)
ajouter_fils(A,3,1)
ajouter_fils(A,7,2)
ajouter_fils(A,5,2)
ajouter_fils(A,6,5)
taille = taille_arbre(A)
print(taille)
parcourir_arbre(A,p)
print(p) 
parcours_niveau(A,1,n)
print(n)
m = sommet_a_distance(A,2,2)
print(m)
parcours_feuille(A,o)
print(o)
parcours_sommets_internes(A,l)
print(l)
ecrire(A)
```