//
// Created by eliot on 05/02/19.
//

#include <iostream>

using namespace std;

#define copie1(source, dest) source = dest;

inline void copie2(int source, int dest) { source = dest; }

#define recursive1(n) (n==0)?1: recursive1(n-1)

inline int recursive2(int n) {
    int out;
    if (n == 0) {
        out = 1;
    } else {
        out = recursive2(n - 1) + 1;
    }
    cout << out << endl;
    return out;
}

int main() {

    int a = 5;
    int b = 8;

    copie1(a, b);
    cout << a << endl;

    a = 5;

    copie2(a, b);
    cout << a << endl;

    float c = 1.2;
    float d = 1.4;

    copie1(c, d)
    cout << c << endl;

    c = 1.2;
    copie2(c, d);
    cout << c << endl;

//    cout << recursive1(5) << endl;
    recursive2(5);
}