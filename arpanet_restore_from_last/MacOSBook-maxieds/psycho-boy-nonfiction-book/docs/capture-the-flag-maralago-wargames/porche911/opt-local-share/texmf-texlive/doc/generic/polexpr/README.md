Package polexpr README
======================

Version ``0.8.7a`` of ``2022/05/19``.

Abstract
--------
 
The package provides a parser `\poldef` of algebraic expressions.
As it is based on [xintexpr](http://www.ctan.org/pkg/xintexpr) the
polynomial coefficients are allowed to be arbitrary rational
numbers.  Operations on declared polynomials, such as computing
G.C.D.'s or evaluating definite and indefinite integrals are
available directly inside the parser via a functional syntax, or
also via dedicated package macros.

Root localization is available via package macros.  All real roots
can be obtained with arbitrarily long decimal expansions, and all
rational rounds found exactly.

In memoriam: Jürgen Gilg
------------------------

`polexpr` is dedicated to the memory of Jürgen Gilg (1966-2022).

His question in January 2018 about using
[xintexpr](http://www.ctan.org/pkg/xintexpr) to compute derivatives
of polynomials was the original motivation for the creation of this
package. Jointly with Thomas Söll, he used it and kept expressing
his interest in it throughout the subsequent years, and provided
motivation and encouragements for time-consuming tasks such as (as
was done finally in 2021) re-enacting full interoperability with
[xintexpr](http://www.ctan.org/pkg/xintexpr) after its `1.4` update
from 2020.

I will remember with gratitude his generous and unassuming
character, which I witnessed during our numerous exchanges on a wide
range of topics.

Usage
-----

The package can be used with eTeX based formats via

    \input polexpr.sty

or with LaTeX via

    \usepackage{polexpr}

[xintexpr](http://www.ctan.org/pkg/xintexpr) `1.4h` or later is
required.

Recent changes
--------------

- 0.8 (2021/03/29)
  Complete refactoring of the package core for better interoperability
  with `xintexpr` internal changes at its release `1.4 (2020/01/31)`.
  Extension of the functional syntax to cover operations such as
  G.C.D.'s, derivatives or indefinite integrals previously available
  via macros.
- 0.8.1 (2021/04/12)
  Bug fix: a typo broke the 0.8 ``diff1()`` and related functions.
- 0.8.2 (2021/05/05)
  Track `xintexpr` 1.4e changes
- 0.8.3 (2021/05/27)
  Track `xintexpr` 1.4h changes
- 0.8.4 (2021/11/01)
  Bug fix: `PolSturmIsolateZeros**` did not declare the square free
  part of the original polynomial if no real root existed.
- 0.8.5 (2021/11/30)
  Bug fix: `intfrom()` was documented at `0.8` but not declared to parser.
  Track (belatedly) `xintexpr` 1.4g changes
- 0.8.6 (2022/01/09)
  Separate `polexpr-examples.{tex,pdf}` from the `polexpr.html` reference.
- 0.8.7 (2022/05/14)
  CSS styling of the `html` documentation, which is now split over
  three files.  Catcode protection for `\poldef` now matches
  long-standing behaviour of `\xintdefvar`. This fixes issues
  with ``babel+french``.
- 0.8.7a (2022/05/19)
  Documentation improvements.

License
-------

Copyright (C) 2018-2022 Jean-François Burnol

See documentation of package [xintexpr](http://www.ctan.org/pkg/xint) for
contact information.

This Work may be distributed and/or modified under the conditions of the
LaTeX Project Public License version 1.3c. This version of this license
is in

> <http://www.latex-project.org/lppl/lppl-1-3c.txt>

and version 1.3 or later is part of all distributions of LaTeX version
2005/12/01 or later.

This Work has the LPPL maintenance status author-maintained.

The Author of this Work is Jean-François Burnol.

This Work consists of:

- the package files: polexpr.sty, polexprcore.tex,
  polexprexpr.tex, polexprsturm.tex,
- this README.md,
- the documentation files:
  polexpr.html, polexpr-ref.html, polexpr-changes.html,
  polexpr.css, polexpr-examples.pdf,
  polexpr.rst.txt, polexpr-ref.rst.txt, polexpr-changes.rst.txt,
  polexpr-examples.tex

