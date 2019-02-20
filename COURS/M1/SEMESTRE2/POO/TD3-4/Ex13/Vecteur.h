//
// Created by eliot on 18/01/19.
//

#ifndef POO_VECTEUR_H
#define POO_VECTEUR_H

#define TAILLE 3

class Matrice;

class Vecteur {
    friend class Matrice;

private:
    double vect[TAILLE]{};
public:
    explicit Vecteur(const double t[TAILLE]) {
        for (int i = 0; i < TAILLE; i++) {
            vect[i] = t[i];
        }
    }

    void affiche();

    friend Vecteur produit(Matrice matrice, Vecteur vecteur);

    friend Vecteur operator*(Matrice matrice, Vecteur vecteur);

};

#endif //POO_VECTEUR_H
