# Cours
Il existe une multitude de shell, du plus simple au plus complexe :
- sh
- csh
- tcsh
- ksh
- ...
- dash
- ...
- zsh
- ...
- **bash** (défault de **Linux**)

# Shell
1. Phase de **saisie**
2. Phase de **substitution**
3. Phase d'**execution**

## Synthaxe
`cmd param1 param2 ... Redirections`  
> *espace : charactère de séparation*

ou  
`NOM_VARIABLE=valeur`  
> Pour afficher la valeur des variables : `echo $NOM_VARIABLE`  

==> Processus :
- Code
- pid
- ppid
- priorité
- état
- **VARIABLES**
    - Non exportées
        - `FOO=XIII`
    - Exportées
        - `export FOO=42`
        - Les processus fils ont accès uniquement aux **copies** des variables **exportées** du processus **parent**  

## Règles du système:
- **INDÉPENDANCE DES PROCESSUS**
- **MMU** = Memory Managment Unit
    - Sous les ordres du noyau mais plus rapide que lui
    - Gère la morcelation de la RAM physique
    - Gère l'affichage de la RAM virutelle continue auquel on accède
    - Gère les autorisations d'accès des processus et communique avec le noyau 
- **REDIRECTION DES E/S (I/O)**:
    - Opérations d'E/S c'est un transfert d edata entre 2 parties de la machine
    - Flots d'E/S:
        - E/S actives  

| Types d'E/S  |                  |
| ------------ | ---------------- |
| processus    | --> périphérique |
| périphérique | --> processus    |
| processus    | --> processus    |
| processus    | --> fichier      |
| fichier      | --> processus    |

Tout processus est essentiellement un calcul (Turing) avec des entrées et des sorties.   
En shell, il a donc été mis en place une table de descripteur de fichiers (*petit entier*). Le 0 correspond à l'entrée standard d'un processus (**stdin**). Le noyau va mettre les *input data* dans le **0** via des *redirections* et sortir automatiquement les *output data* comprises dans le **1** (**stdout**). Enfin il existe également une sortie d'erreur standard dans le **2** (**stderr**).  
## Redirections standard
Par défaut, l'entrée standard est le clavier, la sortie standard et la sortie d'erreur standard sont également le terminal 
## Redirection **STDIN**
`cmd < fichier`
## Redirection **STDOUT**
`cmd > fichier`
> Écrase les données dans le fichier de sortie
 
`cmd >> fichier`
> Rajoute la sortie à la fin du fichier de sortie

## Redirection **STDERR**
`cmd 2> fichier`
> Si l'on dirige les flux vers /dev/null, les données sont définitivement perdues, ce qui peut être utile pour éviter les messages d'erreur

`cmd > fichier 2>&1 ` permet de fusioner la sortie et l'erreur
## Redirection processus vers processus
`cmd1 | cmd2`
> Sortie de cmd1 = entrée de cmd2

## Programmes importants sous bash:
- cat
- grep
- head
- tail
- sort
- tr

## Séquentialisation
| Script         | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| `cmd1 ; cmd2`  | Séquentialisation des processus                              |
| `cmd1 & cmd2`  | Les deux processus commencent en même temps                  |
| `cmd1 && cmd2` | cmd2 ne s'éxécute que si cmd1 s'est terminée **sans** erreur |
| `cmd1 || cmd2` | cmd2 ne s'éxécute que si cmd1 s'est terminée **avec** erreur |

### Code de retour (petit entier)
$\neq$ du retour de la cmd 
- 0 => Terminaison normale
- $\neq$ 0 => Terminaison anormale

Ce code est stocké dans la variable ?

## Parentesage
`( ligne de cmd )`  
- Créer un sous shell 
- Le sortie de la cmd1 va dans l'entrée du sous shell
- La sortie de la cmd2 va s'ajouter dans l'entrée du sous shell
- le sous shell fait sa sortie sur la sortie standard (terminal si non specifié)
## Processus avant-plan ou arrière plan (détaché)
> def: Processus en avant-plan est un processus sur lequel le clavier est connecté à STDIN

> Si le clavier n'est pas connecté au STDINalors le processus est dit être en arrière_plan (détaché)

> Par défaut, un seul processus est à un instant t est en avant plan

>Par défaut une commande s'execute en avant-plan  

`commande &` lance la commande en arrière plan
`Ctrl + z` permet de stopper le processus en avant plan  
`Ctrl + c` permet de tuer le processus en avant plan  
`bg` permet de mettre la tâche stoppée en arrière plan  
`fg` permet de mettre la tâche stoppée en avant plan 

