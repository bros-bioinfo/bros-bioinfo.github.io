//
// Created by eliot on 22/03/19.
//

#include "Ordinateur.h"
#include <iostream>
using namespace std;

Ordinateur::Ordinateur(const std::string &modele, const std::string &numeroSerie) : modele(modele),
                                                                                    numeroSerie(numeroSerie) {}

string Ordinateur::affiche() {
    string affichage = "L'ordinateur " + modele + " " + numeroSerie;
    cout <<  affichage << endl;
    return affichage;
}

Ordinateur::Ordinateur(const Ordinateur &src) : modele(src.modele), numeroSerie(src.numeroSerie) {

}

Ordinateur::Ordinateur() : modele(""), numeroSerie("") {

}
