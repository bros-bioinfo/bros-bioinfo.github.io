# 1- Alias

```sh
sgoncal1@goya:~$ source .bashrc
sgoncal1@goya:~$ man du
sgoncal1@goya:~$ man man
sgoncal1@goya:~$ alias
alias grep='grep --color=auto'
alias ll='ls -la'
alias ls='ls --color=auto'
alias man='man -L en'
alias rm='rm -i'
sgoncal1@goya:~$ alias ls="date"
sgoncal1@goya:~$ ls
mardi 26 septembre 2017, 13:30:08 (UTC+0200)
sgoncal1@goya:~$ unalias ls
sgoncal1@goya:~$ alias ls="ls --color=auto"
sgoncal1@goya:~$ ls
42                        Lancer emacs | Bros-Bioinfo_fichiers  STAT        toto.txt
Algo_cours                Lancer emacs | Bros-Bioinfo.pdf       TD_ALGO     UtilisationUnix
Bureau                    PYTHON                                TDM_R
cours_algo_protection.md  R                                     tdstat.zip
espaces                   sentinelle.csv                        test2.R
```

# 2- Protection

```sh
sgoncal1@goya:~$ ls -l
total 8900
drwxr-xr-x 2 sgoncal1 grp30001    4096 sept. 19 16:58 42
drwxr-xr-x 2 sgoncal1 grp30001    4096 sept. 26 13:32 Algo_cours
drwxr-xr-x 2 sgoncal1 grp30001    4096 juil. 17  2013 Bureau
-rw-r--r-- 1 sgoncal1 grp30001     693 sept. 19 17:01 cours_algo_protection.md
drwx------ 2 sgoncal1 grp30001    4096 août  30 12:27 espaces
drwxr-xr-x 2 sgoncal1 grp30001    4096 sept. 22 09:26 Lancer emacs | Bros-Bioinfo_fichiers
-rw-r--r-- 1 sgoncal1 grp30001   15751 sept. 22 09:26 Lancer emacs | Bros-Bioinfo.pdf
drwxr-xr-x 2 sgoncal1 grp30001    4096 sept. 22 12:03 PYTHON
drwxr-xr-x 3 sgoncal1 grp30001    4096 sept. 11 13:21 R
-rw-r--r-- 1 sgoncal1 grp30001    1459 sept. 25 09:46 sentinelle.csv
drwxr-xr-x 3 sgoncal1 grp30001    4096 sept. 25 08:41 STAT
drwxr-xr-x 2 sgoncal1 grp30001    4096 sept. 21 23:04 TD_ALGO
drwxr-xr-x 2 sgoncal1 grp30001    4096 sept. 11 18:39 TDM_R
-rw-r--r-- 1 sgoncal1 grp30001 8997453 sept. 25 08:40 tdstat.zip
-rw-r--r-- 1 sgoncal1 grp30001    1329 sept. 25 13:23 test2.R
-rwxrw-r-- 1 sgoncal1 grp30001       0 sept. 19 16:52 toto.txt
drwxr-xr-x 3 sgoncal1 grp30001    4096 sept. 19 15:40 UtilisationUnix
```

```sh
sgoncal1@goya:~$ chmod u=-r+w test-droits.txt
sgoncal1@goya:~$ ls -l
total 8900
drwxr-xr-x 2 sgoncal1 grp30001    4096 sept. 19 16:58 42
drwxr-xr-x 2 sgoncal1 grp30001    4096 sept. 26 13:40 Algo_cours
drwxr-xr-x 2 sgoncal1 grp30001    4096 juil. 17  2013 Bureau
-rw-r--r-- 1 sgoncal1 grp30001     693 sept. 19 17:01 cours_algo_protection.md
drwx------ 2 sgoncal1 grp30001    4096 août  30 12:27 espaces
drwxr-xr-x 2 sgoncal1 grp30001    4096 sept. 22 09:26 Lancer emacs | Bros-Bioinfo_fichiers
-rw-r--r-- 1 sgoncal1 grp30001   15751 sept. 22 09:26 Lancer emacs | Bros-Bioinfo.pdf
drwxr-xr-x 2 sgoncal1 grp30001    4096 sept. 22 12:03 PYTHON
drwxr-xr-x 3 sgoncal1 grp30001    4096 sept. 11 13:21 R
-rw-r--r-- 1 sgoncal1 grp30001    1459 sept. 25 09:46 sentinelle.csv
drwxr-xr-x 3 sgoncal1 grp30001    4096 sept. 25 08:41 STAT
drwxr-xr-x 2 sgoncal1 grp30001    4096 sept. 21 23:04 TD_ALGO
drwxr-xr-x 2 sgoncal1 grp30001    4096 sept. 11 18:39 TDM_R
-rw-r--r-- 1 sgoncal1 grp30001 8997453 sept. 25 08:40 tdstat.zip
-rw-r--r-- 1 sgoncal1 grp30001    1329 sept. 25 13:23 test2.R
--w-r--r-- 1 sgoncal1 grp30001      15 sept. 26 13:38 test-droits.txt
-rwxrw-r-- 1 sgoncal1 grp30001       0 sept. 19 16:52 toto.txt
drwxr-xr-x 3 sgoncal1 grp30001    4096 sept. 19 15:40 UtilisationUnix
sgoncal1@goya:~$ cat test-droits.txt
cat: test-droits.txt: Permission non accordée
sgoncal1@goya:~$ chmod u=r+w test-droits.txt
sgoncal1@goya:~$ cat test-droits.txt
Hello World !
```
# 3-  Visite de l'arborescence d'Unix

