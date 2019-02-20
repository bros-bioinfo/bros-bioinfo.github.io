//
// Created by eliot on 18/01/19.
//
int main() {
    int *p = new int;
    const int *q = new int;
    int *const r = new int;

    p = new int;   //   Pas de problèmes
    *p = 6;        //      Pas de problèmes

    q = new int;   //   Pas de problèmes
//  *q = 6;             Erreur car on tente de modifier le contenu du pointeur qui est constant

//   r = new int;       Erreur car on ne peut pas modifier le pointeur via un new
    *r = 6;        //   Pas de problèmes

    int *tab[10];
    for (int* elt: tab){
        elt = new int;
        delete elt;
    }

    int &s = *p;
    const int &t = *p;

    // Affectations

//  p = q;    on ne peut affecter un pointeur d'entier constant à un pointeur d'entier non constant
    p = r; // on peut affecter un pointeur constant d'entier à un pointeur d'entier
//  p = s;    on ne peut affecter directement une variable (ici un entier référencé) à un pointeur (*p = s; fonctionne)
//  p = t;    on ne peut affecter directement une variable (ici un entier référencé) à un pointeur (*p = t; fonctionne)

    q = p; // on peut affecter un pointeur d'entier non constant à un pointeur d'entier constant
    q = r; // on peut affecter un pointeur d'entier non constant à un pointeur d'entier constant
//  q = s;    on ne peut affecter directement une variable (ici un entier référencé) à un pointeur (*q = s; fonctionne)
//  q = t;    on ne peut affecter directement une variable (ici un entier référencé) à un pointeur (*q = t; fonctionne)

//  r = p;    r constant
//  r = q;    r constant
//  r = s;    r constant
//  r = t;    r constant

//  s = p;    on ne peut affecter directement un pointeur à une variable (ici un entier référencé) (s = *p; fonctionne)
//  s = q;    on ne peut affecter directement un pointeur à une variable (ici un entier référencé) (s = *q; fonctionne)
//  s = r;    on ne peut affecter directement un pointeur à une variable (ici un entier référencé) (s = *r; fonctionne)
    s = t; // on peut affecter une variable constante à une autre variable (ici des entiers référencés)

//  t = p;    t constant
//  t = q;    t constant
//  t = r;    t constant
//  t = s;    t constant

delete p;
delete q;
delete r;
}