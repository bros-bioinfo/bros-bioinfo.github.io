//
// Created by eliot on 22/02/19.
//

#ifndef POO_REGISTRE_H
#define POO_REGISTRE_H

#include <map>
#include "People.h"

class Registre {
private:
    std::map<std::string, People> registre;
public:
    void addPeople(People p);

    void addPeople();

    void show();

    void showHFRatio();

};


#endif //POO_REGISTRE_H
