class Molecule:
    def __init__(self, name, weight_mol):
        self.nom = name
        self.weight = weight_mol


list_name = []
list_weight = []
n_max = 4
for i in range(n_max):
    list_name.append(input("Nom = "))
for i in range(n_max):
    list_weight.append(int(input("Poids = ")))

print('\n'.join(["{} à la ligne {}".format(list_name[i], i) for i in range(len(list_name))]))

print("==============================")

print("Max = ", max(list_weight))

print("==============================")

average = sum(list_weight) / len(list_weight)
print("Average = ", average)

print("==============================")

for i in range(len(list_name)):
    if list_weight[i] > average:
        print("{} de {}g est supérieur à la moyenne de {}".format(list_name[i], list_weight[i], average))
