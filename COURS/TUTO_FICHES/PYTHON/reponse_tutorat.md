# **TUTORAT PYTHON**

## SEANCE DU 10/09/17


**1. Demander au programme entrer une valeur et compter jusqu'au nombre**

```python
nb=input("compter jusqu'a combien?")
i=0
while i < nb:
    i=i+1
    print(i)
```

**2. : lesquels sont pair/impair**
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

**3.  generer un nombre random entre 1 et 10 ; l'utilisateur entre un nombre, si c'est plus afficher c'est plus**

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


**4. : (sur les listes)**
```python
liste =[] # il faut la declarer avant de la remplire

liste = [0,1,1,2,3,4,5,6,7,8,9]

print liste[2]
```
>2

**5. compter de 1 a 10 et les stocker dans une liste**

```python
lol =[]
nb=input("compter jusqu'a combien?")
i=0

while i < nb:
    lol.append(i)
    i=i+1

print (lol)

#puis appeller les éléments de la liste et les afficher un par un.

i=0
#imprimer élement par element

while i < len(lol):
    print lol[i]
    i=i+1
```
