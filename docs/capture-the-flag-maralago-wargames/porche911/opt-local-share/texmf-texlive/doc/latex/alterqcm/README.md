# alterqcm

Release 4.42c 2021/05/17

## Purpose Description

The 'alterqcm' package is a LaTeX2e package, for making Multiple Choices Questionnaires
 in a table with two columns. The aim is to provide some useful macros  to build
  QCM in tables. These macros may be used by only LaTeX TeX users.


## Licence

The packages may be modified and distributed under the terms and
conditions of the [LaTeX Project Public
License](https://www.latex-project.org/lppl/), version 1.3 or greater.

## Installation

You can experiment with the alterqcm package by placing all of the distribution
 files in the directory containing your current tex file.

You can also place all of the distribution files in the directory : 
/texmf/tex/latex/tkz.

## How to use it

\usepackage[your-language]{alterqcm} if "your-language" is french, english, german, greek, russian, italian or chinese, It's possible to use the option "unknown" is "your-language" is not in the last list.

## Features

- A special environment allows you to define questions and possible answers;
- You can specify which answers are correct and which are not.
- works with utf8 and pdflatex and xelatex (with some languages);
- allows to use 'longtable';
- makes automatically adjustment;
- generates a 'grid' that the students will have to fill in;
- generates a 'mask' with correct answers to print a slide.
- article_post.pdf is a file for Greek users.


## Documentation

Documentation for `alterqcm`   is available on CTAN and in your TeX distribution.  The documentation is in English.

## History

- 4.41 and 4.42 Correction of bugs and addition of new languages.

- 4.1 A fix in the definition of \AQquestion

- 4.0 Added full linguistic support  

- 3.7 Correction of bug 
       add the macro \AQpoints 