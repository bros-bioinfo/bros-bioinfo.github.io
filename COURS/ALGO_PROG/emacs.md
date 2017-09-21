# Lancer emacs

On lance emacs simplement en tapant :

```
prao ~ $ emacs
```

Pour éditer un fichier précis :

```
prao ~ $ emacs monbofichier.html
```

# Quitter emacs

Commande | Commande étendue  | Description
-------- | ----------------- | ------------------------------------------------------------
C-z      | M-x suspend-emacs | Suspendre (ou iconfier quand on est en mode graphique) emacs
C-x C-c  | M-x quit-window   | Quitter emacs

# Aide

Commande | Nom complet            | Action
-------- | ---------------------- | ------------------------------------------------
C-h      | M-x help               | Aide d'emacs (M-? pour la config conscrits 2002)
C-h k    | M-x describe-key       | Brève description d'une commande
C-h i    | M-x info               | Lance les fichiers d'aide info.
C-h m    | M-x describe-mode      | Description d'un mode majeur ou mineur
C-h t    | M-x help-with-tutorial | Lance le tutorial d'emacs

# Manipuler fichiers et buffers

Commande | Commande étendue              | Description
-------- | ----------------------------- | -------------------------------------------------------------------------------
C-x C-f  | M-x find-file                 | Ouvrir un (nouveau) fichier
C-x C-s  | M-x save-buffer               | Sauvegarder le buffer courant
C-x s    | M-x save-some-buffers         | Sauvegarder tous les buffers en cours d'édition
C-x C-b  | M-x list-buffers              | Avoir la liste de tous les buffers.
C-x b    | M-x switch-to-buffer          | Changer de buffer
C-x C-q  | M-x vc-toggle-read-only       | Passer le buffer en lecture seule, ou lecture-écriture (selon l'état de départ)
C-x o    | M-x other-window              | Passer à une autre fenêtre
C-x 1    | M-x delete-other-windows      | Faire disparaître toutes les fenêtres sauf la fenêtre courante
C-x 2    | M-x split-window-horizontally | Partage la fenêtre courante en 2, horizontalement
C-x 3    | M-x split-window-vertically   | Partage la fenêtre courante en 2, verticalement

# Manipuler du texte

## Se déplacer

Bouger d'un(e)...  | Vers l'avant | Vers l'arrière
------------------ | ------------ | --------------
caractère          | C-b          | C-f
mot                | M-b          | M-f
ligne              | C-p          | C-n
début/fin de ligne | C-a          | C-e
phrase             | M-a          | M-e
paragraphe         | M-{          | M-}
buffer             | M-<          | M->

## Effacer

Commande    | Nom complet            | Action
----------- | ---------------------- | -----------------------------------------------------------
C-d         | M-x delete-char        | Efface le caractère sur lequel est le curseur.
M-d         | M-x kill-word          | Efface le mot à partir du curseur.
M-backspace | M-x backward-kill-word | Efface le mot précédent.
C-k         | M-x kill-line          | Efface la ligne à partir du curseur
_           | M-x kill-paragraph     | Efface le paragraphe à partir du curseur
M-z "c"     | M-x zap-to-char        | Efface jusqu'à la prochaine occurrence de "c" ("c" compris)

## Sélectionner

La sélection peut se faire à la souris mais aussi au clavier :

Commande | Nom complet                 | Action
-------- | --------------------------- | -------------------------------------------------------
C-espace | M-x set-mark-command        | Poser une marque
C-x C-x  | M-x exchange-point-and-mark | Échanger la marque et le point
M-@ "n"  | M-x mark-word               | Sélectionne "n" mots à partir de la position du curseur
M-h      | M-x mark-paragraph          | Sélectionner tout le paragraphe
C-x h    | M-x mark-whole-buffer       | Sélectionner le buffer entier

## Couper, copier, coller

Commande | Nom complet             | Action
-------- | ----------------------- | ----------------------------------------------------------------
C-w      | M-x kill-region         | Couper la sélection
M-w      | M-x copy-region-as-kill | Copier la sélection
C-y      | M-x yank                | coller
M-y      | M-x yank-pop            | (uniquement après un C-y) navigue dans l'history de la kill-ring

## Chercher et remplacer

Commande | Nom complet                 | Action
-------- | --------------------------- | -----------------------------------------------------------
C-s      | M-x isearch forward         | Recherche simple vers la fin du fichier
C-r      | M-x isearch backward        | Recherche simple vers le début du fichier
C-M-s    | M-x isearch-forward-regexp  | Recherche une expression régulière vers la fin du fichier
C-M-r    | M-x isearch-backward-regexp | Recherche une expression régulière vers le début du fichier
M-%      | M-x query-replace           | Remplacer
_        | M-x query-replace-regexp    | Remplacer en utilisant une expression régulière


## Changements de casse

Commande | Nom complet         | Action
-------- | ------------------- | --------------------------------------------------
M-c      | M-x capitalize-word | Met en majuscules la premier caractère d'un mot
M-u      | M-x upcase-word     | Met le mot en majuscules
M-l      | M-x downcase-word   | Met le mot en minuscules
C-x C-u  | M-x upcase-region   | Met la région en majuscules (désactivé par défaut)
C-x C-l  | M-x downcase-region | Met la région en minuscules (désactivé par défaut)

## Permutations

Commande | Nom complet              | Action
-------- | ------------------------ | ----------------------------
C-t      | M-x transpose-chars      | Intervertit deux lettres
M-t      | M-x transpose-words      | Intervertit deux mots
C-x C-t  | M-x transpose-lines      | Intervertit deux lignes
_        | M-x transpose-sentences  | Intervertit deux phrases
_        | M-x transpose-paragraphs | Intervertit deux paragraphes

# Divers

## Gestion des erreurs

Commande     | Nom complet                | Action
------------ | -------------------------- | ----------------------------------------------------------------------------
C-_ ou C-x u | M-x undo                   | Annule la dernière action
C-g C-g      | M-x keyboard-quit          | Annule une commande en cours de frappe ou d'exécution
_            | M-x recover-file "fichier" | Récupérer un fichier dont l'édition a été interrompue par une erreur système
_            | M-x revert-buffer          | Récupérer le buffer dans l'état de dernière sauvegarde

## Interaction avec le shell

Commande | Nom complet       | Action
-------- | ----------------- | ------------------------------------------------------------------------
M-!      | M-x shell-command | Exécute une commande shell
C-u M-!  | _                 | Insère le résultat d'une commande dans le buffer courant
M-\|                 | M-x shell-command-on-region                                              | Exécute une commande sur la région sélectionnée
C-u M-\|                | _                                                                        | Applique un filtre sur une région, puis insère le résultat dans le buffer courant
_        | M-x shell         | Lance un shell dans terminal rudimentaire (sans séquences d'échappement)
_        | M-x term          | Lance un terminal plus élaboré

## Vérification d'orthographe

Commande | Nom complet                  | Action
-------- | ---------------------------- | ----------------------------------------------------------
M-$      | M-x ispell-word              | Vérifie l'orthographe du mot
_        | M-x ispell-region            | Vérifie l'orthographe de la région
_        | M-x ispell-buffer            | Vérifie l'orthographe du buffer entier
_        | M-x ispell-change-dictionary | Change le dictionnaire utilisé pour vérifier l'orthographe


## Pêle-mêle...

Commande           | Nom complet                | Action
------------------ | -------------------------- | -------------------------------------------------------------
M-q                | M-x command fill-paragraph | Reformate le paragraphe
M-/                | M-x dabbrev-expand         | Développe à la volée le début d'un mot déjà tapé précédemment
C-u "n" "commande" | _                          | Répète "n" fois la commande
C-u "n" "c"        | _                          | Répète "n" fois le caractère "c"
M-g "n"            | M-x goto-line              | Va à la ligne "n"
_                  | M-x calendar               | Lance un calendrier du mois

## Gadgets

Commande | Nom complet   | Action
-------- | ------------- | ------------------------------------------------------------------------------------------
_        | M-x spook     | Génère une liste des mots clefs censés confuser Echelon et la NSA (hum...)
_        | M-x hanoi     | Devant vos yeux ébahis, emacs résout le casse-tête des tours de Hanoi
_        | M-x handwrite | Transforme votre fichier texte en PostScript prêt à imprimer, avec une écriture manuscrite
_        | M-x dunnet    | Jeu de type « adventure »
_        | M-x gomoku    | Jeu de go
_        | M-x doctor    | Le psychanalyste d'emacs. Emacs est votre ami.
