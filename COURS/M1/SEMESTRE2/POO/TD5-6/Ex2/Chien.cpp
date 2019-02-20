//
// Created by eliot on 12/02/19.
//

#include <iostream>
#include "Chien.h"

using namespace std;

Chien::Chien(int age, const std::string &cri) : Animal(age, "aboie"), cri(cri) {}

Chien::Chien(Chien &copiable) : Animal(copiable), cri(copiable.cri) {}

Chien::Chien() : Animal(), cri("") {}

Chien::~Chien() = default;

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
