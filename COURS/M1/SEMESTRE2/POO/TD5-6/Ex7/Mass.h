//
// Created by eliot on 22/02/19.
//

#ifndef POO_MASS_H
#define POO_MASS_H


class Mass {
protected:
    int mass;
public:
    virtual void show() = 0;

    explicit Mass(int mass);
};


#endif //POO_MASS_H
