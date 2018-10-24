from tkinter import *


class Pokemon:
    def __init__(self, nom: str, type: str, pv: int):
        self.nom = nom
        self.type = type
        self.pv = pv

    def __repr__(self):
        return self.nom

    def __int__(self):
        return self.pv

    def lvl_up(self):
        self.pv += 30


class Pokedex(list):
    def close_gui(self, gui: Toplevel, pokenom: Entry, poketype: Entry, pokepv: Entry):
        self.append(Pokemon(pokenom.get(), poketype.get(), int(pokepv.get())))
        gui.destroy()

    def add(self):
        gui_append = Toplevel(menu)
        gui_append.title('Ajout de pokémon')

        Label(gui_append, text='Nom').pack()
        poke_nom = Entry(gui_append)
        poke_nom.pack()

        Label(gui_append, text='Type').pack()
        poke_type = Entry(gui_append)
        poke_type.pack()

        Label(gui_append, text='PV').pack()
        poke_pv = Entry(gui_append)
        poke_pv.pack()

        close_gui1 = lambda: self.close_gui(gui_append, poke_nom, poke_type, poke_pv)
        add_button = Button(gui_append, text='Ajouter', command=close_gui1)
        add_button.pack()
        gui_append.mainloop()
        poke = Pokemon(poke_nom.get(), poke_type.get(), int(poke_pv.get()))
        self.append(poke)

    def show_all(self):
        gui_show = Toplevel(menu)
        for i in self:
            Label(gui_show, text='{} : {} PV'.format(i.nom, i.pv)).pack()
        gui_show.mainloop()

    def show_mean_stats(self):
        ls = [_.pv for _ in self]
        mean = sum(ls) / len(ls)
        gui_show_mean = Toplevel(menu)
        Label(gui_show_mean, text='La moyenne des PV est de {}'.format(mean)).pack()
        gui_show_mean.mainloop()

    def show_max_health(self):
        m = max(x.pv for x in self)
        gui_show = Toplevel(menu)
        for i in self:
            if i.pv == m:
                Label(gui_show, text=i.nom).pack()
        gui_show.mainloop()

    def close_gui_sst(self, gui: Toplevel, entree: Entry):
        typ = entree.get().upper()
        gui.destroy()
        gui_show = Toplevel(menu)
        gui_show.title(typ)
        for i in self:
            if i.type.upper() == typ:
                Label(gui_show, text=i.nom).pack()
        gui_show.mainloop()

    def show_same_type(self):
        gui_show_same_type = Toplevel(menu)
        gui_show_same_type.title('Afficher les pokémons du type')
        Label(gui_show_same_type, text='Type :').pack()
        des_type = Entry(gui_show_same_type)
        des_type.pack()

        close_gui = lambda: self.close_gui_sst(gui_show_same_type, des_type)
        Button(gui_show_same_type, text="Chercher", command=close_gui).pack()
        gui_show_same_type.mainloop()


pokedex = Pokedex([Pokemon('Truc', 'feu', 19)])

menu = Tk()
menu.title('Pokédex')
Button(menu, text='Ajouter Pokemon', command=pokedex.add).pack()
Button(menu, text='Montrer tous les Pokemons du Pokedex', command=pokedex.show_all).pack()
Button(menu, text='Montrer la moyenne des PV', command=pokedex.show_mean_stats).pack()
Button(menu, text='Montrer les pokémons qui ont le plus de PV', command=pokedex.show_max_health).pack()
Button(menu, text='Chercher les pokémons du type rechercher', command=pokedex.show_same_type).pack()

menu.mainloop()
