def creer_pile():  # Renvoie une nouvelle  pile vide.
    return []


def empiler(p, e):  # Empile  l ’ élément ’ e ’ dans  la  pile ’P’.
    p.append(e)


def depiler(p):  # Dépile un élément de la pile ’P’ et renvoie cet élément .
    return p.pop()


def taille_pile(p):  # renvoie le nombre d’ éléments contenu dans la pile ’P’.
    return len(p)


################################

def creer_file():
    return creer_pile()


def enfiler(f, e):
    empiler(f, e)


def inv_file(f):
    new_file = creer_file()
    for i in range(taille_pile(f)):
        empiler(new_file, depiler(f))
    return new_file


def defiler(f):
    f = inv_file(f)
    out = depiler(f)
    f = inv_file(f)
    return out, f


def taille_file(f):
    return taille_pile(f)


pile = creer_pile()
empiler(pile, 1)
empiler(pile, 2)
empiler(pile, 3)
print('LENGTH = ', taille_pile(pile))
print(depiler(pile))
print(depiler(pile))
print(depiler(pile))

file = creer_file()
enfiler(file, 1)
enfiler(file, 2)
enfiler(file, 3)
print('LENGTH = ', taille_file(file))

to_print, file = defiler(file)
print(to_print)
to_print, file = defiler(file)
print(to_print)
to_print, file = defiler(file)
print(to_print)
