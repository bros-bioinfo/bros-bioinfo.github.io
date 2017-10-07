# PROCESSUS

### 1 La notion de processus Unix

``man uname``

### 2 Première vision des processus

```console
s3b@s3b-N750BU:~$ xload

^Z
[1]+  Arrêté                xload
s3b@s3b-N750BU:~$ jobs
[1]+  Arrêté                xload
s3b@s3b-N750BU:~$ fg
xload
^Z
[1]+  Arrêté                xload
s3b@s3b-N750BU:~$ bg
[1]+ xload &
s3b@s3b-N750BU:~$ xload

^Z
[1]+  Arrêté                xload
s3b@s3b-N750BU:~$ jobs
[1]+  Arrêté                xload
s3b@s3b-N750BU:~$ fg
xload
^Z
[1]+  Arrêté                xload
s3b@s3b-N750BU:~$ bg
[1]+ xload &
s3b@s3b-N750BU:~$ atom &
[2] 4085
[1]   Fini                    xload
s3b@s3b-N750BU:~$ ^C
[2]+  Fini                    atom
s3b@s3b-N750BU:~$ xload
^Z
[1]+  Arrêté                xload
s3b@s3b-N750BU:~$ jobs
[1]+  Arrêté                xload
s3b@s3b-N750BU:~$ kill -9 %1

[1]+  Arrêté                xload
s3b@s3b-N750BU:~$ ps
  PID TTY          TIME CMD
 1985 pts/17   00:00:00 bash
 4096 pts/17   00:00:00 atom
 4098 pts/17   00:00:25 atom
 4100 pts/17   00:00:00 atom
 4124 pts/17   00:00:27 atom
 4135 pts/17   00:00:46 atom
 4200 pts/17   00:00:00 atom
 4437 pts/17   00:00:00 ps
[1]+  Processus arrêté      xload
s3b@s3b-N750BU:~$ ps -f
UID        PID  PPID  C STIME TTY          TIME CMD
s3b       1985  1783  0 21:32 pts/17   00:00:00 /bin/bash
s3b       4096  1308  0 22:14 pts/17   00:00:00 /bin/bash /usr/bin/atom
s3b       4098  4096  6 22:14 pts/17   00:00:25 /usr/share/atom/atom --executed-from=/home/s3b --pid=4085
s3b       4100  4098  0 22:14 pts/17   00:00:00 /usr/share/atom/atom --type=zygote --no-sandbox
s3b       4124  4098  7 22:14 pts/17   00:00:27 /usr/share/atom/atom --type=gpu-process --no-sandbox --supports-dual-gpus=false --gpu-driver-bug-workarounds=1,7,23,
s3b       4135  4100 12 22:14 pts/17   00:00:46 /usr/share/atom/atom --type=renderer --enable-experimental-web-platform-features --no-sandbox --primordial-pipe-toke
s3b       4200  4100  0 22:14 pts/17   00:00:00 /usr/share/atom/atom --type=renderer --enable-experimental-web-platform-features --no-sandbox --primordial-pipe-toke
s3b       4442  1985  0 22:20 pts/17   00:00:00 ps -f
```
