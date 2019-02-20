//
// Created by eliot on 18/01/19.
//

#include <iostream>
#include "Chien.h"

using namespace std;


int main() {
    Chien a;
    Chien rex(3, "wouaf");


    Animal chouchou;
    chouchou.presenter();
    chouchou = rex;
    chouchou.presenter();
}