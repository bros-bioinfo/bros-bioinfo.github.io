# **Petit débrief sur LaTex**

Erratum: Surement des choses à modifier, simplifier et peut être pas utile pour ceux qui utilisent déjà LaTex


## Pourquoi utiliser LaTex


* L'instant culture avant de commencer

Latexxx ? NAAAAAN man, ça se prononce comme dans technologie ! C'est Donald Ervin KNUTH, mathématicien, qui a conçu un système de traitement de texte dans les années 70 nommé TEX afin de produire des documents scientifiques de qualité. TEX est disponible au public depuis les années 80. En 1985 Leslie LAMPORT crée un format composé de macro permettant d'avoir une vision de plus haut niveau qu'on va appeler LaTex. LaTex utilise donc des macros de TEX.


* C'est quoi LaTex

C'est donc un système de traitement de texte. C'est un environnement complexe de programmation. C'est un logiciel libre (et donc gratuit).
Mettons nous d'accord : Ce n'est ni un traitement de texte comme LibreOffice ou Word, ni un langage de programmation comme Python (ou ADA pour ceux qui connaissent et qui veulent se faire huer de connaître ce langage, mais passons...).


* Pourquoi c'est cool

Parce qu'on est des scientifiques et qu'on va pouvoir écrire de beaux rapports et de beaux documents bien gérés: avec un sommaire généré automatiquement, gérer la taille et l'échelle de nos figures, insérer une Bibliographie, insérer des annexes, insérer des fichiers dans un document. Bref jouer avec LaTex... Les documents générés avec cet outil sont d'une qualité typographique exceptionnelle et il est possible d'effectuer des réglages très fins.

*pour comprendre à quel point c'est fin => L'unité interne de TEX est le scaled point noté sp et vaut 1/65536point avec 1point=1/72pouce et 1pouce=2.54cm. Bref 1sp c'est environ 5nm...*

Je fais une aparté now : LE PREMIER QUI OSE ÉCRIRE SES DOCS SOUS LibreOffice OU WORD POUR LES CONVERTIR EN LATEX APRES, je... je... nan je fais rien, mais s'il vous plaît LaTex c'est comme le pull de mamie : l'essayer c'est l'adopter ! On en parle plus !


## Télécharger LaTex

En fait vous avez le choix: télécharger ou bosser en ligne.
Si vous voulez bosser en ligne vous avez ces deux outils :

