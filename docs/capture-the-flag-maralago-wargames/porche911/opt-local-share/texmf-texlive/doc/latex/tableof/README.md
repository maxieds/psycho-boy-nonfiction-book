tableof
=======

- Package: tableof (Tables of tagged contents)
- Version: 1.4d (2024/09/17)
- License: LPPL 1.3c
- Copyright (C) 2012, 2013, 2015, 2018, 2021, 2024 Jean-Francois Burnol <jfbu at free dot fr>

Provides `\toftagstart{}`, `\toftagstop{}`, `\toftagthis{}`, `\tofuntagthis{}`
to tag chapters, sections or any other sectioning units destined to end up in
the table(s) of contents. Then each one of

    \tableof{required tags}
    or \tablenotof{excluded tags}
    or \tableoftaggedcontents{required tags}{excluded tags}

typesets a table of contents (with no heading) obeying the conditions.  These
macros can each be used multiple times in the document with varying arguments.

If the document contains no usage of `\tableofcontents`, the preamble should
also contain an additional `\AtBeginDocument{\tofOpenTocFileForWrite}`.

The main `\tableofcontents` can also be influenced by tags like this:

    \nexttocwithtags{required tags}{excluded tags}
    \tableofcontents

Depending on the document class and packages `\tableofcontents` however may be
usable only once, contrarily to the `\tableof{}` et al. package macros.

Change History
==============

* v1.4d (2024/09/17) reestablishes compatibility with `hyperref`,
  which got broken at the latter `v7.01c` release.  The package now
  requires LaTeX 2020-10-01.  Thanks to Ekkart Kleinod for report.

* v1.4c (2021/07/05) additional efforts for `biblatex` compatibility.
  Allow style file extraction via `etex`, reword the abstract. Use utf8
  source encoding.

* v1.4b (2018/10/02) fix to bug when a document ended with `\clearpage`
  before the `\end{document}`. `tableof` now requires `atveryend` package.

* v1.4a (2015/03/10) changes for enhanced compatibility with `etoc`.

* v1.4  (2015/02/20) under the hood code improvements.

* v1.3  (2015/02/11) comma separated lists of tags now allow spaces.

* v1.2  (2013/03/04) added command `\tableoftaggedcontents`.

* v1.1  (2012/12/13) added command `\nexttocwithtags`.

* v1.0  (2012/12/06) first release.


Installation
============

Extractions:

      etex tableof.dtx

Move `tableof.sty` to a suitable location within the TeX installation:

      tableof.sty -> <TDS>/tex/latex/tableof/

The `tableoftest.tex` file is provided as an example of use of the package.

To generate the documentation, execute:

    latexmk tableof.dtx
    dvipdfmx tableof.dvi
 

License
=======

    This Work may be distributed and/or modified under the
    conditions of the version 1.3c of the LaTeX Project Public License.
    This version of this license is in
	
<http://www.latex-project.org/lppl/lppl-1-3c.txt>

    The Author of this Work is:
        Jean-Francois Burnol <jfbu at free dot fr> 

