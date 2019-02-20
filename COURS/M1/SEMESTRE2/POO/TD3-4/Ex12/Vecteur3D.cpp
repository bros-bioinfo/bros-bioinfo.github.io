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

double Vecteur3D::getX() const {
    return x;
}

void Vecteur3D::setX(double x) {
    Vecteur3D::x = x;
}

double Vecteur3D::getY() const {
    return y;
}

void Vecteur3D::setY(double y) {
    Vecteur3D::y = y;
}

double Vecteur3D::getZ() const {
    return z;
}

void Vecteur3D::setZ(double z) {
    Vecteur3D::z = z;
}

double Vecteur3D::produitScalaire(Vecteur3D v) {
    return x * v.x + y * v.y + z * v.z;
}

Vecteur3D Vecteur3D::somme(Vecteur3D v) {
    return {x + v.x, y + v.y, z + v.z};
}

bool coincinde(Vecteur3D v1, Vecteur3D v2) {
    return v1.x == v2.x && v1.y == v2.y && v1.z == v2.z;
}
