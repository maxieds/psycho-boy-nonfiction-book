# The `callouts-box` Package

## Version 1.0
**Date:** 2025/02/14  
**Author:** julinux60

## Table of Contents
1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
    - [Basic Examples](#basic-examples)
    - [Advanced Examples](#advanced-examples)
    - [Customization](#customization)
4. [Defining Custom Boxes](#defining-custom-boxes)
5. [Complete Example](#complete-example)
6. [License](#license)

---

## Introduction
The `callouts-box` package provides a collection of visually appealing, structured callout boxes for LaTeX documents. These boxes are useful for highlighting important information such as warnings, errors, notes, and success messages. The package is built on top of `tcolorbox` for highly customizable, breakable callout boxes and `xcolor` for predefined color schemes.

## Installation
To install the `callouts-box` package, place the following files in your LaTeX directory:

- `callouts-box.sty` (Core functionality and environment definitions)
- `callouts-box-colors.sty` (Predefined color definitions for callouts)

Then, include the package in your document preamble:

```latex
\usepackage{callouts-box}
```

## Usage
The package provides four predefined callout box environments:

- `warningbox`
- `errorbox`
- `notebox`
- `successbox`

Each environment takes an optional argument for the box title. If no title is provided, a default title is used.

### Basic Examples
Here are some examples of how to use the predefined callout boxes:

```latex
\begin{warningbox}[Custom Warning Title]
  This is a warning message.
\end{warningbox}

\begin{errorbox}
  This is an error message.
\end{errorbox}

\begin{notebox}[Important Note]
  This is a note.
\end{notebox}

\begin{successbox}
  This is a success message.
\end{successbox}
```

### Advanced Examples
You can nest callout boxes inside each other:

```latex
\begin{warningbox}[Outer Warning]
  This is an outer warning message.
  
  \begin{notebox}[Nested Note]
    This is a nested note inside a warning.
  \end{notebox}
\end{warningbox}
```

You can add equations, lists, or images inside callout boxes:

```latex
\begin{successbox}[Success with Equation]
  The famous Pythagorean theorem:
  \[
    a^2 + b^2 = c^2
  \]
\end{successbox}
```

```latex
\begin{notebox}[Note with List]
  Key points to remember:
  \begin{itemize}
    \item Callout boxes can contain lists.
    \item They can also include images.
  \end{itemize}
\end{notebox}
```

### Customization
Users can modify the visual appearance of callout boxes by editing `callouts-box-colors.sty` or overriding the `tcbset` settings in their document.

To adjust layout settings, use the `tcbset` command:

```latex
\tcbset{
  boxsettings/.style={
    boxrule=2pt, rounded corners=10pt, arc=10pt,
    left=10pt, right=10pt, top=10pt, bottom=10pt,
    boxsep=10pt, before skip=15pt, after skip=15pt,
    breakable, before upper={\ignorespaces},
  }
}
```

## Defining Custom Boxes
You can define your own callout box styles using `NewTColorBox`. Example:

```latex
\definecolor{custom-border}{HTML}{FFA500}
\definecolor{custom-content}{HTML}{FFF3E0}
\definecolor{custom-text}{HTML}{FF6D00}

\NewTColorBox{custombox}{ O{Custom Box} o }{
  colframe=custom-border,
  colback=custom-content,
  coltitle=custom-text,
  fonttitle=\bfseries,
  coltext=custom-text,
  title={#1},
}
```

To use the custom box:

```latex
\begin{custombox}[My Custom Box]
  This is a custom box.
\end{custombox}
```

## Complete Example
Here is a complete document using the `callouts-box` package:

```latex
\documentclass{article}
\usepackage{callouts-box}

\begin{document}

\begin{warningbox}[Warning]
  This is a warning message.
\end{warningbox}

\begin{successbox}[Success]
  This is a success message.
\end{successbox}

\begin{notebox}[Math Example]
  \[
    E = mc^2
  \]
\end{notebox}

\end{document}
```

## License
This package is distributed under the LaTeX Project Public License (LPPL), version 1.3 or later. For more details, see the `LICENSE` file.
