# -*- coding: utf8 -*-
import os
import sys


class Graphe:

    def __init__(self):
        self.sommets = []
        self.arcs = []
        self.incidence = {}
        self.adjacence = {}
        self.name=raw_input("Donnez un nom à votre fichier (sans extension)")

    def get_name(self):
        return self.name

    def ajouter_sommet(self,value):
        if value not in self.sommets:
            self.sommets.append(value)
            self.adjacence[value]=[]
        else:
            print "Ce sommet existe déjà"

    def get_nb_sommets(self):
        return len(self.sommets)

    def ajouter_un_arc(self,S1,S2,A):
        if A not in self.arcs:
            if (S1 in self.sommets) and (S2 in self.sommets):
                self.arcs.append(A)
                self.incidence[A]=[S1,S2]
                self.adjacence[S1].append(S2)
                self.adjacence[S2].append(S1)

    def liste_incidence(self):
        return self.incidence

    def liste_adjacence(self):
        return self.adjacence

    def nb_aretes(self):
        arcs = 0
        for i in range(len(self.arcs)):
            arcs +=1
        return arcs

    def supprimer_arete(self,A):
        index=0
        if A in self.incidence:
            for arc in self.arcs:
                if(arc == A):
                    del self.arcs[index]
                else:
                    index+=1
            sommetsADelete = list(self.incidence[A])
            del self.incidence[A]
            for cle in self.adjacence:
                if cle in sommetsADelete:
                    index2=0
                    for i in range(len(self.adjacence[cle])):
                        if self.adjacence[cle][index2] in sommetsADelete:
                            del self.adjacence[cle][index2]
                            index2-=1
                        index2+=1
        else:
            print "\nCette arête n'existe pas !\n"

    def supprimer_sommet(self,S):
        arcsAsupprimer = []
        copySommets = list(self.sommets)
        copyIncidence = self.incidence.copy()
        copyArcs = list(self.arcs)
        copyAdjacence = self.adjacence.copy()

        if S in self.sommets:
            for i in range(len(self.sommets)):
                if self.sommets[i]== S:
                    del copySommets[i]
            for arc in self.incidence:
                if(S in self.incidence[arc]):
                    arcsAsupprimer.append(arc)
                    del copyIncidence[arc]

            index = 0
            for i in range(len(self.arcs)):
                if self.arcs[i] in arcsAsupprimer:
                    del copyArcs[index]
                    index-=1
                index +=1

            #suppression des données liées à l'adjacence
            for cle in self.adjacence:
                index=0
                for i in range(len(self.adjacence[cle])):
                    print i
                    print self.adjacence[cle][index]
                    if self.adjacence[cle][index] == S:
                        del copyAdjacence[cle][index]
                        index-=1
                    index +=1
                if cle == S:
                    del copyAdjacence[cle]


            self.sommets = list(copySommets)
            self.incidence = copyIncidence.copy()
            self.arcs = list(copyArcs)
            self.adjacence = copyAdjacence.copy()

        else:
            print "Ce sommet n'existe pas !"


    def ecrire_graphe_non_oriente(self):
        nom = self.name+"_non_oriente.dot"
        fic=open(nom,"w")
        fic.write('graph {')
        fic.write('\n')
        for arc in self.incidence:
            fic.write(str(self.incidence[arc][0]))
            fic.write(" -- ")
            fic.write(str(self.incidence[arc][1])+"[label=\""+str(arc)+"\"];")
            fic.write("\n")
        fic.write("}")
        fic.close()

    def ecrire_graphe_oriente(self):
        c=0
        nom = self.name+"_oriente.dot"
        fic=open(nom,"w")
        fic.write('digraph {')
        fic.write('\n')
        for arc in self.incidence:
            fic.write(str(self.incidence[arc][0]))
            fic.write(" -> ")
            fic.write(str(self.incidence[arc][1])+"[label=\""+str(arc)+"\",color="+couleur[c]+",penwidth=3.0];")
            c+=1
            fic.write("\n")
        fic.write("}")
        fic.close()
        os.system('dot -Tpng '+self.name+'_oriente.dot -o '+self.name+'_oriente.dot')
        choix=raw_input("Voulez-vous ouvrir le fichier contenant le graphe orienté ? y/n")
        if choix == "y":
            os.system('libreoffice '+self.name+'_oriente.dot &')



    def ecrire_graphe_non_oriente(self):
        c=0
        nom = self.name+"_non_oriente.dot"
        fic=open(nom,"w")
        fic.write('graph {')
        fic.write('\n')
        for arc in self.incidence:
            fic.write(str(self.incidence[arc][0]))
            fic.write(" -- ")
            fic.write(str(self.incidence[arc][1])+"[label=\""+str(arc)+"\",color="+couleur[c]+",penwidth=3.0];")
            c+=1
            fic.write("\n")
        fic.write("}")
        fic.close()
        os.system('dot -Tpng '+self.name+'_non_oriente.dot -o '+self.name+'_non_oriente.dot')
        choix=raw_input("Voulez-vous ouvrir le fichier contenant le graphe orienté ? y/n")
        if choix == "y":
            os.system('libreoffice '+self.name+'_non_oriente.dot &')


    # def parcours_en_profondeur(self):

    ###AVANT D ALLER PLUS LOIN PENSER A IMPLEMENTER LA SUPPRESSION DES SOMMETS ET ARETES DANS LES FONCTION supprimer_sommet
    ###ET supprimer_arete  POUR GERER LA LISTE D'ADJACENCE




couleur=["yellow","blue","green","pink","violet","brown","grey","magenta"]
graphe1 = Graphe()
graphe1.ajouter_sommet("A")
graphe1.ajouter_sommet("B")
graphe1.ajouter_sommet("C")
graphe1.ajouter_sommet("D")
graphe1.ajouter_sommet("E")
graphe1.ajouter_sommet("F")
graphe1.ajouter_sommet("G")
graphe1.ajouter_un_arc("A","B","arc1")
graphe1.ajouter_un_arc("B","D","arc2")
graphe1.ajouter_un_arc("B","F","arc3")
graphe1.ajouter_un_arc("A","C","arc4")
graphe1.ajouter_un_arc("C","G","arc5")
graphe1.ajouter_un_arc("A","E","arc6")
graphe1.ajouter_un_arc("F","E","arc7")
print graphe1.__dict__
print "\n\n"
graphe1.supprimer_sommet("A")
print graphe1.__dict__

# print "Nombre de sommets : ",graphe1.get_nb_sommets()
# print "Liste des incidences : ",graphe1.liste_incidence()
# print "Nombre arêtes  : ",graphe1.nb_aretes()



graphe1.ecrire_graphe_oriente()
graphe1.ecrire_graphe_non_oriente()
