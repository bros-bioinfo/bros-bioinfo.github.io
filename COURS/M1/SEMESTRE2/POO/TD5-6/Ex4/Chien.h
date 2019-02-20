//
// Created by eliot on 12/02/19.
//

#ifndef POO_CHIEN_H
#define POO_CHIEN_H


#include "Animal.h"

class Chien : public Animal {
protected:
    std::string cri;
public:
    Chien(int age, const std::string &cri);

    Chien(Chien &copiable);

    Chien();

    ~Chien() override;

    void presenter() ;
};


#endif //POO_CHIEN_H
