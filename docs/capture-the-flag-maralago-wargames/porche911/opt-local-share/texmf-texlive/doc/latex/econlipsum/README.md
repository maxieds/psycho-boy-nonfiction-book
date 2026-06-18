The `econlipsum` package is a modified version of `kantlipsum` that offers the same functionalities, but instead of nonsense in Kantian style,
it typesets paragraphs infered from the abstracts of some economic articles. The text has been generated from the [Econ Ipsum](https://ipsum.mwt.me/) website, created by [Matthew Wildrick Thomas](https://mattwthomas.com/) and [Maria Fernanda Petri Betto](https://mariabetto.com/).

The package has been built using `antanilipsum` build script, that can be found in the package [Github repo](https://github.com/AlphaJack/antanilipsum).

This released is based on `kantilipsum` version 0.8a.

Copyright 2021 Jack Coleman

It may be distributed and/or modified under the conditions of the LaTeX Project Public License (LPPL), either version 1.3c of this license or (at your option) any later version.  The latest version of this license is in the file https://www.latex-project.org/lppl.txt.
The author is Jack Coleman and is reachable at the email address `alphajack AT tuta DOT io`.

This work has the LPPL maintenance status "author-maintained".

This work consists of the following files:

- README.md (this file)
- econlipsum.dtx
- econlipsum.pdf

and of the derived file

- econlipsum.sty

To install the distribution run

```
lualatex econlipsum.dtx
```

It is also possible to use `tex` or `pdflatex` for the task, but `lualatex` [is advised](https://github.com/matlab2tikz/matlab2tikz/wiki/TeX-capacity-exceeded,-sorry) when using a large amount of paragraphs.
