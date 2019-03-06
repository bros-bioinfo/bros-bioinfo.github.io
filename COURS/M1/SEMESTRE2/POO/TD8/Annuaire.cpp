//
// Created by eliot on 21/02/19.
//

#include <iostream>
#include "Annuaire.h"

using namespace std;

void Annuaire::insertInPlace(People &p) {

    if (lp.empty()) {
        lp.push_back(p);
        return;
    }


    list<People>::iterator it;

    for (it = lp.begin(); it!= lp.end(); ++it){
        if (p < *it) {
            break;
        }
    }

    lp.insert(it, p);
}

void Annuaire::insertInPlace(People p) {

    if (lp.empty()) {
        lp.push_back(p);
        return;
    }


    list<People>::iterator it;

    for (it = lp.begin(); it!= lp.end(); ++it){
        if (p < *it) {
            break;
        }
    }

    lp.insert(it, p);
}

void Annuaire::show() {
    cout << "=========== ANNUAIRE ===========\n\n";
    for (const auto &item : lp) {
        item.show();
        cout << endl;
    }
    cout << "================================\n";
}


Annuaire Annuaire::search(std::string name) {
    Annuaire goodName;
    for (const auto &people : lp) {
        if (people.getName() == name) {
            goodName.insertInPlace(people);
        }
    }
    return goodName;
}

Annuaire::~Annuaire() {
    lp.clear();
}
