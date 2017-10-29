# **TUTORAT PYTHON**

## SEANCE DU 10/09/17


**1. l'utilisateur entre une valeur et le programme compte jusqu'à ce nombre (nb) ...**


```python
nb=input("compter jusqu'a combien?")
i=0
while i < nb:
    i=i+1
    print(i)
```
**2. ... et afficher lesquels sont pair/impaire**
```python
nb=input("compter jusqu'a combien?")
i=0
while i < nb:
    i=i+1
    if i%2 == 0:
        print i,'est pair'
    else:
        print i,'est impair'
```

**3.  generer un nombre aléatoire entre 1 et 10; l'utilisateur entre un nombre, si c'est plus afficher "c'est plus", et si c'est moins afficher "c'est moins"**

```python
import random #appeller la fonction

rand = random.randint(1,10)

x=0

while x != True:
    x=int(input("entrez une valeur\n"))
    if x > rand:
        print("c'est moins !\n")
    if x < rand:
        print ("c'est plus !\n")
    else:
        x=True
        print ("Vincent Lagaffe  says : BRAVO\n")

```


**4. : Générer une liste et afficher la deuxième valeur de la liste**
```python
liste =[] # il faut la declarer avant de la remplire

liste = [0,1,1,2,3,4,5,6,7,8,9]

print liste[2]
```
>2

**5. compter de 1 a 10 et stocker tous les nombres dans une liste**

```python
liste =[]
nb=input("compter jusqu'a combien?")
i=0

while i < nb:
    liste.append(i)
    i=i+1

print (lol)

#puis appeller les éléments de la liste et les afficher un par un.

i=0
#imprimer élement par element

while i < len(lol):
    print liste[i]
    i=i+1
```
## SEANCE DU 18/10/17

**6. Refaire lexercice 5 en utilisant des fonctions.**
```python
def compter(nb_tours,liste):
    i=0
    while i < nb_tours:
        liste.append(i)
        i=i+1

def afficher():
    i=0
    while i < len():
        print liste[i]
        i=i+1

liste = []
nb=input ("compter")
compter(nb,liste)

print("lol")
afficher(liste)

print liste
```

**7. Faire la suite de Fibonacci, chaque element de la suite est egale a la somme des deux elements precedents. Utiliser une liste pour stocker les elements de la suite.**

[Suite de Fibonacci](https://fr.wikipedia.org/wiki/Suite_de_Fibonacci)
```python
def fibo(nbr):
    list=[]
    list.append(0)
    list.append(1)
    for i in range(nbr):
        list.append(list[i]+list[i+1])
    print(list[nbr])

#MAIN

nbr=int(input("Choisissez votre nombre\n"))
fibo(nbr)


```
**8. Ameliorer le programme de sorte a ce que lutilisateur puisse demander des elements de la suite sans avoir a relancer le programme.**
```python
def fibo(nbr):
    list=[]
    list.append(0)
    list.append(1)
    for i in range(nbr):
        list.append(list[i]+list[i+1])
    print(list[-1])

#MAIN
nbr=1

while nbr != 0:
    nbr=int(input("CHoisissez votre nombre\n"))
    fibo(nbr)
```
