def menu():
    print()
    print("1 --> Ajouter une enzyme")
    print("2 --> Afficher les enzymes")
    print("3 --> Afficher les stats des enzymes")
    print("4 --> Afficher les enzymes au poids supérieur à la moyenne")
    print("5 --> Afficher les info concernant une enzyme")
    print("6 --> Quitter")
    enter = input()
    if enter == "1":
        ajouter_enzyme()
    elif enter == "2":
        afficher_enzyme()
    elif enter == "3":
        afficher_stat()
    elif enter == "4":
        afficher_plus_grand_que_moyenne()
    elif enter == "5":
        afficher_info()
    elif enter == "6":
        exit()
    else:
        menu()


def ajouter_enzyme(nom=""):
    if nom == "":
        liste_enzyme.append(input("Nom de l'enzyme = "))
    try:
        liste_poids.append(float(input("Poids de l'enzyme = ")))
    except ValueError:
        print("Le poids donner n'est pas valide, veuillez en rentrer un valide")
        ajouter_enzyme(nom=liste_enzyme[-1])


def afficher_enzyme():
    for i in range(len(liste_enzyme)):
        print("{} : {} g".format(liste_enzyme[i], liste_poids[i]))


def calc_moyenne():
    somme = 0
    for i in liste_poids:
        somme += i
    return somme / len(liste_poids)


def afficher_stat():
    mini = liste_poids[0]
    i_mini = 0
    maxi = liste_poids[0]
    i_maxi = 0
    for i in range(len(liste_poids)):

        if liste_poids[i] > maxi:
            maxi = liste_poids[i]
            i_maxi = i

        if liste_poids[i] < mini:
            mini = liste_poids[i]
            i_mini = i

    print("Min : {} : {} g".format(liste_enzyme[i_mini], mini))
    print("Max : {} : {} g".format(liste_enzyme[i_maxi], maxi))
    print("Moyenne : {} g".format(calc_moyenne()))


def afficher_plus_grand_que_moyenne():
    moyenne = calc_moyenne()
    for i in range(len(liste_poids)):
        if liste_poids[i] >= moyenne:
            print("{} : {} g".format(liste_enzyme[i], liste_poids[i]))


def afficher_info():
    nom = input("Nom de l'enzyme = ")
    for i in range(len(liste_enzyme)):
        if liste_enzyme[i] == nom:
            print("{} : {} g".format(liste_enzyme[i], liste_poids[i]))
            return
    print("{} n'est pas une enzyme que nous connaissons".format(nom))
    print("Voulez vous la rajouter ?")
    print("1 --> Oui")
    print("2 --> Non")
    if input() == "1":
        liste_enzyme.append(nom)
        ajouter_enzyme(nom)


if __name__ == '__main__':
    liste_enzyme = []
    liste_poids = []
    while True:
        menu()
