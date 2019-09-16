# JAVA Avancé

## Introduction

Xavier Blanc : xavier.blanc@u-bordeaux.com

LinkedIn et Youtube

GitHub

Notation :
- 1 QCM en TD de 20 min au hasard
- 1 TD sur machine 1h
- Pas de projet
- 1 Exam sur papier (Particulièrement difficile)

## Bases (4 semaines)

### Objet

#### L'objet

- Identifiant
- Données
- Traitement

L'identifiant n'est pas la référence de l'objet. 
Une référence est quelque chose qui permet à un objet d'agir sur un autre objet, il se sert de l'id, mais ce dernier n'est jamais visible. 

Il peut ne pas y avoir de données dans un objet.

Java donne par défaut des traitements donc il y en a forcément 

Ce qui définie vraiment un objet, c'est qu'ils échangent des messages pour réaliser des traitements complexes.

La POO c'est découper un problème en entités contenant des données et pouvant interagir à l'aide des traitements et de l'identifiant.

Un diagramme de séquence UML résume les interactions entre objets définis par leurs identifiants

En paradigme impératif, l'objectif est de découper le problème en traitements (fonctions)

En objet on doit faire de la partition, c'est à dire qu'il est hors de question que deux objets partagent les mêmes données, et on ne partage pas les traitements non plus.

L'objectif ici est de faire une bonne conception, donc de limiter au maximum les interactions entre objets, et donc bien sûr aussi d'éviter toute redondance dans la mémoire.

```java
String s;
s = "Hello";
s = s + "Comment "
s = s + "Allez vous ?"
```
Il y a ici 3 objets de créés car à chaque addition, la machine virtuelle (jvm) créer un nouvel objet qui contient le nouveau texte

#### Responsabilité et encapsulation

> L'objet est responsable des traitements qu'il propose !

L'objet dispose donc de **tous les éléments** pour réaliser les traitements qu'il propose.

Ces éléments sont grosso modo :
 - Suite d'instruction
 - Paramètre en entrée
    - Données de l'objet ou paramètre en entrées ?
 - Résultat
 
>Exemple
>
>Une calculatrice n'a pas besoin d'avoir de données
>
>En revanche une calculatrice à mémoire devra avoir des données propre


> **Responsabilité** : 
> L'objet a tout pour réaliser ses traitements
>
> **Encapsulation** :
> Si l'objet utilise ses données pour réaliser ses traitements, il doit protéger ses données

#### Couplage et Cohérence

Les deux notions sont antagonistes !

> **Couplage** : Pour réaliser le traitement dont l'objet est responsable, il peut demander l'aide d'autre objets.

Plus on a besoin d'autres objets, plus on est couplé. Donc afin de limiter le nombre d'interactions, on tend a limiter le couplage.

La conséquence logique serait alors de partitioner tout le problème en un seul objet. On manquerait alors de cohérence !

> **Cohérence** : C'est ne pas être incohérent, et donc proposer des traitements qui n'ont pas de rapport entre eux

Concrètement, un objet est cohérent si il est insécable, dans le sens où tout ses traitements dépendent bien de toutes les données.

L'idéal de la POO est donc un faible couplage malgré une forte cohérence.

(Explication du TD)

Quand on donne un objet et qu'on l'analyse, il faut avoir un sens critique.

80% de nos intuitions sont fausses, le sens critique est donc de chercher à savoir si nos intuition sont justes ou non ?

Question d'analyse d'objet:
- L'objet possède t'il des données ?
   - Non 
        - Pas de problème d'encapsulation puisque pas de données
        - Traitement stateless
        - Toutes méthodes devraient donc être statiques (**static**) ou au pire n'être instancier qu'une fois, plus serait inutile
   - Oui
        - A t'il que des données constantes ?
            - Oui
                - Les données constantes n'ont pas à être protégées, l'objet doit donc être immutable
            - Non
                - Couplage ?
                - Cohérence ?

#### Cycle de vie

1. Création
2. Reçoit des messages & Réalise des traitements
3. Si un objet ne peut plus avoir de message, alors l'objet est détruit. C'est le cas quand un objet n'est pas référencé
 
En java les traitements sont, de bases, synchrones, on peut voir ça comme un jeton de qui a le droit de s'éxécuter.
  
Quand un objet utilise un traitement d'une autre fonction, alors il donne son jeton à cette fonction qui lui rend à la fin de son traitement. 

N'importe quel objet peut créer un autre objet (l'objet créateur a alors la référence)

#### Synthèse
Definition:
> Objet = #Id + (Data)? + Traitements

