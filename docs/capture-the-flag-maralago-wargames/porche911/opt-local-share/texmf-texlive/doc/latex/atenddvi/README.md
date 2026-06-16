# atenddvi package for LaTeX

Version: 2020-11-11 v1.5

This package is unneeded and does nothing when used with
a LaTeX format 2020-10-01 or newer as in this case the format
provides the \AtEndDvi command.


For older formats it it implements \AtEndDvi, a counterpart 
to \AtBeginDvi. The execution of its argument is delayed to 
the end of the document at the end of the
last page. Thus \special and \write remain effective, because
they are put into the last page. This is the main difference
to \AtEndDocument.


## Copyright (C)
* 2007, 2009-2011  Heiko Oberdiek
* 2016-2020        Oberdiek Package Support Group

## License
LATEX Project Public License, version 1.3c or later.

