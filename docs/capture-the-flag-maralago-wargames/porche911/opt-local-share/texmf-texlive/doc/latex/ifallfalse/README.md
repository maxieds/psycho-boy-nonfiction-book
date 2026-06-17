# The LaTeX package ifallfalse - version 2.0.0 (2021/07/22)

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

`ifallfalse` provides an `allfalse` environment that can compare a string against a set of another strings, and if it matches none of them, it executes some action.

Note that this package does not work with the `lualatex` engine.

## Package contents

- `README.md` this file
- `ifallfalse.pdf` documentation PDF with implementation details
- `ifallfalse.dtx` contains package and documentation code
- `ifallfalse.ins` generates .sty from .dtx

## File generation

A working TeX installation is required.

Run

    tex ifallfalse.ins

to generate `ifallfalse.sty`. To use it, you need to put `ifallfalse.sty` into a directory searched by TeX.

Run

    pdflatex ifallfalse.dtx

to generate `ifallfalse.pdf`, which contains the package documentation.