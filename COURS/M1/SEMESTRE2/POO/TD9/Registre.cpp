//
// Created by eliot on 22/02/19.
//

#include <iostream>
#include "Registre.h"

using namespace std;

void Registre::addPeople(People p) {

    registre[p.getInseeNumber()] = p;

}

void Registre::addPeople() {
    People people = People::newPeople();
    registre[people.getInseeNumber()] = people;
}

void Registre::show() {
    map<string, People>::iterator it;
    for (it = registre.begin(); it != registre.end(); ++it) {
        cout << it->first << " => ";
        it->second.show();
        cout << endl;
    }

}

void Registre::showHFRatio() {
    int nHomme = 0;
    int nFemme = 0;

    map<string, People>::iterator it;
    for (it = registre.begin(); it != registre.end(); ++it) {
        if (it->first.at(0) == '1') {
            nHomme++;
        } else if (it->first.at(0) == '2') {
            nFemme++;
        }
    }

    cout << "Nombre de femmes : " << nFemme << "\nNombre d'hommes : " << nHomme << "\nRatio H/F : " << nHomme / nFemme;

}
