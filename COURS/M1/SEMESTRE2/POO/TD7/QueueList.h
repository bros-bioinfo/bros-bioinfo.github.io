//
// Created by eliot on 20/02/19.
//

#ifndef POO_QUEUELIST_H
#define POO_QUEUELIST_H

template<class T>
class QueueList {

    template<class E>
    class CElement {
    public:
        E value;
        CElement *next;

        explicit CElement(E &value);

        void show();
    };

protected:
    CElement<T> *first = nullptr;
    int size;
public:
    QueueList() : size(0) {
    }

    QueueList(const QueueList<T>& src);

    virtual ~QueueList();

    virtual bool push(T element);

    virtual T shift();

    virtual T& get(int index);

    virtual void set(int index, T value);

    virtual void show();

    virtual bool isEmpty();

    virtual void sort();

    T& operator[](int index);

    void operator+(T element);

    virtual T operator--();


private:
    virtual void swap(CElement<T> *a, CElement<T> *b);

};

#include "QueueList.cpp"
#endif //POO_QUEUELIST_H


