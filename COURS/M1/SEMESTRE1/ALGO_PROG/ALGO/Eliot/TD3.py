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


# l = ListeChaine()
# l.push_front(2)
# l.push_front(4)
# l.push_front(2)
# l.push_front(4)
# l.push_front(5)
# it = l.begin
# while it is not l.end:
#     print(l.value(it))
#     it = l.next(it)

def push_back(l, e):# Ajoute un élément en fin de liste
    pass
def insert( l, cell, e ):# Créé une nouvelle cellule contenant l’élément e et insère cette cellule dans la liste juste après la cellule cell.
    pass
def copy( l ):# renvoie une copie de la liste l
    pass
def milieu(l): # renvoie l’élément situé en milieu de liste
    pass
def taille(l): # renvoie le nombre d’éléments de la liste
    pass
def transferer( l1, l2 ): # Transfère les éléments de l2 dans l1. La liste l2 devient vide.
    pass
def recherche_element(l,e): # renvoie la première cellule contenant e ou la cellule de fin de liste.
    pass