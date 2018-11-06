# def create_cell(value, next):
#     return {'value': value, 'next': next}
#
#
# def create_list():
#     end_cell = create_cell(None, None)
#     return {'begin': end_cell, 'end': end_cell}
#
#
# def push_front(l, e):
#     cell = create_cell(e, l['begin'])
#     l['begin'] = cell
#
#
# def begin(l):
#     return l['begin']
#
#
# def end(l):
#     return l['end']
#
#
# def next_(l, cell):
#     return cell['next']
#
#
# def value(l, cell):
#     return cell['value']
#
#
# l = create_list()
# push_front(l, 2)
# push_front(l, 4)
# push_front(l, 2)
# push_front(l, 4)
# push_front(l, 5)
# it = begin(l)
# while it is not end(l):
#     print(value(l, it))
#     it = next_(l, it)


class Cell:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next

    def __repr__(self):
        return "{} > {}".format(str(self.value), str(self.next))


class ListeChaine:
    def __init__(self):
        end_cell = Cell(None, None)
        self.begin = end_cell
        self.end = end_cell

    def push_front(self, e):
        self.begin = Cell(e, self.begin)

    def next(self, cell: Cell):
        return cell.next

    def value(self, cell: Cell):
        return cell.value

    def __repr__(self):
        out = []
        it = self.begin
        while it is not self.end:
            out.append(self.value(it))
            it = self.next(it)

        return str(out)

    def clear(self):
        end_cell = Cell(None, None)
        self.begin = end_cell
        self.end = end_cell

    def push_back(self, e):  # Ajoute un élément en fin de liste
        it = self.begin
        temp = ListeChaine()
        while it is not self.end:
            temp.push_front(it.value)
            it = self.next(it)
        temp.push_front(e)
        it = temp.begin
        self.clear()
        while it is not temp.end:
            self.push_front(it.value)
            it = self.next(it)

    def insert(self, cell, e):
        """Créé une nouvelle cellule contenant l’élément e et
        insère cette cellule dans la liste juste après la cellule cell."""
        it = self.begin
        temp = ListeChaine()
        while self.value(it) != cell and it is not self.end:
            temp.push_front(it.value)
            it = self.next(it)
        temp.push_front(e)
        while it is not self.end:
            temp.push_front(it.value)
            it = self.next(it)
        it = temp.begin
        self.clear()
        while it is not temp.end:
            self.push_front(it.value)
            it = self.next(it)

    def copy(self):  # renvoie une copie de la liste self
        it = self.begin
        temp = ListeChaine()
        while it is not self.end:
            temp.push_front(it.value)
            it = self.next(it)
        copy = ListeChaine()
        it = temp.begin
        while it is not temp.end:
            copy.push_front(it.value)
            it = copy.next(it)
        return copy

    def milieu(self):  # renvoie l’élément situé en milieu de liste
        pass

    def __len__(self):  # renvoie le nombre d’éléments de la liste
        it = self.begin
        length = 0
        while it is not self.end:
            length += 1
            it = self.next(it)
        return length

    def transferer(self, l2):  # Transfère les éléments de l2 dans self. La liste l2 devient vide.
        it = l2.begin
        temp = ListeChaine()
        while it is not l2.end:
            temp.push_front(self.value(it))
            it = l2.next(it)
        l2.clear()
        it = self.begin
        while it is not self.end:
            temp.push_front(it.value)
            it = self.next(it)
        self.clear()
        it = temp.begin
        while it is not temp.end:
            self.push_front(it.value)
            it = self.next(it)

    def recherche_element(self, e):  # renvoie la première cellule contenant e ou la cellule de fin de liste.
        it = self.begin
        while self.value(it) != e and it is not self.end:
            it = self.next(it)
        return it


l = ListeChaine()
l.push_front(1)
l.push_front(2)
l.push_back(0)

print(l)

l.insert(0, 11)
print(l)

x = l.copy()
x.push_front("Paf")

print(l)
print(x)

print(len(l))
l.transferer(x)
print(l)
print(x)

print(l.recherche_element("Paf"))
