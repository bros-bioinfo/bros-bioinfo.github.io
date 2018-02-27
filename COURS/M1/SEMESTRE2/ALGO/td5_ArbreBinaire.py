def creer_arbre_binaire():
    A=[]
    pere = {}
    fils_gauche = {}
    fils_droit = {}
    racine = None
    return [A,pere,fils_gauche,fils_droit,racine]
def ajouter_racine(T,r):
    #ajoute dans A un sommet
    #s et le definis comme une 
    #racine
    #assert (T[0] is None)
    sommet = T[0]
    sommet.append(r)
    pere = T[1]
    fils_gauche = T[2]
    fils_droit = T[3]
    T[4] = r
    pere[r] = None
    fils_gauche[r] = None
    fils_droit[r] = None
def ajouter_fils_gauche(T,f,p):
    #ajoute dans T le sommets
    #et definit p comme son pere
    #p existe dans T
    #s n'exsiste pas dans T
    sommet = T[0]
    pere = T[1]
    filsGauche = T[2]
    filsDroit = T[3]
    sommet.append(f)
    pere[f] = p
    filsGauche[f] = None
    filsDroit[f] = None
    filsGauche[p] = f
# independant quelque soit l'implementation
def ajouter_fils_droit(T,f,p):
    #ajoute dans T le sommets
    #et definit p comme son pere
    #p existe dans T
    #s n'exsiste pas dans T
    sommet = T[0]
    pere = T[1]
    filsDroit = T[3]
    filsGauche = T[2]
    sommet.append(f)
    pere[f] = p
    filsGauche[f] = None
    filsDroit[f] = None
    filsDroit[p] = f
# independant quelque soit l'implementation
def racine(A):
    return A[4]
def fils(A,p):
    return A[2][p] + A[3][p]
def pere(A,p):
    if(p == racine(A)):
        return None
    return A[1][p]
def fils_gauche(A,p):
    return A[2][p]
def fils_droit(A,p):
    return A[3][p]

# Exo 10
def parcours_infixe(B,p):
    parcours_infixe_rec(B,p,racine(B))
def parcours_infixe_rec(B,p,s):
    if not (s is None):
        parcours_infixe_rec(B,p,fils_gauche(A,s))
        p.append(s)
        parcours_infixe_rec(B,p,fils_droit(A,s))

def parcours_prefixe(B,p):
    parcours_prefixe_rec(B,p,racine(B))
def parcours_prefixe_rec(B,p,s):
    if not (s is None):
        p.append(s)
        parcours_prefixe_rec(B,p,fils_gauche(A,s))
        parcours_prefixe_rec(B,p,fils_droit(A,s))

def parcours_postfixe(B,p):
    parcours_postfixe_rec(B,p,racine(B))
def parcours_postfixe_rec(B,p,s):
    if not (s is None):
        parcours_postfixe_rec(B,p,fils_gauche(A,s))
        parcours_postfixe_rec(B,p,fils_droit(A,s))
        p.append(s)

# Exo 11
'''def ecrire(A):
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
'''

#Exo 12
def taille_arbre(B):
    cpt = 0
    return taille_arbre_rec(B,racine(B),cpt)
def taille_arbre_rec(B,s,cpt):
    if s is None:
        return cpt
    if fils_gauche(B,s) is None and fils_droit(B,s) is None:
        return cpt
    cpt_gauche = taille_arbre_rec(B,fils_gauche(B,s),cpt+1)
    cpt_droit = taille_arbre_rec(B,fils_droit(B,s),cpt+1)
    if cpt_gauche > cpt_droit:
        return cpt_gauche
    else:
        return cpt_droit

def est_parfait(B):
    cpt = 0
    return est_parfait_rec(B,racine(B),cpt)
def est_parfait_rec(B,s,cpt):
    if s is None:
        return False;
    if fils_gauche(B,s) is None and fils_droit(B,s) is None:
        if(cpt < taille_arbre(B)):
            return False
        else:
            return True
    flag_gauche = est_parfait_rec(B,fils_gauche(B,s),cpt+1)
    flag_droit = est_parfait_rec(B,fils_droit(B,s),cpt+1)
    if(flag_droit == False and flag_gauche == False):
        return False
    else:
        return True

A = creer_arbre_binaire()
p = []
ajouter_racine(A,1)
ajouter_fils_droit(A,7,1)
ajouter_fils_gauche(A,3,1)
ajouter_fils_gauche(A,5,3)
ajouter_fils_droit(A,9,7)
ajouter_fils_gauche(A,6,7)
print(A)
parcours_infixe(A,p)
print(p)
p = []
parcours_prefixe(A,p)
print(p)
p = []
parcours_postfixe(A,p)
print(p)
size = taille_arbre(A)
print(size)
flag = est_parfait(A)
print(flag)

