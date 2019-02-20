//
// Created by eliot on 19/02/19.
//

#include <iostream>
#include "Dauphin.h"

using namespace std;

void Dauphin::deplacer() {
    Mammifere::x += vitesse * 2;
    Poisson::x += vitesse * 2;
    Poisson::deplacer();
}

void Dauphin::reproduce() {
    cout << "J'engendre un dauphin\n";
}


Dauphin::~Dauphin() {
    cout << "Je meurt\n";
}

Dauphin::Dauphin(const string &nom, int age, bool femelle, int profondeur, int vitesse)
        : Animal(nom, age, "Hiii", femelle) {
    this->profondeur = profondeur;
    this->vitesse = vitesse;
}
