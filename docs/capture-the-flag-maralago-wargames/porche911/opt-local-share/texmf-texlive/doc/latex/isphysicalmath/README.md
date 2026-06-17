---
isphysicalmath package

Author: Mario Fantini, <ing.mariofantini@gmail.com>

License: LaTeX Project Public License lppl

Copyright (c) 2024 Mario Fantini
---


# Overview

LaTeX is a powerful language, but to take advantage of it, to respect its quality \
and to observe the discipline of matters that it interacts with: it requires some \
devices.

If you are interested in the form of math and physics, here comes `isphysicalmath` \
inside LaTeX; as far as international scientific notation and formatting of formulas, \
quantities, numerical values, factors, dimensions, measurement units.

So, isphysicalmath` package helps user to write mathematical and physical contents, \
according to the scientific notation (international mainly), in an elegant way.


# Dependencies

`isphysicalmath` has xstring package dependency, but you don’t need to specify \
it in your document preamble.

Internally, it uses standard commands like: \textnormal, \hspace{}, \,; however, \
it performs its activity in complex math environment too.


# Documentation

The documentation is `isphysicalmath-doc.pdf` mainly. It contains:

- General Index

- Introduction

- Conventions

- Dependencies

- Usage

- In-depth usage

    - In-depth formatting

    - In-depth notation

        - option 'dc'

        - command 'comma'

        - Rendering of a number as it multiplied by number ten raised to positive \
          exponents of power

            - By first digit as leading digit, without truncated digits on the right of it

            - By first digit as leading digit, with truncated digits on the right of it

        - Rendering of a number as it multiplied by number ten raised to negative \
          exponents of power

            - By first digit as leading digit, without truncated digits on the right of it
            
            - By first digit as leading digit, with truncated digits on the right of it

        - option 'flushpostdot'

- isphysicalmath url
 
- Copyright
 
- Change History


# Credits

Thanks to all  TeX/LaTeX contributors, in  particular to Scott Pakin for his \
packaging tutorial, and to CTAN team  for its tutoring, tools and services.


# URL

Package home URL: 

https://ctan.org/pkg/isphysicalmath


# License 

Copyright (C) 2024 by Mario Fantini <ing.mariofantini@gmail.com>

This file may be distributed and/or modified under the conditions of the LaTeX \
Project Public License, either version 1.3 of this license or (at your option) \
any later version.  The latest version of this license is in:
 
    http://www.latex-project.org/lppl.txt
 
and version 1.3 or later is part of all distributions of LaTeX version 2005/12/01 \
or later.

This work has the LPPL maintenance status 'maintained'.
 
The Current Maintainer of this work is Mario Fantini.

This work consists of the files isphysicalmath.dtx and isphysicalmath.ins and the \
derived file isphysicalmath.sty.


# Change History

- v1.0.0

2023.09.18 First version.


- v1.1.0

2024.01.03 Improvements have been brought, see isphysicalmath-doc.pdf.


- v2.0.0

2024.12.24 Following corrections, improvements and new features have been brought: 

- I have corrected some distraction mistakes. However, perfect operation of 
`isphysicalmath`\ 
 was guarenteed before these corrections too.

- I have removed `comma option`.

- I have changed the order of `options` in the documentation index.

- I have added the following new features:

    - `\ispmdexpp` command;

    - `\ispmdexppt` command;

    - `\ispmdexpm` command;

    - `flushpostdot` option;

- I have changed my e-mail contact.

