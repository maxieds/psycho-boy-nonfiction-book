-------------------------------------------------------------------------------
# `expkv-bundle` -- an expandable key=value implementation and more

Version 2024-12-26

Released under the LaTeX Project Public License v1.3c or later
See http://www.latex-project.org/lppl.txt

Hosted on the Island of TeX at https://gitlab.com/islandoftex/texmf/expkv-bundle

-------------------------------------------------------------------------------

Copyright (C) 2020-2024 Jonathan P. Spratte

This work may be distributed and/or modified under the conditions of the LaTeX
Project Public License (LPPL), either version 1.3c of this license or (at your
option) any later version. The latest version of this license is in the file:

  http://www.latex-project.org/lppl.txt

This work is "maintained" (as per LPPL maintenance status) by
  Jonathan P. Spratte

-------------------------------------------------------------------------------

## Summary of Contents

`expkv-bundle` is a collection of different packages that provide key=value
functionality in plainTeX, LaTeX, and ConTeXt.

At the core the `expkv` package implements two expandable key=value parsers that
are somewhat fast and robust against common bugs in many key=value
implementations (no accidental brace stripping, no fragility for active commas
or equals signs).

`expkv-cs` enables users to define expandable key=value macros in a comfortable
and straight forward way.

`expkv-def` provides an interface to define common key types for `expkv` similar
to the key defining interfaces of wide spread key=value implementations.

`expkv-opt` allows to parse package or class options in LaTeX via `expkv`.

`expkv-pop` is a utility package to define prefix oriented parsers that allow a
somewhat natural formulation (it provides the core functionality for the
key-defining front ends of both `expkv-cs` and `expkv-def`).
