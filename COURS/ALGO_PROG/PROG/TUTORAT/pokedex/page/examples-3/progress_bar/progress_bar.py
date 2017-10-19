#! /usr/bin/env python
# -*- python -*-

import sys

try:
    from Tkinter import *
except ImportError:
    from tkinter import *

try:
    import ttk
    py3 = 0
except ImportError:
    import tkinter.ttk as ttk
    py3 = 1


def vp_start_gui():
    '''Starting point when module is the main routine.'''
    global val, w, root
    root = Tk()
    root.title('Progress_Bar')
    root.geometry('301x129+472+154')
    w = Progress_Bar (root)
    init()
    root.mainloop()

w = None
def create_Progress_Bar (root):
    '''Starting point when module is imported by another program.'''
    global w, w_win
    if w: # So we have only one instance of window.
        return
    w = Toplevel (root)
    w.title('Progress_Bar')
    w.geometry('301x129+472+154')
    w_win = Progress_Bar (w)
    init()
    return w_win

def destroy_Progress_Bar ():
    global w
    w.destroy()
    w = None




def init():
    pass




class Progress_Bar:
    def __init__(self, master=None):
        # Set background of toplevel window to match
        # current style
        style = ttk.Style()
        theme = style.theme_use()
        default = style.lookup(theme, 'background')
        master.configure(background=default)

        self.TProgressbar1 = ttk.Progressbar (master)
        self.TProgressbar1.place(relx=0.17,rely=0.47,relheight=0.15
                ,relwidth=0.66)
        self.prog_var = IntVar()
        self.TProgressbar1.configure(variable=self.prog_var)

        self.update(0.4)

    def update (self, v):
        print('Progress_Bar: update: v =', v)    # rozen pyp
        self.prog_var.set(int(v*100))

    def close(self):
        destroy_Progress_Bar()





if __name__ == '__main__':
    vp_start_gui()



