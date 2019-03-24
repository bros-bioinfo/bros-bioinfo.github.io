//
// Created by eliot on 22/03/19.
//

#ifndef ANNALESPOO_ORDINATEUR_H
#define ANNALESPOO_ORDINATEUR_H


#include <string>

class Ordinateur {
protected:
    std::string modele;
    std::string numeroSerie;

public:
    Ordinateur();

    Ordinateur(const std::string &modele, const std::string &numeroSerie);

    Ordinateur(const Ordinateur &src);

    virtual std::string affiche();

};


#endif //ANNALESPOO_ORDINATEUR_H