# MÉCANISMES DE SUBSTITUTION
## Substitution de variables
```bash
RAC =/bin
pnom@pcid:~$ echo $RAC 
                      # Substitution de var
             echo /bin
                      # Execution
/bin
```
```bash
pnom@pcid:~$ echo $RAC/pwd 
                          # Substitution de var et donc de chemin
             echo /bin/pwd
                          # Execution
/bin/pwd
```
```bash
pnom@pcid:~$ $RAC/pwd 
                     # Substitution de var et donc de la commande
             /bin/pwd
                     # Execution
/bin/pwd
```

## Substitution de commande
```bash
$(cmd) # Place la STDOUT de la commande dans la ligne
echo $(date) : $(who|wc -l) utilisateur sur $(hostname)
Mard 25 Septembre : 1 utilisateur sur pcid
```
## Substitution de chemin
3 motifs de substitution de chemin:
- `*` suite eventuellement vide de charactères mais n'intercèpte pas le . quand * est le premier charactère 
- `?` un seul charactère 
- `[a-z] ou [A-z] ou [aeiouy]` alphabet regex  

'' inhibe toute susbstitution
Une chaine placée entre " " est partiellement quoté: seule les susbstituions de chemins sont inhibées  

# Vectorisation des variables
```bash
set mot1 mot2 ...
```

> Stocke mot1 dans \$1 et mot2 dans \$2, l'ensemble est disponible sous `$*` ou sous `$@`

`shift` permet de shifter à gauche toutes les variables (\$3 devient \$2; \$2 devient \$1 et \$1 est supprimé)  
Le nombre d'élément du vecteur est accessible avec `$#`  

| Variables spéciales | Signification                        |
| ------------------- | ------------------------------------ |
| $0                  | Variable courante                    |
| $?                  | Valeur retour (avec ou sans erreur)  |
| $$                  | **pid** du processus actuel          |
| $!                  | **pid** du dernier processus détaché |

```bash
pnom@pcid:~$ PREFIXE="TMP_"
pnom@pcid:~$ N1=${PREFIXE}1
pnom@pcid:~$ N2=${PREFIXE}2
pnom@pcid:~$ echo $N1
TMP_1
pnom@pcid:~$ echo $N2
TMP_2
```
# Les structures de contrôles de shell
| Commande         | Description                        |
| ---------------- | ---------------------------------- |
| `test arg1 arg2` | Test qui renvoie 0 si True dans $? |
| `[ arg1 arg2 ]`  | Idem                               |

- f Fichier existe ?
- r is Readable ?
- w is Writable ?
- s is Size non nulle
- d is Directory 

```bash
if expr
then 
exprs
(else) (elif)
exprs
fi
```
| Commande           | Description                           |
| ------------------ | ------------------------------------- |
| `expr 2 + 3`       | calculatrice arithmétique sur entiers |
| `N=$(expr $N + 1)` | incrémente $N                         |

| Commande | Description      |
| -------- | ---------------- |
| `-lt`    | lower than       |
| `-gt`    | greater than     |
| `-eq`    | equal            |
| `-ne`    | not equal        |
| `-ge`    | greater or equal |
| `-le`    | lower or equal   |
  
```bash
while exp
do
exps
done
```
   
```bash
for NOM_VARIABLE in liste_element
do
exps
done
```
Exemple:
```bash
for i in .bash*
do
echo $i
done
```
## Charactère d'échappement
```bash
exit n # Termine le processus, n=0 si sortie correcte
break n # Sort de n itérations
eval cmd # Relance un nouveau cycle de substitution
```
## Definition fonction
```bash
nom_fonction ()
{
exps
}
```
Exemple:
```bash
cdc ()
{
cd $1
clear
}
```
# 1- Alias

```bash
pnom@pcid:~$ source .bashrc
pnom@pcid:~$ man du
pnom@pcid:~$ man man
pnom@pcid:~$ alias
alias grep='grep --color=auto'
alias ll='ls -la'
alias ls='ls --color=auto'
alias man='man -L en'
alias rm='rm -i'
pnom@pcid:~$ alias ls="date"
pnom@pcid:~$ ls
mardi 26 septembre 2017, 13:30:08 (UTC+0200)
pnom@pcid:~$ unalias ls
pnom@pcid:~$ alias ls="ls --color=auto"
pnom@pcid:~$ ls
42                        Lancer emacs | Bros-Bioinfo_fichiers  STAT        toto.txt
Algo_cours                Lancer emacs | Bros-Bioinfo.pdf       TD_ALGO     UtilisationUnix
Bureau                    PYTHON                                TDM_R
cours_algo_protection.md  R                                     tdstat.zip
espaces                   sentinelle.csv                        test2.R
```

