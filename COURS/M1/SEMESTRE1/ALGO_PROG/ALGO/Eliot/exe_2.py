def creer_pile():  # Renvoie une nouvelle  pile vide.
    return []


def empiler(p, e):  # Empile  l ’ élément ’ e ’ dans  la  pile ’P’.
    p.append(e)


def depiler(p):  # Dépile un élément de la pile ’P’ et renvoie cet élément .
    return p.pop()


def taille_pile(p) -> int:  # renvoie le nombre d’ éléments contenu dans la pile ’P’.
    return len(p)


################################

# def creer_file():
#     return creer_pile()
#
#
# def enfiler(f, e):
#     empiler(f, e)
#
#
# def inv_file(f):
#     new_file = creer_file()
#     for i in range(taille_pile(f)):
#         empiler(new_file, depiler(f))
#     return new_file
#
#
# def defiler(f):
#     f = inv_file(f)
#     out = depiler(f)
#     f = inv_file(f)
#     return out, f
#
#
# def taille_file(f):
#     return taille_pile(f)
#
#
# pile = creer_pile()
# empiler(pile, 1)
# empiler(pile, 2)
# empiler(pile, 3)
# print('LENGTH = ', taille_pile(pile))
# print(depiler(pile))
# print(depiler(pile))
# print(depiler(pile))
#
# file = creer_file()
# enfiler(file, 1)
# enfiler(file, 2)
# enfiler(file, 3)
# print('LENGTH = ', taille_file(file))
#
# to_print, file = defiler(file)
# print(to_print)
# to_print, file = defiler(file)
# print(to_print)
# to_print, file = defiler(file)
# print(to_print)
#
#
###############################
# Tableaux

# def creer_tableaux():
#     return 0, creer_pile()
#
#
# def inserer_element(tab, index, element):
#     tmp_pile = creer_pile()
#     n_iter = taille_pile(tab) - index
#     for i in range(n_iter):
#         empiler(tmp_pile, depiler(tab))
#     empiler(tab, element)
#     for i in range(n_iter):
#         empiler(tab, depiler(tmp_pile))
#     return tab
#
#
# def supprimer_element(tab, index):
#     tmp_pile = creer_pile()
#     n_iter = taille_pile(tab) - index
#     for i in range(n_iter - 1):
#         empiler(tmp_pile, depiler(tab))
#     depiler(tab)
#     for i in range(n_iter - 1):
#         empiler(tab, depiler(tmp_pile))
#     return tab
#
#
# def remplacer_element(tab, index, element):
#     tmp_pile = creer_pile()
#     n_iter = taille_pile(tab) - index
#     for i in range(n_iter - 1):
#         empiler(tmp_pile, depiler(tab))
#     depiler(tab)
#     empiler(tab, element)
#     for i in range(n_iter - 1):
#         empiler(tab, depiler(tmp_pile))
#     return tab
#
#
# def obtenir_element(tab, index):
#     tmp_pile = creer_pile()
#     n_iter = taille_pile(tab) - index
#     for i in range(n_iter - 1):
#         empiler(tmp_pile, depiler(tab))
#     element = depiler(tab)
#     empiler(tab, element)
#     for i in range(n_iter - 1):
#         empiler(tab, depiler(tmp_pile))
#     return element
#
#
# t = ['a', 'b', 'c', 'd']
# print(inserer_element(t, 1, 'k'))
# print(supprimer_element(t, 1))
# print(remplacer_element(t, 2, '<3'))
# print(obtenir_element(t, 2))
# print(t)


#########################################
# Dictionnaires

