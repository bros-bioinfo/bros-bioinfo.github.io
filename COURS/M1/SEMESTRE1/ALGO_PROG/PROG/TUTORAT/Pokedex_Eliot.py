import sys

animal = []
inp = '   '
while inp != '3':
    inp = input(
        "Rentrez une clé du menu: \n\t1. Ajouter un Animal\n\t2. Afficher les Animaux\n\t3. Arrêter le processus\n\t")
    if inp == "1":
        animal.append(input("Nom Animal = "))
    elif inp == '2':
        print('\n'.join(animal))

