//
// Created by eliot on 12/02/19.
//

#include <iostream>
#include <cstring>

using namespace std;

int somme(int un, int deux) {
    return un + deux;
}

float somme(float un, float deux) {
    return un + deux;
}

int *somme(const int un[], const int deux[]) {

    static int out[sizeof(un) - 1];
    for (int i = 0; i < sizeof(un) - 1; i++) {
        out[i] = *(un + i) + *(deux + i);
    }
    return out;
}

int somme(int un, int deux, int trois) {
    return un + deux + trois;
}

float somme(int un, float deux) {
    return un + deux;
}

int main() {
    int a[7] = {1, 2, 3, 4, 5, 6, 7};
    int b[7] = {10, 20, 30, 40, 50, 60, 70};


    cout << somme(1, 2) << endl;
    cout << somme(1.1f, 1.2f) << endl;

    int *out = somme(a, b);
    for (int i = 0; i < sizeof(a) / sizeof(a[0]); i++) {
        cout << *(out + i) << endl;
    }

    short shortA = 1;
    short shortB = 3;
    cout << somme(shortA, shortB) << endl;
    cout << somme(1, 2, 3) << endl;
    cout << somme(1, 2.5f) << endl;

}