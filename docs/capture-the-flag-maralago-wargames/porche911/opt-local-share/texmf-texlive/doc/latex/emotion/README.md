<H2 style="text-align:center">
😄 Emotion
</H2>

There are many emojis with long names, and we cannot remember them all. At the same time, when we
type an emoji, we want to see what it looks like in text editor. Now, you do not need to remember the emoji
name, just select it from the keyboard and wrap it with `\emotion{}`. Unlike other emoji packages, you can use
emojis more easily and flexibility.

## Usage

### Setup emoji font
You can use your favorite emoji font. 
command `\emotionsetup`
accept one parameter(font name), which you have installed in your
computer

```latex
\emotionsetup{Twemoji Mozilla}
```

### Use emoji symbol

Command `\emotion` accept one parameter.
the parameter can be emoji symbol or the defined emoji id

```latex
\emotion{☘}
\emotion{🥵}
\emotion{emotion}
```

### Custom emoji alias

Sometimes, typing a emoji symbol is not easy. Therefore, we also provide a command to simplify
the process. The command `\emotiondef` requires two parameters: 
one is the emoji id, and the other is emoji value(either the emoji symbol or its unicode value).

```latex
\emotiondef{apple}{🍎}
\emotiondef{tea}{🍵}
\emotiondef{!}{❗️}
\emotiondef{A}{^^^^^^01f1e6}
```

```latex
\emotion{apple}
\emotion{tea}
\emotion{A}
\emotion{!}
```


### License

[Apache License 2.0](http://github.com/ourfor/LaTeX-emotion/LICENSE)

-----

Copyright (C) 2023-2024 by Xuwang Zeng