# 2- Protection

```bash
pnom@pcid:~$ ls -l
total 8900
drwxr-xr-x 2 pnom grp30001    4096 sept. 19 16:58 42
drwxr-xr-x 2 pnom grp30001    4096 sept. 26 13:32 Algo_cours
drwxr-xr-x 2 pnom grp30001    4096 juil. 17  2013 Bureau
-rw-r--r-- 1 pnom grp30001     693 sept. 19 17:01 cours_algo_protection.md
drwx------ 2 pnom grp30001    4096 août  30 12:27 espaces
drwxr-xr-x 2 pnom grp30001    4096 sept. 22 09:26 Lancer emacs | Bros-Bioinfo_fichiers
-rw-r--r-- 1 pnom grp30001   15751 sept. 22 09:26 Lancer emacs | Bros-Bioinfo.pdf
drwxr-xr-x 2 pnom grp30001    4096 sept. 22 12:03 PYTHON
drwxr-xr-x 3 pnom grp30001    4096 sept. 11 13:21 R
-rw-r--r-- 1 pnom grp30001    1459 sept. 25 09:46 sentinelle.csv
drwxr-xr-x 3 pnom grp30001    4096 sept. 25 08:41 STAT
drwxr-xr-x 2 pnom grp30001    4096 sept. 21 23:04 TD_ALGO
drwxr-xr-x 2 pnom grp30001    4096 sept. 11 18:39 TDM_R
-rw-r--r-- 1 pnom grp30001 8997453 sept. 25 08:40 tdstat.zip
-rw-r--r-- 1 pnom grp30001    1329 sept. 25 13:23 test2.R
-rwxrw-r-- 1 pnom grp30001       0 sept. 19 16:52 toto.txt
drwxr-xr-x 3 pnom grp30001    4096 sept. 19 15:40 UtilisationUnix
```

```bash
pnom@pcid:~$ chmod u=-r+w test-droits.txt
pnom@pcid:~$ ls -l
total 8900
drwxr-xr-x 2 pnom grp30001    4096 sept. 19 16:58 42
drwxr-xr-x 2 pnom grp30001    4096 sept. 26 13:40 Algo_cours
drwxr-xr-x 2 pnom grp30001    4096 juil. 17  2013 Bureau
-rw-r--r-- 1 pnom grp30001     693 sept. 19 17:01 cours_algo_protection.md
drwx------ 2 pnom grp30001    4096 août  30 12:27 espaces
drwxr-xr-x 2 pnom grp30001    4096 sept. 22 09:26 Lancer emacs | Bros-Bioinfo_fichiers
-rw-r--r-- 1 pnom grp30001   15751 sept. 22 09:26 Lancer emacs | Bros-Bioinfo.pdf
drwxr-xr-x 2 pnom grp30001    4096 sept. 22 12:03 PYTHON
drwxr-xr-x 3 pnom grp30001    4096 sept. 11 13:21 R
-rw-r--r-- 1 pnom grp30001    1459 sept. 25 09:46 sentinelle.csv
drwxr-xr-x 3 pnom grp30001    4096 sept. 25 08:41 STAT
drwxr-xr-x 2 pnom grp30001    4096 sept. 21 23:04 TD_ALGO
drwxr-xr-x 2 pnom grp30001    4096 sept. 11 18:39 TDM_R
-rw-r--r-- 1 pnom grp30001 8997453 sept. 25 08:40 tdstat.zip
-rw-r--r-- 1 pnom grp30001    1329 sept. 25 13:23 test2.R
--w-r--r-- 1 pnom grp30001      15 sept. 26 13:38 test-droits.txt
-rwxrw-r-- 1 pnom grp30001       0 sept. 19 16:52 toto.txt
drwxr-xr-x 3 pnom grp30001    4096 sept. 19 15:40 UtilisationUnix
pnom@pcid:~$ cat test-droits.txt
cat: test-droits.txt: Permission non accordée
pnom@pcid:~$ chmod u=r+w test-droits.txt
pnom@pcid:~$ cat test-droits.txt
Hello World !
```
# 3-  Visite de l'arborescence d'Unix

