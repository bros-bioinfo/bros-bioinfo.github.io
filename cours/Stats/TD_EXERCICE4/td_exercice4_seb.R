install.packages("plyr")
library(plyr)
MMs<-read.csv("MMs.csv", header=TRUE, sep=";",dec=",") ### Ne pas oublier d'enlever (mm) et (g) dans les colonnes
with(subset(MMs,Couleur=="Bleu"),mean(Poids)) ### au plus rapide d'obtenir le poids moyen des MMs de couleur bleue
arrange(MMs,desc(Forme),desc(Couleur),Poids) ### pour ré-ordonner le tableau MMs d'abord par ordre décroissant de la forme puis ordre décroissant de la couleur puis ordre croissant du poids
subset(MMs,Couleur=="Vert",select=c("Longueur","Poids"))->vert ### créer un sous-tableau de MMs ne contenant que les bonbons verts et les colonnes Longueur et Poids en lui donnant le nom 'vert'
summary(vert) ### obtenir les statistiques rapides sur le tableau vert (plus simple)
apply(vert,2,summary) ### moins simple
count(MMs,.(Couleur,Forme)) ### comptabiliser le nombre de bonbons par modalité croisé Couleur, Forme (dans cet ordre)
aggregate(Poids~Couleur+Forme,data=MMs,median) ### calculer la médiane des poids par modalité croisée Couleur, Forme de manière à ce que le tableau puisse être réutilisable
each(median,min,max)(MMs$Poids) ### donner la médiane, les minima et maxima de poids de MMs (dans cet ordre)
ddply(MMs[,c("Longeur","Poids")],.(MMs$Couleur),colMeans) ### obtenir les moyennes des Longueurs et Poids des bonbons pour les différentes couleurs
ddply(MMs,.(Couleur,Forme),summarize,Poids_mean=mean(Poids),Poids_SE=sd(Poids)/sqrt(length(Poids))) ### en une opération de recenser le Poids moyen (noté Poids_mean) et l'erreur standard des poids (notée Poids_SE) par couleur et forme croisée