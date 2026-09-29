%%
%% This is file `title.mp',
%% generated with the docstrip utility.
%%
%% The original source files were:
%%
%% typog.dtx  (with options: `title')
%% 
%% This is a generated file.
%% 
%% Copyright (C) 2024 by Ch. L. Spiel
%% 
%% This work may be distributed and/or modified under the conditions
%% of the LaTeX Project Public License, either version 1.3c of this
%% license or (at your option) any later version.  The latest version
%% of this license is in
%%     https://www.latex-project.org/lppl.txt
%% and version 1.3c or later is part of all distributions of LaTeX
%% version 2003/12/01 or later.
%% 
%% This work has the LPPL maintenance status `maintained'.
%% 
%% The Current Maintainer of this work is Ch. L. Spiel.
%% 
%% This work consists of the files typog.dtx and typog.ins
%% and the derived files typog.sty, slant-angle.mp,
%% crooked-paragraphs.mp, smooth-parshapes.mp, title.mp,
%% typog-example.tex, typog-minimal-test.tex,
%% typog-without-microtype-test.tex
%% typog-grep.pl.in, typog-grep.pl,
%% typog-grep.pod, and teximan2latex.sed.
%% 
%% 
prologues := 3;
truecorners := 1;
linecap := butt;

string roman_font;
roman_font := "pplr8r";         % URW Palladio L - Roman

string italics_font;
italics_font := "pplri8r";      % URW Palladio L - Italic

picture dash_dotted;
dash_dotted := dashpattern(on 3 off 3 on 0 off 3);

u := 280;

font_scale := 20;

pair loc[];
loc[1] := .2[origin, (u, 0)];
loc[2] := .5[origin, (u, 0)];
loc[3] := .8[origin, (u, 0)];

pair slant_vector;
slant_vector := (63, 150);

pair raise_vector[];
raise_vector[0] := (0, 44);
raise_vector[1] := (0, 61);
raise_vector[2] := (0, 54);
raise_vector[3] := (0, 71);

picture letter_V;
letter_V := thelabel.top("V" infont roman_font scaled font_scale, loc[1]);

picture normal_hyphen;
normal_hyphen := thelabel.top("-" infont roman_font scaled font_scale, loc[2] + raise_vector[0]);

picture raised_hyphen;
raised_hyphen := thelabel.top("-" infont roman_font scaled font_scale, loc[2] + raise_vector[1]);

picture letter_A;
letter_A := thelabel.top("A" infont roman_font scaled font_scale, loc[3]);

beginfig(1);
  draw letter_V;
  draw normal_hyphen withcolor .9 white;
  draw raised_hyphen;
  draw letter_A;

  pickup pencircle scaled .4pt;
  draw (loc[1] -- loc[1] + slant_vector) shifted (7, 0) dashed evenly;
  draw (loc[1] -- loc[1] + slant_vector) shifted (27, 0) dashed evenly;
  draw (loc[1] -- loc[1] + slant_vector) shifted (80, 0) dashed evenly;
  draw (loc[3] -- loc[3] + slant_vector) shifted (-68, 0) dashed evenly;

  draw .35[origin, (u, 0)] + raise_vector[2] --  .8[origin, (u, 0)] + raise_vector[2]
    dashed dash_dotted withcolor .6white;
  draw .35[origin, (u, 0)] + raise_vector[3] --  .8[origin, (u, 0)] + raise_vector[3]
    dashed dash_dotted;
endfig;
end
