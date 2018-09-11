# Tuto Bros-Bioinfo
## Le Matos
Alors pour pouvoir participer à cette merveilleuse aventure, il vous faudra :
- Linux
- Tree
```shell
sudo apt-get install tree
```
- Et Voilà!

## Initialisation

Pour commencer :
```shell
git clone https://github.com/bros-bioinfo/bros-bioinfo.github.io
```
Ensuite dirigez vous vers le dossier qui vient d'être créé à votre racine 
```shell
cd bros-bioinfo.github.io/
```
> Petite astuce, plutôt que de tout taper exactemment, commencez par `cd bro` puis pressez tab pour une complétion automatique des familles

Pour pouvoir par la suite partager, il vous faudra configurer votre git avec vos identifients utilisés pour votre compte github:
```shell
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

## La gestion

Avant de manipuler vos fichiers, afin qu'il soient à jour vis à vis du git-hub, il faut toujours commencer par:
```shell
git pull
```

Je répète, **TOUJOURS** commencer par :
```shell
git pull
```

Ensuite vous pouvez modifier des fichiers, en créer de nouveaux, bref, faire votre vie !  
## Le partage
Une fois que vous aurez fini cette dite vie et que vous souhaitez transmettre votre héritage au monde grâce au **WEB**, il vous suffira alors de réaliser cette commande, toujours depuis votre dossier /bros-bioinfo.github.io

```shell
./jithub.sh Message_decrivant_les_modifs_aportees_sans_espace
```
Et voila, le fruit de votre dûr labeur ce trouve sur le **W**orld **W**ide **W**eb  
Toutes mes félicitations
## PS
En cas de problèmes, vous pouvez harceler PeePan( *#1064* ) sur Discord, le fabuleux créateur de bros-bioinfo :smile: 