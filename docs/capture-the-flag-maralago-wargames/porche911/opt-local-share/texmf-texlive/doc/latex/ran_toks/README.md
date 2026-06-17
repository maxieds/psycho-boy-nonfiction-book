The ran_toks Package
Author: D. P. Story
Dated: 2021-06-06

This short package, with minimal requirements, defines macros for
randomizing a list of tokens.  There are two approaches:

    1.  \ranToks{myList}{ {One}{Two}{Three}{Four}{Five} }: Here the token
        list occurs as the argument of the \ranToks command. myList is the
        name of this list. The tokens can be anything that \TeX accepts as
        a macro argument, this excludes \verb, for example.

    2.  Another construct writes verbatim to the disk, so the tokens can
        be of arbitrary size, and include \verb and the verbatim
        environment, for example,

        \bRTVToks{myStuff}
        \begin{rtVW}
        The inline answer is \verb!x^3!
        \end{rtVW}
        \begin{rtVW}
        This is my stuff, leave it alone!
        \end{rtVW}
        ...
        \begin{rtVW}
        The verbatim listing is
        \begin{verbatim}
        \bRTVToks{myStuff}
        ... (missing stuff)
        \eRTVToks
        \end{verbatim}
        \end{rtVW}
        \eRTVToks

To actually see the randomized list, use the \useRanTok{num} command: For
myList, we would write \useRanTok{1}, \useRanTok{2}, \useRanTok{3},
\useRanTok{4}, and {\useRanTok{5}} to obtain a random listing of the
tokens in the myList list.

For users of AeB or eqexam, the latter structure can be used to randomize
the order of the questions on a quiz or exam.

What's New (2021-06-06) Added support for nested \bRTVToks/\eRTVToks command 
  pairs. Demo files: ran_toks.tex and nested-matching.tex. 

What's New (2021-01-19) A new option, usedbapp, was added to support a DB 
  application. Extensive work was done on the DB application. Added 
  \uniqueXDBChoicesOn, which if expanded, tries to choose a random token that 
  has not already been chosen, across versions of a multi-version eqexam 
  document. Changes are discussed in the documentation and in the new 
  examples in the distribution. 

What's New (2019-12-28) Defined \rtVWHook to insert at the top of the
  rtVW environment. Also created an alternate package name of ran-toks. 

What's new in v1.1: Added the convenience command \useTheseDBs to input files 
  for an application to constructing exams (using eqexam) from a series of DB 
  files. Refer to the new demo file mc-db.tex. 

Enjoy!

Now, I must get back to my retirement.

dps

