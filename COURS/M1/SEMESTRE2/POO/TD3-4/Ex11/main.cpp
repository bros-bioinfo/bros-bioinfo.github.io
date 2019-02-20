//
// Created by eliot on 18/01/19.
//

#include <iostream>
#include "Vecteur3D.h"

using namespace std;

int main() {
    Vecteur3D a = Vecteur3D(1, 2, 3);
    Vecteur3D b = Vecteur3D();
    a.affiche();
    b.affiche();

    b.fixer_abscisse(1);
    b.fixer_ordonnee(2);

    a.coincinde(b) ? cout << "Same\n" : cout << "Not the same\n";

    b.fixer_cote(3);

    a.coincinde(b) ? cout << "Same\n" : cout << "Not the same\n";

    cout << a.produitScalaire(b) << endl;

    Vecteur3D c = a.somme(b);
    c.affiche();
}