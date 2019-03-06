//
// Created by eliot on 22/02/19.
//

#ifndef POO_POINTCOLMASS_H
#define POO_POINTCOLMASS_H


#include "PointColored.h"
#include "PointMass.h"

class PointColMass: public PointColored, public PointMass {
public:
    PointColMass(int x, int y, short color, int mass);

    void show() override;

};


#endif //POO_POINTCOLMASS_H
