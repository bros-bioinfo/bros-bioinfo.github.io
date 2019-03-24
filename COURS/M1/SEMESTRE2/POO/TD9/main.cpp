//
// Created by eliot on 21/02/19.
//

#include <vector>
#include <iostream>
#include "Registre.h"

using namespace std;

int main() {
    Registre registre;
    registre.addPeople(People("Ragueneau", "Eliot", "02.41.00.00.O0", "06.**.**.**.**",
            15, "Beaufleury", "Bordeaux", 33800, "1234"));
    registre.addPeople(People("Bouquet", "Matthieu", "02.00.00.00.00", "06.**.**.**.**",
            15, "Beaufleury", "Bordeaux", 33800, "1233"));

    registre.addPeople();

    registre.addPeople(People("Ragueneau", "Bébé", "02.**.**.**.**", "06.**.**.**.**",
                                  15, "Beaufleury", "Bordeaux", 33800, "2235"));

    registre.show();
    registre.showHFRatio();




}