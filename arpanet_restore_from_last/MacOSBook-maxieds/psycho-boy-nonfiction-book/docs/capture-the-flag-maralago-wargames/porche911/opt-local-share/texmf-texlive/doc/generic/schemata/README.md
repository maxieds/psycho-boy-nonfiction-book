# Short Description

The schemata package helps the creation of topical outlines that illustrate the breakdown of concepts and categories in academic texts from the late medieval to early modern periods.

# Files

|Filename        |Description                            |
|----------------|---------------------------------------|
|`schemata.dtx`  |commented style file; source file      |
|`Makefile`      |For use with GNU make; with source file|
|`schemata.ins`  |installation driver (generated file)   |
|`schemata.sty`  |style file          (generated file)   |
|`schemata.pdf`  |Documentation       (generated file)   |
|`README.md`     |This file           (generated file)   |
|`schematest.tex`|Test file           (generated file)   |
|`schemata.eps`  |Image file used for the manual         |

# Obtaining the Package

1. Packaged in your current TeX distrbution: See the appropriate documentation.

2. Otherwise, download `schemata.zip` from [CTAN](http://mirrors.ctan.org/macros/generic/schemata.zip).

3. Unpack `schemata.zip` in an appropriate directory.

4. Change to the  directory containing the `schemata` files.

# File Generation

## Automatic Installation

This method requires GNU `make` on a POSIX-compliant environment, such as GNU/Linux, various BSD flavors, perhaps MacOS (e.g., with various porting systems), and even Cygwin on Windows.

  * Building and testing with `xelatex` and `lualatex` requires one to have the font `GFSDidot.otf` in a system or user font path. The GFS fonts are available in most Linux distributions and may be downloaded from the [Greek Font Society](https://www.greekfontsociety-gfs.gr/).

  *  The package can be built and used with `dvilualatex` only when one can use modern testing packages (but `dvipdf` fails). The test file fails with `dvilualatex`, but it works with `dviluatex`.

  * We now use an Encapsulated PostScript graphics file instead of a Portable Network Graphics file to permit all LaTeX variants to build the package.

  * We use the LaTeX installation on the host machine to build the package. When using `make`, any `dvi` files that are created will also be converted to `pdf` format.

1. Type `make` to generate the release files using `pdflatex`.

2. To use another LaTeX engine, type one of the following:

        make ENGINE=xelatex
        make ENGINE=lualatex
        make ENGINE=dvilualatex
        make ENGINE=latex

3. Type `make inst` to install the files in the user's personal TDS-compliant directory tree.

4. Type `sudo make install` to install the files in the system-wide, local TDS-compliant directory tree.

5. One can include multiple make targets on the command line, but that goes beyond the scope of this document and is intended for experienced users.

## Manual Compilation

Otherwise, the following steps are used for manual installation. See the general information at the [TeX FAQ](https://www.texfaq.org/FAQ-installthings).

1. To build the package on the host system, generate the installation files and a copy of the documentation without the table of contents and cross-references. We use `pdflatex` by default:

        pdflatex --shell-escape --recorder --interaction=batchmode schemata.dtx

2. This will generate the following files:

        schemata.ins   (complete)
        schemata.sty   (complete)
        schemata.pdf   (incomplete; do steps 3 through 5)
        README.md      (complete)
        schematest.tex (complete)

3. Generate the TOC and cross-references for the documentation:

        pdflatex --recorder --interaction=nonstopmode schemata.dtx

4. Generate the index files using `makeindex`:

        makeindex -q -s gglo.ist -o schemata.gls schemata.glo
        makeindex -q -s gind.ist -o schemata.ind schemata.idx

5. Integrate the glossary (changes) and index into the documentation. The second run updates the TOC:

        pdflatex --recorder --interaction=nonstopmode schemata.dtx
        pdflatex --recorder --interaction=nonstopmode schemata.dtx

One can substitute, e.g., `xelatex`, `lualatex`, `dvilualatex`, and `latex`, for `pdflatex`, but the documentation may look different in some cases.

## Manual File Installation

Different TeX distributions have somewhat different ways to store TDS-compliant configuration and package data. See, for example, [MikTeX](https://miktex.org/kb/texmf-roots) and the [TeX FAQ](https://www.texfaq.org/FAQ-privinst). Two approaches below conform generally to a Unix-based system:

## User's Home Directory

`TEXMFHOME` is a variable that points to the root of a TDS-compliant directory tree available to a user. Use `kpsewhich --var-value TEXMFHOME` to obtain its value. Quite often it is equivalent to `$HOME/texmf`. The dollar sign in front of the variable denotes the value of the variable instead of its name. So if `$HOME` is `/home/bob`, then `$TEXMFHOME` would be `/home/bob/texmf`, and we can understand the following paths to be under that directory:

|Path                                |Description                                 |
|------------------------------------|--------------------------------------------|
|`$TEXMFHOME/source/generic/schemata`|`ins` and `dtx` files, Makefile, `eps` file |
|`$TEXMFHOME/tex/generic/schemata`   |`sty` file                                  |
|`$TEXMFHOME/doc/generic/schemata`   |`pdf` file, `README.md`, `schematest.tex`   |

On older TeX distributions, run `mktexlsr` on $TEXMFHOME to complete the install process.

## System-Wide Directory

`TEXMFLOCAL` is a variable that points to the root of a TDS-compliant directory tree available to all users on a local site, system-wide installation. Use `kpsewhich --var-value TEXMFLOCAL` to obtain its value. See the [TeX FAQ](https://www.texfaq.org/FAQ-what-TDS). We can understand the following paths to be under that directory:

|Path                                 |Description                                 |
|-------------------------------------|--------------------------------------------|
|`$TEXMFLOCAL/source/generic/schemata`|`ins` and `dtx` files, Makefile, `eps` file |
|`$TEXMFLOCAL/tex/generic/schemata`   |`sty` file                                  |
|`$TEXMFLOCAL/doc/generic/schemata`   |`pdf` file, `README.md`, `schematest.tex`   |

Run `mktexlsr` with the appropriate permissions on `$TEXMFLOCAL` to complete the install process.

# Testing

## Compiling `schematest.tex`

1. Either go to the directory used when unpacking the `zip` file or copy the file `schematest.tex` from the `doc/generic/schemata` branch of whatever TDS-compliant tree to a directory of your choice.

2. If one has access to GNU `make`, use either `Makefile` in the directory where one unpacked the `zip` file or copy `Makefile` from either `src/generic/schemata` or `doc/generic/schemata` in whatever TDS-compliant tree it exists.

    When using `make`, any `dvi` files that are created will also be converted to `pdf` format.

3. To compile the test file using `make` and `pdftex`, simply type:

        make testing

4. For multi-format testing using `make` in addition to that above, one can do the following. The comments should not be typed; they tell one what to expect:

        Comment: Shows transliterated Latin for Greek
        ---------------------------------------------
        make testing TESTENGINE=tex
        make testing TESTENGINE=luatex
        make testing TESTENGINE=dviluatex
        make testing TESTENGINE=xetex
        ---------------------------------------------
        make testing TESTENGINE=eplain
        ---------------------------------------------
        make testing TESTENGINE=lollipop
        ---------------------------------------------
        Comment: Shows Greek text via babel
        ---------------------------------------------
        make testing TESTENGINE=latex
        make testing TESTENGINE=pdflatex
        ---------------------------------------------
        Comment: Shows Greek text via polyglossia
        ---------------------------------------------
        make testing TESTENGINE=lualatex
        make testing TESTENGINE=xelatex

5. If one does not have `make`, one can use any one of the following commands. The comments should not be typed; they tell one what to expect:

        Comment: Shows transliterated Latin for Greek
        ---------------------------------------------
        tex --interaction=nonstopmode schematest
        pdftex --interaction=nonstopmode schematest
        luatex --interaction=nonstopmode schematest
        dviluatex --interaction=nonstopmode schematest
        xetex --interaction=nonstopmode schematest
        ---------------------------------------------
        eplain --interaction=nonstopmode schematest
        ---------------------------------------------
        lollipop --interaction=nonstopmode schematest
        ---------------------------------------------
        Comment: Shows Greek text via babel
        ---------------------------------------------
        latex --interaction=nonstopmode schematest
        pdflatex --interaction=nonstopmode schematest
        ---------------------------------------------
        Comment: Shows Greek text via polyglossia
        ---------------------------------------------
        lualatex --interaction=nonstopmode schematest
        xelatex --interaction=nonstopmode schematest

The manual is also a test suite.

# Copyright

Copyright (C) 2021 by Charles P. Schaum <charles[dot]schaum@comcast.net>
-------------------------------------------------------

This file may be distributed and/or modified under the
conditions of the LaTeX Project Public License, either version 1.3
of this license or (at your option) any later version.
The latest version of this license is in:

   [https://www.latex-project.org/lppl.txt](https://www.latex-project.org/lppl.txt)

and version 1.3 or later is part of all distributions of LaTeX
version 2005/12/01 or later.
