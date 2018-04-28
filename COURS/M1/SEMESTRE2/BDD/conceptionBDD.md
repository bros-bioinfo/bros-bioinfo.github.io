# Conception d'une BD

## Outils : Les dépendances fonctionnelles

**Motivation :**  T (NomFournisseur,Adrf,NomProduit,Prix)

On a les infos suivantes : 
+ Deux fournisseurs ont deux noms différents
+ Un fournisseur a une seule adresse
+ 2 Produits ont des noms différents
+ Un produit peut être proposé à différents prix par différents founisseurs
+ Un produit n'est proposé qu'un un seul prix par un fournisseur

**Problème avec cette table :**
+ Redondance de l'adresse : pas parce qu'elle est stockée plusieurs fois, mais parce qu'un fournisseur n'a qu'une seule adresse
    - l'adresse d'un fournisseur est stockée autant de fois qu'il ne propose de produits.
+ Anomalie d'insertion :
    - comment ajouter un fournisseur qui ne propose pas de produits ? &rarr; Introduction de valeurs nulls. 
+ Anomalie de suppression :
    - supprimer les produits proposés par F1 fait disparaître F1 de T.
+ Anomalie de modifications :
    - On sait que F1 est le seul a proposer NP1.
    - On apprend que l'adresse de F1 a changé, elle passe à A2.
```sql
UPDATE T SET Adr = A2 WHERE NP = NP1 -- Error F1 aurait plusieurs adresse
UPDATE T SET Adr = A2 WHERE NF = F1
```

<span style="color : red;">L'origine de tous ces problèmes est le fait que l'attribut Adresse dépend du NomF (nom du fournisseur). On dit que NomF détermine Adr et on note :</span>
**NomF &rarr; Adr**

*Définition :* Soit X et Y deux ensembles d'attributs d'un table T. La dépendance fonctionnelle X &rarr; Y est satisfaite par T si :

**&forall; t1,t2 &isin; T : t<sub>1</sub>[X] = t<sub>2</sub>[X] => t<sub>1</sub>[Y] = t<sub>2</sub>[Y]**

*Exemple :*

T(NomF,Adr,NomProduit,Prix)
+ NomF &rarr; Adr toujours satifaite pour T ?
    - Oui car à un fournisseur, on ne doit associer qu'une seule adresse.
+ NomProduit &rarr; Prix toujours satisfaite pour T ?
    - Non car un même produit peut être proposé par différents fournisseurs à des prix différents.

<div style="color : red;"><b>Objectif de la conception :</b> Structure de la BD en tables qui ne contiennent pas certains types de dépendances (jugées comme néfastes)</div>

Pour l'exemple, on décompose T en 2 sous tables : 
+ Fournisseur(NomF, Adr)
+ Produit(NomF,NomProduit,Prix)

Les dépendances satisfaites par ces 2 tables sont : 
+ NomF &rarr; Adr 
+ NomF, NomProduit &rarr; Prix

Quels sont les clés primaires de ces 2 tables ?

+ Fournisseur : Clé = NomF
+ Produit : Clé = NomF,NomProduit

Proposer une clé pour la table : T(NomF,Adr,NomP,Prix)

Clé primaire est (NomF,NomP)

Est-ce que cela va empêcher d'avoir l'adresses différents associés au même fournisseur ?

Non : On peut faire 

```sql
INSERT INTO T VALUES (F1,A1,P1,Pr1)
INSERT INTO T VALUES (F1,A2,P2,Pr2)
``` 

<div style="color : red;"><b>Principe 1 général de la décomposition :</b> Faire en sorte que les seules dépendances présents dans les tables soient de la forme : Clé &rarr; attribut</div>

Dans T(NomF,NomProduit,Adr,Prix) : 
+ NomF &rarr; Adr n'est de la forme Clé &rarr; Attribut

<div style="color : red;"><b>Principe 2</b> : Il faut que l'on puisse reconstituer l'information initiale</div>

*Exemple* : Si l'on remplace T par 
+ T1(NomF,Prix)
+ T2(NomF,Adr)
+ T3(NomProduit, Prix)

### Méthodologie de décomposition

