              LaTeX Package mathfont v. 2.3
                Installation Guide/README
                     Conrad Kosowsky


This file is README.txt from version 2.3 of the free and
open-source LaTeX package "mathfont," to be used with the
XeTeX or LuaTeX engines. The package is designed to adapt
text fonts for use in math mode. See the user guide for
more information. See below for installation instructions.

*********************************************************

To install mathfont automatically, update your TeXLive or
MacTeX distribution or use a package manager such as tlmgr.

To install mathfont manually requires two steps as follows.

Step 1: You need to generate the package file mathfont.sty
from mathfont_code.dtx. You can do this in two ways:

  (1) Running Plain TeX on mathfont_code.dtx will create
      mathfont.sty as well as several other tex files
      that can be used for typesetting documentation.

  (2) Running LaTeX on mathfont_code.dtx will produce the
      files listed in point (1) including mathfont.sty as 
      well as mathfont_code.pdf.

Step 2: Once you have created mathfont.sty, you should
move it into a directory searchable by TeX to complete the
installation. If you are unsure how to do this, consult
your TeX distribution.

*********************************************************

Besides this README, the installation contains the following
items:

  (1) mathfont_code.dtx: the main file. See above for
      instructions to generate mathfont.sty from this
      file and complete the installation.

  (2) mathfont_code.pdf: documentation of the package
      code.

  (3) mathfont_symbol_list.pdf: a list of symbols that
      mathfont provides access to.

  (4) mathfont_user_guide.pdf: a user guide.

  (5) four files called mathfont_example_<fontname>.pdf:
      examples of mathfont in action.

Typesetting mathfont_code.dtx will generate the tex files
used to create the pdf documentation listed in points (3)
through (5) above.

*********************************************************

Copyright 2018-2023 by Conrad Kosowsky

This Work may be used, distributed, and modified under the
terms of the LaTeX Public Project License, version 1.3c or
any later version. The most recent version of this license
is available online at

          https://www.latex-project.org/lppl/.

This Work has the LPPL status "maintained," and the current
maintainer is the package author, Conrad Kosowsky. He can
be reached at kosowsky.latex@gmail.com. The Work consists
of the following items:

  (1) the base file:
        mathfont_code.dtx

  (2) the package file:
        mathfont.sty

  (3) the derived files:
        mathfont_doc_patch.tex
        mathfont_equations.tex
        mathfont_example_cormorant.tex
        mathfont_example_kelvinch.tex
        mathfont_example_roboto.tex
        mathfont_example_typey.tex
        mathfont_heading.tex
        mathfont_symbol_list.tex
        mathfont_user_guide.tex

  (4) the pdf documentation files:
        mathfont_code.pdf,
        mathfont_example_cormorant.pdf
        mathfont_example_kelvinch.pdf
        mathfont_example_roboto.pdf
        mathfont_example_typey.pdf
        mathfont_symbol_list.pdf
        mathfont_user_guide.pdf

  (5) all other files created through the configuration
      process

    and

  (6) this README.txt file

The Work does not include any fonts, and the installation
does not contain any font files. The fonts Bona Nova, 
Cormorant, Crimson, Kelvinch, Overpass, STIXGeneral, and 
Typey McTypeface have released under the SIL Open Font 
License and are used pursuant to that license. The font 
Roboto has been released under the Apache License and is 
used pursuant to that license.

PLEASE KNOW THAT THIS FREE SOFTWARE IS PROVIDED WITHOUT
ANY WARRANTY. SPECIFICALLY, THE "NO WARRANTY" SECTION OF
THE LATEX PROJECT PUBLIC LICENSE STATES THE FOLLOWING:

THERE IS NO WARRANTY FOR THE WORK. EXCEPT WHEN OTHERWISE
STATED IN WRITING, THE COPYRIGHT HOLDER PROVIDES THE WORK
`AS IS’, WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED
OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE
OF THE WORK IS WITH YOU. SHOULD THE WORK PROVE DEFECTIVE,
YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR, OR
CORRECTION.

IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED
TO IN WRITING WILL THE COPYRIGHT HOLDER, OR ANY AUTHOR
NAMED IN THE COMPONENTS OF THE WORK, OR ANY OTHER PARTY
WHO MAY DISTRIBUTE AND/OR MODIFY THE WORK AS PERMITTED
ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY GENERAL,
SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT
OF ANY USE OF THE WORK OR OUT OF INABILITY TO USE THE WORK
(INCLUDING, BUT NOT LIMITED TO, LOSS OF DATA, DATA BEING
RENDERED INACCURATE, OR LOSSES SUSTAINED BY ANYONE AS A
RESULT OF ANY FAILURE OF THE WORK TO OPERATE WITH ANY
OTHER PROGRAMS), EVEN IF THE COPYRIGHT HOLDER OR SAID
AUTHOR OR SAID OTHER PARTY HAS BEEN ADVISED OF THE
POSSIBILITY OF SUCH DAMAGES.

For more information, see the LaTeX Project Public License.
Derivative works based on this package may come with their
own license or terms of use, and the package author is not
responsible for any third-party software.

*********************************************************

For more information, see mathfont_code.dtx. Happy TeXing!
