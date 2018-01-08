def creer_pile():
    return[]

def creer_tableau():
    indice=-1
    tableau1=creer_pile()
    empiler(tableau1,indice)
    return tableau1

def empiler(pile,element):
    pile.append(element)

def depiler(pile):
  return pile.pop()

def inserer_element(T,id,e):
    sommet=depiler(T)
    empiler(T,sommet)
    diff=id-sommet
    i=0
    if diff<=0:
        print("Votre indice est deja existant")
        return
    while i<diff:
        empiler(T,"vide")
        empiler(i)
        i+=1
    empiler(T,e)
    empiler(T,id)

def supprimer_element(T,id):
    P2=creer_pile()
    sommet=depiler(T)
    compteur=0
    while sommet!=id
        sommet=depiler(T)
        element=depiler(T)
        empiler(P2,sommet)
        empiler(P2,element)
        compteur=compteur+1

    depiler(T) #on vire l'element, l'id etant deja depile
    i=0
    while i<=compteur:
        element=depiler(P2)
        sommet=depiler(P2)
        empiler(T,element)
        empiler(T,sommet)


def creer_file():
    return []

def enfiler(file, element):
    file.append(element)


def renverser_pile( P ):
    #depiler P et peupler P2 et P3
    for i in range(taille(P)):
        a=depiler(P)
        empiler(P2, a)
        empiler(P3, a)

    print (P2)

    #reconstruction de P
    for j in range(taile (P3)):
        b=depiler(P3)
        empiler(P,b)


T1=creer_tableau()
e="COUCOU"
inserer_element(T1,5,e)
print T1
