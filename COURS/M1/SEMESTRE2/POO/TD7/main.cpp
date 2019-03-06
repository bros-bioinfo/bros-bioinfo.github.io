//
// Created by eliot on 20/02/19.
//

#include "QueueList.h"
#include "Patient.h"

int main() {
    QueueList<Patient> test;
    test.push(Patient("George", "Pompidou", "Cancer", 2));
    test.show();

    test.push(Patient("Michael", "Jordan", "Fracture", 4));
    test.show();

    test.push(Patient("Jacques", "Chirac", "Mort", 1));
    test.show();

    test.push(Patient("Lala", "Bisounours", "Addiction", 3));
    test.show();

    QueueList<Patient> copie = QueueList<Patient>(test);
    copie.set(2, Patient("Bite", "Molle", "Dure", 4));
    copie.show();
    test.show();

    test[1].die();
    test.show();


}