# Package `formal-grammar`

This package provides an easy way to write formal grammars.

To use it, run the following commands:
```
$ latex formal-grammar.ins
$ pdflatex formal-grammar.dtx
```
The first command generates the file `formal-grammar.sty` that should be placed
in the same folder than your main document. The second command generates the
file `formal-grammar.pdf` (you may require multiple runs to adjust internal
references), which is the documentation for the package.

# License

This package is provided under the terms of the LaTeX Project Public License,
version 1.3 or later.

# Author

The initial author of this package is Martin Vassor.

Thanks to Enrico Gregorio (egreg) for suggesting improvements.
Thanks to Fangyi Zhou for the "center |" feature in `formal-grammar` (Commit: #4c3727ef)

# See also

 - [**simplebnf**](https://www.ctan.org/pkg/simplebnf): this package provides an
   easier way to describe the grammar (no need to use special commands), but
   offers less customisation options (highlight, etc.).
 - [**backnaur**](https://www.ctan.org/pkg/backnaur).
