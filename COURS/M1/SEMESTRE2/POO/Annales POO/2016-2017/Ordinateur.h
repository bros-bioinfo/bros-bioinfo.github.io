//
// Created by eliot on 22/03/19.
//

#ifndef ANNALESPOO_ORDINATEUR_H
#define ANNALESPOO_ORDINATEUR_H


#include <string>

class Ordinateur {
protected:
    std::string modele;

public:
    explicit Ordinateur(const std::string &modele);

    virtual std::string donnerInformation();

};


#endif //ANNALESPOO_ORDINATEUR_H
