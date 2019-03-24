//
// Created by eliot on 22/03/19.
//
#include <iostream>
#include <vector>
#include "Machine.h"

using namespace std;

void fonction(Machine item) {
    string utilisateur = item.getUtilisateur();
    float poids = item.getPoids();
    cout << utilisateur << " " << poids << endl;
}

Machine fonction2(Machine item) {
    Machine e(item);
    return e;
}

int mainAlpha() {
    cout << "== 1 ==" << endl;
    const int NB_MACHINE = 4;
    Machine materiel[NB_MACHINE];

    cout << "== 2 ==" << endl;
    for (int i = 0; i < NB_MACHINE; i++) {
        fonction(materiel[i]);
    }

    cout << "== 3 ==" << endl;
//    Machine uneMachine(" Jean ");
    Machine uneMachine(" Jean ", 100);
    Machine mac2;
    mac2 = uneMachine;

    cout << "== 4 ==" << endl;
    fonction2(uneMachine);

    cout << "== 5 ==" << endl;
    return 0;
}

/*
 * Permet d'avoir le comportement d'une file FIFO
 */
Machine prochainAVerifier(vector<Machine> &materiel) {
    Machine toReturn = materiel.front();
    materiel.erase(materiel.begin());
    materiel.push_back(toReturn);
    return toReturn;
}

int main() {
    cout << "== 1 ==" << endl;
    vector<Machine> materiel(5);
    for (int i = 0; i < materiel.size(); i++) {
        materiel[i].saisie();
    }

    cout << "== 2 ==" << endl;

    for (int i = 0; i < materiel.size(); i++) {
        fonction(prochainAVerifier(materiel));
    }

    cout << "== 3 ==" << endl;
//    Machine uneMachine(" Jean ");
    Machine uneMachine(" Jean ", 100);
    Machine mac2;
    mac2 = uneMachine;

    cout << "== 4 ==" << endl;
    fonction2(uneMachine);

    cout << "== 5 ==" << endl;
    return 0;
}