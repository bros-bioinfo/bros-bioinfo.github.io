c=1
a=3 ### ou aussi : a<-1
d=a+c
# Voilà comment on fait un commentaire
getwd() ### comme pwd
setwd() ### comme cd ; pas oublié "" pour entourer chaîne caractere
help.search() ### aide sur les fonctions statistiques 
help.search("fisher")
help.start() ### Manuel d'utilisation 
?fisher.test() ### Aide sur fonction en particulier
5**(1/3) ### Racine cubique
round(cos(1),2) ### Arrondir à deux chiffres après la virgule
ceiling(log10(4)) ### Arrondir à unité supérieur
floor(log(7)) ### Arrondir  à unité inférieur
toto=c(1.2,2.6,6.7,12,16.3,18) ### toto<-c(1.2,2.6,6.7,12,16.3,18)
seq(from=10,to=50,by=10) ### créer au plus court la variable suivante sans la stocker dans un objet
suite<-5:25 ### créer au plus court la variable suivante et de l’appeler ‘suite’
bonbon<-as.factor(rep(c("bleu","rouge","vert"),each=3)) ### reconnue comme un 'facteur' par R
str(toto) ### intégralité du statut de ‘toto’ 
summary(suite) ### réponse : quantile(suite,0.75)
round(sd(toto)/sqrt(length(toto)),3) ### erreur standard de toto arrondie à 3 chiffres après la virgule
bonbon2<-as.factor(bonbon) ### convertir ‘bonbon’ en facteur qualitatif et stockez le résultat dans bonbon2
levels(bonbon2) ### récupérer les modalités de bonbon2 et uniquement les modalités
range(toto) ### gamme de variation de la variable toto 
rank(toto) ### Donnez l’ordre de classement (ou calculer les rangs) des valeurs de toto 
          ### en considérant les ex-aequos avec la même valeur de rang 