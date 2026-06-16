##  Remove all lines we neither need nor want.
/^\\input /d
/^@anchor/d
/^@bye/d
/^@documentencoding/d
/^@node/d
/^@setfilename/d
/^@settitle/d
/^@top/d
/@menu/,/@end menu/d

##  Convert sectioning macros to our own hierarchy.
s/^@chapter \(.*\)$/\\subsection{\\titlecase{\1}\\label{\1}}/
s/^@section \(.*\)$/\\subsubsection{\\titlecase{\1}}\\label{\1}/

##  Make `@asis' list resemble the Texinfo format.
s/@table @asis/\\begin{list}{}{\\itemindent=-20pt\\leftmargin=20pt}/
s/@end table/\\end{list}/

##  We substitute our maxipage environment for @display.
s/@display/\\begin{maxipage}/
s/@end display/\\end{maxipage}/

##  Translate `@example' environments.
s/@example/\\begin{quote}\\tt\\obeylines/
s/@end example/\\end{quote}\n\n/

##  Indenting by four spaces generates a `verbatim' environment.
s/@verbatim/\\begin{verbatim}/
s/@end verbatim/\\end{verbatim}/

##  The argument format of the URL macro is different.
s/@url{\([^,]*\), \([^}]*\)}/\\href{\1}{\2}/g

##  Use our own markup.
s/\.\.\./\\dots{}/g
s/LaTeX/\\LaTeX{}/g
s/@file/\\emph/g
s/@strong/\\textbf/g
s/@var/\\emph/g
s/[w]{/mbox{/g

##  Translate some Texinfo macros.
s/@backslashchar/\\char`\\\\/g
s/@lbracechar/\\{/g
s/@noindent/\\noindent/g
s/@rbracechar/\\}/g

##  Quote some special characters.
s/%/\\%/g
s/_/\\_/g

##  Add space around alternative-indicators.
s/[|]/\\,|\\,/g

##  Adapt to how a man-page is typeset.
##  En-dashes in front of long options really suck!
s/--/-\\nolig*-/g

##  Converting the at-signs to backslashes is a bit tricky.
s/^@item/\\item/
s/@\([A-Za-z][A-Za-z]*\){/\\\1{/g
s/@@/@/g

##  Convert selected macro names.
s/\\jobname/\\textbackslash jobname/g

##  Make qualified Perl names breakable.
s/::/::\\breakpoint*/g
