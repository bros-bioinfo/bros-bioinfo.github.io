//
// Created by eliot on 22/03/19.
//

#ifndef ANNALESPOO_PORTABLE_H
#define ANNALESPOO_PORTABLE_H


#include "Ordinateur.h"

class Portable : public Ordinateur {
public:
    Portable(const std::string &modele);

    virtual std::string donnerInformation();

};


#endif //ANNALESPOO_PORTABLE_H
