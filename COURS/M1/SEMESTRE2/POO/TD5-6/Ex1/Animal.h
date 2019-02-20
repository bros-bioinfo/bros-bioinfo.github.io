//
// Created by eliot on 12/02/19.
//

#ifndef POO_ANIMAL_H
#define POO_ANIMAL_H


#include <string>

class Animal {
protected:
    int age;
    std::string nomDuCri;
public:
    Animal(int age, const std::string &nomDuCri);

    Animal();

    Animal(Animal& copiable);

    void viellir();

    void presenter();

};


#endif //POO_ANIMAL_H
