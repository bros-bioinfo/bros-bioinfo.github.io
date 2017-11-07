def creer_pile():
  return[]

def empiler(pile,element):
  pile.append(element)

def depiler(pile):
  return pile.pop()


def creer_file():
    return []

def enfiler(file, element):
    file.append(element)

#def defiler(file):
#    return file.pop(0)




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
