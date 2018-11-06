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

- empiler (P,e) qui ajoute l'élément
- dépiler (P) qui enlève un élément

et qui vérifie la propriété suivante:  
"Si un élément **e** est ajoute avant l'élément **f** alors **e** sera enlevé après **f**"

Les pile sont aussi appelées LIFO pour "Last un First out". Voici un emplacement possible des piles:  

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
- e=depiler(P)
- print (e)
- e=depiler(P)
- print(e)

### Les files (FIFO = First In First Out)

Les files sont des structures de données contenant des elements qui peuvent apparaître en plusieurs exemplaires et qui possèdent 2 opération:
- enfiler (F,e) qui ajoute un élément dans la file
- defiler (F) qui enlève un élément de la file

Un élément **e** est ajouté avant l'élément **b** alors l'élément **e** sera enlevé avant l'élément **b**.

### Les listes de données
Les listes sont des structures de données qui contiennent une séquence d'éléments dont les éléments peuvent apparaître en plusieurs exemplaires. Chaque élément est encapsulé dans une structure de données appelée cellule qui permet de récupérer l'élément et qui permet de récupérer la cellule encapsulant l'élément suivant dan sla séquence. On parle alors de liste simplement chaînée.

#### Listes chaînées
Une liste chainée est une structure de donnée encadrant une séquence d'éléments ($L _1$, $L _2$, ... , $L _n$) où les éléments peuvent apparaître avec répétition.  
Dans une liste simplement chaînée , chaque élément $L_i$ est encapsulé dans une cellule $C_i$ qui sont des structures que nous allons définir un peu plus tard .  
Une cellule $C _{n+1}$ supplémentaire est utilisée pour coder la fin de la liste.  
Les cellules $C _1$, $C _2$, ..., $C _{n+1}$ sont toutes deux à deux distinctes même si deux cellules peuvent contenir le même élément. Une cellule Ci est une structure qui contient deux informations:
1. Valeur = Élément que contient la cellule. cette valeur valant $L _i$ si $i \leqslant n$ et None sinon
2. Successeur = Référence vers la cellule $C _{i+1}$ si $i \leqslant n$ et None sinon.

On appelle liste vide, la liste qui ne contient que la cellule de fin de liste.  
Par exemple, le schéma suivant montre la représentation de la liste [1, 2, 4, 2]  
Remarque: Selon les problèmes et les bibliothèques, la cellule de fin  de liste n'exist pas et est remplacée par None
Généralement, on a la référence de la premiere cellule l dans le schéma, c'est L  
Les listes chaînées sont généralement  munies des fonctions suivantes:
- create_liste()
  - Créer une liste vide (qui contient la cellule fin de liste) et retourne cette liste
- push_front($L$, e)
  - Augmente la taille de la liste de 1 en créant une nouvelle cellule contenant e et en positionnant cette cellule en début de liste
- begin($L$)
  - Renvoie la première cellule de la liste 
- end($L$)
  - Renvoie la dernière cellule de la liste
- next($L$, $C_i$)
  - Renvoie la cellule $C _{i+1}$ si $i \leqslant n$ et None sinon
- value($L$, $C_i$)
  - Renvoie la valeur de la cellule  $C _i$ qui vaut $L _i$

En python, on peut implémenter les listes chaînées de la manière suivante:
```python
def create_cell(value, next):
    return {'value': value, 'next': next}

def create_list():
    end_cell = create_cell(None, None)
    return {'begin': end_cell, 'end': end_cell}

def push_front(l, e):
    cell = create_cell(e, l['begin'])
    l['begin'] = cell

def begin(l):
    return l['begin']

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

it = begin(l)
while not it is end(l):
    print(value(l, it))
    it = next(it)
```