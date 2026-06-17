# 1 Short Description

The `nameauth` package automates the correct formatting and indexing of names for professional writing. This aids the use of a name authority and the editing process without needing to retype name instances.

# 2 Installing a Distro Package

One can find `nameauth` in one's current TeX distribution. See the appropriate documentation in TeXlive, MikTeX, MacTeX, Linux distro, BSD, etc. Use those tools to ensure that `nameauth` is installed. **You are done.**

# 3 Obtaining from CTAN

## 3.1 Getting the Package Archive

If not using the tools above, one can download `nameauth.zip` from [CTAN](https://mirrors.ctan.org/macros/latex/contrib/nameauth.zip). After downloading, unpack `nameauth.zip` in an appropriate directory. Change to the directory containing the supplied files. The following files are included in the archive that is uploaded to CTAN:

| Filename       | Description                |
| :------------- | :------------------------- |
| *Source*       |                            |
| `Makefile`     | for use with GNU make      |
| `cat01.pdf`    | manual illustration, ch. 7 |
| `beamer01.pdf` | manual illustration, ch. 9 |
| `beamer02.pdf` | manual illustration, ch. 9 |
| `beamer03.pdf` | manual illustration, ch. 9 |
| `nameauth.dtx` | commented macro file       |
| *Generated*    |                            |
| `compat.tex`   | compatibility module       |
| `examples.tex` | example file               |
| `README.md`    | this file                  |
| *Built*        |                            |
| `nameauth.pdf` | package documentation      |

## 3.2 Determining the Installation type

### 3.2.1 Read `Makefile` First

`Makefile` has an extensive comment on usage, as well as other helpful comments. It lists all required programs needed to use the GNU make file for installation in a POSIX-compliant environment, such as GNU/Linux, various BSDs, MacOS, and WSL or Cygwin on Windows.

Minimum required programs include `bash` or an equivalent shell (for which one must edit `Makefile`), and `make`, plus a TeX distribution. To distribute the package, one also requires at least `sed`, and `zip`.

### 3.2.2 POSIX Cases

If one is using a TeX distribution in a POSIX environment (MacOS, Linux distro, BSD, etc.) and has the required programs listed in `Makefile`, one may do one of the following:

1. Use GNU make to build and install. **Section 4.1**

2. Build and install manually. **Section 4.2**

### 3.2.3 Windows Cases

Windows offers the largest number of possibilities:

* Cygwin offers a POSIX environment and its own TeX distribution. Avoid installing another TeX distro via WSL or Windows native. **Section 4.1**

* WSL offers a POSIX environment and its own TeX distribution. Avoid installing another TeX distro via Cygwin or Windows native. **Section 4.1**

* Use `make` within either Cygwin or WSL to build this package for native Windows TeX distributions MikTeX or TeXlive. Install needed build components in either Cygwin or WSL, alongside either MikTeX or TeXlive, but not both distros. Avoid installing another TeX distro in either Cygwin or WSL.

    * One can use `make` to build this package. **Section 4.1.1**

    * Installation must be manual. **Section 4.2.2**

* Directly using native Windows TeX distributions (MikTeX or TeXlive)

    All building and installation must be manual. **Section 4.2**

* Other POSIX environments running under DOS, Windows, and other systems have not been tested and are not supported.

* `Makefile` contains tests that will mitigate some issues:

    * If a `.exe` extension is needed by programs used in the building process, that is detected automatically.

    * If `ltxfileinfo` does not exist, the make process will produce a zip file that avoids potential problems in Windows.

    * If `dvipdf` from Ghostscript is installed, the make process will use that. Otherwise it will fall back to `dvipdfmx`.

    * If `pdfjam` is installed, the make process uses it. Otherwise, it will instruct the user to proceed manually. **Section 6.2.3**

    * When installing, the make process will check if the path to the install directory exists. If it does not, it will produce an error message and exit.

    If this error message occurs, which is more likely in Windows, please refer to installation of local packages in MikTeX [here](https://docs.miktex.org/manual/localadditions.html#id573803) and [here](https://miktex.org/kb/texmf-roots). Otherwise see the [TeX FAQ](https://www.texfaq.org/FAQ-privinst) and [this page](https://en.wikibooks.org/wiki/LaTeX/Installing_Extra_Packages).

Here is a table showing the feasibility of a few scenarios. Any case that is not mentioned below has not been tested and is not recommended.

| Build Env. | TeX Distro Platform | Make builds pkg/zip            | Make installs package           |
| :--------- | :------------------ | :----------------------------- | :------------------------------ |
| POSIX      | POSIX               | Yes<sup>1</sup>                | Yes                             |
| Cygwin     | Cygwin (packages)   | Not tested; likely<sup>1</sup> | Not tested; likely <sup>2</sup> |
| Cygwin     | MikTeX (Windows)    | Yes<sup>1, 3</sup>             | No;<sup>4</sup> do manually     |
| Cygwin     | TeXlive (Windows)   | Not tested; likely<sup>1</sup> | Not tested; do manually         |
| WSL        | WSL Linux packages  | Yes<sup>1</sup>                | Yes<sup>5</sup>                 |
| WSL        | MikTeX (Windows)    | Yes<sup>1, 3</sup>             | No;<sup>4</sup> do manually     |
| WSL        | TeXlive (Windows)   | Not tested; likely<sup>1</sup> | Not tested; do manually         |

<sup>1</sup> All dependencies must be met. Bear in mind possible MacOS issues.

<sup>2</sup> Installs only to Cygwin environment; not to Windows environment.

<sup>3</sup> The `make images` target using `pdfjam` likely will not work as desired. **Section 6.2.3 Images**

<sup>4</sup> Neither `ltxfileinfo` nor `kpsewhich` will give useful results; do a manual install.

<sup>5</sup> Installs only to WSL Linux distro environment; not to Windows environment.

# 4 Building and Installing

Regarding command line options longer than one letter, the programs included with major TeX distributions, except for `pdfjam`, use either single dashes or GNU-style double dashes.

Here, for the sake of consistency, we use the GNU convention of single dashes with one-letter options and double dashes for longer options.

## 4.1 GNU `make` for Building and Installation

### 4.1.1 Build

In the directory where the files unpacked from the zip archive are located, type `make`. This will do a fresh build of the package using `pdflatex`. To add more options, use, e.g.: `make ADDOPTS="--synctex=1"`.

There is a make target, `make unpack`, that does not build the package. It only regenerates files from `nameauth.dtx`.

### 4.1.2 Install

Currently, `Makefile` only installs into POSIX environments.

For individual use, one must have a TDS-compliant tree set up in order for installation to work. For more info in setting up those trees, see **Section 4.2.3** for the individual case and **Section 4.2.4** for the site-wide case.

For site-wide use, one must be able to get root privileges via `sudo`.

* Type `make inst` to install the package files in the user's personal TDS-compliant directory tree.

* Type `make install` to install the package files in the site-wide, local TDS-compliant directory tree. The user will be prompted for the `sudo` password.

### 4.1.3 Remove

The same constraints that apply to installation also apply to removal. If one can do the former, one can do the latter.

* Type `make uninst` to remove the package files in the user's personal TDS-compliant directory tree.

* Type `make uninstall` to remove the package files in the site-wide, local TDS-compliant directory tree. The user will be prompted for the `sudo` password.

The approach of `Makefile` is not to get too aggressive with deletions from the texmf tree, just in case. One may see harmless, extra, empty directories after removal. One can delete them manually.

## 4.2 Manual Building and Installation

Unlike the case with the supplied `Makefile`, which automates adding extensions, in certain cases using Windows TeX distros, one may have to add the ".exe" extension to the programs.

### 4.2.1 Build

1. Using the unpacked files from the zip archive, we begin by creating the installation driver, unpacking additional files from `nameauth.dtx`, and generating a copy of the documentation without the table of contents and cross-references:

        pdflatex --shell-escape --recorder --interaction=batchmode nameauth.dtx

    a. We see the following main files:

    `Makefile`, `cat01.pdf`, `beamer01.pdf`, `beamer02.pdf`, `beamer03.pdf`, `nameauth.dtx`, `compat.tex`, `examples.tex`, `nameauth.pdf`, `README.md`, `nameauth.ins`, and `nameauth.sty`.

    b. We also see the following temporary files:

    `nameauth.aux`, `nameauth.fls`, `nameauth.glo`, `nameauth.hd`, `nameauth.idx`, `nameauth.log`, `nameauth.out`, `nameauth.tmp`, and `nameauth.toc`.

2. Generate the TOC and cross-references within the documentation:

        pdflatex --recorder --interaction=nonstopmode nameauth.dtx

3. Generate the index and glossary files using `makeindex`:

        makeindex -q -s gglo.ist -o nameauth.gls nameauth.glo
        makeindex -q -s gind.ist -o nameauth.ind nameauth.idx

    This adds three files: `nameauth.gls`, `nameauth.ilg`, and `nameauth.ind`.

4. Integrate the glossary (list of changes) and index into the documentation. The second run updates the TOC:

        pdflatex --recorder --interaction=nonstopmode nameauth.dtx
        pdflatex --recorder --interaction=nonstopmode nameauth.dtx

    The list of files now looks like:

| Filename       | Description                  |
| :------------- | :--------------------------- |
| `Makefile`     | for use with GNU make        |
| `cat01.pdf`    | manual illustration, ch. 7   |
| `beamer01.pdf` | manual illustration, ch. 9   |
| `beamer02.pdf` | manual illustration, ch. 9   |
| `beamer03.pdf` | manual illustration, ch. 9   |
| `nameauth.dtx` | commented style file         |
|                |                              |
| `compat.tex`   | compatibility module         |
| `examples.tex` | example file                 |
| `nameauth.pdf` | package documentation        |
| `README.md`    | this file                    |
|                |                              |
| `nameauth.ins` | installation driver          |
| `nameauth.sty` | style file                   |
|                |                              |
| `nameauth.aux` | auxiliary file               |
| `nameauth.fls` | shows files read             |
| `nameauth.glo` | raw glossary entries         |
| `nameauth.hd`  |                              |
| `nameauth.idx` | raw index entries            |
| `nameauth.log` | log file                     |
| `nameauth.out` | pdf bookmark/hypertext info  |
| `nameauth.tmp` | temp file used with fancyvrb |
| `nameauth.toc` | table of contents info       |
| `manhook.tmp`  | snippet with manual's fmt    |
| `nullhook.tmp  | snippet with default format  |
|                |                              |
| `nameauth.gls` | typeset glossary entries     |
| `nameauth.ilg` | `makeindex` log file         |
| `nameauth.ind` | typeset index entries        |

### 4.2.2 General Install Info

In order to perform manual installation, one should be familiar with the general information at the [TeX FAQ](https://www.texfaq.org/FAQ-installthings).

Different TeX distributions have somewhat different ways to store TDS-compliant configuration and package data. See, for example, for MikTeX [here](https://docs.miktex.org/manual/localadditions.html#id573803) and [here](https://miktex.org/kb/texmf-roots). Otherwise see the [TeX FAQ](https://www.texfaq.org/FAQ-privinst) and [this page](https://en.wikibooks.org/wiki/LaTeX/Installing_Extra_Packages).

The instructions below conform generally to a Unix-like system. There are some cases under Windows where this method may not work. For other non-POSIX systems, one will have to know the appropriate procedures and documentation as needed for those cases, which are not covered here.

The user must already have a TDS-compliant tree set up in order for installation to work. We assume that one knows how to become superuser, create directories, move files, and the like.

### 4.2.3 Install for a User

`TEXMFHOME` is an environment (shell) variable that points to the root of a TDS-compliant directory tree available to a user. To get its value on POSIX-compliant systems, use:

* `kpsewhich --var-value TEXMFHOME`

Quite often, `$TEXMFHOME` is equivalent to `$HOME/texmf`. The dollar sign in front of the variable denotes the value of the variable instead of its name. If `$HOME` is `/home/bob`, then `$TEXMFHOME` would be `/home/bob/texmf`. We can understand the following paths to be under this home directory.

| Path                               | Files          |
| :--------------------------------- | :------------- |
| `$TEXMFHOME/source/latex/nameauth` | `Makefile`     |
|                                    | `cat01.pdf`    |
|                                    | `beamer01.pdf` |
|                                    | `beamer02.pdf` |
|                                    | `beamer03.pdf` |
|                                    | `nameauth.dtx` |
|                                    |                |
| `$TEXMFHOME/doc/latex/nameauth`    | `compat.tex`   |
|                                    | `examples.tex` |
|                                    | `nameauth.pdf` |
|                                    | `README.md`    |
|                                    |                |
| `$TEXMFHOME/tex/latex/nameauth`    | `nameauth.sty` |

Create the directories in the left-hand column, or the equivalent. For manual installation, move or copy the files in the right-hand column to their respective directories in the left-hand column. On older TeX distributions, run `mktexlsr` on `$TEXMFHOME` to complete the install process (current distributions may not need this).

### 4.2.4 Install Site-Wide

`TEXMFLOCAL` is a variable that points to the root of a TDS-compliant directory tree available to all users on a local site, system-wide installation. To get its value, use:

* `kpsewhich --var-value TEXMFLOCAL`

See the [TeX FAQ](https://www.texfaq.org/FAQ-what-TDS). We can understand the following paths to be under this local site, system-wide directory:

| Path                                | Files          |
| :---------------------------------- | :------------- |
| `$TEXMFLOCAL/source/latex/nameauth` | `Makefile`     |
|                                     | `cat01.pdf`    |
|                                     | `beamer01.pdf` |
|                                     | `beamer02.pdf` |
|                                     | `beamer03.pdf` |
|                                     | `nameauth.dtx` |
|                                     |                |
| `$TEXMFLOCAL/doc/latex/nameauth`    | `compat.tex`   |
|                                     | `examples.tex` |
|                                     | `nameauth.pdf` |
|                                     | `README.md`    |
|                                     |                |
| `$TEXMFLOCAL/tex/latex/nameauth`    | `nameauth.sty` |

Create the directories in the left-hand column. For manual installation, move or copy the files in the right-hand column to their respective directories in the left-hand column. Change file ownership as needed. If needed, run `mktexlsr` with the appropriate permissions on `$TEXMFLOCAL` to complete the install process. See also the discussion on [this page](https://tex.stackexchange.com/questions/45231/how-to-install-system-wide-packages-without-requiring-an-ls-r-database-with-tex).

# 5 More on Package Building

* The package and manual build on current and older TeX distributions, being designed with that in mind.

* The documentation is built only with `pdflatex` for the sake of its design elements. The examples and tests can be built with any LaTeX engine.

* This release was tested on Linux (Pop! OS; vanilla TL, both current and 2017) and Windows 10 (MikTeX using shells from both Cygwin and WSL). Using TL 2017, this release was tested on the full manuscript of the published volume, *Breath of God, Yet Work of Man: Scripture, Philosophy, Dialogue, and Conflict*, with Dr. Albert B. Collver III.

* The CTAN release was created with the current vanilla TL on Pop! OS. See also [this page](https://tug.org/texlive/debian.html) for Debian-based systems. For Arch-based systems, the AUR has a package that takes care of dependencies.

* TeXlive versions are managed on Pop! OS using [tl-switch](https://github.com/ServusCarolus/tl-switch).

* Four pdf files (`cat01.pdf` and `beamer*.pdf`) used in graphic illustrations are created from the output of test files associated with this manual (see below). Normally, the user need not generate them; they are supplied as source files.

# 6 Examples / Testing

The file `examples.tex` also includes `compat.tex`; they should be in the same directory when compiled. The examples document should be enough to illustrate various non-trivial features of this package. It includes most of the longer examples in the manual, edited to fit together in a single document. It also includes other material and tests.

In addition to this file, a special run of `nameauth.dtx` that defines the macro `\NameauthDoTestFiles` will generate many separate test files. They are not included in the package archive by default.

To test `nameauth`, either test the files right after installing, or create a new testing directory. One then can copy the files from the TDS-compliant source dir and optionally, the documentation directory as well, or unpack the CTAN zip file into the test directory and build the package.

## 6.1 Using GNU `make`

### 6.1.1 Examples

* Use the default: `make examples`.

* If one wants to change engines and re-test the file, type `make exclean`.

* To create `examples.pdf` with other LaTeX engines, one can do the following:

        make examples ENGINE=xelatex
        make examples ENGINE=lualatex
        make examples ENGINE=dvilualatex
        make examples ENGINE=latex

* To add more options, use, e.g.:

        make examples ADDOPTS="--synctex=1"

### 6.1.2 Tests

This will produce many test files numbered by chapter and example within that chapter from the `nameauth.dtx` file. By default it will compile all of the test files using `pdflatex`.

* To generate test files, type `make tests`.

* If one wants to change engines and re-test the files, type `make testclean`.

* One can add the value of ENGINE:

        make tests ENGINE=xelatex
        make tests ENGINE=lualatex
        make tests ENGINE=dvilualatex
        make tests ENGINE=latex

* To add more options, use, e.g.:

        make tests ADDOPTS="--synctex=1"

### 6.1.3 Manual Illustrations

Four manual illustrations are based on included tests. If, for some reason, one wanted to create those illustrations (usually not required), one would type `make images`.

## 6.2 Manual Method

### 6.2.1 Examples

* Compile `examples.tex`.

    In the following command lines, one may substitute `latex`, `xelatex`, `lualatex`, and `dvilualatex` for `pdflatex`.

        pdflatex --interaction=nonstopmode examples
        pdflatex --interaction=nonstopmode examples
        makeindex -o examples.ind examples.idx

* This next line is needed because the `index` package makes an index of persons.

        makeindex -o examples.rnd examples.rdx

* These lines complete the indexes and TOC.

        pdflatex --interaction=nonstopmode examples
        pdflatex --interaction=nonstopmode examples

* Another step is used only with `latex` and `dvilualatex`.

    We default to `dvipdfmx` in case Ghostscript is not installed. If Ghostscript is already installed, one can use `dvipdf` instead. If a file `examples.out.ps` exists, one may delete it after creating the pdf file.

        dvipdfmx examples

If one changes LaTeX engines, one first must remove all of the auxiliary files.

### 6.2.2 Tests

* Generate the test files in the following manner from the `dtx`:

        pdflatex "\def\NameauthDoTestFiles{}\input{nameauth.dtx}"

* Compile the test files.

    In the following command lines, one may substitute `latex`, `xelatex`, `lualatex`, and `dvilualatex` for `pdflatex`. One must change the root or base file name for each test file.

        pdflatex --interaction=nonstopmode test01-01
        pdflatex --interaction=nonstopmode test01-01
        makeindex -o test01-01.ind test01-01.idx

* This next line is needed only for `test07-01.tex` because the `index` package is used for an index of persons.

        makeindex -o test07-01.rnd test07-01.rdx

* These lines complete the indexes and TOC.

        pdflatex --interaction=nonstopmode test01-01
        pdflatex --interaction=nonstopmode test01-01

* This step is used only when using `latex` and `dvilualatex`.

        dvipdfmx test01-01

If one changes LaTeX engines, one first must remove all of the auxiliary files.


### 6.2.3 Images

Four manual illustrations are based on included tests. If, for some reason, one wanted to make the manual illustrations (usually not required), this would be the default procedure:

* Generate the test files in the following manner from the `dtx`:

        pdflatex "\def\NameauthDoTestFiles{}\input{nameauth.dtx}"

* Compile the test files:

        pdflatex --interaction=nonstopmode test07-02
        pdflatex --interaction=nonstopmode test07-02
        makeindex -o test07-02.ind test07-02.idx
        pdflatex --interaction=nonstopmode test07-02
        pdflatex --interaction=nonstopmode test07-02

        pdflatex --interaction=nonstopmode test09-01
        pdflatex --interaction=nonstopmode test09-01
        makeindex -o test09-01.ind test09-01.idx
        pdflatex --interaction=nonstopmode test09-01
        pdflatex --interaction=nonstopmode test09-01

* Split and convert the files. If `pdfjam` is not available, one would have to use other programs to do this.

        pdfjam --paper a6paper --landscape --quiet test07_02.pdf 3 --outfile cat01.pdf
        pdfjam --paper a5paper --landscape --quiet test09_01.pdf 1 --outfile beamer01.pdf
        pdfjam --paper a5paper --landscape --quiet test09_01.pdf 2 --outfile beamer02.pdf
        pdfjam --paper a5paper --landscape --quiet test09_01.pdf 3 --outfile beamer03.pdf

# 7 Additional Notes

Starting from version 4.0 we switched from `xargs` and `suffix` to `xparse`. Should any modifications still require `xargs` and `suffix`, one can use the `oldargs` package option.

Version 3.7 remains here: [style](https://www.tug.org/svn/texlive/branches/branch2022.final/Master/texmf-dist/tex/latex/nameauth/), [docs](https://www.tug.org/svn/texlive/branches/branch2022.final/Master/texmf-dist/doc/latex/nameauth/), and [source](https://www.tug.org/svn/texlive/branches/branch2022.final/Master/texmf-dist/source/latex/nameauth/).

# 8 Copyright

Copyright (C) 2025 by Charles P. Schaum <charles[dot]schaum@comcast.net>

This file may be distributed and/or modified under the
conditions of the LaTeX Project Public License, either
version 1.3 of this license or (at your option) any
later version. The latest version of this license is in:

[https://www.latex-project.org/lppl.txt](https://www.latex-project.org/lppl.txt)

and version 1.3 or later is part of all distributions
of LaTeX version 2005/12/01 or later.

This work includes all source and generated files
described as such in this file, README.md.
