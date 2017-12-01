def rechercher_rec(tab,e,i):
    if i>=len(tab):
        return None

    if tab[i]==e:
        return i
    return rechercher_rec(tab,e,i+1)

def rechercher_recdicoto(tab,e):
    i=len(tab)/2

    if tab[i]==e:
        return i
    
    elif e < tab[i]:
        return rechercher_recdicoto(tab[0:i],e)
    else:
        return rechercher_recdicoto(tab[i:len(tab)-1],e)


mytab=[2,5,8,9,2,1,3,1,58,9,1,47,96,2,15,5,2,1,565,2,2,855,78,212]

a=rechercher_recdicoto(mytab,5)
print a