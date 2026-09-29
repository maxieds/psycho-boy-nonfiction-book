<!-- Time-stamp: <2020-07-29 14:27:40 administrateur> -->
<!-- Création : 2020-07-28T17:22:37+0200 -->

# clefval

Auteurs : Yvon Henel, alias Le TeXnicien de surface
([contact](le.texnicien.de.surface@yvon-henel.fr))
et Josselin Noirel.

## LICENCE

Le contenu de cette archive est placé sous la « LaTeX Project Public
License » version 1.3c ou postérieure. 

Voir https://www.latex-project.org/lppl.txt pour la licence.

© 2020 Yvon Henel (Le TeXnicien de surface)

## Description de l’extension

`clefval.sty` fournit deux macros  `\TheKey` et `\TheValue` pour
définir puis utiliser des paires clef/valeur. Ce module fournit une
sorte de « hashage » du pauvre ;-) 

### Exemples fournis

  * **example.pdf** depuis <kbd>example.tex</kbd>, version anglaise du suivant ;
  * **exemple.pdf** depuis <kbd>exemple.tex</kbd> : fichier
    *historique* codé en 8bit utilisant les extensions `engpron` et `clefval` ;
  * **example-utf8.pdf** depuis <kbd>example-utf8.tex</kbd> avec <kbd>pdflatex</kbd>. Le
    source peut être compilé avec <kbd>lualatex</kbd> ou <kbd>xelatex</kbd>. Les
    pdf-s ainsi créés contiendront un texte supplémentaire car <kbd>pdflatex</kbd>
    ne peut pas, par défaut, utiliser une clé écrite en cyrillique.


## Historique

Version 0.1 — 2020-07-27 — adaptation aux sources codés en utf-8

Version 0   — 2004-05-22 — première version publique


