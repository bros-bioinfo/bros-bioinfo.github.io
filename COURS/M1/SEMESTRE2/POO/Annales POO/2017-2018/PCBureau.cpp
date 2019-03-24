//
// Created by eliot on 22/03/19.
//

#include <iostream>
#include "PCBureau.h"

using namespace std;

PCBureau::PCBureau(
        const std::string &modele,
        const std::string &numeroSerie,
        int taille_ecran) : Ordinateur(modele, numeroSerie), taille_ecran(taille_ecran) {}

std::string PCBureau::affiche() {
    string affichage =
            "L'ordinateur " + modele + " est un PC Bureau dont l'écran à la taille de " + to_string(taille_ecran) +
            " pouces " +
            numeroSerie + ":...";
    cout << affichage << endl;
    return affichage;
}
