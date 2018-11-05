import random as rd


class Pile:
    def __init__(self, data=None):
        if data:
            self.data = [i for i in data]
        else:
            self.data = []

    def __repr__(self):
        max_sp = len(str(max(self.data)))
        out = ""
        for i in range(len(self.data) - 1, -1, -1):
            out += "|{}|\n".format(self.get_fit(self.data[i], max_sp))
        return out + "‾" * (max_sp + 2)

    @staticmethod
    def get_fit(elem, max_sp):
        return str(elem) + ' ' * (max_sp - len(str(elem)))

    def empiler(self, e):
        self.data.append(e)

    def depiler(self):
        return self.data.pop()

    def taille(self):
        return len(self.data)

    def __len__(self):
        return len(self.data)

    def multiplication(self):
        p2 = Pile()
        output = 1
        for i in range(self.taille()):
            elem = self.depiler()
            output *= elem
            p2.empiler(elem)
        for i in range(p2.taille()):
            self.empiler(p2.depiler())
        return output


class DeuxPile:
    def __init__(self, pile1: Pile, pile2: Pile):
        self.p1 = pile1
        self.p2 = pile2

    def __repr__(self):

        if self.p1.data:
            max_sp1 = len(str(max(self.p1.data)))
        else:
            max_sp2 = len(str(max(self.p2.data)))
            maxi = len(self.p2)
            out = ""
            for i in range(maxi - 1, -1, -1):
                out += "{} |{}|\n".format(" " * 3, self.p2.get_fit(self.p2.data[i], max_sp2))

            return out + "{} {}\n".format("‾" * 3, "‾" * (max_sp2 + 2))

        if self.p2.data:
            max_sp2 = len(str(max(self.p2.data)))
        else:
            maxi = len(self.p1)
            out = ""
            for i in range(maxi - 1, -1, -1):
                out += "|{}| {}\n".format(self.p1.get_fit(self.p1.data[i], max_sp1), " " * 3)

            return out + "{} {}\n".format("‾" * 3, "‾" * 3)

        maxi = max([len(self.p1), len(self.p2)])
        out = ""
        for i in range(maxi - 1, -1, -1):
            if i > len(self.p1) - 1:
                out += "{} |{}|\n".format(" " * (max_sp1 + 2), self.p2.get_fit(self.p2.data[i], max_sp2))
            elif i > len(self.p2) - 1:
                out += "|{}| {}\n".format(self.p1.get_fit(self.p1.data[i], max_sp1), " " * (max_sp2 + 2))
            else:
                out += "|{}| |{}|\n".format(self.p1.get_fit(self.p1.data[i], max_sp1),
                                            self.p2.get_fit(self.p2.data[i], max_sp2))

        return out + "{} {}\n".format("‾" * (max_sp1 + 2), "‾" * (max_sp2 + 2))

    def separation(self):
        print(self)
        temp = Pile()
        for i in range(len(self.p1)):
            elem = self.p1.depiler()
            if elem % 2 == 0:
                temp.empiler(elem)
            else:
                self.p2.empiler(elem)
            print(self)
        for i in range(len(self.p2)):
            elem = self.p2.depiler()
            if elem % 2 == 0:
                temp.empiler(elem)
            else:
                self.p1.empiler(elem)
            print(self)
        for i in range(len(temp)):
            self.p2.empiler(temp.depiler())
            print(self)


# pile = Pile([1, 2, 3, 4])
# print(multiplication(pile))
# print(pile)
#
# p1 = Pile([rd.randint(0, 9) for _ in range(5)])
# p2 = Pile([rd.randint(0, 9) for _ in range(5)])
# two_pile = DeuxPile(p1, p2)
# two_pile.separation()

