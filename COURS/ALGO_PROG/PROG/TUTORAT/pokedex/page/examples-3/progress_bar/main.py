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
    root.title('Main')
    root.geometry('600x450+918+173')
    w = Main (root)
    init()
    root.mainloop()

w = None
def create_Main (root):
    '''Starting point when module is imported by another program.'''
    global w, w_win
    if w: # So we have only one instance of window.
        return
    w = Toplevel (root)
    w.title('Main')
    w_win = Main (root)
    init()
    return w_win

def destroy_Main ():
    global w
    w.destroy()
    w = None

def init():
    pass

import time

def quit():
    sys.exit()

import progress_bar

class Main:
    def __init__(self, master=None):
        # Set background of toplevel window to match
        # current style
        style = ttk.Style()
        theme = style.theme_use()
        default = style.lookup(theme, 'background')
        master.configure(background=default)

        self.Button1 = Button (master)
        self.Button1.place(relx=0.3,rely=0.4,height=40,width=260)
        self.Button1.configure(activebackground="#f9f9f9")
        self.Button1.configure(command=self.advance)
        font10 = "-family {Nimbus Sans L} -size 18 -weight normal -slant roman -underline 0 -overstrike 0"
        self.Button1.configure(font=font10)
        self.Button1.configure(text="Advance Progress Bar")

        self.Button2 = Button (master)
        self.Button2.place(relx=0.45,rely=0.67,height=25,width=49)
        self.Button2.configure(activebackground="#f9f9f9")
        self.Button2.configure(command=quit)
        self.Button2.configure(text="Quit")

        self.Label1 = Label (master)
        self.Label1.place(relx=0.23,rely=0.18,relheight=0.11,relwidth=0.59)
        self.Label1.configure(activebackground="#f9f9f9")
        font11 = "-family {Nimbus Sans L} -size 16 -weight normal -slant roman -underline 0 -overstrike 0"
        self.Label1.configure(font=font11)
        self.Label1.configure(text="Example of Using a Progress bar.\n Hit the Advance.. below repeatedly.")

        self.bar_value = 0.0

    def advance(self):
        if not progress_bar.w:
            # If the progress bar has not been previously created,
            # create it; note the parameter 'root'.
            self.bar = progress_bar.create_Progress_Bar(root)
            # The above gives us access to functions and attributes of
            # the progress_bar object.
            self.bar_value = self.bar.prog_var.get() / float(100)
            return
        if self.bar_value < 1.0:
            self.bar_value += 0.2
            self.bar.update(self.bar_value)
            root.update() # This updates Tk for both this and the progress_bar.
        if self.bar_value >= 1.0:
            time.sleep(1)        # Wait one second and then kill the progress bar
            self.bar.close()
            self.bar_value = 0.0


if __name__ == '__main__':
    vp_start_gui()



