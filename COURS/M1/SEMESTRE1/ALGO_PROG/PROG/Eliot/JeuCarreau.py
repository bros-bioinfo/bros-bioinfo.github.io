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

        self.main = Frame(self.root, bg="gray22")
        self.main.pack()
        self.canvas = Canvas(self.main, width=Plateau.w, height=Plateau.h, bg="gray22")
        self.canvas.pack()

        for x in range(0, Plateau.h, 10):
            self.canvas.create_line(0, x, Plateau.w, x, fill="gray26")
        for x in range(0, Plateau.w, 10):
            self.canvas.create_line(x, 0, x, Plateau.h, fill="gray26")

        self.root.bind("<Return>", self.next_turn)
        self.root.bind("<space>", self.next_turn)
        self.root.bind("p", self.pass_turn)
        self.turn_passed = 0
        self.list_color = ["tomato", "dark turquoise", "chartreuse2", "purple2"]
        self.list_color = [self.list_color[i] for i in range(nb_player)]
        self.areas = {key: Area() for key in self.list_color}
        self.areas["total"] = Area()

        list_func_set = [Rectangle.set_top_left,
                         Rectangle.set_bottom_right,
                         Rectangle.set_top_right,
                         Rectangle.set_bottom_left]
        n = -1
        for color in self.list_color:
            n += 1
            rectangle_initial = Rectangle(self.canvas, color)
            list_func_set[n](rectangle_initial)
            rectangle_initial.darkening_color()
            self.areas["total"].memorize(rectangle_initial)
            self.areas[color].memorize(rectangle_initial)

        self.turn = 0
        self.rec = Rectangle(self.canvas, self.list_color[self.turn])

        self.rebind()

        self.main.mainloop()

    def next_turn(self, event):
        if self.is_valid_place():
            self.turn_passed = 0
            self.areas["total"].memorize(self.rec)
            self.rec.darkening_color()
            self.areas[self.list_color[self.turn]].memorize(self.rec)
            print(self.areas[self.list_color[self.turn]].area * 100 / self.areas["total"].area)

            self.turn += 1 if self.turn < self.nb_player - 1 else - self.nb_player - 2
            print(self.list_color[self.turn])
            self.rec = Rectangle(self.canvas, self.list_color[self.turn])
            self.rebind()

    def pass_turn(self, event):
        if self.turn_passed == self.nb_player - 1:  # End of the game
            scores = {key: self.areas[key].area for key in self.areas}
            scores["total"] = 0
            top = max(scores, key=lambda key: scores[key])
            Label(self.main,
                  text="Le joueur {} gagne avec {:.2f}% !".format(top, 100 * scores[top] / self.areas["total"].area),
                  fg=top, bg="gray22").pack()

            self.root.bind_all("<Key>", self.quit)

        self.turn_passed += 1
        self.rec.clear()

        self.turn += 1 if self.turn < self.nb_player - 1 else - self.nb_player - 2
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
                if self.areas["total"].matrice[y][x] == "x":
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
            if self.areas[self.list_color[self.turn]].matrice[coord[1]][coord[0]] == "x":
                return True
        return False


    def quit(self, event):
        self.root.destroy()


class Rectangle:

    def __init__(self, canvas: Canvas, color):

        self.canvas = canvas

        self.h = rd.randint(1, 6) * 10
        self.w = rd.randint(1, 6) * 10

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

        self.oriented = True

        self.color = color
        if color == "dark turquoise":
            self.light_color = "turquoise"
        elif color == "tomato":
            self.light_color = "salmon"
        elif color == "chartreuse2":
            self.light_color = "OliveDrab1"
        elif color == "purple2":
            self.light_color = "MediumPurple1"

        self.rectangle = self.canvas.create_polygon(self.Ax, self.Ay,
                                                    self.Bx, self.By,
                                                    self.Cx, self.Cy,
                                                    self.Dx, self.Dy,
                                                    fill=self.light_color,
                                                    outline="black")

    def darkening_color(self):
        self.canvas.itemconfig(self.rectangle, fill=self.color)

    def _draw(self):
        self.canvas.coords(self.rectangle,
                           self.Ax, self.Ay,
                           self.Bx, self.By,
                           self.Cx, self.Cy,
                           self.Dx, self.Dy)

    def switch(self, event):
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

    def move_up(self, event):
        if self.Ay > 0:
            self.canvas.move(self.rectangle, 0, -10)
            self.Ax, self.Ay, \
            self.Bx, self.By, \
            self.Cx, self.Cy, \
            self.Dx, self.Dy = self.canvas.coords(self.rectangle)

    def move_down(self, event):
        if self.Cy < Plateau.h:
            self.canvas.move(self.rectangle, 0, +10)
            self.Ax, self.Ay, \
            self.Bx, self.By, \
            self.Cx, self.Cy, \
            self.Dx, self.Dy = self.canvas.coords(self.rectangle)

    def move_left(self, event):
        if self.Ax > 0:
            self.canvas.move(self.rectangle, -10, 0)
            self.Ax, self.Ay, \
            self.Bx, self.By, \
            self.Cx, self.Cy, \
            self.Dx, self.Dy = self.canvas.coords(self.rectangle)

    def move_right(self, event):
        if self.Bx < Plateau.w:
            self.canvas.move(self.rectangle, 10, 0)
            self.Ax, self.Ay, \
            self.Bx, self.By, \
            self.Cx, self.Cy, \
            self.Dx, self.Dy = self.canvas.coords(self.rectangle)

    def set_top_left(self):
        self.Ax = 0
        self.Ay = 0

        self.Bx = self.w
        self.By = 0

        self.Cx = self.w
        self.Cy = self.h

        self.Dx = 0
        self.Dy = self.h
        self._draw()

    def set_bottom_left(self):
        self.Ax = self.Dx = 0
        self.Ay = self.By = Plateau.h - self.h
        self.Bx = self.Cx = self.w
        self.Cy = self.Dy = Plateau.h

        self._draw()

    def set_top_right(self):
        self.Ax = Plateau.w - self.w
        self.Ay = 0

        self.Bx = Plateau.w
        self.By = 0

        self.Cx = Plateau.w
        self.Cy = self.h

        self.Dx = Plateau.w - self.w
        self.Dy = self.h
        self._draw()

    def set_bottom_right(self):
        self.Ax = Plateau.w - self.w
        self.Ay = Plateau.h - self.h

        self.Bx = Plateau.w
        self.By = Plateau.h - self.h

        self.Cx = Plateau.w
        self.Cy = Plateau.h

        self.Dx = Plateau.w - self.w
        self.Dy = Plateau.h
        self._draw()

    def clear(self):
        self.canvas.delete(self.rectangle)


class Area:
    def __init__(self):
        self.matrice = [["." for x in range(Plateau.w // 10 + 1)] for y in range(Plateau.h // 10 + 1)]

    def memorize(self, r: Rectangle):
        for x in range(int(r.Ax // 10), int(r.Bx // 10)):
            for y in range(int(r.Ay // 10), int(r.Cy // 10)):
                self.matrice[y][x] = "x"

    def __repr__(self):
        return "\n".join([" ".join(line) for line in self.matrice]) + "\n\n"

    @property
    def area(self):
        return sum(line.count("x") for line in self.matrice)


Plateau(int(sys.argv[1]), int(sys.argv[2]), int(sys.argv[3]))