```bash
pnom@pcid:~$ cd /
pnom@pcid:/$ ls
pnom@pcid:/$ ls -l
total 1376
drwxr-xr-x   3 root root     4096 déc.   6  2014 addons
dr-xr-xr-x   5 root root     4096 mai   28  2016 autofs
drwxr-xr-x   2 root root    12288 avril 12 15:38 bin
drwxr-xr-x   3 root root     4096 sept. 26 02:33 boot
-rw-------   1 root root 32153600 déc.  21  2016 core
drwxr-xr-x  19 root root     3380 sept. 26 13:07 dev
drwxrwxrwt  28 root root     4096 janv. 14  2017 espace
drwxr-xr-x 302 root root    20480 sept. 26 13:07 etc
drwxr-xr-x   2 root root     4096 mai   21  2012 home
lrwxrwxrwx   1 root root       29 mai   23 02:48 initrd.img -> boot/initrd.img-4.9.0-3-amd64
lrwxrwxrwx   1 root root       29 juin  22 13:15 initrd.img.old -> boot/initrd.img-4.9.0-3-amd64
drwxr-xr-x  24 root root     4096 sept. 23  2014 lib
drwxr-xr-x   2 root root    12288 juin  22 13:11 lib32
drwxr-xr-x   2 root root     4096 juin  22 13:11 lib64
drwxr-xr-x   2 root root    12288 juin  22 13:11 libx32
drwx------   2 root root    16384 déc.   5  2014 lost+found
drwxr-xr-x   2 root root     4096 avril 25 16:54 media
drwxr-xr-x   2 root root     4096 déc.   5  2014 mnt
drwxr-xr-x   2 root root     4096 sept. 10  2013 net
drwxr-xr-x   9 root root     4096 déc.  18  2013 opt
dr-xr-xr-x 244 root root        0 sept. 26 13:05 proc
drwx------  14 root root     4096 mai   16 08:19 root
drwxr-xr-x  39 root root     1460 sept. 26 13:08 run
drwxr-xr-x   2 root root    16384 sept. 23  2014 sbin
drwxr-xr-x   2 root root     4096 juin  12  2012 srv
-rw-r--r--   1 root root        0 sept.  4  2016 status
dr-xr-xr-x  13 root root        0 sept. 26 13:05 sys
drwxr-xr-x   3 root root     4096 déc.   5  2014 target
drwxrwxrwt  18 root root   131072 sept. 26 13:55 tmp
drwxr-xr-x  17 root root     4096 déc.  18  2013 usr
drwxr-xr-x  13 root root     4096 sept. 10  2013 var
lrwxrwxrwx   1 root root       26 mai   23 02:48 vmlinuz -> boot/vmlinuz-4.9.0-3-amd64
lrwxrwxrwx   1 root root       26 juin  22 13:15 vmlinuz.old -> boot/vmlinuz-4.9.0-3-amd64
```

```bash
pnom@pcid:/$ cd bin/
pnom@pcid:/bin$ ls -l
total 17076
-rwxr-xr-x 1 root root 1099016 mai   15 21:45 bash
-rwxr-xr-x 1 root root  574456 sept. 22  2016 btrfs
-rwxr-xr-x 1 root root  278456 sept. 22  2016 btrfs-calc-size
lrwxrwxrwx 1 root root       5 sept. 22  2016 btrfsck -> btrfs
-rwxr-xr-x 1 root root  303160 sept. 22  2016 btrfs-convert
-rwxr-xr-x 1 root root  282552 sept. 22  2016 btrfs-debug-tree
-rwxr-xr-x 1 root root  278456 sept. 22  2016 btrfs-find-root
-rwxr-xr-x 1 root root  299096 sept. 22  2016 btrfs-image
-rwxr-xr-x 1 root root  278456 sept. 22  2016 btrfs-map-logical
-rwxr-xr-x 1 root root  274360 sept. 22  2016 btrfs-select-super
-rwxr-xr-x 1 root root  282808 sept. 22  2016 btrfs-show-super
-rwxr-xr-x 1 root root  278456 sept. 22  2016 btrfstune
-rwxr-xr-x 1 root root  274360 sept. 22  2016 btrfs-zero-log
-rwxr-xr-x 3 root root   35448 janv. 29  2017 bunzip2
...
```

