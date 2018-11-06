def factoriel(n):
    """ Renvoie n!
    Example :
    >>> a = factoriel(3)
    >>> a
    6
    """
    return n * factoriel(n - 1) if n != 0 else 1


def suite(n):
    """ Renvoie le n ième terme de la suite définie par un+1 = 2un +1 ; u0 = 3
    """
    return 2 * suite(n - 1) + 1 if n else 3


def suite2(n):
    return 0 if n == 0 else 1 if n == 1 else 2 * suite2(n - 1) - suite2(n - 2) + 1


def binomial(n, k):
    return 1 if k == 0 else 1 if n == k else binomial(n - 1, k - 1) + binomial(n - 1, k)


from turtle import *
import turtle


def droite(n):
    if n == 3:
        tur.forward(3)
    else:
        droite(n // 3)
        tur.left(60)
        droite(n // 3)
        tur.right(120)
        droite(n // 3)
        tur.left(60)
        droite(n // 3)


def triangle(n):
    droite(n)
    tur.right(120)
    droite(n)
    tur.right(120)
    droite(n)
    done()


import math


def dragon(n, alter):
    print(n)
    if n <= 10:
        tur.forward(10)
    else:
        dragon(math.sqrt((n ** 2) / 2), 1)
        tur.right(90 * alter)
        dragon(math.sqrt((n ** 2) / 2), -1)


def composition(n: int):
    source = [1 for i in range(n)]
    compos = [source]
    for i in compos:
        for j in range(len(i) - 1):
            new = i.copy()
            new[j] = new[j] + new[j + 1]
            del new[j + 1]
            print(i, new)
            compos.append(new)
    return compos


def composition_longue(n: int):
    compos = [[1 for i in range(n)]]
    for i in compos:
        for j in range(len(i) - 1):
            new = i.copy()
            new[j] = new[j] + new[j + 1]
            del new[j + 1]
            print(i, new)
            if new not in compos:
                compos.append(new)
    return compos


def permutation(ls: list):
    liste = [[x] for x in ls]
    for i in range(len(ls) - 1):
        new_list = []
        for p in liste:
            cls = ls.copy()
            for i in p:
                cls.remove(i)
            for x in cls:
                new_list.append(p + [x])
        liste = new_list.copy()
    return liste


if __name__ == '__main__':
    import doctest

    doctest.testmod()

    # print(factoriel(3))
    #
    print(suite(2))
    #
    # print(suite2(3))
    #
    # print(binomial(5, 2))
    #
    tur = turtle.Turtle()
    tur.speed(0)
    #
    # triangle(3 ** 5)
    #
    # dragon(10 * 2 ** 5, 1)
    #
    # done()
    #
    # print(composition(4))
    #
    # p = permutation(['a', 'b', 'c', 'd', 'e', 'f'])
    # print(len(p))
    # print(factoriel(6))
