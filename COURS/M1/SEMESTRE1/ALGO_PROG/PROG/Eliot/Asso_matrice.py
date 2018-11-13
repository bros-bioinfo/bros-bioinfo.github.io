import numpy

data = {"ile1": [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
        "ile2": [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        "ile3": [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1],
        "ile4": [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
        "ile5": [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
        "ile6": [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0]}
matrice = []
n = 0
for ile in data:
    n += 1
    k = 0
    for ile2 in data:
        k += 1
        if n > k:
            x = 0
            y = 0
            for espece in range(11):
                if data[ile][espece] and data[ile2][espece]:
                    x += 1
                elif data[ile][espece] or data[ile2][espece]:
                    y += 1
            matrice.append({"x": ile, "y": ile2, "simi": 100 * x / (x + y)})
            print(x, y, 100 * x / (x + y))

matrice.sort(key=lambda key: key["simi"], reverse=True)
groupes = []
for link in matrice:

    if link["x"] or link["y"] in groupes:
        pass
    else:
        groupes.append([x, y])
