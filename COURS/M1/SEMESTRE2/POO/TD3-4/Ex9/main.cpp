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
}