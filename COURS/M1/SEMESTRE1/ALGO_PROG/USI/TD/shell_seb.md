# FONCTIONNEMENT DU SHELL



## 1. Phase de saisie

**CMD UNIX SIMPLE**

cmd [arg1 arg2 arg3 ....] [Redirection]

## 2. Phase de substitution

### a) Remplacement de variable

#### $Variable

```bash
FOO = XIII
echo FOO
echo $FOO
```

```bash
RAC=/bin
echo $RAC
```
Cela affiche **/bin**


```bash
RAC=/bin
echo $RAC/pwd
```
Cela affiche **/bin/pwd**, pour ensuite exécuter la commande répertoriée dans le répertoire bin.

#### Vecteur de variable

**set** mot1 mot2 mot3 ...

```bash
sgoncal1@goya:~$ set 43 BLEU XIII
sgoncal1@goya:~$ echo $1
43
sgoncal1@goya:~$ echo $2
BLEU
sgoncal1@goya:~$ echo $3
XIII
sgoncal1@goya:~$ echo $*
43 BLEU XIII
sgoncal1@goya:~$ echo $@
43 BLEU XIII
sgoncal1@goya:~$ echo $#
3
```

> NOTE : # contient de nombre d'éléments dans le vecteur.

```bash
sgoncal1@goya:~$ echo $1 , $2 , $3
43 , BLEU , XIII
sgoncal1@goya:~$ shift
sgoncal1@goya:~$ echo $1 , $2 , $3
BLEU , XIII ,
sgoncal1@goya:~$ shift
sgoncal1@goya:~$ echo $1 , $2 , $3
XIII , ,
```
> NOTE : shift décale la valeur des variables vers la gauche.

```bash
sgoncal1@goya:~$ echo $0
bash
sgoncal1@goya:~$ echo $?
0
sgoncal1@goya:~$ echo $$
4206
sgoncal1@goya:~$ echo $!
4264
```
+ **0** contient le nom de processus qui a exécuté la commande (OU) le nom de la commande courante. Ici c'est **bash**
+ **?** contient l'erreur lié à la dernière commande.
+ **$** contient le pid du processus du shell.
+ **!** contient le pid du dernier processus détaché, c'est à dire hors shell
+ **#** contient le nombre d'arguments.

#### Prefixe TMP


```bash
sgoncal1@goya:~$ PREFIXE="TMP"
sgoncal1@goya:~$ N1=$PREFIXE1
sgoncal1@goya:~$ N2=$PREFIXE2
sgoncal1@goya:~$ echo $N1

sgoncal1@goya:~$ echo $N2

sgoncal1@goya:~$ PREFIXE="TMP"
sgoncal1@goya:~$ N1=${PREFIXE}1
sgoncal1@goya:~$ N2=${PREFIXE}2
sgoncal1@goya:~$ echo $N1
TMP1
sgoncal1@goya:~$ echo $N2
TMP2
```
> NOTE : les {} premettent de dire que l'on demande le PREFIXE.

### b) Remplacement de commandes

#### $(commande simple)

```bash
sgoncal1@goya:~$ echo $(date) : $(who | wc -l) utilisateur sur $(hostname)
mardi 10 octobre 2017, 14:49:21 (UTC+0200) : 1 utilisateur sur goya
```
**ATTENTION** : ce n'est pas la commande echo qui effectue les substitution mais le **SHELL** avant d'exécuter la commande echo !

Pour récupérer seulement l'heure :

```bash
sgoncal1@goya:~$ date
mardi 10 octobre 2017, 14:54:12 (UTC+0200)
sgoncal1@goya:~$ set $(date) ; echo $5
14:55:57
```
Ainsi on peut créer de nouvelles commandes :

```bash
sgoncal1@goya:~$ alias heure='set $(date) ; echo $5'
sgoncal1@goya:~$ heure
14:59:05
```

**ATTENTION** : on utilise des "simple quote" cad **'...' **

### c) Remplacement de chemin

#### Trois motifs