[ShareLatex](https://fr.sharelatex.com/)

[Overleaf](https://www.overleaf.com/)

Certains préféreront bosser sous windows, ou sous linux, il y en a pour tout le monde, l'important est d'avoir une distribution correspondant au système d'exploitation qu'on choisit et un éditeur de texte. Il est aussi possible d'installer une version sur une clé USB, de l'accrocher à ses clés d'appart et de bosser partout sur n'importe quel poste, même celui de la concierge de l'immeuble du voisin qui ne connaît pas l'existence de LaTex.
Dans tous les cas :

Étape 1 : télécharger et installer la distribution.

Étape 2 : télécharger et installer l'éditeur de texte


**1. Sous windows**

MIKTex

un éditeur de texte: TexMaker

**2. Sous linux**

TexLive

un éditeur de texte: emacs

**3. Sous mac (parce qu'y en a toujours qui font les malins avec leur mac)**

MacTex

un éditeur de texte : Texshop ou iTextmax


## Utiliser LaTex

Tout ce qui mène à la génération d'un document est une séquence de commandes ou de macros. On peut donc modifier l'allure d'un document en modifiant l'un des paramètres.
Il est possible de séparer le fond et la forme d'un document lors de sa rédaction.
Produire un document c'est compiler une source créée par l'éditeur de texte en un format destiné à l'affichage ou à l'impression (PDF the most, mais aussi DIV ou Postscript)

Il est fortement recommandé d'avoir l'extension .tex lors de la création d'un document source LaTex.


### Les différents types de documents

LaTex permet de créer différents types de document : un article scientifique ? Un livre ? Une lettre ? Un rapport ? Un CV ? ...
Le choix de la classe va déterminer un certain nombre de paramètres par défaut, comme par exemple les marges, mais aussi fournir des instructions supplémentaires spécifiques.

* article

Document d'environ une dizaine de pages, composé de parties et de sous partie.
Cette classe est réservée aux "petits" documents. Le titre est sur la même page que le début du texte.


* report

Pour des rapports longs, des thèses, des petits livres.
Cette classe dispose d'une page de titre séparée, suivie d'une page blanche.
Le corps du rapport est peut être décomposé en parties, sections, sous-sections, paragraphes. Les marges sont plus larges que pour la classe article.
Cette classe propose aussi un environnement abstract pour la mise en forme automatique d'un résumé.


* book

Pour écrire de véritables livres, avec cette fois ci des chapitres à disposition, avec les mêmes caractéristiques que pour la classe report.


* slides, beamer

Pour faire des présentations orales


Pour les exemples je me servirais de mon rapport de stage, ce qui suit des % sont des commentaires (très utile de commenter son code !!!)

Première ligne de commande:

    \documentclass[12pt,a4paper,openany]{article}

12pt correspond à la taille d'écriture

a4paper correspond au format

openany est une option (regarder la doc pour les options)

entre {} la classe choisie


### Les packages

Il existe de nombreux packages mais après avoir déterminé la classe de son document, ce sont des éléments indispensables qui permettent de bien gérer son document.

    %packages de base pour le choix de l'encodage, de la langue
    \usepackage[utf8]{inputenc}
    \usepackage[french,english]{babel}
    \usepackage[T1]{fontenc}

Le package inputenc sert pour l'encodage d'entrée, i.e le codage des caractères utilisés dans le fichier source et sert pour taper les accents "é" au lieu de \'{e} par exemple.

Le package fontenc permet quant à lui permet de prendre en charge les caractères accentués à la sortie du fichier.

    %packages pour les illustrations, la police, les marges, l'insertion de liens, de pages pdf
    \usepackage{graphicx}
    \usepackage{lmodern}
    \usepackage{libertine}
    \usepackage[left=2cm,right=2cm,top=2cm,bottom=2cm]{geometry}
    \usepackage[colorlinks=true]{hyperref}
    \usepackage{pdfpages}


### Squelette d'un bon document


**1. configuration du document**

* Définir le type de document

* Écrire les packages dont on a besoin

* Écrire les "options" de mise en page que l'on souhaite

      \setlength{\parindent}{40pt}
      \setlength{\parskip}{1.5ex}

      %commandes créées

      % informations sur le document
      \author{Nom Prénom}
      \title{Titre}
      \date{jj/mm/aaaa}
      \makeatletter %pour réutiliser les infos comme des variables



**2. corps du document**

*Sommaire*

*Corps du document*

*Liste des figures*

*Bibliographie*

### Les commandes

**1. structurer ses parties**

**2. insérer une image**

*image simple*

*mettre plusieurs images côte à côte*

**3. lister des éléments**

*avec numérotation*

*énumération d'éléments simple*

**4. citer une référence bibliographique**

**5. les trucs qui peuvent servir**

*modifier un interligne*

*faire un saut de page*

*faire un résumé*

    newpage
    \thispagestyle{empty}
    \selectlanguage{french}
    \begin{abstract}
    \section*{Résumé}
		%le texte du résumé en français
    \end{abstract}

    \selectlanguage{english}
    \begin{abstract}
	  \section*{Abstract}
    %le texte du résumé en anglais
    \end{abstract}


### Création de commandes

Parfois des commandes n'existent pas et il faut les créer, par exemple:

    % commande pour pourvoir tracer une ligne
    \newcommand{\HRule}{\rule{\linewidth}{0.5mm}}

### Faire une page de garde (un exemple)


      \begin{titlepage}
          \begin{sffamily}
            \enlargethispage{2cm} %diminuer la marge du bas
                  \begin{center}
                      %logo et cadre du stage où s'inscrit la formation
                      \raisebox{-0.3cm}{\includegraphics[width=100pt, height=100pt, scale=0.2]{nom.png}}
                      %
                      \textsc{\LARGE{Université de Poitiers}}
                      %
                      \raisebox{-0.3cm}{\includegraphics[width=100pt, height=75pt, scale=0.2]{nom.png}}\\[1.5cm]
                      %
                      \textsc{\Large{Faculté des Sciences Fondamentales et Appliquées}} \\[1cm]
                      %
                      \includegraphics[width=100pt, height=100pt, scale=0.2]{nom.png}\\[1cm]
                      %
                      \textsc{\large{Stage de Validation de L3 Génie Bio-Informatique}}\\
                  \end{center}
                  %
                  %Titre
                  %
                  \HRule \\
                  \begin{center}
                      {\huge \bfseries \@title \\}
                  \end{center}
                  \HRule \\[0.3cm]
                  %
                  \begin{center}

                      %nom de l'auteur du prérapport
                      \begin{center}
                          \Large \@author\\ \@date\\
                      \end{center}
                    %

                    %logo du lieu d'accueil du stage
                    \includegraphics[width=100pt, height=100pt, scale=0.2]{nom.png}\\
                    %Nom des maître de stage\begin{center}
                    \large \emph{Maîtres de stage:}
                    Mme Gaëlle \textsc{Skapin}, Mme Rita \textsc{Zrour}, M Éric \textsc{Andres}, Mme Mousumi \textsc{Dutt} \\
                    \large \emph{Lieu:}
                    Laboratoire de recherche XLIM, Futuroscope\\[1cm]
                  \end{center}

          \end{sffamily}
          %
      \end{titlepage}

### Insérer des annexes



### Rédaction de mon papier : en un seul ou en plusieurs fichiers ?

### Comment faire mon fichier .bibtex

### Faire un CV

BREF c'est une fiche qui peut aider mais ça reste pas un manuel

## Les liens utiles

### LaTex en ligne

### LaTex collaboratif

### Les manuels et endroits où vous trouverez de l'aide

[Rédaction en LaTex](https://www.bibl.ulaval.ca/fichiers_site/services/formation-latex-ul.pdf)
