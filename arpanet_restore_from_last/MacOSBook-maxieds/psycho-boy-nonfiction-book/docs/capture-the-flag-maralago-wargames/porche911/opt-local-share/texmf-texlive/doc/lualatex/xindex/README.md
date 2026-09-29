# xindex

Copyright 2019-2025 Herbert Voß
The files xindex-lapp.lua and xindex-pretty.lua have the MIT licence.
all other files are LPPL 1.3

Unicode compatible index programm for LaTeX. It needs Lua 5.3 which
will be included in at least LuaTeX 1.09 (TeXLive 2019)


* xindex.lua            -- main file
* xindex-cfg-common.lua -- main config module
* xindex-cfg-uca.lua    -- config module for uca
* xindex-cfg-no_uca.lua -- config module for old mode
* xindex-base.lua       -- base file
* xindex-baselib.lua    -- base file
* xindex-lib.lua        -- functions module
* xindex-lapp.lua       -- read parameter
* xindex-unicode.lua    -- list of Unicode categories

The syntax of `xindex`

     xindex [options] <inputfile>[.idx] <inputfile>[.idx] ...
     <prog> | xindex -s ...
     cat <input file> | xindex -s ...
     xindex -s ...  < input file


possible options are (short,long):

    -q,--quiet
    -h,--help
    -v...          Verbosity level; can be -v, -vv, -vvv
    -V,--version
    -a,--no_casesensitive
    -b,--no_labels
    -c,--config (default "")
    -e,--escapechar (default ")
    -f,--fix_hyperref
    -g,--no_pagenumber
    -i,--ignoreSpace
    -k,--checklang               
    -l,--language (default en)   
    -n,--noheadings 
    -o,--output (default "")
    -p,--prefix (default L)
    -s,--use_stdin
    -u,--use_UCA     no more needed
    -x,--no_UCA
    <files...> (default stdin) .idx file(s)

Testfiles:

demo.tex:  run

    lualatex demo
    ./xindex.lua demo.idx
    lualatex demo


buch.tex:  run

    ./xindex.lua buch.idx
    lualatex buch

