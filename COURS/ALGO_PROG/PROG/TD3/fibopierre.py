#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
a+b=c
b+c=
0+1=1
1+1=2
1+2=3
2+3=5
3+5=8
"""


a= 1
b=1
c=1

print "Donnez la limite:"
max = input()
print "\n"

print c
while (c < max):
    c = a + b
    a = b
    b = c
    print c
