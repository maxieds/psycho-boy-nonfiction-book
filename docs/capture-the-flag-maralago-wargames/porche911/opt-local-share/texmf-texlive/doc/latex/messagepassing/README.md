# The `messagepassing` package

This package provides an environement and commands to easily draw diagrams to represent communication protocols using message passing among processes. 

Processes are represented as horizontal (or vertical) lines, and communications as arrows between lines. The package also provides multiple macros to decorate those diagrams, for instance to annotate the diagram, to add crashes to the processes, checkpoints, etc..

The package works on top of tikz, which makes it easy to add ad-hoc items using regular tikz commands.
To use it, run the following commands:

```
$ latex messagepassing.ins
$ pdflatex messagepassing.dtx
```

The first command generates the file messagepassing.sty that should be placed in the same folder than your main document. The second command generates the file messagepassing.pdf (you may require multiple runs to adjust internal references), which is the documentation for the package.


## License

This package is provided under the terms of the LaTeX Project Public License, version 1.3 or later.

## Author

The initial author of this package is Martin Vassor.

## Related packages

 - [msc](https://www.ctan.org/pkg/msc): used to typeset message sequence diagrams, according to the Recommendation Z.120 of the International Telecommunication Union;
