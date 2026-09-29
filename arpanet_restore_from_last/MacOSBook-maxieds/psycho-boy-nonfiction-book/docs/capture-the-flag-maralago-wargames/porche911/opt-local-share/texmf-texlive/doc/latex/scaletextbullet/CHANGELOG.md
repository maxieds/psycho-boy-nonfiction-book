# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a
Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to
[Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [v2.0.0] - 2025-02-11

### Changed
- This update includes some changes that are backwards incompatible.
- Renamed the document commands using the recommended all-lowercase convention:
  - `\SetTextBulletFactor` to `\settextbulletfactor`
  - `\ScaleTextBullet` to `\scaletextbullet`
  - `\ScaleTextBullets` to `\scaletextbullets`

## [v1.1.1] - 2025-02-06

### Changed
- The package no longer removes extra trailing tokens from user input into an
  integer expression. (This feature had relied on exploiting an implementation
  detail.)

## [v1.1.0] - 2025-02-03

### Added
- `scaletextbullet-code.tex`
- `scaletextbullet-code.pdf`

### Changed
- `\ScaleTextBullet`, `\ScaleTextBullets`, and `\scaletextbulletdebug` now
  issue a package error if used in math mode. (`\textbullet` is invalid in math
  mode.)

## [v1.0.4] - 2025-01-03

### Changed
- The internal function that scales of the size of the `\textbullet` without
  moving its vertical center now uses more accurate floating point
  computations.
- Code improvements.

## [v1.0.3] - 2024-12-09

### Changed
- The documentation now displays code in a light-gray background using the
  `tcolorbox` package. This subtle contrast enhances readability.

## [v1.0.2] - 2024-11-25

### Changed
- Keys and commands that take an integer expression as a value or argument now
  remove the extra tokens that were not part of the integer expression.

### Changed

## [v1.0.1] - 2024-11-12

### Added
- The package now includes a CHANGELOG file.
- Added the CTAN link to the `.sty` and README files.
- The documentation now lists the LaTeX installation version requirements.

## [v1.0.0] - 2024-11-10

### Added
- First official release to CTAN.