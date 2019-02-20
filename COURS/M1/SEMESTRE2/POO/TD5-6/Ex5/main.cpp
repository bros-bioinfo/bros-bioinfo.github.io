//
// Created by eliot on 18/01/19.
//

#include <iostream>
#include "Chien.h"
#include "Dauphin.h"


using namespace std;


int main() {
    Dauphin flipper("Flipper", 4, false, 0, 0);
    flipper.presenter();
    flipper.engendrer();
}