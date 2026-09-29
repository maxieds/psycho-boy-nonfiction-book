# mandi - Macros for introductory physics

## Description
`mandi` (which can be pronounced with two syllables rhyming with _candy_, or with three
as _M and I_, referencing a popular introductory  physics textbook) is for students and
instructors in an introductory physics course. They can use `mandi` to write solutions,
class notes, handouts, assessments, and other such documents. Using physical quantities
(and constants) by name eliminates missing units.  Step-by-step solutions and reasoning
eliminates missing work, and consistent notation can be employed.

### `mandi`
The `mandi` package defines every physical quantity and constant used in introductory
physics by its name. SI units are included by default in any of three different kinds
(base, derived, and alternate). A simple interface for defining additional quantities
and constants is provided.

### `mandistudent`
The `mandistudent` package defines additional commands and environments for writing
solutions to physics problems. The `physicsproblem` and `physicssolution` environments
allow for semantically structured solutions. Computational problems are accommodated
as [Web VPython](https://glowscript.org/) and [VPython](https://vpython.org/) code.

### `mandiexp`
The `mandiexp` package defines commands for typesetting the equations and expressions
most frequently used in introductory physics. The equations and expressions are based
on those found in [*Matter & Interactions*](https://matterandinteractions.org/) but
are certainly applicable to any introductory physics textbook.

## Author and Maintainer
`mandi` is authored and maintained by
[Paul J. Heafner](mailto:heafnerj@gmail.com?subject=[Heafner]%20mandi).

## License
`mandi` is released under [LPPL](https://www.latex-project.org/lppl.txt) 1.3c and later.
