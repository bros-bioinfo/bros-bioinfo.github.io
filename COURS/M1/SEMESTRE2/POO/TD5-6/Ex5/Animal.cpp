//
// Created by eliot on 12/02/19.
//

#include <iostream>
#include "Animal.h"

using namespace std;

Animal::Animal(const string &nom, int age, const string &nomDuCri, bool femelle)
        : age(age), nomDuCri(nomDuCri), nom(nom), femelle(femelle) {
    cout << "Animal créé" << endl;
}

Animal::Animal() : age(0), nomDuCri(""), femelle(true), nom("Bête"), x(0), y(0) {
    cout << "Animal std créé" << endl;

}

Animal::Animal(Animal &copiable) {
    nom = copiable.nom;
    age = copiable.age;
    nomDuCri = copiable.nomDuCri;
    femelle = copiable.femelle;
    x = copiable.x;
    y = copiable.y;
    cout << "Animal copié" << endl;
}

void Animal::viellir() {
    age++;
}

void Animal::presenter() {
    cout << "L'animal a " << age << " ans et " << nomDuCri << endl;
}

Animal::~Animal() {
    cout << "Animal mort" << endl;
}

const string &Animal::getNom() const {
    return nom;
}

int Animal::getAge() const {
    return age;
}

const string &Animal::getNomDuCri() const {
    return nomDuCri;
}

bool Animal::isFemelle() const {
    return femelle;
}

int Animal::getX() const {
    return x;
}

int Animal::getY() const {
    return y;
}

void Animal::engendrer() {
    if (femelle) {
        reproduce();
    }
}
