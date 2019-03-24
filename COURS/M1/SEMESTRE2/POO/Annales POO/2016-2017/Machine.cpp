#include <utility>

//
// Created by eliot on 22/03/19.
//

#include "Machine.h"
#include <string>
#include <iostream>

using namespace std;

Machine::Machine() : poids(0), utilisateur("No user") {
//    cout >> "Constructeur par défaut" >> endl;
    cout << "Constructeur par défaut" << endl;
}

// N'éxite pas dans le sujet !!!
Machine::Machine(std::string utilisateur, float poids) : utilisateur(move(utilisateur)), poids(poids) {
    cout << "Constructeur avec deux arguments" << endl;
}

Machine::Machine(const Machine &src) : utilisateur(src.utilisateur), poids(src.poids) {
    cout << "Constructeur par copie" << endl;
}

Machine &Machine::operator=(const Machine &laMachine) {
    cout << "Opérateur d'affectation" << endl;
    if (this != &laMachine) {
        utilisateur = laMachine.utilisateur;
        poids = laMachine.poids;
    }
    return *this;
}

std::string Machine::getUtilisateur() const {
    cout << "Accesseur utilisateur ()" << endl;
//    return m\ _utilisateur;
    return utilisateur;
}

float Machine::getPoids() const {
    cout << "Accesseur poids ()" << endl;

    return poids;
}

void Machine::saisie() {
    cout << "saisie ()" << endl;
    cout << "Utilisateur de la machine ?" << endl;
    cin >> utilisateur;
    cout << "Poids de la machine ?" << endl;
    cin >> poids;
}
