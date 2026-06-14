-- tkz_elements_functions_conics.lua
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


function get_a(h, e)
	if e == 1 then
		return nil
	elseif e < 1 then
		return e * h / (1 - e ^ 2)
	elseif e > 1 then
		return e * h / (e ^ 2 - 1)
	end
end

function get_b(h, e)
	if e == 1 then
		return nil
	elseif e < 1 then
		return e * h / math.sqrt(1 - e ^ 2)
	elseif e > 1 then
		return e * h / math.sqrt(e ^ 2 - 1)
	end
end

function get_c(h, e)
	if e == 1 then
		return nil
	elseif e < 1 then
		return e ^ 2 * h / (1 - e ^ 2)
	elseif e > 1 then
		return e ^ 2 * h / (e ^ 2 - 1)
	end
end

function next_focus(F, K, e, h)
	if e == 1 then
		return nil
	elseif e > 1 then
		return report_(F, K, 2 * get_c(h, e))
	elseif e < 1 then
		return report_(F, K, -2 * get_c(h, e))
	end
end

function conic_center(F, K, e, h)
	if e == 1 then
		return nil
	elseif e > 1 then
		return report_(F, K, get_c(h, e))
	elseif e < 1 then
		return report_(F, K, -get_c(h, e))
	end
end

function get_subtype(e)
	if e == 1 then
		return "parabola"
	elseif e < 1 then
		return "ellipse"
	elseif e > 1 then
		return "hyperbola"
	end
end

function get_vertex(F, K, e, h)
	if e == 1 then
		return report_(K, F, h / 2)
	else
		local center = conic_center(F, K, e, h)
		return report_(center, F, get_a(h, e))
	end
end

function get_covertex(F, K, e, h)
	if e == 1 then
		return nil
	else
		local center = conic_center(F, K, e, h)
		return report_(center, ortho_from_(center, center, F), get_b(h, e))
	end
end

function get_minor_axis(F, K, e, h)
	if e == 1 then
		return nil
	else
		local center = conic_center(F, K, e, h)
		local pa = get_covertex(F, K, e, h)
		local pb = symmetry_(center, pa)
		return line:new(pa, pb)
	end
end

---------------------------------------------------------------------------
---------------------------------------------------------------------------

function get_points_conic_(Co, ta, tb, nb)
	if Co.e == 1 then
		return get_points_parabola(Co, ta, tb, nb)
	elseif Co.e > 1 then
		return get_points_hyperbola(Co, ta, tb, nb)
	elseif Co.e < 1 then
		return get_points_ellipse(Co, ta, tb, nb)
	end
end

function get_points_sym_conic_(Co, ta, tb, nb)
	return get_points_hyperbola_sym(Co, ta, tb, nb)
end

function get_points_parabola(C, ta, tb, nb)
	local points = {}
	--Function to add points in a given range
	for t = ta, tb, 1 / nb do
		local T = C.directrix:report(t, C.K)
		local LL = C.major_axis:ll_from(T)
		local x, y = mediator_(C.Fa, T)
		local pt = intersection_ll_(x, y, LL.pa, LL.pb)
		table.insert(points, "(" .. checknumber(pt.re) .. "," .. checknumber(pt.im) .. ")")
	end
	return points
end

function get_points_hyperbola(C, ta, tb, nb)
	local points = {}
	local LC = C.minor_axis
	local LS = LC:ll_from(C.vertex)
	for t = ta, tb, 1 / nb do
		local T = C.directrix:report(t, C.K)
		local LT = C.major_axis:ll_from(T)
		local D = intersection_ll_(LC.pa, LC.pb, C.Fa, T)
		local E = intersection_ll_(LS.pa, LS.pb, C.Fa, T)
		local P, Q = intersection_lc_(LT.pa, LT.pb, D, E)
		if length(P, C.Fa) > length(Q, C.Fa) then
			P, Q = Q, P
		end
		table.insert(points, "(" .. checknumber(P.re) .. "," .. checknumber(P.im) .. ")")
	end
	return points
end

function get_points_hyperbola_sym(C, ta, tb, nb)
	local points = {}
	local LC = C.minor_axis
	local LS = LC:ll_from(C.vertex)
	for t = ta, tb, 1 / nb do
		local T = C.directrix:report(t, C.K)
		local LT = C.major_axis:ll_from(T)
		local D = intersection_ll_(LC.pa, LC.pb, C.Fa, T)
		local E = intersection_ll_(LS.pa, LS.pb, C.Fa, T)
		local M, N = intersection_lc_(LT.pa, LT.pb, D, E)
		local P = symmetry_(C.center, M)
		local Q = symmetry_(C.center, N)
		if length(P, C.Fb) > length(Q, C.Fb) then
			P, Q = Q, P
		end
		table.insert(points, "(" .. checknumber(P.re) .. "," .. checknumber(P.im) .. ")")
	end
	return points
end

function get_points_ellipse(C, x, y, nb)
	local points = {}
	for t = x, y + 1 / nb, 1 / nb do
		-- point on circle
		CI = circle:new(C.center, C.vertex)
		local M = CI:point(t)
		-- point on ellipse
		local P = affinity_(C.Fa, C.Fb, C.center, C.covertex, C.b / C.a, M)
		table.insert(points, "(" .. checknumber(P.re) .. "," .. checknumber(P.im) .. ")")
	end
	return points
