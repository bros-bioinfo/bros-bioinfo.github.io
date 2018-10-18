def factoriel(n):
    return n * factoriel(n - 1) if n != 0 else 1


# print(factoriel(3))


def suite(n):
    return 2 * suite(n - 1) + 1 if n != 0 else 3


# print(suite(2))


def suite2(n):
    return 0 if n == 0 else 1 if n == 1 else 2 * suite2(n - 1) - suite2(n - 2) + 1


# print(suite2(3))


def binomial(n, k):
    return 1 if k == 0 else 1 if n == k else binomial(n - 1, k - 1) + binomial(n - 1, k)


# print(binomial(5, 2))

from turtle import *
import turtle

turtle.speed(0)


def droite(n):
    if n == 3:
        forward(3)
    else:
        droite(n // 3)
        left(60)
        droite(n // 3)
        right(120)
        droite(n // 3)
        left(60)
        droite(n // 3)


def triangle(n):
    droite(n)
    right(120)
    droite(n)
    right(120)
    droite(n)
    done()


# triangle(3 ** 5)
import math


def dragon(n, alter):
    print(n)
    if n <= 10:
        forward(10)
    else:
        dragon(math.sqrt((n ** 2) / 2), 1)
        right(90 * alter)
        dragon(math.sqrt((n ** 2) / 2), -1)


# dragon(10 * 2 ** 5, 1)
# done()

def composition(n: int):
    compos = [[1 for i in range(n)]]
    for i in compos:
        for j in range(len(i) - 1):
            new = i.copy()
            new[j] = new[j] + new[j + 1]
            del new[j + 1]
            print(i, new)
            compos.append(new)
    return compos


print(composition(4))


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
