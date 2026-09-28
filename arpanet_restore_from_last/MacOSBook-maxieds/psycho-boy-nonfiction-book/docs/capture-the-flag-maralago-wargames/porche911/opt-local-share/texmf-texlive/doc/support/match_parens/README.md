[1;38;5;4m script[0m: [1;38;5;3mmatch_parens[0m - find mismatches of various brackets and quotes
[1;38;5;4m   type[0m: ruby
[1;38;5;4m author[0m: Wybo Dekker
[1;38;5;4m  email[0m: wybo@dekkerdocumenten.nl
[1;38;5;4mversion[0m: 1.44
[1;38;5;4mlicense[0m: GNU General Public License
---
Mismatches of parentheses, braces, (angle) brackets, especially in TeX
sources which may be rich in those, may be difficult to trace. This little
script helps you by writing your text to standard output, after adding a
left margin to your text, which will normally be almost empty, but will
clearly show up to 10 mismatches. (Just try me on myself to see that the
parenthesis starting this sentence will not appear to be matched at the end
of the file. If you look at me in the vim editor, then select this
paragraph and try the command: [1;38;5;4m:!%[0m.
