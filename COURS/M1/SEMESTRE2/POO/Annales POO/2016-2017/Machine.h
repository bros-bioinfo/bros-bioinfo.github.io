//
// Created by eliot on 22/03/19.
//

#ifndef ANNALESPOO_MACHINE_H
#define ANNALESPOO_MACHINE_H


#include <string>
#include <iostream>

class Machine {
private:
    float poids;
    std::string utilisateur;
public:
    Machine();

    ~ Machine() { std::cout << "Destructeur" << std::endl; }

    Machine(std::string, float poids);

    Machine(const Machine &src);

    Machine &operator=(const Machine &laMachine);

    std::string getUtilisateur() const;

    float getPoids() const;

    void saisie();
};


#endif //ANNALESPOO_MACHINE_H