On référence des objets.

Java exception pour boolean, int, double, ... Tous les types primaires.

-----

**Responsabilité & Encapsulation**:

> **Responsabilité** : 
> L'objet a tout pour réaliser ses traitements
>
> **Encapsulation** :
> Si l'objet utilise ses données pour réaliser ses traitements, il doit protéger ses données

-----

**Couplage et Cohérence**
> **Couplage** : L'objet peut demander déléguer ses responsabilités à d'autres objets
>
> **Cohérence** : On peut pas couper l'objet en deux


### Classes

Langage Orienté Objet à Classe:

Le développeur "décrit" des classes d'objets.

Il existe deux relations entre classes et objets
- Construction: Une classe peut construire plusieurs objets, mais un objet n'auras qu'une classe constructrice. Se fait grâce au `new`
- Conformité: Un objet peut "ressembler" à plusieurs classes 

Le terme instantiation couvre les deux définitions.

Une classe est donc 
- Un moule (`new`)
- Un contrat (conformité)

Tout objet construit est conforme. La fonction patron est statique, mais la conformité peut évoluer et est plus une question dynamique.

#### La classe comme moule/contrat
- Data
    - `visibilité Type nom; // Pour la classe`
    - Conforme => L'objet possède les données définies par la classe
- Traitements
    - `visibilté TypeRetour nom(Params(Type nom)) exceptions {}`
    - Conforme => L'objet est responsable des traitements définis par la classe

```java
public class Point {
    int x;
    int y;
    
    public Point(int x, int y){
        this.x = x;
        this.y = y;
    }
    
    // getters
}
```
Conformité = Typage

**Code** = Compilation => **Code compilé** = Run => **VM**

Compilation:
- Prévenir les erreurs
- Aide votre IDE

Run:
- 2nd contrôle de de typage

2 Solutions pour avoir des entiers positifs:
- Créer sa propre classe PositiveInt
- Lever une exception à la construction
```java
class Point {
    Point (int x, int y) {
        if (x < 0) throw new TypeConstructException();
    }
}
```

#### Visibilité et Encapsulation des données

- public => Pas de verrous => Pas d'encapsulation
- private => Protégé sauf pour les objets sortis du même moule


#### Visibilité et Encapsulation des traitements

Traitements qui modifient les données :
- Normal ? => public
- Pas normal ? => private

Sur un traitement private, l'idée est qu'un autre développeur ne pourras pas utiliser le traitement.

#### L'héritage

L'héritage est une relation entre classes qui a un impact sur les objets instances des classes en relation.

Pour préciser qu'une classe hérite d'une autre, il suffit d'utiliser le mot clé `extends`.

>Principe de substitution:
>
>Si j'ai besoin d'un A, on peut me donner un B qui est conforme à A.

```java
import java.util.List;
import java.util.ArrayList;
public class Shape {
    private List<Point> pointList;
    
    public Shape() {
        pointList = new ArrayList<Point>();
    }
    
    public List<Point> getPointList(){
        return new ArrayList<Point>(pointList); 
        // Attention à ne pas directement donner pointList, qui est une référence, 
        // ce qui reviendrait donc à ruiner l'encapsulation !
    }
}

public class Rectangle extends Shape {
    public Rectangle(Point origin, int width, int height) {
        
    }
    public int getWidth() {
        
    }
    public int getHeight() {
        
    }
}
```

#### Polymorphisme et surcharge
Contrat des classes sur les objets (typage) ne porte jamais sur le code mais sur les signatures !

Le polymorphisme, c'est changer le code dans une sous classe (`@Override`), mais pas le contrat !

La surcharge, c'est changer le type, donc en gros ajouter des contraintes de typage (moins d'individus)

La covariance dit qu'on a le droit de sous typer des paramètres.

```java
public class Transformer <T extends Shape> {
    T transform(T in) {
        return in;
    }
}
```
#### Quand faut-il hériter ?
Héritage pourrait être une bonne solution si:
1. Vous êtes en train de dupliquer du code dans 2 classes ?  
2. Si vous voulez réutiliser des traitements en les adaptant
3. Le plus intéressant, vous êtes en train de définir un contrat qui **DEVRA** être complété par un autre développeur. => Classe abstraite
### Délégations, classes et interfaces
Peut on réaliser le cas 2. sans héritage ?


Oui grâce à la délégation, c'est à dire que l'on peut utiliser les méthodes d'un attribut.


