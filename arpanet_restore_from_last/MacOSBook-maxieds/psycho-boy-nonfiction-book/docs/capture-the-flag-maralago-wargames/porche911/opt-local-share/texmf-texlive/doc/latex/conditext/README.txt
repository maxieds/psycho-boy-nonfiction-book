___________________________________

package             
conditext
               
v1.5

2020 june 01
___________________________________

Authors   : Jean-Louis Brabant
Maintainer: Jean-Louis Brabant
E-mail    : jean-louis.brabant@laposte.net
            Comments, bug reports and suggestions welcome !
Licence   : Released under the LaTeX Project Public License v1.3c or
            later, see http://www.latex-project.org/lppl.txt

----------------------------------------------------------------------
This package provides some commands, to define and manage
conditional content in a Latex source document.

A conditional content, in the sense within this is understood in
this package, is a text (including mathematical or other formulas)
and/or a graphical element (diagram, figure, image...) as
substitutable forms, which, according to a condition test, may or
may not appear in the generated document.

One of the most common forms of conditional content management is
multilingual ; but it can also include versioning, confidentiality
levels, and so on.

The philosophy of this package is based on the respective notions
of condition field, condition property and condition space.

With this package, any substitutable form in a source document is
identified by a condition field and a condition property.

The condition field is a functional theme that allows you to group
together substitutable forms for the same conditional management.

The condition property is a functional characterization specific to
each substitutable form of a single condition domain.

The condition space is used to designate the substitutable form(s)
that must appear in the generated document. A condition space is
defined by specifying a condition domain and a condition property
to match with one or more substitutable forms.