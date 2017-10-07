# TD2_UNIX
### 1) Description et utilisation de commandes Unix
#### 1.1 Commande exit
Permet de sortir du terminal.

#### 1.2 Commandes

```console
s3b@s3b-N750BU:~$ who
s3b      tty7         2017-09-14 12:31 (:0)
s3b@s3b-N750BU:~$ date
jeudi 14 septembre 2017, 12:33:41 (UTC+0200)
s3b@s3b-N750BU:~$ cal
   Septembre 2017
di lu ma me je ve sa
                1  2
 3  4  5  6  7  8  9
10 11 12 13 14 15 16
17 18 19 20 21 22 23
24 25 26 27 28 29 30

s3b@s3b-N750BU:~$ echo

```
#### 1.3 man cal
(voir terminal)

#### 1.4 du sh ~
```sh
s3b@s3b-N750BU:~$ du sh ~
4	/home/s3b/.gnupg/private-keys-v1.d
12	/home/s3b/.gnupg
4	/home/s3b/Public
24	/home/s3b/htop-2.0.2/darwin/.deps
88	/home/s3b/htop-2.0.2/darwin
24	/home/s3b/htop-2.0.2/unsupported/.deps
72	/home/s3b/htop-2.0.2/unsupported
320	/home/s3b/htop-2.0.2/m4
56	/home/s3b/htop-2.0.2/linux/.deps
460	/home/s3b/htop-2.0.2/linux
8	/home/s3b/htop-2.0.2/scripts
...
```
du : Permet de visualiser l'utilisation du disque dur par l'ensemble des fichiers, récursivement des dossiers.

#### 1.5 man en anglais
```
s3b@s3b-N750BU:~$ man -L en du
```

### 2) Interprète de commandes
On peut éditer la ligne de commande :

+   déplacement dans la liste des commandes (historique)

| Ctrl + ..... | Explication |
| ------- | --------------------------- |
| p ou Up | (previous) : commande précédente |
| n ou Down | (next) : commande suivante |
| r | (reverse search) : recherche dans l’historique |

+   déplacement du curseur dans la ligne

| Ctrl + ..... | Explication |
| ------- | --------------------------- |
| a ou Home | (abcdef...) : début de ligne |
| e ou End | (end) : fin de ligne |
| b ou Left | (backward) : caractère précédent |
| f ou Right  | (forward) : caractère suivant |

+   suppressions :

| Ctrl + ..... | Explication |
| ------- | --------------------------- |
| d ou Suppr | (delete) : caractère sous le curseur
| _(pas ctlr)_ DEL | caractère précédent le curseur |
| k | (kill) : jusqu’à la fin de ligne |

+   validation/annulation

| Ctrl + .....                  | Explication                                |
| ----------------------------- | ------------------------------------------ |
| _(pas ctrl)_ Return ou Ctlr-j | validation de la ligne                     |
| c                             | (cancel) : annulation de la ligne en cours |

## 3) Visite de l'arborescence utilisateur
### 3.1
```sh
s3b@s3b-N750BU:~$ pwd
/home/s3b
s3b@s3b-N750BU:~$ cd ..
s3b@s3b-N750BU:/home$ pwd
/home
s3b@s3b-N750BU:/home$ ls
s3b
s3b@s3b-N750BU:/home$
```
### 3.2
```sh
s3b@s3b-N750BU:/home$ ls e s3b/ //après TAB
s3b@s3b-N750BU:/home$ cd e s3b/
```
### 3.3
```sh
s3b@s3b-N750BU:~$ cd Bureau/
s3b@s3b-N750BU:~/Bureau$ pwd
/home/s3b/Bureau
s3b@s3b-N750BU:~/Bureau$ cd
```
### 3.5 Arborescence dessin

