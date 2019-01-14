//
// Created by eliot on 08/01/19.
//

#ifndef POO_ANIMAL_H
#define POO_ANIMAL_H


#include <string>
#include <iostream>

using namespace std;

class Animal {
private:
    string nom;
    int age;
    bool vivant;
public:
    Animal(string& nom, int age);

    int getAge();


    void setAge(int year);


    void die();

    inline void
    show() { // inline permet de réduire le temps de calcul en éliminant des sauts dans la RAM, mais duplique la fonction, donc prend plus de RAM
        cout << nom << " : " << age << " ans : " << vivant << endl;
    }
};


#endif //POO_ANIMAL_H
