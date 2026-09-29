# *RORLINK* – A LaTeX Package for Linking ROR's

*by Florian Lukas, florian.lukas@dainst.de*

This repo provides a LaTeX package to automatically create an inline [ROR](https://ror.org/)-symbol which links to a given ROR-institution.

The code is derived mainly from the [Orcidlink package](https://github.com/duetosymmetry/orcidlink-LaTeX-command) by Leo Stein, which itself rests on the [Tex.SE answer](https://tex.stackexchange.com/questions/445563/ieeetran-how-to-include-orcid-in-tex-pdf-with-pdflatex/445583#445583) by the user Milo. My edits are only minor changes; especially the addition of the svg-path for the ROR symbol.

## Installation

The package is official available on [CTAN](https://www.ctan.org/pkg/rorlink). It can be easily donwloaded there.

Or copy the `rorlink.sty` file from GitLab into your current LaTeX working directory. You also can copy it directly into your `texmf` tree. This may need **root** privileges.

## Usage

The usage is very simple. For example, just use:

```latex
Tim Duncan \rorlink{<full-ror-url-of-institution>}
```

The result will look like:

![Name followed by ROR symbol with link](example.png)

## License

The package is licensed under the [LPPL 1.3c](https://www.latex-project.org/lppl.txt).