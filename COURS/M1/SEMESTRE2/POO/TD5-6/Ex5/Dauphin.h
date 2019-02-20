//
// Created by eliot on 19/02/19.
//

#ifndef POO_DAUPHIN_H
#define POO_DAUPHIN_H

#include "Mammifere.h"

#include "Poisson.h"

class Dauphin : public Mammifere, public Poisson {
public:

    Dauphin(const std::string &nom, int age, bool femelle, int profondeur, int vitesse);

    void deplacer() override;

    ~Dauphin() override;

protected:
    void reproduce() override;
};


#endif //POO_DAUPHIN_H
