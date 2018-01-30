# Arbres 


## Définitions

Un arbre est une structure de donnée A contenant des éléments, tous distincts, appelés sommets et muni des fonctions suivantes: 
+ la **fonction fils(A,p)**  qui prend en paramètre un arbre A et un sommet p de l'arbre A, et qui renvoie une liste de sommets de A. Ces sommets sont appelés les **fils** de p.
+ la **fonction pere(A,f)** qui prend en paramètre un arbre A, un sommet f de A et renvoie un sommet de A ou "None". Le sommet envoyé est appélé le **père** de f. 
+ la fonction racine(A) qui prends en paramètre un arbre A et renvoie un sommet de A appelé racine de A.

Pour que (A,racine,fils,pere) soit un arbre, il faut que les propriétés suivantes soient vérifiées : 
1. Une racine n'a pas de père : père(A,racine(*)) = None.
2. Tout sommet a un père à l'exception de la racine : **&forall;s &isin;A/{racine(A)}  pere(A,s)&isin;A** &rarr; Traduction : pour tout sommet s de A privé des éléments de l'ensemble qui ne contient que la racine A.


![Arbre](https://user.oc-static.com/files/166001_167000/166664.png)
Ref : [Openclassroom : Algo](https://openclassrooms.com/courses/algorithmique-pour-l-apprenti-programmeur/arbres?q=&hPP=8&idx=prod_v2_COURSES_en&p=0&fR%5Bcertificate%5D%5B0%5D=true&fR%5BisWeb%5D%5B0%5D=true)

3. Les fils d'un sommet s ont pour père s, et le pere p d'un sommet s admet s comme fils. 
 - **&forall;s &isin;A, &forall;f &isin;fils(A,s)  pere(A,f) = s** &rarr; Traduction : pour tout sommet de A, pour tout sommert appartenant aux fils de s, le pere de f est s.
 - **&forall;s &isin;&mu;, &forall;p &isin;pere(A,&mu;)  &mu;&isin;fils(A,p)**
4. Il ya un unique sommet s tels que pere(s) = None et le sommet est la racine.
5. A partir de tout sommet, on peut accéder à la racine par la relation de paternité. **&forall;s &isin;A, &ni;k&isin;N  pere<sup>k</sup>(A,s) = None**. Où pere<sup>k</sup> se définit récursivement par : 
    + pere<sup>0</sup>(A,s) = s
    + pere<sup>k</sup>(A,s) = pere(pere<sup>k-1</sup>(A,s))


*Exemple* : 

Est-ce que le quadruplet(A,racine,pere,fils) est un arbre ? Si oui dessinez le : 

+ A = {1,2,8,9,5,7}
+ pere : 
    - 9:1
    - 2:9
    - 5:9
    - 7:None
    - 1:2
    - 8:9
+ racine(A) = 7
+ fils : 
    - 1:{9}
    - 2:{1}
    - 9:{2,5}
    - 5:{}
    - 8:{}
    - 7:{}

Non ce n'est pas un arbre car la règle 5 n'est pas vérifiée : pere(pere(pere(2))) = 2. De plus la règle 3 n'est pas vérifiée non plus : pere(8)=9 et 9&notin;fils(8).
