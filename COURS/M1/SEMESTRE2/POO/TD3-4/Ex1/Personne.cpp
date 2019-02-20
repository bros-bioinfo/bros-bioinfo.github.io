//
// Created by eliot on 18/01/19.
//

#include <iostream>
#include <cstring>
#include "Personne.h"

using namespace std;

Personne::Personne(char *nom, char *prenom, int age) : age(age) {
    strcpy(this->nom, nom);
    strcpy(this->prenom, prenom);
}

Personne::Personne() : nom("Unknown"), prenom("Unknown"), age(0) {}

Personne::Personne(const Personne &a) : age(a.age) {
    strcpy(nom, a.nom);
    strcpy(prenom, a.prenom);
}

void Personne::affiche() const {
    cout << nom << " " << prenom << " : " << age << " ans" << endl;
}

Personne::~Personne() {

}