```python
class Arbre:
    def __init__(self, root_id=None, root_label=None):
        self.sons = {}
        self.fathers = {}
        self.labels = {}
        self.root = None
        if root_id:
            self.add_root(root_id, root_label)

    def add_root(self, root_id, root_label=None):
        if self.root:
            raise ValueError("Il y a déjà une racine")
        self.root = root_id
        self.sons[root_id] = []
        self.fathers[root_id] = None
        self.labels[root_id] = root_label

    def add_node(self, node_id, father_id, node_label=None):
        if node_id in self.sons:
            raise ValueError("Ce noeud est déjà présent dans l'arbre, veuillez choisir un autre id")
        if father_id not in self.sons:
            raise ValueError("Ce père n'existe pas")
        self.fathers[node_id] = father_id
        self.sons[node_id] = []
        self.sons[father_id].append(node_id)
        self.labels[node_id] = node_label

    def __repr__(self):
        out = ""
        for node in self.sons:
            out += "{}\t{} -> {}\n".format(self.labels[node], node, self.sons[node])
        return out


def fils(A, s):
    return A.sons[s]


def etiquette(A, s):
    return A.labels[s]


def racine(A):
    return A.root


# ============= Fonctions demandées =============

# Exercice 6
def sommets_rouge(A):
    return sommets_rouges_rec(A, racine(A), [])


def sommets_rouges_rec(A, current_node, to_fill):
    if etiquette(A, current_node) == "rouge":
        to_fill.append(current_node)
    for son in fils(A, current_node):
        sommets_rouges_rec(A, son, to_fill)
    return to_fill


# Exercice 7
def est_rouge(A):
    return est_rouge_rec(A, racine(A))


def est_rouge_rec(A, current_node):
    if etiquette(A, current_node) != "rouge":
        return False
    for son in fils(A, current_node):
        if not est_rouge_rec(A, son):
            return False
    return True


# Exercice 8
def sous_arbres_rouge(A):
    return sous_arbres_rouge_rec(A, racine(A), [])


def sous_arbres_rouge_rec(A, current_node, to_fill):
    if est_rouge_rec(A, current_node):
        to_fill.append(current_node)
    for son in fils(A, current_node):
        sous_arbres_rouge_rec(A, son, to_fill)
    return to_fill


# Exercice 9
def a_des_rayures(A):
    return a_des_rayures_rec(A, racine(A), None)


def a_des_rayures_rec(A, current_node, previous_label):
    current_label = etiquette(A, current_node)
    if previous_label and current_label == previous_label:
        return False
    for son in fils(A, current_node):
        if not a_des_rayures_rec(A, son, current_label):
            return False
    return True


# ============= Test =============
full_rouge = Arbre(1, "rouge")

for x in range(2, 40):
    full_rouge.add_node(x, x - 1, "rouge")

assert sommets_rouge(full_rouge) == [x for x in range(1, 40)], sommets_rouge(full_rouge)
assert est_rouge(full_rouge) is True
assert sous_arbres_rouge(full_rouge) == [x for x in range(1, 40)], sous_arbres_rouge(full_rouge)
assert a_des_rayures(full_rouge) is False

rayure = Arbre(1, "rouge")
rayure.add_node(2, 1, "bleu")
rayure.add_node(3, 1, "bleu")
rayure.add_node(4, 2, "rouge")
rayure.add_node(5, 2, "rouge")
rayure.add_node(6, 3, "rouge")
rayure.add_node(7, 3, "rouge")

assert sommets_rouge(rayure) == [1, 4, 5, 6, 7], sommets_rouge(rayure)
assert est_rouge(rayure) is False, rayure
assert sous_arbres_rouge(rayure) == [4, 5, 6, 7]
assert a_des_rayures(rayure) is True, rayure
```