MATHASTEXT CHANGE LOG
=====================

1.4e \[2024/10/26\]
----

* Fix a bug dating back to `1.3y` which caused under `LGRgreek` or
  `LGRgreeks` options an `\MTversion{normal}` to raise an `Extra
  \else` error (not if `subdued`).  The unit test which could have
  shown this had been left aside at `1.4d` because it was so old
  that some matters unrelated to the package prevented its
  immediate use... alas...

* Fix one more `1.4` regression: the (not really recommended)
  option `unimathaccents` was broken.  Again a test file existed
  but it had been left apart from those automatically built, for
  some unknown reason...

1.4d \[2024/10/26\]
----

* Fix one more `1.4` regression (the worst one by far): `$f''$`
  caused a crash.  Fortunately, the `everymath` option which
  re-enacts legacy code could be used as a *temporary emergency
  work-around*.  Thanks to Enrico Gregorio for report.

* The `1.4b` option `noletters` did not prevent the package from
  defining math mode symbols `\inodot` and `\jnodot`.  It now does.

* Fix a longstanding legacy bug which would have caused a crash if
  `\MTnonlettersobeymathxx` had been used with `XeLaTeX` in a
  document with the character `-` being a Babel shorthand.

* Usage of `\Mathastext` or `\MTDeclareVersion` to declare a
  math version associated with an exotic non-text font encoding
  such as `OML` is theoretically possible (although of dubious
  practical use except for stress tests) but was broken
  since `1.3u` due to internals
  relying on `LaTeX` commands associated with text font encodings
  (for example to define `\inodot`
  using `\i`,
  or the `\hbar` with the help of the accent command `\=`)
  and which are not available in such context.  This release
  handles such situation gracefully via warnings, rather than
  causing low level errors.

* Improve looks in the PDF of this Change log.

1.4c \[2024/10/21\]
----

* Fix a regression at `1.4`: under `XeLaTeX`, loading `mathastext`
  caused an error if `unicode-math` and its `\setmathfont` had been
  used prior ("*Extended mathchar used as mathchar*" in relation to the
  minus sign character). Thanks to Michael Roland for report.

  Keep in mind though that the documentation (see 1.4.15 Unicode engines) has
  always said that the package "*is expected to be most definitely
  incompatible with unicode-math*".

* Fix another regression at `1.4`, related to the same code and also avoided
  with `everymath` option, but showing with
  all engines.  It caused `\MTnonlettersdonotobeymathxx`, if used, to reset
  the minus sign to its status as prior to the loading of `mathastext`,
  whereas it should have used the (by default) mathversion dependent one
  (which defaults to the en-dash in the font encoding as stored by `mathastext` in
  the extended math version).

* `\Relbar` and `\relbar` redeclarations (needed as they are used by `LaTeX`
  for arrows, and the equal and minus signs if picked from the text font may not
  work well in-there) are now done via `\DeclareRobustCommand` also with
  package `amsmath` to match the current behavior of the latter.  Note though
  that they will use the equal and minus signs as in place at package loading
  time, the documentation does say that `mathastext` should be loaded last.

1.4b \[2024/07/27\]
----

* Fix a regression at `1.4` regarding option `nodigits`.

* New option: `noletters`.  *I am in old age now so I can provide an option
  completely antithetical to my life work*.

* Option `everymath` which is destined to be removed at next major
  release warns user about it.  As major releases tend to happen once
  per decade I think the constant nagging will become insufferable
  and you will adapt to the `1.4` changes rather than persisting into
  using this option.

1.4a \[2024/07/20\]
----

* There was a documentation glitch in 1.4 and also a problem with the
  `\MTprimeskip` feature being lost under the emergency fall-back
  `everymath` option.

1.4 \[2024/07/20\]
---

