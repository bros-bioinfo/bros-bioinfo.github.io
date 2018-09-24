# EXERCICE 1
1. Questions générales
    - Hauteur = quantitative continue
    - peuplement = qualitative nominale
    - Pop statistique = les deux peuplements
    - Unité = Arbre
2. Interval de confiance  
    1. L'échantillon correspond t'il à une populartion distribuée normalement ?
        - Test $\chi^2$ 
$$ \text{Centrée réduite} = \frac{x - \bar{x}}{\sigma}$$

| Limites des classes | Valeurs centrées réduites     | Probabilité de la loi normale cumulée $\\ P (z < x_1)$ | Proba par interval de classe | **Freq théorique** $P\cdot n$ | **Freq observée** |
| ------------------- | ----------------------------- | :---------------------------------------------------: | :--------------------------: | :---------------------------: | :---------------: |
| 23                  | $\frac{23 - 26}{1.4} = -2.12$ | $P(z < -2.12) \\ = 1 - P(z<2.12) \\ = 0.0162$           | 0.0162 *<2.3*                | 0.0162 * 13 = 0.21            | O                 |
| 24                  | - 1.43                        | 0.076                                                 | 0.06 *[23,24]*               | 0.75                          | 1                 |
| 25                  | -0.71                         | 0.24                                                  | 0.16 *[24,25]*               | 2.11                          | 4                 |
| 26                  | 0                             | 0.5                                                   | 0.26 *[25,26]*               | 3.38                          | 0                 |
| 27                  | 0.71                          | 0.76                                                  | 0.26 *[26,27]*               | 3.38                          | 6                 |
| 38                  | 1.43                          | 0.92                                                  | 0.16 *[27,28]*               | 2.11                          | 2                 |

  
 $\chi ^2_{obs}=\sum\frac{(Freq_{obs}-Freq_{théorique})^2}{Freq_{théorique}}$  
 $\chi ^2_{obs}=\frac{(0-0.21)^2}{0.21} + \frac{(1-0.78^2)}{0.78} + ... +\frac{(2-2.11)^2}{2.11} = 7.46$  <br><br>
 $\chi ^2_{théorique} = 7.185 \\ ddl = n - 1 - k = 6 - 1 - 2 = 3 \\ n = nombre de classes, \\ k = \text{Loi normale} \Rightarrow 2$  
 $\chi ^2_{obs} < \chi ^2_{théorique} \Rightarrow \text{Distribution normale}$
    
- Interval de confiance à 95 %  
$\bar{X}_{F1}\pm t_{\alpha = 5\%,\hspace{2px}ddl = n -1}\cdot\frac{\sigma}{\sqrt{n}}$  
$\bar{X}_{F1}\pm 2.179\cdot\frac{1.4}{\sqrt{13}}$
$[25.17 , 26.83]$

## Comparaison de moyennes d'échantillons indépendants
### Hypothèse
- $H_0: \mu_{F1} = \mu_{F2}$
- $H_0: \mu_{F1} \ne \mu_{F2} (Bilatéral)$
### CA
- Normalité => test Shapiro-Wilks (*shapiro.test*)
- Homoscédasticité -> test de Fischer (*var.test*)  
    - $F_{obs}=\frac{\sigma^2_{F2}}{\sigma^2_{F1}} = \frac{3.14}{1.85}=1.7$
    - $F_{théorique} = 2.62$
    - $F_{obs}<F_{théorique} \Rightarrow \text{Homoscédaticité}$  

- Test t de student pour échantillons indépendants
    - $S ^2 =\frac{(n_{F1}-1)\cdot\sigma ^2_{F1}+(n_{F2}-1)\cdot\sigma ^2_{F2}}{n_{F1} +n_{F2} - 2} = 2.52$
    - $t_{obs}=\frac{\bar{X}_{F1}-\bar{X}_{F2}}{\sqrt{\frac{S^2}{n_{F1}}+\frac{S^2}{n_{F2}}}}=0.98$
    - $ddl=n_{F1}+n_{F2}-2=25\hspace{20px}\alpha = 0.5$ 
    - $t_{théorique} = 2.06\Rightarrow t_{obs}< t_{théorique}\Rightarrow H_0 \text{ acceptée}\Rightarrow\mu_{F1} = \mu_{F2}$ 

![Plot](/COURS/M1/SEMESTRE1/STATS/TD_papier/Rplot.png)