//
// Created by eliot on 22/03/19.
//

#include <iostream>
#include "Portable.h"
using namespace std;

Portable::Portable(const std::string &modele, const std::string &numeroSerie) : Ordinateur(modele, numeroSerie) {}

std::string Portable::affiche() {
    string affichage = "L'ordinateur " + modele + " est un portable " + numeroSerie + ":...";
    cout << affichage << endl;
    return affichage;
}
