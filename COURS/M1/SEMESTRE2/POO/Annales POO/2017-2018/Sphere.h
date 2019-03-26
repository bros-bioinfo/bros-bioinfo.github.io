//
// Created by eliot on 20/03/19.
//

#ifndef ANNALESPOO_SPHERE_H
#define ANNALESPOO_SPHERE_H


#include "Cercle.h"

class Sphere : public Cercle {
protected:
    double z;
public:
    Sphere(float _x, float _y, float _r, float _z) : Cercle(_x, _y, _r), z(_z) {}

    virtual void affiche() {
        std::cout << "Affiche sphere x=" << x << " y=" << y << " z=" << z << " r=" << rayon << std::endl;
    }

    void deplace(double dx, double dy, double dz) {
        Cercle::deplace(dx, dy);
        z += dz;
    }
};


#endif //ANNALESPOO_SPHERE_H
