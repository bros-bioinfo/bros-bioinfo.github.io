/**
 * @author Eliot Ragueneau
 * @version 1.0
 */

#ifndef POO_ANNUAIRE_H
#define POO_ANNUAIRE_H

#include <list>
#include "People.h"

class Annuaire {
private:
    std::list<People> lp;

public:

    void insertInPlace(People &p);

    void insertInPlace(People p);

    void show();

    /**
     * Allow searching through the Annuaire
     * @param name to search
     * @return Annuaire of the matching names
     */
    Annuaire search(std::string name);

    ~Annuaire();

};


#endif //POO_ANNUAIRE_H
