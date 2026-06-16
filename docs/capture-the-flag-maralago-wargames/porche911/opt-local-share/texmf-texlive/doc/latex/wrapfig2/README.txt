%%%% README.txt file
This README.txt for package wrapfig2 [2025-03-01 v.7.0.2]

This work is author maintained

This work consists of wrapfig2.dtx, the main file,
this README.txt and the derived files wrapfig2.pdf
and wrapfig2.sty.

The package besides the source documented source 
file contains the image file stele-todi-small.jpg, 
a slightly cropped image downloaded from the 
internet site of the Gregorian Etruscan Museum in 
Rome. Apparently this image is free provided the 
source is duly acknowledged.

Licence appended to the wrapfig2.sty file.

The software contained herein is a fork of Donald 
Arseneau wrapfig package. It uses most of his code, 
but adds a new environment, wraptext, to the 
existing wrapfigure and wraptable ones. 

Supposedly this software is backwards compatible 
with Arseneau's original environments. Future 
experience may confirm this statement.

Some user commands are defined by means of the 
LaTeX3 functionalities. Therefore this package does 
not work with LaTeX2e kernels older than about 
2018, although a warning is issued if the LaTeX 
format file is older than 1st January 2019. 
In any case this package loading is aborted in 
order to avoid conflicts; it is aborted also  
in some other circumstances; the error messages 
describe why the process was aborted.

IMPORTANT NOTICE: An incompatibility with the 
amstext package (loaded by amsmath, siunitx, and 
other packages) was discovered, but with version
6.2.2  this incompatibility was corrected.

Notice to the user: version 7 does not appear 
different from version 6; the inner workings are 
different because the wraptext environment does not 
use anymore the functionalities of package curve2e, 
but uses directly those of package pict2e, 
therefore avoiding some conflicts that have been 
reported the the maintainer.

Version 7 of this package accepts options in the 
form key = value. Options are also available to 
fall back to version 5 and version 4.

Claudio Beccari

claudio dot beccari at gmail dot com