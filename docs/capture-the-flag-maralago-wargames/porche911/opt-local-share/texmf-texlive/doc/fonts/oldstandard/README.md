Old Standard
============

License
-------
### Old Standard
Copyright (c) 2006-2011 Alexey Kryukov (<amkryukov@gmail.com>),
without Reserved Font Names.

Copyright (c) 2019, 2020, 2021, 2022, 2023 Robert Alessi
(<alessi@robertalessi.net>), without Reserved Font Names.

Copyright (c) 2023 Antonis Tsolomitis (<atsol@aegean.gr>), without
Reserved Font Names.

This Font Software is licensed under the SIL Open Font License,
Version 1.1.  This license is available with a FAQ at:
<http://scripts.sil.org/OFL>

### Old Standard Math
Copyright (c) 2019-2023 Antonis Tsolomitis (<atsol@aegean.gr>).
This work is released under the GUST Font License -- see
<http://tug.org/fonts/licenses/GUST-FONT-LICENSE.txt> for details.

Please send error reports and suggestions for improvements to Robert
Alessi or Antonis Tsolomitis:

  * email: <alessi@roberalessi.net> / <atsol@aegean.gr>
  * website: <https://sr.ht/~ralessi/oldstandard/>
  * development: <https://git.sr.ht/~ralessi/oldstandard>
  * comments, feature requests, bug reports: <https://todo.sr.ht/~ralessi/oldstandard>


History
-------
This font is just the same as Alexey Kryukov's beautiful *Old
Standard*.[^1] In comparison to the previous releases of *Old
Standard*, it includes new letters and some corrections:

1. Small capitals for Roman, Greek and Cyrillic letters, in all three
   styles, Regular, Italic and Bold have been added. Small capitals,
   which were missing from *Old Standard*, were already in use a
   century ago in fine books which used font faces very similar to
   *Old Standard*. Typical use cases of small capitals were headers,
   current headings and in some books proper names.
2. A bold italic shape was first auto-generated in 2019. Of course,
   auto-generating shapes was not a satisfactory solution. Since then,
   the characters have been reworked manually.
3. The letter G with caron above, that is: Ǧ (`U+01E6`, uppercase) and
   ǧ (`U+01E7`, lowercase) has been added. It is the only character
   missing from *Old Standard* that is needed in some of the accepted
   standards of romanization of classical Arabic.[^2]
4. Additionally, this release corrects the `+ss06` feature provided by
   *Old Standard*. This feature is supposed to distinguish between
   regular and ‘curled’ beta (β/ϐ) and to print ‘curled’ beta
   (`U+03D0`) in medial position. This feature worked in most cases
   with the previous release of *Old Standard*. However, it failed if
   the beta is preceded by a vowel with an acute accent taken from the
   *Greek extended* Unicode block.
5. Open theta has been replaced with closed theta in slot 03B8 and
   rules ss05 and ss06 have been adjusted accordingly.
6. **Oldstyle numerals**: These have been designed by Antonis
   Tsolomitis for regular and bold series and can be selected by
   `RawFeature=onum`.  (Those for italic and bolditalic have been
   designed by R. Alessi.)
7. **Math Font**: This is a major and long-awaited enhancement
   to Old Standard. The math font has been designed by Antonis
   Tsolomitis from an old French book published by Gauthier-Villars
   that used a font similar to Old Standard for Greek and a Bodoni font
   for Latin. As both Bodoni and Old Standard were “romantic”
   faces, it is hoped that they match up nicely, even if this remains
   to be proven...<br/>
   Two integrals are provided: a romantic one, which is selected by
   default, and an upright version, which can be selected with
   `StylisticSet=2`.

### Why a new release of *Old Standard*?
At the time of writing, *Old Standard* was last updated six years
ago. Being unable himself to contact the author, the writer, while in
need to have new letters included in *Old Standard* and some issues
addressed, took the decision to make a new release of *Old Standard*,
while maintaining the hope that the author will one day resume the
development of this typeface.

### Reference web page (archived on Sept. 26, 2019)
[http://thessalonica.org.ru/en/oldstandard.html](https://web.archive.org/web/20190926123235/http://thessalonica.org.ru/en/oldstandard.html)

Documentation
-------------
Please refer to Alexey Kryukov's documentation which is can be found
here:
<http://mirrors.ctan.org/fonts/oldstandard/doc/oldstand-manual.pdf>
(CTAN) or here:
[http://thessalonica.org.ru/en/fonts-download.html](https://web.archive.org/web/20190924110631/http://thessalonica.org.ru/en/fonts-download.html) (Alexey
Kryukov's web page).

[^1]: See <https://github.com/akryukov/oldstand>

[^2]: See for references the [current documentation of the arabluatex
     package](http://mirrors.ctan.org/macros/luatex/latex/arabluatex/arabluatex.pdf),
     sect. “Transliteration”.
