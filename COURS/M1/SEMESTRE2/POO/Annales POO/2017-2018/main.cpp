#include <iostream>
#include <map>
#include <memory>
#include "Forme.h"
#include "Cercle.h"
#include "Sphere.h"
#include "Ordinateur.h"


using namespace std;


int main() {
//    Forme F(2.1, 3.2);
    Cercle C(4.2, 5.3, 5.0);

    Sphere S = Sphere(1, 2, 3, 4);

    Sphere *PSphere;
    Cercle *PCercle;
    PCercle = &S;
//    PSphere = PCercle;
    PSphere = &S;
    PCercle->affiche();
//    Return 0;


///////////////////////////

    static map<string, shared_ptr<Ordinateur>> ordinateurs;
    ;
    string numeroSerie;
    string modele;

    for (int x = 0; x < 2; x++) {
        cout << "Modèle ?\n";
        cin >> modele;
        cout << "Numéro de série ?\n";
        cin >> numeroSerie;
        ordinateurs[numeroSerie] = make_shared<Ordinateur>(modele, numeroSerie);
    }

    map<string, shared_ptr<Ordinateur>>::iterator it;

    for (it = ordinateurs.begin(); it != ordinateurs.end(); ++it) {
        it->second->affiche();
    }

//    for (auto &couple : ordinateurs) {
//        couple.second->affiche();
//    }
    return 0;
}