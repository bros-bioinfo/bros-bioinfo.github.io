# Arbres 

Réf : https://openclassrooms.com/courses/algorithmique-pour-l-apprenti-programmeur/arbres?q=&hPP=8&idx=prod_v2_COURSES_en&p=0&fR%5Bcertificate%5D%5B0%5D=true&fR%5BisWeb%5D%5B0%5D=true

## Définitions

Un arbre est une structure de donnée A contenant des éléments, tous distincts, appelés sommets et muni des fonctions suivantes: 
+ la **fonction fils(A,P)**  qui prend en paramètre un arbre A et un sommet P de l'arbre A, et qui renvoie une liste de sommets de A. Ces sommets sont appelés les **fils** de P.
+ la **fonction père(A,f)** qui prend en paramètre un arbre A, un sommet f de A et renvoie un sommet de A ou "None". Le sommet envoyé est appélé le **père** de f. 
+ la fonction racine(A) qui prends en paramètre un arbre A et renvoie un sommet de A appelé racine de A.

Pour que (A,racine,fils,père) soit un arbre, il faut que les propriétés suivantes soient vérifiées : 
1- Une racine n'a pas de père : père(A,racine(*)) = None.
2- Tout sommet a un père à l'exception de la racine : **&forall;s &isin;A/{racine(A)}     pere(A,s)&isin;A**. 


![Arbre](https://user.oc-static.com/files/166001_167000/166664.png)


