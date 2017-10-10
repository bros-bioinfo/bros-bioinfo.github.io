# SHELL
## Fonctionnement du SHELL
### 1) Phase de suivie

### 2) Phase de substitutions
Une commande UNIX simple:

```bash
mot0 [mot1 mot2 mot3 ...] [redirections]
#commande [arguments] [redirections]
```
Il y a trois phases de substitutions:

#### a) Remplacement de VARIABLES
Exemples:
```bash
foo=XIII
echo foo
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

#### b) Remplacement de COMMANDES

#### c) Remplacement de CHEMINS

### 3) Phase d'execution
Si commande interne celle-ci est executée, sinon recherche de la commande dans le **Path**.
