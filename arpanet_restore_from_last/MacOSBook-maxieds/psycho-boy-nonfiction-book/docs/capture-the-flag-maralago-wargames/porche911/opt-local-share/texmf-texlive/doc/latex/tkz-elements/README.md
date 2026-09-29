# tkz-elements — for euclidean geometry

Release 3.34 c 2025/03/04

## Description

`tkz-elements v.3.34c` is the new version of a library written in lua, allowing to make all the necessary calculations to define the objects of a Euclidean geometry figure. You need to compile with `LuaLaTeX`. With `tkz-elements`, the definitions and calculations are only done with `Lua`. 

 The main possibility of programmation  proposed is oriented "object programming" with object classes like point, line, triangle, circle and now, conic.  For the moment, once the calculations are done, it is `tkz-euclide` or `TikZ` which allows the drawings. You can use the option `mini` with `tkz-euclide` to load only the modules required for tracing.

## Licence

This package may be modified and distributed under the terms and
conditions of the [LaTeX Project Public License](https://www.latex-project.org/lppl/), version 1.3 or greater.


## Requirements

The package compiles with utf8 and lualatex. You need actually to load:

- [tkz-euclide](https://ctan.org/pkg/tkz-euclide)
-  or [tikz](https://ctan.org/pkg/tikz)

## Installation

The package `tkz-elements` is  present in TeXLive and MiKTeX, use the package
manager to install.

You can experiment with the `tkz-elements` package by placing all of the
distribution files in the directory containing your current tex file.

The different files must be moved into the different directories in your
installation `TDS` tree or in your `TEXMFHOME`:


## How to use it

To use the package `tkz-elements`, place the following lines in the preamble of
your LaTeX document:

```
% !TEX TS-program = lualatex
\usepackage[mini]{tkz-euclide}
\usepackage{tkz-elements}
\begin{document}
\directlua{
    init_elements ()_
    your code
}
\begin{tikzpicture}
\tkzGetNodes
    your code
\end{tikzpicture}
```

If you use the `xcolor` package, load that package before `tkz-euclide` to avoid
package conflicts.

It's possible to use the environment `tkzelements` istead of the directive `\directlua` but in this case, you need to load the package `luacode`.

## Examples

Some  examples  will be stored on my site : [http://altermundus.fr](http://altermundus.fr). 
An important example  `Golden Arbelos` using the package is on the site. All the files of the documentation are on the site.

## History
   - version 3.34c
      - Package additions
          - added functions for creating circles "through" and "diameter"
          - adding centers with “kimberling” method X(55), X(56), X(371)
          - added “kenmotu_circle” and “kenmotu_point” methods
          - added start of error handling with "tex.error"
      - Documentation
          - Correction of some file headers (date and name) 
          - start of documentation reformatting; classification of examples
          - addition in the examples, circles of Yff, Adams, Van Lamoen, Kenmotu
   - version 3.32c
     - Modification of the class "occs". The first argument is the main axis
           through a focus and a vertex.
     - Additions:
        - Example in the folder "examples". 
        - The method "swap_line" for the class "line" and a example.
           This makes it possible to change the orientation.
        - Example for the method "isogonal" for the class "triangle".

   - version 3.30c
       - Major evolution of tkz-elements with the introduction of the "conic" class, which replaces the "ellipse" class.

        - The latter was based on the "ellipse" operation, whereas "plot coordinates" is now used to construct all conic sections: parabolas, hyperbolas, and ellipses. It is worth noting that the circle, although a conic section, is not included in this class. Its significance grants it a special status and a dedicated class of its own.

        - Another class has been introduced: the "occs" class (orthonormal Cartesian coordinate system). To simplify the construction of conic sections, it was necessary to use well-suited coordinate systems.

        - A major change is the removal of scaling within the "Lua" section. Initially, I was in favor of avoiding scaling in the "TikZ" part, but since most calculations were already performed there, I realized that it was significantly simpler to apply scaling within the tikzpicture environment. Technical complexities sometimes arise when scaling is handled in the "Lua" section, so I decided to remove this option.

       - Modifications:

        - In the "regular_polygon" class, I renamed the item "table" to "vertices," which is more appropriate and I also removed the "first" and "next" items, as they were unnecessary.

        - Correction of the code for the intersection of two circles, which did not provide an appropriate response in cases where no intersection was possible.

        - Improvement of the code for the "euler_line" method of the class "triangle".

        - Improvement of the code for the "is_orthogonal" method of the class "line".

       - Additions:

        - Major additions: the "conic" and "occs" classes.

        - An object of the "conic" class is created using the following arguments: focus, directrix, and eccentricity.
        - The available methods are: points, point, antipode, tangent_at, tangent_from, intersection, in_out, orthopedic, and asymptotes.

        - The 'points' method, common in many classes, allows creating a set of coordinates defining an object (e.g., a conic), extending the 'point' method which creates individual points.

        - The functions EL_points, EL_bifocal, HY_bifocal, PA_dir, and PA_focus provide the necessary arguments depending on the given data and the conic section being constructed.

        - The transformations "projection_ll" and "affinity" are now available for the "line" class.

        - The creation of an object from the "occs" class is done using  the data of a line and a point. This point will be the origin of the new coordinate system, while the line will define the direction of the new y-axis.

        - The 'kimberling' method allows the creation of some points using this notation with the 'triangle' class.

        - The methods: steiner_line, simson_line, fermat-axis, brocard_axis, lemoine_axis, orthic_axis and orthic_axis_points complete the methods of the triangle class, as well as the anticomplementary or anti method, the taylor_circle and the taylor_points methods.

        - Two macros for the 'tikzpicture' part have been created: \tkzDrawCoordinates for obtaining a curve from a table of coordinates and \tkzDrawPointOnCurve for placing a point on such a curve.

       - About documentation:

        - Removal of all “overfull boxes”.
        - Added examples concerning new features.
        - Corrected some examples, such as the Euler line.
       
   - version 3.10c
       - Most of the functions have been optimized, and some have been commented on.
       - Object classes have been enhanced with new attributes. For a triangle, you can directly access the semiperimeter, area, inradius and circumradius. In some classes, the `exradius` attribute is replaced by `circumradius`.   
       - For rectangle, square and circle, `perimeter` and `area` have been added.
       - For line, new methods appear: `is_parallel`, `is_orthogonal` and `is_equidistant`. The latter allows you to determine whether a point is equidistant from the two points defining the line. The `swap` argument is available for all triangle creations. The result is now a single triangle, the second is obtained with `swap`.
       - It is now possible to define an isosceles triangle from a straight line (segment) with length `isosceles_s`. You can use `isosceles_a` or the old `isosceles` method if you're using an angle. I've added a new test for triangles: `is_acute`. The `two_angles` method is identical to `asa`.
       - The line , circle and triangle classes are complemented by methods with complicated names: `c_l_pp`, `c_ll_p`, `c_c_pp` and `c_cc_p`. These methods allow you to determine, from a line or circle, one or more circles tangent to lines or circles and passing through points. So `c_l_pp` means to create a circle tangent to a line (l) and passing through two points (pp). The first `c` reminds us that we're looking for a circle, the second group between `_` and `_` indicates the tangent objects (c or l) and the last indicates the points through which the circle passes.
       - In the documentation, I've added a section on important geometry theorems (
       Viviani, Reuschle, Thébault,Varignon, Wittenbauer, Soddy, Six circles ... to be completed ...). Examples of new methods and attributes have also been added.
       
   - version 3.00c
       - It is now possible to use the `directlua` primitive to perform `lua` code. In this case, tables and scaling can be reset using the `init_elements` function. You can still use the `tkzelements` environment, but only if you load the `luacode` package.
       - Examples have been added to the `transfers` section.
       
    - version 2.30c
       - New version of the macro `\tkzGetNodes` written by Sanskar Singh. This version now fixes a bug that prevented a figure from being centred with `centering` or the `center` environment.
       - Adding methods  `bevan_circle`, `symmedial_circle`.
       - Correction of the methods `function triangle: bevan_point ()` and `function triangle: mittenpunkt_point ()`.
       - Adding `function triangle: similar ()`
       - Adding `function line : perpendicular_bisector ()` which is similar to `function line : mediator ()` 
       - Correction of documentation.
   
   - version 2.25c
       - French documentation at my site:  [http://altermundus.fr](http://altermundus.fr)
       - Added `colinear_at` a new method for the classe `line`
       - Added `cevian`, `pedal`, `conway_circle`, `conway_points` new methods to the class `triangle`.

   - version 2.20c
     - Package:
     -  Added class matrix; methods are mainly of order 2, sometimes of order 3.
     -  Added function solve_quadratic. This function can be used to solve second-degree    equations with real or complex numbers.
     -  Added method print for the class point. Example z.A : print ()
     -  Correction of the macro tkzDN. I deleted a spurious space
     -  Modification of vector class attributes. Attributes h and t become head and tail.
     -  The mtx attribute is introduced for point and vector.
          z.A.mtx represents the column matrix whose coefficients are the point's coordinates. Same for vectors.
    - Documentation: 
     -  Rewriting of all texts
     -  Correction of example:  pentagon
     -  Documentation about matrices
   
   
   - version 2.00c
      - class development `vector`
      - added attribute `vec`
      - added `at` and `orthogonal` methods to the class `point`
      - rewriting the function angle\_normalize\_
      - modification of the slope attribute for the `line`, now the result is normalized.
      - the angles of a triangle are also normalized
      - added function format\_number(number,decimal) sets the number of digits in the decimal part.
      - added \tkzDN a macro pour formater les nombres dans la partie TikZ
        \tkzDN[nb_decimal]{number}
      - added the macro \tkzDrawLuaEllipse draw an ellipse in tikz knowing its center, vertex and covertex.
      -  correction de la documentation 
   - version 1.82c
      - Point object  : name like z.App now gives a node with name A''
      - Modification of methods north,south 
      - Added the function length(z.A,z.B) shortcut for point.abs(z.A-z.B).
      - Line object added  some methods
      - Added method in\_out\_segment 
      - (sacred triangle)
         - gold
         - sublime or euclide
         - cheops
         - divine
         - pythagoras or isis or egyptian
         - golden
      - (classic triangles)
         - two\_angles (side between)
         - sss (three sides)
         - ssa (two sides and an angle)
         - sas (an angle between two sides)
         - school (30°, 60° and 90°)
         - half right triangle in A with AB= 2AC
      -  Circle object 
         - added method common_tangent (gives the common tangents of two circles)
         - Correction for a bug and an oversight in the circles_position method.
         - Rewriting the radical_axis methods
      - Triangle object
         - method trilinear (to use trilinear coordinates)  
         - method barycentric (to use barycentric coordinates)
      - Added some functions
         - `bisector (a,b,c)` `altitude (a,b,c)` `bisector_ext(a,b,c)` `equilateral (a,b)` `midpoint (a,b)` to avoid creating unnecessary objects.
      - Added new examples and a cheat sheet in the documentation
      


   - version 1.72c
       - added a line method (apollonius) set of points M with MA/MB = k
       - example with line : apollonius
       - example: three circle
       - example: pentagons on golden arbelos
       - descriptions of several cases with 'midcircle'
       - added soddy method and examples
       - added example with circles_position
       - correction of the documentation
       
   - version 1.60c 
   
       - added Internal and external tangents common to two circles:
       - function circle : `external_tangent(C)`
       - function circle : `internal_tangent(C)`
       - radical_center and radical_circle are also valid for two circles
       - function `radical_center (C1,C2,C3)`
       - function `radical_circle (C1,C2,C3)`
       - function `circles_position (C1,C2)`
       - function `midcircle (C1,C2)` powerful tool for working with inversions
       - Bug corrected in midarc now use get_angle instead of get_angle_
       - Modification of a triangle attribute `ca` replaces `ac` to designate the line passing through the third and first points
       - The center of symmetry of a parallelogram is named "center" instead of `i`.
       - Correction documentation 
       - Correction of examples using the circle:point (k) method, where k is now a real number rather than an angle.
   
   - version 1.50c Correction of the documentation
   
      - Added `swap` option to create triangles from the "line" object.
      - `iscyclic` is a new method to know if a quadrilateral is inscribable in a circle.
      - Added function `diameter` to create a circle.
      - Added function `swap` to swap two points.
      - Correction method `gold` of object rectangle.
      - Correction method `in_circle_` of object triangle.
      - Correction method `incentral_tr_` of object triangle.
      - Added method `soddy_center` of object triangle.
      - Added option `swap` for method `square` of object line.
      - Added method `report` for  object line. Transfer a defined length from a point
      - Added option `swap` to the function "square : side" 
   
   - Version 1.40c Restructuring objects
   
      - New version for all transformations. Now, they accept all objects as parameters.  
      - Symmetry_axial has changed its name to reflection.    
      - Added scale to north south etc.. (point object).
      - Change the "point" method of the objects  circle  and ellipse. now the parameter is un real t (between 0 and 1) and not an angle
      - Added the method `check_equilateral` to know if a triangle is equilateral.
      - Added option "indirect" to the method equilateral for a  line object.
      - Correction of the documentation. (Added sections).
        
   - Version 1.20 Memory management: tables are emptied when the tkzelements environment is opened.

   
     - `set_lua_to_tex` has been replaced by `tkzUseLua` to transfer data between the `tkzelements` and `tikzpicture` environments.
     - New version of `inversion` with respect to a circle method. It selects the correct algorithm based on the object passed as a parameter.
     - Added an `in_out_disk` method for the `circle` object, which indicates whether or not a point is in the disk. `in_out` is for the circle. 
     - Added two methods: `radical_center (C1,C2,C3)`  radical center of three circles.
          `radical_circle (C1,C2,C3)` orthogonal circle of three circles. 
     - Added function `circle : radius` to define a circle with a centre and a radius. 
     -  Added methods `normalize` and  `normalize_inv`  for `line`.
     - Added methods `translation` and `set_translation` to the `line` object. 
     - Added  an example to illustrate combinations of methods and attributes.
     
   - First version 1.00b 

## Author

Alain Matthes, 5 rue de Valence, Paris 75005, al (dot) ma (at) mac (dot) com
