import graphviz


class BinaryTree:

    def __init__(self, root=None, label=None):
        self.__root = None
        self.__left_sons = {}
        self.__right_sons = {}
        self.__fathers = {}
        self.__labels = {}
        self.__nb_null = 0
        if root:
            self.add_root(root, label)

    def father(self, son):
        return self.__fathers[son]

    def sons(self, pere) -> list:
        return [self.__left_sons[pere], self.__right_sons[pere]]

    def left_son(self, father):
        return self.__left_sons[father]

    def right_son(self, father):
        return self.__right_sons[father]

    @property
    def root(self):
        return self.__root

    def label(self, node):
        return self.__labels[node]

    def add_root(self, root, label=None):
        if self.__root:
            print("There is already a root")
            return
        self.__root = root
        self.__fathers[root] = None
        self.__left_sons[root] = []
        self.__right_sons[root] = []
        self.__labels[root] = label

    def add_node(self, node: int, father: int, left_son: bool, label=None):
        if father not in self.__fathers:
            print("Le père du noeud donné n'existe pas")
            return

        if node not in self.__fathers:

            if left_son:
                if not self.__left_sons[father]:
                    self.__left_sons[father] = node
                else:
                    raise (ValueError("Ce père a déjà un fils gauche"))
            else:
                if not self.__right_sons[father]:
                    self.__right_sons[father] = node
                else:
                    raise (ValueError("Ce père a déjà un fils droit"))

            self.__fathers[node] = father
            self.__left_sons[node] = None
            self.__right_sons[node] = None
            self.__labels[node] = label

    def __len__(self):
        return len(self.infixe_browse())

    def infixe_browse(self, to_fill: list = None):
        if not to_fill:
            to_fill = []
        self.__sub_infixe_browse(to_fill, self.root)
        return to_fill

    def __sub_infixe_browse(self, to_fill, current_node):
        if current_node:
            self.__sub_infixe_browse(to_fill, self.left_son(current_node))
            to_fill.append(current_node)
            self.__sub_infixe_browse(to_fill, self.right_son(current_node))

    def prefixe_browse(self, to_fill: list = None):
        if not to_fill:
            to_fill = []
        self.__sub_prefixe_browse(to_fill, self.root)
        return to_fill

    def __sub_prefixe_browse(self, to_fill, current_node):
        if current_node:
            to_fill.append(current_node)
            self.__sub_prefixe_browse(to_fill, self.left_son(current_node))
            self.__sub_prefixe_browse(to_fill, self.right_son(current_node))

    def postfixe_browse(self, to_fill: list = None):
        if not to_fill:
            to_fill = []
        self.__sub_postfixe_browse(to_fill, self.root)
        return to_fill

    def __sub_postfixe_browse(self, to_fill, current_node):
        if current_node:
            self.__sub_postfixe_browse(to_fill, self.left_son(current_node))
            self.__sub_postfixe_browse(to_fill, self.right_son(current_node))
            to_fill.append(current_node)

    def show(self):
        self.__nb_null = 0
        with open("tree.dot", 'w') as dot_file:
            dot_file.write('digraph G{\n\tgraph [ordering="out"];\n')
            list_of_relation_strings = []
            self.__sub_write__(dot_file, list_of_relation_strings, self.root)
            dot_file.write("\n")
            dot_file.writelines(list_of_relation_strings)
            dot_file.write("}")
        graphviz.render("dot", "png", "tree.dot")

    def __sub_write__(self, dot_file, list_of_relation_strings: list, current_node):
        dot_file.write('\tn{} [ label="{}" ];\n'.format(current_node,
                                                        self.label(current_node) if self.label(current_node)
                                                        else current_node))

        left_son = self.left_son(current_node)
        right_son = self.right_son(current_node)
        if left_son or right_son:
            if left_son:
                list_of_relation_strings.append(
                    '\tn{} -> n{};\n'.format(current_node, left_son))
                self.__sub_write__(
                    dot_file, list_of_relation_strings, left_son)
            else:
                self.__nb_null += 1
                dot_file.write(
                    '\tnull{} [ label="." ];\n'.format(self.__nb_null))
                list_of_relation_strings.append(
                    '\tn{} -> null{};\n'.format(current_node, self.__nb_null))

            if right_son:
                list_of_relation_strings.append(
                    '\tn{} -> n{};\n'.format(current_node, right_son))
                self.__sub_write__(
                    dot_file, list_of_relation_strings, right_son)
            else:
                self.__nb_null += 1
                dot_file.write(
                    '\tnull{} [ label="." ];\n'.format(self.__nb_null))
                list_of_relation_strings.append(
                    '\tn{} -> null{};\n'.format(current_node, self.__nb_null))

    @property
    def height(self):
        return self.__sub_height(self.root, 0)

    def __sub_height(self, current_node, current_height):
        if not current_node:
            return current_height

        left_son = self.left_son(current_node)
        right_son = self.right_son(current_node)

        if not left_son and not right_son:
            return current_height

        left_height = self.__sub_height(left_son, current_height + 1)
        right_height = self.__sub_height(right_son, current_height + 1)

        if left_height > right_height:
            return left_height
        else:
            return right_height

    def is_perfect(self):
        node = self.root
        height = 0
        while node is not None:
            height += 1
            node = self.left_son(node)
        perfect, leveled_up = self.__sub_is_perfect(self.root, height, 1, False)
        return perfect

    def __sub_is_perfect(self, current_node, height, current_height, level_up: bool):
        # An empty tree is perfect
        if not current_node:
            return True, False

        left_son = self.left_son(current_node)
        right_son = self.right_son(current_node)

        if not left_son and not right_son:  # SI c'est une feuille
            if level_up and current_height != height - 1:  # Si on a level up, alors la feuille doit être à h - 1 pour passer
                return False, level_up
            if current_height == height:  # Si la feuille est à la bonne hauteur
                return True, level_up  # Tout va bien on continue
            elif current_height == height - 1:  # Sinon si on est à h - 1, on a level up
                return True, True  # Donc c'est toujours éligible à la perfection, mais on notifie le level up
            else:
                return False, level_up  # Mais si c'est ni à h, ni à h - 1 alors c'est pas parfait

        if not left_son or not right_son:  # Si on a une feuille d'un côté mais pas de l'autre
            # Si on a un fils gauche qui est une feuille, pas de fils droit, et qu'on est à h - 1
            if left_son and not right_son and current_height == height - 1 and not (
                    self.left_son(left_son) or self.right_son(left_son)):
                return True, True  # alors on a juste level up
            return False, level_up  # Sinon ce n'est pas parfait

        # Si on est ici, alors c'est que le current_node possède ses deux fils, donc on poursuit la recursive
        left, leveled_up = self.__sub_is_perfect(left_son, height, current_height + 1, level_up)
        if leveled_up:  # Si à gauche on a leveled_up
            level_up = True  # On update le flag level_up
        right, leveled_up = self.__sub_is_perfect(right_son, height, current_height + 1, level_up)
        if leveled_up:
            level_up = True
        # Pour être parfait, on doit avoir la gauche ET la droite de parfait. On transmet le level_up
        return left and right, level_up

    def is_complete(self):
        node = self.root
        height = 0
        while node is not None:
            height += 1
            node = self.left_son(node)
        perfect, leveled_up = self.__sub_is_perfect(self.root, height, 1, False)
        return perfect and not leveled_up

    def is_binary_research_tree(self):
        infixe = self.infixe_browse()
        for i in range(len(infixe) - 1):
            if infixe[i] > infixe[i + 1]:
                return False
        return True

    def is_tas(self):
        node = self.root
        height = 0
        while node is not None:
            height += 1
            node = self.left_son(node)
        return self.__sub_is_tas(self.root, 1, height, None)

    def __sub_is_tas(self, current_node, current_height, height, previous_value):
        if not current_node:
            return True

        current_value = self.label(current_node)
        if previous_value:
            if current_value < previous_value:
                return False

        left_son = self.left_son(current_node)
        right_son = self.right_son(current_node)

        if not left_son and not right_son:
            return current_height == height

        if not left_son or not right_son:
            return False

        return self.__sub_is_tas(left_son, current_height + 1, height, current_value) and \
               self.__sub_is_tas(right_son, current_height + 1, height, current_value)


