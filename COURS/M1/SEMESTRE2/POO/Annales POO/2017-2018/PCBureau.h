//
// Created by eliot on 22/03/19.
//

#ifndef ANNALESPOO_PCBUREAU_H
#define ANNALESPOO_PCBUREAU_H


#include "Ordinateur.h"

class PCBureau : public Ordinateur {
private:
    int taille_ecran;
public:
    PCBureau(const std::string &modele, const std::string &numeroSerie, int taille_ecran);

    virtual std::string affiche();
};


#endif //ANNALESPOO_PCBUREAU_H
