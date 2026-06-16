%%
%% This is file `crooked-paragraphs.mp',
%% generated with the docstrip utility.
%%
%% The original source files were:
%%
%% typog.dtx  (with options: `crookedparagraphs')
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

def draw_filled_rectangle(expr lower_left, upper_right, color) =
  fill lower_left -- (xpart upper_right, ypart lower_left) --
       upper_right -- (xpart lower_left, ypart upper_right) --
       cycle
       withcolor color;
enddef;

u := 100;

em := 10;
linelength := 2u;
baselineskip := 1.2em;
parskip := 3;
parindent := 2.5em;

cmykcolor line_color;
line_color := (.08, 0, 0, .18); % cold silver

color customred[];
customred[1] := (.890, .282, .282);
customred[2] := (.831, .110, .110);
customred[3] := (.686, .043, .043);
customred[4] := (.569, .000, .000);
customred[5] := (.420, .000, .000);

color margin_color;
margin_color := customred[2];

beginfig(1); % short line -- gap
  y := 0;
  draw_filled_rectangle((0, y), (linelength, y + 1em), line_color);
  y := y - baselineskip;
  draw_filled_rectangle((0, y), (1.1em, y + 1em), line_color);
  y := y - baselineskip;
  draw_filled_rectangle((parindent, y), (linelength, y + 1em), line_color);
  y := y - baselineskip;
  draw_filled_rectangle((0, y), (linelength, y + 1em), line_color);

  draw_filled_rectangle((-.667em, 1em), (-.333em, -3baselineskip), margin_color);
  draw_filled_rectangle((linelength + .333em, 1em), (linelength + .667em, -3baselineskip), margin_color);
endfig;

beginfig(2); % short line -- covered
  y := 0;
  draw_filled_rectangle((0, y), (linelength, y + 1em), line_color);
  y := y - baselineskip;
  draw_filled_rectangle((0, y), (2parindent, y + 1em), line_color);
  y := y - baselineskip;
  draw_filled_rectangle((parindent, y), (linelength, y + 1em), line_color);
  y := y - baselineskip;
  draw_filled_rectangle((0, y), (linelength, y + 1em), line_color);

  draw_filled_rectangle((-.667em, 1em), (-.333em, -3baselineskip), margin_color);
  draw_filled_rectangle((linelength + .333em, 1em), (linelength + .667em, -3baselineskip), margin_color);
endfig;

beginfig(3); % completely filled line -- no clear paragraph break
  y := 0;
  draw_filled_rectangle((0, y), (linelength, y + 1em), line_color);
  y := y - baselineskip;
  draw_filled_rectangle((0, y), (linelength, y + 1em), line_color);
  y := y - baselineskip - parskip;
  draw_filled_rectangle((0, y), (linelength, y + 1em), line_color);
  y := y - baselineskip;
  draw_filled_rectangle((0, y), (linelength, y + 1em), line_color);

  draw_filled_rectangle((-.667em, 1em), (-.333em, -3baselineskip - parskip), margin_color);
  draw_filled_rectangle((linelength + .333em, 1em), (linelength + .667em, -3baselineskip - parskip),
                        margin_color);
endfig;

beginfig(4); % completely filled line -- opened right margin
  y := 0;
  draw_filled_rectangle((0, y), (linelength, y + 1em), line_color);
  y := y - baselineskip;
  draw_filled_rectangle((0, y), (linelength - parindent, y + 1em), line_color);
  y := y - baselineskip - parskip;
  draw_filled_rectangle((0, y), (linelength, y + 1em), line_color);
  y := y - baselineskip;
  draw_filled_rectangle((0, y), (linelength, y + 1em), line_color);

  draw_filled_rectangle((-.667em, 1em), (-.333em, -3baselineskip - parskip), margin_color);
  draw_filled_rectangle((linelength + .333em, 1em), (linelength + .667em, -3baselineskip - parskip),
                        margin_color);
endfig;
end
