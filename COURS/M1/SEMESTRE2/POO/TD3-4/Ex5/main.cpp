//
// Created by eliot on 18/01/19.
//

#include <iostream>
#include "Personne.h"
#define A 100
#define A 50

using namespace std;

void affiche(const int &n) {
    cout << n << endl;
    /* n += 5;
     * Erreur car on ne peut modifier un argument passé en const dans le prototype
     */
}

int main() {
    affiche(5);
    cout << A << endl;
}