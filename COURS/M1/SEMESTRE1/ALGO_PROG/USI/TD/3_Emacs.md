# Emacs
- 1961 => Création Internet dans la silicon valley  
- 1970 =>  Création d'Emacs par Richard Stallman 
- 1989 => Création de World Wide Web par Tim Berners-Lee

Lors de la première utilisation d’Emacs, la fenêtre est divisée en deux parties. Vous pouvez supprimer
la partie inférieure en utilisant le lien *Dismiss this startup screen*.  
Remarquez en bas de la fenêtre ce qu’on appelle le mini-buffer, qui sert à emacs pour communiquer
avec vous. Lorsque vous tapez une commande, elle s’affiche dans le mini-buffer.  
Au dessus se trouve une ligne grisée, la « ligne de mode ». Elle donne des indications telles que le nom
du fichier en cours d’édition, le numéro de la ligne où se trouve votre curseur, etc. Comme vous éditez
un fichier texte (d’extension .txt), le mode est le mode Texte (affiché entre parenthèses).  
Pour accéder aux commandes d’Emacs, vous pouvez bien entendu utiliser les menus ou les icônes mais
pour une utilisation efficace il est conseillé de maitriser les raccourcis clavier des commandes principales.  
La plupart des commandes d’Emacs utilisent les touches Control ou ESC .  
- la touche Control s’utilise en combinaison avec un caractère (comme pour la touche Shift)
- la touche ESC doit être relâchée, comme un caractère à part entière.
- dans la suite de la feuille, on utilisera les notations :
    - C-f : touche Control + caractère f
    - M-f : touche ESC puis caractère f ou touche ALT + caractère f ( ce qui se lit méta-f ).

|                                    | Explication                |
| ---------------------------------- | -------------------------- |
| Ctrl+ **g**                         | Annule raccourcis en cours |
| Ctrl+ Shift+ **:** <br> ou Ctrl+ / | Undo                       |
| Ctrl+ _                            | Redo                       |

Barre d'état :
- U => Encodé en Unicode (UTF-8)
    - 8 bit à 32 bit
    - **TOUJOURS prendre UTF-8**