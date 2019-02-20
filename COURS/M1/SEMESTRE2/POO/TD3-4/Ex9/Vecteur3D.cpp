//
// Created by eliot on 18/01/19.
//

#include <iostream>
#include "Vecteur3D.h"

using namespace std;

//Vecteur3D::Vecteur3D(double x, double y, double z) : x(x), y(y), z(z) {}
//
//Vecteur3D::Vecteur3D(): x(0), y(0), z(0) {}

void Vecteur3D::affiche() {
    cout << "(" << x << ", " << y << ", " << z << ")\n";
}

void Vecteur3D::affiche(const char *string) {
    cout << string << endl;
    affiche();
}

