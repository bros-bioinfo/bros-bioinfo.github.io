#!/usr/bin/env python
# -*- coding: utf-8 -*-
print "saisir un code ADN"
code= raw_input()
print "\nsaisir un code motif"
motif = raw_input()

nbmotif = code.count(motif)
ARN=""

for i in code:
    if i == "A":
        i =  "U"

    elif i == "C":
        i =  "G"

    elif i == "G":
        i = "C"

    elif i == "T":
        i =  "A"

    ARN += i

print "\nLa séquence traduite est:",ARN
print "\nNombre de motif dans la séquence",nbmotif




"""
ACGT -> TGCU
ACGT -> saisir motif -> afficher combien de fois le motif est dans la chaine.
"""


backup
---
---

@import "{{ site.theme }}";

.main-content pre > code{color: #d5d5d5!important}
pre code {color: #d5d5d5!important}
.highlight  { background: #303340!important; color: #fff!important}
.highlight .c { color: #999988; font-style: italic } /* Comment */
.highlight .err { color: #a61717; background-color: #e3d2d2 } /* Error */
.highlight .k { font-weight: bold } /* Keyword */
.highlight .o { color:#7A82DA!important; font-weight: bold } /* Operator */
.highlight .cm { color: #999988; font-style: italic } /* Comment.Multiline */
.highlight .cp { color: #999999; font-weight: bold } /* Comment.Preproc */
.highlight .c1 { color: #999988; font-style: italic } /* Comment.Single */
.highlight .cs { color: #999999; font-weight: bold; font-style: italic } /* Comment.Special */
.highlight .gd { color: #000000; background-color: #ffdddd } /* Generic.Deleted */
.highlight .gd .x { color: #000000; background-color: #ffaaaa } /* Generic.Deleted.Specific */
.highlight .ge { font-style: italic } /* Generic.Emph */
.highlight .gr { color: #aa0000 } /* Generic.Error */
.highlight .gh { color: #999999 } /* Generic.Heading */
.highlight .gi { color: #000000; background-color: #ddffdd } /* Generic.Inserted */
.highlight .gi .x { color: #000000; background-color: #aaffaa } /* Generic.Inserted.Specific */
.highlight .go { color: #888888 } /* Generic.Output */
.highlight .gp { color: #59fe03!important } /* Generic.Prompt */
.highlight .gs { font-weight: bold } /* Generic.Strong */
.highlight .gu { color: #aaaaaa } /* Generic.Subheading */
.highlight .gt { color: #aa0000 } /* Generic.Traceback */
.highlight .kc { font-weight: bold } /* Keyword.Constant */
.highlight .kd { color: #00b4b4!important; font-weight: bold } /* Keyword.Declaration */
.highlight .kp { color: #00b4b4!important; font-weight: bold } /* Keyword.Pseudo */
.highlight .kr { color: #00b4b4!important; font-weight: bold } /* Keyword.Reserved */
.highlight .kt { color: #445588; font-weight: bold } /* Keyword.Type */
.highlight .m { color: #009999 } /* Literal.Number */
.highlight .s { color: #ffd800!important} /* Literal.String */
.highlight .na { color: #00b4b4!important } /* Name.Attribute */
.highlight .nb { color: #0086B3 } /* Name.Builtin */
.highlight .nc { color: #445588; font-weight: bold } /* Name.Class */
.highlight .no { color: #008080 } /* Name.Constant */
.highlight .ni { color: #800080 } /* Name.Entity */
.highlight .ne { color: #990000; font-weight: bold } /* Name.Exception */
.highlight .nf { color: #990000; font-weight: bold } /* Name.Function */
.highlight .nn { color: #555555 } /* Name.Namespace */
.highlight .nt { color: #3b90ff!important } /* Name.Tag */
.highlight .nv { color: #ff7171 !important} /* Name.Variable */
.highlight .ow { font-weight: bold } /* Operator.Word */
.highlight .w { color: #bbbbbb } /* Text.Whitespace */
.highlight .mf { color: #009999 } /* Literal.Number.Float */
.highlight .mh { color: #009999 } /* Literal.Number.Hex */
.highlight .mi { color: #009999 } /* Literal.Number.Integer */
.highlight .mo { color: #009999 } /* Literal.Number.Oct */
.highlight .sb { color: #d14 } /* Literal.String.Backtick */
.highlight .sc { color: #d14 } /* Literal.String.Char */
.highlight .sd { color: #d14 } /* Literal.String.Doc */
.highlight .s2 { color: #ffd800!important } /* Literal.String.Double */
.highlight .se { color: #45ff00!important } /* Literal.String.Escape */
.highlight .sh { color: #d14 } /* Literal.String.Heredoc */
.highlight .si { color: #d14 } /* Literal.String.Interpol */
.highlight .sx { color: #d14 } /* Literal.String.Other */
.highlight .sr { color: #009926 } /* Literal.String.Regex */
.highlight .s1 { color: #ffd800!important } /* Literal.String.Single */
.highlight .ss { color: #990073 } /* Literal.String.Symbol */
.highlight .bp { color: #999999 } /* Name.Builtin.Pseudo */
.highlight .vc { color: #008080 } /* Name.Variable.Class */
.highlight .vg { color: #008080 } /* Name.Variable.Global */
.highlight .vi { color: #008080 } /* Name.Variable.Instance */
.highlight .il { color: #009999 } /* Literal.Number.Integer.Long */

/* Make line numbers unselectable: excludes line numbers from copy-paste user ops */
.highlight .lineno {-webkit-user-select: none;-moz-user-select: none; -o-user-select: none;}
.lineno::-moz-selection {background-color: transparent;} /* Mozilla specific */
.lineno::selection {background-color: transparent;} /* Other major browsers */











.highlight {
    background: #282C34!important; //DONE
    .lineno { color: #4B5363!important;}

    .c     { color: #667689!important; font-style: italic!important } // Comment
    .err   { color: #a61717!important; background-color: #e3d2d2!important } // Error
    .k     { font-weight: bold!important } // Keyword
    .o     { font-weight: bold!important } // Operator
    .cm    { color: #667689!important; font-style: italic!important } // Comment.Multiline
    .cp    { color: #ABB2BF!important; } // Comment.Preproc
    .c1    { color: #667689!important; font-style: italic!important } // Comment.Single
    .cs    { color: #667689!important; font-weight: bold!important; font-style: italic!important } // Comment.Special
    .gd    { color: #000!important; background-color: #fdd!important } // Generic.Deleted
    .gd .x { color: #000!important; background-color: #faa!important } // Generic.Deleted.Specific
    .ge    { font-style: italic!important } // Generic.Emph
    .gr    { color: #a00!important } // Generic.Error
    .gh    { color: #999!important } // Generic.Heading
    .gi    { color: #000!important; background-color: #dfd!important } // Generic.Inserted
    .gi .x { color: #000!important; background-color: #afa!important } // Generic.Inserted.Specific
    .go    { color: #888!important } // Generic.Output
    .gp    { color: #555!important } // Generic.Prompt
    .gs    { font-weight: bold!important } // Generic.Strong
    .gu    { color: #aaa!important } // Generic.Subheading
    .gt    { color: #a00!important } // Generic.Traceback
    .k     {color:  #ABB2BF!important; font-weight: normal!important;}
    .kc    { font-weight: bold!important } // Keyword.Constant
    .kd    { color: #C678DD!important; } // Keyword.Declaration
    .kp    { font-weight: bold!important } // Keyword.Pseudo
    .kr    { color: #C678DD!important; } // Keyword.Reserved
    .kt    { color: #458!important; font-weight: bold!important } // Keyword.Type
    .m     { color: #64B6C3!important } // Literal.Number
    .p     {color: #ABB2BF!important;}
    .s     { color: #98C379!important } // Literal.String
    .na    { color: #D19A66!important; } // Name.Attribute
    .nb    { color: #D19A66!important; } // Name.Builtin
    .nc    { color: #CD9A61!important; } // Name.Class
    .no    { color: #008080!important } // Name.Constant
    .ni    { color: #800080!important } // Name.Entity
    .ne    { color: #6CAFF2!important; font-weight: bold!important } // Name.Exception
    .nf    { color: #6CAFF2!important; } // Name.Function
    .nn    { color: #555!important } // Name.Namespace
    .nt    { color: #D86C74!important } // Name.Tag
    .nv    { color: #008080!important } // Name.Variable
    .nx    { color: #D19A66!important;}
    .ow    { font-weight: bold!important } // Operator.Word
    .w     { color: #bbb!important } // Text.Whitespace
    .mf    { color: #099!important } // Literal.Number.Float
    .mh    { color: #099!important } // Literal.Number.Hex
    .mi    { color: #099!important } // Literal.Number.Integer
    .mo    { color: #099!important } // Literal.Number.Oct
    .sb    { color: #d14!important } // Literal.String.Backtick
    .sc    { color: #d14!important } // Literal.String.Char
    .sd    { color: #d14!important } // Literal.String.Doc
    .s2    { color: #98C379!important; } // Literal.String.Double
    .se    { color: #d14!important } // Literal.String.Escape
    .sh    { color: #d14!important } // Literal.String.Heredoc
    .si    { color: #d14!important } // Literal.String.Interpol
    .sx    { color: #d14!important } // Literal.String.Other
    .sr    { color: #009926!important } // Literal.String.Regex
    .s1    { color: #98C379!important; } // Literal.String.Single
    .ss    { color: #990073!important } // Literal.String.Symbol
    .bp    { color: #999!important } // Name.Builtin.Pseudo
    .vc    { color: #008080!important } // Name.Variable.Class
    .vg    { color: #008080!important } // Name.Variable.Global
    .vi    { color: #008080!important } // Name.Variable.Instance
    .il    { color: #099!important } // Literal.Number.Integer.Long
}
