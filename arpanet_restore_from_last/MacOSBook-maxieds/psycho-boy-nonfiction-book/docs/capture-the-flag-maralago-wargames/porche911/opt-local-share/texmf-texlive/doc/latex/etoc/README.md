<!-- -->

    Source:  etoc.dtx (1.2d)
    Author:  Jean-Francois Burnol
    Info:    Completely customisable TOCs
    License: LPPL 1.3c
    Copyright (C) 2012-2023 Jean-Francois Burnol.
    <jfbu at free dot fr>

ABSTRACT
========

With `etoc` loaded, `\tableofcontents` can be used multiple times and
an added command `\localtableofcontents` allows to typeset "local"
tables of contents, i.e. having their scope limited to the last
sectioning command encountered.

No auxiliary file is used additionally to the standard `.toc` file.
Release 1.2 provides **experimental** additions `\locallistoffigures` and
`\locallistoftables` which also use only the `.toc` file.

Such local TOCs or "Lists Of" typically need to adopt a "display
style" (i.e. the way the title is rendered, whether it should add
itself an entry in the `.toc` file, ...) somewhat distinct from the
global TOC.  The release 1.2 default adapts automatically the titles
of local TOCs to their depths in the sectioning hierarchy.  Should the
need arise to customize such "display style", full control is allowed
by package commands.

Regarding how the individual "contents lines" are handled, here again
complete control is given to the user to define from the ground-up how
to use the *name*, *number*, and *page number* for each entry,
according to their "levels" (i.e. part, chapter, section, subsection,
...).  As this requires some LaTeX fluency, many examples which can
serve as starting points are attached to the PDF documentation as
extractible files.

Loading `etoc` per itself modifies nothing to "contents lines"
rendering from the class default or changes from other packages.  But
full usage of the package allows spectacular effects such as displaying
TOCs as trees or mind maps.

INSTALLATION
============

For manual installation do `etex etoc.dtx` to extract files then move
`etoc.sty` to a place where TeX can find it.

    etoc.sty    -> TDS:tex/latex/etoc/etoc.sty
    etoc.dtx    -> TDS:source/latex/etoc/etoc.dtx
    etoc.pdf    -> TDS:doc/latex/etoc/etoc.pdf
    README.md   -> TDS:doc/latex/etoc/README.md

To produce `etoc.pdf` run pdflatex on the extracted file `etoc.tex`
sufficiently many times (`latexmk -pdf etoc` is recommended).

LICENSE
=======

This Work may be distributed and/or modified under the
conditions of the LaTeX Project Public License, in its
version 1.3c. This version of this license is in

> <http://www.latex-project.org/lppl/lppl-1-3c.txt>

and the latest version of this license is in

> <http://www.latex-project.org/lppl.txt>

and version 1.3 or later is part of all distributions of
LaTeX version 2005/12/01 or later.

The Author of this Work is Jean-Francois Burnol <jfbu at free dot fr>

This Work consists of the main source file etoc.dtx and the derived files
etoc.sty, etoc.tex, etoc.pdf, etoc.dvi.

RECENT CHANGES
==============

- `1.2d 2023/10/29` fix crash (since `1.2`) in presence of
  `\usepackage[nottoc]{tocbibind}`.  Thanks to François Jonca for report.

- `1.2c 2023/10/28` compatibility hotfix with `hyperref v7.01c`.  Thanks
  to Denis Bitouzé for report.

- `1.2b 2023/07/01` fixes a regression from `1.2` regarding concomitant
  usage of the package with `tocloft`.  Some documentation improvements,
  in particular discussion of compatibility with `microtype`.

- `1.2a 2023/05/01` lifts the requirement added at `1.1a` of a LaTeX
  kernel from 2020-10-01 or later, and also the requirement added at
  `1.2` of availability of the `\expanded` engine primitive.  It also
  adds a `deeplevels` option.

- `1.2 2023/03/01` completes the core internal refactoring from
  `1.1a-d` and adds **experimental** `\locallistoffigures` and
  `\locallistoftables`.  It lets `\localtableofcontents` by default
  auto-select a heading style adapted to its location inside the document
  hierarchy, and adds options to control whether local TOCs and Lists Of
  add an entry corresponding to their heading in the `.toc` file.
  Compatibility with `tocbibind` package, too.

- `1.1a 2023/01/14` up to `1.1d` are mainly about refactoring core
  legacy code.  In part, this is to prepare for future changes relative
  to how hyperref and the LaTeX kernel will interact in the future.

