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

    b.setX(1);
    b.setY(2);

    cout << (coincinde(b, a) ? "Same\n" : "Not the same\n");

    b.setZ(3);

    cout << (coincinde(b, a) ? "Same\n" : "Not the same\n");

    cout << a.produitScalaire(b) << endl;

    Vecteur3D c = a.somme(b);
    c.affiche();
}