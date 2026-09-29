Package versonotes
==================

Version 0.5, 2023 December 31

This package allows you to place notes on the verso pages of an
otherwise single-sided document.

If, in the run of text, you include a call to the macro
`\versonote{This is a remark}`, then that text will be placed on the
opposite (ie, ‘verso’) page, lined up with the macro call.

You can see a sample of how to use the package, and its results, in
[sample.tex](sample.tex) and [sample.pdf](sample.pdf).

The source is available at [the code home page][nxg],
and the package is distributed on CTAN in
[macros/latex/contrib/versonotes/][ctan]

Copyright 2014, 2015, 2019, 2023, Norman Gray.

The package is distributed under the conditions of the LaTeX Project
Public License, either version 1.3 of this licence or (at your option)
any later version; see the file `lppl.txt` for details.

Acknowledgements, and release notes
-----------------------------------


Thanks to Thomas H. Luxon for permission to include the
Dartmouth Milton text of “Paradise Lost” notes in the sample
text.

Version 0.5, 2023 December 31

  * Now compatible with LuaTeX.

  * Now uses L3‐style hooks, but retains compatibility with
    pre‐2020 engines.

  * Updated the links to the repository, and to the Dart‐
    mouth Milton text.

Version 0.4, 2019 July 6
    Support changing the initial page number (thanks to P J
    Couch for the suggestion).

Version 0.3, 2015 December 8

  * Minor documentation adjustments.

  * Added the [rectonotes] option (thanks to Axel Berger for
    this suggestion).

Version 0.2, 2015 February 16
    Initial public release.



Norman Gray  
https://nxg.me.uk

[nxg]: https://heptapod.host/nxg/versonotes
[ctan]: https://ctan.org/pkg/versonotes
