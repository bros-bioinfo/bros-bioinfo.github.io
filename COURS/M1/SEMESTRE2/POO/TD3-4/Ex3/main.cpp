//
// Created by eliot on 18/01/19.
//

#include <iostream>
#include "PileEntier.h"

using namespace std;

int main() {
    auto a = PileEntier(3);
    a.empile(1);
    a.empile(2);
    a.empile(3);

    auto b = PileEntier(a);
    cout << b.depile() << endl;
    cout << b.depile() << endl;

    cout << a.depile() << endl;
}