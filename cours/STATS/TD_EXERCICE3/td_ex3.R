summary(data) ### Afficher les statistiques descriptives de data
data[5,3] ### Afficher la cinquième ligne et troisième colonne
names(data) ### Afficher le nom des colonnes
median(data[1:10,3]) ### Afficher la médiane de la 3eme colonne uniquement pour les lignes 1 à 10
str(data) ### Afficher le statut des variables
na.omit(data) ### Enlever les lignes contenant des données manquantes
head(data) ### Afficher les premières lignes du jeu de données
View(data) ### Afficher l'intégralité du tableau de données dans un onglet avec des curseurs pour se déplacer
dim(data) ### Afficher les dimensions (nombre de lignes et de colonnes)
poids<-read.csv("Poids_peupliers.csv",header = TRUE, sep = ";",dec = ",")
sum(is.na(poids)) ### comptabiliser les valeurs manquantes dans poids
str(poids)
poids[rev(order(poids$Poids)),] ### Trier toutes les lignes par ordre décroissant d’une colonne. Il faut ajouter la fonction rev() avec order()
poids[,-2] ### 'poids" sans sa deuxième colonne
poids[poids$Sol=="Riche, humide",] ### afficher uniquement les lignes correspondant à un sol riche et humide
subset(poids, Sol=="Riche, humide") ### + propre
var<-poids ; var[var<=0.1]<-0.1 ; var
subset(poids,Sol=="Sablonneux, sec"&Traitement=="Irrigation")->var
subset(poids, Sol=="Sablonneux, sec" & Traitement=="Irrigation",select=c("Poids"))->var
round(sd(var$Poids)/sqrt(length(var$Poids)),2)
transform(poids,Poidstrf=scale(Poids))
t(var)
