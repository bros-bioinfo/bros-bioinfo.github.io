from tkinter import *


class Menu:
    def __init__(self):
        self.main = Tk()
        self.btn_add = Button(self.main, text='Ajouter molécule', command=self.add_molecule).pack()

    def add_molecule(self):
        self.gui_add = Toplevel(self.main)
        self.gui_add.title('Ajout de molécule')

        Label(gui_add, text='Nom de la molécule').pack()
        self.mole_nom = Entry(gui_add)
        self.mole_nom.pack()

        Label(gui_add, text='Poids de la molécule').pack()
        self.mole_poid = Entry(gui_add)
        self.mole_poid.pack()

        close_gui1 = lambda: self.close_gui(gui_add, mole_nom, mole_poid)
        add_button = Button(gui_add, text='Ajouter', command=close_gui1)
        add_button.pack()
        gui_add.mainloop()
        poke = Pokemon(poke_nom.get(), poke_type.get(), int(mole_poid.get()))
        self.append(poke)

    def close_gui(self):

