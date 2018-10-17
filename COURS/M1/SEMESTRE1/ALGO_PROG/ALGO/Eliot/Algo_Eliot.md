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
- depiler (P) qui enlève un élément

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