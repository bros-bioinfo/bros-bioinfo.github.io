//
// Created by eliot on 22/03/19.
//

#include "Ordinateur.h"
#include <iostream>

using namespace std;

Ordinateur::Ordinateur(const std::string &modele) : modele(modele) {}

string Ordinateur::donnerInformation() {
    return "L'ordinateur " + modele;
}

