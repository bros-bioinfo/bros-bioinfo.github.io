//
// Created by eliot on 08/01/19.
//

#include "Animal.h"
//#include <string>
//using namespace std;

Animal::Animal(string nom, int age) : nom(move(nom)), age(age), vivant(true) {}

int Animal::getAge() {
    return age;
}

void Animal::setAge(int year) {
    this->age = year;
}

void Animal::die() {
    vivant = false;
}
