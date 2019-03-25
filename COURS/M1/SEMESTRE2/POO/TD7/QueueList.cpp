//
// Created by eliot on 20/02/19.
//

#include <iostream>
#include "QueueList.h"

#include <iostream>

using namespace std;

template<class T>
template<class E>
QueueList<T>::CElement<E>::CElement(E &value) : value(value) {
    next = nullptr;
}

template<class T>
template<class E>
void QueueList<T>::CElement<E>::show() {
    cout << value << endl;
}

template<class T>
bool QueueList<T>::push(T element) {
    auto *newElement = new CElement<T>(element);
    newElement->next = first;
    first = newElement;
    size++;
    sort();
    return true;
}

template<class T>
T QueueList<T>::shift() {
    CElement<T> *current = first;
    T value = current->value;
    first = first->next;
    delete current;
    size--;
    return value;
}

template<class T>
bool QueueList<T>::isEmpty() {
    return first == nullptr;
}

template<class T>
void QueueList<T>::show() {
    cout << "Queue de taille " << size << " :\n";
    CElement<T> *current = first;
    for (int i = 0; i < size; i++) {
        current->show();
        current = current->next;
    }
    cout << endl;
}

template<class T>
QueueList<T>::~QueueList() {
    CElement<T> *current = first;
    for (int i = 0; i < size; i++) {
        CElement<T> *next = current->next;
        delete current;
        current = next;
    }
}

template<class T>
void QueueList<T>::sort() {
    for (int i = 0; i < size - 1; i++) {
        CElement<T> *current = first;
        for (int j = 0; j < size - i - 1; j++) {
            CElement<T> *next = current->next;
            if (current->value < next->value) {
                swap(current, next);
            }
            current = next;
        }
    }
}

template<class T>
void QueueList<T>::swap(QueueList::CElement<T> *a, QueueList::CElement<T> *b) {
    T temp = a->value;
    a->value = b->value;
    b->value = temp;
}

template<class T>
T &QueueList<T>::operator[](int index) {
    return get(index);
}

template<class T>
T &QueueList<T>::get(int index) {
    if (index > size - 1) {
        throw out_of_range(to_string(index) + " > " + to_string(size));
    }
    CElement<T> *current = first;
    for (int i = 0; i < index; i++) {
        current = current->next;
    }
    return current->value;
}

template<class T>
void QueueList<T>::operator+(T element) {
    push(element);
}

template<class T>
T QueueList<T>::operator--() {
    return shift();
}

template<class T>
QueueList<T>::QueueList(const QueueList<T> &src) {
    size = src.size;
    first = new CElement<T>(src.first->value);
    CElement<T> *currentNew = first;
    CElement<T> *currentSrc = src.first->next;
    for (int i = 0; i < size - 1; i++) {
        currentNew->next = new CElement<T>(currentSrc->value);
        currentSrc = currentSrc->next;
        currentNew = currentNew->next;
    }
}

template<class T>
void QueueList<T>::set(int index, T value) {
    CElement<T> *current = first;
    for (int i = 0; i < index; i++) {
        current = current->next;
    }
    current->value = value;
    sort();
}
