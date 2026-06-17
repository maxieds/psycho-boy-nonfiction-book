=====================================
 The `media4svg' LaTeX Package

 Version 0.13, 2022/10/12

 https://gitlab.com/agrahn/media4svg

 (C) 2020--\today Alexander Grahn
=====================================


1. Introduction
===============

This package implements an interface for embedding video and audio files and
the YouTube player in SVG (Scalable Vector Graphics) output. SVG with embedded
media is very portable, as it is supported by all modern Web browsers across a
variety of operating systems and platforms, including portable devices.

The most portable media formats are as follows:

Video:

| File extension | Codecs               | MIME-type  |
|----------------|----------------------|------------|
| mp4            | v: h264, a: AAC      | video/mp4  |
| webm           | v: VP8, a: Vorbis    | video/webm |
| ogg            | v: Theora, a: Vorbis | video/ogg  |

Audio:

| File extension | MIME-type  |
|----------------|------------|
| mp3            | audio/mpeg |
| ogg            | audio/ogg  |
| wav            | audio/wav  |

In the world of TeX and LaTeX, SVG is produced by means of the `dvisvgm'
(https://dvisvgm.de) backend by M. Gieseking, which is included in TeXLive
and MiKTeX.

Supported workflows are:

 * dvilualatex --> dvisvgm
 * [p|up]latex --> dvisvgm
 * xelatex --no-pdf --> dvisvgm

All TeX engines that produce DVI/XDV output can be used, but `dvilualatex' is
to be preferred. By default, media data are physically embedded into the SVG
output. For this, they need to be Base64 encoded, which is done by the
built-in Lua interpreter of LuaTeX. The other, non-LuaTeX-based engines call
the Lua script for Base64-encoding as an external program via shell-escape,
which is much slower.

There are a number of `dvisvgm' commandline options that should be used in general:

  dvisvgm --zoom=-1 --exact --page=1,- --font-format=woff2  <DVI/XDV file>

For exporting `beamer'-class documents to SVG, option `--box=papersize'
should also be added. Refer to the manual page, `man dvisvgm', for additional
information.


2. Example
==========

An example presentation with an embedded local video file as well as with video
streamed from a URL and a YouTube player can be found here:

http://mirrors.ctan.org/macros/latex/contrib/media4svg/example/beamer-example-1.svg

The source is:

http://mirrors.ctan.org/macros/latex/contrib/media4svg/example/beamer-example.tex

It also explains how to use the mouse and the keyboard for playback control.


3. Usage
========

Option `dvisvgm' must be set globally by passing it to the document class.

  \documentclass[dvisvgm]{...}

The package itself is loaded with

  \usepackage[<options>]{media4svg}


Package options are: `draft', `final', `autoplay', `loop', `controls',
`mimetype', `width', `height', `totalheight', `keepaspectratio', `scale',
`url', `youtube', `vimeo', `embed'. They have the same meaning as the command
options explained below, but are applied globally.

Note that `media4svg' is incompatible with package `media9'.

The command for media inclusion is

  \includemedia[<options>[, url]]{<poster text>}{<media file or URL>}

or

  \includemedia[<options>, youtube]{<poster text>}{<YT video ID>[,<YT video ID 2>[, ...]]}
  \includemedia[<options>, vimeo]{<poster text>}{<Vimeo video ID>}

Command options:

  id=<label>

The media is given an ID by which it can be referenced in JavaScript code, as
in `$("myVid").play();', for example.

  draft
  final

These have the usual meaning. If `draft' is set, a box is inserted into the
document instead of the media display.

  autoplay

Media playback is started after the page has been loaded in the web browser.
Depending on their settings, browsers may refuse to autoplay multimedia with
unmuted audio. Option `muted' may need to be set as well to allow playback to
be started automatically.

  loop

Media is played in a loop.

  muted

The audio will be initially silenced.

  time=<time offset>

Playback starts with an offset, specified in seconds.

  controls

Player-specific controls are shown as an overlay in the media display.

  mimetype=<mime type>

Although optional, it may be a good idea to give a hint to the web browser
about the kind of media to be played, such as `audio/mpeg' or `video/mp4'.

  url

The last argument of `\includemedia' is taken as a URL and media data will not
be embedded in the SVG file.

  youtube

Embeds a YouTube player. The last argument of `\includemedia' is a single or a
comma-separated list of YouTube video IDs.

  vimeo

Embeds a Vimeo player. The last argument of `\includemedia' is a Vimeo video
ID. Only a single ID is allowed.

  embed=false

By default, a local media file, given as the last argument of `\includemedia',
is encoded and embedded as a data blob into the SVG output. Option `embed=false'
suppresses embedding and the media file remains separate.

  width=<h-size>
  height=<v-size> | totalheight=<v-size>
  keepaspectratio

Resize the media display or set its size if <poster text> is left empty. If
provided, <poster text> is squeezed or stretched according to the given
options. If only one of `width' or `[total]height' is given, the other
dimension is scaled to maintain the aspect ratio of <poster text>. If both
`width' and `[total]height' are given together with `keepaspectratio',
<poster text> is resized to fit within <h-size> and <v-size> while
maintaining its original aspect ratio. Any valid TeX dimension is acceptable
for <h-size> and <v-size>. In addition, the length commands `\width',
`\height', `\depth' and `\totalheight' can be used to refer to the original
dimensions of <poster text>.

  scale=<factor>

Scales the media display by <factor>.


                     * * *


This material is subject to the LaTeX Project Public License. See

   http://www.latex-project.org/lppl.txt

for the details of that license.
