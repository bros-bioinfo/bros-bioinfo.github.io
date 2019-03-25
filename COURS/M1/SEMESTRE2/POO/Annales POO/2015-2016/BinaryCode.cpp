//
// Created by eliot on 24/03/19.
//

#include <cstring>
#include "BinaryCode.h"

BinaryCode::BinaryCode(const char *string) {
    data = new char[strlen(string)];
    for (int i = 0; string[i] != '\0'; i++) {
        if (string[i] == '0' || string[i] == '1') {
            data[size] = string[i];
            size++;
        }
    }
}

BinaryCode::~BinaryCode() {
        delete[] data;
}

BinaryCode BinaryCode::operator+(BinaryCode &b) {
    char * newData = new char[size + b.size];
    strcat(newData, data);
    strcat(newData, b.data);
    BinaryCode out(newData);
    return out;
}

std::ostream &operator<<(std::ostream &os, BinaryCode &bin) {
    os << bin.data;
    return os;
}

