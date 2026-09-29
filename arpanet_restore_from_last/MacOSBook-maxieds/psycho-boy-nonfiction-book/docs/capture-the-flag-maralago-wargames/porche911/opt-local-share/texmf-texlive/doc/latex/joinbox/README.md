Boxes joinning package based on l3coffins developed with Expl3.
=======

`joinbox` is a box joinning package based on l3coﬀins developed with expl3, which provides the `\joinbox`, `\joinboxes`and `\joinfigs` macros for vertical or horizontal joinning of boxes. The typeout baseline, size and seperated space can be set up with the options or `\joinset` macro.

Boxes can be joined vertically or horizontally. When using vertical joinning, all boxes to be joined will keep same width, while when using horizontal joined, all boxes to be joined will keep same height.

The `\joinbox`, `\joinboxes` and `\joinfigs` macros without star are used for vertical joinning, while the `\joinbox*`, `\joinboxes*` and `\joinfigs*` with star are used for horizontal joinning.

You can read the manual (in Chinese/English) for more details and examples.

Contributing
------------

1. gitee repository:
    (1). repository: [joinbox](https://gitee.com/nwafu_nan/joinbox)
    (2). Issues and pull requests are welcome. [issue](https://gitee.com/nwafu_nan/joinbox/issues) or [pull request](https://gitee.com/nwafu_nan/joinbox/pulls).

joinbox 盒子拼接宏包
=======

`joinbox` 是一个基于`l3coﬀins`用`expl3`开发的盒子拼接宏包，它用于实现盒子的垂直或水平拼接。垂直拼接会以各对象等宽的方式拼接，而水平拼接会以各对象等高的方式拼接。

该宏包提供了`\joinbox`, `\joinboxes`和`\joinfigs`三个个命令。其中，`\joinbox`用于拼接两个独立对象，`\joinboxes`用于拼接一组独立对象，`\joinfigs`用于拼接多个图像。这三个命令的不带`*`版本用于垂直拼接，而带`*`的版本用于水平拼接。可以通过命令选项或`\joinset`命令设置输出的基线位置，大小和拼接间距。

可以通过阅读宏包手册(中文/英文)以也解该宏包更多的使用细节和使用样例。

###  参与贡献
---------------------

1. gitee仓库:
    (1). 仓库地址: [joinbox](https://gitee.com/nwafu_nan/joinbox)
    (2). Issues and PR: [issue](https://gitee.com/nwafu_nan/joinbox/issues) or [pull request](https://gitee.com/nwafu_nan/joinbox/pulls).

Copyright and Licence
---------------------

    Copyright (C) 2020-2024 by Nan Geng <nangeng@nwafu.edu.cn>
    ----------------------------------------------------------------------

    This work may be distributed and/or modified under the
    conditions of the LaTeX Project Public License, either
    version 1.3c of this license or (at your option) any later
    version. This version of this license is in
       http://www.latex-project.org/lppl/lppl-1-3c.txt
    and the latest version of this license is in
       http://www.latex-project.org/lppl.txt
    and version 1.3 or later is part of all distributions of
    LaTeX version 2005/12/01 or later.

    This work has the LPPL maintenance status "maintained".

    The Current Maintainer of this work is Nan Geng.

    This package consists of joinbox.sty, joinbox.tex and README.md(this file),
                 and the derived files joinbox.pdf.

