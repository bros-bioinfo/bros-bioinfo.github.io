//
// Created by eliot on 15/01/19.
//

#include <iostream>
#include <algorithm>
#include "Banque.h"

using namespace std;

void Banque::newAccount(Compte compte) {
    comptes.push_back(compte);
}

void Banque::delAccount(int id) {
    for (int i = 0; i < comptes.size(); i++) {
        if (comptes[i].getId() == id) {
            comptes.erase(comptes.begin() + i);
        }
    }
}

void Banque::delAccount(std::string nom) {
    for (int i = 0; i < comptes.size(); i++) {
        if (comptes[i].getNom() == nom) {
            comptes.erase(comptes.begin() + i);
        }
    }
}

void Banque::affiche() {
    cout << "--------------Banque--------------\n";

    for (Compte compte: comptes) {
        compte.affiche();
    }
    cout << "----------------------------------\n\n";

}

Compte &Banque::search(int id) {
    for (auto &compte : comptes) {
        if (compte.getId() == id) {
            return compte;
        }
    }
}

Compte &Banque::search(const std::string &nom) {
    for (auto &compte : comptes) {
        if (compte.nom == nom) {
            return compte;
        }
    }
}

void Banque::swap(Compte &a, Compte &b) {
    if (&a != &b) {
        a.affiche();
        cout << "\t||\n\t||\n\t\\/\n";
        b.affiche();
        cout << endl;

        Compte t = a;
        a = b;
        b = t;
    }

}

int Banque::partition(vector<Compte> &vecComptes, int low, int high, const int compteProperty) {
    Compte pivot = vecComptes[high];    // pivot
    int i = (low - 1);  // Index of smaller element

    for (int j = low; j <= high - 1; j++) {
        // If current element is smaller than or
        // equal to pivot
        switch (compteProperty) {
            case Compte::ID:
                if (vecComptes[j].id <= pivot.id) {
                    i++;    // increment index of smaller element
                    swap(vecComptes[i], vecComptes[j]);
                }
                break;
            case Compte::NOM:
                if (vecComptes[j].nom <= pivot.nom) {
                    i++;    // increment index of smaller element
                    swap(vecComptes[i], vecComptes[j]);
                }
                break;
            case Compte::SOLDE:
            default:
                if (vecComptes[j].solde <= pivot.solde) {
                    i++;    // increment index of smaller element
                    swap(vecComptes[i], vecComptes[j]);
                }
                break;
        }
    }
    swap(vecComptes[i + 1], vecComptes[high]);
    return (i + 1);
}

/* The main function that implements QuickSort
 arr[] --> Array to be sorted,
  low  --> Starting index,
  high  --> Ending index */
void Banque::quickSort(vector<Compte> &vecComptes, int low, int high, const int compteProperty) {
    if (low < high) {
        /* pi is partitioning index, vecComptes[p] is now
           at right place */
        int pi = partition(vecComptes, low, high, compteProperty);

        // Separately sort elements before
        // partition and after partition
        quickSort(vecComptes, low, pi - 1, compteProperty);
        quickSort(vecComptes, pi + 1, high, compteProperty);
    }
}


void Banque::sort(const int compteProperty) {
    quickSort(comptes, 0, int(comptes.size() - 1), compteProperty);
}



