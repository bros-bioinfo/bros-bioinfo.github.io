
# Avant-propos :

- Trouvez [>ici<](http://www.labri.fr/perso/fbaldacc/Python/td1.pdf) les exercices de Baldacci si vous voulez chercher avant de regarder les réponses proposées.
- Je vous présente ici différents scripts qui ne sont pas forcément optimisés (même si j'essaie de prendre en compte un maximum de paramètres)
	- Ils sont là, principalement, pour vous donner une idée de comment répondre à la question posée.
- Je vous invite à faire part des modifications qui vous sembleraient judicieuses.
- Les scripts ne marchent que pour python 3.5 vu que j'ai codé en utilisant ce shell là.
	- Faites attention à l'indentation si jamais vous copiez-collez le script
- Sachez que j'utilise la fonction def pour définir une variable ce qui me permet ensuite de lancer le script avec une seule ligne dans python.
- Cet exercice était pris du moodle de Taveau en prog' python [(voir)](https://moodle1.u-bordeaux.fr/mod/page/view.php?id=130387). Il fallait construire un demi triangle de hashtags :

Sur l'image c'est du code pyton 2.7 que j'ai modifié pour cet exemple:

![hashtag code](https://i.imgur.com/KJP9HV4.jpg "Exo hashtag")

```python
def hashtag(num): #afficher des hashtags en fonction de num (doit être compris entre 1 et 20)
	i = 0
	tab = range(0,20)
	while num > 20: #tant que le user mets un nombre trop grand, on lui demande de rentrer un nouveau nombre
			num2=input('Choisissez une valeur comprise entre 1 et 20!\n')
		 	num= int(num2)#modification du nombre entré de class 'str' à 'int'
		 	continue
	while num <= 0: #tant que le user mets un nombre trop petit, on lui demande de rentrer un nouveau nombre
			num2=input('Choisissez une valeur comprise entre 1 et 20!\n')
			num= int(num2)
			continue
	for i in tab : #on écrit les hashtags en fonction de si i est inférieur à num
		 if i < num:
					i += 1
					print "#"*i
					continue
	print("C'est fini, quelle belle demi-pyramide !")
```



## Exercice 1

- Donner un nombre minimum...

```python
def min(a,b):
	if a < b:
		return a
	else:
		return b
```


## Exercice 2

- Faire une somme de 3 nombres

```python
def sumnum(a,b,c):
	print(a+b+c)
```

## Exercice 3

- Demandez le nom à quelqu'un et l'afficher

```python

def whtisyourname():
	name=input("Quel est votre nom?\n")
	print("Hello Mr or Mme ",name)
```

## Exercice 4

- Répéter 3 fois une chaîne de caractères préalablement demandée

```python

def stringx3():
	string=input("Tapez votre texte\n")
	print((string + "\n")*3)
```

## Exercice 5

- Version sans def :

```python
		total=0
		print("Quelle est l\'heure de début?\n")
		h=input()
		h = int(h)
		print("Quelles sont les minutes de début?\n")
		m=input()
		m=int(m)
		print("Combien de temps va durer l'expérience(en min)\n")
		duree=input()
		duree=int(duree)
		total=((h*60)+m+duree)
		total2=(total//60)
		total3= total%60
		print("L'expérience finira à",total2,"heures",total3,"minutes")
```


### Exercice 5 bis


- EDTlab v2.0 ajout des conditions empêchant l'utilisateur de faire nawak.

```python
	def EDTlab(h,m,duree):
		import sys
		i=0
		j=0
		error="Vous n'aviez qu'à pas essayer de mettre des nombres extravaguants..."
		tab=range(0,100)#création d'une range  pour définir le nombre d'essai du user.
		for j in tab:
			if h < 0 or h > 24: #tant que le user mets un nombre trop grand ou trop petit, on lui demande de rentrer un nouveau nombre
				h=input('Choisissez une valeur comprise entre 0 et 24!\n')
				#type(h) modification du nombre entré de class 'str' à 'int'
				h= int(h)
				j +=1
				if j > 5: #on definit une limite de coup pour le user puis on quitte le programme si trop de tentatives
					return error
					sys.exit(0)

		for i in tab:
			if m < 0 or m > 60: #tant que le user mets un nombre trop grand ou trop petit, on lui demande de rentrer un nouveau nombre
				m=input('Choisissez une valeur comprise entre 0 et 60!\n')
				#type(m) modification du nombre entré de class 'str' à 'int'
				m= int(m)
				i+=1
				if i > 5:
					return error
					sys.exit(0)

		total=0
		total=((h*60)+m+duree)
		total2=(total//60)
		total3= total%60
		print("L'expérience finira à",total2,"heures",total3,"et minutes")
```

## Exercice 6

- Avec 4 variables déterminer laquelle est la plus grande en prenant en compte les égalités
```python
def give4var(a,b,c,d): #si jamais les valeurs  sont égales on ne donne qu'une valeur
	import sys
	if a >= b and a >= c and a >= d:
				print(a)
				sys.exit(0)
	if b >= a and b >= c and b >= d:
				print(b)
				sys.exit(0)
	if c >= a and c >= b and c >= d:
				print(c)
				sys.exit(0)
	if d >= a and d >= b and d >= c:
				print(d)
```

## Exercice 7

- Ajout du changement de jour à "EDTlab"

```python
	def EDTlab(h,m,duree):
		import sys #permet d'importer la library sys (ici pour pouvoir quitter le prog une fois que le user a grillé toutes ses chances de mettre des valeurs valides)
		i=0
		j=0
		day=0
		total=0
		error="Vous n'aviez qu'à pas essayer de mettre des nombres extravaguants..."
		tab=range(0,100)#création d'une range  pour définir le nombre d'essai du user.
		for j in tab:
			if h < 0 or h > 24: #tant que le user mets un nombre trop grand ou trop petit, on lui demande de rentrer un nouveau nombre
				h=input('Choisissez une valeur comprise entre 0 et 24 pour les heures!\n')
				#type(h) modification du nombre entré de class 'str' à 'int'
				h= int(h)
				j +=1
				if j > 5: #on definit une limite de coup pour le user puis on quitte le programme si trop de tentatives
					return error
					sys.exit(0)

		for i in tab:
			if m < 0 or m > 60: #tant que le user mets un nombre trop grand ou trop petit, on lui demande de rentrer un nouveau nombre
				m=input('Choisissez une valeur comprise entre 0 et 60 pour les minutes!\n')
				#type(m) modification du nombre entré de class 'str' à 'int'
				m= int(m)
				i+=1
				if i > 5:
					return error
					sys.exit(0)

		for i in tab:
			if duree < 0: #tant que le user mets un nombre trop grand ou trop petit, on lui demande de rentrer un nouveau nombre
				duree=input("Choisissez une valeur supérieure à 0 pour la durée de l'expérience!\n")
				#type(m) modification du nombre entré de class 'str' à 'int'
				duree= int(duree)
				i+=1
				if i > 5:
					return error
					sys.exit(0)
		total=((h*60)+m+duree)
		h=(total//60)
		m= total%60
		if h < 24: #ajout du changement de jour
			print("L'expérience finira à",h,"heures",m,"et minutes")
		if h > 23:
			day=h//24
			h=h%24
			print("L'expérience finira",day,"jour(s) après son lancement à",h,"heures et",m,"minutes.")
```

## Exercice 8

- Ajouter un jour à une date demandée (avec des conditions limitantes)

```python
def dateplus1(d,m,y): #day : DD month: MM year: YY -> on affichera le jour suivant de celui donné
		import sys

		li1=[3,5,7,10,12] #mois comprenant 31j
		li2=[4,6,9,11] #mois comprenant 30j
		error="Vous ne savez pas entrer une date correcte ?"
		tab=range(0,100)#création d'une range  pour définir le nombre d'essai du user.
		for i in tab:
			if d > 28 and m == 2 and y%4!=0: #tant que le user mets un nombre trop grand ou trop petit, on lui demande de rentrer un nouveau nombre
				d=input('Choisissez une valeur comprise entre 1 et 28 pour le mois de février en année normale!\n')
				#type(h) modification du nombre entré de class 'str' à 'int'
				d= int(d)
				i +=1
				if i > 5: #on definit une limite de coup pour le user puis on quitte le programme si trop de tentatives
					return error
					sys.exit(0)
		for i in tab:
			if d > 29 and m == 2 and y%4==0: #tant que le user mets un nombre trop grand ou trop petit, on lui demande de rentrer un nouveau nombre
				d=input('Choisissez une valeur comprise entre 1 et 29 pour le mois de février en année bisextile!\n')
				#type(h) modification du nombre entré de class 'str' à 'int'
				d= int(d)
				i +=1
				if i > 5: #on definit une limite de coup pour le user puis on quitte le programme si trop de tentatives
					return error
					sys.exit(0)
		for i in tab:
			if d > 30 and m in li2: #tant que le user mets un nombre trop grand ou trop petit, on lui demande de rentrer un nouveau nombre
				d=input("Choisissez une valeur comprise entre 1 et 30 pour les mois d'Avril, Juin, Septembre et Novembre!\n")
				#type(h) modification du nombre entré de class 'str' à 'int'
				d= int(d)
				i +=1
				if i > 5: #on definit une limite de coup pour le user puis on quitte le programme si trop de tentatives
					return error
					sys.exit(0)
		for i in tab:
			if d < 1 or d > 31: #tant que le user mets un nombre trop grand ou trop petit, on lui demande de rentrer un nouveau nombre
				d=input('Choisissez une valeur comprise entre 1 et 31!\n')
				#type(h) modification du nombre entré de class 'str' à 'int'
				d= int(d)
				i +=1
				if i > 5: #on definit une limite de coup pour le user puis on quitte le programme si trop de tentatives
					return error
					sys.exit(0)

		for i in tab:
			if m < 1 or m > 12: #tant que le user mets un nombre trop grand ou trop petit, on lui demande de rentrer un nouveau nombre
				m=input('Choisissez une valeur comprise entre 1 et 12!\n')
				#type(m) modification du nombre entré de class 'str' à 'int'
				m= int(m)
				i+=1
				if i > 5:
					return error
					sys.exit(0)

		for i in tab:
			if y < 0 or y > 99: #tant que le user mets un nombre trop grand ou trop petit, on lui demande de rentrer un nouveau nombre
				y=input('Choisissez une valeur comprise entre 0 et 99!\n')
				#type(m) modification du nombre entré de class 'str' à 'int'
				y= int(y)
				i+=1
				if i > 5:
					return error
					sys.exit(0)
		d=d+1
		if d == 32 and m in li1: #gestion des changements de mois et d'année !
			d=1
			m+=1
			if m == 13:
				m=1
				y+=1
		if d == 31 and m in li2:
			d=1
			m+=1
		if d == 29 and m == 2 and y%4!=0:
			d=1
			m+=1
		if d == 30 and m==2 and y%4 == 0:
			d=1
			m+=1

		if d < 9: #ajout d'un 0 avant le chiffre
			d="0"+str(d)
		if m < 10:
			m="0"+str(m)
		if y <10:
			y="0"+str(y)
		print(d,m,y)
```


## Exercice 9

- Répéter une chaîne de caractère en fonction du nombre demandé :

```python
def string(x):#x = nombre de fois que l'on display le "string"
    str1 = input("Tapez la phrase que vous voulez répéter:\n")
    print((str1+"\n")*x)
```

## Exercice 10

- Retourner un caractère d'une chaîne de caractères

```python
def charn2(): #demande une chaine de caractère, la convertie en list et donne la deuxième lettre
	string=input("Tapez votre phrase ou mot\n")
	string=list(string)
	print(string[1])
```


## Exercice 11

- Donner la longueur d'une chaîne de caractères préablablement écrite

```python
def lenstring():
	string=input("Tapez votre chaine de caractères:\n")
	print(len(string)),"caractères dans votre phrase !")
```
Voilà pour ces exos ! :)

![](https://media1.giphy.com/media/roeK1IUE3V22k/200.gif#8-grid1)

# Je vous mets ici les fonctions vues avec Tata :

- Demander un nombre puis :
 - Afficher la table de multiplication d'un nombre

```python
def multplication():
    nb=input("Entrez le nombre dont vous voulez la table de multiplication\n")
    nb=int(nb)
    tab=range(1,11,1)
    for i in tab:
        somme = i * nb
        print (somme)
```

- Table de multiplications des nombres compris entre nb1 et nb2 :

```python
def multiplicationinternombre(nb1,nb2):

    if (nb1 > nb2):		#si jamais nb1 > nb2
        nb1,nb2=nb2,nb1 #permet d'intervertir nb1 et nb2
    print ("\n)")

    for j in range(nb1,nb2+1):
        print("Table de multiplication de",j)
        for i in range(1,11,1):
            print (j,"*",i, "=",i*j)
        print ("\n")
```

- Entrer des poids d'animaux, en faire la somme et donner le maximum :

```python
def poidsanimaux():

    maxi = 0
    somme = 0
    for i in range(1,11,1):
        poids=input("Quel est le poids\n")
        poids=int(poids)
        somme = poids + somme
        if poids > maxi:
            maxi = poids
    print ("La somme des poids est", somme," le max est :", maxi)
```

- Poids de différents animaux, somme et maximum pour chaques animaux :

```python
def poids():

    for animal in ('souris','rats','cobayes'):
        maxi = 0
        somme = 0
        print ("Combien de",animal,"avez-vous?")
        nb=input()
        nb=int(nb) #pas utile pour python 2.7
        for i in range(nb):
            poids=input("Quel est le poids\n")
            poids=int(poids)
            somme = somme + poids
            if poids > maxi:
                maxi = poids

        print ("Poids total : ",somme, "pour les", animal)
        print ("Le poids le plus haut est : ", maxi, "pour les", animal)
```

- Transformer une chaîne ADN en ARN complémentaire :

```python
def DNAintoRNA():
	chaine = raw_input("Entrez votre chaîne de nucléotides:\n")
	chaine = chaine.upper()
	DNA=list(chaine)
	RNA=""
	for lettre in DNA:
		if lettre == "A":
			RNA+="U"
		elif lettre == "T":
			RNA+="A"
		elif lettre == "G":
			RNA+="C"
		elif lettre == "C":
			RNA+="G"
		else: # print "en position", lettre," vous avez un caractère interdit", DNA[lettre] sys.exit(1)
			RNA+="?"
	print RNA
```

- Trouver le nombre de fois qu'apparaît un motif dans une chaîne :

```python
def countMotif():
	chaine = raw_input("Entrez votre chaîne de nucléotides:\n")
	motif = raw_input("Quel motif voulez-vous chercher ?\n")
	chaine = chaine.upper()
	motif = motif.upper()
	print "Il y a ",chaine.count(motif),"fois", motif,"dans votre séquence !"
```

- Demander combien de poids moléculaires il veut saisir:
- Combien d'enzymes il  veut saisir:
- Créer une liste de noms d'enzymes:
- Pour chacun des noms demander le poids (l'intégrer dans une liste)
- Afficher l'enzyme "enzyme" a le poids "poids":
- Afficher le nom des enzymes qui ont un poids au-dessus de la moyenne des valeurs:

```python
def poidsMolEnz():

	print "Combien de poids et d'enzymes voulez-vous saisir ?"
	print "Combien d'enzymes differentes avez-vous ?"
	nb = input()

	maxi=0
	moypoids=0
	listenz = []
	listpoids = []

	for enz in range(nb):
	  listenz.append(raw_input("Entrez le nom de vos enzymes:"))
	for poids in range(nb):
	  listpoids.append(input("Entrez vos poids moleculaires:"))
	for i in range(len(listpoids)):
	    if maxi < listpoids[i]:
	        maxi=listpoids[i]
	for i in range(len(listenz)):
	  print "L'enzyme :",listenz[i],"a pour poids moleculaire :",listpoids[i]
	print "Le poids le plus eleve est de :",maxi
	moypoids = sum(listpoids)/len(listpoids)
	for i in range(len(listpoids)):
	    if listpoids[i] > moypoids:
	        print listenz[i],"a un poids moleculaire superieur a la moyenne !"
	print "Le poids moleculaire moyen est de :",moypoids
```
