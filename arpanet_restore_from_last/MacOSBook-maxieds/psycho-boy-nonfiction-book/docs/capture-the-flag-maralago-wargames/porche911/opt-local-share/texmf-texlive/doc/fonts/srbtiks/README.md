The srbtiks package
version 1.0 (May 15, 2022)
Uroš Stefanović

This material is subject to The LaTeX Project Public License 1.3 and The SIL Open Font License.

The srbtiks package is the extension of the stix2-type1 package that enables usage of the STIX2 font in LaTeX for the Serbian and Macedonian languages.
Therefore, it's required to have the stix2-type1 package installed.
The main goal of this package is to enable that Latin input produce the Cyrillic text, so the T1 encoding is supported, but with the Cyrillic letters.
This package also includes the correct shapes for the italic letters \cyrb, \cyrg, \cyrd, \cyrp and \cyrt.

This package is very simple to use: just put
	\usepackage{srbtiks}
in the preamble of the document.

The commands \LAT, \CYR, \lat and \cyr are defined to switch from the stix2 font to the srbtiks and opposite (i.e. from Latin to Cyrillic and Cyrillic to Latin).

Some problems may occur when the Roman numerals are used. Also, the input must be in the Latin script, Cyrillic input is not available at the moment.

See 'srbtiks.pdf' (on Serbian language) for more informations.

This package should be considered as the experimental work, and is completely dependent on the stix2 package.

Happy TeXing!
