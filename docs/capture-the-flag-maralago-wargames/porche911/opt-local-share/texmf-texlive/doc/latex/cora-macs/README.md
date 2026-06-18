# `cora-macs` LaTeX Package

## Overview

The `cora-macs` package provides specialized LaTeX tools for researchers in cyber-physical systems.
It offers comprehensive commands for mathematical set notation, operations, and other definitions.
Designed to accompany the CORA toolbox, the package also facilitates beautiful visualizations through TikZ figures exported from Matlab and a custom color palette.

CORA: https://cora.in.tum.de

## Installation

To use the `cora-macs` package in your LaTeX documents, follow these steps:

1. **Download the Package**: Download the `cora-macs.sty` file and save it to your project directory or in a directory where LaTeX can find it (e.g., in the local `texmf` tree).

2. **Include the Package**: Add the following line to the preamble of your LaTeX document:
   ```latex
   \usepackage[options]{cora-macs}
   ```
   

### Options

- `sets`: Enables macros for working with continuous sets.
- `operations`: Enables macros for common operations in set-based computing.
- `nn`: Enables macros related to neural networks.
- `colors`: Defines a set of colors specific to the `cora-macs` package.
- `tikz`: Include your Matlab figures in LaTeX for beautiful visualizations.

You can combine these options as needed when including the package.

## Documentation

For detailed documentation, including a complete list of commands and options, please refer to the [documentation](./cora-macs-doc.pdf).

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Contact

For questions, issues, or suggestions, please contact:

- Tobias Ladner - [tobias.ladner@tum.de](mailto:tobias.ladner@tum.de)
- Lukas Koller - [lukas.koller@tum.de](mailto:lukas.koller@tum.de)

---

Developed at TUM - [Cyber-Physical Systems Group](https://www.ce.cit.tum.de/cps)