//
// Created by eliot on 20/03/19.
//

#ifndef ANNALESPOO_POINT_H
#define ANNALESPOO_POINT_H

#include <iostream>
#include "Forme.h"

class Point : public Forme {
public:
    Point(double _x = 0.0, double _y = 0.0) : Forme(_x, _y) {}

    virtual void affiche() {
        std::cout << "Affiche point x=" << x << " y=" << y << std::endl;
    }
};

#endif //ANNALESPOO_POINT_H
