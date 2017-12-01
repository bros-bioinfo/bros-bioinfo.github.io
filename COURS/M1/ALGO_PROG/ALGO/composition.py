def composition(n):
    if n==0:
        return ([[]])
    
    liste=[]
    
    for i in range (1,n+1):
        for c in composition(n-i):
            liste.append( [i] + c )
    return liste


a=composition(4)

for i in range(len(a)):
    print a[i]


print """
composition
---------------
partition
"""

def part(n,k):     # fonction recursive
    p=n
    q=k

    if p==q or q==1:
        return 1   # si p = 1 ou q = 1, on retourne 1
    if p < q:
        return 0
    else:
        return part(p-1,q-1)+part(p-q,q)


b=part(5,9)
print b