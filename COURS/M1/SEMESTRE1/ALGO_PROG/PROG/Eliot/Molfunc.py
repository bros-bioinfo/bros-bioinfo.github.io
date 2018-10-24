#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Correction nom de molécules et poids
# But :
# Donner des noms de molécules
# Donner leur poids
# Afficher la poids maximal de la liste de molécules (ainsi que le nom de la molécule associée)
# Afficher la moyenne des poids
# Afficher les molécules ayant un poids supérieur à la moyenne


def list_max(list_number: list):
    """ Give the maximum of a list of numbers

    :param liste:
    :return maximum of the list:
    """
    return max(list_number)


def list_mean(list_number: list) -> float:
    """ Give the mean of a list of numbers

    :param list_number:
    :return:
    """
    return sum(list_number) / len(list_number)


def indexes_of_elements_greater_than_mean(list_number: list, list_names):
    """Print the name of elements greater than the mean of their number

    :param list_number:
    :param list_names:
    :return:
    """
    print("Ces molécules ont un poids supérieur à la moyenne :")
    for i in range(len(list_number)):
        if list_number[i] > list_mean(list_number):
            print(list_names[i])


def add_poids(liste_poids):
    try:
        liste_poids.append(int(input("Poids molécule = ")))
    except ValueError:
        add_poids(liste_poids)


def menu():
    liste_name = []
    liste_weight = []
    while True:
        entree = input(
            "\n\nMenu d'actions:\n\t0 Ajouter une molécule et son poids\n\t1 Donne le poids maximal\n\t2 Donne la moyenne\n\t3 Donne les molécules au poids supérieur à la moyenne\n\t4 Importer molécules\n\t5 Exporter molécules\n\t6 Quitter\n\n")
        if entree == "0":
            liste_name.append(input("Nom molécule = "))
            add_poids(liste_weight)
        elif entree == "1":
            print("Poid maximal = ", list_max(liste_weight))
        elif entree == "2":
            print("Poid moyen = ", list_mean(liste_weight))
        elif entree == "3":
            indexes_of_elements_greater_than_mean(liste_weight, liste_name)
        elif entree == "4":
            with open('mols.txt', 'r') as input_file:
                input_txt = input_file.readlines()
                liste_name = input_txt[0].split()
                liste_weight = [int(x) for x in input_txt[1].split()]
        elif entree == "5":
            with open('mols.txt', 'w') as output:
                output.write(' '.join(liste_name) + '\n' + ' '.join([str(x) for x in liste_weight]))
        elif entree == "6":
            exit()
        else:
            pass


if __name__ == '__main__':
    # nb = int(input("Nombre de molécules = "))
    # print("Saisir des noms de molécules")
    # for i in range(nb):
    #     print("Donner le nom numéro", i)
    #     ListeNoms.append(input())
    # for i in range(len(ListeNoms)):
    #     print("La molécule dans la case", i, "est", ListeNoms[i])
    # for i in range(len(ListeNoms)):
    #     print("Donner le poids de", ListeNoms[i])
    #     ListePoids.append(int(input()))

    menu()
