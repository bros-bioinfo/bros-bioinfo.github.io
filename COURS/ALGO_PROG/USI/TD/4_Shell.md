# SHELL
## I. Fonctionnement du SHELL
### 1) Phase de suivie

### 2) Phase de substitutions
Une commande UNIX simple:

```bash
mot0 [mot1 mot2 mot3 ...] [redirections]
#commande [arguments] [redirections]
```
Il y a trois phases de substitutions:

#### a) Remplacement de VARIABLES $
Exemples:
```bash
foo=XIII
echo $foo #return la valeur de foo: XIII
```
Ici le shell remplace ***echo $foo*** par ***echo XIII*** avant l'execution de la commande

```bash
RAC=/bin
echo $RAC/pwd
#on obtient /bin/pwd

$RAC/pwd
#execute la commande /bin/pwd
```

On peut créer des **vecteurs de variables:**

```bash
set mot1 mot2 mot3
echo $2 #return mot2
echo $1 #return mot1
echo $* #return la liste de tous les élements du vecteur
echo $@ #return la liste de tous les élements du vecteur
echo $# #return le nombre d'éléments du vecteur
echo $1,$2,$3
shift
echo $1,$2,$3 # décale la liste vers la gauche $1 est perdu et est remplacé par $2
echo $0   #return le nom du processus qui execute $0 (ici bash)
echo $$   #return le PID sur shell
echo $!   #return le PID du dernier processus détaché
```
Les préfixes:
```bash
PREFIXE="TMP_"
M1=${PREFIXE}1
echo $M1 #return TMP_1
```

#### b) Remplacement de COMMANDES $()
```bash
$(commande simple)
echo $(date) : $(who | wc -l) utilisateurs sur $(hostname)
# > mardi 10 octobre 2017, 14:49:19 (UTC+0200) : 3 utilisateurs sur marquet

set $(date); echo $5 #vectorise la date et renvoie le 5eme terme... l'heure
```

#### c) Remplacement de CHEMINS

**Trois motifs**:
  - (*) : suite éventuellement vide de charactère(s)
  - (?) : un charactère random
  - [alphabet]:
    - [AEIOUY] → [AEIOUYaeiouy]
    - [A-Z] → alphabet de A à Z
    - [3-7] → 3 4 5 6 7

```bash
echo /bin/[a-c]? #echo tous les chemins commençant par a b ou c et ayant un seul charactère après.
```


### 3) Phase d'execution
Si commande interne celle-ci est executée, sinon recherche de la commande dans le **Path**.

## II. Mecanismes de Quotation (controle plus fin des substitutions)

### 1) Despecialisation:
```bash
echo * #echo la liste des fichiers du dossier courant
echo \* #echo le charactère *
```
### 2) Simple quote \'

La simple quote neutralise toutes les substitutions.

```bash
echo '$date' #renvoie $date
```

### 3) Double quote \"

La double quote inhibe la substitution de chemin.

```bash
echo '/bin/[a-c]?' # return /bin/[a-c]?
N = '/bin/[a-c]?'
echo $N #renvoie /bin/[a-c]? puis substitution de chemin: cherche les chemins et echo toute la liste.

echo '$N' #renvoie $N
echo "$N" #renvoie /bin/[a-c]?
```

## III. Structure de contrôle

**Boucle for**:

```bash
for variable in liste delement
do
  commandes
done
```
**expr**

```bash
expr 3 + 4
```

**Boucle while**:

```bash
while expression
do
  commandes
done
```
**La conditionnelle if**:

```bash
if expr-bool
then
  liste de commandes

elif expr-bool
then
  liste de commandes

else
  liste de commandes

fi
```