class BinaryResearchTree(BinaryTree):
    def __init__(self, elements: list = None):
        super().__init__()
        if elements:
            self.add_root(elements[0])
            for element in elements[1:]:
                self.insert(element)

    def insert(self, element, label=None):
        if self.root:
            self.__sub_insert(element, label, self.root)

    def __sub_insert(self, element, label, current_node):
        if element < current_node:
            left_son = self.left_son(current_node)
            if not left_son:
                self.add_node(element, current_node, True, label)
            else:
                self.__sub_insert(element, label, left_son)
        else:
            right_son = self.right_son(current_node)
            if not right_son:
                self.add_node(element, current_node, False, label)
            else:
                self.__sub_insert(element, label, right_son)

    def search(self, element):
        return self.__sub_search(element, self.root)

    def __sub_search(self, element, current_node):
        if element == current_node:
            return True
        elif element < current_node:
            left_son = self.left_son(current_node)
            if not left_son:
                return False
            else:
                return self.__sub_search(element, left_son)
        else:
            right_son = self.right_son(current_node)
            if not right_son:
                return False
            else:
                return self.__sub_search(element, right_son)


binary_tree = BinaryTree(1)
binary_tree.add_node(2, 1, left_son=True)
binary_tree.add_node(3, 1, left_son=False)
binary_tree.add_node(4, 2, left_son=False)
binary_tree.add_node(5, 3, left_son=True)
binary_tree.add_node(6, 3, left_son=False)
binary_tree.add_node(7, 5, left_son=True)

print(binary_tree.prefixe_browse())
print(binary_tree.infixe_browse())
print(binary_tree.postfixe_browse())

binary_tree.show()

binary_research_tree = BinaryResearchTree([5, 3, 7, 2, 4, 6])
binary_research_tree.show()
print("Search 6 --> True")
print(binary_research_tree.search(6))
print("Search 20 --> False")
print(binary_research_tree.search(20))

print(binary_research_tree.is_perfect())
print(binary_research_tree.is_complete())
binary_research_tree.insert(8)
binary_research_tree.show()
print(binary_research_tree.is_perfect())
print(binary_research_tree.is_complete())

binary_research_tree = BinaryResearchTree([10, 9, 8, 7, 6, 5])
binary_research_tree.show()
print(binary_research_tree.is_perfect())
print(binary_research_tree.is_complete())

tas = BinaryTree(1, 1)
tas.add_node(2, 1, True, 2)
tas.add_node(3, 1, False, 2)
tas.add_node(4, 2, True, 3)
tas.add_node(5, 2, False, 3)
tas.add_node(6, 3, True, 3)
tas.show()
print(tas.is_tas())
tas.add_node(7, 3, False, 3)
tas.show()
print(tas.is_tas())
