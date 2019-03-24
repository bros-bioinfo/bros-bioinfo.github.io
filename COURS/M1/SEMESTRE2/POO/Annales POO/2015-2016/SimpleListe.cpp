//
// Created by eliot on 24/03/19.
//

#include "SimpleListe.h"
#include <iostream>

using namespace std;

template<class E>
SimpleListe<E>::SimpleListe() {
    size = 0;
    first = nullptr;
}

template<class E>
SimpleListe<E>::SimpleListe(const SimpleListe<E> &src) : SimpleListe() {
    if (src.first != nullptr) {
        size = src.size;
        CElement<E> srcNode = *src.first;
        first = &CElement<E>(srcNode.value);
        CElement<E> currentNode = *first;
        for (int i = 0; i < size; i++) {
            CElement<E> newNode(srcNode.next->value);
            currentNode.next = &newNode;
            currentNode = newNode;
            srcNode = *srcNode.next;
        }
    }
}

template<class E>
void SimpleListe<E>::ajouterEnTete(E value) {
    auto newNode = new CElement<E>(value);
    newNode->next = first;
    first = newNode;
    size++;
}

template<class E>
E SimpleListe<E>::retirerEnTete() {
    E toReturn = first->value;
    first = first->next;
    size--;
    return toReturn;
}

template<class E>
unsigned int SimpleListe<E>::nombreElements() const {
    return size;
}

template<class E>
bool SimpleListe<E>::estVide() const {
    return size == 0;
}

template<class E>
void SimpleListe<E>::afficherContenu() const {
    cout << "Taille de la liste = " << size << endl;
    CElement<E> node = *first;
    cout << "[0] : " << node.value << endl;

    for (int i = 1; i < size; ++i) {
        node = *node.next;
        cout << "[" << i << "] : " << node.value << endl;
    }
}

template<class E>
void SimpleListe<E>::trier() {

}