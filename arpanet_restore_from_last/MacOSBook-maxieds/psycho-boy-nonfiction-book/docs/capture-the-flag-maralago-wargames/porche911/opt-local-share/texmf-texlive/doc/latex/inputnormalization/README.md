# The `inputnormalization` package
Unicode normlization for LuaTeX and XeTeX.

Author: Marcel Krüger

License: LPPL v1.3

Provides a cross engine interface to normalizing input before it's read by TeX. Based on XeTeX's `\XeTeXinputnormalization` primitive and `lua-uni-algos` for LuaTeX.

# Usage
For LaTeX, just load the `inputnormalization` package with

    \usepackage{inputnormalization}

For plain TeX, use `\input` instead:

    \input inputnormalization

See the manual for more details.

## Support
For bug reports, please open an [issue on GitHub](https://github.com/zauguin/lua-uni-algos/issues).


