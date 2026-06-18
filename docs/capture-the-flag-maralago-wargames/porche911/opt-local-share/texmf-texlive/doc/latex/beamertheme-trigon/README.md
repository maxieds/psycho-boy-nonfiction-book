# Trigon theme

![Pipeline status](https://gitlab.com/thlamb/beamertheme-trigon/badges/master/pipeline.svg)

_A modern, elegant and versatile theme for Beamer._

[![Demo][demo-shield]][demo-url]
[![Documentation][docs-shield]][docs-url]

**Trigon** found its origin and inspiration in the graphical guidelines
resulting from the visual identity overhaul of the [University of
Liège](https://www.uliege.be/cms/c_9247131/en/a-new-visual-identity).
Although directly inspired from these guidelines, the theme was stripped out of
any mention or specificities related the University and its faculties. This
makes the **Trigon** theme perfectly suitable for many different contexts.

The final product provides a modern, elegant and versatile theme with a
high degree of customization.
The main design focuses on triangular shapes for major layout elements and noise
minimization for the main body of the work.

The theme is available on [CTAN](https://ctan.org/pkg/beamertheme-trigon)
and a demo template is publicly available on the [Overleaf
Gallery][overleaf-gallery].

Feature requests, issues and pull requests are welcome.

## Features

- Multiple style variations for title, section and regular slides
- Dark theme
- Many convenient options (numbering style, toggle section slides, title font
  changes,...)
- Looks better on 16:9 format, but supports 4:3 as well
- Lightweight (does not require lots of additional packages)
- Similar options than with [Metropolis theme](https://github.com/matze/mtheme)

## Note

- This theme works best using the `sourcesanspro` font package, which is loaded
  by default. As some users may not want to load additional packages or want to
  use other fonts, the package can be disabled using the option
  `usesourcefonts=false`.

## Screenshots

Default Style                           |  Example alternative style
----------------------------------------|---------------------------------------
![](https://thlamb.gitlab.io/beamertheme-trigon/trigon_demo-01.jpg)  |  ![](https://thlamb.gitlab.io/beamertheme-trigon/trigon_demo_alt-01.jpg)
![](https://thlamb.gitlab.io/beamertheme-trigon/trigon_demo-03.jpg)  |  ![](https://thlamb.gitlab.io/beamertheme-trigon/trigon_demo_alt-03.jpg)
![](https://thlamb.gitlab.io/beamertheme-trigon/trigon_demo-04.jpg)  |  ![](https://thlamb.gitlab.io/beamertheme-trigon/trigon_demo_alt-04.jpg)
![](https://thlamb.gitlab.io/beamertheme-trigon/trigon_demo-07.jpg)  |  ![](https://thlamb.gitlab.io/beamertheme-trigon/trigon_demo_alt-07.jpg)
![](https://thlamb.gitlab.io/beamertheme-trigon/trigon_demo-09.jpg)  |  ![](https://thlamb.gitlab.io/beamertheme-trigon/trigon_demo_alt-09.jpg)
![](https://thlamb.gitlab.io/beamertheme-trigon/trigon_demo-13.jpg)  |  ![](https://thlamb.gitlab.io/beamertheme-trigon/trigon_demo_alt-13.jpg)

## Installation

To install a stable version of this theme, please refer to update instructions
of your TeX distribution. Trigon has been on
[CTAN](https://ctan.org/pkg/beamertheme-trigon) since March 2021. For users of
typical TeX distributions (TexLive, MacTeX, MikTeX), simply updating your
package list should install Trigon on your system.

If you want to use the cutting-edge development version of Trigon, you can
install it manually by following these steps:

1. **Download the source** using a `git clone` of the [Trigon
   repository](https://gitlab.com/thlamb/beamertheme-trigon) or as a [zip
   archive](https://gitlab.com/thlamb/beamertheme-trigon/-/archive/master/beamertheme-trigon-master.zip)
2. **Compile the style files** by running `make sty` inside the downloaded
   directory. (Or run LaTeX directly on `source/trigontheme.ins`.)
3. **Move the resulting `.sty` files** to the folder containing your
   presentation. To use Trigon with many presentations, run `make install` or
   move the `*.sty` files to a folder in your TeX path instead.
4. **Use the theme** by declaring `\usetheme{trigon}` in the preamble of your
   document.

### Overleaf

The version of **Trigon** available on Overleaf may not be the latest one.
Overleaf relies on Texlive for its backend latex installation, which they update
once a year (typically around end of Q3). Depending on the time of the year, it
is therefore possible that some of the latest features and developments are not
available on Overleaf.

_Note that you can see the current version of all packages by using `\listfiles`
in the preamble of the document and looking at the logs of the compilation._

Moreover, to avoid breaking changes, documents created with one version of
TexLive keep this same version when they are edited. To use a more recent
version of Trigon in your older documents, you need to [instruct Overleaf to use
the most recent
TexLive](https://www.overleaf.com/blog/new-feature-select-your-tex-live-compiler-version)
Keep in mind that this may cause issues with other packages used in your
presentation that would be updated as well.

If you still want to use the very latest development, it is best to download the
source code of the package here or over CTAN, compile the `.sty` files locally
and place them at the root of you project on CTAN.

A template project was created and is publicly available in the [Overleaf
Gallery][overleaf-gallery] to bootstrap your presentation.

## Usage

See [the package documentation][docs-url] for a detailed view of the package
options.

## Contributing

All contributions to this theme are welcomed, whereas in the form of issue
report, feature requests or pull requests.

If you want to propose an interesting alternative layout for this theme (for
the title, section or regular slides), please make sure to respect the
following criteria:

- Maximum three main triangles on the layout
- Blending type "multiply" for overlapping triangles
- Triangles must all be equilateral (60° angles), some useful macros are
  defined in _beamerinnerthemettrigon.dtx_ for that

## References & Acknowledgment

- The theme structure and options are heavily based on the [Metropolis
  theme](https://github.com/matze/mtheme)
- The picture used on the title page of the demo is "_Man in Red Jacket Standing
  on the Stairs_": Photo by [Taryn Elliott from Pexels][man-red-jacket].

## License

Copyright 2021-2023 by Thomas Lambert <trigon@thl.ovh>.

**Author and maintainer**: Thomas Lambert.

This theme is licensed under the [Creative Commons Attribution-ShareAlike 4.0
International License](https://creativecommons.org/licenses/by-sa/4.0/), which
is essentially a _free software_ license. Do not hesitate to copy and modify
the code to fit your needs.

Some parts of this repository may be released under a different license than the
main theme. See the [NOTICE.md](NOTICE.md) file for more details.

[demo-shield]: https://img.shields.io/badge/Demo-PDF-blue.svg
[docs-shield]: https://img.shields.io/badge/Documentation-PDF-blue.svg
[demo-url]: https://gitlab.com/thlamb/beamertheme-trigon/-/jobs/artifacts/master/raw/demo/trigon_demo.pdf?job=tex-compile
[docs-url]: https://gitlab.com/thlamb/beamertheme-trigon/-/jobs/artifacts/master/raw/docs/trigontheme.pdf?job=tex-compile
[overleaf-gallery]: https://www.overleaf.com/latex/templates/trigon-beamer-theme/wjyyzvdzqkgf
[man-red-jacket]: https://www.pexels.com/photo/man-in-red-jacket-standing-on-the-stairs-4390730/
