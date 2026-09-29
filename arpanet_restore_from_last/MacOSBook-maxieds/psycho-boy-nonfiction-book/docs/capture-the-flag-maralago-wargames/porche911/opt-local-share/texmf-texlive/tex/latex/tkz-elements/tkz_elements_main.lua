-- tkz_elements_main.lua
-- date 2025/03/04
-- version 3.34c
-- Copyright 2025  Alain Matthes
-- This work may be distributed and/or modified under the
-- conditions of the LaTeX Project Public License, either version 1.3
-- of this license or (at your option) any later version.
-- The latest version of this license is in
-- http://www.latex-project.org/lppl.txt
-- and version 1.3 or later is part of all distributions of LaTeX
-- version 2005/12/01 or later.
-- This work has the LPPL maintenance status “maintained”.
-- The Current Maintainer of this work is Alain Matthes.

-- Load modules
require "tkz_elements_point.lua"
require "tkz_elements_line.lua"
require "tkz_elements_circle.lua"
require "tkz_elements_triangle.lua"
require "tkz_elements_vector.lua"
require "tkz_elements_ellipse.lua"
require "tkz_elements_conic.lua"
require "tkz_elements_regular.lua"
require "tkz_elements_parallelogram.lua"
require "tkz_elements_quadrilateral.lua"
require "tkz_elements_rectangle.lua"
require "tkz_elements_square.lua"
require "tkz_elements_vector.lua"
require "tkz_elements_occs.lua"

require "tkz_elements_functions_misc.lua"
require "tkz_elements_functions_maths.lua"
require "tkz_elements_functions_intersections.lua"
require "tkz_elements_functions_points.lua"
require "tkz_elements_functions_lines.lua"
require "tkz_elements_functions_circles.lua"
require "tkz_elements_functions_triangles.lua"
require "tkz_elements_functions_regular.lua"
require "tkz_elements_functions_matrices.lua"
require "tkz_elements_matrices.lua"
require "tkz_elements_functions_conics.lua"

-- Initialize elements
function init_elements()
    z = {}
    C = {}
    L = {}
    M = {}
    P = {}
    Q = {}
    R = {}
    RP = {}
    S = {}
    T = {}
    V = {}
    CO = {}
    EL = {}
    PA = {}
    HY = {}
    tkz_epsilon  = 1e-8
    tkz_dc       = 2
    indirect     = true
    inside       = true
    swap         = true
end
