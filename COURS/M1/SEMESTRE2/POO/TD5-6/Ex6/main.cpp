//
// Created by eliot on 22/02/19.
//

#include <iostream>
#include "PointColored.h"

using namespace std;

int main() {
    Point p(3, 5);
    Point *adp = &p;
    PointColored pc(8, 6, 32);
    PointColored *adpc = &pc;
    adp->show();
    adpc->show();//instructions 1
    cout << "---------------------------------------" << endl;
    adp = adpc;
    adp->show();
    adpc->show();//instructions 2
}