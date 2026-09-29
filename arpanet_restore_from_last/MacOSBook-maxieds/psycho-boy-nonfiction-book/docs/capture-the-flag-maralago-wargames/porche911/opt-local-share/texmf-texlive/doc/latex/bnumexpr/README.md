| Source:  bnumexpr.dtx
| Version: v1.5, 2021/05/17 (doc: 2021/05/17)
| Author:  Jean-Francois Burnol
| Info:    Expressions with big integers
| License: LPPL 1.3c

bnumexpr usage
==============

The LaTeX package `bnumexpr` allows expandable computations with
integers and the four infix operators `+`, `-`, `*`, `/` using the
expression syntax familiar from the `\numexpr` e-TeX parser, with
these extensions:

- arbitrarily big integers,
- floored division `//`,
- associated modulo `/:`,
- power operators `^` and `**`,
- factorial post-fix operator `!`,
- comma separated expressions,
- the space character as well as the underscore may serve
  to separate groups of digits,
- optional conversion of output to hexadecimal,
- customizability and extendibility of the syntax.

The expression parser is a scaled-down variant from the
`\xintiiexpr...\relax`
parser from package [xintexpr](http://ctan.org/pkg/xintexpr).

To support hexadecimal input and output, the package
[xintbinhex](http://ctan.org/pkg/xint) is loaded automatically.

The package loads by default [xintcore](http://ctan.org/pkg/xint)
but the option _custom_ together with macro `\bnumexprsetup` allow to map
the syntax elements to macros from an alternative big integer
expandable engine of the user own choosing,
and then [xintcore](http://ctan.org/pkg/xint) is not loaded.

Installation
============

Use your installation manager to install or update `bnumexpr`.

Else, obtain `bnumexpr.dtx`, from CTAN:

> <http://www.ctan.org/pkg/bnumexpr>

Run `"etex bnumexpr.dtx"` to extract these files:

`bnumexpr.sty`
  : this is the style file.

`README.md`

`bnumexprchanges.tex`
  : change history.

`bnumexpr.tex`
  : can be used to generate the documentation

To generate the documentation:

  - with latex+dvipdfmx: `"latex bnumexpr.tex"` (thrice) then
    `"dvipdfmx bnumexpr.dvi"`.

  - with pdflatex: `"pdflatex bnumexpr.tex"` (thrice).

In both cases files `README.md` and `bnumexprchanges.tex` must
be located in the same repertory as `bnumexpr.tex` and `bnumexpr.dtx`.

Without `bnumexpr.tex`:

  - `"pdflatex bnumexpr.dtx"` (thrice) extracts all files and
    simultaneously generates the pdf documentation.

Final steps:

- move files to appropriate destination:

           bnumexpr.sty   --> TDS:tex/latex/bnumexpr/

           bnumexpr.dtx   --> TDS:source/latex/bnumexpr/

           bnumexpr.pdf   --> TDS:doc/latex/bnumexpr/
              README.me   --> TDS:doc/latex/bnumexpr/

- discard auxiliary files generated during compilation.

License
=======

Copyright (C) 2014-2021 by Jean-Francois Burnol

| This Work may be distributed and/or modified under the
| conditions of the LaTeX Project Public License 1.3c.
| This version of this license is in

>   <http://www.latex-project.org/lppl/lppl-1-3c.txt>

| and version 1.3 or later is part of all distributions of
| LaTeX version 2005/12/01 or later.

This Work has the LPPL maintenance status "author-maintained".

The Author and Maintainer of this Work is Jean-Francois Burnol.

This Work consists of the main source file and its derived files

    bnumexpr.dtx, bnumexpr.sty, bnumexpr.pdf, bnumexpr.tex,
    bnumexprchanges.tex, README.md

