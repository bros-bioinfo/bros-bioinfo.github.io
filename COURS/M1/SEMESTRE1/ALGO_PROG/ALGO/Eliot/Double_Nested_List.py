class Cell:
    def __init__(self, value, previous=None, next=None):
        self.value = value
        self.previous = previous
        self.next = next

    def __repr__(self):
        return "{}".format(str(self.value))


class ListeChaine:
    def __init__(self):
        end_cell = Cell(None)
        self.first = end_cell
        self.end = end_cell
        self.last = end_cell

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
        out = []
        it = self.first
        while it is not self.end:
            out.append(self.value(it))
            it = self.next(it)

        return str(out)

    def clear(self):
        end_cell = Cell(None)
        self.first = end_cell
        self.end = end_cell

    def push_front(self, e):
        new_cell = Cell(e, self.end, self.first)
        self.first = new_cell
        self.last = self.previous(self.end)

    def push_back(self, e):  # Ajoute un élément en fin de liste
        self.end = Cell(e, self.end, self.end)


l = ListeChaine()
l.push_front(1)
l.push_front(2)
l.push_back(0)
print(l)
#
#
# l.insert(0, 11)
# print(l)
#
# x = l.copy()
# x.push_front("Paf")
#
# print(l)
# print(x)
#
# print(len(l))
# l.transferer(x)
# print(l)
# print(x)
#
# print(l.recherche_element("Paf"))