* Since 1.2 of 2012/12/20, mathastext has used *mathematically active*
  characters to propose certain advanced functionalities.  For reasons half
  lost in the mists of time but whose main one was surely to keep the
  meaning of the active shape of characters unchanged outside of math mode,
  this mathematical activation, and (in most cases) the definitions of what
  active characters do, were done again at *each* entrance into math mode.
  At this 1.4 release, mathastext does *not inject any code whatsoever* into
  the `\everymath` and `\everydisplay` toks registers anymore (*except* for
  one font-related hack needed under `LuaLaTeX`, see below).  Your documents
  will compile a tiny bit faster.

* In (*unsual*) documents where users play with catcodes and mathcodes it is
  *impossible* to keep exact backward compatibility, because documented user
  commands which acted formerly as toggles with delayed action now will enact
  changes immediately if in the document body.  In practice consequences are
  expected to be few, because catcode active characters are (as was already
  the case with earlier releases) hacked only when they are Babel shorthands
  and they are then modified in a way altering only their action in math
  mode.  The precise description of what mathastext does when mathematically
  activating (or not) a character, depending on circumstances, is to be
  found among small-print comments in the section "Extended scope of the
  math alphabets commands".  See also the documentation of the
  `\MTmathactiveletters` command for some specifics regarding ascii letters.

* New option: `everymath`. It instructs mathastext to revert (partially)
  to its legacy code which uses `\everymath/\everydisplay`.  This reversal
  is partial, the handling of ascii letters not being included into it.  The
  `everymath` option is there *only to try as a quick fix* in case transition
  to this release causes a major problem in a user document and time is
  lacking to investigate.  *Please report to the author such issues*.  Option
  `everymath` is destined to be removed at next major release.

* New option: `activedigits`.  Enjoy.

* It is now easier to hook into the mathastext architecture for
  mathematically activated ascii letters.  See the new section "Hacking
  letters (and even digits) for special tasks".

* Bugfix: do not override special behavior of the math mode dot in
  babel-spanish.

* Bugfix: A *desperate* hack related to `LuaLaTeX` font matters and dating
  back to 1.3o 2016/05/03 had been for some years in dire need of an update
  regarding fonts using `Renderer=HarfBuzz`.  This is done now.  Thanks to
  tex.sx `user691586` for report.  This is currently the sole remaining
  usage of `\everymath/\everydisplay`.

* Bugfix: `\MTexplicitbracesobeymathxx` (which is related to `\{` and `\}`)
  was without effect since an upstream `LaTeX` change at its 2020-02-02 release.

* With option symbolmisc, those math symbol macros formerly defined via
  `\DeclareRobustCommand` are now declared via `\protected\def`.

* Removal of legacy branches previously kept to support `LaTeX` earlier than
  2020-02-02.

* Removal of support for EU1 and EU2 font encodings.

* Option `noasterisk` deprecated at 1.2d 2013/01/02 has (finally) been removed.

* Four test files previously included and auto-extracted from the
  distributed dtx have been dropped.  One of them is still available
  on the package homepage.

* Some parts of the documentation have been massively re-ordered and even to some
  extent improved.  But there may be some occasions where obsolete statements will
  be found having the legacy `\everymath/\everydisplay` situation as background.

1.3zb \[2023/12/29\]
-----

