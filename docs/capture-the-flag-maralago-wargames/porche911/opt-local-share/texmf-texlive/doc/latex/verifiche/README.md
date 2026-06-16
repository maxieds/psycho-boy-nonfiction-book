# Package Verifiche

## Abstract
The purpose of the package is to manage the exercises for a test, their points, the difficulty level and their solutions.
Some typical format of exercises are already implemented:
1. Plain exercise
2. Complete the Text - exercise
3. True or false
4. Closed questions
5. Open questtions
6. Find the Error - exercise

## Informations
Author: Francesco Raccanello
Mail: raccanello.francesco@gmail.com
License: LPPL 1.3

## Installation
To install the package run:
- `latex verifiche.ins`
- `pdflatex verifiche.dtx`
- `makeindex -s gind.ist -o verifiche.ind verifiche.idx`
- `makeindex -s gglo.ist -o verifiche.gls verifiche.glo`
- `pdflatex verifiche.dtx`
- copy verifiche.sty and verifiche.pdf to the correct places in the texmf
tree (e.g. \tex\latex\verifiche).

## Example
Run `pdflatex verifiche-example.tex` to see some examples.


### To do
- swhich into english.
- remove the marginpar command and use only a box.

