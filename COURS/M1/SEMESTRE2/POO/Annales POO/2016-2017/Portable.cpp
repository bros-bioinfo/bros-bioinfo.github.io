//
// Created by eliot on 22/03/19.
//

#include <iostream>
#include "Portable.h"
using namespace std;

Portable::Portable(const std::string &modele) : Ordinateur(modele) {}

std::string Portable::donnerInformation() {
    return "L'ordinateur " + modele + " est un portable";
}