Exemple:
```java
public class A {
    public void f() {
        System.out.println(1);
    }
}

public class B extends A {  // Héritage
    public void g() {
        f();
    }
}

public class C {  // Délégations
    private A a;
    public void g() {
        a.f();
    }
}
```

- Héritage
    - Avantages :
        - Moins d'objets
        - Moins d'appel de méthode
        - *"Moins de dépendances directes"*
        - Substituabilité
    - Inconvénients :
        - .
- Délégation
    - Avantages :
        - .
    - Inconvénients :
        - Plus d'objets
        - Plus d'appels de méthode
        - *"Plus de dépendances directes"*
        - Pas de substituabilité

#### L'interface

> Interface : Définition d'un ensemble "cohérent" de méthodes (signature)
>
>  Pas de code (Sauf dans java récent => Code par défaut)

On dissocie la définition du code (signature) de la façon dont elles sont implémentées (code)

```java
public interface BItf {
    void f(); // J'ai besoin de f(), peut importe la façon dont c'est codé
}
```

J'ai B qui réalise f() {}
```java
public class B implements BItf {
    public void f() {
        // code
    }
}

public class BHeritage extends B {
    public void f() {
        super.f(); // J'utilise le code de B
    }
}

public class BDelegation {
    private B b;
    public void f() {
        b.f();
    }
}

public class Main {
    public static void main(String[] args){
      BHeritage bh = new BHeritage();
      BDelegation bd = new BDelegation();
      bh.f();  // dépends du code de B
      bd.f();  // dépends pas du code b
    }
}
```

- Héritage
    - Avantages :
        - Moins d'objets
        - Moins d'appel de méthode
        - *"Moins de dépendances directes"*
        - Substituabilité
    - Inconvénients :
        - .
- Délégation
    - Avantages :
        - **On ne dépend pas du code de réalisation grâce à l'interface**
    - Inconvénients :
        - Plus d'objets
        - Plus d'appels de méthode
        - *"Plus de dépendances directes"*
        - Pas de substituabilité
        
```java
public  class Point {
    private int x;
    private int y;
    
    public int getX() {
    return x;
    }
    
    public int getY() {
    return y;
    }
}

// Rectangle => new Point();
// Carre => new Point();
// Droite => new Point();
// Pas top

public interface PointFactoryItf {
    public Point createPoint(int x, int y);
}

public class PointFactoryImpl implements PointFactoryItf {
    public Point createPoint(int x, int y) {
        return new Point();
    }
}
```
 
```java
public class BenchMarkTri extends Tri {
    public int bench() {
        int time = 0;
        for (int n = 0; n < N; n++) {
            int start = Time.time();
            tri();
            int stop = Time.time();
            time += stop - start;            
        }
        return time / N;
    }
}

// ==============================

public interface SortAlgo {
    public String[] sort(String[] in);
}

public class BenchMark {
    private SortAlgo sa;
    public void setSortAlgo(SortAlgo sa) {
        this.sa = sa; 
    }
    
    public int bench() {
        int time = 0;
        for (int n = 0; n < N; n++) {
            int start = Time.time();
            sa.sort();
            int stop = Time.time();
            time += stop - start;            
        }
        return time / N;
    }
}
```

```java
// Héritage
public class PNJ extends PlayerFinder {
    public void findAndKill() {
        findPlayer();
        // ...
        
    }
    
    public void findAndRun() {
        findPlayer();
        // ...
    }
}

// Délégation
public interface PlayerFinderItf {
    Player findPlayer;
}

public class PlayerFinderA implements PlayerFinderItf {
    Player findPlayer() {
        // ...
    }
}

// Niveau j'ai pas compris, y a pas d'intérets

public class PNJ {
    private PlayerFinderItf playerFinder = new PlayerFinderA(); // @ compile time
}

// Niveau OK mais pas très souple

public  class PNJ {
    private PlayerFinderItf playerFinder;
    public PNJ(PlayerFinderItf playerFinder) {
        this.playerFinder = playerFinder; // @ runtime instantiate
    }
}

// Niveau souplesse 

public  class PNJ {
    private PlayerFinderItf playerFinder;
    public void setPlayerFinder (PlayerFinderItf playerFinder) {
        this.playerFinder = playerFinder; // @ runtime whenever i want
    }
}

```

A lire :
- Design Patterns:
    - Gang of Four (GOF)
    - Explication de l'intérêt de la délégation
    - Golden Rule:
        - Reuse dynamics VS Perf.
        

      
### Test & Lint

## Domain Driven Design (3 semaines)

## Architecture objet (3 semaines)

## Avancée (2 semaines)



