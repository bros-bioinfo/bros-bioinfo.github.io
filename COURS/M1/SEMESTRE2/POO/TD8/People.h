//
// Created by eliot on 21/02/19.
//

#ifndef POO_PEOPLE_H
#define POO_PEOPLE_H


#include <string>

class People {
private:
    std::string name;
    std::string surname;
    std::string fixedPhone;
    std::string mobilePhone;
    int number;
    std::string street;
    std::string city;
    int postalCode;

public:
    People();

    People(const std::string &name, const std::string &surname, const std::string &fixedPhone,
           const std::string &mobilePhone, int number, const std::string &street, const std::string &city,
           int postalCode);

    People(const People &src);

    const std::string &getName() const;

    const std::string &getSurname() const;

    void show() const;

    void setFixedPhone(const std::string &FixedPhone);

    void setMobilePhone(const std::string &MobilePhone);

    void setAdress(int number, const std::string &street, const std::string &city, int postalCode);

    bool operator<(const People &other);

};


#endif //POO_PEOPLE_H
