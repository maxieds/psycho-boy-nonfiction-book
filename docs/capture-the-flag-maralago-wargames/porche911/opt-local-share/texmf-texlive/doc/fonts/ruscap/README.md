This package contains the source for ruscap: a font for rustic capitals
---an ancient Roman calligraphic script--- created with Metafont.

The current version of ruscap is 1.0, released on 28 April 2024.

# Characters included

For the moment, only the letters of the Vergilius Vaticanus manuscript
(i.e., Roman and Greek letters) are included.
In particular, ruscap does not contain the Ramist letters J and U,
indo-arabic numerals and punctuation marks.

# Minimal Working Example

```tex
\documentclass{article}
\font\ruscap=ruscap10 at 14pt

\begin{document}
	{\ruscap SALVETE OMNES}
\end{document}
```

# Design

For more information on the design of this font,
please visit the following links:

* <https://www.tug.org/TUGboat/tb44-2/tb137sannier-rustic.pdf>
* <https://tug.org/tug2023/files/sa-12-sannier-rustic/sannier-rustic-slides.pdf>
* <https://www.youtube.com/watch?v=A56GHVJGJo0>

# License

Copyright (c) 2024, Victor Sannier, with Reserved Font Name ruscap.

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is available with a FAQ at: https://openfontlicense.org

