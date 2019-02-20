//
// Created by eliot on 18/01/19.
//

#include <iostream>
#include <cstring>
#include "PileEntier.h"

using namespace std;

PileEntier::PileEntier(int n) {
    data = new int[n];
}

PileEntier::PileEntier() {
    data = new int[20];
}

PileEntier::PileEntier(const PileEntier &pile) : index(pile.index){
    data = new int[sizeof(pile.data) / sizeof(int)];
    memcpy(data, pile.data, sizeof(pile.data) + 1);
}

PileEntier::~PileEntier() {
    delete data;
}

void PileEntier::empile(int p) {
    if (!pleine()) {
        index++;
        data[index] = p;
    } else {
        cout << "Pile pleine !\n";
    }
}

int PileEntier::depile() {
    if (!vide()) {
        int p = data[index];
        index--;
        return p;
    }

    cout << "Pile vide !\n";
    return 0;
}

int PileEntier::pleine() {
    if (index == sizeof(data) / sizeof(int)) {
        return 1;
    } else {
        return 0;
    }
}

int PileEntier::vide() {
    if (index == -1) {
        return 1;
    } else {
        return 0;
    }
}
