//
// Created by eliot on 15/01/19.
//

#ifndef POO_BANQUE_H
#define POO_BANQUE_H


#include <vector>
#include "Compte.h"

class Banque : {
private:
    std::vector<Compte> comptes;

public:

    Compte & search(int id);

    Compte &search(const std::string &nom);

    void newAccount(Compte compte);

    void delAccount(int id);

    void delAccount(std::string nom);

    void affiche();

    void sort(int compteProperty = 3);


private:
    void swap(Compte &a, Compte &b);

    int partition(std::vector<Compte> &vecComptes, int low, int high, int compteProperty);

    void quickSort(std::vector<Compte> &vecComptes, int low, int high, int compteProperty);

};


#endif //POO_BANQUE_H
