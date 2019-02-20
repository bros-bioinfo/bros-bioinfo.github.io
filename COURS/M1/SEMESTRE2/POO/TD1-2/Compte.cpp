//
// Created by eliot on 15/01/19.
//

#include <iostream>
#include "Compte.h"

using namespace std;
int Compte::cpt = 1;

Compte::Compte() : id(cpt), solde(0) {
    cpt++;
    cout << "Nom du bénéficiaire : " << endl;
    string temp;
    cin >> temp;
    nom = temp;

}

Compte::Compte(const string &nom, float solde) : id(cpt), nom(nom), solde(solde) { cpt++; }

double Compte::getSolde() const {
    return solde;
}

void Compte::retract(double amount) {
    solde -= amount;
}

void Compte::deposit(double amount) {
    solde += amount;
}

const int Compte::getId() const {
    return id;
}

const std::string &Compte::getNom() const {
    return nom;
}

void Compte::affiche() {
    cout << "Compte n°" << id << " :\n  - Nom : " << nom << "\n  - Solde : " << solde << endl;
}
