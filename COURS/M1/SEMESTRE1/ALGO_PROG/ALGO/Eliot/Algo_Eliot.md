## I. Algorithmique
UN algorithme est une suite finie et non ambiguë d'opérations ou d'instructions permettant de résoudre un problème.  
Le mot "ALGORITHME" vient du nom latinisé du mathématicien Arabo-musulman Al-Khawarizmi surnommé le père de l'algèbre.  
Le domaine qui étudie les algorithmes est appelées l'algorithmique.  
L'algorithmique est l'ensemble des règles et techniques qui sont impliquées dans la définition et la conception 
d'algorithme, c'est à dire de processus systématiques de résolution d'un problème permettant de décrire les étapes vers le résultat.

## II. Les Piles et Files
### II.1 Les piles LIFO (**L**ast **I**n **F**irst **O**ut)

Les piles sont des structures de données contenant des éléments qui peuvent apparaître en plusieurs exemplaires.
Les piles possèdent 2 opérations:

- empiler (P,$e$) qui ajoute l'élément
- dépiler (P) qui enlève un élément

et qui vérifie la propriété suivante:  
"Si un élément $e$ est ajoute avant l'élément **f** alors $e$ sera enlevé après **f**"

Les pile sont aussi appelées LIFO pour "end un First out". Voici un emplacement possible des piles:  

```python
def creer_pile():
  return[]

def empiler(pile,element):
  pile.append(element)

def depiler(pile):
  return pile.pop()
```
**Exemple d'utilisation:**
- P= créer pile()
- empiler(P,2)
- empiler(P,1)
- $e$=depiler(P)
- print ($e$)
- $e$=depiler(P)
- print($e$)

### Les files (FIFO = First In First Out)

Les files sont des structures de données contenant des elements qui peuvent apparaître en plusieurs exemplaires et qui possèdent 2 opération:
- enfiler (F,$e$) qui ajoute un élément dans la file
- defiler (F) qui enlève un élément de la file

Un élément $e$ est ajouté avant l'élément **b** alors l'élément $e$ sera enlevé avant l'élément **b**.

## Les listes de données
Les listes sont des structures de données qui contiennent une séquence d'éléments dont les éléments peuvent apparaître en plusieurs exemplaires. Chaque élément est encapsulé dans une structure de données appelée cellule qui permet de récupérer l'élément et qui permet de récupérer la cellule encapsulant l'élément suivant dan sla séquence. On parle alors de liste simplement chaînée.

### Listes chaînées
Une liste chainée est une structure de donnée encadrant une séquence d'éléments ($L _1$, $L _2$, ... , $L _n$) où les éléments peuvent apparaître avec répétition.  
Dans une liste simplement chaînée , chaque élément $L_i$ est encapsulé dans une cellule $C_i$ qui sont des structures que nous allons définir un peu plus tard .  
Une cellule $C _{n+1}$ supplémentaire est utilisée pour coder la fin de la liste.  
Les cellules $C _1$, $C _2$, ..., $C _{n+1}$ sont toutes deux à deux distinctes même si deux cellules peuvent contenir le même élément. Une cellule Ci est une structure qui contient deux informations:
1. Valeur = Élément que contient la cellule. cette valeur valant $L _i$ si $i \leqslant n$ et `None` sinon
2. Successeur = Référence vers la cellule $C _{i+1}$ si $i \leqslant n$ et `None` sinon.

On appelle liste vide, la liste qui ne contient que la cellule de fin de liste.  
Par exemple, le schéma suivant montre la représentation de la liste [1, 2, 4, 2]  
Remarque: Selon les problèmes et les bibliothèques, la cellule de fin  de liste n'exist pas et est remplacée par `None`
Généralement, on a la référence de la premiere cellule l dans le schéma, c'est L  
Les listes chaînées sont généralement  munies des fonctions suivantes:
- create_liste()
  - Créer une liste vide (qui contient la cellule fin de liste) et retourne cette liste
- push_front($L$, $e$)
  - Augmente la taille de la liste de 1 en créant une nouvelle cellule contenant $e$ et en positionnant cette cellule en début de liste
- first($L$)
  - Renvoie la première cellule de la liste 
- end($L$)
  - Renvoie la dernière cellule de la liste
- next($L$, $C_i$)
  - Renvoie la cellule $C _{i+1}$ si $i \leqslant n$ et `None` sinon
- value($L$, $C_i$)
  - Renvoie la valeur de la cellule  $C _i$ qui vaut $L _i$

