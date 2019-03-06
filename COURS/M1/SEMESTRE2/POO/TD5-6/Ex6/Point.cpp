//
// Created by eliot on 22/02/19.
//

#include <iostream>
#include "Point.h"

using namespace std;

Point::Point(int x, int y) : x(x), y(y) {}

void Point::show() {
    cout << "(" << x << ", " << y << ")\n";
}
