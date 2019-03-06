class Arbre:
    def __init__(self, root=None, label=None):
        self.__root = None
        self.__sons = {}
        self.__fathers = {}
        self.__labels = {}
        if root:
            self.add_root(root, label)

    def father(self, fils):
        return self.__fathers[fils]

    def son(self, pere):
        return self.__sons[pere]

    def root(self):
        return self.__root

    def label(self, node):
        return self.__labels[node]

    def add_root(self, root, label):
        if self.__root:
            print("There is already a root")
            return
        self.__root = root
        self.__fathers[root] = None
        self.__sons[root] = []
        self.__labels[root] = label

    def add_node(self, node: int, father: int, label: str):
        if father not in self.__fathers:
            print("Le père du noeud donné n'existe pas")
            return
        self.__sons[father].append(node)
        self.__fathers[node] = father
        self.__sons[node] = []
        self.__labels[node] = label

    def __len__(self):
        a = []
        return len(self.post_fixe_browse(a))

    def post_fixe_browse(self, to_fill: list):
        self.__recur_fill__(self.__root, to_fill)
        return to_fill

    def __recur_fill__(self, node, to_fill: list):
        to_fill.append(node)
        for son in self.son(node):
            self.__recur_fill__(son, to_fill)

    def level_browse(self, level: int, to_fill: list):
        pass


test = Arbre(1, 'a')
test.add_node(2, 1, 'b')
test.add_node(3, 1, 'c')
print(test.son(1))
print(len(test))
p = []
test.post_fixe_browse(p)
print(p)
