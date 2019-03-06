#include <utility>

#include <utility>
#include <iostream>

//
// Created by eliot on 20/02/19.
//

#include "Patient.h"

using namespace std;

Patient::Patient() : nom("Nom"), prenom("Prénom"), pathologie("Pathologie"), priorite(0) {

}

Patient::Patient(string nom, string prenom, string pathologie, int priority) : nom(move(nom)), prenom(move(prenom)),
                                                                               pathologie(move(pathologie)),
                                                                               priorite(priority) {

}

bool Patient::operator>(Patient &other) {
    return priorite > other.priorite;
}

std::ostream& operator<<(std::ostream &os, Patient& patient) {

    os << patient.nom << " " << patient.prenom << " : " << patient.pathologie;
    return os;
}

bool Patient::operator<(Patient &other) {
    return  other > *this;
}

void Patient::die() {
    nom = "";
    prenom = "";
}

Patient::~Patient() = default;
