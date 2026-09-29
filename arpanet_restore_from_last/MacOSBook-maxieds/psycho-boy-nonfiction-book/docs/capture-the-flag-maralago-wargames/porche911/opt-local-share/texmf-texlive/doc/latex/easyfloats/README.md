# Abstract

In standard LaTeX inserting objects like figures or tables requires too much knowledge for beginners and too much typing effort and hardcoding for people like me.
This package aims to make insertion of figures and tables easier for both beginners and experts.
Despite the term *floats* in it's name it also allows to disable floating of such objects.
It also defines a new placement `I` similar to `H` which respects the indentation in an `itemize`.


# Documentation

The documentation is contained in the file [doc/easyfloats.pdf](doc/easyfloats.pdf).

The source code for the documentation is *not* contained in the dtx file but in the directory [doc](doc).
To build the documentation run:
```sh
cd doc
pdflatex easyfloats.tex
biber easyfloats
pdflatex easyfloats.tex
pdflatex easyfloats.tex
```


# Dependencies

The dependencies are listed in [DEPENDS.txt](DEPENDS.txt).
It's syntax is explained on http://tug.org/texlive/pkgcontrib.html#deps.
See also section *Used packages* in the [documentation](doc/easyfloats.pdf).


# License

This package and it's documentation are distributed under the [LaTeX Project Public License](https://www.latex-project.org/lppl/), version 1.3 or later.
The preamble of the documentation may alternatively, at your choice, be reused under the terms of the [WTFPL](http://www.wtfpl.net/), version 2 or later.

Additionally to the rights granted by the LaTeX Project Public License
you have permission to freely distribute *unmodified* copies
of the files [easyfloats.sty](easyfloats.sty) and [doc/easyfloats.pdf](doc/easyfloats.pdf) without other files of this work.
The other files of this work can be found at:
https://gitlab.com/erzo/latex-easyfloats

The examples and tests are distributed under the [WTFPL](http://www.wtfpl.net/), version 2 or later.


# Contact

Bug reports and feature requests can be submitted at
https://gitlab.com/erzo/latex-easyfloats/-/issues.

Please see also section *Bug reports and contributions* in the [documentation](doc/easyfloats.pdf).
