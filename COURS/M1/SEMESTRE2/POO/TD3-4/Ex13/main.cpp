//
// Created by eliot on 18/01/19.
//

#include <iostream>
#include "Matrice.h"
#include "Vecteur.h"

using namespace std;

Vecteur produit(Matrice matrice, Vecteur vecteur){
    double b[TAILLE];
    for (int i = 0; i < TAILLE; i++) {
        double sum = 0;
        for (int j = 0; j < TAILLE; j++) {
            sum += matrice.mat[i][j] * vecteur.vect[j];
        }
        b[i] = sum;
    }
    return Vecteur(b);
}

Vecteur operator*(Matrice matrice, Vecteur vecteur){
    return produit(matrice, vecteur);
}



int main() {
    double a[3][3] = {{1, 2, 3},
                      {4, 5, 6},
                      {7, 8, 9}};

    double b[3] = {1, 2, 3};

    Matrice matrice = Matrice(a);
    matrice.affiche();

    Vecteur vecteur = Vecteur(b);
    vecteur.affiche();

    matrice.produit(vecteur).affiche();

    (matrice * vecteur).affiche();
}