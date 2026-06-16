[![Latest Document](https://img.shields.io/github/v/release/huangyxi/useclass?label=Docs)](https://github.com/huangyxi/useclass/releases/latest/download/useclass.pdf)
[![GitHub Release](https://img.shields.io/github/v/release/huangyxi/useclass?label=Release)](https://github.com/huangyxi/useclass/releases/latest)
[![CTAN](https://img.shields.io/ctan/v/useclass?label=CTAN)](https://www.ctan.org/pkg/useclass)


# The `useclass.sty` Package: Load Classes as Packages

## Introduction
`useclass` is a package that enables the usage of classes as packages.
It was originally designed for the `l3doc` class, which is employed for documenting LaTeX code with numerous useful features.
However, employing the `l3doc` class as a package is not convenient when using the developing class as the style for the document.
Therefore, this package provides a simple interface for utilizing classes as packages.
The latest documentation is available [here](https://github.com/huangyxi/useclass/releases/latest/download/useclass.pdf).


## Installation

The following methods are available for installing and updating the package.
Choose the method that best suits your needs.

Since this package is derived from the `.dtx` file, the easiest way to install or update it is to place or replace the `useclass.sty` file in the same directory as your working document.
You can download `useclass.sty` from the [GitHub Release](https://github.com/huangyxi/useclass/releases/latest/download/useclass.sty).

For a full installation of the package, you can use a TeX repository manager such as TeX Live.
This method will download the package from CTAN and install all required files to TeX Directory Structure (TDS).
For command-line users, the following commands can be used:

```bash
tlmgr [--usermode] install useclass
tlmgr [--usermode] update useclass
```

If you're a developer interested in contributing to the project's development, or if you simply want to try the latest features before they are released, you can clone the repository from GitHub and use either `l3build` or `make` to install the package.


## Usage
Use `\useclass` to load a class with the same usage as `\usepackage`:
```tex
\useclass[<options>]{<class>}
```
where `<options>` and `<class>` are the options and the name of the loaded class, respectively.

Example:
```tex
\usepackage{useclass}
\useclass[full]{l3doc}
```

## License
This work may be distributed and/or modified under the
conditions of the LaTeX Project Public License, either version 1.3c
of this license or (at your option) any later version.
This version of this license is in
    https://www.latex-project.org/lppl/lppl-1-3c.txt
and the latest version of this license is in
    https://www.latex-project.org/lppl.txt
and version 1.3c or later is part of all distributions of LaTeX
version 2008 or later.
