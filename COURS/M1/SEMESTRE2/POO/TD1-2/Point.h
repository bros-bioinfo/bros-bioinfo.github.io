//
// Created by eliot on 11/01/19.
//

#ifndef POO_POINT_H
#define POO_POINT_H


class Point {
private:
    char nom[20];
    float x;
    float y;

    static int nb_default;
    static int nb_copy;
    static int nb_destruct;
public:

    static int getNb_default();

    static int getNb_copy();

    static int getNb_destruct();

    void deplace(float x, float y = 0);

    void affiche();

    double distant(Point b);

    Point(char *nom, float x, float y);

    Point copy();

    virtual ~Point();
};



#endif //POO_POINT_H
