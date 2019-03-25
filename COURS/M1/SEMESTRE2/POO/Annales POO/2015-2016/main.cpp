//
// Created by eliot on 24/03/19.
//
#include <iostream>
#include "BinaryCode.h"
#include "Tableau.h"
#include "SimpleListe.h"
#include "Pile.h"

using namespace std;

class A {
private:
    int a;
protected:
    int b;
public:
    int c;

    friend int main();

};

class B : public A {
private:
    int d;
public:
    int test() {
        return b + c;
    }
};

int main() {
//    Dans le cas de l'héritage, les éléments déclarés public et protected sont accessibles depuis les classes filles.
//    On peut également déclarer des classes et méthodes friend pour qu'elles aient accès aux données protégées

//    Hors héritage, il faut soit mettre ces éléments en public, soit déclarer certaines classes ou méthodes comme
//    friend pour que celles-ci puissent accéder aux données protégées

    A objet;
    cout << objet.a << objet.b << objet.c << endl;


//    Exercice 2
    BinaryCode a("01001");
    cout << a << endl;
    BinaryCode b("10001001");
    cout << b << endl;
    a = a + b;
    cout << a << endl;

//    Exercice 3
    Tableau tab(3);
    try {
        tab.rangeDans(0, 1);
        tab.rangeDans(1, 2);
        tab.rangeDans(2, 3);
        cout << tab.valeurA(3) << endl;
    } catch (exception &e) {
        cout << e.what() << endl;
    }

//    Exercice 4
    SimpleListe<double> liste;
    liste.ajouterEnTete(1.1);
    liste.ajouterEnTete(2.1);
    liste.ajouterEnTete(3.1);
    liste.ajouterEnTete(4.1);
    liste.ajouterEnTete(3.4);
    liste.afficherContenu();
    liste.trier();
    SimpleListe<double> listeB(liste);
    listeB.afficherContenu();

//    Exercice 5
    Pile<int> pile;
    pile.empiler(1);
    pile.empiler(2);
    pile.empiler(3);
    cout << pile.depiler() << endl;
    cout << pile.depiler() << endl;
    cout << pile[1] << endl;
    cout << pile.taille();

    return 0;
}

