%%
%% This is file `title.mp',
%% generated with the docstrip utility.
%%
%% The original source files were:
%%
%% synthslant.dtx  (with options: `title')
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
prologues := 3;

string roman_font;
roman_font := "pplr8r";         % URW Palladio L - Roman

string italics_font;
italics_font := "pplri8r";      % URW Palladio L - Italic

string sample_text;
sample_text := "fga";

u := 70;

font_scale := 7;

color light_gray;
light_gray := .8 white;

color original_color, slanted_color;
original_color := light_gray;
slanted_color := black;

pair loc[];
loc[1] := (0, 0);               % roman
loc[2] := (1.9u, 0);            % italics
loc[3] := (2.03u, 1.1u);        % slanted roman
loc[4] := (-.1u, -1.1u);       % upright italics

picture roman;
roman := thelabel.rt(sample_text infont roman_font scaled font_scale, loc[1]);

picture italics;
italics := thelabel.rt(sample_text infont italics_font scaled font_scale, loc[2]);

picture slanted_roman;
slanted_roman := thelabel.rt(sample_text infont roman_font scaled font_scale slanted .2, loc[3]);

picture upright_italics;
upright_italics := thelabel.rt(sample_text infont italics_font scaled font_scale slanted -.2, loc[4]);

beginfig(1);
  draw roman withcolor original_color;
  draw italics withcolor original_color;
  draw slanted_roman withcolor slanted_color;
  draw upright_italics withcolor slanted_color;
endfig;
end
