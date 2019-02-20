//
// Created by eliot on 19/02/19.
//

#include <iostream>
#include "Poisson.h"

using namespace std;

Poisson::Poisson(const std::string &nom, int age, const std::string &nomDuCri, bool femelle, int profondeur)
        : Animal(nom, age, nomDuCri, femelle), profondeur(profondeur) {}

void Poisson::deplacer() {
    profondeur ++;
}

void Poisson::reproduce() {
    cout << "Je ponds des oeufs\n";
}

Poisson::Poisson() : Animal(), profondeur(0) {}
