import turtle
from turtle import*

def flocon(i,p):
    if p==0:
        turtle.forward(10)

    else:
        flocon(i/3,p-1)
        turtle.left(60)
        flocon(i/3,p-1)
        turtle.right(120)
        flocon(i/3,p-1)
        turtle.left(60)
        flocon(i/3,p-1)



flocon(1,9)