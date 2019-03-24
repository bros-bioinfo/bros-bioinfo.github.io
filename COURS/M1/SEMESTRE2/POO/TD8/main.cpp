//
// Created by eliot on 21/02/19.
//

#include <vector>
#include <iostream>
#include "Annuaire.h"

using namespace std;

int main() {
    Annuaire annuaire;
    annuaire.insertInPlace(People("Ragueneau", "Eliot", "02.**.**.**.**", "06.**.**.**.**",
            15, "Beaufleury", "Bordeaux", 33800));
    annuaire.insertInPlace(People("Bouquet", "Matthieu", "02.00.00.00.00", "06.**.**.**.**",
            15, "Beaufleury", "Bordeaux", 33800));

    annuaire.insertInPlace(People());

    annuaire.insertInPlace(People("Ragueneau", "Bébé", "02.**.**.**.**", "06.**.**.**.**",
                                  15, "Beaufleury", "Bordeaux", 33800));

    annuaire.show();

    Annuaire ragueneau = annuaire.search("Ragueneau");
    ragueneau.show();

    vector<int> pile;

    pile.push_back(1);

    pile.push_back(2);

    pile.push_back(3);


    while (!pile.empty()){
        cout << pile.at(pile.size() - 1) << endl;
        pile.pop_back();
    }

}