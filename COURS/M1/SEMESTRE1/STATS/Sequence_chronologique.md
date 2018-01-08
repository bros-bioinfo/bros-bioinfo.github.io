# Initiation au sequence chronologique

![Sélection_016](https://i.imgur.com/jzdGzh2.png)

![Sélection_017](https://i.imgur.com/iXZEJ1V.png)

On est en présence d'une fluctuation correspondant un **cycle saisonnier**. On peut remarquer que les valeurs minimales peuvent être différentes d'une année à l'autre.

![Sélection_018](https://i.imgur.com/ATsaYFU.png)

Echelle temporelle de type decennale.

![Sélection_019](https://i.imgur.com/Oy6poVR.png)

Sonde qui mesure toutes les 10 minutes pendant un intervalle de temps grand.
Cycle annuel : on a **52560 données**, beaucoup plus que l'exemple précedent.
Après un zoom, on peut remarquer la présence d'un **cycle jour/nuit** dû à la prise de données de pas 10 min (en mois il aurait été impossible de voir le cycle).

![Sélection_020](https://i.imgur.com/RCNvLtt.png)

Diminution de la température. On ne voit plus le cycle saisonnier dû au **pas de 1000 ans** de prise de données.

![Sélection_021](https://i.imgur.com/tXN6le3.png)

Différents suivis selon le pas temporel. En fonction du suivi on est pas forcément sur les même **variabilités**. Le pas d'échantillonage et la longueur de la série (20,50 ans ...) vont influencer la **variabilité temporelle**.

![Sélection_022](https://i.imgur.com/mqtDdzS.png)

Difference entre **série régulière et irrégulière**. L'irrégularité peut être dû à l'équipement, au personnel ou une absence de données. L'irrégularité est visible au niveau du pas et des trous sur les mesures.

![Sélection_023](https://i.imgur.com/ETFXXAw.png)

Définir une évolution générale "majeure".
+ Tendance générale
+ Apparition/disparition d'une espèce
+ Détecter des changements abrupts : on est pas en présence de tendance lineaire mais de **SHIFT**.

![Sélection_024](https://i.imgur.com/Cm0MDYe.png)

Définir des états moyen de référence.
Obtenir une année type via l'étude de la variabilité individuelle = **Cycle saisonnier**.

![Sélection_025](https://i.imgur.com/tXVAyKv.png)

Définir des cycles pluri-annuels.
Cyclicité régulière : on les retrouvent souvent dans les données courantes de variabilité.

Toutes les étapes de définitions précédentes font parties de l'étape de description (**DECRIRE**).

![Sélection_027](https://i.imgur.com/iIUG6Tg.png)

Etudier les relations entre series = **"EXPLIQUER"**.
Permet d'expliquer une série par des variables environnementales (O2, azote etc ...).

> Exemple : relier les cyles pluriannuels d'une espece aux indices climatiques.

![Sélection_026](https://i.imgur.com/GfcSXsF.png)

Modéliser leurs évolutions futures = **"PREDIRE"**. Via des test stat précédemment vues.

![Sélection_028](https://i.imgur.com/UP2LK56.png)

Analyser une série c'est prendre en compte toutes les **variabilités temporelles** qu'elle contient. On va décompenser cette série en differente **composantes**.
+ **Composante déterministe** : la tendance, il y en a une ou il n'y en pas !
+ **Composante systématiques** : le cycle, saisonnier, annuel, lunaire etc ... On peut en avoir 1 ou plusieurs.
+ **Evenements exceptionnels** : données à part.

La série se compose de ces trois principaux éléments plus le **BRUIT** qui est la **composante aléatoire**.
La série se défini par ces 4 grands types de composantes. On est en présence du **modèle additif simple** (avec addition).

![Sélection_029](https://i.imgur.com/md7XS68.png)

Comparaison entre modèle **additif simple et multiplicatif**.
Dans le multiplicatif, si la tendance augmente alors ça va augmenter l'**amplitude** de la série. L'inverse est valable aussi.
L'additif est plus simple à apréhender mais en temps normal on est en présence de modèle multiplicatif.

![Sélection_030](https://i.imgur.com/pirr8vn.png)

Limite de l'analyse de série.
Sur la série hydro, on ne pourra pas mettre en évidence un cycle de glaciation. Il faut alors définir une **fenêtre d'observation** pour savoir quelles cycles on peut regarder.

![Sélection_031](https://i.imgur.com/cvAwgx9.png)

A chaque série, il faut bien définir les cycles que l'on peut observer en fonction du **pas d'échantillonnage et de la longueur de la série**.

![Sélection_032](https://i.imgur.com/O4Dw3fx.png)

En fonction de la longueur de la série, une tendance relever par rapport à une série restreinte pourrait se révéler être un cycle pour une série plus longue. Il faut être très précis sur l'intervalle de temps.

![Sélection_033](https://i.imgur.com/Qbb3yI7.png)

Pour être sûr que c'est un cycle, il faut au moins le voir **deux fois dans une série**.
+ La période de  cycle max  qu'on peut voir : **Longueur/2**
+ La période de  cycle minimal qu'on peut voir : **2\*pas**

![Sélection_034](https://i.imgur.com/VfP8XME.png)

> Diapo 21 à 26 : Exo + Etude de cas voir diapo

+ Cycle NAO : de 8 ans.
+ Cycle nycthéméral : jour/nuit

![Sélection_035](https://i.imgur.com/ojI3DoX.png)

![Sélection_036](https://i.imgur.com/xsW9fIp.png)

+ Série de données : est ce qu'il y a des événements exeptionnels ?
+ Il faut **régulariser les données** -> Série de données régularisée : explorer les données par des méthodes de **décomposition**.
+ On va tester ensuite la présence d'une **tendance** sur les données régularisées par des test.
+ Si la tendance existe, alors on va l'**extraire** de la série.
+ Si je veux **étudier les cycles**, on doit enlever la tendance : on regarde l'existence d'un cycle sur la **série "detendancée"**.
+ Si par la suite la série est aléatoire on peut arrêter l'analyse, sinon on anlayse sa **variabilité**.

![Sélection_037](https://i.imgur.com/vIwF8L9.png)

Préparer la série - Définir la **fenêtre d'observation**.

![Sélection_038](https://i.imgur.com/P05kY57.png)

![Sélection_039](https://i.imgur.com/vyaLkny.png)

Détecter les données abbérantes / événements exceptionnels.
Il faut déterminer ce qui est abbérant de l'exceptionnel.
La question : on les garde ou pas ? Questionnement des **archives** (utilisateurs, extrême ou erreur de mesure ?).

![Sélection_040](https://i.imgur.com/PkgpsYw.png)

Méthode simple pour déterminer l'aberrance ou pas.
Fixer un **quantile de dispersion (0.5% - 99.5%)** afin de savoir si la valeur est abbérante.

![Sélection_041](https://i.imgur.com/0A1k8Z8.png)

Inconvénient de la méthode précédente.
Cette méthode simple introduit des **biais** si la série est marquée par de fortes tendances ou shifts.

![Sélection_042](https://i.imgur.com/wxoeqz9.png)

![Sélection_043](https://i.imgur.com/V4JTO1E.png)

Régularisation de ses données.
2 méthodes :
+ Première méthode : **dégrader les données**.
Exemple : Remplacer les valeurs d'une année par la moyenne sur l'année .

![Sélection_044](https://i.imgur.com/YYgwLGZ.png)

Inconvénient : **gommage d'une partie de la variabilité de la serie**.
Si on a pas mal de données extrêmes, il vaut mieux utiliser les **médianes** (pour éviter la perte d'info trop importante).

![Sélection_045](https://i.imgur.com/A7w1p6c.png)

+ Deuxième méthode : **Homogénéiser les données**. Cad interpolation des données (changer les valeurs manquantes par une nouvelle valeur).

  - **Interpolation linéaire** : moyenne entre la valeur d'avant et celle d'après (X4 X5 X6) . **Inconvénient** : lorqu'il manque deux valeurs de suite, la moyenne calculée risque de sous-estimer les pics et surestimer les cônes.
  - **Fonction SPLINE** : essayer de reproduire les cycles pas à pas en se calant sur les cycles existant. On arrive à estimer les pics qu'on devrait avoir. Elle peut donner une valeur au pas constant. C'est une **vrai régularisation**, ça permet de réestimer tous les points.

![Sélection_046](https://i.imgur.com/NTvQLAq.png)

Critères de régularisation :
+ Choix du **pas de temps** au plus près de celui de l'échantillonage.
+ Choix de la **date initiale** le plus tôt possible (première date de la serie, pas avant)
+ Choix de la **tolérance** : dans quelle mesure les données qui sont présentes sont pareils que les données d'un intervalle de temps choisie (j7 = j3 ?)

![Sélection_047](https://i.imgur.com/tguJZPN.png)

Résultat d'une régularisation de données.

![Sélection_048](https://i.imgur.com/n63TBGa.png)

![Sélection_049](https://i.imgur.com/QSCrvhS.png)

Analyser la tendance (existance, estimation et extraction)
+ Série stationnaire = pas de tendance
+ Non stationnaire , il y a présence d'une rupture = **shift**.

![Sélection_050](https://i.imgur.com/rQ6IL7r.png)

Se concentrer sur la variabilité interannuelle = **gommage de la variabilité autour de la tendance**.
On veut garder toutes les données tout en gommant la variabilité. On regarde la courbe rouge qui est la composante interannuelle sans variabilité (résultat finale)

![Sélection_051](https://i.imgur.com/6P9adgz.png)

Méthode filtrage linéaire des moyennes mobiles.
Moyenne des 5 première valur pour Y1, puis moyenne des 5 autres val avec une valeur en moins pour Y2 et ainsi de suite (pas = 5).

![Sélection_052](https://i.imgur.com/vn56wjB.png)

Tester l'existence d'une tendance sur les résultats précédents.

![Sélection_053](https://i.imgur.com/lBcVVXb.png)

Tau = coefficient de corrélation de Mann-Kendall.
Tau est définit dans :  **\-1\<Tau\<1**

![Sélection_054](https://i.imgur.com/TcmDUu6.png)

Estimer la tendance
Pour définir la droite on utilise la **régression linéaire ou autre**.

![Sélection_055](https://i.imgur.com/OLxEOer.png)

Enlever la tendance.
La droite obtenue précédemment est le **MODELE**, que l'on va soustraire à la **SERIE BRUTE**.

![Sélection_056](https://i.imgur.com/ltIyI7C.png)

![Sélection_057](https://i.imgur.com/onHIu53.png)

Pour estimer les cycles, on utilise la méthode la plus efficace : **Autocorrélation et corrélogramme**.

Si je prend toute la série, le coefficient de corrélation r = 1. Si on décale la série  à chaque fois, au bout d'un moment on va obtenir le cycle de nouveaux. Après avoir autocorellé la série avec elle même, et qu'on décale la série jusqu'à obtenir le cycle, on établie un **corrélogramme**.

![Sélection_058](https://i.imgur.com/Omb0qae.png)
![Sélection_059](https://i.imgur.com/ZNDzMDa.png)
![Sélection_060](https://i.imgur.com/c6FpFdD.png)

![Sélection_061](https://i.imgur.com/5BlIGOa.png)

Autre technique l'analyse spectrale.
