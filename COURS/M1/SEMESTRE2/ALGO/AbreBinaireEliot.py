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

    def add_node(self, node: int, father: int, left_son: bool, label: str = None):
        if father not in self.__fathers:
            print("Le père du noeud donné n'existe pas")
            return

        if node not in self.__fathers:

            if left_son:
                if not self.__left_sons[father]:
                    self.__left_sons[father] = node
                else:
                    raise (ValueError("Ce père a éjà un fils gauche"))
            else:
                if not self.__right_sons[father]:
                    self.__right_sons[father] = node
                else:
                    raise (ValueError("Ce père a éjà un fils droit"))

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
        return self.__sub_is_perfect(self.root, height)

    def __sub_is_perfect(self, current_node, height, current_height=0):
        # An empty tree is perfect
        if not current_node:
            return True

        left_son = self.left_son(current_node)
        right_son = self.right_son(current_node)

        # If leaf node, then its depth must
        # be same as depth of all other leaves.
        if not left_son and not right_son:
            return (height == current_height + 1)

        # If internal node and one child is empty
        if not left_son or not right_son:
            return False

        # Left and right subtrees must be perfect.
        return (self.__sub_is_perfect(left_son, height, current_height + 1) and
                self.__sub_is_perfect(right_son, height, current_height + 1))

    def is_complete(self):
        """Doesn't work"""
        return self.__sub_is_complete(self.root)

    def __sub_is_complete(self, current_node):
        left_son = self.left_son(current_node)
        right_son = self.right_son(current_node)

        if not left_son and not right_son:
            return True
        elif left_son and right_son:
            return self.__sub_is_complete(left_son) and self.__sub_is_complete(right_son)
        else:
            return False

    def is_binary_research_tree(self):
        infixe = self.infixe_browse()
        for i in range(len(infixe) - 1):
            if infixe[i] > infixe[i + 1]:
                return False
        return True


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

binary_research_tree = BinaryResearchTree([5, 3, 7, 2, 4])
binary_research_tree.show()
print(binary_research_tree.search(6))
print(binary_research_tree.search(20))

print(binary_research_tree.is_perfect())
binary_research_tree.insert(6)
binary_research_tree.insert(8)
binary_research_tree.show()
print(binary_research_tree.is_perfect())
500
