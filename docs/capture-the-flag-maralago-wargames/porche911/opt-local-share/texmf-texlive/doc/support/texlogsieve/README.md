# texlogsieve - (yet another program to) filter and summarize LaTeX log files

`texlogsieve` reads a LaTeX log file (or the standard input if no file is
specified), filters out less relevant messages, and displays a summary
report. It is a `texlua` script, similar in spirit to tools such as
[`texfot`](https://ctan.org/pkg/texfot),
[`texloganalyser`](https://ctan.org/pkg/texloganalyser),
[`rubber-info`](https://gitlab.com/latex-rubber/rubber),
[`textlog_extract`](https://ctan.org/pkg/texlog-extract),
[`texlogparser`](https://github.com/reitzig/texlogparser),
[`texlogfilter`](https://gricad-gitlab.univ-grenoble-alpes.fr/labbeju/latex-packages),
[`pulp`](https://github.com/dmwit/pulp),
and others. Highlights:

* Two reports: the most important messages from the log file followed by
  a summary of repeated messages, undefined references etc.;

* The program goes to great lengths to correctly handle TeX line wrapping
  and does a much better job at that than existing tools;

* Multiline messages are treated as a single entity;

* Several options to control which messages should be filtered out;

* No messages are accidentally removed.

`texlogsieve` **must** be run from the same directory as `[pdf|lua|xe]latex`,
because it searches for the files used during compilation (packages loaded
from the current directory, files included with `\input` etc.). Also, since
it cannot detect if LaTeX stops for user input, you should **really** run
LaTeX in `nonstopmode` when `texlogsieve` is reading from a pipe.

The defaults are reasonable; hopefully, you can just do

```
[pdf|lua|xe]latex -interaction nonstopmode myfile.tex | texlogsieve
```

or

```
texlogsieve myfile.log
```

and be satisfied with the result (still, you should check the "Tips"
section of the documentation).

Since it needs to know what messages to expect, `texlogsieve` is
currently geared towards LaTeX; I have no idea how it would work with
ConTeXt or plain TeX. Still, adding support to them should not be
too difficult.

If you want to know more about the TeX log file and the workings of
the program, check the initial comments in the code.

---

Code etc: <https://gitlab.com/lago/texlogsieve>

Copyright (C) 2021-2025 Nelson Lago <lago@ime.usp.br>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
