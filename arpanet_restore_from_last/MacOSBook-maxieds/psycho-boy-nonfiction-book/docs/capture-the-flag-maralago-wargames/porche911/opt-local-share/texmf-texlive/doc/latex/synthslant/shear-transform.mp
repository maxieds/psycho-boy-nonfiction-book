%%
%% This is file `shear-transform.mp',
%% generated with the docstrip utility.
%%
%% The original source files were:
%%
%% synthslant.dtx  (with options: `shear-transform')
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
%% This work consists of the files synthslant.dtx and synthslant.ins
%% and the derived files synthslant.sty, synthslant-gauge.tex,
%% shear-transform.mp, and title.mp.
%% 
%% 
verbatimtex
\documentclass{amsart}
\usepackage[default, lining, proportional, regular, semibold]{sourceserifpro}
\usepackage[lining, proportional, semibold]{sourcesanspro}
\usepackage[semibold]{sourcecodepro}
\usepackage[xcharter]{newtxmath}
\newcommand*{\numberset}[1]{\mathbb{#1}}
\newcommand*{\transpose}[1]{{#1}^{\text{T}}}
\begin{document}
etex

prologues := 3;

phi := .618;

u := 80;

numeric line_thickness[];
line_thickness[1] := .25 * 72/25.4;
line_thickness[2] := .35 * 72/25.4;
line_thickness[3] := .5  * 72/25.4;
line_thickness[4] := .7  * 72/25.4;

narrow_width := line_thickness[1];
medium_width := line_thickness[2];
wide_width := line_thickness[3];

%%  / x' \     / 1   slant \  / x \
%%  |    |  =  |           |  |   |
%%  \ y' /     \ 0     1   /  \ y /
def slant_point(expr a_point, a_slant) =
  (xpart a_point + ypart a_point * a_slant, ypart a_point)
enddef;

pair original_rectangle[];
original_rectangle[1] := (0, 0);
original_rectangle[2] := (u, 0);
original_rectangle[3] := (u, phi * u);
original_rectangle[4] := (0, phi * u);

slant := .2;

pair slanted_rectangle[];
slanted_rectangle[1] := slant_point(original_rectangle[1], slant);
slanted_rectangle[2] := slant_point(original_rectangle[2], slant);
slanted_rectangle[3] := slant_point(original_rectangle[3], slant);
slanted_rectangle[4] := slant_point(original_rectangle[4], slant);

pair offset[];
offset[0] := (0, 0);
offset[1] := (1.75u, 0);

beginfig(1);
  drawarrow (-.2u, 0) + offset[0] -- (1.25u, 0) + offset[0]
       withpen pencircle scaled narrow_width;
  drawarrow (0, -.2u) + offset[0] -- (0, u) + offset[0]
       withpen pencircle scaled narrow_width;

  label.llft(btex \(\numberset{E}^2\) etex, offset[0]);
  label.llft(btex \(x\) etex, (1.25u, 0) + offset[0] + (0, -2));
  label.lft(btex \(y\) etex, (0, u) + offset[0]);

  draw original_rectangle[1] + offset[0] --
       original_rectangle[2] + offset[0] --
       original_rectangle[3] + offset[0] --
       original_rectangle[4] + offset[0] --
       cycle
       withpen pencircle scaled wide_width;
  drawdot original_rectangle[4] + offset[0] withpen pencircle scaled 4pt;
  label.urt(btex \(\transpose{(x, y)}\) etex, original_rectangle[4] + offset[0] + (1, 1));

  drawarrow (-.2u, 0) + offset[1] -- (1.25u, 0) + offset[1]
       withpen pencircle scaled narrow_width;
  drawarrow (0, -.2u) + offset[1] -- (0, u) + offset[1]
       withpen pencircle scaled narrow_width;

  label.llft(btex \(\numberset{E}^2\) etex, offset[1]);
  label.llft(btex \(x\) etex, (1.25u, 0) + offset[1] + (0, -2));
  label.lft(btex \(y\) etex, (0, u) + offset[1]);

  draw slanted_rectangle[1] + offset[1] --
       slanted_rectangle[2] + offset[1] --
       slanted_rectangle[3] + offset[1] --
       slanted_rectangle[4] + offset[1] --
       cycle
       withpen pencircle scaled wide_width;
  drawdot slanted_rectangle[4] + offset[1] withpen pencircle scaled 4pt;
  label.urt(btex \(\transpose{(x'\!, y')}\) etex, slanted_rectangle[4] + offset[1] + (3, 1));

  pair p;
  p := slanted_rectangle[1] + offset[1];
  draw p -- (1.5slanted_rectangle[4] + offset[1])
       withpen pencircle scaled narrow_width;

  path angle_indicator;
  angle_indicator := fullcircle scaled 1.6u shifted offset[1];
  draw angle_indicator
       cutbefore (p -- (1.5slanted_rectangle[4] + offset[1]))
       cutafter (offset[1] -- (0, u) + offset[1]);
  label.rt(btex \(\alpha\) etex, 1.4original_rectangle[4] + offset[1] + (1, 0));
endfig;
end
