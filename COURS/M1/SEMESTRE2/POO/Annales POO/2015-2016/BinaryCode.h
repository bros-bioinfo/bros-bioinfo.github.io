//
// Created by eliot on 24/03/19.
//

#ifndef POO_BINARYCODE_H
#define POO_BINARYCODE_H


#include <ostream>

class BinaryCode {
private:
    unsigned int size = 0;
    char *data;
public:
    BinaryCode(const char *string);

    ~BinaryCode();

    BinaryCode& operator+(BinaryCode b);

    friend std::ostream &operator<<(std::ostream &os, BinaryCode &patient);
};


#endif //POO_BINARYCODE_H
