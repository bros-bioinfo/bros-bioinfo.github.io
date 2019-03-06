//
// Created by eliot on 20/02/19.
//

#ifndef POO_PATIENT_H
#define POO_PATIENT_H


#include <string>

class Patient {
private:
    std::string nom;
    std::string prenom;
    std::string pathologie;
    int priorite;
public:
    Patient();

    Patient(std::string, std::string, std::string, int);

    bool operator>(Patient &other);

    bool operator<(Patient &other);

    friend std::ostream &operator<<(std::ostream &os, Patient &patient);

    virtual ~Patient();

    virtual void die();
};

#endif //POO_PATIENT_H
