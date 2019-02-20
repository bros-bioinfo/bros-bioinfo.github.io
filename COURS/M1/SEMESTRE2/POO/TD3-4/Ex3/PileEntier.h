//
// Created by eliot on 18/01/19.
//

#ifndef POO_PILEENTIER_H
#define POO_PILEENTIER_H


class PileEntier {
private:
    int *data;
    int index = -1;
public:
    PileEntier(int n);

    PileEntier();

    PileEntier(const PileEntier &pile);

    ~PileEntier();

    void empile(int p);

    int depile();

    int pleine();

    int vide();


};


#endif //POO_PILEENTIER_H
