# Prise de données
print("Programme horaire")
print("Donnez l'heure de début de l'expérience:")
hd = input()
print("Donnez les minutes du début de l'expérience:")
md = input()
print("Donnez la durée de l'expérience en minutes:")
temps = input()
print("Début de l'expérience :" ,hd,":",md,)


# Conversion (Python3.x)
hd = int(hd)
md = int(md)
temps = int(temps)

# Calcul
day=0 ### Jour
temps = temps + md ### Sommes totale en minutes 
mf = temps % 60 ### Restes en minutes pour la fin
ht = temps/60 ### Multiple en heure de la durée de l'expérience 
ht = int(ht) ### Pas de float
hf = ht + hd ### Heure final 

# Condition (day passé 24h)
if hf >= 24:
    day = hf/24 ### Pas de float
    day = int(day)
    hf = hf%24
    hf = int(hf)
    
# Résultat
print("Fin de l'expérience : Jour",day,"Heure :", hf,":",mf)
