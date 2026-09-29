# TexSurgery

This tex package is a companion to the `texsurgery` `python` project:

[https://framagit.org/pang/texsurgery](https://framagit.org/pang/texsurgery)

This `LaTeX` library will make sure that

`pdflatex document.tex`

will work, with reasonable defaults, for a document that is intended to work with `texsurgery`, and also has other uses, always in tandem with the `texsurgery` `pypi` package.

However, remember that `texsurgery` is a `python` project whose main focus is on __evaluating code inside a `jupyter` kernel__, and this is _only_ achieved by installing the `python` package and calling the `texsurgery` command

`texsurgery -pdf document.tex`

## License

The `texsurgery` `CTAN` package follows a [BSD license])(https://opensource.org/licenses/BSD-3-Clause), the same license as the `texsurgery` `python` project:

[https://framagit.org/pang/texsurgery/-/blob/master/LICENSE](https://framagit.org/pang/texsurgery/-/blob/master/LICENSE)

## texsurgery.pdf

The file `texsurgery.pdf` in the texsurgery CTAN LaTeX package was generated with the command

`pandoc README.md -o texsurgery.pdf`
