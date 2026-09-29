           --------------------------------------------------------
           |  xpunctuate: a package to add punctuation, e.g. to   |
           |              abbreviations, as and when necessary    |
           |              (along the lines of xspace).            |
           |                                                      |
           |    Philip G. Ratcliffe - version 2.0 (2023/08/13)    |
           --------------------------------------------------------

* LaTeX xpunctuate.ins to produce xpunctuate.sty

* Copy xpunctuate.sty to one of your TeX input directories.

* LaTeX xpunctuate.dtx for usage instructions and documentation.

This is the first revision of the "xpunctuate" package; it defines 
commands for typesetting, e.g., abbreviations where the trailing period may 
clash with a sentence terminator.  More precisely it avoids the natural 
problem of definitions such as \def\etc{\emph{etc}.}, which may then cause
double periods if used at the end of sentences, such as ... cats, dogs \etc. 
It also deals with optional commas, which again may be rendered unnecessary by
the presence of a following sentence terminator. 

Change history: 
v2.0 overhauled all user commands, introduced \NewDocumentCommand,
     added \xspaceafter.
v1.0 first official release.

