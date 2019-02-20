//
// Created by eliot on 19/02/19.
//

#ifndef POO_MAMMIFERE_H
#define POO_MAMMIFERE_H


#include "Animal.h"

class Mammifere : virtual public Animal {
protected:
    int vitesse;
public:
    Mammifere(const std::string &nom, int age, const std::string &nomDuCri, bool femelle, int vitesse);

    Mammifere();

    Mammifere(Animal &copiable, int vitesse);


};


#endif //POO_MAMMIFERE_H
