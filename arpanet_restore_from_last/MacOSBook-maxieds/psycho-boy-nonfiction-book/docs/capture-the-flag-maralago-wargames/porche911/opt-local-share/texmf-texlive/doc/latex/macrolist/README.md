# The LaTeX package macrolist - version 2.1.0 (2021/07/31)

> Copyright (C) 2021 Dennis Chen <proofprogram@gmail.com>
>
> This file may be distributed and/or modified under
> the conditions the LaTeX Project Public License (LPPL),
> either version 1.3 of this license or (at your option)
> any later version. The latest version of this license
> can be found in
> http://www.latex-project.org/lppl.txt
> and version 1.3 or later is part of all distributions of LaTeX
> version 2005/12/01 or later.

`macrolist` provides lists and common list functions, such as `add`, `remove`, `foreach`, as well as `removelast` and `join`.

## Package contents

- `README.md` this file
- `macrolist.pdf` documentation PDF with implementation details
- `macrolist.dtx` contains package and documentation code
- `macrolist.ins` generates .sty from .dtx

## File generation

A working TeX installation is required.

Run

    tex macrolist.ins

to generate `macrolist.sty`. To use it, you need to put `macrolist.sty` into a directory searched by TeX.

Run

    pdflatex macrolist.dtx

to generate `macrolist.pdf`, which contains the package documentation.
