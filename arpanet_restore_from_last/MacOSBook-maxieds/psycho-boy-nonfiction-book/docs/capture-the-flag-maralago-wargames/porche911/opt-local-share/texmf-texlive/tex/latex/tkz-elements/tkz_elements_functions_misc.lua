-- tkz_elements_functions_misc.lua
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
-- ----------------------------------------------------------------
--
-- ----------------------------------------------------------------
function get_points(obj)
	-- Map of object types to their respective point keys
	local point_map = {
		line = { "pa", "pb" }, -- Line has two points
		triangle = { "pa", "pb", "pc" }, -- Triangle has three points
		circle = { "center", "through" }, -- Circle has center and a point through its circumference
		ellipse = { "pc", "pa", "pb" }, -- Ellipse has three key points
		square = { "pa", "pb", "pc", "pd" }, -- Square has four vertices
		rectangle = { "pa", "pb", "pc", "pd" }, -- Rectangle has four vertices
		quadrilateral = { "pa", "pb", "pc", "pd" }, -- Quadrilateral has four vertices
		parallelogram = { "pa", "pb", "pc", "pd" }, -- Parallelogram has four vertices
	}

	-- Check if the object's type is recognized
	if point_map[obj.type] then
		local points = {}
		-- Iterate over the keys for the given type and extract the corresponding values
		for _, key in ipairs(point_map[obj.type]) do
			table.insert(points, obj[key])
		end
		-- Return all points as multiple return values
		return table.unpack(points)
	end
end

function set_lua_to_tex(t)
	for k, v in pairs(t) do
		token.set_macro(v, _ENV[v], "global")
	end
end

function bisector(a, b, c)
	local i = in_center_(a, b, c)
	return line:new(a, intersection_ll_(a, i, b, c))
end

function altitude(a, b, c)
	local o, p
	-- Get the orthocenter (which is the point of concurrency of the altitudes)
	o = ortho_center_(a, b, c)

	-- Get the perpendicular projection of point 'a' onto the line defined by 'b' and 'c'
	p = projection_(b, c, a)

	-- Return the altitude, which is the line from point 'a' to the point 'p'
	return line:new(a, p)
end

function bisector_ext(a, b, c) -- n=1 swap n=2 swap 2
	local i, p
	-- Get the incenter of the triangle
	i = in_center_(a, b, c)

	-- Rotate the incenter by 90 degrees around point 'a' to compute the external bisector
	p = rotation_(a, math.pi / 2, i)

	-- Return the external bisector as the line passing through points 'a' and 'p'
	return line:new(a, p)
end

function equilateral(a, b)
	return equilateral_tr_(a, b)
end

function midpoint(a, b)
	return (a + b) / 2
end

function midpoints(...)
	return midpoints_(...)
end

function length(a, b)
	return point.abs(a - b)
end

function reverseTableInPlace(t)
	local n = #t
	for i = 1, math.floor(n / 2) do
		t[i], t[n - i + 1] = t[n - i + 1], t[i]
	end
end
