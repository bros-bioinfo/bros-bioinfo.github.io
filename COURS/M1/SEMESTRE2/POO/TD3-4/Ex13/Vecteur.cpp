//
// Created by eliot on 18/01/19.
//

#include <iostream>
#include "Vecteur.h"

using namespace std;

void Vecteur::affiche() {
    cout << "(";
    for (int i = 0; i < TAILLE - 1; i++) {
        cout << vect[i] << ", ";
    }
    cout << vect[TAILLE - 1] << ")\n";
}

