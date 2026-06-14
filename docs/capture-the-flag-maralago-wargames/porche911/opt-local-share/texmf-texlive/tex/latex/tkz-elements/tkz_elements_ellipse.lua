-- tkz_elements_ellipses.lua
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
--                           circles
---------------------------------------------------------------------------
ellipse = {}

function ellipse:new(pc, pa, pb)
	-- pc --> center   pa --> through big axe     pb --> little axe
	local type = "ellipse"
	local Rx = point.abs(pa - pc)
	local Ry = point.abs(pb - pc)
	local slope = slope_(pc, pa)
	local c = math.sqrt(Rx * Rx - Ry * Ry)
	local Fa = pc + c * (point(math.cos(slope), math.sin(slope)))
	local Fb = pc - c * (point(math.cos(slope), math.sin(slope)))
	local east = pa
	local north = pb
	local west = 2 * pc - pa
	local south = 2 * pc - pb
	local vertex = pa
	local covertex = pb
	local e = c / Rx
	local h = (Rx * Rx - c * c) / c
	local o = {
		center = pc,
		vertex = vertex,
		covertex = covertex,
		Rx = Rx,
		Ry = Ry,
		slope = slope,
		Fa = Fa,
		Fb = Fb,
		type = type,
		north = north,
		south = south,
		east = east,
		west = west,
		e = e,
		h = h,
	}
	setmetatable(o, self)
	self.__index = self
	return o
end

function ellipse:foci(f1, f2, v)
	local c, a, h, b, cov
	c = midpoint_(f1, f2)
	a = point.abs(v - c)
	h = point.abs(f1 - c)
	b = math.sqrt(a ^ 2 - h ^ 2)
	cov = (v - c) * point(0, 1) / point.abs(v - c) * b + c
	return ellipse:new(c, v, cov)
end

function ellipse:radii(c, a, b, sl)
	local z, v, cov
	z = point(a * math.cos(sl), a * math.sin(sl))
	v = c + z
	z.V = v
	cov = (v - c) * point(0, 1) / point.abs(v - c) * b + c
	return ellipse:new(c, v, cov)
end

function ellipse:eccentricity(f1, d, e)
	local E = conic:new(f1, d, e)
	return ellipse:new(E.c, E.vertex, E.covertex)
end

function ellipse:point(t)
	local phi = 2 * t * math.pi
	local cx = self.center.re
	local cy = self.center.im
	local ax = self.Rx * math.cos(self.slope) * math.cos(phi)
	local ay = self.Rx * math.sin(self.slope) * math.cos(phi)
	local bx = -self.Ry * math.sin(self.slope) * math.sin(phi)
	local by = self.Ry * math.cos(self.slope) * math.sin(phi)
	return point(cx + ax + bx, cy + ay + by)
end

function ellipse:tangent_at(pt)
	local zi = in_center_(self.Fa, pt, self.Fb)
	local u = pt + (zi - pt) * point(0, 1)
	local u = normalize_(pt, u)
	local v = pt:symmetry(u)
	return line:new(u, v)
end

function ellipse:tangent_from(pt)
	local u, v, U, V, w, s1, s2, s3, s4
	w = report_(self.Fb, self.Fa, 2 * self.Rx)
	s1, s2 = intersection_cc_(pt, self.Fa, self.Fb, w)
	u, v = mediator_(s1, self.Fa)
	U = intersection_ll_(u, v, self.Fb, s1)
	u, v = mediator_(s2, self.Fa)
	V = intersection_ll_(u, v, self.Fb, s2)
	return line:new(pt, U), line:new(pt, V)
end

function ellipse:in_out(pt)
	local d, D, an, m
	d = point.abs(pt - self.center)
	an = point.arg(pt - self.center)
	m = point(self.Rx * math.cos(an), self.Ry * math.sin(an))
	D = point.abs(m - self.center)
	if D - d > tkz_epsilon then
		return true
	else
		return false
	end
end

function ellipse:orthoptic_circle()
	local r = math.sqrt(self.Rx * self.Rx + self.Ry * self.Ry)
	return circle:radius(self.center, r)
end

return ellipse