end
---------------------------------------------------------------------------
---------------------------------------------------------------------------

function get_one_point_conic_(C, t)
	if C.e < 1 then
		return get_one_point_ellipse(C, t)
	else
		local a, b = C.directrix.pa, C.directrix.pb
		local c, d = C.Fa, C.K
		local angle = angle_between_vectors(a, b, c, d)
		local newDir = (angle < 0) and line:new(b, a) or line:new(a, b)

		local T = newDir:report(t, C.K)
		local LT = C.major_axis:ll_from(T)

		if C.e == 1 then
			return get_one_point_parabola(C, T, LT)
		else
			return get_one_point_hyperbola(C, T, LT)
		end
	end
end

function get_one_point_parabola(C, T, LT)
	local x, y = mediator_(C.Fa, T)
	return intersection_ll_(x, y, LT.pa, LT.pb)
end

function get_one_point_hyperbola(C, T, LT)
	local LC = C.minor_axis
	local LS = LC:ll_from(C.vertex)
	local D = intersection_ll_(LC.pa, LC.pb, C.Fa, T)
	local E = intersection_ll_(LS.pa, LS.pb, C.Fa, T)
	local P, Q = intersection_lc_(LT.pa, LT.pb, D, E)
	if length(P, C.Fa) > length(Q, C.Fa) then
		P, Q = Q, P
	end
	return P
end

function get_one_point_hyperbola_ii(C, t)
	local T = C.directrix:report(t, C.K)
	local LT = C.major_axis:ll_from(T)
	local p = get_one_point_hyperbola(C, T, LT)
	local D = C.minor_axis
	return symmetry_axial_(D.pa, D.pb, p)
end

function get_one_point_ellipse(C, t)
	-- point on circle
	CI = circle:new(C.center, C.vertex)
	local M = CI:point(t)
	return affinity_(C.Fa, C.Fb, C.center, C.covertex, C.b / C.a, M)
end

function EL_in_out(CO, pt)
	local d = point.abs(pt - CO.center)
	local L = line:new(CO.center, pt)
	local x, y = intersection(L, CO)
	local dx = point.abs(x - CO.center)
	if d < dx then
		return true
	else
		return false
	end
end

function PA_in_out(PA, pt)
	local D = PA.major_axis
	local Dp = D:ortho_from(pt)
	local x, y = intersection(Dp, PA)
	if x == false then
		return false
	else
		local L = line:new(x, y)
		return L:in_out_segment(pt)
	end
end

function HY_in_out(HY, pt)
	local D = HY.major_axis
	local Dp = D:ortho_from(pt)
	local x, y = intersection(Dp, HY)
	if x == false then
		return false
	else
		local L = line:new(x, y)
		return L:in_out_segment(pt)
	end
end

function EL_points(center, vertex, covertex)
	local a = length(center, vertex)
	local b = length(center, covertex)
	local c = math.sqrt(a ^ 2 - b ^ 2)
	local F = report_(center, vertex, c)
	local e = c / a
	local h = b ^ 2 / c
	local K = report_(center, F, b ^ 2 / c, F)
	local axis = line:new(vertex, center)
	local L = axis:ortho_from(K)
	return F, L, e
end

function EL_bifocal(Fa, Fb, x)
	local a
	if type(x) == "number" then
		a = x
	else -- x is a point
		a = (length(Fa, x) + length(Fb, x)) / 2
	end
	local center = midpoint_(Fa, Fb)
	local c = length(center, Fa)
	local e = c / a
	local b = math.sqrt(a ^ 2 - c ^ 2)
	local h = b ^ 2 / c
	local K = report_(center, Fa, b ^ 2 / c, Fa)
	local vertex = report_(center, Fa, a)
	local axis = line:new(vertex, center)
	local L = axis:ortho_from(K)
	return Fa, L, e
end

function HY_bifocal(Fa, Fb, x)
	local a
	if type(x) == "number" then
		a = x
	else -- x is a point
		a = math.abs((length(Fa, x) - length(Fb, x))) / 2
	end
	local center = midpoint_(Fa, Fb)
	local c = length(center, Fa)
	local e = c / a
	local b = math.sqrt(c ^ 2 - a ^ 2)
	local h = b ^ 2 / c
	local K = report_(center, Fa, -b ^ 2 / c, Fa)
	local vertex = report_(center, Fa, a)
	local axis = line:new(vertex, center)
	local L = axis:ortho_from(K)
	return Fa, L, e
end

function PA_dir(F, A, B)
	local CA = circle:new(A, F)
	local CB = circle:new(B, F)
	local R, S, U, V = CA:common_tangent(CB)
	return line:new(R, S), line:new(U, V)
end

function PA_focus(D, pA, pB)
	local HA = D:projection(pA)
	local HB = D:projection(pB)
	local x, y = intersection_cc_(pA, HA, pB, HB)
	if x == false then
		error("An error has occurred. Bad configuration")
		return
	else
		return x, y
	end
end
