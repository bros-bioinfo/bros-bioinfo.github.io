class Cell:
    def __init__(self, value, previous_cell=None, next_cell=None):
        self.value = value
        self.previous = previous_cell
        self.next = next_cell

    def __repr__(self):
        return "{}".format(str(self.value)) if self.value is not None else "End"


class ListeChaine:
    def __init__(self):
        end_cell = Cell(None)
        self.first = end_cell
        self.last = end_cell
        self.end = end_cell

    @staticmethod
    def next(cell: Cell):
        return cell.next

    @staticmethod
    def value(cell: Cell):
        return cell.value

    @staticmethod
    def previous(cell: Cell):
        return cell.previous

    def __repr__(self):
        """Représente la fonction"""
        out = []
        it = self.first
        while it is not self.end:
            out.append(self.value(it))
            it = self.next(it)

        return str(out)

    def clear(self):
        end_cell = Cell(None)
        self.first = end_cell
        self.last = end_cell

    def push_front(self, e):
        new_cell = Cell(e, previous_cell=self.end, next_cell=self.first)
        if self.last is self.end:
            self.last = new_cell
        self.first.previous = new_cell
        self.first = new_cell

        self.end.next = self.first

    def push_back(self, e):  # Ajoute un élément en fin de liste
        new_cell = Cell(e, previous_cell=self.last, next_cell=self.end)
        if self.first is self.end:
            self.first = new_cell
        self.last.next = new_cell
        self.last = new_cell
        self.end.previous = self.last

    def insert(self, cell, e):
        """Créé une nouvelle cellule contenant l’élément e et
        insère cette cellule dans la liste juste après la cellule cell."""
        it = self.first
        temp = ListeChaine()
        while self.value(it) != cell and it is not self.end:
            temp.push_front(it.value)
            it = self.next(it)
        temp.push_front(e)
        while it is not self.end:
            temp.push_front(it.value)
            it = self.next(it)
        it = temp.first
        self.clear()
        while it is not temp.end:
            self.push_front(it.value)
            it = self.next(it)

    def copy(self):
        out = ListeChaine()
        it = self.last
        while it is not self.end:
            out.push_front(it.value)
            it = it.previous
        return out


l = ListeChaine()
l.push_front(1)
l.push_front(2)
l.push_back(0)
l.push_front(3)
print(l)

x = l.copy()
print(x)
x.push_front("Paf")
print(x)
print(l)

l.insert(3, 11)
print(l)
print()


# print(len(l))
# l.transferer(x)
# print(l)
# print(x)
#
# print(l.recherche_element("Paf"))
