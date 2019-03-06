//
// Created by eliot on 21/02/19.
//

#include <iostream>
#include <cstring>
#include "People.h"

using namespace std;

People::People() : name("Name"), surname("Surname"), fixedPhone("00.00.00.00.00"), mobilePhone("00.00.00.00.00"),
                   number(0), street("Street"), city("City"), postalCode(0) {

}

People::People(const string &name, const string &surname, const string &fixedPhone, const string &mobilePhone,
               int number, const string &street, const string &city,
               int postalCode) : name(name), surname(surname), fixedPhone(fixedPhone), mobilePhone(mobilePhone),
                                 number(number), street(street), city(city), postalCode(postalCode) {}

People::People(const People &src) = default;

const string &People::getName() const {
    return name;
}

const string &People::getSurname() const {
    return surname;
}

void People::show() const {
    cout << name << " " << surname << ":\n\t-Fixe : " << fixedPhone << "\n\t-Mobile : " << mobilePhone << "\n\t-"
         << number << " rue " << street << ", " << postalCode << " " << city << endl;
}

void People::setFixedPhone(const string &FixedPhone) {
    People::fixedPhone = FixedPhone;
}

void People::setMobilePhone(const string &MobilePhone) {
    People::mobilePhone = MobilePhone;
}

void People::setAdress(int number, const string &street, const string &city, int postalCode) {
    People::number = number;
    People::street = street;
    People::city = city;
    People::postalCode = postalCode;
}

bool People::operator<(const People &other) {
    int nameEquality = name.compare(other.name);
    if (nameEquality < 0) {
        return true;
    } else if (nameEquality == 0){
        return surname.compare(other.surname) < 0;
    } else {
        return false;
    }
}
