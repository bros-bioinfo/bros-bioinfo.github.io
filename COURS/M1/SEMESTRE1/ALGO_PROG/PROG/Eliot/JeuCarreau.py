from tkinter import *
import random as rd
import sys


class Plateau:
    """Page Tk sur laquelle se déroule le jeu"""
    w = 0
    h = 0

    def __init__(self, w, h, nb_player=2):
        self.nb_player = nb_player
        Plateau.w = w * 10
        Plateau.h = h * 10
        self.root = Tk()
        self.root.title("Coins & Couleurs")

        self.frame = Frame(self.root, bg="gray22")
        self.frame.pack()
        self.canvas = Canvas(self.frame, width=Plateau.w, height=Plateau.h, bg="gray22")
        self.canvas.pack()

        # Draw grid
        for x in range(0, Plateau.h, 10):
            self.canvas.create_line(0, x, Plateau.w, x, fill="gray26")
        for x in range(0, Plateau.w, 10):
            self.canvas.create_line(x, 0, x, Plateau.h, fill="gray26")

        self.root.bind("<Return>", self.next_turn)
        self.root.bind("<space>", self.next_turn)
        self.root.bind("p", self.pass_turn)

        # Nombre de tours passés, permet de déterminer la fin du jeu quand tous les joueurs ont passés au moins une fois
        self.turn_passed = 0

        self.list_color = ["tomato",
                           "dark turquoise",
                           "chartreuse2",
                           "purple2"]  # Couleurs de tous les joueurs jusqu'à 4

        self.list_color = self.list_color[:self.nb_player]  # Réduit les couleurs en fonction du nombre de joueur

        # Créer un dict associant chaque couleur à une matrice
        self.matrices = {key: Matrice(key) for key in self.list_color}
        self.matrices["total"] = Matrice("Total")  # Rajoute la matrice total

        # Liste des fonctions à appeler dans l'ordre pour initialiser les premiers rectangles
        list_func_set = [Rectangle.set_top_left,
                         Rectangle.set_bottom_right,
                         Rectangle.set_top_right,
                         Rectangle.set_bottom_left]

        n = -1  # Index permettant d'appeler la bonne fonction
        for color in self.list_color:
            n += 1
            rectangle_initial = Rectangle(self.canvas, color)  # Créer un nouveau rectangle
            list_func_set[n](rectangle_initial)  # Place le rectangle à sa place en fonction du n° joueur
            rectangle_initial.darkening_color()  # Assombrit le rectangle pour faire comprendre qu'il est placé
            self.matrices["total"].memorize(rectangle_initial)
            self.matrices[color].memorize(rectangle_initial)

        # Affiche les stats en dessous du canvas
        self.labels = {color: Label(self.frame, fg=color, bg="gray22") for color in self.list_color}
        for color in self.labels:
            self.labels[color].pack()

        self.update_stats()
        self.turn = 0  # Index déterminant le tour de quelle joueur/couleur on est

        # ---- Début de la première phase de jeu à proprement parler ----

        self.rec = Rectangle(self.canvas, self.list_color[self.turn])  # Créer un rectangle

        self.rebind()  # Bind les mouvements aux nouveau rectangle

        self.root.mainloop()

    def next_turn(self, _):
        if self.is_valid_place():
            self.turn_passed = 0  # Réinitialise le compteur utilisé pour la victoire
            self.matrices["total"].memorize(self.rec)
            self.rec.darkening_color()
            self.matrices[self.list_color[self.turn]].memorize(self.rec)
            self.update_stats()

            self.turn += 1
            if self.turn == self.nb_player:
                self.turn = 0

            self.rec = Rectangle(self.canvas, self.list_color[self.turn])
            self.rebind()

    def pass_turn(self, _):
        if self.turn_passed == self.nb_player - 1:  # End of the game
            scores = {key: self.matrices[key].area for key in self.matrices}
            scores["total"] = 0
            top = max(scores, key=lambda key: scores[key])
            Label(self.frame,
                  text="Le joueur {} gagne avec {:.2f}% !".format(top, 100 * scores[top] / self.matrices["total"].area),
                  fg=top, bg="gray22").pack()

            self.root.bind_all("<Key>", self.quit)

        self.turn_passed += 1
        self.rec.clear()

        self.turn += 1
        if self.turn == self.nb_player:
            self.turn = 0
        self.rec = Rectangle(self.canvas, self.list_color[self.turn])
        self.rebind()

    def rebind(self):
        """Allow the window to bind the key events to the new rectangle"""
        self.root.bind("z", self.rec.move_up)
        self.root.bind("<Up>", self.rec.move_up)
        self.root.bind("s", self.rec.move_down)
        self.root.bind("<Down>", self.rec.move_down)
        self.root.bind("q", self.rec.move_left)
        self.root.bind("<Left>", self.rec.move_left)
        self.root.bind("d", self.rec.move_right)
        self.root.bind("<Right>", self.rec.move_right)
        self.root.bind("a", self.rec.switch)
        self.root.bind("!", self.rec.switch)

    def is_valid_place(self):
        """Check if the current rectangle can be placed where it is"""

        # Check if the rectangle is inside the matrix
        if self.rec.Ax < 0 or self.rec.Bx > Plateau.w or self.rec.Ay < 0 or self.rec.Cy > Plateau.h:
            return False

        # Check if the rectangle is on another rectangle
        for x in range(int(self.rec.Ax // 10), int(self.rec.Bx // 10)):
            for y in range(int(self.rec.Ay // 10), int(self.rec.Cy // 10)):
                if self.matrices["total"].matrice[y][x] == "x":
                    return False

        # Check if the rectangle is directly next to another rectangle of its color
        contour = []
        for x in range(int(self.rec.Ax // 10), int(self.rec.Bx // 10)):  # Generate top and bottom sides along x axis
            contour.append([x, int(self.rec.Ay // 10) - 1])  # Generate top side
            contour.append([x, int(self.rec.Cy // 10)])  # Generate bottom side
        for y in range(int(self.rec.Ay // 10), int(self.rec.Cy // 10)):  # Generate left and right sides along y axis
            contour.append([int(self.rec.Ax // 10) - 1, y])  # Generate left side
            contour.append([int(self.rec.Bx // 10), y])  # Generate right side

        for coord in contour:
            if self.matrices[self.list_color[self.turn]].matrice[coord[1]][coord[0]] == "x":
                # Retourne True si le rectangle que l'on veut poser est à côté d'un autre rectangle de sa couleur
                return True
                # Retourne False sinon
        return False

    def update_stats(self):
        total = self.matrices["total"].area

        for color in self.labels:
            self.labels[color].config(text="{}: {:.2f}%".format(color, 100 * self.matrices[color].area / total))

    def quit(self, _):
        self.root.destroy()


class Rectangle:

    def __init__(self, canvas: Canvas, color):
        """Créer un rectangle de couleur color sur le canvas canvas

        :param canvas: Canvas sur lequel dessiner le rectangle
        :param color: Couleur du rectangle
        """
        self.canvas = canvas  # Récupère le canvas sur lequel seras déssiné le rectangle

        self.h = rd.randint(1, 6) * 10  # Détermine aléatoirement la hauteur du rectangle
        self.w = rd.randint(1, 6) * 10  # Détermine aléatoirement la hauteur du rectangle

        # Corrections permettant que le rectangle soit bien situé, quelle que soit les dimensions du plateau de jeu
        x_correct = 0 if Plateau.w % 20 == 0 else 5
        y_correct = 0 if Plateau.h % 20 == 0 else 5

        self.Ax = Plateau.w / 2 - x_correct
        self.Ay = Plateau.h / 2 - y_correct

        self.Bx = self.Ax + self.w
        self.By = self.Ay

        self.Cx = self.Ax + self.w
        self.Cy = self.Ay + self.h

        self.Dx = self.Ax
        self.Dy = self.Ay + self.h

        self.oriented = True  # Détermine si le rectangle est orienté comme il a été créé, ou s'il a été switché

        # Détermination de la couleur claire en fonction de la couleur sombre
        dic_light = {"dark turquoise": "turquoise",
                     "tomato": "salmon",
                     "chartreuse2": "OliveDrab1",
                     "purple2": "MediumPurple1"}
        self.color = color
        self.light_color = dic_light[color]

        self.rectangle = self.canvas.create_polygon(self.Ax, self.Ay,
                                                    self.Bx, self.By,
                                                    self.Cx, self.Cy,
                                                    self.Dx, self.Dy,
                                                    fill=self.light_color,
                                                    outline="black")

    def darkening_color(self):
        """Permet de modifier la couleur du rectangle vers sa couleur plus sombre"""
        self.canvas.itemconfig(self.rectangle, fill=self.color)

    def _draw(self):
        """ Permet d'update les coordonées du rectangle sur le canvas après avoir utiliser une méthode
        s'appliquant sur les attributs de l'objet"""
        self.canvas.coords(self.rectangle,
                           self.Ax, self.Ay,
                           self.Bx, self.By,
                           self.Cx, self.Cy,
                           self.Dx, self.Dy)

    def _update_coords(self):
        """ Permet d'update les attributs de l'objet après avoir utiliser une méthode
        s'appliquant directement sur le canvas"""
        self.Ax, self.Ay, \
        self.Bx, self.By, \
        self.Cx, self.Cy, \
        self.Dx, self.Dy = self.canvas.coords(self.rectangle)

    def switch(self, _):
        """Permet de retourner le rectangle"""
        if self.oriented:
            self.Bx = self.Ax + self.h
            self.By = self.Ay

            self.Cx = self.Ax + self.h
            self.Cy = self.Ay + self.w

            self.Dx = self.Ax
            self.Dy = self.Ay + self.w
            self.oriented = False
        else:
            self.Bx = self.Ax + self.w
            self.By = self.Ay

            self.Cx = self.Ax + self.w
            self.Cy = self.Ay + self.h

            self.Dx = self.Ax
            self.Dy = self.Ay + self.h
            self.oriented = True
        self._draw()

    def move_up(self, _):
        if self.Ay > 0:  # Si on est pas collé à la paroi du haut
            self.canvas.move(self.rectangle, 0, -10)
            self._update_coords()

    def move_down(self, _):
        if self.Cy < Plateau.h:  # Si on est pas collé à la paroi du bas
            self.canvas.move(self.rectangle, 0, +10)
            self._update_coords()

    def move_left(self, _):
        if self.Ax > 0:  # Si on est pas collé à la paroi de gauche
            self.canvas.move(self.rectangle, -10, 0)
            self._update_coords()

    def move_right(self, _):
        if self.Bx < Plateau.w:  # Si on est pas collé à la paroi de droite
            self.canvas.move(self.rectangle, 10, 0)
            self._update_coords()

    def set_top_left(self):
        self.Ax = self.Ay = self.By = self.Dx = 0
        self.Bx = self.Cx = self.w
        self.Cy = self.Dy = self.h

        self._draw()

    def set_bottom_left(self):
        self.Ay = self.By = Plateau.h - self.h
        self.Cy = self.Dy = Plateau.h
        self.Bx = self.Cx = self.w
        self.Ax = self.Dx = 0

        self._draw()

    def set_top_right(self):
        self.Ax = self.Dx = Plateau.w - self.w
        self.Bx = self.Cx = Plateau.w
        self.Cy = self.Dy = self.h
        self.Ay = self.By = 0

        self._draw()

    def set_bottom_right(self):
        self.Ax = self.Dx = Plateau.w - self.w
        self.Ay = self.By = Plateau.h - self.h
        self.Bx = self.Cx = Plateau.w
        self.Cy = self.Dy = Plateau.h

        self._draw()

    def clear(self):
        """Permet de supprimer le rectangle en cours"""
        self.canvas.delete(self.rectangle)


class Matrice:
    def __init__(self, name):
        self.name = "\n{} :\n".format(name)
        self.matrice = [["." for _ in range(Plateau.w // 10 + 1)] for _ in range(Plateau.h // 10 + 1)]

    def memorize(self, r: Rectangle):
        """Intègre le rectangle r dans la self.matrice"""
        for x in range(int(r.Ax // 10), int(r.Bx // 10)):
            for y in range(int(r.Ay // 10), int(r.Cy // 10)):
                self.matrice[y][x] = "x"

    def __repr__(self):
        """ Représente la matrice
        > > > print(red_area)
        red
        . . . . . . . . . . .
        . . . . . x x x x . .
        . . . . . x x x x . .
        . . . . . x x x x . .
        . . . . . . . . . . .
        . . . . . . . . . . .
        . . . . . . . . . . .
        . . . . . . . . . . .


        """
        return self.name + "\n".join([" ".join(line) for line in self.matrice]) + "\n\n"

    @property  # Permet d'appeler area comme si c'était un attribut
    def area(self):
        """ Donne le nombre de carrés occupés par la surface
        Exemple:
        red_area = Matrice("red")
        red_area.area équivault alors à red_area.area(), et donc au retour de cette fonction (Grâce à @property)
        15
        """
        return sum(line.count("x") for line in self.matrice)


Plateau(int(sys.argv[1]), int(sys.argv[2]), int(sys.argv[3]))
