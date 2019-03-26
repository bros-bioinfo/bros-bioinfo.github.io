//
// Created by eliot on 24/03/19.
//
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
        CElement<E>* srcNode = src.first;
        first = new CElement<E>(srcNode->value);
        CElement<E>* currentNode = first;
        for (int i = 0; i < size - 1; i++) {
            CElement<E>* newNode = new CElement<E>(srcNode->next->value);
            currentNode->next = newNode;
            currentNode = currentNode->next;
            srcNode = srcNode->next;
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
    for (int i = 0; i < size - 1; i++) {
        CElement<E> *current = first;
        for (int j = 0; j < size - i - 1; j++) {
            CElement<E> *next = current->next;
            if (current->value < next->value) {
                swap(current, next);
            }
            current = next;
        }
    }
}

template<class E>
void SimpleListe<E>::swap(CElement<E> *a, CElement<E> *b) {
    E temp = a->value;
    a->value = b->value;
    b->value = temp;
}

template<class E>
SimpleListe<E>::~SimpleListe() {
    delete first;
}
