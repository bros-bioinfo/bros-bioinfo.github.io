//
// Created by eliot on 18/01/19.
//

#ifndef POO_PERSONNE_H
#define POO_PERSONNE_H


class Personne {


private:
    char * nom;
    char * prenom;
    int age;

public:
    Personne(char *nom, char *prenom, int age);

    Personne(const Personne &);

    Personne();

    void affiche() const;

    ~Personne();

};


#endif //POO_PERSONNE_H
