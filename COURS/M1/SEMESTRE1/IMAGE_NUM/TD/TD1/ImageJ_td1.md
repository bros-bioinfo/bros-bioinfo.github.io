# **ImageJ TD1**
## Installation
- Chercher ImageJ sur internet
- Aller dans download
- Télécharger la version platform independent
- Décompresser le fichier dans votre dossier source
- Déplacer le dossier ImageJ dans votre dossier source
- Modifier le fichier run contenu dans le dossier ImageJ tel que :
```bash
#!/bin/bash
JAVA_HOME=/usr/lib/jvm/jdk-9-oracle-x64
JAVA=$JAVA_HOME/bin/java
export JAVA JAVA_HOME
PATH=$JAVA_HOME/bin:$PATH
export PATH
java -Xmx2048m -jar ij.jar
```
**Launch command**

Lancer imageJ en étant citué dans le répertoire courant.

```console
./run
```

**New Image**
> File > New image (Ctrl + N)

## **Commandes de base**


|                         | Pour le rectangle            |
| ----------------------- | ---------------------------- |
| **Shift + clic**        | fais un carré                |
| **ctrl + clic**         | sélection qui part du milieu |
| **ctrl + shift** + clic | carré qui part du milieu     |

|                                       | Outil polygone                                                                                   |
| ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **double clic**                       | ferme le polygone                                                                                |
| **Double clic dans la barre d'outil** | ImageJ sur un figure pour voir les paramètres (largeur, taille de la flèche ...)                 |
| **ctrl+F**                            | remplir la sélection                                                                             |
| **Double clic sur la pipette**        | Ouvrir la palette                                                                                |
| **Double clic sur la palette**        | Choisir la value du pixel. Pour un niveau de gris, mettre la même value pour les trois couleurs. |
| **Ctrl+a**                            | sélectionner toute l'image                                                                       |
| **"+" et "-"**                        | au clavier pour zoomer sur l'image                                                               |
| **ctrl+H**                            | Tracer l'histograme                                                                              |

## **Image**

|                               |                                                                                                   |
| ----------------------------- | ------------------------------------------------------------------------------------------------- |
| **Image/color/split channel** | séparer les trois couleurs                                                                        |
| **Image/lookup table (LUT)**  | inverser les couleurs                                                                             |
| **Image/Transfer**            | rotation de l'image                                                                               |
| **Image/scale**               | redimentionner l'image                                                                            |
| **Analyze/Plot profile**      | analyse les valeurs d'un tracé (et possibilité de save au format .csv)                            |
| **Stacks**                    | menu pour fusionner les images, découper l'image en plusieurs parties, superposer, annimer etc... |

## **Process**

Rappel de cours : **il existe deux types de bruit**  
- **Gaussien**  
- **Poivre et sel** (salt and paper)
  
|                                                         |                                                                                                                                           |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Process/Noise/add specific noise** or /salt and paper | Ajouter du bruit sur l'image                                                                                                              |
| **Process/Filters/show circular masks**                 | Visualiser le masque                                                                                                                      |
| **Process/Filters/mean**                                | Choisir le rayon du masque et l'appliquer (attention plus on augmente le rayon et plus l'image est floue)                                 |
| **Process/Filters/gaussian blur**                       | Flou gaussien *marche super bien sur du salt and paper (rend le fond tout lisse)*                                                         |
| **Process/Enhance contrast**                            | Normalise                                                                                                                                 |
| **Process/subtract background**                         | ajuster les défauts d'éclairage (il faut jouer sur le rayon qui doit être suppérieur aux objets d'interrêts) ou **masque de convolution** |

### Transformer l'image dans l'espace fréquentielle
|                         |                                                                  |
| ----------------------- | ---------------------------------------------------------------- |
| **FFT**                 | Fast fourier Transform                                           |
| **Process/FFT**         | représentation d'un spectre de puissance correspondant au module |
| **Process/FFT**         | retrouver l'image d'origine                                      |
| **Process/FFT/FD Math** |



### Process/Binary

Menu qui va permettre notament de compter et d'identifier des objets dans une image. Le menu **Analyse/Analyse particles** permet d'ouvrir et compter les objets. Attention, si ils se touchent, comptent que pour 1.

![alt text](https|//media.giphy.com/media/pgqmxOMSYfX2g/giphy.gif)
|              |                                                                                           |
| ------------ | ----------------------------------------------------------------------------------------- |
| **Outlines** | permet de délimiter et compter les objets, on peut alors jouer sur la taille et la forme. |

Voir **Analyse/set measurement**
|                              |                                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------------- |
| **Make Binary**              | Transforme l'image en image binaire                                                    |
| **Erod**                     | Erosion des objets; plusieurs cycles peuvent être requis pour les séparer.             |
| **Dilatation**               | Inverse de l'érosion                                                                   |
| **Iteration**                | Ouvre un menu où il est possible de changer le nombre d'itération qui seront appliqués |
| **Skeletonization**          | Donne l'axe médian                                                                     |
| **Process/Image calculator** | Superposer avec des *opérateurs logiques*.                                             |

Rappel : True = WhiteFalse = Black
|                             |                                                                                                                                  |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Analyse/set measurement** | donne des informations sur l'image, plusieurs case à cocher qui renvoie des valeurs concernant l'aire, la position, feret etc... |

## Plugins
|                          |                                                                                                      |
| ------------------------ | ---------------------------------------------------------------------------------------------------- |
| **Plugins/Macro/Record** | permet de renvoyer les commandes en javascript des actions que l'on fait avec l'interface graphique. |