En python, on peut implémenter les listes chaînées de la manière suivante:
```python
def create_cell(value, next):
    return {'value': value, 'next': next}

def create_list():
    end_cell = create_cell(`None`, `None`)
    return {'first': end_cell, 'end': end_cell}

def push_front(l, e):
    cell = create_cell(e, l['first'])
    l['first'] = cell

def first(l):
    return l['first']

def end(l):
    return l['end']
  
def next_(l, cell):
    return cell['next']

def value(l, cell):
    return cell['value']   
```
Les listes s'utilisent alors de la manière suivante :
```python
l = create_list()
push_front(l, 2)
push_front(l, 4)
push_front(l, 2)
push_front(l, 4)

it = first(l)
while not it is end(l):
    print(value(l, it))
    it = next(it)
```
### Liste doublement chaînée
Une liste doublement chaînée est une liste chaînée dont les cellules $C _i$ contiennent une information supplémentaire nommée prédécesseur qui est une référence  vers la cellule $C _{i-1}$ si $2 \leqslant i \leqslant n+1$. Vers la cellule de fin de liste $C _{n+1}$ si $i = 1$ et renvoie `None` pour la cellule de fin:  


La liste doublement chaînée contient en plus les fonctions suivantes:
- push_back($L$, $e$)
  - Créer une nouvelle cellule et l'ajoute en fin de liste
- last($L$)
  - Renvoie la cellule $C _n$ si $n \gt 0$ et la cellule de fin $C _{n+1}$ si la taille $n = 0$ 
- previous($L$, $C _i$)
  - Renvoie la cellule $C _{i-1}$ si $1 \leqslant i \leqslant n$ et ``None`` sinon


```python

```

## Récursivité
### 1. La pile d'execution
Dans un programme, à chaque exectution d'une  fonction, le contenu des variables locales 




La pile est commune à tout le programme.
Au début du progrramme, la ligne courante d'execution ainsi que les variables du programmes sont empilés dans la pile.

Ensuite, au cours de l'execution du programme, à chaque execution d'une fonction f, les variables locales de f, la ligne courante dans f ainsi que ses paramètres sont empilés dans la pile.

L'execution du programme continue donc à partir de la ligne courante de f qui a été initialisé à la première ligne de f.  Lorsque la fonction f se termine, toutes les données empilées par f sont dépilées et perdues. Seule la valeur de retour de f est gardée en mémoire.

L'execution du programme continue alors à la ligne courrante d'execution de la fonction située en haut de la pile.

Cela correspond à la dernière fonction appelée durant l'execution du programme

Par exemple, lorsque l'on execute le programme suivant:
```python
1    def g(a):
2      print("g(" + str(a) + ")")
3      return 1000
4    
5    def h(a):
6      print("h(" + str(a) + ")")
7      return 2000
8    
9    def f(a):
10     print("f(" + str(a) + ")")
11     v = g(a + 1)
12     print(v)
13     v = h(a + 2)
14     print(v)
15   
16   f(1)
17   print("fin")
```

On obtient sur le terminal le résultat suivant:
```
f(1)
g(2)
1000
g(3)
2000
fin
```

La pile évolue suivant le schéma ci dessous. Dans ce schéma, nous avons décidé d'empiler les valeurs de retour des fonctions
```
"""     
           _________
           |f|1 (a)|
Line 1 --> | |l. 9 | -->
  |        =========
Main       |/|l. 13|
           ¯¯¯¯¯¯¯¯¯
"""
```

Dans python, il est possible d'inspecter la pile d'execution avec le module inspect. Voici un exemple:

```python
import inspect
def f(a,b):
  g(a+1, b+1)

def g(c,d):
  print("La pile est : ")
  print(inspect.stack())
  print()
  print("Les données de la fonction rentrée en haut de la pile sont : ")

  print(inspect.stack()[0])
  print()

  print("Les variables de cette fonction sont : ")
  print(inspect.getargvalues(inspect.stack()[0][0]))

f(1, 2)
```

### La récursivité
On dit qu'une fonction f est récursive si durant l'exécution de f, la fonction f est de nouveau appelée .

Autrement dir, la fonction f est récursive si au cours de son execution, la fonction apparaît au moins deux fois en même temps dans la pile d'exécution.
Voici un exemple de programme récursif:
```python
def factoriel(n):
  return n * factoriel(n - 1) if n != 0 else 1
```
Ou plus simplement 
```python
def factoriel(n):
  if n == 0:  
    return 1
  return n * factoriel(n - 1) 

print(factoriel(2))
```