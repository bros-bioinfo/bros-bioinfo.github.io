# Introduction à la phylogénie

- **Clades (Groupe monophylétiques)**: groupe dont les membres sont plus apparentés entre eux qu'avec aucun autre organisme. Groupe incluant un ancêtre et tous ses descendans.

- **Groupe paraphylétiques**: Groupe n'incluant pas tous les descendants de son ancêtre.

- **Groupe polyphylétique**: Groupe n'incluant pas son propre ancêtre.

## 1. Sélection des données

La première étape consiste à choisir un **marqueur moléculaire** adapté au groupe taxonomique étudié. L'évolution des séquences choisies devrait vérifier ce que l'on veut calculer.

- Mixer ARNr et ARNt : non-sens.
- ARNr stable → espèces divergentes (marqueurs utilisés pour l'arbre de la vie).
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

## 3. Construction d'un (ou plusieurs arbres)

On crée des représentations schématiques:
- Des relations de parentés entre des espèces/TAXA
- Les branches définissent les relations de descendance
- Les noeuds internes de l'arbre représente les ancêtres hypothétiques commun aux descendants.
- L'abre peut être enraciné ou pas, selon qu'on est parvenu à identifier l'ancêtre commun à toutes les feuilles.

**Composition d'un arbre:**
>Branches (arrêtes en informatique);
>Noeuds
>Root (racines)
>Noeuds terminaux (feuilles)

**On a plusieurs type de représentation:**
- Cladogramme
- Phylogramme (distance génétique)
- Arbre Ultramétrique (temps écoulé)

**Format Newick**
- Les arbres générés par les prog. de phylogénie sont donnés sous la forme d'expression (noms des TAXA) entre parenthèse et avec des virgules:
$$(((C,B),A),D)$$

![alt text](http://images.slideplayer.com/36/10578139/slides/slide_25.jpg)

- et on peut indiquer la longueur des branches par:1
$$(((C:1,B:1),A:3),D:5)$$

**Résolution des arbres:** On veut obtenir un maximum de bifurcation et évité les multifurcations.

Il est important d'avoir des arbres **enracinés**, d'un point de vue biologique.

**Comment raciner un arbre?**:
La plupart des méthodes produisent des arvres non-racinés car elles détectent des différences entre séquences mais n'ont aucun moyen de les orienter temporellement.

On peut les positionner grâce:
- à un groupe externe de séquences connues ***a priori*** comme externes au groupe d'intérêt. La racine correspond alors à la branche qui relie les deux groupes.
- Quand on n'a aucune possibilité de décider quel taxon peut servir de groupe, on place souvent la racine au millieu de l'arbre.

Les ingrédients de la **phylogénie moléculaire**:
- Taxons
- Caractères
  - soit les caractères tels qu'ils sont donnés
    - description morphologique
    - présence/absence
    - caractères à états multiples (ADN:4; Prot:20)
  - construction d'une distance à partir des caractères.

**Modèles d'évolution**
- Objectifs: Corriger la différence entre le nombre de substitutions observées et leur nombre réel.
- Différents modèles ont été proposées en tenant compe de la fréquence des bases.

**Reconstruction d'arbres**:
Toutes les méthodes de reconstruction reposent sur les hypothèses suivantes:
- Pas de transfert la téral ou de recombinaison ()
- Séquences sont homologues
- Chaque position de l'alignement comporte des résidus homologues
- L'échantillonage est bien réalisé.

PLESIOmorphie -copie des autres caractères

## 4. Détermination de la robustesse des arbres.
- La méthode la plus utilisée est celle du bootstrap (grilles)
- Postulat: les caractères évoluent de manière indépendante.
→ Un arbre qui varie beaucoup
