docutils.sty
============

Helper commands and element definitions for Docutils_ LaTeX output.

:Copyright: © 2020 Günter Milde

:Licence: Released under the terms of the `2-Clause BSD license`__

  __ https://opensource.org/licenses/BSD-2-Clause


Changelog
---------

| 2020-08-28  first public version for Docutils >= 0.17
  
Requirements
------------

None.

Installation
------------

If possible, get this package from your distribution using its
installation manager. Alternatively, copy/move/link ``docutils.sty``
to a place where LaTeX can find it.

Usage
-----

The package is intended for use with LaTeX documents generated from
reStructuredText_ sources with Docutils_.

When generating LaTeX documents, specify this package with the
`"stylesheet"`_ `configuration option`_, e.g. ::

    rst2latex --stylesheet=docutils exampledocument.txt
    
The the Docutils `LaTeX writer` will then reference this package
istead of inserting required definitions into the preamble of
generated documents (see the `Docutils LaTeX Writer documentation`_ 
for details).

.. _reStructuredText: https://en.wikipedia.org/wiki/ReStructuredText

.. _Docutils: https://docutils.sourceforge.io/

.. _"stylesheet":
   https://docutils.sourceforge.io/docs/user/config.html#stylesheet-latex-writers

.. _configuration option:
   https://docutils.sourceforge.io/docs/user/config.html

.. _Docutils LaTeX Writer documentation:
  https://docutils.sourceforge.io/docs/user/latex.html

Documentation Generation
------------------------

The bidirectional text <-> code converter PyLit_ and Docutils_
were used to generate the HTML documentation::

    #> pylit docutils.sty
    #> rst2html5 docutils.sty.txt docutils.sty.html

.. _Pylit: https://repo.or.cz/pylit.git

