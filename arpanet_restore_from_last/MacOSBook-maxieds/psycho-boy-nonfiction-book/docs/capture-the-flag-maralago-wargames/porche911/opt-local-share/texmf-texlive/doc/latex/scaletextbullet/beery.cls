% Note: This class is designed ONLY for 'scaletextbullet.tex'.

% LOADING THE CLASS

\NeedsTeXFormat{LaTeX2e}[2023-11-01]
\ProvidesExplClass
  {beery}
  {2025-02-11}
  {0.0.0}
  {}

\prop_gput:Nnn \g_msg_module_type_prop { beery } { Class }

\IfExplAtLeastTF { 2023-11-09 } { }
  {
    \msg_new:nnn { beery } { l3kernel-out-of-date }
      {
        The~ beery~ class~ could~ not~ load. \\
        This~ class~ requires~
        L3~ programming~ layer~ version~ 2023-11-09~ or~ newer.
      }
    \msg_critical:nn { beery } { l3kernel-out-of-date }
  }

\sys_if_engine_luatex:F
  {
    \msg_new:nnn { beery } { luatex-required }
      {
        The~ beery~ class~ could~ not~ load. \\
        This~ class~ requires~ LuaTeX.
      }
    \msg_critical:nn { beery } { luatex-required }
  }

\LoadClass { article }

% MESSAGES

\msg_new:nnn { beery } { math-mode-error }
  { '#1'~ cannot~ be~ used~ in~ math~ mode~ \msg_line_context:. }

\RequirePackage { fontscale }
\fontscalesetup { musical }
\RequirePackage { siunitx }
\sisetup { list-final-separator = { ,~ and~ } , mode = match }
\RequirePackage { mathtools }
\RequirePackage [ shortcuts , allowbreakbefore ] { extdash }
\RequirePackage { csquotes }
\RequirePackage { lmodern }
\RequirePackage { fontspec }
\newfontfamily \newfontfamilystixtwo { STIX Two Text }
\newfontfamily \newfontfamilysourceseriffour { Source Serif 4 }

\RequirePackage { multicol }
\RequirePackage { scaletextbullet }

\RequirePackage { tcolorbox }
\tcbuselibrary { breakable }
\NewTColorBox { mydisplaycode } { }
  {
      size   = minimal
    , left   = 2pt
    , right  = 2pt
    , top    = 2pt
    , bottom = 2pt
    , breakable
  }

% SOME VARIABLES

\fp_const:Nn \c_beery_golden_ratio_fp { 1.6180 3398 8749 8948 }
\tl_const:Nn \c_beery_alphabet_tl { abcdefghijklmnopqrstuvwxyz }
\tl_const:Nn \c_beery_digits_tl { 0123456789 }
\tl_const:Nn \c_beery_pangram_tl
  { The~ quick~ brown~ fox~ jumps~ over~ the~ lazy~ dog. }

% Scratch variables
\box_new:N \l__beery_tmp_box

% CUSTOM MACROS

\NewExpandableDocumentCommand \alphabet { } { \c_beery_alphabet_tl }
\NewExpandableDocumentCommand \digits   { } { \c_beery_digits_tl   }
\NewExpandableDocumentCommand \pangram  { } { \c_beery_pangram_tl  }

