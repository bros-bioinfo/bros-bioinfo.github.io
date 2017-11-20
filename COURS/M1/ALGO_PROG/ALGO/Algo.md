# Algorithmique

## I. Rappel

Un ordinateur est unsystème constitué d'une unité de calcule et d'une mémoire. La mémoire contient un ensemble de données coder par une suite de 0 et de 1.
L'**unité de calcul** (UC) est la partie de l'ordinateur qui permet de lire, écrire et modifier la mémoire.

Il existe différentes façon de réaliser un ordinateur. Par exemple la machine de Turing (que nous ne présenterons pas dans cette UE) est un model théorique de l'ordinateur **(voir sur internet lol)**.

Unb modèle théorique d'un ordinateur est une réprésentation abstraite d'un ordinateur à l'aide du language mathématique. Dans la pratique il n'est pas utilisé pour écrire des programmes. Il est utilisé pour démontrer qu'un problème peut être résolu par un ordinateur. Dans les ordinateurs modernes, l'UC et la mémoire sont situés dans plusieurs endroits différents. L'ordinateur est aussi accompagné de nombreux périphériques: clavier, enceintes, etc...

Voici un exemple d'ordinateur:

*Need dessin d'une Ame charitable*

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
- enfiler (F,e) qui ajoute un élemetn dans la file
- defiler (F) qui enlève un élement de la file

Un élement **e** est ajouté avant l'élément **b** alors l'élément **e** sera enlevé avant l'élément **b**.
## III. La récursivité

## IV. Recherche d'un élément dans un tableur
## V. Listes
## VI. Complexité
