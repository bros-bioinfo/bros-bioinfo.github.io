//
// Created by eliot on 11/01/19.
//

#include <iostream>
#include <cmath>
#include <cstring>
#include "Point.h"

using namespace std;

int Point::nb_copy = 0;
int Point::nb_default = 0;
int Point::nb_destruct = 0;

Point::Point(char *nom, float x, float y) : x(x), y(y) {
    strcpy(this->nom, nom);
    nb_default++;
}

Point::~Point() {
    nb_destruct++;
}

Point Point::copy() {
    nb_copy++;
    return Point(nom, x, y);
}

void Point::affiche() {
    cout << nom << " : " << x << " " << y << endl;
}

void Point::deplace(float x, float y) {
    this->x = x;
    this->y = y;
}

double Point::distant(Point b) {
    return sqrt(pow((b.x - x), 2) + pow((b.y - y), 2));
}

int Point::getNb_default() {
    return nb_default;
}

int Point::getNb_copy() {
    return nb_copy;
}

int Point::getNb_destruct() {
    return nb_destruct;
}

