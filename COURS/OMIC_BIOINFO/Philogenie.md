# Introduction à la phylogénie

La phylogénie repose historiquement sur la cladistique.
## Taxonomie

Ordre, famille, genre, espèces.
- Relation de parenté relative
- Ancêtre commun exclusif
- Groupe frère (sister group)

La phylogénie n'est pas la généalogie, il faut chercher des **groupes frères** et non l'ancêtre.

- **Clades (Groupe monophylétiques)**: Groupe dont les membres sont plus apparentés entre eux qu'avec aucun autres organisme. Groupe incluant un ancêtre et tous ses descendants

- **Groupe paraphylétiques**: Groupe n'incluant pas tous les descendants de son ancêtre.

- **Groupe polyphylétique**: Groupe n'incluant pas son propre ancêtre.

## 1. Sélection des données

La première étape consiste à choisir un **marqueur moléculaire** adapté au groupe taxonomique étudié. L'évolution des séquences choisies devrait vérifier ce que l'on veut calculer.

- Mixer ARNr et ARNt : non-sens.
- ARNr stable → espèces divergentes; Premier arbre de la vie : fait avec ARNr 16S (1970). L'ARNr était le marqueur incontournable (mais aujourd'hui trop stable)
- ADN mitochondrial a un taux de mutation 17 fois supérieur à celui de l'ADN nucléaire → organismes proches.

Exemple de sélection des données:
  > phylogénie de bactéries: 16S
  > phylogénie d'Eucaryotes: 18S, actine, EF1, RPB1
  > phylogénie des plantes: rbcL, 18S
  > phylogénie d'animaux
  > niveau phylum, classe, ordre: 18S, génome mt

## 2. Alignement des séquences

On cherche à réaliser le meilleur score, pour obtenir le scénario le plus probable.

Les alignements Multiples sont très importants. On a plusieurs algorithmes:
- CLUSTALW
- CLUSTALO
- DIALIGN-TX
- MAFFT
- MUSCLE
- POA
- Probalign
- Probcons
- T-Coffee

L'alignement multiple (**CLUSTAL W, MUSCLE**) permet d'identifier une region commune à la séquence (en simultanée). L'alignement avec le score le plus élevé peut représenté le scénario le plus probable. Il faut pouvoir expertiser un alignement multiple :
- ajout et extension de gap
- maximisation score avec ajout d'acide aminés
- trouver des régions bien conservée (utilistion pour phylogénie ?)
L'alignement multiple permet de se concentrer sur des blocs et permet de déterminer le meilleur **marqueur moléculaire**. On se focalise sur des régions particulières pour la construction d'un arbres : des **blocs**.


## 3. Construction d'un (ou plusieurs arbres)

Est-ce qu'on va trouver le bon arbre ? 1 ou plusieurs ? Choix ?
C'est une représentation schématique. Elle permet de mettre en évidence :
- les relations de parentés entre des espèces/**TAXA**
- les **branches**(ou arrètes) définissent les relations de descendance
- les **noeuds** internes représente les ancêtres hypothétiques commun au descendant (aucune données sur lui)
L'arbre peut être enraciné ou pas, selon qu'on est parvenu à identifier les ancêtres communs. L'arbre peut avoir un maximum de 2 feuilles par noeuds (si les calculs sont bons).


### Composition d'un arbre:
>Branches (arrêtes en informatique);
>Noeuds
>Root (racines)
>Noeuds terminaux (feuilles)

**On a plusieurs type de représentation:**
- Cladogramme
- Phylogramme (distance génétique)
- Arbre Ultramétrique (temps écoulé)

> Note : distance génétique = nombre de différence entres les taxons;

**Format Newick**
- Les arbres générés par les programmes de phylogénie sont donnés sous la forme d'expression (nom des TAXA) entres paranthèse et avec des virgules :
**(((C,B),A),D)**

- et on peut indiquer la longueur des branches par:1
**(((C:1,B:1),A:3),D:5)**


![alt text](http://images.slideplayer.com/36/10578139/slides/slide_25.jpg)


### Résolution des arbres

On veut obtenir un maximum de bifurcation et évité les polytomies (même racine) ou multifurcation (> 3 par noeuds).

Il est important d'avoir des arbres **enracinés**, d'un point de vue biologique.

Un arbre non raciné est un arbre qui n'a pas de point de départ.

![alt text](http://www.evolution-biologique.fr/wp-content/uploads/2.15.jpg)



### Comment raciner un arbre?:

![](https://media.giphy.com/media/17Z9AMUpJsV5m/giphy.gif)

La plupart des méthodes produisent des arvres non-racinés car elles détectent des différences entre séquences mais n'ont aucun moyen de les orienter temporellement.

On peut les positionner grâce:
1- à un groupe externe de séquences connues ***a priori*** comme externes au groupe d'intérêt. La racine correspond alors à la branche qui relie les deux groupes.

2- Quand on a aucune possibilité de décider quel taxon peut servir de groupe, on place souvent la racine au millieu de l'arbre.

Les ingrédients de la **phylogénie moléculaire**:
- Taxons
- Caractères (pour nous ce sont les séquences)
  - soit les caractères tels qu'ils sont donnés
    - description morphologique
    - présence/absence
    - caractères à états multiples (ADN:4; Prot:20)
  - construction d'une distance à partir des caractères.

**Modèles d'évolution**
- Objectifs: Corriger la différence entre le nombre de substitutions observées et leur nombre réel.
- Différents modèles ont été proposées en tenant compe de la fréquence des bases.

**Modeltest-Protest** -> logiciel qui regarde le meilleur modèle à partir de jeux de séquences.

**Reconstruction d'arbres**:
Toutes les méthodes de reconstruction reposent sur les hypothèses suivantes:
- Pas de transfert latéral ou de recombinaison.
- Séquences sont homologues
- Chaque position de l'alignement comporte des résidus homologues
- L'échantillonage est bien réalisé.

Plesiomorphie -copie des autres caractères

**Trees: Construction methods**

Etapdes de l'UPGMA
- calculer la matrice de distance entre tous les séquences appariées.
- Pour chaque iteration:
  - Chercher la distance la plus petite
  - Mise à jour des matrices de distance en calculant le score moyen.



## 4. Détermination de la robustesse des arbres.
- La méthode la plus utilisée est celle du bootstrap (grilles)
- Postulat: les caractères évoluent de manière indépendante.
→ Un arbre qui varie beaucoup
