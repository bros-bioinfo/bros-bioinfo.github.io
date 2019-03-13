#!/usr/bin/python3

import matplotlib.pyplot as plt
import numpy as np
import random as rd

dico = {x:0 for x in range(18)}

def lancer(dico: dict):
    n = 0b0
    for x in range(5):
        n = (n << 1) + rd.randint(0,1)
    print(bin(n))
    print(int(n))
    if n < 18:
        dico[n] += 1




for _ in range(100000):
    lancer(dico)

plt.bar(dico.keys(), dico.values(), 0.5)
plt.show()

# from matplotlib import colors
# from matplotlib.ticker import PercentFormatter

# # Fixing random state for reproducibility
# np.random.seed(19680801)

# N_points = 100000
# n_bins = 20

# # Generate a normal distribution, center at x=0 and y=5
# x = np.random.randn(N_points)
# y = .4 * x + np.random.randn(100000) + 5

# fig, axs = plt.subplots(1, 2, sharey=True, tight_layout=True)

# # We can set the number of bins with the `bins` kwarg
# axs[0].hist(x, bins=n_bins)
# axs[1].hist(y, bins=n_bins)
