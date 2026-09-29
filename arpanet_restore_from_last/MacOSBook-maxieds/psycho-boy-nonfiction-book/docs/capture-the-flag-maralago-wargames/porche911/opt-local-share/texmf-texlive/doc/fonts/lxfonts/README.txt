This file shortly deals with  the LXfonts package, 
version 3, and its subversions, extracted from file 
lxfonts.zip. 

Of course you don't have to install anything if your 
TeX system already is complete and updated.

If you want to try to modify these fonts you can do 
so by downloading this full zipped package from 
CTAN into a local folder of yours and practice on 
this local set of files. You must be a real 
TeXpert to try your hand on such kind of 
experiments.

Notice that this package contains also  the METAFONT 
source files: in case you spotted some errors you 
might try your chance to correct them; when you've
got the good corrections, please, don't forget to 
notify me!

If you have a complete and updated TeX system  installation, you can use the LX fonts with pdf LaTeX; without importing these fonts by means of fontspec, but using the T1 option in the fontenc package, you can use them also with XeLaTeX and LuaLaTeX; if you prefer to use fontspec, read its documentation to see how to describe T1 encoded Type1 fonts.

Warning: load the lxfonts.sty file  with

\usepackage{lxfonts}

in your document preamble *after* any other call to font related packages.

Read the LXfonts-demo.pdf file to see how to use 
these fonts. Of course the slides production 
software may be any class or package that produces 
slides; it is not necessary to use the same package 
used in the example.

If you have a complete TeX system distribution, 
which is always preferable to a basic or incomplete 
one, you don't have to do anything because all
fonts and necessary files are already installed.

Claudio Beccari                    Rivoli 2025-02-03
email: claudio(dot)beccari(at)gmail(dot)com                               


