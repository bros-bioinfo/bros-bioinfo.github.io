# Cours de TD Thébault 9/10/2017

[**Lien pour les fichiers csv**](http://dept-info.labri.fr/~thebault/STAT/)

**http://data.library.virginia.edu/diagnostic-plots/**
    -> Pour mieux comprendre les graphiques.

![](graphe1.jpeg?raw=true)

## a) **Residuals vs Fitted**
- les points doivent être répartis de manière homogène de part et d'autre de la "droite"

## b) **Normal Q-Q**
- il faut que les points suivent une droite et qu'il n'y ait pas de valeurs extrèmes

## c) **Scale-Location**
- modèle des moindres ² (homogénéité des variances)

## d) **Residuals vs Leverage**
- graphe de Cook

## **I] Exo sur le cadmium** :

### Différents tests à réaliser en amont:
- Durbin-Watson test : H0 : pas d'auto-corrélation des erreurs **(dwtest)**
  - p-value > 0.05 acceptée H0 => il y a une ***normalité***
- Goldfeld-Quandt test : H0 : homogénéité des variances **(gqtest)**
 - p-value > 0.05 H0 est acceptée => ***homoscédasticité***
- Shapiro-Wilks test : H0 : variable suit une loi normale **(shapiro.test(lm$res))**
  - p-value < 0.05 rejet de H0 => échantillon **non issu d'une distribution suivant une loi normale**
  - Dans cet exemple on ne tient pas compte du test de Shapiro-Wilks car il y a plus de 30 données; les conditions d'application sont respectées on peut envisager un modèle linéaire.
- Test de corrélation de Bravais-Pearson :
  - **cor.test(sent$Cd_muscle, sent$Cd_foie, method = "pearson")**
  - H0 : pas de corrélation entre les variables
  - p-value < 0.05 => rejet de H0, les variables sont donc **corrélées**.

### Test anova :

- Régression linéaire simple Cd_muscle~Cd_foie :
  - H0 les moyennes sont identiques : **anova(lm)**
  - p-value < 0.05 rejet de H0, H1 = au moins une moyenne est différente.
  - **summary(lm)** On lit : Multiple R-squared:  0.9938 (R² : 99%)
  - *Equation*: Cd muslcle(y) = **0,097**Cd foie(x) **-0,216** ***(y=ax+b)***

### Réalisation de la représentation graphique :

- x11();plot(sent$Cd_foie, sent$Cd_muscle, pch=16,cex=1.5, xlab="Cd foie", ylab="Cd muscles")
- **abline**(lm, col="red", lwd=2) #permet de projeter la droite sur le graphique.

![](graphe2.jpeg?raw=true)


## **II] Exo sur les bactéries** :

### Question : Abondance des bactéries en fonction du temps
    Corrélation et non régression ?

![](graphe3.jpeg?raw=true)
- premier plot => non linéaire.
- on fait donc uniquement des tests de corrélation
  - **Kendall** => pour des données plus petites =/= **Spearman** (sensible aux erreurs et divergences dans les données)
  - **Rho** et **Tau** sont compris entre -1 et 1 : ici on obtient 1 pour les deux tests, il ne faut ***pas*** chercher un **modèle linéaire** dans ce cas.

***Conclusion : Non linéaire mais très forte corrélation.***

## **III] Exo sur la régression multiple** :

### Question : Condition/Renouvellement/Hauteur y a-t-il des relations entre ces variables?

- lm(log(Condition)~Renouvellement*Hauteur,data)->LMM
- le fait d'utiliser le log doit être déterminé en amont en regardant les données
- on fait du factoriel **renouvellement * hauteur**

![](graphe4.jpeg?raw=true)

- on applique les mêmes tests que pour la régression linéaire (***voir I]***)
- d'après les tests on trouve que seul l'effet de renouvellement a un impact (car p-value < 0.05)

- on teste ensuite avec le modèle "+" :  **lm(log(Condition)~Renouvellement+Hauteur,data)->LMM**
  - On trouve une équation du type : **LogIC=-0,106*Renouv-0,06*HAuteur+3,86**
  - d'après ce test : le renouvellement est encore le seul a avoir un impact. On peut donc refaire un modèle simple en ne prenant en compte que ce dernier.
- Modèle linéaire : **lm(log(Condition)~Renouvellement,data)->LM**
- summary(LM) #Lire le "Multiple R squared'=56%, p-value ***
  - On remarque que les coefficients ne sont pas les mêmes pour la régression multiple
  - Le temps de renouvellement est calculé sur les résidus de la hauteur et inversement (régression partielle)

- ***Représentation graphique*** :

![](graphe5.jpeg?raw=true)

- La ligne bleue est la droite du modèle linéaire simple avec seulement le renouvellement
- La ligne rouge est  la droite du modèle linéaire multiple

![](https://media3.giphy.com/media/7bWtoBmjn6fAI/giphy.gif)
