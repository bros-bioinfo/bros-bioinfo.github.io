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
};


#endif //POO_VECTEUR3D_H
