//
// Created by eliot on 22/02/19.
//

#ifndef POO_POINTCOLORED_H
#define POO_POINTCOLORED_H


#include "Point.h"
#include "Color.h"

class PointColored : virtual public Point, public Color{
public:
    PointColored(int x, int y, short color);

    void show() override;
};


#endif //POO_POINTCOLORED_H
