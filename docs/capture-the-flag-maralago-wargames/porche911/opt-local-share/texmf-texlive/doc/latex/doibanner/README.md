# doibanner

A LaTeX package to generate DOI banners and links.

The `doibanner` package allows to generate a banner for a declared [digital
object identifier](https://www.doi.org/the-identifier/what-is-a-doi/) (DOI).
It provides the `\doibanner` macro, which draws the banner using
[`TikZ`](https://www.ctan.org/pkg/tikz) and adds a link via
[`hyperref`](https://www.ctan.org/pkg/hyperref), if desired. Its output can
be scaled by [`adjustbox`](https://www.ctan.org/pkg/adjustbox) and it might
look as follows:

![_DOI banner generated with `\doibanner`_](./example/doibanner_example.png "Example generated with doibanner")

Latest release: 2024-07-28 v0.3


## Installation

Skip this section, if `doibanner` is already provided in your TeX distribution.
You should be able to install it [from the CTAN](https://www.ctan.org/pkg/doibanner)
via your distribution's utility (e.g. the TeX Live Utility).

### Manual installation

You can get the package's source code from the
[project repository on Codeberg](https://codeberg.org/Cs137/doibanner).
The repository contains a build script, which allows you to build the required
files for the `doibanner` package and copy them into your _TeX Directory Structure_
(TDS) using `l3build`. Ensure that `l3build` is installed on your system and run
it from the repository's root directory as follows:

```bash
l3build install --full
```

The `--full` option ensures that all necessary files are built and installed.

If you do not want to install the package into your TDS, but use it in a
particular LaTeX project, follow the steps listed below.

1. unpack `doibanner.sty` from the `doibanner.dtx` file
    - using `l3build` and the `build.lua` script: `l3build unpack`, __or__
    - directly via the installer file: `pdflatex doibanner.ins`
2. copy the extracted `doibanner.sty` file into the same directory as your LaTeX sources.


## Usage

Please consult the [package documentation](http://mirrors.ctan.org/macros/latex/contrib/doibanner/doibanner.pdf)
for detailed usage information.

If you have any questions or need assistance, feel free to
[open an issue on the repository](https://codeberg.org/Cs137/doibanner/issues).


## Contributing

Contributions to the `doibanner` package are very welcomed. Feel free to submit
a [pull request (PR)](https://codeberg.org/Cs137/doibanner/pulls), if you would
like to contribute to the project. In case you are unfamiliar with the process,
consult the [forgejo documentation](https://forgejo.org/docs/latest/user/pull-requests-and-git-flow/)
and follow the steps using this repository instead of the `example` repository.

Create your [pull request (PR)](https://codeberg.org/Cs137/doibanner/pulls) to
inform that you started working on a contribution. Provide a clear description
of your envisaged changes and the motivation behind them, prefix the PR's title
with ``WIP: `` until your changes are finalised.

All kind of contributions are appreciated, whether they are
bug fixes, new features, or improvements to the documentation.


### Contributors

- [Christian Schreinemachers](https://codeberg.org/Cs137)
- [Marei Peischl](https://chaos.social/@TeXhackse)


## Changes

All notable changes to this project are documented in the file
[`CHANGELOG.md`](https://codeberg.org/Cs137/doibanner/src/branch/main/CHANGELOG.md).


## Credits

This package was created and is maintained by Christian Schreinemachers, (C) 2024.
The source code is hosted on [Codeberg](https://codeberg.org/Cs137/doibanner).
It is subject to the [LaTeX Project Public License 1.3c](https://www.ctan.org/license/lppl1.3).