+ \* : le joker (qu'importe le caractère ou son nombre) **ATTENTION** : si placé en début de motif, il ne capte pas le **.**
+ ? : un seul caractère
+ [alphabet] : un caractère queqlconque entre les crochets

Exemple :

[a-z] ou [A-Z] ou [B-P]
[0-9] ou [3-7]

```bash
sgoncal1@goya:~$ echo /bin/[a-c]?
/bin/cp
```

Ici, il n'y a aucune substitution de variable ou de commande. Par contre il y aura une substitution de chemin :  [a-c]?

## Mecanisme de quotation (pour contrôler plus finement les substitutions)

**Despécialisation** : \

```bash
sgoncal1@goya:~$ echo \*
*
sgoncal1@goya:~$ echo \;
;
sgoncal1@goya:~$ echo \\
\
```
**La simple quote** (') neutralise toutes les substitutions.
MASTER INHBITION !

```bash
sgoncal1@goya:~$ echo '$(date)'
$(date)
```

La double quote (") inhibe la susbstitution de chemin :

```bash
sgoncal1@goya:~$ echo '/bin/[a-c]?'
/bin/[a-c]?
sgoncal1@goya:~$ echo "/bin/[a-c]?"
/bin/[a-c]?
```

Exemple d'utilisation des quotes :

```bash
sgoncal1@goya:~$ N='/bin/[a-c]?'
sgoncal1@goya:~$ echo $N
/bin/cp
```

> NOTE : toujours visualiser dans l'ordre les différentes substitutions avant la dernière phase  : l'execution.


## 3. Phase d'execution

+ Si cmd interne alors elle sera exécutée.
+ Sinon il y aura recherche de la cmd dans PATH


## STRUCTURE DE CONTROLE

### Boucle for

**for** VARIABLE **in** LISTE ELEMENT
**do**
	commande
**done**

```bash
sgoncal1@goya:~$ for i in FOO 42 XIII
> do
> echo $i
> done
FOO
42
XIII
```

```bash
sgoncal1@goya:~$ for i in $(date)
> do
> echo $5
> done
14:59:05
14:59:05
14:59:05
14:59:05
14:59:05
14:59:05
sgoncal1@goya:~$ date
mardi 10 octobre 2017, 15:33:53 (UTC+0200)
sgoncal1@goya:~$ for i in 1 2 3 4 5
> do
> echo $#
> done
6
6
6
6
6
```

### expr

Permet de faire des commande artihmétique dans le shell.

```bash
sgoncal1@goya:~$ echo $#
6
sgoncal1@goya:~$ expr 3 + 4
7
sgoncal1@goya:~$ N=1
sgoncal1@goya:~$ N=$(expr $N + 1)
sgoncal1@goya:~$ echo $N
2
```

### Boucle while

**while** expression
**do**
	commande
**done**

```bash
sgoncal1@goya:~$ N=5
sgoncal1@goya:~$ while [ $N -ge 0 ]; do echo $N; N=$(expr $N - 1); done
5
4
3
2
1
0
```

-ge : *GREATER OR EQUAL*

### Conditionnelle if

**if** expression boolean (TRUE or FALSE)

Pour une expression boolean, on dispose de la commande **test**.

**test** arg1[arg2......]

test -f -r -w -s -d <chemin>

```bash
sgoncal1@goya:~$ test -f /bin/pwd
sgoncal1@goya:~$ echo $?
0
sgoncal1@goya:~$ test -f /binn/pwd
sgoncal1@goya:~$ echo $?
1
```
> NOTE : voir man test

Mais l'informaticien à souvent la flemme : test -> [

> NOTE : voir man [

**ATTENTION** il faut séparer le crochet, ou plutôt la commande UNIX, avec un espace.

**Syntaxe du if :**

if test -f /bin/pwd **OU** if [ -f /bin/pwd ]
**then**
	cmd
**else**
	cmd
**fi**

test <chaine1> = <chaine2>
test <chaine1> != <chaine2>

Lorsque les chaines sont des nombres :
test <chaine1> **-eq -ne -gt -ge -lt -le** <chaine2>

+ eq : *equal*
+ ne : *not equal*
+ gt : *greater than*
+ ge : *greater or equal*
+ lt : *lesser than*
+ le : *lesser or equal*

**Vrai syntaxe du if**

**if** expr bool
**then**
	<liste>
**elif** expr bool
**then**
	<liste>
**else**
	<liste>
**fi**

> NOTE : voir man bash

## LES SCRIPTS SHELLS

Exécution de commandes dans un script.

Toujours commencer le sript par : **#!/bin/<le shell exécuté>**
Ici : #!/bin/bash

**Le passage d'arguments en 1 script-shell**

\#!/bin/bash

echo "Le processus ouvrant est $0"
echo "Il y a $# paramètres"
echo "Les paramètres sont"
for i in $*
do
    echo $i
done

```bash
sgoncal1@goya:~/UtilisationUnix/fichiers-de-donnees$ chmod u+x essai.sh
sgoncal1@goya:~/UtilisationUnix/fichiers-de-donnees$ ./essai.sh FOO 42 XIII
Le processus ouvrant est ./essai.sh
Il y a 3 paramètres
Les paramètres sont
FOO
42
XIII
```

**Quelques cas particulier avec la substitution de chemin**

```bash
sgoncal1@goya:~$ find . -name "*.txt" -print
./.config/libreoffice/4/user/uno_packages/cache/log.txt
./.subversion/README.txt
./.mozilla/firefox/y17f8ysk.default/AlternateServices.txt
./.mozilla/firefox/y17f8ysk.default/SecurityPreloadState.txt
./.mozilla/firefox/y17f8ysk.default/SiteSecurityServiceState.txt
./.mozilla/firefox/y17f8ysk.default/revocations.txt
./.pki/nssdb/pkcs11.txt
./.thunderbird/gppuvqv8.default/SiteSecurityServiceState.txt
./.thunderbird/gppuvqv8.default/revocations.txt
./.thunderbird/gppuvqv8.default/SecurityPreloadState.txt
./.thunderbird/gppuvqv8.default/AlternateServices.txt
./.atom/packages/markdown-preview-enhanced/node_modules/@shd101wyy/mume/dependencies/katex/images/Image-Licensing-and-Technical-Notes.txt
^C
```
Pour éviter la substitution de chemin, ne pas oublier les doubles quotes.
