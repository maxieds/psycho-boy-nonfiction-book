# gridset

An experimental LaTeX package for semi-manual grid (a.k.a. in-register) setting

------------------------------------------------------------------------------

LaTeX package `gridset`

Copyright (c) 2008—2024 Markus Kohm

Release: 2024-08-17 v0.4

License: LPPL 1.3c (see LICENSE.md)

CTAN Location: https://ctan.org/pkg/gridset

------------------------------------------------------------------------------

## Summary

This package provides commands to save positions to and restore positions from
`aux`-file. This may be used for grid setting (a.k.a. strict in-register
setting).

## Status Note

This package should not have been released, because it was only a very
quick implementation of an idea. You should not use it for any productive
purpose.  It has been made for testing only.  I would prefer to retire it
from any distribution.  Nevertheless I know few persons using the package.
So it will be still there but without any support!

## Installation

The package is part of [TeX Live](https://tug.org/texlive) (and therefore
also [MacTeX](https://tug.org/mactex)) and [MiKTeX](http://miktex.org). Users
should use the packages provided by their TeX distribution.

------------------------------------------------------------------------------

For a semi-manual installation you can first create a local clone
if the repository:

```bash
git clone https://github.com/komascript/gridset.git
```

Then enter the directory created while cloning the repository:

```bash
cd gridset
```

Last, but not least use `l3build` to install it locally:

```bash
l3build install --full
```

------------------------------------------------------------------------------

To do a completely manual installation, download `gridset.dtx`.  Then extract
it using:

```bash
tex gridset.dtx
```

To create the manual use:

```bash
pdflatex gridset.dtx
mkindex gridset
pdflatex gridset.dtx
pdflatex gridset.dtx
```

Now, you can either install it in the proper directory or copy `gridset.sty`
to your document directory.

------------------------------------------------------------------------------

# How to Say Thank You for my Work

Hey, I'm doing this as a hobby. So no need to say thank you. But I'm a vain
fop, so I'm certainly up for a quick thank you by email. On komascript.de you
can find an [explanation of my wishes](https://komascript.de/wunschliste) if
you want to give more. If you don't understand German, just click to links at
that page.
