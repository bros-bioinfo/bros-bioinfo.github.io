from typing import *

from graphviz import Digraph


class AlreadyInException(Exception):
    def __init__(self, message: str):
        self.message = message
        pass

    def __str__(self):
        return self.message


class GraphSimpleOriente:
    def __init__(self, adjacents: Dict[int, List[int]] = None):
        self.adjacents = adjacents

    def add_node(self, node: int):
        self.adjacents[node] = [] if node not in self.adjacents else self.adjacents[node]

    # def add_arc(self, src: int, dest: int):
    # self.adjacents[src].append(dest) if src in self.adjacents and dest in self.adjacents else

    def add_full_node(self, node: int, src_nodes: List[int] = None, dest_nodes: List[int] = None):
        if node in self.adjacents:
            raise AlreadyInException("Le noeud est déjà présent")
        if src_nodes:
            for src_node in src_nodes:
                if src_node not in self.adjacents:
                    print("Le noeud source {} n'existe pas, nous allons le créer.".format(src_node))
                    self.add_full_node(src_node, [], [node])
                self.adjacents[src_node].append(node)
        if dest_nodes:
            for dest_node in dest_nodes:
                if dest_node not in self.adjacents:
                    print("Le noeud destination {} n'existe pas, nous allons le créer.".format(dest_node))
                    self.add_full_node(dest_node, [node], [])

            self.adjacents[node] = dest_nodes
        else:
            self.adjacents[node] = []
        pass

    @property
    def sommets(self) -> List[int]:
        return list(self.adjacents.keys())

    @property
    def nb_relations(self):
        return sum([len(self.adjacents[node]) for node in self.adjacents])

    def visualise(self):
        dot = Digraph()
        out = ["digraph {"]
        for node in self.adjacents:
            out.append('\t{} [label="{}"]'.format(node, node))
        for node in self.adjacents:
            for adjacent in self.adjacents[node]:
                out.append("\t{} -> {};".format(node, adjacent))
        out.append("}")

        with open("graphOriente.dot", 'w') as file:
            for string in out:
                file.write(string)
        dot.render("graphOriente.dot", view=True)

    def __str__(self):
        out = "digraph {\n"
        for node in self.adjacents:
            out += '{} [label="{}"]\n'.format(node, node)
        for node in self.adjacents:
            for adjacent in self.adjacents[node]:
                out += "{} -> {};\n".format(node, adjacent)
        return out + "}"


graph = GraphSimpleOriente({1: [2], 2: [1]})
print(graph)
graph.visualise()
