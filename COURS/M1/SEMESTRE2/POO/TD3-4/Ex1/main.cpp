//
// Created by eliot on 18/01/19.
//

#include "Personne.h"

using namespace std;

int main() {
    char nom[20] = "Ragueneau";
    char prenom[20] = "Eliot";
    Personne *personnes[3];

    personnes[0] = new Personne(nom, prenom, 21);
    personnes[1] = new Personne();
    personnes[2] = new Personne(*personnes[0]);

    for (Personne *personne: personnes) {
        personne->affiche();
        delete personne;
    }

    return 0;
}