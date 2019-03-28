import random as rd


def verif(liste: list, max_range: float) -> bool:
    if not liste:
        return False
    if liste[0] < 2 or liste[-1] > max_range - 2:
        return False
    for i in range(1, len(liste)):
        if liste[i] - liste[i - 1] < 2:
            return False
    return True


def creneaux(nb_creneaux: int, max_range: float) -> list:
    out = []
    while not verif(out, max_range):
        out = [rd.randrange(max_range) for _ in range(nb_creneaux - 1)]
        out.sort()
        print(out)
    return out


if __name__ == '__main__':
    print(creneaux(400, 4000))
