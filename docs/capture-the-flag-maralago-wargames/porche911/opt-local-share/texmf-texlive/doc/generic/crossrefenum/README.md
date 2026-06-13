# crossrefenum 2024/04/13 v1.1

Smart typesetting of enumerated cross-references for various TeX formats.

Copyright (C) 2022-2024
by Bastien Dumont <bastien.dumont@posteo.net>

CTAN: `macros/generic/crossrefenum`

## Summary

_crossrefenum_ lets TeX manage the formatting
of bunches of cross-references for you. It features:

* Automatic collapsing of references;
* Support for references by various criteria,
  including page and note number, line number in ConTeXt
  and edpage and edline when used in conjunction with _reledmac_;
* Handling of references combining two criteria
  (e.g. by page and note number);
* Extension mechanisms to add support to other types of references
  without modifying the internal macros.

Note that sorting is not supported.
I assume that users know in what order
the labels they refer to appear in their document.

It is written in Plain TeX as much as possible
in order to make it compatible with a wide array of formats.
For the moment, it works out of the box with ConTeXt and LaTeX.

## List of files

* `CHANGELOG.md`:
* `LICENSE.txt`: _GNU Public License v. 3_
* `README.md`:
* `doc/`:
  * `crossrefenum.md`: _Markdown source of the user guide to be typeset with Pandoc._
  * `crossrefenum.pdf`: _User guide typeset with ConTeXt._
  * `fixes.lua`: _Lua filter to be used with Pandoc for some typographic improvements._
  * `LICENSE_FDL_1-3.md`: _GNU Free Documentation License_
  * `Makefile`: _Provides the target `crossrefenum.pdf` with the required instructions for Pandoc_
  * `TEMPLATE_crossrefenum.context`: _Template to be used with Pandoc._
* `test/`:
  * `config-crossrefenum.tex`: _Configuration macros for *crossrefenum* `specific`: to the test file._
  * `config-formats.tex`: _Preambles to be used in the test file for all supported formats._
  * `data-common.tex`: _Text input to be used with all formats._
  * `data-lines.tex`: _Text input to test line numbering._
  * `data-reledmac.tex`: _Text input for *reledmac*._
  * `format-specific-defs.tex`: _Definition of the macros used in the test and data files that depend on format-specific macros._
  * `main-test_context.pdf`: _Test file generated with ConTeXt._
  * `main-test_latex.pdf`: _Test file generated with LaTeX._
  * `main-test.tex`: _Main test file._
  * `Makefile`: _Provides targets to generate the test file (`test` for LaTeX, `test-context`) and to `check` its correctness._
  * `validated_output`: _Used by `make check`._
* `tex/`
  * `crossrefenum.sty`: _Wrapper for LaTeX._
  * `crossrefenum.tex`: _Macro file._
  * `t-crossrefenum.tex`: _Wrapper for ConTeXt._

## Manual installation

In your local texmf tree, create `tex/generic/crossrefenum`
and put in it `crossrefenum.tex` and, if required,
`crossrefenum.sty` and/or `t-crossrefenum.tex`.

## License

Copyright 2022-2024 by Bastien Dumont (bastien.dumont@posteo.net)
 
crossrefenum.tex is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
 
crossrefenum.tex is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
 
You should have received a copy of the GNU General Public License
along with crossrefenum.tex.  If not, see <https://www.gnu.org/licenses/>.
