-- tkz_elements_functions_triangles.lua
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

---------------------------------------------------------------------------
-- triangle center with circle
---------------------------------------------------------------------------
------------------------
--     Points --
------------------------
function circum_center_(a, b, c)
	local ka = math.sin(2 * get_angle_(a, b, c))
	local kb = math.sin(2 * get_angle_(b, c, a))
	local kc = math.sin(2 * get_angle_(c, a, b))
	return barycenter_({ a, ka }, { b, kb }, { c, kc })
end

function in_center_(a, b, c)
	local ka = point.abs(b - c)
	local kc = point.abs(b - a)
	local kb = point.abs(c - a)
	return barycenter_({ a, ka }, { b, kb }, { c, kc })
end

function ex_center_(a, b, c)
	local ka = point.abs(b - c)
	local kc = point.abs(b - a)
	local kb = point.abs(c - a)
	return barycenter_({ a, -ka }, { b, kb }, { c, kc })
end

function centroid_(a, b, c)
	return barycenter_({ a, 1 }, { b, 1 }, { c, 1 })
end
centroid_center_ = centroid_

function ortho_center_(a, b, c)
	local ka = math.tan(get_angle_(a, b, c))
	local kb = math.tan(get_angle_(b, c, a))
	local kc = math.tan(get_angle_(c, a, b))
	return barycenter_({ a, ka }, { b, kb }, { c, kc })
end

function euler_center_(a, b, c)
	local ma, mb, mc = medial_tr_(a, b, c)
	return circum_center_(ma, mb, mc)
end

function gergonne_point_(a, b, c)
	local u, v, w
	u, v, w = intouch_tr_(a, b, c)
	return intersection_ll_(a, u, b, v)
end

function lemoine_point_(a, b, c)
	local ma, mb, mc, ha, hb, hc, u, v, w
	u = point.abs(c - b)
	v = point.abs(a - c)
	w = point.abs(b - a)
	return barycenter_({ a, u * u }, { b, v * v }, { c, w * w })
end

function nagel_point_(a, b, c)
	-- Calculate the excircle tangency points (u, v, w)
	local u, v, w = extouch_tr_(a, b, c)

	-- Find the intersection of lines through a and u, and through b and v
	return intersection_ll_(a, u, b, v)
end

function feuerbach_point_(a, b, c)
	local i, h, e, ma

	-- Calculate the incenter and some related point (likely the orthocenter or another center)
	i, h = in_circle_(a, b, c)

	-- Calculate the Euler center (center of the nine-point circle)
	e = euler_center_(a, b, c)

	-- Calculate the midpoint of side BC
	ma = (b + c) / 2

	-- Find the intersection of the circles at (i, h) and (e, ma), which gives the Feuerbach point
	return intersection_cc_(i, h, e, ma)
end

function spieker_center_(a, b, c)
	return in_center_(medial_tr_(a, b, c))
end

function euler_points_(a, b, c)
	local H
	H = ortho_center_(a, b, c)
	return midpoint_(H, a), midpoint_(H, b), midpoint_(H, c)
end
--------------------
-- lines --
--------------------
-- N,G,H,O
function euler_line_(a, b, c)
	check_equilateral_(a, b, c)
	local A = math.tan(get_angle_(a, b, c))
	local B = math.tan(get_angle_(b, c, a))
	local C = math.tan(get_angle_(c, a, b))

	return euler_center_(a, b, c),
		barycenter_({ a, 1 }, { b, 1 }, { c, 1 }),
		barycenter_({ a, A }, { b, B }, { c, C }),
		barycenter_({ a, B + C }, { b, A + C }, { c, A + B })
end

function bisector_(a, b, c) -- possible intersection bisector with side
	return in_center_(a, b, c)
end

function bisector_ext_(a, b, c)
	local i
	i = in_center_(a, b, c)
	return rotation_(a, math.pi / 2, i)
end

function mediators_(a, b, c)
	local o = circum_center(a, b, c)
	return o, projection_(b, c, o), projection_(a, c, o), projection_(a, b, o)
end
--------------------
-- circles --
--------------------
function circum_circle_(a, b, c)
	local ka = math.sin(2 * get_angle_(a, b, c))
	local kb = math.sin(2 * get_angle_(b, c, a))
	local kc = math.sin(2 * get_angle_(c, a, b))
	return barycenter_({ a, ka }, { b, kb }, { c, kc })
end

function in_circle_(a, b, c)
	local ka, kb, kc, o
	ka = point.abs(b - c)
	kc = point.abs(b - a)
	kb = point.abs(c - a)
	o = barycenter_({ a, ka }, { b, kb }, { c, kc })
	return o, projection_(b, c, o), projection_(a, c, o), projection_(a, b, o)
