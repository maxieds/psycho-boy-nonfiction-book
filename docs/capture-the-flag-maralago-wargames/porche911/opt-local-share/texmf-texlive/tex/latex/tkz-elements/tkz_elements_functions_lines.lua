-- tkz_elements_functions_lines.lua
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
--                 Lines
---------------------------------------------------------------------------
function normalize_(a, b)
	return a + (b - a) / point.mod(b - a)
end

function ortho_from_(p, a, b)
	return p + (b - a) * point(0, 1)
end

function ll_from_(p, a, b)
	return p + b - a
end

function slope_(a, b)
	return angle_normalize_(point.arg(b - a))
end

function gold_segment_(a, b)
	return a + (b - a) * tkzinvphi
end

function online_(a, b, t)
	return barycenter_({ a, (1 - t) }, { b, t })
end

function mediator_(a, b)
	local m = midpoint_(a, b)
	return m, rotation_(m, math.pi / 2, b)
end

function midpoint_(z1, z2)
	return (z1 + z2) / 2
end
-- triangle specific
function equilateral_tr_(a, b)
	return rotation_(a, math.pi / 3, b)
end

function isosceles_right_tr(a, b)
	local pt = rotation_(a, math.pi / 4, b)
	return a + (pt - a) * math.sin(math.pi / 4)
end

function gold_tr(a, b)
	local pt = rotation_(a, math.pi / 2, b)
	return a + (pt - a) * tkzinvphi
end

function euclide_tr(a, b)
	return rotation_(a, math.pi / 5, b)
end

function golden_tr(a, b)
	local pt = rotation_(a, 2 * math.pi / 5, b)
	return a + (pt - a) * tkzphi
end

function div_harmonic_int_(a, b, n)
	local k = point.abs(a - n) / point.abs(b - n)
	return barycenter_({ a, 1 }, { b, k })
end

function div_harmonic_ext_(a, b, n)
	local k = point.abs(a - n) / point.abs(b - n)
	return barycenter_({ a, 1 }, { b, -k })
end

function div_harmonic_both_(a, b, k)
	return barycenter_({ a, 1 }, { b, k }), barycenter_({ a, 1 }, { b, -k })
end

function golden_ratio_(a, b)
	local invphi = (math.sqrt(5) - 1) / 2
	return a + (b - a) * invphi
end
-- projection
function projection(Dt, pt)
	return projection_(Dt.pa, Dt.pb, pt)
end

function projection_(pa, pb, pt)
	if aligned(pa, pb, pt) then
		return pt
	else
		local v = pb - pa
		local z = ((pt - pa) .. v) / point.norm(v) -- .. dot product
		return pa + z * v
	end
end

function projection_ll(Dt1, Dt2, pt)
	return projection_ll_(Dt1.pa, Dt1.pb, Dt2.pa, Dt2.pb, pt)
end

function projection_ll_(pa, pb, pc, pd, pt)
	if aligned(pa, pb, pt) then
		return pt
	else
		local m = ll_from_(pt, pc, pd)
		return intersection_ll_(pt, m, pa, pb)
	end
end

function affinity_(pa, pb, pc, pd, k, pt)
	local p = projection_ll_(pa, pb, pc, pd, pt)
	return homothety_(p, k, pt)
end

function symmetry_axial_(pa, pb, pt)
	local p = projection_(pa, pb, pt)
	return symmetry_(p, pt)
end

function set_symmetry_axial_(u, v, ...)
	local t = {}
	for _, value in ipairs({ ... }) do
		table.insert(t, symmetry_axial_(u, v, value))
	end
	return table.unpack(t)
end

function square_(a, b)
	return rotation_(b, -math.pi / 2, a), rotation_(a, math.pi / 2, b)
end

function in_segment_(a, b, pt)
	return point.mod(pt - a) + point.mod(pt - b) - point.mod(b - a) <= tkz_epsilon
end

function report_(za, zb, d, pt)
	local len = point.mod(zb - za)
	local t = d / len
	local result = barycenter_({ za, 1 - t }, { zb, t })

	if pt then
		return result + pt - za
	else
		return result
	end
end

function colinear_at_(za, zb, pt, k)
	if k then
		return pt + k * (zb - za)
	else
		return pt + (zb - za)
	end
end
-- orthonormal cartesian coordinate system
-- function occs_(p,za,zb)
--   local x = report_(za,zb,1,p)
--   local y = ortho_from_(p,p,x)
--   return x,y
-- end
