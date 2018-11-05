def menu():
    print()
    print("1 --> Ajouter une enzyme")
    print("2 --> Afficher les enzymes")
    print("3 --> Afficher les stats des enzymes")
    print("4 --> Afficher les enzymes au poids supérieur à la moyenne")
    print("5 --> Afficher les info concernant une enzyme")
    print("6 --> Importer les enzymes")
    print("7 --> Exporter les enzymes")
    print("8 --> Quitter")
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
        importer()
    elif enter == "7":
        exporter()
    elif enter == "8":
        exit()
    else:
        menu()


def ajouter_enzyme(nom=""):
    if nom == "":
        nom = input("Nom de l'enzyme = ")
    try:
        dict_enzyme[nom] = float(input("Poids de l'enzyme = "))
    except ValueError:
        print("Le poids donner n'est pas valide, veuillez en rentrer un valide")
        ajouter_enzyme(nom=nom)


def afficher_enzyme():
    for i in dict_enzyme:
        print("{} : {} g".format(i, dict_enzyme[i]))


def calc_moyenne():
    somme = 0
    for i in dict_enzyme.values():
        somme += i
    return somme / len(dict_enzyme)


def afficher_stat():
    mini = list(dict_enzyme.values())[0]
    i_maxi = list(dict_enzyme.keys())[0]
    maxi = list(dict_enzyme.values())[0]
    i_mini = list(dict_enzyme.keys())[0]

    for i in dict_enzyme:

        if dict_enzyme[i] > maxi:
            maxi = dict_enzyme[i]
            i_maxi = i

        if dict_enzyme[i] < mini:
            mini = dict_enzyme[i]
            i_mini = i

    print("Min : {} : {} g".format(i_mini, mini))
    print("Max : {} : {} g".format(i_maxi, maxi))
    print("Moyenne : {} g".format(calc_moyenne()))


def afficher_plus_grand_que_moyenne():
    moyenne = calc_moyenne()
    for i in dict_enzyme:
        if dict_enzyme[i] >= moyenne:
            print("{} : {} g".format(i, dict_enzyme[i]))


def afficher_info():
    nom = input("Nom de l'enzyme = ")
    try:
        print("{} : {} g".format(nom, dict_enzyme[nom]))
    except KeyError:
        print("{} n'est pas une enzyme que nous connaissons".format(nom))
        print("Voulez vous la rajouter ?")
        print("1 --> Oui")
        print("2 --> Non")
        if input() == "1":
            ajouter_enzyme(nom)


def importer():
    with open("enzyme_data.txt", "r") as input_file:
        data = input_file.read().split("\n")
        liste_nom = data[0].split()
        liste_poids = [float(x) for x in data[1].split()]
        for i in range(len(liste_nom)):
            dict_enzyme[liste_nom[i]] = liste_poids[i]


def exporter():
    with open("enzyme_data.txt", "w") as output_file:
        output_file.write(" ".join(dict_enzyme) + '\n')
        output_file.write(" ".join([str(dict_enzyme[i]) for i in dict_enzyme]) + '\n')


if __name__ == '__main__':
    dict_enzyme = {}
    while True:
        menu()
