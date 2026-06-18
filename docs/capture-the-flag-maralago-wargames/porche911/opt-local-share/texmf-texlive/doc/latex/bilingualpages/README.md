bilingualpages (v1.0.0): Parallel facing pages for bilingual texts.
===
Copyright (C) 2021 Arlie Coles
This package can be redistributed and/or modified under the terms
of the LaTeX Project Public License 1.3c.
===

This package is a convenience package to facilitate parallel facing pages for bilingual texts. It wraps the paracol package such that aligned content can be presented on left and right facing pages via readable macros.

Example:

```
\begin{bilingualpages}
	\leftpage
		Hello world!
	\rightpage
		Bonjour tout le monde!
\end{bilingualpages}
```

This will put "Hello world!" on the left page and "Bonjour tout le monde" on the right facing page in parallel.

This material is subject to the LaTeX Project Public License 1.3c.
