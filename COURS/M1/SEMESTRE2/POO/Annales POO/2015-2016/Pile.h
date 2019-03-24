//
// Created by eliot on 24/03/19.
//

#ifndef POO_PILE_H
#define POO_PILE_H


#include <vector>

template<class E>
class Pile {
private:
    std::vector<E> data;
public:
    Pile() {

    }

    void empiler(E value) {
        data.push_back(value);
    }

    E depiler() {
        E value = data.back();
        data.pop_back();
        return value;
    }

    const E &operator[](int indice) const {
        if (indice > data.size())
            throw out_of_range("Indice trop grand");
        return data[indice];
    }

    void clear() {
        data.clear();
    }

    bool isEmpty() {
        return data.empty();
    }

    unsigned long taille() {
        return data.size();
    }

    /*
     * Capacity = nombre d'élément que le vecteur peut contenir
     * Size = nombre d'élement que le vecteur contient
     */


};


#endif //POO_PILE_H
