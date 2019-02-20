//
// Created by eliot on 12/02/19.
//

#ifndef POO_CHIEN_H
#define POO_CHIEN_H


#include "Mammifere.h"

class Chien : public Mammifere {
protected:
    std::string cri;
public:
    Chien(std::string nom, int age, const std::string &cri);

    Chien(Chien &copiable);

    Chien();

    ~Chien() override;

    void presenter() override;

    void deplacer() override;

protected:
    void reproduce() override;
};


#endif //POO_CHIEN_H
