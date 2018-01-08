# Base de donnée

Mail : maabout@labri.fr
Réf PDF : www.labri.fr/~maabout/M1BI

## I-Définitions
### Une base de donnée relationnelle
Une relation est une **table** (tableau) où chaque colonne définie un **attribut** (ou champ) et chaque ligne désigne un **enregistrement** (tuple ou n-tuplet).
Chaque relation a un **nom**.
![https://www.labri.fr/perso/maabout/M1BI/rel.pdf](img/table.png)

**Contraintes**:
+ 2 relations de la même BD ont forcément des noms différents.
+ 2 attributs de la même relation ont forcément des nom différents
Remarque : 2 attributs qui se trouvent dans 2 tables différentes peuvent avoir le même nom.

*Exemple*:
Dans une base, on peut avoir des tables:
+ Employé (**N°SS**,Nom,Ville,Salaire,*N°Service*)
+ Service (*N°Service*,Nom,Etage,**Responsable**)
Note : 
+ N°Service permet d'établir une relation entre l'employé et le service. 
+ Nom est différent entre les deux tables. 
+ Responsable devra utiliser un lien unique pour identifier un employé : deux attributs ont un nom différent mais ont la même info (N°SS).

### Système de gestion de base de données (SGBD)
Système (logiciel) qui permet de gérer des bases données.
+ Créer 
+ Modifier
+ Interroger 

*Exemple de SGBD*: MySQL, **Postgres**, Access, SQL Servor, Oracle , ...

## II-Langage de requête
### 1-Algebre relationnelle
Composée d'un ensemble d'**opérations**. Certaines sont **unaires** (une seule table comme paramètre), d'autres sont **binaires** (exemple : addition est une opération binaire).

#### 1.1-Projection
Prend une table et supprime certaines colonnes.
*Notation* : 
![https://www.labri.fr/perso/maabout/M1BI/rel.pdf](img/notationProj.png)

![https://www.labri.fr/perso/maabout/M1BI/rel.pdf](img/projection.png)

Noter que par défaut les doublons ne sont pas éliminés mais il est possible de spécifier une option afin de les éviter (50 employés à Pessac et 20 à Bx : Ville? on aura une table avec deux lignes Bx et Pessac).

#### 1.2-Sélection
Permet d'extraire des lignes d'une table qui satisfait une condition.
*Notation*:
![https://www.labri.fr/perso/maabout/M1BI/rel.pdf](img/notationSelec.png)

*Exemple*:
![https://www.labri.fr/perso/maabout/M1BI/rel.pdf](img/selec.png)

#### 1.3-Produit cartésien:
Permet de **concaténer** chaque ligne d'une table à chaque ligne d'une deuxième table.
*Notation*:
![https://www.labri.fr/perso/maabout/M1BI/rel.pdf](img/notationprodCart.png)

*Remarques* : 
+ les attributs de la table résultant du produit sont ceux de 2 tables.
*Exemple* : R(A,B) * S(C,D,E) => Résultat(A,B,C,D,E)
![https://www.labri.fr/perso/maabout/M1BI/rel.pdf](prodCart.png)

Note : Nombre de ligne de Résultat = nombre de ligne de R * nombre de ligne de S

+ Cas où un même nom d'attribut apparaît dans les 2 tables : 
Ex : R(A,B) * S(B,C) => Résultat(A,R.B,S.B,C)

+ le résultat de chaque opération de l'algèbre est une table. On peut donc combiner plusieurs opéartions successives.
Ex : afficher le nom des employés habitant Pessac.
PI^_(Nom) (SIGMA^(_Vile = Pessac)(Employé)) => Résultat = {"Nom" :[Dupont,Martin]}
On a d'abord fait une sélection et on a ensuite appliqué la projection.

Ex : afficher le nom des employés qui travaillent au Service Compta. 
+ On extrait le n° du Service dont le nom est Compta.
PI^(_N°Service) (SIGMA^(_NomService = Compta)(Service)) => Res1 : {"N°Service" : [1]}

+ On combine Res 1 avec Employé : 
Employé * Res1 => Res2 = {"N°SS":[123,321,312],"Nom":[Dupond,Dupont,Martin],"Ville":[Bx,Pessac,Pessac],"Employé.N°Service":[1,1,2],"Res1.N°Service":[1,1,1]}

+ On sélectionne le nom des employés où il y a égalité des N°Service.
PI^(_Nom) (SIGMA^(_Employé.N°Service = Res1.N°Service)(Res2)) => Res3={"Nom":[Dupond,Dupond]}
### SQL
## III-Insertion, Suppression, Modification
### Modification de la structure d'une BD
## IV-Contrainte d'intégrité
## V-Conception d'une BD
