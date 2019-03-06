//
// Created by eliot on 22/02/19.
//

#ifndef POO_POINTMASS_H
#define POO_POINTMASS_H


#include "Point.h"
#include "Mass.h"

class PointMass : virtual public Point, public Mass{
public:
    PointMass(int x, int y, int mass);

    void show() override;

};


#endif //POO_POINTMASS_H
