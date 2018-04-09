# Support discret

## Intro termes

+ Image discrète (par opposition à continue) : une image 2D contituée de pixels, à un nombre fini.

### Processus de discrétisation : acquisition d'une image, monde numérique (pas digital, abus anglais). Numérisation : tranformer une image en chiffres réel, dans le sens mathématique du terme (discret).

Processus d'acquisition : 

+ Scanner renvoie la densité volumique avec rayon X(plus le tissus est dense plus on le voit). IRM renvoie la densité de l'eau par hautes fréquences (champs magnétique perpendiculaire, oscillation, tissu mou, protons = aimants).

+ Tomography : technique de reconstruction d'un objet par plusieurs projections. 

+ Tranformé de Fourier : fréquence porteuse avec chaque chaîne de télé dessus (petites fréquences). Télé applique tranformation de Fourier pour voir la chaîne.

+ Sonar, radar, echographie, tomosynthèse (mamographie), sismographie, lidar (google car, faisceau laser renvoi echo distance) : acquisition 3D.

+ Images animées : caméra, radiographie animée (colorant intensifier veine, couleur noir de base mais négatif pour les os), IRM animation (coeur qui bat).

### Représentation 

+ En 2D : grille de pixel correspond à une matrice 2D, mais tableau 1D plus utilisé. Image représenté en bitmap (.bmp) opposé aux images vectorielles (.svg).

+ En 3D : grille de voxel, vectoriel aussi existe. Nuage de points (objet par scanner laser)

+ Images animées : vidéo, notamment jeux vidéo. Cinéma mais ce n'est pas de la vrai 3D, c'est de la stéréoscopie. Stéroscopie : image de relief, c'est une image 2D avec une certaine profondeur (pas de la vraie 3D).

## Système d'imagerie

Vision de l'informaticien : processus d'acqusiition + chaine de traitement + soit visualisation, soit analyse (une jolie image n'est pas forcemment une image bonne à analyser)

Acquisition remplacer par une partie modélisation (image de synthèse). Partie reconstruction entre acquisition et chaine de traitement, mais des traitements peuvent être fait au préalable. Informaticien veulent inclure du traitement dans chaine de traitement.  Chaine de traitement peut être aussi fait lors de la visualisation. 

Les traitements n'ont pas la bonne place, crée par les mathématiciens pour donner une place à chacun (physicien, mathématiciens, et informaticiens).  Système d'acquisition moderne regroupe les 3 professionnels ensembles. Informaticiens arrivent pour l'acquisition avec le CT-scan (scanner). 

## Le monde du discret

+ Image Numérique : notions d'échantillonage et de discretisation (image discret pour mathématicien). Des nombres organisés en structure de données.

+ 2D : grille de données. Positions induit une info géométrique. Point noir peut être en niveau de gris, on peut inclure une couleur, une température qui correspondent à un nombre pour l'informaticien. Tableau 1D : 
    + taille du tableau w*h;
    + remplissage de gauche à droite ligne par ligne. 
    + En info : i(x,y,z) = x * shift.x + y * shift.y + z * shift.z ; avec shift.x  = x + 1 , shift.y = x + w , shift.z = x + x*y , sur un tableau 1D (conversion pour matrice 2D).

+ 3D : grille de woxel (volumique) ou nuage de point voir maillage (surfacique). 
    + Structure de données avec nuage de point : désordre dans les points, il n'y a que l'info volumétrique. Supperposition de points du au passage répété du scanner. (Nvidia Gtx Ti : carte graphique spécialisée pour représentation en maillage triangulaire surfacique).

### Exemple en 2D :

+ Fantôme de Shepp-Logan : acquisition simplifiée pour voir les différents niveaux de gris dans un cerveau. Pour tester les algo de tomographie (valeurs de densité par niveau de gris connus).
    + pré-traitement pour visualisation dû à l'anti-crénelage (anti-aliasing), pour pas choquer l'oeil (sous format .jpg).

### Exemple en 3D :
Diapo exemple images
+ Acquisition par scanner laser : nuages de points + triangles + image de syntèse (ajout de lumières, textures ...). L'ajout de lumière permet d'ajouter de la profondeur, il ne faut pas oublier d'ajouter de l'ombre à l'objet. 

## Le spectre électromagnétique

Rappel de physique avec ondes et fréquences. Plus c'est bas dans le spectre, plus ça passe dans la matière.
+ Lumière visible de traverse pas la matière. 
+ InfraRouge (IR) : chaleur renvoie couleur (lunnette thermique).
+ Micro-onde : wifi pour l'imagerie (drone).
+ Ondes radio : permit de faire des cartes.
+ rayon X : émit par les étoiles.
+ Rayon gamma : imagerie nucléaire (scintigraphie par émission de positons).
+ rayonnement THertz (entre IR et micro-onde) : arrêtés par l'eau, pour voir les micro-fissures. On voit à travers les vêtements (scanner dans aéroports, émetteurs c'est la personne).

## Processus de discrétisation

