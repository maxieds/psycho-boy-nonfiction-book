# fillpages package
This package fills your document with blank or predefined pages to match a page count, that is suitable for printing (i.e. dividable by 4).

There are four user commands:
\pagesDividableBy{<most likely 4, 8 or 16>}[<some optional offset i.e. 2>]
\setFillPage{<put something in here, if you don't like blank pages>}
\setDefaultFillPage{<put something in here as the standard fill-page>}
\insertFillPages

The last one defines the insertion point. There can be an arbitrary number of insertion points. Each insertFillPages command equals at least a clearpage command. Something, which you need to consider.

# license, version, author
This work is published under the LaTeX project public license 1.3.
 
2025-01-21: version 1.1.0

Created by Gabriel Ruprecht.