#
# def suite_newton(r, n):
#     if n == 0:
#         return r
#     prec = suite_newton(r, n - 1)
#     return (prec + (r / prec)) / 2
#
#
# def sqrt_newton(r, error):
#     n = 0
#     racine = suite_newton(r, n)
#     racine_carre = racine * racine
#     while not - error < r - racine_carre < error:
#         n += 1
#         racine = suite_newton(r, n)
#         racine_carre = racine * racine
#         print("{} -> {}".format(n, racine))
#     return racine
#
#
# # print(suite_newton(3, 8))
# # sqrt_newton(3, 0.01)
#
# def dichoto(r, error):
#     mini = 0
#     maxi = r
#     racine = (maxi + mini) / 2
#     racine_carre = racine * racine
#     while not -error < r - racine_carre < error:
#         if racine * racine > r:
#             maxi = racine
#         if racine * racine < r:
#             mini = racine
#         print(racine)
#         racine = (maxi + mini) / 2
#         racine_carre = racine * racine
#     return racine
#
#
# dichoto(3, 0.01)
#
#
# def average(reads):
#     sum = 0
#     for read in reads:
#         sum += len(read)
#     return sum / len(reads)
#
#
# print(average(["AGGCT", "GGAT", "GGCAAA"]))
#
#
# def threshold(reads):
#     moyenne = average(reads)
#     output = []
#     for read in reads:
#         if len(read) >= moyenne:
#             output.append(read)
#     return output
#
#
# print(threshold(["AGGCT", "GGAT", "GGCAAA"]))
#
#
# def count_nucl(seq: str, symbol: str):
#     output = 0
#     for nucl in seq:
#         if nucl == symbol:
#             output += 1
#     return output
#
#
# print(count_nucl("AGGCT", "G"))
#
#
# def ratio_gc(reads: list):
#     list_gc = []
#     for read in reads:
#         counter = 0
#         for nucl in read:
#             if nucl == "G" or nucl == "C":
#                 counter += 1
#         list_gc.append(counter / len(read))
#     somme = 0
#     for gc in list_gc:
#         somme += gc
#     return somme / len(list_gc)
#
#
# print(ratio_gc(["AGGCT", "GGAT", "GGCAAA"]))
#
#
# def remove_ends(reads, adaptor: str):
#     output = []
#     for read in reads:
#         if read[:len(adaptor)] == adaptor:
#             output.append(read[len(adaptor):])
#         if read[-len(adaptor):] == adaptor:
#             output.append(read[:-len(adaptor)])
#     return output
#
#
# print(remove_ends(["TTTCAGGCT", "GGATTTTC", "TTTCGGCAAA"], "TTTC"))

def pre_sup(center: str):
    return ["__"] + [center] * 4 + ["__"]


def tableau():
    tab = [pre_sup("-")]
    for i in range(3):
        tab.append(pre_sup("0"))
        tab.append(pre_sup("1"))
    tab.append(pre_sup("-"))
    for i in tab:
        print(" ".join(i))


# tableau()


def molecule(counter):
    s = 1
    pas = 3
    for n in range(pas, counter, pas):
        if n % 2 != 0:
            s = s - n
        print("n =", n)
        print(s)
    return s


print("Hello")
print("Give a value")
info = int(input())
total = molecule(info)
print(total)


def till_0():
    test = 16
    liste = []
    while test != 0:
        test = int(input("n = "))
        liste.append(test)
    for i in liste[:-2]:
        if i > liste[-2]:
            print(i)


# till_0()


def add_seq():
    dico = {}
    print("Identifiant:")
    dico["id"] = input()

    print("Sequence ADN:")
    dico["seq"] = input()

    dico["len"] = len(dico["seq"])

    print("Liste gene ( format ==>  a b c d):")
    dico["gene"] = input().split()

    data.append(dico)


def show_list_gene():
    dico_gene = {}
    for seq in data:
        for gene in seq["gene"]:
            if gene in dico_gene:
                dico_gene[gene] += [seq["seq"]]
            else:
                dico_gene[gene] = [seq["seq"]]

    for key in dico_gene:
        print("{} : {}".format(key, " ".join(dico_gene[key])))


def map_kinase():
    global data
    data = []
    while True:
        print("1 --> Ajouter une séquence")
        print("2 --> Afficher info d'une espèce")
        print("3 --> Afficher liste des gènes et séquences associées")
        print("4 --> Exit")
        choix = input()
        if choix == "1":
            add_seq()
        elif choix == "2":
            pass
        elif choix == "3":
            show_list_gene()
        elif choix == "4":
            exit()

# map_kinase()
