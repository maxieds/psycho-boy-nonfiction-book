
# secnum

This package provides a macro `\setsecnum` to format section numbering intuitively.

## Usage

One can simply use `\setsecnum{A,:1.i}` to set the section numbering
format as `Alph` for the sections, `arabic` for the subsections and
`arabic.roman` for the subsubsections and
the `secnumdepth` and `tocdepth` will be 3.

If one want to set the tocdepth manually,
there is an option `tocdep` for it.

One may notice that the comma `,` plays a special role in the numbering format:
the shallower section levels will not be shown in titles of deeper levels,
but it will appear in reference labels.

## Installation

The installation is the same as usual Tex packages.

0. Put the source file `secnum.dtx` in a empty folder and go to there.

1. Run the following to create the package file `secnum.sty` (as well as this file `README.md`)

       pdfTeX secnum.dtx

2. Move the following file into proper directories searched by TeX.
   The recommended directory is

       tex/latex/secnum

3. To produce the documentation run the following

       pdfLaTeX secnum.dtx

4. The recommended directory for the documentation is

       doc/latex/secnum

## Download

One can also download the generated files from the [github release](https://github.com/GauSyu/secnum/releases).

