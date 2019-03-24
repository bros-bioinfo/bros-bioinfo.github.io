//
// Created by eliot on 24/03/19.
//

#include "Tableau.h"

void Tableau::rangeDans(int val, int indice) {
    if (indice >= nbr_elt) {
        throw AddressageException("Indice dépasse du tableau", indice);
    }
    pelements[indice] = val;
}
