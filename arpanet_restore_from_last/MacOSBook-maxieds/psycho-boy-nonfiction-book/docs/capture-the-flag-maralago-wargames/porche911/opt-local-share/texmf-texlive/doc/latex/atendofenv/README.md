# Package `atendofenv`

A LaTeX package to allow adding a custom symbol at the end of an environment
(e.g. theorems, definitions, remarks)

## Usage

To add a small triangle at the end of a theorem, simply insert this after
declaring the `theorem` environment with `\newtheorem`.

```tex
  \AtEndOfEnv{theorem}{$\triangleleft$}
```

## Dependencies
- amsthm (for the QED stack)
- letltxmacro (for saving existing macros)


## Maintainer
Fangyi Zhou <me+ctan@fangyi.io>

## Licence
The Unlicense
