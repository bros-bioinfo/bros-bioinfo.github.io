//
// Created by eliot on 12/02/19.
//

#include <iostream>
#include "Animal.h"

using namespace std;

Animal::Animal(int age, const std::string &nomDuCri) : age(age), nomDuCri(nomDuCri) {}

Animal::Animal() : age(0), nomDuCri("") {}

Animal::Animal(Animal &copiable) {
    age = copiable.age;
    nomDuCri = copiable.nomDuCri;
}

void Animal::viellir() {
    age++;
}

void Animal::presenter() {
    cout << "L'animal a " << age << " ans et " << nomDuCri << endl;
}
