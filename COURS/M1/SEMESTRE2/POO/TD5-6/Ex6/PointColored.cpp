//
// Created by eliot on 22/02/19.
//

#include <iostream>
#include "PointColored.h"
#include <stdlib.h>

using namespace std;

PointColored::PointColored(int x, int y, short color) : Point(x, y), color(color) {}

void PointColored::show() {
    cout << "\x1B[" << color << "m";
    Point::show();
    printf("\033[0m");
}
