#!/usr/bin/env python
# coding: utf-8


# explication
def factoriel(n):
    if n == 0:
        return 1
    return factoriel(n - 1)


print factoriel(3)


def suite(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    return 2 * suite(n - 1) - suite(n - 2) + 1
