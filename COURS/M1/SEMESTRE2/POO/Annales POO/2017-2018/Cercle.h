//
// Created by eliot on 20/03/19.
//

#ifndef ANNALESPOO_CERCLE_H
#define ANNALESPOO_CERCLE_H


#include "Point.h"

class Cercle : public Point {
protected:
    double rayon;
public:
    Cercle(double _x, double _y, double _r) : Point(_x, _y), rayon(_r) {}

    virtual void affiche() {
        std::cout << "Affiche cercle x=" << x << " y=" << y << " r=" << rayon << std::endl;
    }
};


#endif //ANNALESPOO_CERCLE_H
