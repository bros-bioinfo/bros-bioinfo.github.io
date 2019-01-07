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
        end_cell.previous = end_cell
        end_cell.next = end_cell
        self.end = end_cell

    @property
    def first(self):
        return self.end.next

    @property
    def last(self):
        return self.end.previous

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

    def insert_next(self, cell, e):
        """Créé une nouvelle cellule contenant l’élément e et
        insère cette cellule dans la liste juste après la cellule cell."""
        new_cell = Cell(e, cell, cell.next)
        cell.next.previous = new_cell
        cell.next = new_cell

    def insert_prev(self, cell, e):
        """Créé une nouvelle cellule contenant l’élément e et
        insère cette cellule dans la liste juste après la cellule cell."""
        new_cell = Cell(e, cell.previous, cell)
        cell.previous.next = new_cell
        cell.previous = new_cell

    def clear(self):
        self.end.next = self.end
        self.end.previous = self.end

    def push_front(self, e):
        self.insert_next(self.end, e)

    def push_back(self, e):  # Ajoute un élément en fin de liste
        self.insert_prev(self.end, e)

    @staticmethod
    def remove(cell):
        cell.previous.next = cell.next
        cell.next.previous = cell.previous

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

l.insert_next(3, 11)
print(l)
print()


# print(len(l))
# l.transferer(x)
# print(l)
# print(x)
#
# print(l.recherche_element("Paf"))
