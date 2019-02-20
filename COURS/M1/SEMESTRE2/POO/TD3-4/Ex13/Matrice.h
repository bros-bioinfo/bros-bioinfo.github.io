//
// Created by eliot on 18/01/19.
//


#ifndef POO_MATRICE_H
#define POO_MATRICE_H

#define TAILLE 3

class Vecteur;

class Matrice {

private:
    double mat[TAILLE][TAILLE]{};
public:
    explicit Matrice(double t[TAILLE][TAILLE]) {
        int i, j;
        for (i = 0; i < TAILLE; i++) {
            for (j = 0; j < TAILLE; j++) {
                mat[i][j] = t[i][j];
            }
        }
    }

    Vecteur produit(Vecteur vecteur);

    void affiche();

    friend Vecteur produit(Matrice matrice, Vecteur vecteur);

    friend Vecteur operator*(Matrice matrice, Vecteur vecteur);


};


#endif //POO_MATRICE_H
