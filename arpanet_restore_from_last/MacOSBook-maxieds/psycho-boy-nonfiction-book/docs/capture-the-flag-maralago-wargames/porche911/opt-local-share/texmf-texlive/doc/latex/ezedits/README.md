# Package `ezedits` by Joey Smiga

Version 2024-11-13 v1.1

Maintained by Joseph "Joey" A. Smiga \<joseph.smiga@rochester.edu\>

`ezedits` is a package built for collaboratively editing LaTeX documents and tracking changes. Through highly customizable commands, the user can choose how their and their collaborators modifications appear in the document. Additional tools are provided to help keep track of where the edits are made within the pdf.

Originally developed ca. 2018, this has been refined over the years.

## Copyright (C)
&copy;2024 Joseph A. Smiga

## Usage tips

All edits will raise a warning, making it easier to find where changes occured and clean up the document.

### Package options

- `arrows` add arrows $\Longleftarrow$ pointing to edits in margins (in captions, a pair of arrows are added, instead; $\Longrightarrow$ Like this $\Longleftarrow$). These arrows are styled based on the edit.
- `accept` accept all edits (arrows still appear if `arrows` option is used).
- `pdfcomment` write edits as pdf annotations (arrows still appear if `arrows` option is used).
- `nosout` do not strikeout delete text (by default). If this option is set, the `ulem` package is not used.

### Commands

General comments can be added with `\draftnote{...}`. These comments will appear in-text as `[...]` with some default styling. When also using the `xcolor` package, the notes will be colored red. The command `\setnotestyle{<style>}` can be used to customize the note style.

`\defineEdit{ABC}{<styleA>}{<styleB>}` will generate a set of commands with the prefix `ABC` for editing where `<styleA>` is used for omitted text and `<styleB>` is used for added text. The following commands are generated:
- `\ABCEdit{del}{ins}` Used to replace `del` with `ins`.
- `\ABCIns{ins}` Used to insert `ins`.
- `\ABCDel{del}` Used to delete `del`.

Running the above command for each collaborator (especially with different style arguments) can make it easy to keep track of who made what comment.

`\makeeditreport` generates a `tabular` environment that summarizes where/how many edits were made.

## Possible issues

- Exact page numbers for `\makeeditreport` may be slightly off due to how LaTeX updates pages.
- Problems can arise when editing across several paragraphs. It is recommended to use new commands between paragraphs.
- `pdfcomment` option can be a bit rough at times, though it generally works.


## License
LaTeX Project Public License, version 1.3c or later.

