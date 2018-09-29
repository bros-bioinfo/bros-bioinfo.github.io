import time

n1 = input("Nombre 1 = ")
n2 = input("Nombre 2 = ")
t_start = time.time()
x = n1
while x <= n2:
    i = 1
    print("\nTable de {}\n".format(x))
    while i <= 10:
        print("{} x {} = {}".format(x, i, x*i))
        i += 1
    x += 1

print('===================================================')
t1 = time.time()- t_start
t_start = time.time()
x = n1
for x in range(x, n2 + 1):
    print("\nTable de {}\n".format(x))
    for i in range(1, 11):
        print("{} x {} = {}".format(x, i, x*i))

print('===================================================')
t2 = time.time()- t_start
t_start = time.time()
x = n1

print('\n'.join(["\nTable de {}\n\n".format(x) + '\n'.join(["{} x {} = {}".format(x, i, x*i)
                                                            for i in range(1, 11)]) for x in range(x, n2 + 1)]))
print('===================================================')
t3 = time.time()- t_start
t_start = time.time()                                                          

print(t1)
print(t2)
print(t3)