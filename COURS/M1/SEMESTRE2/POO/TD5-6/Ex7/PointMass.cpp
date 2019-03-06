//
// Created by eliot on 22/02/19.
//

#include <iostream>
#include "PointMass.h"

using namespace std;

PointMass::PointMass(int x, int y, int mass) : Point(x, y), Mass(mass) {}

void PointMass::show() {
    cout << "\x1B[1m";
    Point::show();
}
