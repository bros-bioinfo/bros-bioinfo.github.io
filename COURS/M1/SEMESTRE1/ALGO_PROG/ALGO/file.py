def creer_pile():
    return[]

def empiler(pile,element):
    pile.append(element)

def depiler(pile):
    return pile.pop()

def creer_file():
    etiquette=0
    file1=creer_pile()
    empiler(file1,etiquette)
    return file1


def enfiler(F,e):
    etiquette=depiler(F)
    empiler(F,e)
    etiquette=etiquette+1
    empiler(F,etiquette)


def defiler(F):
    etiquette=depiler(F)
    index=etiquette

    while index != 0:
        a=depiler(F)
        empiler(F2,a)
        index=index-1

    depiler(F2) #on defile

    etiquette=etiquette-1
    i=0
    while i < etiquette:
        b=depiler(F2)
        empiler(F,b)
        i=i+1

    #print F
    empiler(F,etiquette)
    return F.pop()



#MAIN
F=creer_file()
F2=creer_file()



enfiler(F,1)
enfiler(F,2)
enfiler(F,3)
enfiler(F,4)
enfiler(F,5)
enfiler(F,6)

defiler(F)
F=defiler(F)
F=defiler(F)
F=defiler(F)
F=defiler(F)
F=defiler(F)
