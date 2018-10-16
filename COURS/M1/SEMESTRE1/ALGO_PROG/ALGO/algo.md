# Algorithmique

## I. Rappel

Un ordinateur est un système constitué d'une unité de calcul et d'une mémoire. La mémoire contient un ensemble de données codées par une suite de 0 et de 1.
L'**unité de calcul** (UC) est la partie de l'ordinateur qui permet de lire, écrire et modifier la mémoire.

Il existe différentes façon de réaliser un ordinateur. Par exemple la machine de Turing (que nous ne présenterons pas dans cette UE) est un model théorique de l'ordinateur *(voir sur internet lol)*.

Un modèle théorique d'un ordinateur est une réprésentation abstraite d'un ordinateur à l'aide du language mathématique. Dans la pratique il n'est pas utilisé pour écrire des programmes. Il est utilisé pour démontrer qu'un problème peut être résolu par un ordinateur. Dans les ordinateurs modernes, l'UC et la mémoire sont situés dans plusieurs endroits différents. L'ordinateur est aussi accompagné de nombreux périphériques: clavier, enceintes, etc...

Voici un exemple d'ordinateur:

![Need dessin d'une Ame charitable](http://3.bp.blogspot.com/_VDmxk13I3SA/TVGlojyd9GI/AAAAAAAAAdE/kVdhUg-WwR8/s1600/Computer.jpg)

[lololololol](http://www.st.com/content/ccc/resource/technical/document/datasheet/55/53/3e/86/29/61/41/d9/DM00039193.pdf/files/DM00039193.pdf/jcr:content/translations/en.DM00039193.pdf
)

**La mémoire d'un ordinateur** est une suite d'entier de 0 et de 1. On regroupe la mémoire par groupe de 8 bits que l'on appel octet. On décrit les différents mémoires à l'aide de cette unité.

L'algorithmique est une suite finie et non-ambigue d'opérations d'instructions pour résoudre un problème. Le mot algorithme viens du nom latinifié du mathématicien arabo-musulmans Al-Khavarizini, surnommé "le père de l'algèbre".

Le domaine qui étudie les algorithmes est appelé l'algorithmique. L'algorithmique est l'ensemble des règles et des techniques qui sont impliquées dans la définition et la conception d'algorithme c'est à dire de processus systématiques de résolutions d'un problème permettant de décrire les étapes vers le résultat.

## II. Pile et File

### Les piles (LIFO = Last in First OUT)


Les piles sont des structures de données contenant des éléments qui peuvent apparaitre en plusieurs exemplaires.
Les piles possèdent 2 opérations:

- empiler (P,e) qui ajoute l'élement
- depiler (P) qui enlève un élement

et qui vérifie la propriété suivante:
"Si un élément **e** est ajoute avant l'élement **f** alors **e** sera enlevé après **f**"

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

### Les files (FIFO = First in first OUT)

Les files sont des structures de données contenant des elements qui peuvent apparaître en plusieurs exemplaires et qui possèdent 2 opération:
- enfiler (F,e) qui ajoute un élement dans la file
- defiler (F) qui enlève un élement de la file

Un élément **e** est ajouté avant l'élément **b** alors l'élément **e** sera enlevé avant l'élément **b**.

## III. La récursivité

### III.1 La pile d'execution

Dans un programme , à chaque execution d'une fonction, le contenu des variables locales, le contenu des paramètres de la fonction et la ligne d'execution du code sont enregistrés dans une zone de la mémoire appelee la **pile d'execution**.

La pile d'execution est unique et commune à tout le programme. Au debut du programme, la ligne courante d'xecution ainsi que les variables du programme sont empilees dans la pile.

Ensuite, au cours de l'execution du programme, à chaque execution d'une fonction f, les variables locales, la ligne courante d'execution dans f, ainsi que les paramètres sont empilés dans la pile.

L'execution du programme continue donc à partir de la ligne courante de f qui a été initialisée à la premiere ligne de . Lorsque la fonction f se termine, toutes les données empilées par f sont dépilées et perdues. Seules la valeur de retour est gardée en mémoire.

L'execution du programme continue alors à la ligne courante d'execution de la fonction située en haut de la pile. Cela correspond à la dernière fonction appelee par le programme.

Par exemple, lorsque l'on execute le programme suivant :

```python
def g(a):
    print("g("+str(a)+")")
    return 1000
def h(a):
  print("h("+str(a)+")")
  return 2000

def f(a):
  print("f("+str(a)+")")
  v = g(a+1)
  print(v)
  v = h(a+2)
  print(v)
f(1)
print("fin")
```
On obtient sur le terminal le resultat suivant :
```bash
f(1)
g(2)
1000
h(3)
2000
fin
```
La pile evolue suivant le schema suivant : (dans cette figure nous avons décidé d'empliler la valeur de retour des fontion dans la pile)
(Schema sur cachier)

Sous python, il est possible d'inspecter la pile avec le module **inspect**. Voici un exemple :

```python
import inspect
def f(a,b):
  g(a+1,b+1)
def g(c,d):
  print("La pile est :")
  print(inspect.stack())
  print("")
  print("les données de la fonction sont :")
  print(inspect.stack()[0])
  print("")
  print("les variables de la fonction situées en haut de la pile sont :")
  print(inspect.getargvalues(inspect.stack()[0][0]))
  f(1,2)
```
Le terminale affiche :
```bash
La pile est :
[(<frame object at 0x7fa8d5f7e938>, 'autreExemple.py', 6, 'g', ['  print(inspect.stack())\n'], 0), (<frame object at 0x7fa8d5f803f0>, 'autreExemple.py', 3, 'f', ['  g(a+1,b+1)\n'], 0), (<frame object at 0x7fa8d60ee050>, 'autreExemple.py', 14, '<module>', ['f(1,2)\n'], 0)]

les donnees de la fonction sont :
(<frame object at 0x7fa8d5f7e938>, 'autreExemple.py', 9, 'g', ['  print(inspect.stack()[0])\n'], 0)

les variables de la fonction situees en haut de la pile sont :
ArgInfo(args=['c', 'd'], varargs=None, keywords=None, locals={'c': 2, 'd': 3})
```
### III.2 La recursivite
On dit qu'une fonction f est recursive ,si, durant l'execution de f, la fonction f est de nouveau appelée. Autrement dit, la fonction f est recursive, si au cours du programme,la fonction f apparait au moins 2 fois en même temps dans la pile d'execution.

Voici un exemple de programme recursif qui permet de calculer n!=1*2*3*....\*n :

```python
def factoriel(n):
  if n == 0:
    return 1
  return factoriel(n-1)*n
print (factoriel(3))
```


## IV. Recherche d'un élément dans un tableur
## V. Listes
## VI. Complexité
