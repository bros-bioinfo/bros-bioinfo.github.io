# TD-1 : Requêtes 
1- Afficher le nom des personnes qui habitent Koudalou

+ &pi;<sub>NomOccupant</sub>(&sigma;<sub>NomImmeuble=Koudalou</sub>(Occupant))

2- Afficher le nom des immeubles.

NomImmeuble : attribut retourvé dans table Immeuble, Appart et Occupant. Mais la table Immeuble est censé contenir tous les immeubles : projection.

+ &pi;<sub>NomImmeuble</sub>(Immeuble)

3- Superficie de l'appart occupé par Rachel

+ Occupant **&#8883;&#8882;** Appart &rarr; 5 lignes et 6 colonnes
+ &pi;<sub>Superficie</sub>(&sigma;<sub>NomOccupant = Rachel</sub>(Occupant **&#8883;&#8882;** Appart))

*Remarque* : on a le même résultat avec 
+ &pi;<sub>Superficie</sub>(&sigma;<sub>NomOccupant = Rachel</sub>(Occupant) **&#8883;&#8882;** Appart) 

4- Profession du gérant de l'immeuble où Rachel habite

+ &sigma;<sub>NomOccupant = Rachel</sub>(Occupant) &rarr; Res1
+ Res1 **&#8883;&#8882;** Immeuble &rarr; Res2 (1 ligne et 8 colonnes)
+ &rho;<sub>NomGérant &rarr; Nom</sub> &rarr; Res3 
+ Res3 **&#8883;&#8882;** Personne &rarr; Res4 (1ligne et 10 colonnes)
+ &pi;<sub>Profession</sub>(Res4) 

**Résultat**:

|Profession|
|---------|
|Rentier|

5- Afficher la superficie de l'appart occupé par Rachel ainsi que la profession du gérant de cet appart

+ &sigma;<sub>NomOccupant = Rachel</sub>(Occupant) &rarr; Res1
+ Res1 **&#8883;&#8882;** Appart &rarr; Res2
+ Res2 **&#8883;&#8882;** Immeuble &rarr; Res3
+ &rho;<sub>NomGérant &rarr; Nom</sub> &rarr; Res4 
+ Res4 **&#8883;&#8882;** Personne &rarr; Res5
+ &pi;<sub>Superficie,Profession</sub>(Res5) 

6- Afficher ke N° et le nom d'immeuble des apparts qui ne sont pas occupés

+ &pi;<sub>NomImmeuble,N°Appart</sub>(Appart) - &pi;<sub>NomImmeuble,N°Appart</sub>(Occupant)

7- Le nom des immeubles dont tous les apparts sont occupés.

*Principe* : l'ensemble de tous les immeubles moins ceux qui ont au moins un appartement libre

+ &pi;<sub>NomImmeuble</sub>(Immeuble) &rarr; Res1
+ &pi;<sub>NomImmeuble</sub>(&pi;<sub>NomImmeuble,N°Appart</sub>(Appart) - &pi;<sub>NomImmeuble,N°Appart</sub>(Occupant)) &rarr; Res2
+ Res1 - Res2 

**Resultat** : 

|NomImmeuble|
|---------|
|Barabas|
 
 8- Afficher les paires de personnes qui sont voisines cad habitent le même immeuble

+ &pi;<sub>NomImmeuble,NomOccupant</sub>(Occupant) &rarr; Res1

|NomImmeuble|NomOccupant|
|-----------|-----------|
|K          | Ra        |
|B          | D         |
|B          | Ro        |
|K          | W         |
|K          | A         |

+ &rho;<sub> NomOccupant &rarr; NomOccupant1</sub>(&pi;<sub>NomImmeuble,NomOccupant</sub>(Occupant)) &rarr; Res2

+ Res1 **&#8883;&#8882;** Res2 &rarr; Res3 (NomImmeuble,NomOccupant,NomOccupant1)

|NomImmeuble|NomOccupant|NomOccupant1|
|-----------|-----------|------------|
|K          | Ra        |Ra          |
|K          |Ra         |W           |
|K          |Ra         |A           |
|B          |D          |D           |
|B          | D         |Ro          |
|B          |Ro         |D           |
|B          | Ro        |Ro          |
|K          |W          |Ra          |
|K          |W          |W           |
|K          | W         |A           |
|K          |A          |Ra          |
|K          |A          |W           |
|K          |A          |A           |

Pour éliminer les liges où on a le même nom, il suffit de sélectionner celles où les noms sont différents.

+ &sigma;<sub>NomOccupant != NomOccupant1</sub>(Res3) &rarr; Res4

Pour éviter les paires de type (Ra,W) et (W,Ra), il suffit de comparer les deux noms : 

+ &sigma;<sub>NomOccupant < NomOccupant1 </sub>(Res4) &rarr; Res5

> Note : le **<** s'applique aux caractères (ordre alpahabetique) 

9- Afficher le nom des personnes qui sont arrivés après Doug

Année d'arrivée de Doug:

+ &pi;<sub>AnnéeArrivée</sub>(&sigma;<sub>NomOccupant=Doug</sub>(Occupant)) &rarr; Res1
+ Occupant * Res1 &rarr; Res2
+ &pi;<sub>NomOccupant</sub>(&sigma;<sub>Occupant.AnnéeArrivée > Res1.AnnéeArrivée</sub>(Res2))