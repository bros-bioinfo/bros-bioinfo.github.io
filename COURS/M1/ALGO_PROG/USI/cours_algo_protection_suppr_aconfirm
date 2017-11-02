# Protection et accès

Un fichier/répertoire appartient à

- un utilisateur = propriétaire
- un groupe Unix (pas forcement celui de son propriétaire) Trois type d'accès sont définis :
- pour un fichier : lecture, écriture, exécution
- pour un répertoire : lecture, écriture, traverser

On définit le mode d'accès : accès à la lecture **(r)**, écriture **(w)**, execution/traverser **(x)** pour propriétaire **(u)**, les membres du groupe Unix **(g)**, tous les autres **(o)**.

rwx | rwx | rwx
--- | --- | ---
u   | g   | o

Exemple : rw-r----- foot.txt

Les droits d'accès sont modifiable par code unix : **chmod**

```sh
chmod u=+rwx,g=+rw,o=+r toto.txt
```
