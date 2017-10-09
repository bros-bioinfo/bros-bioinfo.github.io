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

- et on peut indiquer la longueur des branches par:
**(((C:1,B:1),A:3),D:5)**


![alt text](http://images.slideplayer.com/36/10578139/slides/slide_25.jpg)


### Résolution des arbres

On veut obtenir un maximum de bifurcation et évité les polytomies (même racine) ou multifurcation (> 3 par noeuds).

Il est important d'avoir des arbres **enracinés**, d'un point de vue biologique.

Un arbre non raciné est un arbre qui n'a pas de point de départ.

![alt text](http://www.evolution-biologique.fr/wp-content/uploads/2.15.jpg)



### Comment raciner un arbre?:


La plupart des méthodes produisent des arbres non-racinés car elles détectent des différences entre séquences mais n'ont aucun moyen de les orienter temporellement.

On peut les positionner grâce:
1- à un **groupe externe** de séquences connues ***a priori*** comme externes au groupe d'intérêt. La racine correspond alors à la branche qui relie les deux groupes.

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

On peut être amené à chercher à optimiser plusieurs critères dans l'arbre : **la distance, la parcimonie, ou la vraisemblance**.

**1) Méthode de distance**

Pour les méthodes de distance, il s'agit tout d'abord de choisir le critère de distance entre les futures feuilles de l'arbre. Par exemple, si ces feuilles sont des séquences d'ADN, on peut choisir comme distance entre deux d'entre elles le nombre de nucléotides qui **diffèrent**. Pour déterminer cette valeur, on est amené à en effectuer un **alignement**. Puis on peut utiliser la méthode **UPGMA** ou celle du **Neighbour joining** pour en déduire l'arbre.

**UPGMA**

UPGMA (Unweighted pair group method with arithmetic mean) est le nom d'un algorithme destiné à la construction d'un arbre phylogénétique. Cette méthode permet la transformation d'une **matrice de distances** (entre différents organismes, populations, ou séquences de nucléotides) en un **arbre enraciné**.

La matrice fournit l'ensemble des distances entre toutes les **paires d'éléments** (cad les séquences appariées). L'algorithme fonctionne par **itérations successives**(répétitions), qui réduisent progressivement la taille de la matrice. Chaque itération voit le regroupement des deux éléments restants séparés par la **plus faible distance**: ces éléments sont associés dans l'arbre, et sont remplacés par un élément « consensus ». Les nouvelles distances entre cet élément consensus et les éléments restants dans la matrice sont recalculées par la **moyenne arithmétique** des deux éléments regroupés.

Voir cette page en anglais pour comprendre l'ensemble de la méthode :
https://en.wikipedia.org/wiki/UPGMA

Cette méthode simple et rapide présente toutefois de **nombreux biais**. En particulier, elle suppose que la vitesse d'évolution est constante dans toutes les branches. Par conséquent, si une branche « interne » évolue beaucoup plus vite que toutes les autres, elle ne sera rattachée au reste de l'arbre qu'à la dernière étape et sera à l'extérieur de l'arbre

**Neighbour joining**

En bio-informatique, le neighbour joining (ou neighbor joining) est une méthode d'élaboration d'arbres de données phylogénétiques. La méthode neighbor joining se base sur les mêmes principes que les méthodes d'analyse de groupe (cluster analysis), telles que la méthode de UPGMA (qui se base sur les distances génétiques pour construire un arbre phylogénétique). La seule différence de la méthode de neighbor joining est qu'elle **tient compte des différences de vitesse d'évolution** entre les différentes branches de l'arbre phylogénétique. Cette méthode fournit un **arbre non polarisé** (non enraciné).

Utilisée généralement pour les arbres de données basés sur l'ADN ou les séquences de protéines, l'algorithme requiert la connaissance de la distance entre chaque paire de taxons (par. ex. espèces ou séquences) dans l'arbre.

La méthode est décrite sur cette page :
https://en.wikipedia.org/wiki/Neighbor_joining


**2) Méthode de parcimonie**

Les méthodes de parcimonie, aujourd'hui majoritairement représentées par la **cladistique**, sont plus utilisées pour les études morphologiques. En ce qui concerne les approches moléculaires, la parcimonie consiste à trouver l'arbre qui **minimise le nombre de mutations**, délétions, ou insertions ponctuelles pour passer d'une séquence à l'autre. Cette méthode recherche donc le réseau le plus économique en substitutions

Cette méthode est divisée en trois étapes :