2 discrétisations (numérisations) :
+ spatiale : échantillonage (sampling). 44,1 kHz = 44.100 échantillons par secondes(inverse de longeur d'onde). 
+ amplitude : quantification (quantization, pour la couleur). 16 bit c'est à dire 2<sup>16</sup> bit à diviser la fréquence pour l'échantillonage. (x = temps, y = fréquence).

RGB : 
+ chacun codé en 8 bit -> val de 0...255.

### Echantillonnage d'une image 2D (diapo)

Cellule de Voronoi : utilisé pour le traitement d'image. Le plus optimale (image de droite).

Pourquoi c'est pas utilisés dans les appareils (écrans etc ...) : 
+ perte des techniques et instruments déjà basés là-dessus.

Capteur en micro-scanner à rayon X : 6 microns de précisions et on peut voir la conception Voronoi (mais interpolation au schéma précédent induit perte).

Ces échantillonnages peuvent être pondérés ou non pondérés. (grille pour capter les triangles : forme de 1. Mais appareil photo capte tout : mauvais pour l'analyse d'image).

### Erreurs d'échantillonage 

+ Difficulté de représentation pilosité personnage car il y une forte fréquence des objets petits. 
+ Perte d'informations et apparation de crénelures (aliasing).
+  Altération topologique : distance entre pixels trop petites pour être pris en compte, ou trop près pour différenciers formes.

### Thérorie du signal

Echantillonnage d'une courbe : points dans un tableau + équation de la courbe.
+ Fréquence limite : fréquence de Nyquist
+ Théorème de Shannon : la fréquence d'échantillonage (de Nyquist) doit être supérieurs à 2x la fréquence max. 

# A faire : 
http://dept-info.labri.fr/~desbarat/BioInfoM1 
Regarder le TP et manipuler un peu

## Méthode de traitement

Méthode orienté scène : 
+ Echantillonage par zones
+ Anticrénelage adapté aux méthodes de traçage

Filtrage avant échantillonnage :
+ Filtre "passe-bas" (Théorie Fourier : filtre sur fréquence)
+ Filtre morphologique (MM)

Sur-échantillonnage (course à l'acquisition)
+ Augmente le nombre de pixel : Uniforme, on repousse la fréquence de Nyquist.
+ Non uniforme :
    + la complexité d'une image n'est pas uniforme (texture, petits objets, dégradés ...)
    + ressérer les échantillons autour des hautes fréquences (utilisé en astronomie)
    + problèmes : pas de connaissance a priori du signal

(voir diapo pour les sur-échantillonnage non uniforme)

## Jeu : quel est le meilleur ? 


Appareil photo numérique ou argentique ? &rarr; Argentique 
+ Résolution de l'argentique : le grain. (à compléter) 
+ En terme d'échantillonnage, l'argentique est meilleur. En terme de quantification, c'est autre chose.

Pour un document papier : Scanner à plat ou appareil photo numérique (APN) ? &rarr; Scanner à plat
+ Problème du scanner : vitesse d'acquisition

## Voisinage et connexité (2D)

L'image est segmenté, on mesure les objets (sans le fond). Comment retrouver les objets et les coder ?
+ Retrouver les objets : segmentation (Seuillage etc ...)
+ Les coder, délimiter un intérieur et un extérieur : 
    + 4-connexité
    + 8-connexité
Solution pour délimiter : **courbe de Jordan**

### Paradoxe de connexité (2D)
(voir diapo) 
+ Paradoxe de Jordan : si on part sur du 8-connexe, alors on part du fait que l'intérieur et l'extérieur sont à 4-connexe (frontière efficace, éviter le contact entre l'intérieur et l'extérieur)

## Voisinage et connexité (3D)
(diapo)
+ 6-connexité : connexité par faces
+ 18-connexité : connexité par arrètes
+ 26-connexité : connexité par points

## Rappel 
+ Image = matrice à deux dimensions codée sous forme de tableau unidimentionnel.
+ Valeur dans les cases : 
    + informatique : niveau de gris (0 à 255), RGB (r : 0 à 255,g,b), température etc ... (valeur queqlconque). En-tête de l'image important pour l'ouverture.
    + maths : que des nombres. 
+ Qu'est-ce qu'une couleur : couleur dominante sur un ensemble de longueur d'onde. 
 + Rouge : photon renvoyé par l'objet rouge et les autres sont absorbés. 
 + Couleur arc-en-ciel : **R**OJ**VB**IVi
+ Comment fait-on l'échantillonage de la couleur ? 
 + Spectroscopie (il faut un laser)
 + Mesurer l'énergie (compter le nombre de photon et mesurer l'énergie moyenne) : Etalonnage des capteurs (etalonnage de l'oeil dans l'enfance).

 ### Lumière
 (voir diapo)

 ### Système des couleurs 
 + Echantillonnage standard (Munsell, Patone) : chaque personne doivent faire ces couleurs Pantone (choix)
 + Système artistique : système d'Oswald (rapproche des objectifs de la chimie)
  + 3 valeurs à partir de la couleurs pures: teinte, saturation, luminance (rouge + blanc : rose + ou - clair)

Problème : 
+ méthodes subjectives. Elle dépendent :
    + de l'observateur 
    + de l'éclairage
    + de la taille de l'échantillonnage
+ Trouver un moyen objectif quantitatif pour spécifier les couleurs : COLORIMETRIE (X,Y,Z CIE)

### Modèle de couleur - RVB
+ ecran 
+ R,V,B sont des primaires additives (tend vers le blanc)

### Modèle de couleur - CMJ(N)
+ Dispositif d'impression couleur
+ Couleurs complémentaires du R,V,B
+ Ce sont des primaires soustractive 

### Modèle de couleur - YIQ
+ Utilisé dans la TV commerciale aux Etats-Unis
+ Y= Luminance; I,Q: chrominance
+ Domaine = polyhèdre convexe
(voir diapo)

### Modèle de couleur - YUV
+ Similaire à YIQ
+ Optimisé pour la photo
+ Ecrêtage de certaines valeurs
+ Utilisation JPEG et MPEG ... 
+ Plus utilisé numériquement actuellement

### Modèle de couleur - TSL
+ RVB, CMJ, YIQ orientés matériel
+ TSL (Teinte, Saturation, Luminance) orienté utilisateur
+ Représentation : hexacône

### Codage
(voir diapo)