\NewDocumentCommand \Key
  { >{ \TrimSpaces } m >{ \TrimSpaces } o >{ \TrimSpaces } o }
  {
    \mode_leave_vertical:
    \IfNoValueTF {#2}
      { \__beery_print_key:n {#1} }
      {
        \IfNoValueTF {#3}
          { \__beery_print_key:nn {#1} {#2} }
          { \__beery_print_key:nnn {#1} {#2} {#3} }
      }
  }
\cs_new_protected:Npn \__beery_print_key:n #1 { \texttt {#1} }
\cs_new_protected:Npn \__beery_print_key:nn #1#2
  { \texttt { #1 \ensuremath { \,=\, } \allowbreak #2 } }
\cs_new_protected:Npn \__beery_print_key:nnn #1#2#3
  {
    \group_begin:
      \ttfamily
      #1 \ensuremath { \,=\, } #2 \hspace* { \fill }
      \hbox:n { initial \ensuremath { \,=\, } #3 }
    \group_end:
  }
\NewDocumentCommand \cs { >{ \TrimSpaces } m }
  {
    \mode_if_math:TF
      { \msg_error:nne { beery } { math-mode-error } { \token_to_str:N \cs } }
      { \__beery_print_cs:n {#1} }
  }
\cs_new_protected:Npn \__beery_print_cs:n #1
  { \texttt { \token_to_str:c {#1} } \@ }
\NewDocumentCommand \marg { >{ \TrimSpaces } m }
  { \__beery_print_m_arg:n {#1} }
\cs_new_protected:Npn \__beery_print_m_arg:n #1
  {
    \allowbreak
    \texttt { \c_left_brace_str }
    \ensuremath \langle
    \group_begin:
      \normalfont \itshape #1
    \group_end:
    \ensuremath \rangle
    \texttt { \c_right_brace_str }
  }
\NewDocumentCommand \oarg { >{ \TrimSpaces } m }
  { \__beery_print_o_arg:n {#1} }
\cs_new_protected:Npn \__beery_print_o_arg:n #1
  {
    \allowbreak
    \texttt { [ }
    \ensuremath \langle
    \group_begin:
      \normalfont \itshape #1
    \group_end:
    \ensuremath \rangle
    \texttt { ] }
  }
\NewDocumentCommand \sarg { } { \__beery_print_s_arg: }
\cs_new_protected:Npn \__beery_print_s_arg:
  { \ensuremath \langle \texttt {*} \ensuremath \rangle }
\NewDocumentCommand \meta { >{ \TrimSpaces } m } { \__beery_print_meta:n {#1} }
\cs_new_protected:Npn \__beery_print_meta:n #1
  {
    \ensuremath \langle
    \group_begin:
      \normalfont \itshape #1
    \group_end:
    \ensuremath \rangle
  }
\NewDocumentCommand \cls { >{ \TrimSpaces } m }
  {
    \mode_if_math:TF
      { \msg_error:nne { beery } { math-mode-error } { \token_to_str:N \cls } }
      { \__beery_print_cls:n {#1} }
  }
\cs_new_protected:Npn \__beery_print_cls:n #1 { \textsf {#1} \@ }
\NewDocumentCommand \env { >{ \TrimSpaces } m }
  {
    \mode_if_math:TF
      { \msg_error:nne { beery } { math-mode-error } { \token_to_str:N \env } }
      { \__beery_print_env:n {#1} }
  }
\cs_new_protected:Npn \__beery_print_env:n #1 { \texttt {#1} \@ }
\NewDocumentCommand \pkg { >{ \TrimSpaces } m }
  {
    \mode_if_math:TF
      { \msg_error:nne { beery } { math-mode-error } { \token_to_str:N \pkg } }
      { \__beery_print_pkg:n {#1} }
  }
\cs_new_protected:Npn \__beery_print_pkg:n #1 { \textsf {#1} \@ }
\NewDocumentCommand \latin { >{ \TrimSpaces } m }
  {
    \mode_if_math:TF
      {
        \msg_error:nne { beery } { math-mode-error }
          { \token_to_to_str:N \latin }
      }
      { \__beery_print_latin:n {#1} }
  }
\cs_new_protected:Npn \__beery_print_latin:n #1 { \textit {#1} }

\NewDocumentCommand \allcaps { O { 50 } >{ \TrimSpaces } m }
  {
    \mode_if_math:TF
      {
        \msg_error:nne { beery } { math-mode-error }
          { \token_to_str:N \allcaps }
      }
      { \__beery_text_all_caps:nn {#1} {#2} }
  }
\cs_new_protected:Npn \__beery_text_all_caps:nn #1#2
  { \textls [ \int_eval:n {#1} ] { \text_uppercase:n {#2} } }
\NewDocumentCommand \allsmallcaps
  { >{ \ReverseBoolean } s O { 50 } >{ \TrimSpaces } m }
  {
    \mode_if_math:TF
      {
        \msg_error:nne { beery } { math-mode-error }
          { \token_to_str:N \allsmallcaps }
      }
      {
        \IfBooleanTF #1
          { \__beery_text_small_caps:nn {#2} {#3} }
          { \__beery_text_lowercase_small_caps:nn {#2} {#3} }
      }
  }
\cs_new_protected:Npn \__beery_text_small_caps:nn #1#2
  { \textls [ \int_eval:n {#1} ] { \scshape #2 } }
\cs_new_protected:Npn \__beery_text_lowercase_small_caps:nn #1#2
  { \textls [ \int_eval:n {#1} ] { \scshape \text_lowercase:n {#2} } }

% PAGE STYLE

\hbox_set:Nn \l__beery_tmp_box { \c_beery_alphabet_tl }
\dim_const:Nn \c_beery_alphabet_dim { \box_wd:N \l__beery_tmp_box }
\dim_log:N \c_beery_alphabet_dim

\dim_const:Nn \c_beery_big_dim { \l_fontscale_normalsize_baselineskip_skip }
\dim_const:Nn \c_beery_medium_dim
  { \fp_to_dim:n { \dim_to_fp:n { \c_beery_big_dim / 2 } } }
\dim_const:Nn \c_beery_small_dim
  { \fp_to_dim:n { \dim_to_fp:n { \c_beery_big_dim / 4 } } }
\dim_log:N \c_beery_big_dim
\dim_log:N \c_beery_medium_dim
\dim_log:N \c_beery_small_dim

\skip_const:Nn \c_beery_big_skip
  {
    \c_beery_big_dim
    plus  \fp_to_dim:n { \dim_to_fp:n { \c_beery_big_dim } / 2 }
    minus \fp_to_dim:n { \dim_to_fp:n { \c_beery_big_dim } / 3 }
  }
\skip_const:Nn \c_beery_medium_skip { \c_beery_big_skip / 2 }
\skip_const:Nn \c_beery_small_skip  { \c_beery_big_skip / 4 }
\skip_set_eq:NN \bigskipamount   \c_beery_big_skip
\skip_set_eq:NN \medskipamount   \c_beery_medium_skip
\skip_set_eq:NN \smallskipamount \c_beery_small_skip
\skip_log:N \c_beery_big_skip
\skip_log:N \c_beery_medium_skip
\skip_log:N \c_beery_small_skip

% \flushbottom
\raggedbottom
\int_set:Nn \vbadness { 100 }

\skip_set:Nn \topskip { \l_fontscale_normalsize_size_dim }
\skip_set_eq:NN \splittopskip \topskip

\RequirePackage { geometry }
\dim_const:Nn \c_beery_textwidth_dim
  { \fp_to_dim:n { \c_e_fp * \dim_to_fp:n { \c_beery_alphabet_dim } } }
\dim_const:Nn \c_beery_textheight_dim
  {
    \fp_to_dim:n
      { \c_beery_golden_ratio_fp * \dim_to_fp:n { \c_beery_textwidth_dim } }
  }
\dim_const:Nn \c_beery_footskip_dim
  { \c_beery_big_dim + \l_fontscale_footnotesize_baselineskip_skip }
\geometry
  {
      a4paper
    , textwidth = \c_beery_textwidth_dim
    , textheight = \c_beery_textheight_dim
    , heightrounded
    , centering
    , headheight = \l_fontscale_footnotesize_baselineskip_skip
    , headsep = \c_beery_big_dim
    , footskip = \c_beery_footskip_dim
  }

\RequirePackage { fancyhdr }
\pagestyle { fancy }
\fancyhf { }
\cs_set:Npn \headrulewidth { 0pt }
\fancyfoot [ C ]
  { \footnotesize \thepage \c_space_tl of~ \pageref { LastPage } }

% PARAGRAPH STYLE

\nonfrenchspacing
\linespread { 1 }
\RequirePackage [ skip = \c_beery_medium_skip ] { parskip }
\RequirePackage [ raggedrightboxes ] { ragged2e }
\skip_set:Nn \RaggedRightRightskip { \c_zero_dim plus \c_beery_alphabet_dim }
\dim_zero:N \RaggedRightParindent
\dim_set_eq:NN \JustifyingParindent \RaggedRightParindent
\RaggedRight
% \justifying
\RequirePackage { microtype }
\microtypesetup { protrusion = false , expansion = false }
\int_set:Nn \pretolerance { -1 }
\int_set:Nn \tolerance { 200 }
\dim_zero:N \emergencystretch
\int_set:Nn \widowpenalty { 10000 }
\int_set_eq:NN \clubpenalty \widowpenalty
\int_set_eq:NN \displaywidowpenalty \widowpenalty
% hyphenation
\int_set:Nn \hyphenpenalty { 99 }
\int_set_eq:NN \exhyphenpenalty \hyphenpenalty

% HEADINGS, TABLE OF CONTENTS

\RequirePackage { titlesec , titletoc }
\setcounter { secnumdepth } { 2 }
\setcounter { tocdepth } { 2 }

\titlespacing* \section % section
  { \c_zero_dim } % indent
  {
    \c_beery_big_dim
    plus  \fp_to_dim:n { 1 / 2 * 4 * \dim_to_fp:n { \c_beery_big_dim } }
    minus \fp_to_dim:n { 1 / 3 / 4 * \dim_to_fp:n { \c_beery_big_dim } }
  } % before
  { \c_beery_medium_skip } % after
\titlespacing* \subsection
  { \c_zero_dim }
  {
    \fp_to_dim:n { 4 / 3 * \dim_to_fp:n { \c_beery_medium_dim } }
    plus  \fp_to_dim:n { 1 / 2 * 4 * \dim_to_fp:n { \c_beery_medium_dim } }
    minus \fp_to_dim:n { 1 / 3 / 4 * \dim_to_fp:n { \c_beery_medium_dim } }
  }
  { \c_beery_medium_skip }

\titleformat \section % section
  [ block ] % shape
  { \raggedright \large \bfseries } % format
  { \thesection } % label
  { 1em } % the horizontal separation between label and title body
  { } % before code
  { } % after code
\titleformat \subsection
  [ block ]
  { \raggedright \normalsize \bfseries }
  { \thesubsection }
  { 1em }
  { }
  { }

% LISTS, LIST HEADINGS

\RequirePackage { enumitem }
\setlist
  {
      % horizontal spacing
      leftmargin = *
    , labelsep  = 0.5em
      % vertical spacing
    , topsep    = \c_zero_skip
    , partopsep = \c_zero_skip
    , parsep    = \c_beery_small_skip
    , itemsep   = \c_zero_skip
  }
\setlist [ itemize   , 1 ] { label = \textbullet }
\setlist [ itemize   , 2 ] { label = \scaletextbullets { 2 } }
\setlist [ itemize   , 3 ] { label = \scaletextbullets { 3 } }
\setlist [ itemize   , 4 ] { label = \scaletextbullets { 4 } }
\setlist [ enumerate , 1 ] { label = \arabic* . }
\setlist [ enumerate , 2 ] { label = \theenumi   \arabic* . }
\setlist [ enumerate , 3 ] { label = \theenumii  \arabic* . }
\setlist [ enumerate , 4 ] { label = \theenumiii \arabic* . }

% list headings
% https://tex.stackexchange.com/questions/2644/how-to-prevent-a-page-break-before-an-itemize-list
\NewDocumentCommand \keepnextpar { >{ \ReverseBoolean } s }
  {
    \mode_if_math:TF
      {
        \msg_error:nne { beery } { math-mode-error }
          { \token_to_str:N \keepnextpar }
      }
      {
        \IfBooleanTF #1
          { \__beery_keep_next_par: }
          { \__beery_keep_next_par_if_single_line: }
      }
  }
\cs_new_protected:Npn \__beery_keep_next_par: { \nobreak \@afterheading }
\cs_new_protected:Npn \__beery_keep_next_par_if_single_line:
  {
    \int_compare:nNnT \prevgraf = 1
      { \nobreak \@afterheading }
  }
\NewDocumentCommand \listheading { m }
  {
    \mode_if_math:TF
      {
        \msg_error:nne { beery } { math-mode-error }
          { \token_to_str:N \listheading }
      }
      { \__beery_list_heading:n {#1} }
  }
\cs_new_protected:Npn \__beery_list_heading:n #1
  {
    \par
    #1
    \par
    \int_compare:nNnT \prevgraf = 1
      { \nobreak \@afterheading }
    \vspace { \skip_eval:n { \c_beery_small_skip - \parskip } }
  }

% TABLES

\RequirePackage { tabularray }
\UseTblrLibrary { booktabs , siunitx }

% FOOTNOTES

\RequirePackage [ bottom ] { footmisc }
\cs_set_protected:Npn \footnoterule { }
% \setlength { \skip \footins } { \c_beery_big_skip }
\dim_set:Nn \footnotesep { \f@linespread \footnotesep }
\coffin_new:N \l__beery_footnote_coffin
% 1.2 = baselineskip-size-ratio
% \f@linespread must not be empty here
\dim_const:Nn \c_beery_footnote_baselineheight_dim
  {
    \fp_to_dim:n
      {
        ( 1.2 * \f@linespread - 1 ) *
        \dim_to_fp:n { \l_fontscale_footnotesize_size_dim }
      }
  }
\cs_set_protected:Npn \@makefntext #1
  {
    \vcoffin_set:Nnn \l__beery_footnote_coffin { \textwidth }
      {
        \list { \@thefnmark . }
          {
            \dim_set:Nn \leftmargin
              {
                \fp_to_dim:n
                  {
                    ( 1 - \l_fontscale_footnotesize_scale_fp ) / 2 *
                    \dim_to_fp:n { \textwidth }
                  }
              }
            \dim_set_eq:NN \rightmargin \leftmargin
            \dim_set:Nn \labelsep { 0.5em }
            \skip_zero:N \topsep
            \skip_zero:N \partopsep
          }
        \item #1 \endlist
      }
    \coffin_typeset:Nnnnn \l__beery_footnote_coffin { l } { b }
      { \c_zero_dim } { - \c_beery_footnote_baselineheight_dim }
  }

% REFERENCES

\cs_new_protected:Npn \__beery_hook_code_shipout_last_page:
  { \label { LastPage } }
\hook_gput_code:nnn { shipout / last page } { beery }
  { \__beery_hook_code_shipout_last_page: }
\RequirePackage { xurl }
\RequirePackage { hyperref }
\hypersetup { bookmarksnumbered , hidelinks , linktoc = page }