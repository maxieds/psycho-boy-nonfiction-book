
[//]: # (symbats3 LaTeX class)

# symbats3

This is the README.md file for the symbats3 draft LaTeX class (2022-06-25)

## Summary

The _symbats3_ package makes available for LaTeX the glyphs in Feòrag’s
Symbats3 neopagan dingbats fonts.

## Font installation

The fonts must be downloaded separately from Feòrag’s web site at
https://www.feorag.com/freestuff/symbats.html

Install them into your computer according to your operating system’s
instructions, usually:

### Linux
Run the Font Manager app, click + and select the font files to install.

### Mac OS X
Run the Font Book app, click the Add button in the Font Book toolbar, locate and select a font, then click Open. Drag the font file to the Font Book app icon in the Dock. Double-click the font file in the Finder, then click Install Font in the dialog that appears.

### Windows:
Run Directory Explorer (what used to be called My Computer), right-click on each font file where you downloaded it, and select Install.

## Package installation

### Automated installation

If this class is distributed from CTAN, it should be in a zip
file (https://ctan.org/pkg/symbats3) which allows it to be installed
automatically by the TeX Live Manager (tlmgr) and similar automated
installers.

If you are using automated LaTeX package installation, no further action
is required: the package will be installed the first time you use it in
a LaTeX document.

### Manual installation

Install the package file symbats3.sty into your Personal TeX Folder (create it if it does not already exist), eg

#### Linux
```
~/texmf/tex/latex/symbats3
```
#### Mac OS X
```
~/Library/texmf/tex/latex/symbats3
```
#### Windows
(Win95–XP)
```
C:\texmf\tex\latex\symbats3
```
(Win 7–11)
```
Computer\System\Users\your~name\texmf
```

Note that MiKTeX users MUST add their Personal TeX Folder to their MiKTeX root when it is created; and MUST refresh their Font Name DataBase (FNDB) utility after installation: see the link below. No action is required for other systems.

See http://latex.silmaril.ie/formattinginformation/personal.html for more information about your Personal TeX Folder and about how to use it in MiKTeX.


### Installation on shared systems

On multi-user systems (Unix-based), identify the shared local directory
tree with the command

```
$ kpsewhich -expand-var '$TEXMFLOCAL'
```

This will give you the location of the shared `texmf` directory into
which you must unzip these files.

Do not forget to run your local TeX filename database indexer program
(_texhash_ or _mktexlsr_) after installation, otherwise the files will
not be found by LaTeX and nothing will work!


### Installation on older and non-TDS systems

To install this software manually, download and unzip the 
file into a temporary directory and move the class and/or package
file[s] and other files to the proper locations where LaTeX will find
them on your system. This is referred to in some documentation as “the
`TEXINPUTS` directory”, although it may be called something else on your
system.

_It is your responsibility to know where this location is._ See the
question in the TeX FAQ at https://texfaq.org/FAQ-inst-wlcf.html for
more information. If you do not know, or cannot find it, or do not have
access to it, your TeX system may be out of date and may need replacing.

### Online systems and “last resort” systems

Some online LaTeX systems use CTAN, so a package from there should be
available on demand. For other online LaTeX systems where you do not
have access to the file system, unzip the file into a local
temporary directory and upload the files to the online system. Follow
their instructions for where to put them.

In an emergency, or as a last resort on unmanageable systems, it is
possible simply to put the package files into your
current working directory (the same folder as your `.tex` file[s]).

While this will work, it is not supported, cannot be maintained,
and may lead to other resources (packages, fonts, images etc) not
being found.


## Usage

Include the line shown below in the Preamble of your LaTeX document:

```
\usepackage[options]{symbats3}
```
Read the documentation for the options available, if
any. The documentation is distributed as a PDF document in the zip file.
You can also regenerate it by typesetting the `symbats3.tex` file with
`xelatex` (and `biber`) in the normal way.


## Bugs and TODO

No outstanding reported bugs at the time of this version.

For TODO items, see the PDF documentation.


## Copyright

The following statement is included in the source code:
```
%%
%% This is file ‘symbats3.sty’
%%
%% This work has the LPPL maintenance status ‘maintained’.
%%
%% The source is maintained by Peter Flynn at Silmaril Consultants.
%% Please report all bugs and comments to <peter@silmaril.ie>
%% 
%% Copyright (c) 2021–2022 Peter Flynn and Silmaril Consultants
%% 
%% --------------------------------------------------------------------------
%% 
%% This file may be distributed and/or modified under the
%% conditions of the LaTeX Project Public License, either version 1.3c
%% of this license or (at your option) any later version.
%% The latest version of this license is in
%%    https://www.latex-project.org/lppl.txt
%% and version 1.3c or later is part of all distributions of LaTeX
%% version 2005/12/01 or later.
%%
%%     peter@silmaril.ie
%%
```


