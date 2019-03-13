import graphviz.files


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

    def sons(self, pere) -> list:
        return self.__sons[pere]

    @property
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
        for son in self.sons(node):
            self.__recur_fill__(son, to_fill)

    def level_browse(self, level: int, to_fill: list):
        return self.__sub_level_browse__(level, to_fill, self.root, 0)

    def __sub_level_browse__(self, level: int, to_fill: list, current_node, current_level: int):
        if current_level == level:
            return to_fill.append(current_node)
        for son in self.sons(current_node):
            self.__sub_level_browse__(level, to_fill, son, current_level + 1)

    def distance_from_node(self, target_node, deepness: int):
        to_fill = []
        self.__sub_level_browse__(deepness, to_fill, target_node, 0)
        return to_fill

    @property
    def leaves(self):
        to_fill = []
        self.__sub_browse_leaves__(self.root, to_fill)
        return to_fill

    def __sub_browse_leaves__(self, current_node, to_fill: list):
        sons = self.sons(current_node)
        if not sons:
            return to_fill.append(current_node)
        for son in sons:
            self.__sub_browse_leaves__(son, to_fill)

    @property
    def intern_nodes(self):
        to_fill = []
        self.__sub_browse_intern_nodes__(self.root, to_fill)
        return to_fill

    def __sub_browse_intern_nodes__(self, current_node, to_fill: list):
        sons = self.sons(current_node)
        if sons:
            to_fill.append(current_node)

        for son in sons:
            self.__sub_browse_intern_nodes__(son, to_fill)

    def show(self):
        with open("tree.dot", 'w') as dot_file:
            dot_file.write('digraph G{\n\tgraph [ordering="out"];\n')
            list_of_relation_strings = []
            self.__sub_write__(dot_file, list_of_relation_strings, self.root)
            dot_file.write("\n")
            dot_file.writelines(list_of_relation_strings)
            dot_file.write("}")

        graphviz.render("dot", "png", "tree.dot")

    def __sub_write__(self, dot_file, list_of_relation_strings: list, current_node):
        dot_file.write('\tn{} [ label="{}" ];\n'.format(current_node, self.label(current_node)))
        for son in self.sons(current_node):
            list_of_relation_strings.append('\tn{} -> n{};\n'.format(current_node, son))
            self.__sub_write__(dot_file, list_of_relation_strings, son)


arbre = Arbre(1, 'a')
arbre.add_node(2, 1, 'b')
arbre.add_node(3, 1, 'c')
arbre.add_node(4, 2, 'd')
arbre.add_node(5, 2, 'e')
arbre.add_node(6, 5, 'f')
print(arbre.sons(1))
print(len(arbre))

p = []
arbre.post_fixe_browse(p)
print(p)

p = []
arbre.level_browse(1, p)
print(p)

print(arbre.leaves)

print(arbre.intern_nodes)

arbre.show()