+ rechercher tous les arbres phylogénétiques possibles pour les différents taxons étudiés,
+ mesurer la longueur totale de chaque arbre,
+ sélectionner celui ou ceux qui présentent la longueur la plus petite.

Les arbres fournis par cette méthode sont **non polarisés**, cependant l'utilisation d’outgroups (espèces externes aux groupes étudiés) permet dans un deuxième temps de **polariser l'arbre**("raciner").

**3) Méthode de vraisemblance**

Enfin, les méthodes de vraisemblance sont plus **probabilistes**. En se fondant sur le **taux de substitution** pour chaque élément de base (nucléotide pour des séquences d'ADN) au cours du temps, on estime la vraisemblance de la position et de la longueur des branches de l'arbre.

**Former des racines**

Si l'on a obtenu un arbre non enraciné par une des méthodes ci-dessus, on peut tenter d'en trouver la racine par la méthode de l’**outgroup ou du point médian**.
+ Celle de l’outgroup (groupe extérieur ou extragroupe) consiste à ajouter aux séquences traitées, avant le calcul de l'arbre, une très éloignée : le nœud-racine sera le père de cette séquence.
+ Celle du point médian consiste à affecter à chaque nœud de l'arbre une séquence correspondant au consensus de ses fils, et choisir comme racine le nœud dont la séquence est la plus proche de la séquence consensus de toutes les feuilles.

## 4. Détermination de la robustesse des arbres.

> http://www.info2.uqam.ca/~makarenkov_v/BIF7002/Rapport_Vo/BIO7002/la-bioinformatique/la-construction-darbre-phylogenetique/lanalyse-de-la-robustesse-par-bootstrap.html
>
La méthode la plus utilisée est celle du **bootstrap** (grilles). Cette technique consiste à échantillonner les positions de l'alignement pour relancer la construction phylogénétique de façon itérative puis de comparer les résultats obtenus après plusieurs répétitions (n >1000) Le résultat est représenté sous la forme d'un **arbre consensus** dans lequel figurent les regroupements majoritairement apparus.
Une valeur de « bootstrap » (pourcentage de 0 à 100%) est associée à chaque branche de l'arbre indiquant le nombre de fois où cette branche a été retrouvée au fil des répétitions et juger ainsi de leur **crédibilité**. En d'autres termes, la valeur de « bootstrap » indique une évaluation de la **résistance d'un noeud** à la perturbation des données.

![clip_image002_3](https://i.imgur.com/0rGyNsD.jpg)
Figure : Arbre « bootstrappé » (Pierre-Henri Gouyon)

Outils : phyML ; RaxML
Méthode utilisé en mathématique et statistique.
regroupe toutes les matrices de distance, Bootstrap etc...

# SOURCES

+ L’analyse de la robustesse par «bootstrap» ; In-text: (Info2.uqam.ca, 2013) ; Your Bibliography: Info2.uqam.ca. (2013). L’analyse de la robustesse par «bootstrap». [online] Available at: http://www.info2.uqam.ca/~makarenkov_v/BIF7002/Rapport_Vo/BIO7002/la-bioinformatique/la-construction-darbre-phylogenetique/lanalyse-de-la-robustesse-par-bootstrap.html [Accessed 9 Oct. 2017].
+ Contributeurs de Wikipédia, "Arbre phylogénétique,"  Wikipédia, l'encyclopédie libre, https://fr.wikipedia.org/w/index.php?title=Arbre_phylog%C3%A9n%C3%A9tique&oldid=141093274 (Page consultée le septembre 30, 2017).
+ Contributeurs de Wikipédia, "Neighbour joining,"  Wikipédia, l'encyclopédie libre, https://fr.wikipedia.org/w/index.php?title=Neighbour_joining&oldid=99348703 (Page consultée le décembre 18, 2013).
+ Wikipedia contributors, "Neighbor joining," Wikipedia, The Free Encyclopedia, https://en.wikipedia.org/w/index.php?title=Neighbor_joining&oldid=799183399 (accessed October 9, 2017).
+ Contributeurs de Wikipédia, "Unweighted pair group method with arithmetic mean,"  Wikipédia, l'encyclopédie libre, https://fr.wikipedia.org/w/index.php?title=Unweighted_pair_group_method_with_arithmetic_mean&oldid=118372558 (Page consultée le septembre 6, 2015).
+ Wikipedia contributors, "UPGMA," Wikipedia, The Free Encyclopedia, https://en.wikipedia.org/w/index.php?title=UPGMA&oldid=801046652 (accessed October 9, 2017).