```sh
sgoncal1@goya:~$ cd /
sgoncal1@goya:/$ ls
sgoncal1@goya:/$ ls -l
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

```sh
sgoncal1@goya:/$ cd bin/
sgoncal1@goya:/bin$ ls -l
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

```sh
sgoncal1@goya:/bin$ cd ../tmp/
sgoncal1@goya:/tmp$ ls -l
total 36
drwx------ 12 sgoncal1 grp30001 4096 sept. 26 13:59 cache-sgoncal1
drwx------  2 root     root     4096 sept. 26 13:06 kde-root
-rw-------  1 sgoncal1 grp30001  849 sept. 26 13:07 krb5cc_14906_0hFlml
drwx------  2 root     root     4096 sept. 26 13:06 ksocket-root
drwxr-xr-x  2 nagios   nagios   4096 sept. 26 13:06 packages_updated
drwx------  2 root     root     4096 sept. 26 13:06 pulse-PKdhtXMmr18n
drwx------  2 timidity timidity 4096 sept. 26 13:07 pulse-Z3Wh4QpIBPPr
drwx------  2 sgoncal1 grp30001 4096 sept. 26 13:07 ssh-WIJf8WKneSUI
drwx------  3 root     root     4096 sept. 26 13:06 systemd-private-e87b5b1e525f4943b52d57c6c925ee17-rtkit-daemon.service-JPKq3k
sgoncal1@goya:/tmp$ cd ../dev/
sgoncal1@goya:/dev$ ls -l
total 0
crw-rw----+ 1 sgoncal1 audio      14,   4 sept. 26 13:06 audio
crw-------  1 root     root       10, 235 sept. 26 13:06 autofs
drwxr-xr-x  2 root     root           120 sept. 26 13:05 block
drwxr-xr-x  2 root     root            80 sept. 26 13:05 bsg
crw-rw----  1 root     disk       10, 234 sept. 26 13:06 btrfs-control
drwxr-xr-x  3 root     root            60 sept. 26 13:05 bus
lrwxrwxrwx  1 root     root             3 sept. 26 13:06 cdrom -> sr0
drwxr-xr-x  2 root     root          3280 sept. 26 13:07 char
crw-------  1 root     root        5,   1 sept. 26 13:06 console
lrwxrwxrwx  1 root     root            11 sept. 26 13:05 core -> /proc/kcore
drwxr-xr-x  2 root     root            60 sept. 26 13:05 cpu
crw-------  1 root     root       10,  62 sept. 26 13:06 cpu_dma_latency
crw-------  1 root     root       10, 203 sept. 26 13:06 cuse
drwxr-xr-x  7 root     root           140 sept. 26 13:05 disk
drwxr-xr-x  2 root     root            80 sept. 26 13:06 dri
crw-rw----+ 1 sgoncal1 audio      14,   3 sept. 26 13:06 dsp
lrwxrwxrwx  1 root     root             3 sept. 26 13:06 dvd -> sr0
lrwxrwxrwx  1 root     root            13 sept. 26 13:05 fd -> /proc/self/fd
crw-rw-rw-  1 root     root        1,   7 sept. 26 13:06 full
crw-rw-rw-  1 root     root       10, 229 sept. 26 13:07 fuse
```

```sh
sgoncal1@goya:/dev$ cd ../usr/share/man
sgoncal1@goya:/usr/share/man$ ls -l
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
