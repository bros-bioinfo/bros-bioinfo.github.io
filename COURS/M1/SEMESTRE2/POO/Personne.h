//
// Created by eliot on 08/01/19.
//

#ifndef POO_PERSONNE_H
#define POO_PERSONNE_H

#include <string>

using namespace std;

class Personne {
private:
    string nom;
    string society;
    int bite;
public:
    Personne(const string &nom, const string &society, int bite);

    Personne(const string &nom);
};


#endif //POO_PERSONNE_H
