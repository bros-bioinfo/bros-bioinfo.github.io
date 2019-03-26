//
// Created by eliot on 24/03/19.
//

#ifndef POO_SIMPLELISTE_H
#define POO_SIMPLELISTE_H


template<class E>
class CElement {
public:
    E value;
    CElement *next;

    virtual ~CElement() {
        delete next;
    }

    CElement(E &value) : value(value) {
        next = nullptr;
    }
};

template<class E>
class SimpleListe {
private:
    CElement<E> *first;
    unsigned int size;
public:
    SimpleListe();

    SimpleListe(const SimpleListe<E> &src);

    virtual ~SimpleListe();

    void ajouterEnTete(E value);

    E retirerEnTete();

    unsigned int nombreElements() const;

    bool estVide() const;

    void afficherContenu() const;

    void trier();

    void swap(CElement<E> *a, CElement<E> *b);
};

#include "SimpleListe.cpp"

#endif //POO_SIMPLELISTE_H
