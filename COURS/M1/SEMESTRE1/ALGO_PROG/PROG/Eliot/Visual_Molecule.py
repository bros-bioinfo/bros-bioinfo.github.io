from tkinter import *
import re


class Molecule:
    def __init__(self, nom, poids, adn):
        self.nom = nom
        self.poids = poids
        self.adn = adn

    def __repr__(self):
        return "{} : {} g".format(self.nom, self.poids)


class Menu:
    def __init__(self):
        self.data = dict()
        self.main = Tk()
        self.main.title("Molécules")
        self.main.config(bg="black")
        self.main.minsize(210, 220)
        self.mean = float
        Button(self.main, width=14, bg="black", fg="white", text='Ajouter molécule', command=self.add_molecule).grid(
            pady=10)
        Button(self.main, width=14, bg="black", fg="white", text='Poids maximum', command=self.get_max).grid()
        Button(self.main, width=14, bg="black", fg="white", text='Poids moyen', command=self.get_mean).grid(pady=10)
        Button(self.main, bg="black", fg="white", text='Molécules au poids supérieur\nà la moyenne',
               command=self.greater_than_mean).grid(padx=10)

        self.io = Frame(self.main, bg="black")
        Button(self.io, bg="black", fg="white", text='Importer', command=self.import_data).grid(row=1, column=1, padx=5)
        Button(self.io, bg="black", fg="white", text='Exporter', command=self.export_data).grid(row=1, column=2, padx=5)
        self.io.grid(pady=10)
        self.main.mainloop()

    def add_molecule(self):
        GUIAdd(self)

    def get_max(self):
        GUIMax(self)

    def get_mean(self):
        GUIMean(self)

    def greater_than_mean(self):
        GUIGtm(self)

    def calc_mean(self):
        self.mean = sum([x['poids'] for x in self.data.values()]) / len(self.data.values())

    def import_data(self):
        with open('mols.txt', 'r') as input_file:
            input_txt = input_file.readlines()
            liste_name = input_txt[0].split()
            liste_weight = [float(x) for x in input_txt[1].split()]
            liste_adn = input_txt[2].split()
            for i in range(len(liste_name)):
                self.data[liste_name[i]] = {'poids': liste_weight[i], 'ADN': liste_adn[i]}

    def export_data(self):
        if len(self.data) > 0:
            with open('mols.txt', 'w') as output:
                valeurs = self.data.values()
                liste_weight = [x['poids'] for x in valeurs]
                liste_adn = [x['ADN'] for x in valeurs]

                output.write(' '.join(self.data.keys()) + '\n')
                output.write(' '.join([str(x) for x in liste_weight]) + '\n')
                output.write(' '.join(liste_adn))


class GUIAdd:
    def __init__(self, menu: Menu):
        self.root = menu
        self.gui = Toplevel(menu.main)
        self.gui.title('Ajout de molécule')
        self.gui.minsize(210, 100)

        Label(self.gui, text='Nom de la molécule').pack()
        self.mole_nom = Entry(self.gui)
        self.mole_nom.pack()

        Label(self.gui, text='Poids de la molécule').pack()
        self.mole_poids = Entry(self.gui)
        self.mole_poids.pack()

        Label(self.gui, text='ADN de la molécule').pack()
        self.mole_adn = Entry(self.gui)
        self.mole_adn.pack()

        Button(self.gui, text='Ajouter', command=self.close_gui).pack()
        self.error = Label(self.gui, text="")
        self.error.pack()

        self.gui.mainloop()

    def close_gui(self):
        try:
            if len(self.mole_nom.get()) > 0 and len(self.mole_poids.get()) > 0 and len(self.mole_adn.get()) > 0:
                if self.mole_nom.get() not in self.root.data.keys():
                    if not re.search(r'[^ACGT]', self.mole_adn.get()):
                        self.root.data[self.mole_nom.get()] = {'poids': float(self.mole_poids.get()),
                                                               'ADN': self.mole_adn.get()}
                    else:
                        self.error['text'] = "Séquence d'ADN non réglementaire"
                        return
                else:
                    self.error['text'] = "Molecule déjà existante dans les données"
                    return
            else:
                self.error['text'] = "Tous les champs ne sont pas remplis"
                return
        except ValueError:
            self.error['text'] = "Poids doit être un float ou un int"
            return
        self.gui.destroy()


class GUIMax:
    def __init__(self, menu: Menu):
        maxi = 0
        max_list = []
        self.gui = Toplevel(menu.main)
        self.gui.title('Molécule au poids maximal')
        self.gui.minsize(210, 100)
        for mol in menu.data:
            if menu.data[mol]['poids'] > maxi:
                maxi = menu.data[mol]['poids']
                max_list = [mol]
            elif menu.data[mol]['poids'] == maxi:
                max_list.append(mol)
        for mol in max_list:
            Label(self.gui, text="{} : {} g".format(mol, menu.data[mol]["poids"])).pack()
        self.gui.mainloop()


class GUIMean:
    def __init__(self, menu: Menu):
        self.gui = Toplevel(menu.main)
        self.gui.title('Poids moyen')
        self.gui.minsize(210, 100)
        menu.calc_mean()
        Label(self.gui, text="Poids moyen des molécules").pack()
        Label(self.gui, text=menu.mean).pack()

        self.gui.mainloop()


class GUIGtm:
    def __init__(self, menu: Menu):
        menu.calc_mean()
        self.gui = Toplevel(menu.main)
        self.gui.title('Molécule au poids supérieur à la moyenne')
        self.gui.minsize(210, 100)

        for mol in menu.data.keys():
            if menu.data[mol]['poids'] >= menu.mean:
                Label(self.gui, text="{} : {} g".format(mol, menu.data[mol]["poids"])).pack()

        self.gui.mainloop()


def pascal(n: int):
    prec = [1]
    for i in range(1, n + 2):
        print(' '.join([str(x) for x in prec]))
        new = []
        for j in range(i + 1):
            if j == 0 or j == i:
                new.append(1)
            else:
                new.append(prec[j] + prec[j - 1])
        prec = new


Menu()
# pascal(50)
