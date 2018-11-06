def create_cell(value, next):
    return {'value': value, 'next': next}


def create_list():
    end_cell = create_cell(None, None)
    return {'begin': end_cell, 'end': end_cell}


def push_front(l, e):
    cell = create_cell(e, l['begin'])
    l['begin'] = cell


def begin(l):
    return l['begin']


def end(l):
    return l['end']


def next_(l, cell):
    return cell['next']


def value(l, cell):
    return cell['value']


l = create_list()
push_front(l, 2)
push_front(l, 4)
push_front(l, 2)
push_front(l, 4)
push_front(l, 5)
it = begin(l)
while it is not end(l):
    print(value(l, it))
    it = next_(l, it)
