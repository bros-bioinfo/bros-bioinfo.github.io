//
// Created by eliot on 20/03/19.
//

#ifndef ANNALESPOO_FORME_H
#define ANNALESPOO_FORME_H


class Forme {
protected:
    double x;
    double y;
public:
    Forme(double _x = 0.0, double _y = 0.0) {
        x = _x;
        y = _y;
    }

    // Pas de constructeur !
    virtual void affiche() = 0;

    void deplace(double dx, double dy) {
        x += dx;
        y += dy;
    }

};


#endif //ANNALESPOO_FORME_H
