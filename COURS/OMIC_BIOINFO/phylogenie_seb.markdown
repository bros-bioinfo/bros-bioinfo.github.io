# INTRODUCTION PHYLOGENIE

La Phylogénie repose historiquement sur la cladistic.

## Taxonomie

Ordre, famille, genre, espèces.
- Relation de parenté relative
- Ancêtre commun exclusif
- Groupe frère (sister group)

La phylogénie n'est pas la généalogie, il faut chercher des **groupes frères** et non l'ancêtre.

- **Groupe monophylétique (= clade)** : Groupe dont les membres sont plus apparentés entre eux qu'avec aucun autres organisme. Groupe incluant un ancêtre et tous ses descendants
- **Groupe paraphylétique** : Groupe n'incluant pas tous les descendants de son ancêtre
- **Groupe polyphylétique** : Groupe n'incluant pas sont propre ancêtre commun.

## 1. Sélection des données.

La première étape consiste à choisir un marquer moléculaire adapté au groupe taxonomique étudié. L'évolution des séquences chosies devrait vérifier ce que l'on veut calculer.
- Mixer ARNr et ARNt : non sens.
- ARNr stable => espèce divergentes ; Premier arbre de la vie : fait avec ARNr 16S (1970). L'ARNr était le marqueur incontournable (mais aujourd'hui trop stable)
- ADN mitochondrial a un taux de mutation 17 fois > à celui de l'ADN nucléraire => organisme proche.

Exemples :
- phylogénie des bactéries : 16S. EN vérité, utilisation des gènes de ménages => histoire moyenne sur un ensemble de gènes (travail complexe mais arbres plus précis)
- phylogénie Eucaryotes : 18S, actine
[...]

## 2. ALignement des séquences

On va chercher à maximiser un score. L'alignement multiple (**CLUSTAL W, MUSCLE**) permet d'identifier une region commune à la séquence (en simultanée). L'alignement avec le score le plus élevé peut représenté le scénario le plus probable. Il faut pouvoir expertiser un alignement multiple :
- ajout et extension de gap
- maximisation score avec ajout d'acide aminés
- trouver des régions bien conservée (utilistion pour phylogénie ?)
L'alignement multiple permet de se concentrer sur des blocs et permet de déterminer le meilleur **marqueur moléculaire**. On se focalise sur des régions particulières pour la construction d'un arbres : des **blocs**.

## 3. Construction d'un (ou plusieurs) arbres

Est-ce qu'on va trouver le bon arbre ? 1 ou plusieurs ? Choix ?
C'est une représentation schématique. Elle permet de mettre en évidence :
- les relations de parentés entre des espèces/**TAXA**
- les **branches**(ou arrètes) définissent les relations de descendance
- les **noeuds** internes représente les ancêtres hypothétiques commun au descendant (aucune données sur lui)
L'arbre peut être enraciné ou pas, selon qu'on est parvenu à identifier les ancêtres communs. L'arbre peut avoir un maximum de 2 feuilles par noeuds (si les calculs sont bons).

### Type d'arbre : (pdf image )



> Note : distance génétique = nombre de différence entres les taxons;

### Format Newick (récupération de l'arbre sur ordi)

Les arbres générés par les programmes de phylogénie sont donnés sous la forme d'expression (nom des TAXA) entres paranthèse et avec des virgules :
**(((C,B),A),D)**

On peut également indiquer la longeur des branches par : 1
**(((C:1,B:6),A),D)** [...]

### Objectifs [...]

#### Résolution d'une phylogénie (pdf)

- Polytomie (même racine)  ou multifurcation (>3 par noeuds ) : ce n'est pas résolue
- Bifurcation : résolue

#### Arbres raciné
(image pdf)

#### Taxon et arbres possibles : (pdf)

#### Nombres de possiblités (pdf)

### Comment raciné un arbre ?

La plupart des méthodes produisent des arbress non racinés car elles détectent les différences entre séquences mais n'ont aucun moyen de les orienter temporellement.

On peut positionner la racine grâce :
1 - à un groupe externe de séquences connues a priori comme externe au groupe d'intérêt. La racine correspond alors à la branche qui relie les deux groupes.
(pdf)

2 - Quand on a aucune possiblité de décider quel taxon peut servir de groupe [...]

### Les ingrédients de la phylogénie moléculaire

- TAXONS : un taxon est un groupe d'organisme reconnu en tant qu'unité formelle à chacun des niveaux de la classification (Simpson, 1961)
- CARACTERES : tout attribut observable d'un organisme :
  - [...]

### Distance génétique

De façon basique, les séquences d'ADN [...]

(pdf image)

### Conséquences

- A cause des substitutions multiples, la distance observée entre deux caractères sous estime la distance réelle (ou distance évolutive)
- Plusieurs modèles de calculs [...]

### Evolution moléculaire

Etudier l'histoire des molécules [...]

### Distance moléculaire [...]

### Evolution contre similarité

**Deux TAXA peuvent être similaires sans être proches** (pdf image)

### DIfférence observée [...]

### Modèle d'évolution [...]
(pdf)

### Choix du modèle d'évolution
Logiciels Modeltest-Protest
http://darwin.uvigo.es/software/

### Reconstruction

Toutes les méthodes de reconstruction reposent sur les hypothèses suivantes :
- Pas de transfert latéral ou de recombinaison (mitochondrie)
- Les séquences sont homologues (ou alors on teste en connaissance de cause)
- Chaque position [...]
(pdf image)

### Méthodes de reconstruction phylogénétique

Méthode de distance : [...]


### Parcimonie (pdf)

### Méthode de distance (pdf)

### Maximiser la vraisemblance (pdf)

### Conclusion (pdf)


## 4. Détermination de la robustesse des arbres

La méthode la plus utlisée est celle de bootstrap : test de la méthode de mise en place de l'arbre avec du bruit pour tester la robustesse. Postulat : [...]
Répétition de la méthode afin d'évaluer statistiquement la méthode via le bootstrap.

### Les étapes du bootstrap (pdf)

### Utiliser la phylogénie pour comprendre la duplication/perte de gènes (pdf)

# UPGMA

https://en.wikipedia.org/wiki/UPGMA
+ All the method

# Neighbor-Joining

https://en.wikipedia.org/wiki/Neighbor_joining
+ Def and advantage et disvantage

# Maximum likelihood
https://en.wikipedia.org/wiki/Computational_phylogenetics
+ regroupe toutes les matrices de distance, Bootstrap etc...
