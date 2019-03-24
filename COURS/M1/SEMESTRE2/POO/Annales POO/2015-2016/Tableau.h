#include <utility>

#include <utility>

//
// Created by eliot on 24/03/19.
//

#ifndef POO_TABLEAU_H
#define POO_TABLEAU_H

#include <bits/exception.h>
#include <string>
#include <cstring>

class Tableau {
    class AddressageException : public std::exception {
    private:
        int indice;
        const char *diagnostique;

    public:
        AddressageException(const char *diagnostique, int indice) : indice(indice), diagnostique(diagnostique) {
        }

        const char *what() const noexcept override {
            char *what = new char[100];
            strcat(what, diagnostique);
            strcat(what, " \n\tIndice = ");
            strcat(what, std::to_string(indice).c_str());
            return what;
        }
    };

private:
    int nbr_elt;
    int *pelements;

public:
    Tableau(int nb) {
        nbr_elt = nb;
        pelements = new int[nbr_elt];
        for (int i = 0; i < nbr_elt; i++) {
            pelements[i] = 0;
        }
    }

    int valeurA(int indice) {
        if (indice >= nbr_elt) {
            throw AddressageException("Indice hors limite", indice);
        }
        return pelements[indice];
    }

    void rangeDans(int val, int indice);
};

#endif //POO_TABLEAU_H
