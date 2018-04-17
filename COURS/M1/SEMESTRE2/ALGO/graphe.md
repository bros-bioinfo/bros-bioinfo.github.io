# Théorie des graphes

Deux types d'abres : orienté et non orienté.

![Arbres](http://pauillac.inria.fr/~maranget/X/421/poly/poly051.png)
[Paulliac INRIA : "Abres"](http://pauillac.inria.fr/~maranget/X/421/poly/arbres.html)

**Référence** : *Graph Theory* Diestel
### Les graphes orientés

Un graphe orienté est un triplet (S,A,&Gamma;) où **S** est un ensemble d'éléments appelés **sommet** du graphe. **A** est un ensemble d'éléments appelés **arcs** et **&Gamma;** est la fonction d'incidence qui est une **application de A dans les paires de sommets** :

**&Gamma; : A &rarr; SxS**

*Par exemple :*

Le graphe **G = (S,A,&Gamma;)** définit par :
+ S = {s<sub>1</sub>,s<sub>2</sub>,s<sub>3</sub>,s<sub>4</sub>}
+ A = {a<sub>1</sub>,a<sub>2</sub>,a<sub>3</sub>,a<sub>4</sub>,a<sub>5</sub>,a<sub>6</sub>}
+ &Gamma; :
    a<sub>1</sub> &rarr; (s1,s2)
    a<sub>2</sub> &rarr; (s1,s2)
    a<sub>3</sub> &rarr; (s2,s4)
    a<sub>4</sub> &rarr; (s4,s2)
    a<sub>6</sub> &rarr; (s3,s3)
    a<sub>5</sub> &rarr; (s4,s1)

4 sommets et 6 arcs et représente un graphe.

**Exercice** : Donnez la définition mathématiques : (Dessin d'un graphe)

Le graphe **G = (S,A,&Gamma;)** définit par :
+ S = {a,b,c}
+ A = {a<sub>1</sub>,a<sub>2</sub>,a<sub>3</sub>,a<sub>4</sub>,a<sub>5</sub>}
+ &Gamma; :
    a<sub>1</sub> &rarr; (a,b)
    a<sub>2</sub> &rarr; (b,a)
    a<sub>3</sub> &rarr; (c,b)
    a<sub>4</sub> &rarr; (c,b)
    a<sub>5</sub> &rarr; (c,c)


On appelle incidence d'un arc a les sommets &Gamma;(a)[0] et &Gamma;(a)[1].

On appelle origine d'un arc a le sommet &Gamma;(a)[0].

On appelle fin d'un arc a le sommet &Gamma;(a)[1].

Par exemple dans le graphe G précédent, l'arc a<sub>2</sub> a pour origine s<sub>1</sub> et fin s<sub>2</sub>.

On appelle boucle les arcs dont la fin et l'origine sont identiques. Par exemple, a6 est une boucle.

### Les graphes non orientés

Un graphe orienté est un triplet (S,A,&Gamma;) où **S** est un ensemble d'éléments appelés **sommet** du graphe. **A** est un ensemble d'éléments appelés **arrêtes** et **&Gamma;** est la fonction d'incidence qui est une **application de A dans un sous-multi-ensembles (sac à patate de M. Boussicault) à 2 éléments de S** :

*Note* : Sac à patate d'objet = multi-ensemble :
+ {{1,1,2,2,3,3}} &rarr; {{1,2,1,3,3,2}}
+ {{1,1,2,2,3,3}} &ne; {{1,2,3,2,3}}

Le graphe **G = (S,A,&Gamma;)** définit par :
+ S = {s<sub>1</sub>,s<sub>2</sub>,s<sub>3</sub>,s<sub>4</sub>,s<sub>5</sub>}
+ A = {a<sub>1</sub>,a<sub>2</sub>,a<sub>3</sub>,a<sub>4</sub>,a<sub>5</sub>,a<sub>6</sub>}
+ &Gamma; :
    a<sub>1</sub> &rarr; {{s1,s2}} ( = {{s2,s1}} c'est la même chose)
    a<sub>2</sub> &rarr; {{s1,s2}}
    a<sub>3</sub> &rarr; {{s2,s4}}
    a<sub>4</sub> &rarr; {{s4,s2}}
    a<sub>6</sub> &rarr; {{s3,s3}}
    a<sub>5</sub> &rarr; {{s4,s1}}

*Note* : une paire est une liste à 2 éléments ordonnées (aide à la prog)

**Exercice** :Donnez la définition mathématiques du graphe suivant :
Le graphe **G = (S,A,&Gamma;)** définit par :
+ S = {s<sub>1</sub>,s<sub>2</sub>,s<sub>3</sub>,s<sub>4</sub>}
+ A = {a<sub>1</sub>,a<sub>2</sub>,a<sub>3</sub>,a<sub>4</sub>}
+ &Gamma; :
    a<sub>1</sub> &rarr; {{s4,s1}}
    a<sub>2</sub> &rarr; {{s1,s4}}
    a<sub>3</sub> &rarr; {{s2,s3}}
    a<sub>4</sub> &rarr; {{s4,s4}}

### Le Bestaires

#### Les graphes complets
Les graphes complets sont des graphes non orienté à n sommets tels que toute paires de sommet est relié par arrêtes (pentagramme étoile).

Définition allégé :

K<sub>n</sub> = (\[[1,n]], &Gamma;) &Gamma; = {{i,j}} i < j et i = \[[1,n]] et j = \[[1,n]]}

**Exemple** :

+ S = Sommet de L = {1,2,3,4}
+ &Gamma; = Arrêtes de L = { {{1,2}} , {{1,3}} , {{1,4}} , {{[[1,n]]2,3}} , {{2,4}} , {{3,4}} }

#### Les graphes bipartis
Un graphe biparti est un graphe non orienté tels que l'ensemble des sommets peut être partitionné en deux sous-ensemble A et B disjoint (pléonasme).

### Suite algo (19/03/2018)
(si quelqu'un à la partie précédente svp ^^)
+ degrès
+ matrice d'adjacence 

[Théorie des graphes-Nymphomath](https://www.apprendre-en-ligne.net/graphes/graphes.pdf)

[Wikipédia produit matriciel](https://fr.wikipedia.org/wiki/Matrice_d%27incidence)
### Liste d'adjacence

Le graphe peut être représenté par une liste d'adjacence, il s'agit d'un tableau T indexé par le sommet de G et dont l'élément T[s] associés à un sommet s de G est une référence à une liste contenant toutes les fins des arrêtes dont l'origine est s.

*Exemple* : 
+ T:{1:[1,1,2,2],2:[1],3:[]} version orientée

### Matrice d'incidence

Un graphe G **sans boucle** peut être codé à l'aide d'une matrice d'incidence M définie par : (M<sub>i,e</sub>)<sub>i &isin; sommet;e &isin; arcs.

Le coefficient (M<sub>i,e</sub>) est égal à {+1 si i est la fin de e ; -1 si i est l'origine de e; 0 sinon}.

[Wikipédia matrice incidence](https://fr.wikipedia.org/wiki/Matrice_d%27incidence)

**Remarque** : On peut gérer les boucles, il suffi de décider que :

M<sub>i,e</sub>) est égal à {+1 si i est la fin de e et e pas une boucle ; -1 si i est l'origine de e et e pas une boucle;2 si e est une boucle de i; 0 sinon}.

Mais on perd l'algébricité de la structure et on ne peut plus faire de calcul matriciel. 

**Remarque**: On peut faire la même chose pour un graphe non orienté : 

M<sub>i,e</sub>) est égal à {+1 si i est un sommet de e et e pas une boucle ; 2 si e est une boucle en i; 0 sinon}.

*Note* : Ordonnée matrice = sommet ; Abscisse matrice = arcs

## Exploration d'un graphe

### Chaîne, chemin, cycle et circuit

Une **chaîne** de longueur q > 0 est une séquence d'arcs/arêtes (a1,a2,...,aq) de G telle que chaque arc/arête de la séquence a une extrémité en commun avec l'arc précédent et l'autre extrémité en commun avec l'arc/arête suivant.

La chaîne ne suit pas l'orientation des arcs. 

[Wikipédia : chaîne (théorie des graphes)](https://fr.wikipedia.org/wiki/Cha%C3%AEne_(th%C3%A9orie_des_graphes))

Un **chemin** de longueur q est une chaîne (U<sub>1</sub>,U<sub>2</sub>,...,U<sub>aq</sub>) telle que pour tout arcs U<sub>i</sub>, la fin de U<sub>i</sub> est l'origine de U<sub>i+1</sub> et l'origine l'origine de U<sub>i</sub> est la fin de U<sub>i+1</sub>.

On écrit aussi les chaines et les chemins avec leurs sommets quand cela aide à la lisibilité. Dans ce cas la séquence :

(s1,e1,s2,e2,...., sk,ek) est une chaîne/chemin tels que :
+ s<sub>i</sub> et s<sub>i+1</sub> sont les extrémités de e<sub>i</sub> pour une chaîne.
+ s<sub>i</sub> et s<sub>i+1</sub> sont respectivement l'origine et la fin de e<sub>i</sub> pour un arc.

Dans cette notation on peut avoir une chaine/cheminvide d'origine le sommet s, il s'agit de : (s).

Une **chaîne élémentaire** est une chaîne qui ne rencontre pas deux fois le même sommet.

Un **cycle élémentaire** est une chaine élémentaire dont le premier sommet de la chaîne est le dernier sommet de la chaine et dont la chaine passe une, et une seule fois, par sommet à l'exception du premier et dernier sommet.

Un **circuit** est un chemin dont le premier est identiques au dernier sommet du chemin .

Un **cycle** est une chaine dont le premier est identique au dernier sommet.

**Attention** : souvent les gens confondent cycle et cycle élémentaire et "cyle qui contient un cycle élémentaire"(un cycle si on enlève recursivement les palindromes de la séquence, on obtient un cycle élémentaire).

Un **circuit élémentaire** est un circuit qui ne passe pas deux fois par le même sommet ormis l'origine et la fin.

Un **chemin est élémentaire** si il ne passe pas deux fois par le même sommet.

Notation Absurde : si il n'y a pas d'ambiguité, on enlève les arêtes de la requête pour ne garder que les sommets. 

| Orienté | Orienté et non orienté |
|---------|------------------------|
|Chemin | Chaîne|
|Chemin éléementaire | Chaîne non élémentaire|
|Cycle | Circuit|
|Cycle élémentaire | Circuit élémentaire|

## Exo durant le cours

![Img1](1.jpg)
![Img2](2.jpg)
![Img3](3.jpg)
![Img4](4.jpg)
![Img5](5.jpg)
![Arbre exe](arbreExe.jpg)
