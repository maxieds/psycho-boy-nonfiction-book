<!-- -->

    Author:  Jean-Francois Burnol
    Package: centeredline
    Version: 1.2 (2022/10/10)
    License: LPPL 1.3c
    Copyright (C) 2019, 2022 Jean-Francois Burnol
    <jfbu at free dot fr>

# DESCRIPTION #

After `\usepackage{centeredline}` one can use

    \centeredline{....}

to get the argument centered, without ending the current paragraph, and
without adding extra vertical spacing, in a better way than if using
`\centerline`:

1. `\verb` or other catcode changes inside the argument are allowed,
2. The centering (with respect to the surrounding text paragraph) will
   be as expected if this all happens inside an item from a LaTeX list
   environment.
3. One does not need to use `\newline` before and after (or at least
   leave a space token after).  Doing so does not hurt, though.

The macro itself may be used while in paragraph or in vertical mode.
Like `\centerline`, if used in vertical mode, it does not enter
paragraph mode.

The macro places its argument in a `\hbox` and assignments done inside
the argument see thus their scope limited to the line.

The macro is usable from inside a (paragraph mode) table cell.

It can be nested (for example the argument is a `tabular` or a `\parbox`
and inside it another `\centeredline` is used).

Material whose natural width exceeds the line width will get properly
centered too, the extra width going into the margins (or into the
neighboring cells, if used in a paragraph mode table cell).


# CHANGE LOG #

Initial statement:

I have used this macro since 2013 and it has served me well.

I am making it public as is, without any re-thinking about whether it may
have some limitations which I somehow did not encounter in my personal usage.
Suggestions for improvements are welcome, and will be recorded although I do
not expect to update the package anytime soon.

- v1.0 (2019/04/27): First release.
- v1.1 (2019/05/03): Improve this README.
- v1.2 (2022/10/10):
  * make the macro usable in table cells
    (thanks to Antoine Missier for pointing out this limitation;
     see his package `spacingtricks` for another centering macro)
  * avoid an extra empty line if the macro is used following a `\\`
    or a `\newline` (but why should it be? ;-) )
    (thanks to Kroum Tzanev for a related discussion)


# LICENSE #

This Work may be distributed and/or modified under the
conditions of the LaTeX Project Public License 1.3c.
This version of this license is in

> <http://www.latex-project.org/lppl/lppl-1-3c.txt>

and the latest version of this license is in

> <http://www.latex-project.org/lppl.txt>

and version 1.3 or later is part of all distributions of
LaTeX version 2005/12/01 or later.

The Author of this Work is:

> Jean-Francois Burnol `<jfbu at free dot fr>`

This Work consists of the file `centeredline.sty` and
accompanying `README.md`.
