XCharter-Math package
====================

## Description

`XCharter-Math.otf’ is an OpenType mathematical font to be used
with the XCharter text fonts.

## Contents

* XCharter-Math.otf       OpenType Math font
* XCharter-Math-Bold.otf  Bold variant (limited coverage)
* xcharter-otf.sty        LaTeX style file
* XCharter-Math.pdf       Documentation in PDF format
* XCharter-Math.ltx       Source of XCharter-Math.pdf
* unimath-xcharter.pdf    Modified version of unimath-symbols.pdf
                          showing available XCharter-Math symbols compared
                          to LatinModern, STIXTwo, Erewhon, TeXGyrePagella,
                          Libertinus and EBGaramond.
* unimath-xcharter.ltx    Source of unimath-xcharter.pdf
* README.md               (this file)

## Installation

This package is meant to be installed automatically by TeXLive, MikTeX, etc.
Otherwise, XCharter-Math can be installed under TEXMFHOME or TEXMFLOCAL, f.i.
XCharter-Math.otf in directory texmf-local/fonts/opentype/public/xcharter-math/
and fourier-otf.sty in directory  texmf-local/tex/latex/xcharter-math/.  
Documentation files and their sources can go to directory
texmf-local/doc/fonts/public/xcharter-math/

Don't forget to rebuild the file database (mktexlsr or so) if you install
under TEXMFLOCAL.

Finally, make the system font database aware of the XCharter Math font
(fontconfig under Linux).

## License

* The font `XCharter-Math.otf’ is licensed under the SIL Open Font License,
Version 1.1. This license is available with a FAQ at:
http://scripts.sil.org/OFL
* The other files are distributed under the terms of the LaTeX Project
Public License from CTAN archives in directory macros/latex/base/lppl.txt.
Either version 1.3c or, at your option, any later version.

## Changes

* First public version: 0.30
* v0.31:
  - Fixed "Style=" options in xcharter-otf.sty (they didn't work for XeLaTeX).
  - Added glyphs \nleqqslant and \ngeqqslant (U+E09A, U+E09B).
  - Corrected glyphs \varsubsetneqq \varsusetneqq (U+E09C, U+E09D).
* v0.32:
  - all vertical delimiters resized.
  - \mathslash, \backslash and their vertical variants: slope corrected.
  - xcharter-otf.sty now loads realscripts for better superscripts.
* v0.33:
  - xcharter-otf.sty loads XCharter-Math.otf by file name for XeTeX.
* v0.34:
  - Delimiters, integrals, sum, prod etc. are now vertically
    centred by design on the maths axis (required by luametatex).
* v0.35:
  - Experimental Bold variant added.
  - Fixed \wideoverbar (U+0305) which failed with XeTeX.
  - Corrected negative right bearings of some display integrals.
  - Added stretchable integral for U+222B (usable with luametatex).
* v0.36:
  - package now compatible with mathtools’ stretchable arrows.
  - \diagup and \diagdown moved from private area to U+27CB, U+27CD.
* v0.40:
  - Metrics of all "over" arrows and harpoons corrected.
  - Metrics of all "under" arrows and harpoons corrected.
  - Most horizontal arrows and harpoons are now stretchable.
* v0.41:
  - radicals corrected.
  - xcharter-otf.sty: options handled by `l3keys` instead of `xkeyval` 
    (requires a LaTeX kernel not older than 2022-06-01).
  - XCharter-Math-Bold.otf: missing glyphs added in range
    U+1D400-U+1D7F5 (SE#688363 for KPfonts).
* v0.42:
  - XCharter-Math-Bold.otf: Uppercase Blackboard Bold glyphs added as 
    suggested by Ulrik Vieth.  Glyphs U+2107, U+2126, U+2127, U+212B, 
    U+2132 and U+2141 added too.
* v0.50:
  - XCharter-Math.otf: Digits and Lowercase Blackboard Bold glyphs added; 
    over twenty math symbols added (coverage now similar to Erewhon-Math).
* v0.51:
  - Fixed IsExtendedShape flags.
  - \mid (U+2223) and \parallel (U+2225) vertical variants changed.
  - CharacterVariant=11 added: it replaces the original math italic v 
    by a variant easier to distinguish from \nu.
  - OT features cvNN are now applied before ssty (applied last).
* v0.60:
  - CharacterVariant=12 added: it replaces the original math italic w 
    by a rounder variant to match the v variant (cv11) added in v0.51.
  - Inconsistencies between Bold Caligraphic glyphs and their Regular
    counter-parts fixed.
  - Superscripts redesigned.
  - Inconsistencies between vertical delimiter sizes fixed.
  - Metrics of \widebreve, \widecheck, \widehat, \widetilde first
    horizontal variant (.h0) changed: f.i. $\hat{r} \ne \widehat{r}$.
  - XCharter-Math-Bold: horizontal variants of the main accents added,
    plus another hundred glyphs.
* v0.61:
  - More fixes for delimiter sizes.
* v0.62:
  - Fixed Game glyph (U+2141).
  - \leqslant, \geqslant (and related glyphs) are now vertically aligned 
    with \leq, \geq.
  - XCharter-Math-Bold: missing italic correction added for int.up, 
    int.v1, int.v1.up.
* v0.63:
  - Added lmoustache, rmoustache (U+23B0, U+23B1).
  - Superscripts BbbE.st and BbbE.sst fixed (U+EA04, U+ED04).
* v0.64:
  - Added missing \rightcurvedarrow (U+2933) \leftcurvedarrow (U+2B3F)
    and glyphs U+2334 to U+2937.
  - Fixed height of 'over' arrows.
  - Added \lgroup (U+27EE), \rgroup (U+27EF), and their vertical extensions.
  - Overbraces and underbraces resized.
* v0.65:
  - Fixed notaccent (U+0338).
  - bar (U+0304), wideoverbar (U+0305), mathunderbar (U+0332) thicknesses' 
    unified to default rule thickness.
  - Glyphs U+2032 to U+2037 and U+2057 (prime and co.) resized so that f.i. 
    \(f'\), \(f\prime\) and \(f^{\prime}\) produce the same output.
  - `xcharter-otf.sty` has a new option `fakedscripts` to stop `realscripts`
    package loading.
  
---
Copyright 2022-2025  Daniel Flipo  
E-mail: daniel (dot) flipo (at) free (dot) fr
