# xintsession README #

Release: 0.4alpha (2021-11-01)

## Usage ##

xintsession.tex is to be used with etex (or pdftex or the other engines
with Plain as preloaded format) *interactively on the command line*.

It will load [xintexpr](http://www.ctan.org/pkg/xint) and
[polexpr](http://www.ctan.org/pkg/polexpr).

To start a session:

1. Execute `etex xintsession`,
2. An `>>>` invite appears, and computations can begin!\
   \
   Start entering input, terminate it via a semi-colon `;`.
   Say `&help` for help and `&bye` to quit.

In more details: if available at your locale use `rlwrap etex xintsession` to
benefit from arrow keys navigation and other improvements such as parentheses
highlighting. Alternatively, execute `rlwrap etex` and enter `xintsession` at
the `**` prompt.

One can also use the `-jobname` option of `etex` at this step.

At my locale I added `alias xs="rlwrap etex xintsession"` to my `.bashrc`
so I only have to type `xs` at the command line.

The above explanations have been tested on a Unixen (Mac OS), and probably
`rlwrap` is not available on all platforms, but it is not a requirement.

Here is a sample session (spaces do not matter):

    >>> 1+1/2+1/3+1/4+1/5;
    @_1     137/60
    >>> @_^3;
    @_2     2571353/216000
    >>> add(1/i, i=1..50);
    @_3     13943237577224054960759/3099044504245996706400
    >>> &fp
    fp mode (16 digits)
    >>> @_;
    @_4     4.499205338329425
    >>> add(1/i, i=1..1000);
    @_5     7.485470860550346
    >>> &pol
    pol mode (i.e. function definitions use \poldef)
    >>> P(x):=(x-0.1)^3 (x+1.8)^2 (x^10 - (100x-1)^2);

    P = x^15+33*x^14/10+219*x^13/100-865*x^12/1000+936*x^11/10000-324*x^10/100000-1
    0000*x^7-328000*x^6/10-2124100*x^5/100+9084700*x^4/1000-11111900*x^3/10000+5198
    500*x^2/100000-74160*x/100000+324/100000
        --> &GenFloat(P) lets P become usable as function in fp mode
        --> &ROOTS(P) (resp. &ROOTS(P,N)) finds all rational roots exactly and
            all irrational roots with at least 10 (resp. N) fractional digits
    >>> &ROOTS(P,30)
    Solving for real roots of P and assigning them (please wait...)
    (mult. 1) RootP_1 = -3.164772734675337090200909653480...
    (mult. 2) RootP_2 = -1.8
    (mult. 1) RootP_3 = 0.009999999999000000000499999999...
    (mult. 1) RootP_4 = 0.010000000001000000000500000000...
    (mult. 3) RootP_5 = 0.1
    (mult. 1) RootP_6 = 3.159772703424837079727026834533...
    Square-free irrational part: x^10-10000*x^2+200*x-1
        --> &REFINEROOTS(P,N) to extend real irr. roots to N fractional digits
    >>> &bye
    Did I say something wrong?
    Session transcript written on xintsession-211101_18h17.tex
     )
    No pages of output.
    Transcript written on xintsession.log.

As this example illustrates, the computational engine can work in
various modes: exact, fp, int, and pol (the `&ROOTS()` will work in
any mode the same once the polynomial as been defined in pol mode).
Say `&fp=number` at the `>>>` prompt to activate floating point mode
with `number` digits of precision.

If ill-formed input drops you deep into TeX error interaction mode,
try hitting `S`  as it may work to bring you back to normal session.

For additional explanations, enter `&help` at the `>>>` prompt.

## Change log ##

- 0.4alpha (2021-11-01)
  - add `&GenFloat` interface to `\PolGenFloatVariant`
  - add `&ROOTS` and `&REFINEROOTS` interface to under-the-hood
    usage of the
    [polexpr](http://www.ctan.org/pkg/polexpr) facilities
    allowing to get all real roots of the given polynomial
    to arbitrary precision (and all rational roots exactly)
- 0.3b (2021-07-01)
  - fix output still uses `(@_<n>)` when a variable is defined
    but the parentheses were dropped a while ago in general
- 0.3a (2021-06-08)
  - fix extremely weird `0.3` breakage of user function definition
    interface, caused by last line being `\endinput\xintsession`,
    and the latter using `\scantokens` in certain circumstances
  - fix extra `(` in a help panel
- 0.3 (2021-05-31)
  - implement `>>>` primary and `...` secondary invite prompts
  - breaking: rename `\xintresume` into `\xintsession`
- 0.2b (2021-05-23)
  - use `\errorcontextlines=0` regime (if not paused)
  - load `xintexpr` with `\newlinechar` set to `10` to activate
    nicer error messages coming with `xintexpr 1.4g`
  - add help panel navigation via `n`, `p`, `q` and `1`, ..., `5`
  - fix catcode of @ was set to letter
  - fix version was not updated to `0.2a` in banner
  - fix some spaces in help and welcome panels
- 0.2a (2021-05-06)
  - fix help panels mentioning topics obsoleted by `xintexpr 1.4f`
- 0.2 (2021-05-05)
  - fix typos in help panels, improve welcome panel
  - fix "can't send `\par` to background typesetting"
  - track `xintexpr 1.4f`
  - add `&fp=N` parameterized floating point mode interface
- 0.1 (2021-04-13)
  Initial release

## License ##

Copyright (c) 2021 Jean-François Burnol

See documentation of package [xintexpr](http://www.ctan.org/pkg/xint) for
contact information.

This Work may be distributed and/or modified under the conditions of the
LaTeX Project Public License version 1.3c. This version of this license
is in

> <http://www.latex-project.org/lppl/lppl-1-3c.txt>

and version 1.3 or later is part of all distributions of LaTeX version
2005/12/01 or later.

This Work has the LPPL maintenance status author-maintained.

The Author of this Work is Jean-François Burnol.

This Work consists of the package files xintsession.tex and README.md
