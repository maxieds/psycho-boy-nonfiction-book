
The `helmholtz-ellis-ji-notation` package
===============================================

**for typesetting beautiful in-line microtonal just intonation accidentals**

  (v1.1 -- 2020-05-19)


Overview
--------

The Helmholtz-Ellis JI Pitch Notation (HEJI), devised in the early 2000s by Marc Sabat and Wolfgang 
von Schweinitz, explicitly notates the raising and lowering of the _untempered_ diatonic Pythagorean
notes by specific microtonal ratios defined for each prime. It provides visually distinctive "logos" 
distinguishing families of justly tuned intervals that relate to the harmonic series. These take the
form of strings of additional accidental symbols based on historical precedents, extending the 
traditional sharps and flats. Since its 2020 update, HEJI ver. 2 ("HEJI2") provides unique 
microtonal symbols through the 47-limit. 

The `helmholtz-ellis-ji-notation` package is a simple LaTeX implementation of HEJI2 that 
allows for in-line typesetting of microtonal accidentals for use within theoretical texts, program 
notes, symbol legends, etc. 

The documentation may be found in `helmholtz-ellis-ji-notation.pdf`.


Installation
------------

First, install the HEJI2Text.otf font file (available in .zip folder or from under JI RESOURCES at 
plainsound.org).

Then to install the LaTeX package, use one of the following methods:

- Use the package manager of your TeX system 
	* TeXLive: `tlmgr install helmholtz-ellis-ji-notation`
	* MiKTeX: search for `helmholtz-ellis-ji-notation` in the MiKTeX Package Manager

- Get the source (`helmholtz-ellis-ji-notation.zip`) from CTAN and extract it, run `latex` on 
  `helmholtz-ellis-ji-notation.ins` to generate the package and configuration files, and move
  all generated files into a directory where LaTeX will find them,
  e.g., `MiKTeX X.X/tex/latex/helmholtz-ellis-ji-notation/`.


License
-------

The HEJI2Text.otf font and all accompanying LaTeX support documents are licensed under the 
Creative Commons Attribution 4.0 International License. To view a copy of this license, 
visit http://creativecommons.org/licenses/by/4.0/ or send a letter to 
Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.


----------------------------------------------------------------------------------------------------
Copyright (cc) 2020 Thomas Nicholson `<thomas@thomasnicholson.ca>`
----------------------------------------------------------------------------------------------------