# def creer_dictionnaire():
#     return [creer_pile(), creer_pile()]
#
#
# def inserer_association(dictionnaire, cle, valeur):
#     n_max = taille_pile(dictionnaire[0])
#
#     tmp_valeur = creer_pile()
#     match = depiler(dictionnaire[0])
#     empiler(tmp_valeur, depiler((dictionnaire[1])))
#
#     tmp_cle = creer_pile()
#     empiler(tmp_cle, match)
#
#     index = 1
#     bill = True if match == cle else False
#     while not bill and index < n_max:
#         index += 1
#         match = depiler(dictionnaire[0])
#         bill = True if match == cle else False
#         empiler(tmp_cle, match)
#         empiler(tmp_valeur, depiler((dictionnaire[1])))
#
#     empiler(dictionnaire[0], cle)
#     empiler(dictionnaire[1], valeur)
#     if bill:
#         depiler(tmp_cle)
#         depiler(tmp_valeur)
#     for i in range(taille_pile(tmp_cle)):
#         empiler(dictionnaire[0], depiler(tmp_cle))
#         empiler(dictionnaire[1], depiler(tmp_valeur))
#
#     return dictionnaire
#
#
# def supprimer_association(dictionnaire, cle):
#     n_max = taille_pile(dictionnaire[0])
#
#     tmp_valeur = creer_pile()
#     match = depiler(dictionnaire[0])
#     empiler(tmp_valeur, depiler((dictionnaire[1])))
#
#     tmp_cle = creer_pile()
#     empiler(tmp_cle, match)
#
#     index = 1
#     bill = True if match == cle else False
#     while not bill and index < n_max:
#         index += 1
#         match = depiler(dictionnaire[0])
#         bill = True if match == cle else False
#         empiler(tmp_cle, match)
#         empiler(tmp_valeur, depiler((dictionnaire[1])))
#
#     if bill:
#         depiler(tmp_cle)
#         depiler(tmp_valeur)
#     else:
#         raise ReferenceError("La clé ne se situe pas dans le dictionnaire")
#     for i in range(index - 1):
#         empiler(dictionnaire[0], depiler(tmp_cle))
#         empiler(dictionnaire[1], depiler(tmp_valeur))
#
#     return dictionnaire
#
#
# def appartient_au_dictionnaire(dictionnaire, cle):
#     n_max = taille_pile(dictionnaire[0])
#
#     match = depiler(dictionnaire[0])
#
#     tmp_valeur = creer_pile()
#     empiler(tmp_valeur, depiler((dictionnaire[1])))
#
#     tmp_cle = creer_pile()
#     empiler(tmp_cle, match)
#
#     index = 1
#     bill = True if match == cle else False
#     while not bill and index < n_max:
#         index += 1
#         match = depiler(dictionnaire[0])
#         bill = True if match == cle else False
#         empiler(tmp_cle, match)
#         empiler(tmp_valeur, depiler((dictionnaire[1])))
#
#     for i in range(taille_pile(tmp_cle)):
#         empiler(dictionnaire[0], depiler(tmp_cle))
#         empiler(dictionnaire[1], depiler(tmp_valeur))
#     return bill
#
#
# def obtenir_valeur(dictionnaire, cle):
#     n_max = taille_pile(dictionnaire[0])
#
#     match = depiler(dictionnaire[0])
#
#     tmp_valeur = creer_pile()
#     empiler(tmp_valeur, depiler((dictionnaire[1])))
#
#     tmp_cle = creer_pile()
#     empiler(tmp_cle, match)
#
#     index = 1
#     bill = True if match == cle else False
#     while not bill and index < n_max:
#         index += 1
#         match = depiler(dictionnaire[0])
#         bill = True if match == cle else False
#         empiler(tmp_cle, match)
#         empiler(tmp_valeur, depiler((dictionnaire[1])))
#
#     empiler(dictionnaire[0], depiler(tmp_cle))
#     valeur = depiler(tmp_valeur)
#     empiler(dictionnaire[1], valeur)
#     if not bill:
#         valeur = None
#
#     for i in range(taille_pile(tmp_cle)):
#         empiler(dictionnaire[0], depiler(tmp_cle))
#         empiler(dictionnaire[1], depiler(tmp_valeur))
#
#     return valeur

# ------------ TEST ------------ #
# d = [['a', 'b', 'c'], [1, 2, 3]]
# ------------------------------ #

def creer_dictionnaire():
    return empiler(creer_pile(), 0)


def inserer_association(dico, key, value):
    n = depiler(dico)
    k = 0
    tmp_key = creer_pile()
    tmp_value = creer_pile()
    for i in range(n):
        cle = depiler(dico)
        if cle == key:
            depiler(dico)
            n -= 1
            break
        empiler(tmp_key, cle)
        empiler(tmp_value, depiler(dico))
        k += 1
    n += 1
    empiler(dico, value)
    empiler(dico, key)
    for i in range(k):
        empiler(dico, depiler(tmp_value))
        empiler(dico, depiler(tmp_key))

    empiler(dico, n)


def supprimer_association(dico, key):
    n = depiler(dico)
    k = 0
    tmp_key = creer_pile()
    tmp_value = creer_pile()
    for i in range(n):
        cle = depiler(dico)
        if cle == key:
            depiler(dico)
            n -= 1
            break
        empiler(tmp_key, cle)
        empiler(tmp_value, depiler(dico))
        k += 1
    for i in range(k):
        empiler(dico, depiler(tmp_value))
        empiler(dico, depiler(tmp_key))

    empiler(dico, n)


def appartient_au_dictionnaire(dico, key):
    n = depiler(dico)
    tmp_key = creer_pile()
    tmp_value = creer_pile()
    out = False
    k = 0
    for i in range(n):  # Transfert le dico dans tmp_key et tmp_value jusque à atteindre la clé recherchée
        cle = depiler(dico)
        empiler(tmp_key, cle)
        empiler(tmp_value, depiler(dico))
        k += 1
        if cle == key:
            out = True
            break
    for i in range(k):  # Reremplie le dico avec les valeurs contenues dans tmp_key et tmp_value
        empiler(dico, depiler(tmp_value))
        empiler(dico, depiler(tmp_key))
    empiler(dico, n)
    return out


def obtenir_valeur(dico, key):
    n = depiler(dico)
    tmp_key = creer_pile()
    tmp_value = creer_pile()
    out = None
    k = 0
    for i in range(n):  # Transfert le dico dans tmp_key et tmp_value jusque à atteindre la clé recherchée
        cle = depiler(dico)
        valeur = depiler(dico)
        empiler(tmp_key, cle)
        empiler(tmp_value, valeur)
        k += 1
        if cle == key:
            out = valeur
            break
    for i in range(k):  # Reremplie le dico avec les valeurs contenues dans tmp_key et tmp_value
        empiler(dico, depiler(tmp_value))
        empiler(dico, depiler(tmp_key))
    empiler(dico, n)
    return out


d = [1, 'a', 2, 'b', 3, 'c', 3]
inserer_association(d, 'a', 8)
print(d)
inserer_association(d, '<3', '</3')
print(d)
supprimer_association(d, '<3')
print(d)
print('a est une clé du dico') if appartient_au_dictionnaire(d, 'a') else print("a n'est pas dans le dico")
print('<3 est une clé du dico') if appartient_au_dictionnaire(d, '<3') else print("<3 n'est pas dans le dico")
print('Valeur de b est', obtenir_valeur(d, 'b'))
print('Valeur de <3 est', obtenir_valeur(d, '<3'), "car n'existe pas")
