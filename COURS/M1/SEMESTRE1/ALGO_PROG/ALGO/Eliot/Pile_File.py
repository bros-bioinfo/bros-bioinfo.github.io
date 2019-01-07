import random as rd


class Pile(list):
    def creer_pile(self):  # Renvoie une nouvelle  pile vide.
        return self

    def empiler(self, e):  # Empile  l ’ élément ’ e ’ dans  la  pile ’P’.
        self.append(e)

    def depiler(self):  # Dépile un élément de la pile ’P’ et renvoie cet élément .
        return self.pop()

    def taille_pile(self):  # renvoie le nombre d’ éléments contenu dans la pile ’P’.
        return len(self)


# class File(deque):
#
#     def creer_file(self):  # Renvoie une  nouvelle  f i l e  vide .
#         return self
#
#     def enfiler(self, e):  # Enfile  l ’ élément ’e’ dans la file ’F’.
#         self.append(e)
#
#     def defiler(self):  # Dé f i l e  un é l ément de  la  f i l e  ’F ’  et  renvoie  cet  é l ément .
#         return self.popleft()
#
#     def taille_file(self):  # renvoie  l e  nombre d ’ é l éments  contenu  dans  la  f i l e  ’F ’.
#         return len(self)
#
#
# pile = Pile()
# pile.empiler(1)
# pile.empiler(2)
# pile.empiler(3)
# print('LENGTH = ', pile.taille_pile())
# print(pile.depiler())
# print(pile.depiler())
# print(pile.depiler())
#
# file = File()
# file.enfiler(1)
# file.enfiler(2)
# file.enfiler(3)
# print('LENGTH = ', file.taille_file())
# print(file.defiler())
# print(file.defiler())
# print(file.defiler())
p_entree = Pile(range(10))
rd.shuffle(p_entree)
# print(enter)

p_sortie = Pile([])


# print(sortie)

def trier(p_entree, p_sortie):
    for _ in range(len(p_entree)):
        print(p_entree, p_sortie, "\n")

        mini = p_entree.depiler()
        n = len(p_entree)
        for x in range(n):
            a = p_entree.depiler()
            if a < mini:
                mini, a = a, mini
            p_sortie.empiler(a)
        for x in range(n):
            p_entree.empiler(p_sortie.depiler())
        p_sortie.empiler(mini)


print(p_sortie)
