//
// Created by eliot on 22/02/19.
//

#include <iostream>
#include "PointColored.h"
#include <stdlib.h>

using namespace std;

PointColored::PointColored(int x, int y, short color) : Point(x, y), Color(color) {}

void PointColored::show() {
    colorize();
    Point::show();
    uncolorize();
}
