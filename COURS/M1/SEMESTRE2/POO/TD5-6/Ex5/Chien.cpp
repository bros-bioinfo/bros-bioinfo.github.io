//
// Created by eliot on 12/02/19.
//

#include <iostream>
#include "Chien.h"

using namespace std;

Chien::Chien(std::string nom, int age, const std::string &cri) : Mammifere(nom, age, "aboie", false, 15), cri(cri) {
    cout << "Chien créé" << endl;
}

Chien::Chien(Chien &copiable) : Mammifere(copiable), cri(copiable.cri) {
    cout << "Chien copié créé" << endl;

}

Chien::Chien() : Mammifere(), cri("") {
    cout << "Chien std créé" << endl;
}

Chien::~Chien() {
    cout << "Chien mort" << endl;
}

void Chien::presenter() {
    if (age < 6) {
        cout << "Le chien a " << age << " ans et aboie :";
        for (int nbCri = 0; nbCri < 3; ++nbCri) {
            cout << " " << cri;
        }
        cout << ".\n";
    } else {
        cout << "Le chien a " << age << " ans et aboie.";
    }
}

void Chien::deplacer() {
    x+= vitesse;
    y+= vitesse;
}

void Chien::reproduce() {
    cout << "J'accouche d'un chien" << endl;
}
