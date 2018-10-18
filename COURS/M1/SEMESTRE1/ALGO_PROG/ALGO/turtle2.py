import turtle

from turtle import *

def dragon(i,p):
    if i==0:
        speed(0)
        turtle.forward(10)
    else:
        dragon(i-1,1)
        speed(0)
        turtle.left(90*p)
        dragon(i-1,-1)

dragon(100,1)


