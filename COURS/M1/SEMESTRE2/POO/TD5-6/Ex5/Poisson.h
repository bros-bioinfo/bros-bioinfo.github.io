//
// Created by eliot on 19/02/19.
//

#ifndef POO_POISSON_H
#define POO_POISSON_H


#include "Animal.h"

class Poisson : virtual public Animal {
protected:
    int profondeur;

public:
    Poisson(const std::string &nom, int age, const std::string &nomDuCri, bool femelle, int profondeur);

    Poisson();

    void deplacer() override;

protected:
    void reproduce() override;
};


#endif //POO_POISSON_H