* Update to the `frenchmath*` option to maintain compatibility
  with the [frenchmath](https://ctan.org/pkg/frenchmath)
  package whose release 2.7 (2023/12/23) has replaced
  the ncccomma package by the decimalcomma package.

* The `frenchmath+` option holds the former meaning of `frenchmath*`.

* Option `decimalcomma` to load the eponymous package by Antoine
  Missier.  This is tacitly done by `frenchmath*`.

* No more messages sent to the console output during loading,
  only info messages going into the log, and using (more or less)
  the official `LaTeX` interface: after close to 13 years of development
  of this package it was perhaps finally the time to do it.

* Documentation improvements.  Close to 13 years after the
  birth of the package, and as it nowadays rarely wakes up from
  dormancy, this was almost last chance to try to improve a few
  things.

1.3za \[2023/12/20\]
-----

* Under `LGRgreek` and `LGRgreeks` options, new math alphabets
  `\mathgreekupbold` and `\mathgreekitbold`.

* New options `LGRgreek+` and `LGRgreeks+`.

  Thanks to Holger Gerhardt for feature request and code ideas.
  Please find and read the relevant documentation in the PDF.

* The meaning of `defaultalphabets` and related individual
  options such as `defaultbf` has been modified (reverted to pre
  `1.15f` release): even under these options, the package always
  creates `\mathnormalbold`, `\Mathnormal`, `\Mathrm`, `\Mathbf`
  etc..., commands.  This may break documents which used these
  options in order to reserve these command names.  This was done
  with some hesitancy, but for the sake of internal logical
  coherence.

* Fix an obscure bug with no real consequences regarding
  interaction of `subdued` with `LGRgreek` and `\MTgreekfont`.
  See the `LGRgreek` documentation in the complete list of
  options for details.

* Fix long-standing hyperlink problems in the documentation:
  blue color words should now all be functioning hyperlinks.

1.3z \[2023/09/01\]
----

Fix 1.3y regression which broke `selfGreek` option due to internal
renamings.  Thanks to Stephan Korell for report.

1.3y \[2022/11/04\]
----

(the 1.3x had an annoying documentation bug, and had already
been pushed to CTAN, hence the version increase to 1.3y)

* mathastext now requires the `\expanded` primitive (which is
  available with all major engines since TeXLive 2019).

* Revisit parts of the documentation (mainly
  the Examples, and the section on Greek letters) and shuffle
  the other parts to surely improve things. Mention
  the [mathfont](https://ctan.org/pkg/mathfont)
  and [frenchmath](https://ctan.org/pkg/frenchmath) packages.

* Add the `ncccomma` option which loads the
  [ncccomma](https://ctan.org/pkg/ncccomma)
  package to allow the comma as decimal separator.

* Add the `binarysemicolon` option to let the semi-colon
  be of type `\mathbin`, not `\mathpunct`.

* Add the `frenchmath*` option which does all three of
  `frenchmath`, `ncccomma` and `binarysemicolon`.

* Under the `LGRgreek` and `LGRgreeks` options only:

  - make available upright and italic Greek letters in math mode
    via `\alphaup`, `\alphait`, ...  control sequences, in
    addition to those not using such postfixed-names.

  - add `\mathgreekup` and `\mathgreekit` math alphabets.

  - add `\MTgreekupdefault` and `\MTgreekitdefault`.  The former
    replaces `\updefault` which was used in some places and since
    `LaTeX` `2020-02-02` caused systematic Font Warnings about the
    substitution of `up` by `n`.

  These new features required an extensive internal refactoring
  which is expected to not induce changes to most existing
  documents.  But it may induce changes to those using some
  unusual configuration in the preamble, as made possible via the
  package macros; this can apply only to documents authored by
  those few people who actually read the documentation.  For full
  details make sure to read the PDF documentation about this
  change.

* Fix "`\Digamma` under `LGRgreek` option uses the shape for
  lowercase not uppercase Greek".

* Fix some incongruities in log messages related to Greek
  letters and emitted during math version creation in the
  preamble.

1.3w \[2019/11/16\]
----

* `LaTeX` `2019-10-01` release (up to patch level 3 inclusive)
  together with `amsmath` conspired `:-)` to break `mathastext`,
  in connexion with math accents. This has been fixed upstream,
  but I am releasing nevertheless a hot fix to this
  https://github.com/latex3/latex2e/issues/216 issue
  (this is compatible with future `LaTeX` releases).

* Fix: the `\hbar` is originally a robust command but
  becomes a `\mathchardef` token if (e.g.) `amsfonts` is
  loaded and then with recent `LaTeX` `\hbar<space>` is
  made undefined and `mathastext` definition of it
  remained without effect. The `\mathastext` own `\hbar`
  is now defined `\protected`.

* Fix: option `noendash` (or `symboldelimiters` which implies
  it) caused (since `1.3u`) a bug under Unicode engines when
  setting up the minus sign.

* Version names declared via the optional argument of
  `\Mathastext` or as first argument of `\MTDeclareVersion`
  must not be `normal` or `bold`. Enforce that! (this was
  marked as a bug to fix since `2012/10/24`...)

1.3v \[2019/09/19\]
----

* `LaTeX` 2019-10-01 release has made more math macros robust.
  This applies in particular to the math accents and to the
  `\hbar`. This required for mathastext to adapt. Also
  `\leftarrowfill` and `\rightarrowfill` are now defined
  robust by the kernel, hence mathastext does the same. These
  changes are dropped if mathastext detects an older `LaTeX`
  format.

* These `LaTeX` kernel changes motivated an examination of some
  redefinitions done (optionally) by mathastext:

  - The user math alphabet macros got redefined as expanding
  to some other (robust) math alphabet macros, but were not
  robust in the strict sense. This does cause some issues for
  moving arguments in the context of multiple math versions,
  hence it was a bug. The special behavior of the math
  alphabet commands (they redefine themselves and other macros
  on first use) makes is somewhat problematic for mathastext
  to keep them updated across math versions and at the same
  time strictly `LaTeX2e` robust. Thus mathastext now requires
  the e-TeX primitive `\protected` and uses it for the
  definitions of the user level math alphabet macros.

  - There are a number of `\mathchardef` tokens which (under
  certain options and/or configuration via the package user
  interface), mathastext redefines as macros. These macros
  cause no issue in moving arguments (they are not "fragile"),
  still it is probably better if they expand only at the time
  of typesetting. To this effect they are now also
  `\protected`: `\exists`, `\forall`, `\colon`, `\setminus`,
  `\mid`, `\prod`, `\sum`, `\imath`, `\jmath`.

  - The macro `\vert` (which expands to a `\delimiter`) is now
  defined robust by `LaTeX`. Its mathastext redefinition is a
  `\protected` one rather.

  - The `\{` and `\}` (which get redefined only under
  `\MTexplicitbracesobeymathxx` regime) are now strictly
  robust in the `LaTeX2e` sense (formerly they were `\let` to
  some robust macros, and this did not make them strictly
  `LaTeX2e`-robust entities).

* The various changes in mathastext described in the previous item
  apply independently of the `LaTeX` release version. The
  `LaTeX` format itself requires the e-TeX extensions since 2015.

1.3u \[2019/08/20\]
----

* new feature: the initial release dealt with only one font, and
  although shortly thereafter the 1.11 version added support for
  extended math versions, it was documented that some font-dependent
  set-up (minus as endash, dotless i and j, hbar, math accents) was
  done only once. This release makes the relevant characters font
  encoding savvy in each mathastext-extended math version. Thus,
  they should render correctly even with multiple math versions
  using fonts with varying encodings.

  This reinforces importance of using `\MTversion` and not the
  `LaTeX` `\mathversion` when switching to a new math version (which
  got declared via the package interface). The implementation is
  compatible with Unicode engines and mixed usage of `TU` encoding
  (OpenType fonts) with traditional 8bits TeX font encodings. For
  all engines, all used (8bits) encodings must have been passed as
  options to the `fontenc` package.

  Thanks to Falk Hanisch for feature request and code suggestions.

* new option `unimathaccents`: this adds to option `mathaccents`
  the demand to use the text font accents for OpenType fonts in math
  mode via the `\Umathaccent` primitive. Indeed, as my testing
  showed that this gave non-satisfactory results both with `XeTeX`
  and `LuaTeX` regarding the horizontal placement of the accents,
  the main option `mathaccents` acts only on 8bits encoded fonts.

* bugfix: the `\Mathastext` without optional argument forgot to
  repeat some font-encoding dependent initialization set-up done
  originally during package loading.

* bugfix: under the `subdued` option macros `\MTmathactiveletters`
  or `\MTnonlettersobeymathxx` now act like no-ops if
  issued explicitly while in the `normal` or `bold` math version.
  Formerly, this was not the case and could cause bugs such as a
  disappearing minus sign in math mode.

* bugfix: the letter `h` used in the `\hbar` obeyed the extra
  skips as set-up by `\MTsetmathskips`, badly interfering with the
  horizontal positioning of the bar accent. They are now ignored
  (as well as the added italic correction).

1.3t \[2018/08/22\]
----

* bugfix: the 1.3s bugfix about `subdued` compatibility with
  `fontspec` was deficient.

* bugfix: very old (v1.2, 2012/12/20) bug causing low-level TeX error
  during package loading (with pdflatex) when setting up the math minus
  sign to be the text font endash character, in cases with
  `\encodingdefault` other than OT1, T1 or LY1, e.g. something like
  T2A.

* `\imath` and `\jmath` obey the `subdued` regime. And the minus sign
  is now handled especially to ensure perfect compatibility with the
  `subdued` option.

* breaking change: `mathastext` does not redefine anymore
  `\i` and `\j` to let them be usable both in text and math mode.

1.3s \[2018/08/21\]
----

* fix to an issue with `subdued` option in a `fontspec` context.


1.3r \[2016/11/06\]
----

* documentation tweaks.

1.3q \[2016/10/31\]
----

* new option `unicodeminus`.

* the `Recent Changes` section of the documentation has been removed as it
  was a duplicate of information available in the `Change Log`.

* some other
  changes in the documentation, in particular the use of straight quotes
  in verbatim.

1.3p \[2016/05/13\]
----

* bugfix: release `1.3n` had forgotten to activate by default its new
  customization of the amsmath macro `\newmcodes@` (it was done from
  using `\MTversion` in the document body but not by default at start
  of body.)

* public name `\MTfixmathfonts` for a `1.3o` macro.

1.3o \[2016/05/03\]
----

* `mathastext` fixes an issue related to a feature of `LuaLaTeX` and
  `luaotfload` that OpenType fonts are declared in one of two modes:
  `node` and `base`, and only the latter is functional in math mode. But
  by default text fonts are declared in mode `node`. Thus `mathastext`
  now intervenes to make it so that the font it declares in math mode
  will use mode `base`. This fixes issues with for example old style
  figures being used while the text font used lining figures (or vice
  versa, depending on the font). But see the code comments for more.

1.3n \[2016/04/22\]
----

* at long last, `mathastext` takes care properly of annoying and perplexing
  amsmath's `\newmcodes@`. The very recent change in `amsopn.sty` finally
  made it compatible with Unicode engines, but anyhow, `mathastext` must do
  its own patch to use the correct font. All of this taking into account
  the various options passed to the package. Lots of trouble for a tiny thing.

1.3m \[2016/04/02\]
----

* minor code maintenance before annual TL freeze.

1.3l \[2016/01/29\]
----

* compatibility with fontspec's upcoming switch from `EU1/EU2` to
  `TU` common to both Unicode engines.

1.3k \[2016/01/24\]
----

* typos fixed in the documentation. In particular, the README link to
  the package homepage had remained broken from day one of the package
  releases: `mathastext.html` therein was misspelled as
  `mathsastext.html`! (but the pdf documentation had the correct link;
  as well as the CTAN catalogue).

1.3j \[2016/01/15\]
----

* renamed and modified recent `1.3i`'s `\MTactivemathoff` into
  `\MTeverymathoff`. Added `\MTeverymathdefault`.

* `subdued` mode is a bit stronger: also the asterisk reverts to the
  default (if it was modified due to option `asterisk`), the added
  extra `\mskip`'s (useful with upright fonts) for `'`, `\exists`,
  and `\forall` are suppressed rather than re-configured to use `0mu`.
  Related new commands `\MTexistsdoesskip`, `\MTforalldoesskip`,
  `\MTprimedoesskip`, `\MTnormalexists`, `\MTnormalforall`,
  `\MTnormalprime`.

* the toggle for using mathematically active letters is only emitted
  once during package loading; the `\Mathastext` command does not do
  it anymore; the use in the preamble of `\MTmathstandardletters`,
  or `\MTnoicinmath` and related commands is not overruled by later
  use of `\Mathastext`.

* quite a few documentation improvements and rewrites, particularly
  in the description of commands which are related to the
  modifications of mathcodes (mainly for math activation of
  characters or letters) as done by mathastext at `\everymath` or
  `\everydisplay`.

1.3i \[2016/01/06\]
----

* `\url` from `url.sty` as well as `\url` and `\nolinkurl` from
  `hyperref.sty` use math mode and (by default) the monospace text
  font. To avoid mathastext overwriting the special preparation done
  by `{url,hyperref}.sty` the commands `\url/\nolinkurl` are patched
  to do automatically `\MTactivemathoff` (now `\MTeverymathoff`)
  before entering math mode.

* the extra skips specified by `\MTsetmathskips` are not inserted
  around letters if inside the arguments of math alphabet commands,
  or within operator names.

* the added explicit italic corrections (for non-oblique fonts) were
  disabled within math alphabet scopes, except `mathnormal`; they
  are now disabled within all math alphabets, inclusive of
  `mathnormal`.

1.3h \[2015/10/31\]
----

* bugfixes: since `1.3d 2014/05/23` the option `symbolgreek` caused
  `\ell` to become undefined, and, similarly but far worse, options
  `selfGreek`, `selfGreeks` caused all lowercase Greek letters
  `\alpha`, `\beta`, etc.. to become undefined.

1.3g \[2015/10/15\]
----

* following `2015/10/01` `LaTeX` release, removal of the `"luatex"`
  prefix from the names of the `LuaLaTeX` math primitives. Compatibility
  maintained with older `LaTeX` formats.

1.3f \[2015/09/12\]
----

* the replacement of amsmath's `\resetMathstrut@`, when it is
  done, emits an Info rather than a Warning as this could be
  potentially stressful to some users.

* the `README` self-extracts from the `dtx` source, as a text
  file `README.md` with Markdown syntax.

1.3e \[2015/09/10\]
----

* bugfix: under option nosmalldelims, `\lbrace` and `\rbrace` were
  redefined as math symbols and could not be used as delimiters.

1.3d \[2014/05/23\]
----

* A 2015/02/26 edit to the documentation mentions the
  improved compatibility of mathastext
  with the latest (3.34) beamer release: no more need for
  `\usefonttheme{professionalfonts}`.

* new commands `\MTstandardgreek` and `\MTcustomgreek`.

* The Greek letters, in case of use of one of the package related
  options, are left to their defaults in the normal and bold math
  versions if the subdued option was also used (this was so far
  the case only with options LGRgreek/LGRgreeks).

* `\newmcodes@` of amsmath is left untouched if package
  lualatex-math is detected.

1.3c \[2013/12/14\]
----

* added a starred variant to `\MTversion` which tells mathastext to
  only do the math set-up and not modify the text fonts.

* added second optional version name argument to `\Mathastext` and
  to `\MTDeclareVersion`, to transfer settings for things not
  otherwise changed by mathastext from a math version to the one
  declared. This is mainly for symbols and large symbols to be the
  bold ones when the user sets up the series of a mathastextified
  font to be bold in a mathastext-declared version.

* renamed `\defaultprod` to `\MToriginalprod`, `\defaultsum` to
  `\MToriginalsum`, (this is in case of option symbolmisc).

* changes to the dtx organization; options for generating the
  documentation can be customized in generated mathastext.tex file.

* 1.2d code for `\#`, `\$`, `\%`, and `\&` modified erroneously the
  earlier correct 1.2c code and created a bug showing up with more
  than 16 math families (a possibility only with lualatex or
  xelatex).

1.3a \[2013/09/04\]
----

* the somewhat silly `\string`'s are removed from the
  `\MTsetmathskips` command of release 1.3, thus allowing its first
  argument to be a macro, or any expandable code, giving a letter.

* the amsmath `\resetMathstrut@`, which is incompatible with a
  mathematically active parenthesis ( is now modified only if
  necessary (i.e.\@ only when `\MTnonlettersobeymathxx` is issued) and
  is restored to its original value if not needed anymore (i.e.
  after `\MTnonlettersdonotobeymathxx`, as for example when
  switching to the normal version under option subdued).

* improved documentation.

1.3  \[2013/09/02\]
----

* commands `\MTsetmathskips` and `\MTunsetmathskips` added.

* commands `\MTmathactiveletters` and `\MTmathstandardletters` to
  govern the math activation of letters independently of its use
  for insertion of the italic corrections (`\MTicinmath` and
  `\MTnoicinmath` correspondingly modified).

* the new `\luatexUmathcodenum` as available since TL2013 allows
  identical treatment by mathastext of = and - under both `LuaTeX`
  and `XeTeX`.

* `\newmcodes@` of amsmath is left untouched in case of option basic.

* a sentence containing | which was written to the log during the
  loading caused a problem if | was active (typically if
  `\MakeShortVerb`{\|} was added to the preamble prior to the
  loading of mathastext).

* some preemptive measures taken regarding things such as `\mid`,
  `\lbrace`, and `\rbrace`, as some packages define these things in
  manners which made the re-definitions done by mathastext issue
  errors.

1.2f \[2013/01/21\]
----

* minor code improvements. Change log added to the user manual.

1.2e \[2013/01/10\]
----

This version should be the last one in the 1.2 series as it seems to
correct most of the main problems which were introduced with the massive
use of mathematically active characters in versions 1.2 and 1.2b.

* It is indeed a thorny point when one wants to modify an active character in
  math mode only (without breaking usage in label's and ref's for example).
  The package now does that _only_ if the activation originated in the Babel
  system as it is then possible to modify appropriately the Babel macros
  `\user@active<char>` and `\normal@char<char>`, at the time of entering math
  mode (mathastext does all its activation job at `\everymath` and
  `\everydisplay`).

  The relevant issues are discussed in section 2.10 of the user manual, in the
  test file mathastexttestalphabets.tex, and in the source code comments for
  macro `\mst@mathactivate`. The inherent incompatibility of Babel with
  packages having made mathematically active the characters itself makes
  document active is circumvented by this interference of mathastext. A
  generally applicable Babel patch could be derived from the method used by
  mathastext.

  For the non catcode active characters, mathematical activation is used.
  This is done at the entrance in math mode.

* Sadly, the feature of added italic corrections introduced in
     version 1.2b did not behave as described in the user manual, due to
     forgotten group braces. Fixed.

* The command `\MTlowerast` from the user manual of v1.2d was not the
     one implemented in the source code. Fixed.

* The test files automatically extracted from a latex run on the dtx
     file have been revised and extended.

* The code is better documented.

1.2d \[2013/01/02\]
----

*  an incompatibility with amsmath (its macro `\resetMathstrut@`),
      exists since version 1.2 of the package. This is fixed
      here.

*  various improvements in dealing with the asterisk and in the
      mechanism of letting non-letter symbols obey the math alphabet
      commands.

*  the `noasterisk` option is deprecated and made a no-op.

*  documentation extended and improved.

1.2c \[2012/12/31\]
----

*  mathastext now inserts automatically after all (latin)
      letters in math mode their italic corrections, if the font
      used is upright (sic). This improves the spacings for the
      positioning of subscripts. The feature is de-activated
      inside the math alphabets commands (apart from `\mathnormal`),
      so as to not prohibit the formation of ligatures.

*  the documentation has been extended to explain in detail the
      issues which are relevant to the new feature of added italic
      corrections.

* version 1.2 had some bad bugs when confronted to active
  characters. This is corrected and additionally
  `\MTnonlettersdonotobeymathxx` is made the default, as the user
  input is too much constrained in its absence.

*  a less fatal, but still annoying, typo had made the dot in 1.2
      of type `\mathpunct` rather than `\mathord`.

*  the inner namespace has been rationalized a bit.

1.2 \[2012/12/20\]
----

*  a new command sets up the amount of space to be automatically
      inserted before the derivative glyph (useful when using an
      upright font).

*  the scope of the math alphabets has been extended to apply
      to the non-alphabetical characters, and also to operator
      names.

*  the format of the dtx file has changed. The package file
      is self-extracting from the dtx, and four additional test
      files are also produced during `latex mathastext.dtx`.

1.15f and 1.15g \[2012/10/25\]
----

*  `\$`, `\#`, `\&`, and `\%` had been re-defined by mathastext since its
      inception in a rather strange (but working) way, which
      could cause surprises to other packages. Fixed.

*  the subdued mechanism for the math alphabets is implemented
      in a simpler and more efficient manner than in 1.15e.

*  the `defaultxx` options act a bit differently, and are more
      useful in case of a `too many math alphabets` situation.

*  various improvements in the documentation.

*  general clean up and better commenting of the source code.

1.15e \[2012/10/22\]
----

*  new user commands to specify skip or glue to be
      inserted after the math symbols `\exists` and `\forall`

*  complete (user transparent) rewrite of the code
      implementing the subdued option; and its action has
      been extended to apply also to the `\mathbf`, `\mathit`,
      `\mathsf`, `\mathtt` alphabets and not only to `\mathrm` and
      `\mathnormal` as in the previous versions.

*  improvements in the documentation.

1.15d \[2012/10/13\]
----

* the Unicode situation is now correctly treated, throughout the
  code (this had been left in a half-done way from version 1.14 of
  April 2011).

* this includes an issue related to amsmath and its
  DeclareMathOperator macro which has been fixed,

* and the code related to `\relbar` and `\Relbar` (and
  `\models`) has been revised.

1.15c \[2012/10/05\]
----

*  it is now possible to use distinct fonts in LGR encoding
      for the Greek letters according to the current math
      version.

*  improvements to the documentation.

1.15b
----

*  corrected a 'feature' of 1.15 which was backward-incompatible

*  improvements to the pdf documentation

1.15  \[2012/09/26\]
----

*  the subdued option allows the mathastextification to
      act only locally.

*  some measures taken to deal with amsmath related
      issues when using xetex or luatex.

1.14c
----

*  a bug is fixed: the `\Mathastext` macro reinitializes
      the fonts in the normal and bold math versions, but it
      also erroneously redeclared the math alphabet changing
      commands which could have been set up in previously
      defined math versions (via earlier calls to
      `\Mathastext`\[version_name\]).

1.14b \[2011/04/03\]
----

*  there was a bug with `\$`, `\#`, `\&`, `\%` in math mode which
      showed up when ten or more math families had been
      declared. This bug affected also the minus sign under
      the same circumstances, when Unicode engines were
      used. Fixed.

*  the options LGRgreek and selfGreek act now a bit
      differently, and new options LGRgreeks and selfGreeks
      have been defined.

*  I also cleaned up a bit the code, for a more
      structured namespace.

1.14
----

*  mathastext now modifies also the math alphabets `\mathit`,
      `\mathsf` and `\mathtt`, thus making it a quite generic
      complete manner to adapt the math configuration to fonts
      provided with no math support.

1.13d
----

*  new macros `\MTstandardgreek` and `\MTcustomgreek`

1.13b
----

*  when the Symbol font is used for `\prod` and `\sum` this
      will be only for inline math; display math will use the
      default glyphs

1.13 \[2011/03/11\]
----

*  the LGRgreek option is added.

*  internal changes for better readability of the code.

1.12
----

*  various bugs have been corrected.

*  the endash and alldelims options are active by default.

*  the package is more Unicode aware.

*  the `\Mathastext` command has been improved to
      facilitate the mechanism of math versions also when
      using `XeTeX` or `LuaTeX` (with package fontspec.)

*  the en-dash and dotless i and j now work with all
      encodings, Unicode inclusive.

1.11 \[2011/02/06\]
----

*  optional argument to `\Mathastext` macro.

1.1  \[2011/02/01\]
----

*  options italic and frenchmath.

1.0  \[2011/01/25\]
----

*  Initial version.

