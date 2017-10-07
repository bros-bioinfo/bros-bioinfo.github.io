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












.highlight .hll { background-color: #49483e!important }
.highlight  { background: #272822!important; color: #f8f8f2!important }
.highlight .c { color: #75715e!important } /* Comment */
.highlight .err { color: #960050!important; background-color: #1e0010!important } /* Error */
.highlight .k { color: #66d9ef!important } /* Keyword */
.highlight .l { color: #ae81ff!important } /* Literal */
.highlight .n { color: #f8f8f2!important } /* Name */
.highlight .o { color: #f92672!important } /* Operator */
.highlight .p { color: #f8f8f2!important } /* Punctuation */
.highlight .ch { color: #75715e!important } /* Comment.Hashbang */
.highlight .cm { color: #75715e!important } /* Comment.Multiline */
.highlight .cp { color: #75715e!important } /* Comment.Preproc */
.highlight .cpf { color: #75715e!important } /* Comment.PreprocFile */
.highlight .c1 { color: #75715e!important } /* Comment.Single */
.highlight .cs { color: #75715e!important } /* Comment.Special */
.highlight .gd { color: #f92672!important } /* Generic.Deleted */
.highlight .ge { font-style: italic!important } /* Generic.Emph */
.highlight .gi { color: #a6e22e!important } /* Generic.Inserted */
.highlight .gs { font-weight: bold!important } /* Generic.Strong */
.highlight .gu { color: #75715e!important } /* Generic.Subheading */
.highlight .kc { color: #66d9ef!important } /* Keyword.Constant */
.highlight .kd { color: #66d9ef!important } /* Keyword.Declaration */
.highlight .kn { color: #f92672!important } /* Keyword.Namespace */
.highlight .kp { color: #66d9ef!important } /* Keyword.Pseudo */
.highlight .kr { color: #66d9ef!important } /* Keyword.Reserved */
.highlight .kt { color: #66d9ef!important } /* Keyword.Type */
.highlight .ld { color: #e6db74!important } /* Literal.Date */
.highlight .m { color: #ae81ff!important } /* Literal.Number */
.highlight .s { color: #e6db74!important } /* Literal.String */
.highlight .na { color: #a6e22e!important } /* Name.Attribute */
.highlight .nb { color: #f8f8f2!important } /* Name.Builtin */
.highlight .nc { color: #a6e22e!important } /* Name.Class */
.highlight .no { color: #66d9ef!important } /* Name.Constant */
.highlight .nd { color: #a6e22e!important } /* Name.Decorator */
.highlight .ni { color: #f8f8f2!important } /* Name.Entity */
.highlight .ne { color: #a6e22e!important } /* Name.Exception */
.highlight .nf { color: #a6e22e!important } /* Name.Function */
.highlight .nl { color: #f8f8f2!important } /* Name.Label */
.highlight .nn { color: #f8f8f2!important } /* Name.Namespace */
.highlight .nx { color: #a6e22e!important } /* Name.Other */
.highlight .py { color: #f8f8f2!important } /* Name.Property */
.highlight .nt { color: #f92672!important } /* Name.Tag */
.highlight .nv { color: #f8f8f2!important } /* Name.Variable */
.highlight .ow { color: #f92672!important } /* Operator.Word */
.highlight .w { color: #f8f8f2!important } /* Text.Whitespace */
.highlight .mb { color: #ae81ff!important } /* Literal.Number.Bin */
.highlight .mf { color: #ae81ff!important } /* Literal.Number.Float */
.highlight .mh { color: #ae81ff!important } /* Literal.Number.Hex */
.highlight .mi { color: #ae81ff!important } /* Literal.Number.Integer */
.highlight .mo { color: #ae81ff!important } /* Literal.Number.Oct */
.highlight .sa { color: #e6db74!important } /* Literal.String.Affix */
.highlight .sb { color: #e6db74!important } /* Literal.String.Backtick */
.highlight .sc { color: #e6db74!important } /* Literal.String.Char */
.highlight .dl { color: #e6db74!important } /* Literal.String.Delimiter */
.highlight .sd { color: #e6db74!important } /* Literal.String.Doc */
.highlight .s2 { color: #e6db74!important } /* Literal.String.Double */
.highlight .se { color: #ae81ff!important } /* Literal.String.Escape */
.highlight .sh { color: #e6db74!important } /* Literal.String.Heredoc */
.highlight .si { color: #e6db74!important } /* Literal.String.Interpol */
.highlight .sx { color: #e6db74!important } /* Literal.String.Other */
.highlight .sr { color: #e6db74!important } /* Literal.String.Regex */
.highlight .s1 { color: #e6db74!important } /* Literal.String.Single */
.highlight .ss { color: #e6db74!important } /* Literal.String.Symbol */
.highlight .bp { color: #f8f8f2!important } /* Name.Builtin.Pseudo */
.highlight .fm { color: #a6e22e!important } /* Name.Function.Magic */
.highlight .vc { color: #f8f8f2!important } /* Name.Variable.Class */
.highlight .vg { color: #f8f8f2!important } /* Name.Variable.Global */
.highlight .vi { color: #f8f8f2!important } /* Name.Variable.Instance */
.highlight .vm { color: #f8f8f2!important } /* Name.Variable.Magic */
.highlight .il { color: #ae81ff!important } /* Literal.Number.Integer.Long */
