#Processus

## VARIABLE EXPORTEES/NON EXPORTEE

La variable c'est le **nom d'une case mémoire** de la RAM.

```bash
foo=42
bar=FOO
```
Dans notre cas :
- foo sera en **non exportée** ; bar en **exportée**. Il n'y a aucune différence pour le processus entre variable exportée ou non.
- Lors de l'héritage d'un processus enfant, le processus parent va transmettre les informations (ppid etc...) notamment les **info exportées** (bar=FOO exportée mais pas foo). La variable est transmise par **copie**, elles ne sont pas partagées entre le processus parent et enfant (la modification de l'une n'entrainera pas la modifcation de l'autre).

## Fenêtre "TERMINAL"

Processus qui s'execute dans le terminal : **shell** (interprète de commande)

Histoire : classifié du moins vers le plus de services rendus
- **sh**(c'est la base)
- csh
- tcsh
- ksh
- **zsh** (Sun/Solaris)
- **bash** (Linux)
etc...

Système par défaut : GNU/Linux (programmes et application/noyau). Par défaut, **bash** est installé mais on peut installer zsh.
Le shell est commun à **tous les système Unix**.

## Redirections

Participe à la puissance du shell.
> Note : Windows : powershell un équivalent à bash mais moins efficace. Au final Windows à installer le bash au final.

**Opération d'E/S** (entrée/sortie) : c'est un transfert d'informations d'un endroit vers un autres endroit dans la machine.

**Flot d'E/S d'un processus** : c'est les E/S activent dans le processus.

- Processus => fichier (par exemple le traitement de texte lors de la sauvegarde sur DD).
- fichier => Processus (chargement du fichier)
- Processus => périphérique (imprimer le fichier, affichage écran)
- périphérique => Processus (scanner, clavier, souris)
- Processus => processus

Mais si on lit de la musique via le processus de lecture, normalement il y aurait des coupures. En réalité, le porcessus n'envoie pas le .raw directement dans les hauts parleurs, mais au niveau de la **carte autdio** qui contient une **RAM**. Le rôle du processus est de décompresser, lire et envoyer lors de son ordonnance le contenu du .raw(ou au bon format) dans la mémoire vive de la carte audio. C'est la carte audio qui envoie la musique, et la mémoire se remplit au fur et à mesure des ordonnances.

3 entrées sont définies dans un processus :

- Dans un processus, il y a aussi un **tableau de descripteur de fichier**. Ce tableau est connecté au **STDIN**(égale entrée standard), connecté au clavier.
- Il est aussi connecté au **STDOUT** qui correspond à la fenêtre du terminal.
- Pour les messages d'erreurs en retour à l'utilisateur, c'est le **STDERR** qui renvoie aussi au terminal.

### Redirection ENTREE STANDARD (STDIN)

Le signe de STDIN pour intéragir : **<**

Exercice:

- Envoyer un mail sans navigateur

```bash
sgoncal1@goya:~$ Mail -s "RDV" pierre.jacquet@etu.u-bordeaux.fr
Coucou :p .
.
Cc:
```
- Envoyer un mail via message.txt :

```bash
sgoncal1@goya:~$ Mail -s "RDV" pierre.jacquet@etu.u-bordeaux.fr <./message.txt
```

### Redirection SORTIE STANDARD (STDOUT)


Le signe de STDOUT pour intéragir : **>**.

```bash
sgoncal1@goya:~$ ls > result.dat
sgoncal1@goya:~$ cat result.dat
42
Algo_cours
Bureau
cours_algo_protection.md
espaces
Lancer emacs | Bros-Bioinfo_fichiers
Lancer emacs | Bros-Bioinfo.pdf
message.txt
PYTHON
R
result.dat
sentinelle.csv
STAT
TD_ALGO
TDM_R
tdstat.zip
test2.R
test-droits.txt
test-droits.txt~
toto.txt
UtilisationUnix
```

### Redirection SORTIE D'ERREUR STANDARD (STDERR)

Le signe de STDERR : **2>**

```bash
sgoncal1@goya:~$ ls -z
ls : option invalide -- 'z'
Saisissez « ls --help » pour plus d\'informations.
```

```bash
sgoncal1@goya:~$ ls -z 2> erreur.txt
sgoncal1@goya:~$ cat erreur.txt
ls : option invalide -- 'z'
Saisissez « ls --help » pour plus d'informations.
```


### Le "pipe" (|)

Le pipe permet à la commande 2 de prendre les résultats créés par la commande 1 **(STDOUT1 => STDIN2)**.

Exemple : compter le nombre de lignes de erreur.txt via le résultat de cat.

```bash
sgoncal1@goya:~$ cat erreur.txt | wc -l
2
```

On peut enchaîner plusieurs commandes à la suite et effectuer donc un **filtrage** (commande en pipeline = filtres).


### Accéder au contenu d'une variable

foo="XIII 13" => affectation
$NOM_VARIABLE => accès contenu

```bash
sgoncal1@goya:~$ foo="XIII 13"
sgoncal1@goya:~$ $foo
XIII: command not found
sgoncal1@goya:~$ echo bonjour
bonjour
sgoncal1@goya:~$ echo $foo
XIII 13
```

### Code de retour d'un processus

2 types de terminaisons d\'un processus :
- normal (fin du processus, quit)
- anormal (suite à des erreurs)

Lorsque le processus est en état de terminaison, il laisse un **code de retour** (ou code d\'erreur de retour) que le noyau conserve dans une variable : **?** .
Le code de retour correpond à un petit entier. Le code retour lorsqu\'il vaut 0, c\'est une **terminaison normale**. Sinon c\'est une **terminaison anormale** (de manière générale 0 est la terminaison normale).

Exemple :
- Commande ls :

```bash
sgoncal1@goya:~$ ls
42                                    message.txt     tdstat.zip
Algo_cours                            PYTHON          test2.R
Bureau                                R               test-droits.txt
cours_algo_protection.md              result.dat      test-droits.txt~
erreur.txt                            sentinelle.csv  toto.txt
espaces                               STAT            UtilisationUnix
Lancer emacs | Bros-Bioinfo_fichiers  TD_ALGO
Lancer emacs | Bros-Bioinfo.pdf       TDM_R
sgoncal1@goya:~$ echo $?
0
sgoncal1@goya:~$ ls -z
ls : option invalide -- 'z'
Saisissez « ls --help » pour plus d'informations.
sgoncal1@goya:~$ echo $?
2
```

Les numéros d'erreur de la commande sont au niveau du manuel de la commande, avec **l\'état de fin d\'exécution**.

Mais :
```bash
sgoncal1@goya:~$ man ls
sgoncal1@goya:~$ echo $?
0
```

Cette commande garde en mémoire la terminaison de la **dernière commande**.

```bash
sgoncal1@goya:~$ ls -z
ls : option invalide -- 'z'
Saisissez « ls --help » pour plus d'informations.
sgoncal1@goya:~$ TOTO=$?
sgoncal1@goya:~$ echo $TOTO
2
```

> Note : attention il n'y a pas d'espace entre TOTO et le signe égal.

### Enchaînement de pipe (= pipeline)

Pour avoir le nombre de fichiers/dossiers dans le répertoire courant :

```bash
sgoncal1@goya:~$ ls | wc -l
22
```

Chaque commande produit un code de retour, quelle est donc sa valeur ? Plus importante des valeurs : c'est la **dernière commande**. Car s'il y a une erreur dans les précédentes commandes, le pipeline fera un retour d'erreur non localisé(il faudra enquêter nous même). Le code de retour du pipeline est donc la dernière commande du pipeline.
Plus on ajoute des processus en pipe, plus le filtrage va être précis (exemple: les nombres premiers)

### Enchaînement de processus

Opérateurs :
- **;**, cmd1 ; cmd2 : commande 2 ne sera créée que si la commande 1 sera terminée.
- **&**, cmd1 & cmd2 : parallelisme de fonctionnement  des processus cmd1 et 2.
- **&&**, cmd1 && cmd2 : la cmd2 ne sera créée et exécutée que si la cmd1 s\'est terminée sans erreurs.
- **||**, cm1 || cmd2 :  cmd2 ne sera créée et exécutée que si la cmd1 renvoie une erreur.

```bash
ls && echo OK || echo KO
42                                    message.txt     tdstat.zip
Algo_cours                            PYTHON          test2.R
Bureau                                R               test-droits.txt
cours_algo_protection.md              result.dat      test-droits.txt~
erreur.txt                            sentinelle.csv  toto.txt
espaces                               STAT            UtilisationUnix
Lancer emacs | Bros-Bioinfo_fichiers  TD_ALGO
Lancer emacs | Bros-Bioinfo.pdf       TDM_R
OK
```

On est géné par la commande ls, donc on va rediriger le résultat :

```bash
sgoncal1@goya:~$ ls > /dev/null && echo OK || echo KO
OK
sgoncal1@goya:~$ ls -z > /dev/null && echo OK || echo KO
ls : option invalide -- 'z'
Saisissez « ls --help » pour plus d'informations.
KO
```

Il faut rediriger la sortie d\'erreur :

```bash
sgoncal1@goya:~$ ls -z 2> /dev/null > /dev/null && echo OK || echo KO
KO
```

/dev/null : c\'est le **"trou noir"**, rien ne ressort, les données sont irrécupérables.

Des commandes placées entre **()** provoque l\'exécution des commandes dans un **sous-shell**.

ls | wc -l : le processus bash est parent du processus ls et wc -l. Le STDOUT de ls est redirigé dans le STDIN de wc -l.

Si on ajoute les () : (ls | wc -l); alors le sous-shell généré, donc un nouveau processus bash devient enfant du bash du shell principal.

Exemple :

```bash
F1=foo.txt
F2=bar.txt
(cat $F1 || cat $F2) | wc -l
```
- 0 = STDIN
- 1 = STDOUT
- 2 = STDERR

![test](https://i.imgur.com/MD2eE1m.jpg)