end

function ex_circle_(a, b, c)
	local ka, kb, kc, o
	ka = point.abs(b - c)
	kc = point.abs(b - a)
	kb = point.abs(c - a)
	o = barycenter_({ a, -ka }, { b, kb }, { c, kc })
	return o, projection_(b, c, o), projection_(a, c, o), projection_(b, a, o)
end

function euler_circle_(a, b, c)
	local o, ma, mb, mc, H, ha, hb, hc
	-- Compute the Euler center (center of the nine-point circle)
	o = euler_center_(a, b, c)

	-- Calculate the medial triangle (midpoints of the sides)
	ma, mb, mc = medial_tr_(a, b, c)

	-- Calculate the orthic triangle (feet of the altitudes)
	ha, hb, hc = orthic_tr_(a, b, c)

	-- Get the Euler line and midpoint (H) on the Euler line
	_, _, H, _ = euler_line_(a, b, c)

	-- Return all relevant geometric elements
	return o,
		ma,
		mb,
		mc,
		ha,
		hb,
		hc,
		midpoint_(H, a), -- Midpoint between H and vertex a
		midpoint_(H, b), -- Midpoint between H and vertex b
		midpoint_(H, c) -- Midpoint between H and vertex c
end

--------------------
-- triangles --
--------------------
function orthic_tr_(a, b, c)
	local o = ortho_center_(a, b, c)
	return projection_(b, c, o), projection_(a, c, o), projection_(b, a, o)
end

function medial_tr_(a, b, c)
	return barycenter_({ a, 0 }, { b, 1 }, { c, 1 }),
		barycenter_({ a, 1 }, { b, 0 }, { c, 1 }),
		barycenter_({ a, 1 }, { b, 1 }, { c, 0 })
end

function anti_tr_(a, b, c)
	return barycenter_({ a, -1 }, { b, 1 }, { c, 1 }),
		barycenter_({ a, 1 }, { b, -1 }, { c, 1 }),
		barycenter_({ a, 1 }, { b, 1 }, { c, -1 })
end

function incentral_tr_(a, b, c)
	local i, r, s, t
	-- Compute the incenter (center of the incircle)
	i = in_center_(a, b, c)

	-- Calculate the points of tangency where the incircle touches the sides
	r = intersection_ll_(a, i, b, c) -- Intersection of lines a-i and b-c
	s = intersection_ll_(b, i, a, c) -- Intersection of lines b-i and a-c
	t = intersection_ll_(c, i, a, b) -- Intersection of lines c-i and a-b

	-- Return the points of tangency that form the incentral triangle
	return r, s, t
end

function excentral_tr_(a, b, c)
	-- Calculate distances between points
	local ka = point.abs(b - c) -- Distance between b and c
	local kb = point.abs(c - a) -- Distance between c and a
	local kc = point.abs(b - a) -- Distance between b and a

	-- Compute barycentric points
	local r = barycenter_({ a, -ka }, { b, kb }, { c, kc })
	local s = barycenter_({ a, ka }, { b, -kb }, { c, kc })
	local t = barycenter_({ a, ka }, { b, kb }, { c, -kc })

	-- Return the computed points
	return r, s, t
end

function intouch_tr_(a, b, c)
	local i
	i = in_center_(a, b, c)
	return projection_(b, c, i), projection_(a, c, i), projection_(a, b, i)
end

function cevian_(a, b, c, p)
	return intersection_ll_(a, p, b, c), intersection_ll_(b, p, a, c), intersection_ll_(c, p, a, b)
end

function extouch_tr_(a, b, c)
	local u, v, w
	u, v, w = excentral_tr_(a, b, c)
	return projection_(b, c, u), projection_(a, c, v), projection_(a, b, w)
end

function tangential_tr_(a, b, c)
	local u, v, w, x, y, z, xx, yy, zz
	u, v, w = orthic_tr_(a, b, c)
	x = ll_from_(a, v, w)
	y = ll_from_(b, u, w)
	z = ll_from_(c, u, v)
	xx = intersection_ll_(c, z, b, y)
	yy = intersection_ll_(a, x, c, z)
	zz = intersection_ll_(a, x, b, y)
	return xx, yy, zz
end

