# Prise de données
print("Programme lendemain")
print("Donnez le jour:")
day_d = input()
print("Donnez le mois :")
month_d = input()
print("Donnez l'année:")
years_d = input()
print("Date actuelle :",day_d,"/",month_d,"/",years_d)


# Conversion (Python3.x)
day_d = int(day_d)
month_d = int(month_d)
years_d = int(years_d)

# Création de liste
month_T = [1,3,5,7,8,10,12]
month_t= [4,6,9,11]

# Calcul de base
day_f = day_d+1
month_f = month_d
years_f = years_d

# Condtion
err = False
if (day_d <= 31 and month_d <= 12) and (day_d > 0 and month_d > 0 and years_d > 0): ### Boolean possible ?
    if month_d in month_T and day_f>31:
        day_f = day_f-31
        month_f = month_d+1
    elif month_f > 12:
        month_f = month_f-12
        years_f = years_d+1
    if month_d in  month_t and day_f>30:
        day_f = day_f-30
        month_f = month_d+1
    elif month_f > 12:
        month_f = month_f-12
        years_f = years_d+1
    if month_d == 2 and day_f>28:
        day_f = day_f-28
        month_f = month_d+1
    print("Date du lendemain : ",day_f,"/",month_f,"/",years_f)
else:
    input("Une de vos valeur ne correspond pas aux conditions d'éxecution du programme. Appuyez sur ENTREE...")
