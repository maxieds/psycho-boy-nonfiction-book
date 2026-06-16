# *association-matrix*: LaTeX support for creating association matrices

The `association-matrix` package allow the creation of association matrices in an clear and concise fashion, without having to deal with manually generating and modifying the tables while working.
By simply specifying the rows and the columns by their unique identifier, and then set which cells should be marked as associated.
Then, the `\amxgenerate` command generates a table that is similar in nature to:


|  Thesis name             | [1] | [2] | [3] |
|:-------------------------|:---:|:---:|:---:|
| 1. Awesome thesis        |  •  |  •  |     |
| 2. The Standard Model    |     |  •  |  •  |
