//
// Created by eliot on 18/01/19.
//

#include <iostream>
#include "Matrice.h"
#include "Vecteur.h"

using namespace std;

Vecteur Matrice::produit(Vecteur vecteur) {
    double b[TAILLE];
    for (int i = 0; i < TAILLE; i++) {
        double sum = 0;
        for (int j = 0; j < TAILLE; j++) {
            sum += mat[i][j] * vecteur.vect[j];
        }
        b[i] = sum;
    }
    return Vecteur(b);
}

void Matrice::affiche() {
    for (auto &i : mat) {
        cout << "|";
        for (int j = 0; j < TAILLE - 1; j++) {
            cout << i[j] << ", ";
        }
        cout << i[TAILLE - 1] << "|\n";
    }
    cout << endl;
}
