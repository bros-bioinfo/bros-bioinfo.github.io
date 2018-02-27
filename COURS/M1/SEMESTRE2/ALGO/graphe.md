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

On appelle boucle les arcs dont la fin et l'origine sont identiques. Par exemple, a6 est un boucle.

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

