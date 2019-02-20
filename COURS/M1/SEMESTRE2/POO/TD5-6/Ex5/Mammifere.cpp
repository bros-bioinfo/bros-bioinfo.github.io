//
// Created by eliot on 19/02/19.
//

#include "Mammifere.h"

Mammifere::Mammifere(const std::string &nom, int age, const std::string &nomDuCri, bool femelle, int vitesse) : Animal(
        nom, age, nomDuCri, femelle), vitesse(vitesse) {}

Mammifere::Mammifere() : Animal(), vitesse(0){}

Mammifere::Mammifere(Animal &copiable, int vitesse) : Animal(copiable), vitesse(vitesse) {}