function feuerbach_tr_(a, b, c)
	local e, m, ja, ha, jb, hb, jc, hc
	e = euler_center_(a, b, c)
	m = midpoint_(b, c)
	ja, ha = ex_circle_(a, b, c)
	jb, hb = ex_circle_(b, c, a)
	jc, hc = ex_circle_(c, a, b)
	return intersection_cc_(e, m, ja, ha), intersection_cc_(e, m, jb, hb), intersection_cc_(e, m, jc, hc)
end

function similar_(a, b, c)
	local x, y, z, g
	g = centroid_(a, b, c)
	x = homothety_(g, -2, a)
	y = homothety_(g, -2, b)
	z = homothety_(g, -2, c)
	return x, y, z
end

function orthic_axis_(a, b, c)
	local ha, hb, hc = orthic_tr_(a, b, c)
	local z = intersection_ll_(ha, hb, a, b)
	local y = intersection_ll_(ha, hc, a, c)
	local x = intersection_ll_(hb, hc, b, c)
	return x, y, z
end
--------------------
-- ellipse --
--------------------
function steiner_(a, b, c)
	local g = centroid_(a, b, c)
	local delta = a * a + b * b + c * c - a * b - a * c - b * c
	local fa = (a + b + c - point.sqrt(delta)) / 3
	local fb = (a + b + c + point.sqrt(delta)) / 3
	local m = midpoint_(b, c)
	local r = (length(fa, m) + length(fb, m)) / 2
	return conic:new(EL_bifocal(fb, fa, r))
end
--------------------
-- miscellanous --
--------------------

function area_(a, b, c)
	return point.mod(a - projection_(b, c, a)) * point.mod(b - c) / 2
end

function check_equilateral_(A, B, C)
	local a, b, c = length(B, C), length(A, C), length(A, B)

	-- Vérifie que les trois longueurs sont égales à epsilon près
	if math.abs(a - b) < tkz_epsilon and math.abs(a - c) < tkz_epsilon and math.abs(b - c) < tkz_epsilon then
		return true
	else
		return false
	end
end

function parallelogram_(a, b, c)
	local x = c + a - b
	return x
end

function barycentric_coordinates_(a, b, c, pt)
	local AT, AA, AB, AC, x, y, z
	AT = area_(a, b, c)
	AA = area_(pt, b, c)
	AB = area_(a, pt, c)
	AC = area_(a, b, pt)
	x = AA / AT
	y = AB / AT
	z = AC / AT
	return x, y, z
end

function in_out_(a, b, c, pt)
	local cba, cbb, cbc, TT, AT, AA, AB, AC
	AT = area_(a, b, c)
	AA = area_(pt, b, c)
	AB = area_(a, pt, c)
	AC = area_(a, b, pt)
	cba = AA / AT
	cbb = AB / AT
	cbc = AC / AT
	if (cba >= 0 and cba <= 1) and (cbb >= 0 and cbb <= 1) and (cbc >= 0 and cbc <= 1) then
		return true
	else
		return false
	end
end

function soddy_center_(a, b, c)
	-- Step 1: Compute the incenter and excircle centers
	local i, e, f, g = in_circle_(a, b, c)
	local ha, hb, hc = orthic_tr_(a, b, c)

	-- Step 2: Find the intersection points for the tangent lines
	local x, xp = intersection_lc_(a, ha, a, g)
	if point.mod(ha - x) < point.mod(ha - xp) then
	else
		x, xp = xp, x
	end

	local y, yp = intersection_lc_(b, hb, b, e)
	if point.mod(hb - y) < point.mod(hb - yp) then
	else
		y, yp = yp, y
	end

	local z, zp = intersection_lc_(c, hc, c, f)
	if point.mod(hc - z) < point.mod(hc - zp) then
	else
		z, zp = zp, z
	end

	-- Step 3: Calculate the intersections with the opposite triangle sides
	local xi, t = intersection_lc_(xp, e, a, g)
	if in_out_(a, b, c, xi) then
	else
		xi, t = t, xi
	end

	local yi, t = intersection_lc_(yp, f, b, e)
	if in_out_(a, b, c, yi) then
	else
		yi, t = t, yi
	end

	local zi, t = intersection_lc_(zp, g, c, f)
	if in_out_(a, b, c, zi) then
	else
		zi, t = t, zi
	end

	-- Step 4: Calculate the circumcenter of the triangle formed by the tangent points
	local s = circum_center_(xi, yi, zi)

	return s, xi, yi, zi -- Return the Soddy center and the tangent points
end

function square_inscribed_(a, b, c)
  local d, e = square_(c, b)
  local m = intersection_ll_(a, d, b, c)
  local n = intersection_ll_(a, e, b, c)
  local o, p = square_(m,n)
  return m,n,o,p
end