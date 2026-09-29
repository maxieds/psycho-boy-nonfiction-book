thermodynamics - A package for chemical engineers and others
=============================================================

Thermodynamics texts (textbooks, articles, and so forth) are typically filled
with underlined and overlined symbols, partial derivatives surrounded by
delimiters and containing subscripts, sums over multiple components, and a
myriad of symbols, including superscript and subscript modifiers. This
package provides a robust, flexible set of macros to define notation for
symbols, partial derivatives, sums, and products frequently encountered in
mixture thermodynamics. Changing one's notes from one textbook to another or
from one notation style to another can be achieved relatively easily by
changing package options, without any changes to the user's code (other than
perhaps adjusting line breaks).

Installation
------------

The package is suppled in `dtx` format with an accompanying `ins` file to
install the package. Run `latex thermodynamics.ins` to extract the package;
instructions for building the documentation are included in the `ins` file.
Note that the package itself (`sty` file) is required to typeset the
documentation.

This package requires the `amstext` and `expl3` packages.

Typesetting the documentation requires several other packages:
 - `geometry`
 - `fontenc`
 - `textcomp`
 - `amsmath`
 - `pxfonts`
 - `array`
 - `booktabs`
 - `footmisc`
 - `caption`
