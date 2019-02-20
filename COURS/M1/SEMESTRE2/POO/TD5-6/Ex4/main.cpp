//
// Created by eliot on 18/01/19.
//

#include <iostream>
#include "Chien.h"

using namespace std;


int main() {
    Animal* c;
    c = new Chien(4, "rrrhhhhhh");
    delete c;
    // virtual permet d'appeller la méthode fille même si c a été initialisé comme un Animal
}