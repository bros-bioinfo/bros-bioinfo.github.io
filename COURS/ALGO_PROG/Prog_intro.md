# Programmation

- [Programmation](#programmation)
		- [Introduction](#introduction)
		- [Qu’est ce qu’un programme ?](#quest-ce-quun-programme-)
		- [Respect des règles lexicales et syntaxiques](#respect-des-rgles-lexicales-et-syntaxiques)
		- [Raisonner différemment](#raisonner-diffremment)
		- [Le langage Python](#le-langage-python)
		- [Bibliographie](#bibliographie)
		- [Mon premier programme Pyhon](#mon-premier-programme-pyhon)
		- [Comment exécuter un programme Python](#comment-excuter-un-programme-python)
		- [Règles d’écriture](#rgles-dcriture)
		- [Codage Binaire](#codage-binaire)
		- [Codage des caractères](#codage-des-caractres)
		- [Type des objets](#type-des-objets)

# Introduction

- Objectifs :

  - Apprendre à raisonner à partir d'algorithmes.
  - Traduire ces raisonnements en programmes informatiques.

- Outils :

  - Langage de programmation Python.
  - Editeur de texte Emacs (environnememt de programmation)

  - EnvironnementUnix - Linux .

### Qu'est ce qu'un programme ?

- Un fichier **source**.
- Un ensemble de **déclarations** et d'**instructions**.
- Des librairies chargées dynamiquement ou statiquement. Peuvent être dépendante de l'OS, du langage de programmation.
- Un fichier machine : bytecode, exécutable.

Vous pouvez générer :

- un programme exécutable directement par un utilisateur : cliquer = marche. Généré pour un certain environnement.(W /vs/ Mac)
- un programme nécessitant une **machine virtuelle** ou interpréteur : permet la traduction du source à la machine.
- ou un autre programme pour exécuter votre programme (applet java exécutée par un navigateur Web).

### Respect des règles lexicales et syntaxiques

- Le programme source doit impérativement respecter les **règles syntaxiques et lexicales** du langage de programmation (la machine est stupide):

  - respect des mots réservés,
  - respect du parenthèsage et de l'indentation (c'est une bonne pratique de programmation). Il est indispensable d'avoir un éditeur qui se met en mode Python. Un fichier Word est encodé, exécutable qu'avec Word
  - respect des règles idiomatiques. Facilité pour la communication entre programmeur (incrémentation : i = i + 1 ; i += 1 ; i++).


### Raisonner différemment

Faire des procédure automatisable, écrire des programmes génériques.

- Ce cours de programmation reprend des éléments du cours d'algorithmique.
- Traduire un problème en **procèdures automatisables**.
- **Construire un raisonnement** qui est reproductible quelque soit le langage utilisé.

### Le langage Python

- Ce langage est développé depuis 1989 par Guido van Rossum et de nombreux collaborateurs bénévoles.
- Python est OpenSource et gratuit
- Pyhton est portable. On est pas dépendant de l'OS.
- La syntaxe de Python est simple mais offre la possibilité de construire et manipuler des types de données évolués.
- C'est un langage orienté objet : possibilité d'héritage, de surcharge des opérateurs,
- La gestion de la mémoire est automatisée, appel au Garbage Collector. Pour d'autres gestionnaires, il est possible que des endroits soient réservés au programme mais inutile à l'utilisateur : ce sont des fuites mémoires (mémoire indisponible).
- il est interfaçable avec de nombreux langage : Perl, Java (JPython), C, ainsi qu'avec les SGBD. Permet l'appel à d'autre langage. Lancer des ordres SQL via Python.
- De nombreuses librairies de programmes sont disponibles : TKinter (graphisme), NumPy, Pickle (objets persistants), gadfly ( SQL).

### Bibliographie

Les livres :

- Apprendre à programmer avec Python Gerard Swinnen, ed O'Reilly, 2005.
- Python précis et concis Mark Lutz, ed O'Reilly, 2000.
- Core Python programmingWesley J. Chun, ed Prentice Hall, 2001.

Les sites Web :

- Le site internet : (//www.python.org)
- Note de cours pour l'apprentissage de la programmation Python Gérard Swinnen, (<http://inforef.be/swi/python.htm>)
- . . . à chercher dans : (www.google.fr).

### Mon premier programme Pyhon

- Respectons la tradition : Affichage de "Hello World"
- Code du programme : `print("Hello World")`
- ou encore en utilisant une variable :

  ```python
    c="Hello World"
  \\
    print(c)
  ```
### Comment exécuter un programme Python
+ Lancer l’interpréteur python et taper son code à l’apparition du prompt >>>. A chaque fois que vous faites Enter le code est interprété.
+ Ecrire un fichier dans un éditeur de texte (emacs), puis lancer son exécution avec python nomfichier.py depuis une fenêtre de shell.

### Règles d’écriture
• La casse est significative (Maj, min : fonction ou option différent)
• Le typage des variables est dynamique.
  + i = 1 (integer)
  + i = 10.0 (float)
  + i = "Hello World" (string)
• Une instruction doit commencer en première colonne (début de ligne).
• L’identation est obligatoire pour marquer les blocks.
• Les instructions composées ont
• une entête suivie de “:”
• des instructions indentées.
• Si une instruction dépasse la taille d’une ligne il est possible soit d’écrire un caractère de continuation ou de mettre l’instruction entre ().

```py
if a == b and c == d and \
  d==e :
    print ok
if (a == b and c == d and
  d==e) :
    print ok
```
### Codage Binaire
• Dans une machine binaire, il n’existe que 2 valeurs possible : 0 et 1.
• Ceci nécessite une traduction de chaque variable, instruction . . .
• La plus petite unité de valeur dans un ordinateur binaire est le bit. C’est lui qui prend la valeur 0 ou 1.
• Un mot machine est un ensemble de 8 bits : un octet.

|          | Décimal |
| -------- | ------- |
| 0000     | 0       |
| 0001     | 1       |
| 0010     | 2       |
| 0011     | 3       |
| 0100     | 4       |
| 0101     | 5       |
| 0110     | 6       |
| 0111     | 7       |
| 1000     | 8       |
| 1001     | 9       |
| 1010     | 10      |
| 2³2²2¹2⁰ |         |

 Pour passer du code binaire à la décimale : **2³ \*1+2² \*1+2¹ \*1+2⁰ \*1**

### Codage des caractères
• Pour chaque caractère il existe une valeur numérique correspondante.
• C’est le code ASCII : American Standard Code for Information Interchange.
• Ce code est écrit sur 7 bits soit 127 valeurs possibles - donc 128 caractères.
• Les codes 0 à 31 représentent les caractères de contrôle.
• Les codes 65 à 90 représentent les majuscules.
• Les codes 97 à 122 représentent les minuscules.

### Type des objets

| Type d'objet | Exemple                                      |
| ------------ | -------------------------------------------- |
| Nombres      | 124 3.02 9999L 4.0e+2 3+4j                   |
| Chaines      | ’spam’ “d’guido”                             |
| Listes       | [1,[2,’trois’],4]                            |
| Tuples       | (1,’spam’,4,’U’,0)                           |
| Dictionnaire | {’nourriture’ : ’confiture’, ’gout’: ’miam’} |


+ integer :
  + Taille : 4 octets (32 bits) de -2 147 483 648 à 2 147 483 649
  + si débordement l’erreur overflow error est levée.
+ float :
  + Taille : 8 octets (64 bits) de 10−308 à 10308
  + si débordement pas d’erreur mais affichage de Inf (infinity).
+ long :
  + Pas de limite sauf celle de la mémoire disponible sur la machine.

+ String :
	- Collection ordonnée de caractères.
	- Si une chaine est encadrée par des **”’** elle peut s ́étendre sur plusieurs lignes.
	- c=**”** désigne la chaine vide.
	- Pas de type char (caractère).
	- Pas de gestion de la mémoire par l’utilisateur.

#### Les opérateurs
- Affectation :
		- a = 3
+ Arithmétique :
		- \+ − ∗ / % ∗∗
+ Comparaison : (attention à ne pas mettre d'espace entre les opérateurs)
	+ < > <= >= == != !
+ Logique :
	+ or, and, not.
+ Opérations sur les bits :
	+ << >> | &
