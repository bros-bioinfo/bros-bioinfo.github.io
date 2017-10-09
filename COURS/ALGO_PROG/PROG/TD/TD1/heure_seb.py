# Prise de données
print("Programme horaire")
print("Donnez l'heure de début de l'expérience:")
hd = input()
print("Donnez les minutes du début de l'expérience:")
md = input()
print("Donnes la durée de l'expérience  en minute:")
temps = input()

# Conversion
hd = int(hd)
md = int(md)
temps = int(temps)

# Résultat
print("L'heure finale de l'expérience est : ",int(hd + (temps/60)),":",md+(temps%60))
