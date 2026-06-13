# The luanumint package
# version 1.2 
# Authors: Chetan Shirore and Ajit Kumar
# Email: mathsbeauty@gmail.com

# Introduction
The luanumint package is developed using Lua to find the numerical integration of real-valued functions of a real variable over closed and bounded intervals. The package provides commands to find numerical integration using the mid-point, trapezoidal, and Simpson's one-third and three-eighth rules. The loadstring command is used to load and evaluate functions at different points in the mathematics environment of Lua. The package also provides commands to find numerical integration with step-by-step calculations. The package's commands have an optional argument to round off the numbers to the desired number of decimal places. The breqn package is loaded to display and align step-by-step calculations properly. Advanced users can customize the code to achieve the desired formatting of step-by-step computations. The package can assist in creating various problems on numerical integration with their solutions. The results obtained using different methods of numerical integration can be compared. It can save users' efforts of doing computations involving numerical integration in external software and copying them inside LaTeX documents.

# License
The luanumint package is released under the LaTeX Project Public License v1.3c or later. 
The complete license text is available at http://www.latex-project.org/lppl.txt. 
It is developed in Lua. 
Lua is available as a certified open-source software. 
Its license is simple and liberal, which is compatible with GPL.

#Installation and Inclusion
The installation of luanumint package is similar to plain latex package, where the .sty file is in LaTeX directory of texmf tree. 
The package can be included with \usepackage{luanumint} command in the preamble of the LaTeX document. 
The TeX file is to be compiled using the LuaLaTeX engine. 