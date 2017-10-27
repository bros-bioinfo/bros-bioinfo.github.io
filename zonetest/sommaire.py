   #!/usr/bin/env python
# -*- coding: utf-8 -*-

from os import listdir
from os.path import isfile, join
import sys,os
import json

'''
root = "bros-bioinfo.github.io"
path = os.path.join(root, "targetdirectory")
filepath=[]

def listingf(filepath):
    for path, subdirs, files in os.walk(root):
        for name in files:
            fdetected=os.path.join(path, name)
            if ".md" in fdetected:
                filepath.append(fdetected)
            if ".pdf" in fdetected:
                filepath.append(fdetected)
        print filepath


def writelist(filepath):
    filelist=listingf(filepath)
    print filelist
    file = open("sommaire.txt","w")
    for i in range (len(filepath)):
        file.write(filepath[i]+"\n")
    file.close()
'''

def path_to_dict(path):
    d = {'name': os.path.basename(path)}
    if os.path.isdir(path):
        d['type'] = "directory"
        d['children'] = [path_to_dict(os.path.join(path,x)) for x in os.listdir\
(path)]
    else:
        d['type'] = "file"
    return d

def writelist():
    filelist=json.dumps(path_to_dict('.'), indent=3)
    filelist=filelist.replace('"name"',"name")
    filelist=filelist.replace('"type"',"type")
    filelist=filelist.replace('"children"',"sub")
    print filelist
    file=open("sommaire.txt","w")
    file.write(filelist)
    file.close()


'''
listingf(filepath)
writelist(filepath)
'''
d=[]
print json.dumps(path_to_dict('.'))
writelist()
