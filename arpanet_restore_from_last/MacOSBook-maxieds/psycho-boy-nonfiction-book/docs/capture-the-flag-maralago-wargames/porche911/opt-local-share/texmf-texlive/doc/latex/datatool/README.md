# datatool — Tools to load and manipulate data

Version 3.0.1 (2025-03-05)

Author: Nicola L. C. Talbot ([dickimaw-books.com](https://www.dickimaw-books.com/))

# LICENCE

This material is subject to the LaTeX Project Public License.
See http://www.ctan.org/license/lppl1.3
for the details of that license.

Copyright 2007-2025 Nicola Talbot

## DESCRIPTION

This bundle consists of the packages: `datatool.sty`,
`datatool-base.sty`, `databar.sty`, `databib.sty`, `datapie.sty`,
`dataplot.sty`, `datagidx.sty` and `person.sty`.

Localisation support is supplied separately. See
[`datatool-regions`](https://ctan.org/pkg/datatool-regions)
(currency and number group and decimal characters) and
[`datatool-english`](https://ctan.org/pkg/datatool-english)
(fixed text translations and orthography).

### `datatool.sty` (databases)

Databases can be created using LaTeX commands or loaded
from comma or tab separated variable files.

Databases can be sorted numerically or alphabetically
(descending or ascending). Ensure you have localisation 
support installed for alphabetical sorting that follows 
the language's orthography rules (alphabet order).

Repetitive operations can be performed on each row of
data in a database (such as mail merging.) Conditions
can be imposed to exclude rows.

### `datatool-base.sty` (base package)

The underlying base package used by all the other packages 
in this bundle.

Commands are provided to determine if an argument is an integer, a
decimal number (scientific notation supported), currency or a
string.  To parse ISO dates and times, the date/time parsing needs
to be enabled with `\DTLsetup{datetime={parse}}`.  Parsing of
regional dates requires support from the applicable region file (see
[`datatool-regions`](https://ctan.org/pkg/datatool-regions)).

Locale dependent number settings are supported 
(such as a comma as a decimal character and full stop as 
a number group character). This can be done via
the captions hook, if supported, but the appropriate
region file needs to be installed
(see [`datatool-regions`](https://ctan.org/pkg/datatool-regions)).

Commands are provided to convert between locale dependent
numbers/currency and the plain decimal format required 
for arithmetical computations to be 
performed on elements of the database.

Strings can be tested to determine if they are all upper
or all lower case.

Names can be converted to initials using `\DTLinitials`.

Comma-separated lists can be sorted numerically or alphabetically
(descending or ascending). Ensure you have localisation 
support installed for alphabetical sorting that follows 
the language's orthography rules (alphabet order).

### `datapie.sty` (Pie Charts)

A database defined by `datatool.sty` can be converted into a 
pie chart. This is best done with `\DTLsetup{store-datum}`
to avoid repeated re-parsing of formatted numbers.

Segments can be separated from the rest of the chart to make
them stand out.

Colour/grey scale options.

Predefined segment colours can be changed.

Hooks provided to annotate chart.

### `dataplot.sty` (Line and Scatter Plots)

A database defined by `datatool.sty` may be plotted as a 2D
scatter or line plot. This is best done with `\DTLsetup{store-datum}`
to avoid repeated re-parsing of formatted numbers.

Settings provided to govern the appearance of the chart.
(e.g. show/hide axes, legend, grid, major/minor tick marks).

Hooks provided to add extra information to the plot.

### `databar.sty` (Bar Charts)

A database defined by `datatool.sty` can be converted into a 
bar chart. This is best done with `\DTLsetup{store-datum}`
to avoid repeated re-parsing of formatted numbers.

Colour/grey scale options.

Predefined bar colours can be changed.

Horizontal or vertical formats provided.

Hooks provided to annotate chart.

### `databib.sty` (Bibliographies)

Provides commands to convert a BibTeX database into a datatool
database.

### `datagidx.sty` (Indexes and Glossaries)

Provides a way of indexing or creating glossaries/lists of
abbreviations that uses TeX to do the sorting and collating instead
of using an external indexing application, such as Xindy or
MakeIndex.  Ensure you have localisation support installed for
alphabetical sorting that follows the language's orthography rules
(alphabet order).

### `person.sty` (Referencing People)

Provides commands to display a person's name and pronoun in an
order of service style document to provide consistency, or in mail
merging to eliminate the cumbersome use of ``he/she'' etc.

## NOTES

**The `datatool` bundle replaced the `csvtools` bundle which is now obsolete (2007).**

This material is subject to the LaTeX Project Public License. 
See http://www.ctan.org/license/lppl1.3 for the details of that license.

Package FAQ: [`dickimaw-books.com/faq.php?category=datatool`](https://www.dickimaw-books.com/faq.php?category=datatool)

http://www.dickimaw-books.com/
