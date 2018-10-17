import inspect_pile

def f(a,b):
    g(a+1,b+1)

def g(c,a):
    print ("La pile est:")
    print (inspect_pile.stack())
    print ("")
    print ("Les donnees de la fonction situee en haut de la pile sont: ")
    print (inspect_pile.stack()[0])
    print ("")
    print ("Les variables de la fonction situee en haut de la pile sont: ")
    print (inspect_pile.getargvalues(inspect_pile.stack()[0][0]))

def factoriel(n):
    if n==0:
        return 1
    return
f(1,2)


U0=3
Un=2*U(n-1) + 1 si n>1

suite(2) renvoie 15
suite(3)

U[0]=3
