//
// Created by eliot on 22/02/19.
//

#include "PointColMass.h"

PointColMass::PointColMass(int x, int y, short color, int mass) : Point(x, y), PointMass(x, y, mass),
                                                                  PointColored(x, y, color) {
}

void PointColMass::show() {
    colorize();
    PointMass::show();
    uncolorize();
}
