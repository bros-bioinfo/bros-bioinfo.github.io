//
// Created by eliot on 22/02/19.
//

#include <iostream>
#include "Color.h"

using namespace std;

void Color::colorize() {
    cout << "\x1B[" << color << "m";
}

void Color::uncolorize() {
    printf("\033[0m");
}

Color::Color(short color) : color(color) {}
