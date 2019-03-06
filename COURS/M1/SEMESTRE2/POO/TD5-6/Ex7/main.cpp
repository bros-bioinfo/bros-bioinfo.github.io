//
// Created by eliot on 22/02/19.
//

#include <iostream>
#include "PointColored.h"
#include "PointMass.h"
#include "PointColMass.h"

using namespace std;

int main() {
    PointMass pm(0,0,1);
    PointColored pc(0,0,35);
    PointColMass pcm(0,0,33,1);
    pm.show();
    pc.show();
    pcm.show();
}