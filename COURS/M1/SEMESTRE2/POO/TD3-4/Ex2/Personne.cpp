//
// Created by eliot on 18/01/19.
//


#include <iostream>
#include <cstring>
#include "Personne.h"

using namespace std;

Personne::Personne(char *nom, char *prenom, int age) : age(age) {
    this->nom = new char[strlen(nom)];
    this->prenom = new char[strlen(prenom)];

    strcpy(this->nom, nom);
    strcpy(this->prenom, prenom);

}

Personne::Personne() : age(0) {
    nom = new char[3];
    prenom = new char[6];

    strcpy(nom, "Nom");
    strcpy(prenom, "Prénom");
}

Personne::Personne(const Personne &a) : age(a.age) {
    this->nom = new char[strlen(a.nom)];
    this->prenom = new char[strlen(a.prenom)];

    strcpy(nom, a.nom);
    strcpy(prenom, a.prenom);
}

void Personne::affiche() const {
    cout << nom << " " << prenom << " : " << age << " ans" << endl;
}

Personne::~Personne() {
    delete [] prenom;
    delete [] nom;
}

