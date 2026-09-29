wrapstuff
=========

The `wrapstuff` package provides another implementation of text wrapping.
Its implementation benefits from the paragraph hooks available since
LaTeX 2021-06-01.

Basic Usage
-----------
The package only provides a user environment `wrapstuff`.

    \begin{wrapstuff}[<options>]
      <wrapping stuff>
    \end{wrapstuff}
    <main text>

You can read the package manual (in Chinese) for some explanations.

Contributing
------------
The package is still highly experimental and not fully tested.
[Issues](https://github.com/qinglee/wrapstuff/issues) and
[pull requests](https://github.com/qinglee/wrapstuff/pulls)
are always welcome.

Copyright and Licence
---------------------

    Copyright (C) 2022 by Qing Lee <sobenlee@gmail.com>
    -----------------------------------------------------------------

    This work may be distributed and/or modified under the
    conditions of the LaTeX Project Public License, either
    version 1.3c of this license or (at your option) any later
    version. This version of this license is in
       http://www.latex-project.org/lppl/lppl-1-3c.txt
    and the latest version of this license is in
       http://www.latex-project.org/lppl.txt
    and version 1.3 or later is part of all distributions of
    LaTeX version 2005/12/01 or later.

    This work has the LPPL maintenance status "maintained".

    The Current Maintainer of this work is Qing Lee.

    This package consists of the file  wrapstuff.dtx,
                 and the derived files wrapstuff.pdf,
                                       wrapstuff.sty,
                                       wrapstuff.ins and
                                       README.md (this file).
