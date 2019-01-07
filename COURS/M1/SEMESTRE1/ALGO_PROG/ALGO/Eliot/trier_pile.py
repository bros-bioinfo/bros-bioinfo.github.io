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


pile = Pile(range(10))
rd.shuffle(pile)
pile_sortie = Pile(range(10, 15))
rd.shuffle(pile_sortie)


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


def separation(p_paire, p_impaire):
    for _ in range(len(p_impaire)):  # Vide la pile impaire dans la pile paire
        p_paire.empiler(p_impaire.depiler())

    complete = False
    while not complete:
        n_paire_in_p_impaire = 0
        length_paire = len(p_paire)
        while True:

            print(p_paire, p_impaire)
            e = p_paire.depiler()

            if e % 2 == 0:  # e est paire
                p_impaire.empiler(e)  # On rajoute temporairement l'entier paire dans p_impaire
                n_paire_in_p_impaire += 1  # On indique le nombre d'entier paires présent en surface de p_impaire

                if n_paire_in_p_impaire == length_paire:
                    complete = True

                    while n_paire_in_p_impaire != 0:
                        p_paire.empiler(p_impaire.depiler())
                        n_paire_in_p_impaire -= 1

                    break

            else:  # e est impaire
                while n_paire_in_p_impaire != 0:
                    p_paire.empiler(p_impaire.depiler())
                    n_paire_in_p_impaire -= 1

                p_impaire.empiler(e)  # Empile le nouvel élément impaire dans la pile impair
                break


separation(pile, pile_sortie)
print(pile, pile_sortie)
