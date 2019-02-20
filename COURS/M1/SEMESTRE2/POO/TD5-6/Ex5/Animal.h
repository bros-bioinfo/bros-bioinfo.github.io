//
// Created by eliot on 12/02/19.
//

#ifndef POO_ANIMAL_H
#define POO_ANIMAL_H


#include <string>

class Animal {
protected:
    std::string nom;
    int age;
    std::string nomDuCri;
    bool femelle;
    int x;
    int y;

    virtual void reproduce() = 0;

public:
    Animal(const std::string &nom, int age, const std::string &nomDuCri, bool femelle);

    Animal();

    Animal(Animal &copiable);

    virtual ~Animal();

    void viellir();

    virtual void presenter();

    const std::string &getNom() const;

    int getAge() const;

    const std::string &getNomDuCri() const;

    bool isFemelle() const;

    int getX() const;

    int getY() const;

    virtual void deplacer() = 0;

    void engendrer();

};


#endif //POO_ANIMAL_H
