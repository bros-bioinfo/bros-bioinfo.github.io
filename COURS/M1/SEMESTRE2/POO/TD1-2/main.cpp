#include <utility>
#include <string>
#include <iostream>
#include <cmath>
#include "Banque.h"


using namespace std;

#define MIN(a, b) (((a)<(b)) ? a : b)
#define ABS(number) number<0 ? -number : number

void exchange(int* a, int* b) {
    int c = *a;
    *a = *b;
    *b = c;
}

/*
UML:
 *  - ==> Private
 *  + ==> Public
 *  o ==> Protected
 *
*/



int main() {
    Banque banquePop = Banque();

    banquePop.newAccount(Compte());
    banquePop.newAccount(Compte());
    banquePop.newAccount(Compte());

    banquePop.search(2).deposit(200);

    banquePop.search(1).deposit(400);

    banquePop.search(3).deposit(800);

    banquePop.affiche();

    banquePop.sort(Compte::NOM);

    banquePop.affiche();

}


