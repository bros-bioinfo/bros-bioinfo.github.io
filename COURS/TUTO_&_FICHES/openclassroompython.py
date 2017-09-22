
help("")# demander de l'aide


# I LES BOUCLES

# LES OPERATION DE COMPARAISON

# == : egal à
# != : different de

#exemple de la table de multiplication
print ("1*7=",1*7)
print ("2*7=",2*7)
#etc...
#remplacer 7 par une variable est plus intéressant
nb=7
print ("nb*7=",1*nb)
print ("nb*7=",2*nb)
#etc...

# A/ LA BOUCLE WHILE

#while= tant que
nb=7
i=0 # c'est la variablecompteur que nous allons incrémenter dans la boucle
while i<1O:
    print (i+1,"*",nb,"=",(i+1)*nb)
    i+=1 #on incrémente i de 1 à chaque boucle

# B/ LA BOUCLE FOR

# construction : for element in sequence:

chaine="bonjour les zeros"
for lettre in chaine: #in peut etre utilisé ailleur que dans une boucle for
    print(lettre) #affiche les lettre H E L L O

# C/ LES MOTS CLES BREAK ET CONTINUE

#a) LE MOT CLE "BREAK"

#"break" permet tout simplement d'interrompre une boucle.

#b) LE MOT CLE "CONTINUE"

#permet de continuer une boucle en repartant directement à la ligne du while ou for


# II LA CREATION DE FONCTION

# "def" mot clé qui est l'abreviation de "define" (=définir)
#exemple

def table(nb):
    i=0 #le compteur
    while i<10:
        print(i+1,"*",nb,"=",(i+1)*nb)
        i+=1

table(7) #fait apparaitre la table de 7

#L'INSTRUCTION "RETURN"

def carre(valeur):
    return valeur * valeur

#"return" signifie qu'on va renvoyer la valeur pour pouvoir la récupérer ensuite et la stocker dans une variable par exemple

#LA FONCTION LAMBDA

#LES MODULES





    
