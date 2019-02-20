//
// Created by eliot on 18/01/19.
//

#ifndef POO_VECTEUR3D_H
#define POO_VECTEUR3D_H


class Vecteur3D {
private:
    double x;
    double y;
    double z;
public:
    void affiche();

    void affiche(const char *string);

    inline Vecteur3D(double x, double y, double z) {
        this->x = x;
        this->y = y;
        this->z = z;
    }

    inline Vecteur3D() {
        x = 0;
        y = 0;
        z = 0;
    }

    double getX() const;

    void setX(double x);

    double getY() const;

    void setY(double y);

    double getZ() const;

    void setZ(double z);

    friend bool coincinde(Vecteur3D v1, Vecteur3D v2); // friend signifie que la méthode n'est pas membre de la classe
    // Cela implique que la fonction est appelable hors classe ou instance
    // On ne peut donc pas récupérer les attributs d'instances directement,
    //      on doit y accéder par les arguments de la méthode

    double produitScalaire(Vecteur3D v);

    Vecteur3D somme(Vecteur3D v);
};


#endif //POO_VECTEUR3D_H
