//
// Created by eliot on 15/01/19.
//

#ifndef POO_COMPTE_H
#define POO_COMPTE_H


#include <string>

class Compte{
    friend class Banque;
private:
    static int cpt;
    int id;
    std::string nom;
    float solde = 0;
public:

    Compte();

    Compte(const std::string &nom, float solde);

    void affiche();

    const int getId() const;

    const std::string &getNom() const;

    double getSolde() const;

    void deposit(double amount);

    void retract(double amount);

    static const int ID = 0;
    static const int NOM = 1;
    static const int SOLDE = 2;
};


#endif //POO_COMPTE_H
