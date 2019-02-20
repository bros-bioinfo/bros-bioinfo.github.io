//
// Created by eliot on 08/01/19.
//

#include "Personne.h"


Personne::Personne(const string &nom, const string &society, int bite) : nom(nom), society(society), bite(bite) {}

Personne::Personne(const string &nom) : nom(nom), society("lambda"), bite(0) {

}
