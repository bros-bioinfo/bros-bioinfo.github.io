from pilefile import *


def enfiler(F,e,etiquette):
    depiler(F)
    empiler(F,e)
    etiquette=etiquette+1
    empiler(F,etiquette)
    return etiquette


def defiler(F):
    etiquette=depiler(F)
    index=etiquette

    while index != 0:
        a=depiler(F)
        empiler(F2,a)
        index=index-1

    depiler(F2)

    etiquette=etiquette-1
    i=0
    while i < etiquette:
        b=depiler(F2)
        empiler(F,b)
        i=i+1

    print F

    empiler(F,etiquette)
    return F



#MAIN
F=creer_pile()
F2=creer_pile()
etiquette=0


empiler(F,etiquette)

etiquette=enfiler(F,1,etiquette)
etiquette=enfiler(F,2,etiquette)
etiquette=enfiler(F,3,etiquette)
etiquette=enfiler(F,4,etiquette)
etiquette=enfiler(F,5,etiquette)
etiquette=enfiler(F,6,etiquette)

defiler(F)
F=defiler(F)
F=defiler(F)
F=defiler(F)
F=defiler(F)
F=defiler(F)
