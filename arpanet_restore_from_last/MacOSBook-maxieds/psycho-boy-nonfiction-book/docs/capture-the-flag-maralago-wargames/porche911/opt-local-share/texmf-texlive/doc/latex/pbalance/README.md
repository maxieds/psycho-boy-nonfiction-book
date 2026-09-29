# pbalance - poor man's balance package for LaTeX

This is a LaTeX package that tries to *safely* make the columns on the last
page of a two-column document have approximately the same height. It should
"just work" without user intervention, which is particularly useful for
class authors, but also offers the user a command to adjust the height of
the columns. There are, however, three caveats:

1. Results are adequate, but often not optimal;
2. In some very rare cases, the package may give up (the document
   is generated correctly but the last page is not balanced);
3. The package demands additional LaTeX passes.

Code etc: <https://gitlab.com/lago/pbalance>

Copyright 2020-2022 Nelson Lago <lago@ime.usp.br>

This work may be distributed and/or modified under the conditions of the
LaTeX Project Public License, either version 1.3c of this license or (at
your option) any later version.
