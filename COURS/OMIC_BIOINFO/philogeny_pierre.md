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

Composition d'un arbre:
>Branches (arrêtes en informatique);
>Noeuds
>Root (racines)
>Noeuds terminaux (feuilles)

On a plusieurs type de représentation:
- Cladogramme
- Phylogramme (distance génétique)
- Arbre Ultramétrique (temps écoulé)



## 4. Détermination de la robustesse des arbres.
