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

En fait vous avez le choix: télécharger ou bosser en ligne. Je vous conseille de télécharger de quoi bosser en local et d'aller de temps en temps bosser en ligne si c'est à faire en groupe ou si vous avez des bugs et que vous ne comprenez pas pourquoi.

Si vous voulez bosser en ligne vous avez ces deux outils :

[ShareLatex](https://fr.sharelatex.com/)

[Overleaf](https://www.overleaf.com/)

Certains préféreront bosser sous windows, ou sous linux, il y en a pour tout le monde, l'important est d'avoir une distribution correspondant au système d'exploitation qu'on choisit et un éditeur de texte. Il est aussi possible d'installer une version sur une clé USB, de l'accrocher à ses clés d'appart et de bosser partout sur n'importe quel poste, même celui de la concierge de l'immeuble du voisin qui ne connaît pas l'existence de LaTex.
Dans tous les cas :

Étape 1 : télécharger et installer la distribution.

Étape 2 : télécharger et installer l'éditeur de texte


**1. Sous windows**

MIKTex [le lien de téléchargement](https://miktex.org/download)

un éditeur de texte: TexMaker [le lien de téléchargement](http://www.xm1math.net/texmaker/index_fr.html)

**2. Sous linux**

TexLive
  Commande linux :
  ```
  sudo apt-get texlive-full
  ```

un éditeur de texte: emacs

[cf la doc si besoin](https://doc.ubuntu-fr.org/latex)

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

* ARTICLE

Document d'environ une dizaine de pages, composé de parties et de sous partie.
Cette classe est réservée aux "petits" documents. Le titre est sur la même page que le début du texte.


* REPORT

Pour des rapports longs, des thèses, des petits livres.
Cette classe dispose d'une page de titre séparée, suivie d'une page blanche.
Le corps du rapport est peut être décomposé en parties, sections, sous-sections, paragraphes. Les marges sont plus larges que pour la classe article.
Cette classe propose aussi un environnement abstract pour la mise en forme automatique d'un résumé.


* BOOK

Pour écrire de véritables livres, avec cette fois ci des chapitres à disposition, avec les mêmes caractéristiques que pour la classe report.


* SLIDES, BEAMER

Pour faire des présentations orales
[pour ceux que ça intéresse de faire des diapos en LaTex](https://math-linux.com/latex-4/article/introduction-a-beamer-faire-une-presentation-en-latex)


Pour les exemples je me servirais de mon rapport de stage, ce qui suit des % sont des commentaires (très utile de commenter son code !!!)

Première ligne de commande:

    \documentclass[12pt,a4paper,openany]{article}

12pt correspond à la taille d'écriture

a4paper correspond au format

openany est une option (regarder la doc pour les options)

entre {} la classe choisie


### Les packages

Il existe de nombreux packages mais après avoir déterminé la classe de son document, ce sont des éléments indispensables qui permettent de bien gérer son document.
```latex
%packages de base pour le choix de l'encodage, de la langue
\usepackage[utf8]{inputenc}
\usepackage[french,english]{babel}
\usepackage[T1]{fontenc}
```

Le package inputenc sert pour l'encodage d'entrée, i.e le codage des caractères utilisés dans le fichier source et sert pour taper les accents "é" au lieu de \'{e} par exemple.

Le package fontenc permet quant à lui permet de prendre en charge les caractères accentués à la sortie du fichier.

```latex
%packages pour les illustrations, la police, les marges, l'insertion de liens, de pages pdf
\usepackage{graphicx}
\usepackage{lmodern}
\usepackage{libertine}
\usepackage[left=2cm,right=2cm,top=2cm,bottom=2cm]{geometry}
\usepackage[colorlinks=true]{hyperref}
\usepackage{pdfpages}
```

### Squelette d'un bon document


**1. configuration du document**

* Définir le type de document

* Écrire les packages dont on a besoin

* Écrire les "options" de mise en page que l'on souhaite

```latex
\setlength{\parindent}{40pt}
\setlength{\parskip}{1.5ex}

%commandes créées

% informations sur le document
\author{Nom Prénom}
\title{Titre}
\date{jj/mm/aaaa}
\makeatletter %pour réutiliser les infos comme des variables
```


**2. corps du document**

*Sommaire*

```latex
%pour renommer "table des matière" en sommaire
\renewcommand{\contentsname}{\begin{center} Sommaire \end{center}}
%pour créer la table des matière
\tableofcontents
```

*Corps du document*

En règle générale un document est écrit de la manière suivante, plus ou moins certains éléments (tels qu'une bibliographie, un résumé, une liste de figure ....)
La première chose à faire est de commencer de le document, comme une phrase qui commence par une majuscule et finie par un point : on commence par un begin{} et on fini par un end{}.

```latex
\begin{document}
%Page de garde
\input{page_de_garde.tex}
%Sommaire

%inclusion du corps du rapport
\input{corps.tex}

%liste des figures
\listoffigures

%bibliographie
\bibliographystyle{plain}
\bibliography{mabib}

\newpage

%annexes
\appendix
%création d'une structure pour bien ranger ses annxes quand on en a plusieurs
\includepdf[pages={1-3}]{fiche_pec}

\end{document}
```


*Liste des figures*

```latex
\listoffigures
```


*Bibliographie*

Pour faire une jolie bibliographie il faut:

un fichier bibtex ET une commande pour créer la bibliographie dans votre document, i.e:
```latex
\bibliographystyle{plain}
\bibliography{mabib}
```

Ce genre de configuration permet au rédacteur du document de faire sa bibliographie avec les documents qu'il référence (qu'il cite) dans son document.


### Les commandes

**1. structurer ses parties**

Comme dit précédemment on commence son document par un Begin{Document} et on le finit par un End{Document}.
Il est tout aussi important de bien structurer son document en chapitres (class Book et Report) en parties, en sous parties, en sous sous parties, puis en paragraphes, sous paragraphes. Dans l'ordre et de manière hierarchique on a :

```latex
\part{Intitulé de la partie}
%d'un usage assez rare pour un document de type article

\chapter{Nom du chapitre}
%que pour les class Book et Report

\section{Intitulé de la section}

\subsection{Intitulé de la sous-section}

\subsubsection{Intitulé de la sous-sous-section}

\paragraph{Intitulé du paragraphe}

\subparagraph{Intitulé du sous-paragraphe}
```


[un peu de doc au cas où](http://www.xm1math.net/doculatex/structure.html)


**2. insérer une image**

*image simple*

Quand on insère une illustration, il est indispensable à notre niveau de légender une figure avec un titre et d'accompagner une image par sa source.
```latex
\begin{figure}[!h]
\centering
\includegraphics[scale=0.7]{nom_img.png}
\caption{\label{Figpole} Titre de mon illustration}
\end{figure}
```

Pour centrer l'image j'utilise la commande \centering.
Scale correspond à l'échelle de l'image qu'il est possible de modifier pour permettre de changer la taille de l'image.
\label{} permet de poser une étiquette sur la figure pour permettre de la référencer dans le texte du document par exemple :

```latex
\begin{figure}[!h]
\includegraphics[scale=0.8]{oeuvre.eps}
\centering
\caption{\label{Figoeuvre}Aurélie Mourier, (a) Fouille suspension - volume 05981.001, mousse, fils et grille métallique, 125 x 125 x 80 cm, 2010, production Le Bon Accueil ; (b) Quadrature - surfaces 15625.001 et 07633.001, maille plastique cousue, 67 x 67 x 67cm, 2010 ; (c) Un sixième de ramification – livre, 25 pages transparentes imprimées et peintes, 40 x 40 cm, 2014.}
\end{figure}

La figure \ref{Figoeuvre} montre 3 exemples d'oeuvres réalisées par l'artiste en utilisant les outils informatiques et la géométrie discrète.
Le principe des œuvres réalisées par l'artiste est de modéliser ses constructions avant de les réaliser. Les objets sont contenus dans une boîte englobante de taille 25*25*25 et l'ensemble des cubes d'un objet sont connectés. Ce contexte artistique est pleinement en relation avec le contexte scientifique. C'est pourquoi il est nécessaire de comprendre certaines notions de bases de géométrie discrète pour comprendre le sujet sur lequel j'ai pu travailler.
```

La commande \ref{} permet de faire appel à l'étiquette que l'on a posé lorsque l'on a inséré l'illustration et LaTex se charge seul de mettre le numéro de la figure.


*mettre plusieurs images côte à côte*

Il existe plusieurs méthodes, un exemple rapide, efficace et qui fonctionne bien pour mettre deux images côte à côte est celui qui suit (pour peut qu'on gère bien la taille de nos images sans qu'elles soient au format timbre poste):

```latex
% on créé une figure (si les deux images ont le même titre sinon on créé la minipage avant la figure)
\begin{figure}[!h]

%on centre l'image sur la page du document pour que ça soit assez joli
 \centering

% permet de créer une sorte de cadre dans lequel on va mettre notre image
\begin{minipage}{0.4\textwidth}

% on centre l'image où l'on souhaite, ici à gauche, la prochaine sera donc ... à droite..
\begin{flushleft}

%on insère l'image
\includegraphics[scale=0.21]{img1.png}

%on termine la première image
\end{flushleft}
\end{minipage}

%on s'occupe de la deuxième sur le même processus
\begin{minipage}{0.4\textwidth}
\begin{flushright}
\includegraphics[scale=0.21]{img2.png}
\end{flushright}
\end{minipage}
\caption{\label{figtourne1}Objet créé l'algorithme d'homothétie}
 \end{figure}
```


**3. lister des éléments**

*avec numérotation*

```latex
\begin{enumerate}
\item énum1...
\item énum2...
\item énum3...
\item autant que l'on souhaite
\end{enumerate}
```


*énumération d'éléments simple*

```latex
\begin{itemize}
\item énumération1...
\item énumération2...
\item énumération3...
\item autant que l'on souhaite...
\end{itemize}
```


**4. citer une référence bibliographique**

En partant du principe que le fichier bibtex a été bien fait, que la bibliographie a bien été insérée dans le document, il suffit de faire
```latex
\cite{ref_doc_dans_fichier_bibtex}
```


**5. les trucs qui peuvent servir**

*modifier un interligne*

Il suffit de modifier la valeur de sorte que ça corresponde à ce que l'on souhaite en utilisant cette commande:

```latex
\vspace{-2em}
```


*faire un saut de page*

```latex
\clearpage
```


*insérer une page blanche*

```latex
\newpage
\strut
\thispagestyle{empty}
\newpage
```
Ce sera uitile si par exemple on ne fait pas un rapport assez gros pour utiliser la class report mais que l'on souhaite avoir une page blanche après la page de garde.


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

```latex
% commande pour pourvoir tracer une ligne
\newcommand{\HRule}{\rule{\linewidth}{0.5mm}}
```

### Faire une page de garde (un exemple)

```latex
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
```


### Insérer des annexes


*commande indispensable*

```latex
\appendix
```
*insérer un pdf en annexe*
```latex
\includepdf[pages={1-3}]{nom_du_fichier_sans_extension}
```


### Rédaction de mon papier : en un seul ou en plusieurs fichiers ?

Bonne question !
Personnellement j'ai tendance à dire plusieurs. Une pour le le squelette du fichier dans laquelle on insère:
* la page de garde
* puis le corps du rapport
* et les annexes

Cela permet d'avoir quelque chose d'assez léger.


Cependant pour un rapport de projet, un seul fichier peu suffir...
Mais pas pour un rapport de stage...


### Comment faire mon fichier .bibtex

Je vous renvoie vers la [documentation 1](http://www.tuteurs.ens.fr/logiciels/latex/bibtex.html) ou la [documentation 2](https://openclassrooms.com/courses/redigez-des-documents-de-qualite-avec-latex/la-bibliographie-1)


### Faire un CV

Je complèterais cet item plus tard... Il faut d'abord que je fasse le mien !

BREF c'est une fiche qui peut aider mais ça n'est pas un manuel !
Cependant avec ces infos, il est possible de faire un rapport de projet, un rapport de stage complet, et si vous avez des questions n'hésitez pas !


## Les liens utiles / Les manuels et endroits où vous trouverez de l'aide

cf quand même toutes le ressources mises dans le document !
[Rédaction en LaTex](https://www.bibl.ulaval.ca/fichiers_site/services/formation-latex-ul.pdf)
[Groupe francophone d'aide en LaTex](https://www.gutenberg.eu.org/-TeXniques-)
[xm1maths.fr](http://www.xm1math.net/doculatex/)
[LaTex project](http://www.latex-project.org/help/documentation/)