1. Identifier toutes les DF(dépendance fonctionnelle) qui doivent être satisfaites par T.
2. Pour chaque DF de la forme X &rarr; Y, construire une table R(X,Y) où X est la clé primaire de R.
3. Si aucune des tables obtenues ne contient une clé de T, alors ajouter une table R(K) où K est une clé de T.

**Application à l'exemple :**

1. NomF &rarr; Adr
    NomF,NomP &rarr; Prix
2. R1(NomF,Adr)
    R2(NomF,NomP,Prix)
3. Clés de T ?
    Définition d'une clé : X est clé de T si (i)X déterminent tous les attributs de T et (ii) il n'existe pas Y &sub; X tels que Y détermine tous les attributs de T.

**Comment vérifier si X est une clé ?**
+ On calcule la fermeture X<sup>+</sup> de X. X<sup>+</sup> représente l'ensemble des attributs que X détermine.
+ Etant donné F un ensemble de DF, X<sup>+</sup> est calculé comme suit :

+ X<sup>0</sup> = X
+ X<sup>i</sup> = X<sup>i-1</sup> &cup; { Y | X<sub>j</sub>} &rarr; Y &isin; F avec  X<sub>j</sub> &sub; X<sup>i-1</sup>}

*Exemple*

F = {A &rarr; B, AD &rarr; B, C &rarr; E, BC &rarr; D}

Calculer AC<sup>+</sup> : 

+ AC<sup>0</sup> = AC
+ AC<sup>1</sup> = AC &cup; BE = ABCE
+ AC<sup>2</sup> = ABCE &cup; D = ABCDE
+ AC<sup>3</sup> = ABCDE &cup; &empty; = ABCDE
+ AC<sup>+</sup> = ABCDE

*Est-ce que AC est une clé ?*

Il faut vérifier que ni A<sup>+</sup> ni C<sup>+</sup> ne sont égaux à ABCDE.

+ A<sup>+</sup> = ?
+ A<sup>0</sup> = A
+ A<sup>1</sup> = A &cup; B = AB
+ A<sup>2</sup> = AB &cup; &empty; = AB &rarr; **A n'est pas une clé**
+ C<sup>+</sup> = ?
+ C<sup>0</sup> = C
+ C<sup>1</sup> = C &cup; E = CE
+ C<sup>2</sup> = CE &cup; &empty; = CE &rarr; **C n'est pas une clé**

**AC n'est pas une clé**

Pour trouver toutes les clés, on procède par niveau : 
+ On trouve les clés de taille 1, puis de taille 2 , ...
+ Si X est clé, alors pas besoin de tester ses sous ensembles.

*Application à l'exemple :*
+ Niveau 1 : A<sup>+</sup> = AB, B<sup>+</sup> = B, C<sup>+</sup> = C , D<sup>+</sup> = D, E<sup>+</sup> = E &rarr; pas de clé avec un seul attribut
+ Niveau 2 : AB<sup>+</sup> = AB, AC<sup>+</sup> = ABCDE, AD<sup>+</sup> = ADB, AE<sup>+</sup> = AEB, BC<sup>+</sup> = BCDE, BD<sup>+</sup> = BD, BE<sup>+</sup> = BE, CD<sup>+</sup> = CDE, CE<sup>+</sup> = CE, DE<sup>+</sup> = DE &rarr; Une seule clé de taille 2 qui est AC.
+ Niveau 3 : ABD<sup>+</sup> = ABD, ABE<sup>+</sup> = ABE, ADE<sup>+</sup> = ADEB, BCD<sup>+</sup> = BCDE, CDE<sup>+</sup> = CDE
+ Niveau 4 : ABDE<sup>+</sup> = ABDE, BCDE<sup>+</sup> = BCDE &rarr; pas de clé 
+ Niveau 5 : pas de candidat car ABCDE contient AC qui est une clé.

**Conclusion** :

T admet une seule clé qui est AC.

Remarque: 
+ On remarque que A et C ne sont à droite d'aucune DF. Donc toute clé doit contenir A et C.
    Clé forme : AC...

Comme AC est une clé, on peut toute de suite déduire que c'est l'unique clé.

*Exemple :*

F = {A &rarr; B, B &rarr; C, C &rarr; D, D &rarr; E, E &rarr; F}

Clés = ?

A n'est à droite d'aucune DF &rarr; toute clé contient A.

A<sup>+</sup> = ABCDEF &rarr; A est une clé et c'est l'unique clé.