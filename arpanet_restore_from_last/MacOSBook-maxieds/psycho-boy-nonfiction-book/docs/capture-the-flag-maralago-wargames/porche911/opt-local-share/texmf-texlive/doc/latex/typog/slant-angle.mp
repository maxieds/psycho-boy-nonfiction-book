%%
%% This is file `slant-angle.mp',
%% generated with the docstrip utility.
%%
%% The original source files were:
%%
%% typog.dtx  (with options: `slantangle')
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

input TEX;
TEXPRE("%&latex" & char(10) & "\documentclass{article}\begin{document}");
TEXPOST("\end{document}");

string roman_font;
roman_font := "pplr8r";         % URW Palladio L - Roman

string italics_font;
italics_font := "pplri8r";      % URW Palladio L - Italic

u := 360;

font_scale := 10;

pair loc[];
loc[1] := .2[origin, (u, 0)];
loc[2] := .5[origin, (u, 0)];
loc[3] := .8[origin, (u, 0)];

picture letter_H;
letter_H := thelabel.top("H" infont italics_font scaled font_scale, loc[1]);

picture letter_L;
letter_L := thelabel.top("L" infont italics_font scaled font_scale, loc[2]);

picture letter_a;
letter_a := thelabel.top("a" infont italics_font scaled font_scale, loc[3]);

path slant_angle;
slant_angle := lrcorner letter_H + (14, 0) -- lrcorner letter_H + (-6, 0) -- urcorner letter_H + (3.5, 0);

pair base_point;
base_point := (xpart point 2 of slant_angle, ypart point 0 of slant_angle) ;

pair angle_label;
angle_label := point 2 of slant_angle + (0, -12);

beginfig(1);
  draw letter_H;
  draw slant_angle;
  draw point 2 of slant_angle -- base_point dashed evenly;
  draw point 1 of slant_angle -- base_point withpen pencircle scaled 2pt;

  label.rt(TEX("$\alpha$"), angle_label);

  draw letter_L;
  draw slant_angle shifted (xpart lrcorner letter_L - xpart lrcorner letter_H + 2, 0);

  draw letter_a;
  draw slant_angle shifted (xpart lrcorner letter_a - xpart lrcorner letter_H - 3, 0);
endfig;
end
