The 'newverbs' LaTeX package
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Copyright (c) 2010-2022 by Martin Scharrer <martin.scharrer@web.de>
License: LPPL v1.3c or later <https://www.latex-project.org/lppl/lppl-1-3c/>
CTAN: https://www.ctan.org/pkg/newverbs
Texdoc: https://texdoc.org/pkg/newverbs
Homepage: https://github.com/MartinScharrer/newverbs
Repository: https://github.com/MartinScharrer/newverbs.git
Issue tracker: https://github.com/MartinScharrer/newverbs/issues

This package allows the definition of \verb variants which add TeX code before
and after the verbatim text (e.g. quotes or \fbox{}).  When used together with
the 'shortvrb' package it allows the definition of short verbatim characters
which use this variants instead of the normal \verb.

Another feature is provided using the macros `\collectverb` and `\Collectverb`
which allow other macros to collect an argument verbatim to either typeset or
write it into an auxiliary file, respectively.
A `\Verbdef` macro is provided to define verbatim text to a macro which can be 
used for writing the text to auxiliary files.
This differs from the `\verbdef` macro from the `verbdef` package which define
macros with a typesetable version of the verbatim text which cannot be written
to auxiliary files.