![arb.png_001](https://i.imgur.com/kiHLjeV.png)

### 3.6 ls -option

```sh
s3b@s3b-N750BU:/$ ls -larth
total 52M
drwxr-xr-x   2 root root 4,0K avril 19  2016 snap
drwxr-xr-x   2 root root 4,0K avril 21  2016 srv
drwxr-xr-x   2 root root 4,0K avril 21  2016 opt
drwxr-xr-x   2 root root 4,0K avril 21  2016 mnt
drwxr-xr-x  11 root root 4,0K avril 21  2016 usr
drwx------   2 root root  16K juil. 10 19:55 lost+found
drwxrwxr-x   2 root root 4,0K juil. 10 20:01 cdrom
drwxr-xr-x   3 root root 4,0K juil. 10 20:04 home
drwxr-xr-x   3 root root 4,0K juil. 10 21:52 media
drwxr-xr-x   2 root root 4,0K juil. 10 22:25 lib64
drwxr-xr-x  25 root root 4,0K juil. 11 10:45 lib
drwxr-xr-x  15 root root 4,0K juil. 11 18:30 var
-rw-------   1 root root  53M juil. 28 19:13 core
lrwxrwxrwx   1 root root   32 sept.  2 12:12 initrd.img.old -> boot/initrd.img-4.4.0-93-generic
lrwxrwxrwx   1 root root   29 sept.  2 12:12 vmlinuz.old -> boot/vmlinuz-4.4.0-93-generic
lrwxrwxrwx   1 root root   33 sept.  2 12:13 initrd.img -> boot/initrd.img-4.10.0-33-generic
lrwxrwxrwx   1 root root   30 sept.  2 12:13 vmlinuz -> boot/vmlinuz-4.10.0-33-generic
drwxr-xr-x  24 root root 4,0K sept.  2 12:13 ..
drwxr-xr-x  24 root root 4,0K sept.  2 12:13 .
drwxr-xr-x   2 root root 4,0K sept. 14 09:46 bin
dr-xr-xr-x 238 root root    0 sept. 15 08:41 proc
dr-xr-xr-x  13 root root    0 sept. 15 08:41 sys
drwxr-xr-x  20 root root 4,1K sept. 15 08:41 dev
drwxr-xr-x  33 root root 1,1K sept. 15 08:42 run
drwxr-xr-x   2 root root  12K sept. 15 08:48 sbin
drwxr-xr-x   5 root root 4,0K sept. 15 08:49 boot
drwx------  10 root root 4,0K sept. 15 08:50 root
drwxr-xr-x 151 root root  12K sept. 15 09:42 etc
drwxrwxrwt  20 root root 4,0K sept. 15 09:58 tmp
```

## 4) Création et supression de répertoire

```sh
s3b@s3b-N750BU:~$ mkdir Projets
s3b@s3b-N750BU:~$ mkdir tmp
s3b@s3b-N750BU:~$ mkdir eclair
s3b@s3b-N750BU:~$ cd eclair/
s3b@s3b-N750BU:~/eclair$ rmdir ../eclair/
s3b@s3b-N750BU:~/eclair$ cd ..
s3b@s3b-N750BU:~$ rmdir eclair
rmdir: échec de suppression de 'eclair': Aucun fichier ou dossier de ce type
s3b@s3b-N750BU:~$ ls -F
backups/                         htop-2.0.2/                   R/
backups_suppr/                   htop-2.0.2.tar.gz             README
Bureau/                          Images/                       resultats.log
casino/                          linux-firmware_1.161_all.deb  selection_vimtutor
correction_premier_programme.py  Modèles/                      sortiefind
deja-dup/                        Musique/                      Téléchargements/
Documents/                       my_ca/                        test_vimtutor
erreurs.log                      nettoyage.sh*                 tmp/
examples.desktop                 nohup.out                     TouchpadIndicator/
fichiers/                        notes.csv.gz                  upgrade
fichiers.tar                     Projets/                      Vidéos/
fichiers.tar.gz                  Public/
s3b@s3b-N750BU:~$ rmdir ~
rmdir: échec de suppression de '/home/s3b': Permission non accordée
```
## 5) Manipilation de fichiers
### 5.1 Copie
```sh
s3b@s3b-N750BU:~$ mkdir test
s3b@s3b-N750BU:~$ cd test
s3b@s3b-N750BU:~/test$ touch doc1.html
s3b@s3b-N750BU:~/test$ touch doc2.html
s3b@s3b-N750BU:~/test$ ls
doc1.html  doc2.html
s3b@s3b-N750BU:~/test$ mkdir ~/temp
s3b@s3b-N750BU:~/test$ cp doc1.html doc2.html ~/temp
s3b@s3b-N750BU:~/test$ ls ~/tmp/
s3b@s3b-N750BU:~/test$ ls ~/temp/
doc1.html  doc2.html
```
### 5.2 Suppression
```sh
s3b@s3b-N750BU:~/test$ rm doc2.html
s3b@s3b-N750BU:~/test$ ls
doc1.html
s3b@s3b-N750BU:~/test$ rm ~/temp/doc1.html
s3b@s3b-N750BU:~/test$ ls
doc1.html
s3b@s3b-N750BU:~/test$ cd ~/temp/
s3b@s3b-N750BU:~/temp$ ls
doc2.html
s3b@s3b-N750BU:~/temp$ rm -i doc2.html
rm : supprimer fichier vide 'doc2.html' ? y
```

### 5.3 Déplacement et renommage
#### 5.3.1
```sh
s3b@s3b-N750BU:~$ cd ~/test/
s3b@s3b-N750BU:~/test$ ls
doc1.html
s3b@s3b-N750BU:~/test$ mv doc1.html doc.html
s3b@s3b-N750BU:~/test$ ls -F
doc.html
s3b@s3b-N750BU:~/test$ mv doc.html ..
s3b@s3b-N750BU:~/test$ ls -F
s3b@s3b-N750BU:~/test$ ls -F ..
doc.html
s3b@s3b-N750BU:~/test$ mv ../doc.html .
s3b@s3b-N750BU:~/test$ ls -F ..
s3b@s3b-N750BU:~/test$ ls -F
doc.html
```
```sh
s3b@s3b-N750BU:~$ mkdir test_dir
s3b@s3b-N750BU:~$ mkdir test_dir/essai
s3b@s3b-N750BU:~$ cd test_dir/
s3b@s3b-N750BU:~/test_dir$ ls
essai
s3b@s3b-N750BU:~/test_dir$ cd essai/
s3b@s3b-N750BU:~/test_dir/essai$ ls
s3b@s3b-N750BU:~/test_dir/essai$ touch essai.txt autre_essai
s3b@s3b-N750BU:~/test_dir/essai$ ls
autre_essai  essai.txt
s3b@s3b-N750BU:~/test_dir/essai$ cd ..
s3b@s3b-N750BU:~/test_dir$ touch texte1.txt texte2.txt
s3b@s3b-N750BU:~/test_dir$ ls
essai  texte1.txt  texte2.txt
```
```sh
s3b@s3b-N750BU:~/test_dir$ mkdir textes
s3b@s3b-N750BU:~/test_dir$ mv texte1.txt texte2.txt textes/
s3b@s3b-N750BU:~/test_dir$ ls
essai  textes
s3b@s3b-N750BU:~/test_dir$ cd textes/
s3b@s3b-N750BU:~/test_dir/textes$ ls
texte1.txt  texte2.txt
```
```sh
s3b@s3b-N750BU:~/test_dir/textes$ mv t* ..
s3b@s3b-N750BU:~/test_dir/textes$ ls
s3b@s3b-N750BU:~/test_dir/textes$ ls ..
essai  texte1.txt  texte2.txt  textes
s3b@s3b-N750BU:~/test_dir/textes$ cd ..
s3b@s3b-N750BU:~/test_dir$ mv t*.txt essai
s3b@s3b-N750BU:~/test_dir$ ls
essai  textes
s3b@s3b-N750BU:~/test_dir$ mv essai/*essai.txt textes/
s3b@s3b-N750BU:~/test_dir$ cd textes/
s3b@s3b-N750BU:~/test_dir/textes$ ls
essai.txt
s3b@s3b-N750BU:~/test_dir/textes$ mv ../essai/autre_essai autre_essai.txt
s3b@s3b-N750BU:~/test_dir/textes$ cd ../essai/
s3b@s3b-N750BU:~/test_dir/essai$ ls
texte1.txt  texte2.txt
s3b@s3b-N750BU:~/test_dir/essai$ cd ../textes/
s3b@s3b-N750BU:~/test_dir/textes$ ls
autre_essai.txt  essai.txt
```
```sh
s3b@s3b-N750BU:~/test_dir/textes$ cd ..
s3b@s3b-N750BU:~/test_dir$ cp essai textes
cp: omission du répertoire 'essai'
s3b@s3b-N750BU:~/test_dir$ cp -R  essai textes
s3b@s3b-N750BU:~/test_dir$ ls
essai  textes
s3b@s3b-N750BU:~/test_dir$ cd essai/
s3b@s3b-N750BU:~/test_dir/essai$ ls
texte1.txt  texte2.txt
s3b@s3b-N750BU:~/test_dir/essai$ cd ../textes/
s3b@s3b-N750BU:~/test_dir/textes$ ls
autre_essai.txt  essai  essai.txt
s3b@s3b-N750BU:~/test_dir/textes$ cd ..
```