```bash
pnom@pcid:/bin$ cd ../tmp/
pnom@pcid:/tmp$ ls -l
total 36
drwx------ 12 pnom grp30001 4096 sept. 26 13:59 cache-pnom
drwx------  2 root     root     4096 sept. 26 13:06 kde-root
-rw-------  1 pnom grp30001  849 sept. 26 13:07 krb5cc_14906_0hFlml
drwx------  2 root     root     4096 sept. 26 13:06 ksocket-root
drwxr-xr-x  2 nagios   nagios   4096 sept. 26 13:06 packages_updated
drwx------  2 root     root     4096 sept. 26 13:06 pulse-PKdhtXMmr18n
drwx------  2 timidity timidity 4096 sept. 26 13:07 pulse-Z3Wh4QpIBPPr
drwx------  2 pnom grp30001 4096 sept. 26 13:07 ssh-WIJf8WKneSUI
drwx------  3 root     root     4096 sept. 26 13:06 systemd-private-e87b5b1e525f4943b52d57c6c925ee17-rtkit-daemon.service-JPKq3k
pnom@pcid:/tmp$ cd ../dev/
pnom@pcid:/dev$ ls -l
total 0
crw-rw----+ 1 pnom audio      14,   4 sept. 26 13:06 audio
crw-------  1 root     root       10, 235 sept. 26 13:06 autofs
drwxr-xr-x  2 root     root           120 sept. 26 13:05 block
drwxr-xr-x  2 root     root            80 sept. 26 13:05 bsg
crw-rw----  1 root     disk       10, 234 sept. 26 13:06 btrfs-control
drwxr-xr-x  3 root     root            60 sept. 26 13:05 bus
lrwxrwxrwx  1 root     root             3 sept. 26 13:06 cdrom -> sr0
drwxr-xr-x  2 root     root          3280 sept. 26 13:07 char
crw-------  1 root     root        5,   1 sept. 26 13:06 bash
lrwxrwxrwx  1 root     root            11 sept. 26 13:05 core -> /proc/kcore
drwxr-xr-x  2 root     root            60 sept. 26 13:05 cpu
crw-------  1 root     root       10,  62 sept. 26 13:06 cpu_dma_latency
crw-------  1 root     root       10, 203 sept. 26 13:06 cuse
drwxr-xr-x  7 root     root           140 sept. 26 13:05 disk
drwxr-xr-x  2 root     root            80 sept. 26 13:06 dri
crw-rw----+ 1 pnom audio      14,   3 sept. 26 13:06 dsp
lrwxrwxrwx  1 root     root             3 sept. 26 13:06 dvd -> sr0
lrwxrwxrwx  1 root     root            13 sept. 26 13:05 fd -> /proc/self/fd
crw-rw-rw-  1 root     root        1,   7 sept. 26 13:06 full
crw-rw-rw-  1 root     root       10, 229 sept. 26 13:07 fuse
```

```bash
pnom@pcid:/dev$ cd ../usr/share/man
pnom@pcid:/usr/share/man$ ls -l
total 2516
drwxr-xr-x  3 root root    4096 déc.   5  2014 ar
drwxr-xr-x  3 root root    4096 déc.   5  2014 bg.UTF-8
drwxr-xr-x  5 root root    4096 juin  17  2016 ca
drwxr-xr-x  7 root root    4096 déc.   5  2014 cs
drwxr-xr-x  5 root root    4096 juin  17  2016 da
drwxr-xr-x  8 root root    4096 déc.   5  2014 de
drwxr-xr-x  3 root root    4096 févr. 24  2016 de.UTF-8
drwxr-xr-x  3 root root    4096 déc.   5  2014 el
drwxr-xr-x  3 root root    4096 déc.   5  2014 en_GB
drwxr-xr-x  3 root root    4096 nov.  30  2016 eo
drwxr-xr-x  7 root root    4096 déc.   5  2014 es
drwxr-xr-x  3 root root    4096 juin  17  2016 et
drwxr-xr-x  3 root root    4096 mars  25  2017 eu
drwxr-xr-x  5 root root    4096 déc.   5  2014 fi
drwxr-xr-x 10 root root    4096 déc.   5  2014 fr
drwxr-xr-x  4 root root    4096 déc.   5  2014 fr.ISO8859-1
drwxr-xr-x  4 root root    4096 févr. 24  2016 fr.UTF-8
```

```bash
s3b@s3b-N750BU:~$ which firefox
/usr/bin/firefox
s3b@s3b-N750BU:~$ whereis firefox
firefox: /usr/bin/firefox /usr/lib/firefox /etc/firefox /usr/share/man/man1/firefox.1.gz
```
