-- tkz_elements_triangles.lua
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

triangle = {}
function triangle:new(za, zb, zc)
	local type = "triangle"
	local circumcenter = circum_center_(za, zb, zc)
	local centroid = barycenter_({ za, 1 }, { zb, 1 }, { zc, 1 })
	local incenter = in_center_(za, zb, zc)
	local orthocenter = ortho_center_(za, zb, zc)
	local eulercenter = euler_center_(za, zb, zc)
	local spiekercenter = spieker_center_(za, zb, zc)
	local c = point.abs(zb - za)
	local a = point.abs(zc - zb)
	local b = point.abs(za - zc)
	local alpha = angle_normalize_(point.arg((zc - za) / (zb - za)))
	local beta = angle_normalize_(point.arg((za - zb) / (zc - zb)))
	local gamma = angle_normalize_(point.arg((zb - zc) / (za - zc)))
	local ab = line:new(za, zb)
	local ca = line:new(zc, za)
	local bc = line:new(zb, zc)
	local semiperimeter = (a + b + c) / 2
	local area = math.sqrt(semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c))
	local inradius = area / semiperimeter
	local circumradius = (a * b * c) / (4 * area)
	local tr = {
		pa = za,
		pb = zb,
		pc = zc,
		type = type,
		circumcenter = circumcenter,
		centroid = centroid,
		incenter = incenter,
		eulercenter = eulercenter,
		orthocenter = orthocenter,
		spiekercenter = spiekercenter,
		a = a,
		b = b,
		c = c,
		ab = ab,
		ca = ca,
		bc = bc,
		alpha = alpha,
		beta = beta,
		gamma = gamma,
		semiperimeter = semiperimeter,
		area = area,
		inradius = inradius,
		circumradius = circumradius,
	}
	setmetatable(tr, self)
	self.__index = self
	return tr
end
-----------------------
-- points --
-----------------------
function triangle:trilinear(a, b, c)
	return barycenter_({ self.pa, a * self.a }, { self.pb, b * self.b }, { self.pc, c * self.c })
end

function triangle:barycentric(a, b, c)
	return barycenter_({ self.pa, a }, { self.pb, b }, { self.pc, c })
end

function triangle:bevan_point()
	return circum_center_(excentral_tr_(self.pa, self.pb, self.pc))
end

function triangle:mittenpunkt_point()
	return lemoine_point_(excentral_tr_(self.pa, self.pb, self.pc))
end

function triangle:gergonne_point()
	return gergonne_point_(self.pa, self.pb, self.pc)
end

function triangle:nagel_point()
	return nagel_point_(self.pa, self.pb, self.pc)
end

function triangle:feuerbach_point()
	return feuerbach_point_(self.pa, self.pb, self.pc)
end

function triangle:lemoine_point()
	return lemoine_point_(self.pa, self.pb, self.pc)
end

function triangle:symmedian_point()
	return lemoine_point_(self.pa, self.pb, self.pc)
end

triangle.lemoine_point = triangle.symmedian_point
triangle.grebe_point = triangle.symmedian_point

function triangle:spieker_center()
	return spieker_center_(self.pa, self.pb, self.pc)
end

function triangle:barycenter(ka, kb, kc)
	return barycenter_({ self.pa, ka }, { self.pb, kb }, { self.pc, kc })
end

function triangle:base(u, v) -- (ab,ac) base coord u,v
	return barycenter_({ self.pa, (1 - u - v) }, { self.pb, u }, { self.pc, v })
end

function triangle:euler_points()
	H = self.orthocenter
	return midpoint_(H, self.pa), midpoint_(H, self.pb), midpoint_(H, self.pc)
end

function triangle:nine_points()
	local ma, mb, mc, ha, hb, hc
	-- Calculate the medial triangle
	ma, mb, mc = medial_tr_(self.pa, self.pb, self.pc)
	-- Calculate the orthic triangle
	ha, hb, hc = orthic_tr_(self.pa, self.pb, self.pc)
	-- Calculate the orthocenter
	H = self.orthocenter
	-- Return the points of the nine-point circle
	return ma, mb, mc, ha, hb, hc, midpoint_(H, self.pa), midpoint_(H, self.pb), midpoint_(H, self.pc)
end

function triangle:point(t)
	local p = 2 * self.semiperimeter
	local t1 = self.a / p
	local t2 = (self.a + self.b) / p
	if t <= t1 then
		return self.ab:point(t / t1)
	elseif t <= t2 then
		return self.bc:point((t * p - self.a) / self.b)
	else
		return self.ca:point((t * p - self.c - self.b) / self.a)
	end
end

function triangle:soddy_center()
	return soddy_center_(self.pa, self.pb, self.pc)
end

function triangle:conway_points()
	local a1 = report_(self.pb, self.pa, length(self.pb, self.pc), self.pa)
	local a2 = report_(self.pc, self.pa, length(self.pb, self.pc), self.pa)
	local b1 = report_(self.pa, self.pb, length(self.pa, self.pc), self.pb)
	local b2 = report_(self.pc, self.pb, length(self.pa, self.pc), self.pb)
	local c1 = report_(self.pb, self.pc, length(self.pb, self.pa), self.pc)
	local c2 = report_(self.pa, self.pc, length(self.pb, self.pa), self.pc)
	return a1, a2, b1, b2, c1, c2
end

function triangle:kimberling(n)
	local cos, sin, tan, pi = math.cos, math.sin, math.tan, math.pi
	local A, B, C = self.alpha, self.beta, self.gamma
	local a, b, c = self.a, self.b, self.c
	local pi = math.pi
	if n == 1 then
		return self:trilinear(1, 1, 1) -- incenter
	elseif n == 2 then
		return self:barycentric(1, 1, 1) -- centroid
	elseif n == 3 then
		return self:trilinear(cos(A), cos(B), cos(C)) --circumcenter
	elseif n == 4 then
		return self:barycentric(tan(A), tan(B), tan(C)) -- orthocenter
	elseif n == 5 then
		return self:trilinear(cos(B - C), cos(C - A), cos(A - B)) --nine
	elseif n == 6 then
		return self:trilinear(a, b, c) -- lemoine
	elseif n == 7 then
		return self:barycentric(1 / (b + c - a), 1 / (a + c - b), 1 / (a + b - c)) -- gergonne
	elseif n == 8 then
		return self:barycentric(b + c - a, a + c - b, a + b - c) -- nagel
	elseif n == 0 then
		return self:barycentric(a * (b + c - a), b * (a + c - b), c * (a + b - c)) -- mittenpunkt
	elseif n == 10 then
		return self:barycentric(b + c, a + c, a + b) -- spieker
	elseif n == 11 then
		return self:trilinear(1 - cos(B - C), 1 - cos(C - A), 1 - cos(A - B)) -- feuerbach
	elseif n == 13 then
		return self:trilinear(1 / sin(A + pi / 3), 1 / sin(B + pi / 3), 1 / sin(C + pi / 3)) -- first fermat
	elseif n == 14 then
		return self:trilinear(1 / sin(A - pi / 3), 1 / sin(B - pi / 3), 1 / sin(C - pi / 3)) -- second fermat
	elseif n == 19 then
		return self:trilinear(tan(A), tan(B), tan(C)) -- clawson
	elseif n == 20 then
		return self:barycentric(tan(B) + tan(C) - tan(A), tan(A) + tan(C) - tan(B), tan(A) + tan(B) - tan(C)) --de Longchamps
    	elseif n == 55 then
    return self:trilinear(a * (b + c - a) , b * (c + a - b) , c * (a + b - c))     
	elseif n == 56 then
  return self:trilinear(  a / (b + c - a) , b / (c + a - b) , c / (a + b - c))   
	elseif n == 110 then
		return self:trilinear(a / (b ^ 2 - c ^ 2), b / (c ^ 2 - a ^ 2), c / (a ^ 2 - b ^ 2)) -- kiepert parabola
	elseif n == 115 then
		return self:barycentric((b ^ 2 - c ^ 2) ^ 2, (c ^ 2 - a ^ 2) ^ 2, (a ^ 2 - b ^ 2) ^ 2) -- kiepert hyperbola
    elseif n == 371 then
      return self:trilinear( cos(A - pi / 4), cos(B - pi / 4), cos(C - pi / 4))
	end
end

function triangle:isogonal(pt)
	local pa = self.bc:reflection(pt)
	local pb = self.ca:reflection(pt)
	local pc = self.ab:reflection(pt)
	return circum_center_(pa, pb, pc)
end

function triangle:first_fermat_point()
	local x = equilateral_tr_(self.pb, self.pa)
	local y = equilateral_tr_(self.pa, self.pc)
	return intersection_ll_(x, self.pc, y, self.pb)
end

function triangle:second_fermat_point()
	local x = equilateral_tr_(self.pa, self.pb)
	local y = equilateral_tr_(self.pc, self.pa)
	return intersection_ll_(x, self.pc, y, self.pb)
end

function triangle:orthic_axis_points()
	return orthic_axis_(self.pa, self.pb, self.pc)
end

function triangle:kenmotu_point()
  return self:kimberling(371)
end
-------------------
-- Result -> line
-------------------
-- N,H,G,O -- check_equilateral_ (a,b,c)
function triangle:euler_line()
	if check_equilateral_(self.pa, self.pb, self.pc) then
		tex.error("An error has occurred", { "No euler line with equilateral triangle" })
	else
		local a, b, c = orthic_axis_(self.pa, self.pb, self.pc)
		local x = projection_(a, c, self.eulercenter)
		return line:new(self.eulercenter, x)
	end
end

function triangle:fermat_axis()
	local x = self:first_fermat_point()
	local y = self:second_fermat_point()
	return line:new(x, y)
end

function triangle:brocard_axis()
	return line:new(self.circumcenter, self:lemoine_point())
end

function triangle:simson_line(pt) -- pt on circumcircle
	local x = self.ab:projection(pt)
	local y = self.bc:projection(pt)
	return line:new(x, y)
end

function triangle:symmedian_line(n)
	local a = self.pa
	local b = self.pb
	local c = self.pc
	local l = self:lemoine_point()
	if n == 1 then
		return line:new(b, intersection_ll_(b, l, a, c))
	elseif n == 2 then
		return line:new(c, intersection_ll_(c, l, a, b))
	else
		return line:new(a, intersection_ll_(a, l, b, c))
	end
end

-- with pt on the circumcircle
function triangle:steiner_line(pt)
	local u = symmetry_axial_(self.pa, self.pb, pt)
	local v = symmetry_axial_(self.pa, self.pc, pt)
	return line:new(u, v)
end

function triangle:altitude(n)
	local a, b, c, o, p
	a = self.pa
	b = self.pb
	c = self.pc
	o = self.orthocenter
	if n == 1 then
		p = projection_(a, c, b)
		return line:new(b, p)
	elseif n == 2 then
		p = projection_(a, b, c)
		return line:new(c, p)
	else
		p = projection_(b, c, a)
		return line:new(a, p)
	end
end

function triangle:bisector(n)
	local a = self.pa
	local b = self.pb
	local c = self.pc
	local i = self.incenter
	if n == 1 then
		return line:new(b, intersection_ll_(b, i, a, c))
	elseif n == 2 then
		return line:new(c, intersection_ll_(c, i, a, b))
	else
		return line:new(a, intersection_ll_(a, i, b, c))
	end
end

function triangle:bisector_ext(n) -- n =1 swap n=2 2 swap
	local a = self.pa
	local b = self.pb
	local c = self.pc
	if n == 1 then -- ac
		return line:new(b, bisector_ext_(b, c, a))
	elseif n == 2 then -- ab
		return line:new(c, bisector_ext_(c, a, b))
	else -- bc
		return line:new(a, bisector_ext_(a, b, c))
	end
end

function triangle:antiparallel(pt, n) -- n = 1 swap ; n= 2 2 swap
	local a, b, c, i, u, v, w
	a = self.pa
	b = self.pb
	c = self.pc
	i = self.incenter
	if n == 1 then
		u = symmetry_axial_(b, i, a)
		v = symmetry_axial_(b, i, c)
		w = ll_from_(pt, u, v)
		intersection_ll_(pt, w, a, b)
		return line:new(intersection_ll_(pt, w, c, b), intersection_ll_(pt, w, a, b))
	elseif n == 2 then
		u = symmetry_axial_(c, i, a)
		v = symmetry_axial_(c, i, b)
		w = ll_from_(pt, u, v)
		intersection_ll_(pt, w, a, c)
		return line:new(intersection_ll_(pt, w, b, c), intersection_ll_(pt, w, a, c))
	else
		u = symmetry_axial_(a, i, b)
		v = symmetry_axial_(a, i, c)
		w = ll_from_(pt, u, v)
		intersection_ll_(pt, w, b, c)
		return line:new(intersection_ll_(pt, w, c, a), intersection_ll_(pt, w, b, a))
	end
end

function triangle:lemoine_axis() -- revoir car problème
	local C = self:circum_circle()
	local pl = self:lemoine_point()
	return C:polar(pl)
end

function triangle:orthic_axis()
	local x, y, z = orthic_axis_(self.pa, self.pb, self.pc)
	return line:new(x, z)
end

-----------------------
--- Result -> circles --
-----------------------
function triangle:euler_circle()
	return circle:new(euler_center_(self.pa, self.pb, self.pc), midpoint_(self.pb, self.pc))
end

function triangle:circum_circle()
	return circle:new(circum_circle_(self.pa, self.pb, self.pc), self.pa)
end

function triangle:in_circle()
	return circle:new(self.incenter, projection_(self.pb, self.pc, self.incenter))
end

function triangle:ex_circle(n) -- n =1 swap n=2 2 swap
	local a, b, c, o
	a = self.pa
	b = self.pb
	c = self.pc
	if n == 1 then
		o = ex_center_(b, c, a)
		return circle:new(o, projection_(c, a, o))
	elseif n == 2 then
		o = ex_center_(c, a, b)
		return circle:new(o, projection_(a, b, o))
	else
		o = ex_center_(a, b, c)
		return circle:new(o, projection_(b, c, o))
	end
end

function triangle:first_lemoine_circle()
	local lc, oc
	lc = self:lemoine_point()
	oc = self.circumcenter
	return circle:new(midpoint_(lc, oc), intersection_ll_(lc, ll_from_(lc, self.pa, self.pb), self.pa, self.pc))
end

function triangle:second_lemoine_circle()
	local lc, a, b, c, r, th
	lc = self:lemoine_point()
	a = point.abs(self.pc - self.pb)
	b = point.abs(self.pa - self.pc)
	c = point.abs(self.pb - self.pa)
	r = (a * b * c) / (a * a + b * b + c * c)
	th = lc + point(r, 0)
	return circle:new(lc, th)
end

function triangle:spieker_circle()
	local ma, mb, mc, sp
	ma, mb, mc = medial_tr_(self.pa, self.pb, self.pc)
	sp = in_center_(ma, mb, mc)
	return circle:new(sp, projection_(ma, mb, sp))
end

function triangle:soddy_circle()
	local s, i = soddy_center_(self.pa, self.pb, self.pc)
	return circle:new(s, i)
end

function triangle:cevian_circle(p)
	local pta, ptb, ptc = cevian_(self.pa, self.pb, self.pc, p)
	return circle:new(circum_circle_(pta, ptb, ptc), pta)
end

function triangle:symmedial_circle()
	local pta, ptb, ptc, p
	p = lemoine_point_(self.pa, self.pb, self.pc)
	pta, ptb, ptc = cevian_(self.pa, self.pb, self.pc, p)
	return circle:new(circum_circle_(pta, ptb, ptc), pta)
end

function triangle:conway_circle()
	local t
	t = report_(self.pb, self.pa, length(self.pb, self.pc), self.pa)
	return circle:new(self.incenter, t)
end

function triangle:pedal_circle(pt)
	local x, y, z, c
	x = projection_(self.pb, self.pc, pt)
	y = projection_(self.pa, self.pc, pt)
	z = projection_(self.pa, self.pb, pt)
	c = circum_center_(x, y, z)
	return circle:new(c, x)
end

function triangle:bevan_circle()
	local o, r, s, t
	o = circum_center_(excentral_tr_(self.pa, self.pb, self.pc))
	r, s, t = excentral_tr_(self.pa, self.pb, self.pc)
	return circle:new(o, r)
end

function triangle:taylor_points()
	local a, b, c = orthic_tr_(self.pa, self.pb, self.pc)
	return projection_(self.pa, self.pc, a),
		projection_(self.pa, self.pb, a),
		projection_(self.pb, self.pa, b),
		projection_(self.pb, self.pc, b),
		projection_(self.pc, self.pb, c),
		projection_(self.pc, self.pa, c)
end

function triangle:taylor_circle()
	local a, b, c = orthic_tr_(self.pa, self.pb, self.pc)
	local d = projection_(self.pa, self.pb, a)
	local e = projection_(self.pb, self.pc, b)
	local f = projection_(self.pc, self.pa, c)
	return circle:new(circum_circle_(d, e, f), d)
end

function triangle:kenmotu_circle()
    local a, b, c = self.a, self.b, self.c
    local area = self.area
    local rho = (math.sqrt(2) * a * b * c) / (4 * area + (a^2 + b^2 + c^2))
    local center = self:kimberling(371)
    return circle:new(through(center, rho))
end
-------------------
-- Result -> triangle
-------------------
function triangle:orthic()
	return triangle:new(orthic_tr_(self.pa, self.pb, self.pc))
end

function triangle:medial()
	return triangle:new(medial_tr_(self.pa, self.pb, self.pc))
end

function triangle:incentral()
	return triangle:new(incentral_tr_(self.pa, self.pb, self.pc))
end

function triangle:excentral()
	return triangle:new(excentral_tr_(self.pa, self.pb, self.pc))
end

function triangle:intouch()
	return triangle:new(intouch_tr_(self.pa, self.pb, self.pc))
end

function triangle:contact()
	return triangle:new(intouch_tr_(self.pa, self.pb, self.pc))
end

function triangle:extouch()
	return triangle:new(extouch_tr_(self.pa, self.pb, self.pc))
end

function triangle:feuerbach()
	return triangle:new(feuerbach_tr_(self.pa, self.pb, self.pc))
end

function triangle:anti()
	return triangle:new(anti_tr_(self.pa, self.pb, self.pc))
end

triangle.anticomplementary = triangle.anti

function triangle:tangential()
	return triangle:new(tangential_tr_(self.pa, self.pb, self.pc))
end

function triangle:cevian(p)
	return triangle:new(cevian_(self.pa, self.pb, self.pc, p))
end

function triangle:symmedian()
	local p = lemoine_point_(self.pa, self.pb, self.pc)
	return triangle:new(cevian_(self.pa, self.pb, self.pc, p))
end

function triangle:symmedial()
	local p = lemoine_point_(self.pa, self.pb, self.pc)
	return triangle:new(cevian_(self.pa, self.pb, self.pc, p))
end

function triangle:euler()
	return triangle:new(euler_points_(self.pa, self.pb, self.pc))
end

function triangle:pedal(pt)
	return triangle:new(self:projection(pt))
end

function triangle:similar()
	return triangle:new(similar_(self.pa, self.pb, self.pc))
end
-------------------
-- Result -> square
-------------------

-- Method for inscribing a square in a triangle with vertex rotation
function triangle:square_inscribed(permutation)
  -- Set a default value for rotation if not supplied
   permutation = permutation or 0
   permutation = permutation + 1
   local vertices = {self.pa, self.pb, self.pc}
   local i = (permutation - 1) % 3 + 1
   local j = i % 3 + 1
   local k = j % 3 + 1
    local a = vertices[i]
    local b = vertices[j]
    local c = vertices[k]
    return square:new(square_inscribed_(a,b,c))
end
-------------------
-- Result -> conic
-------------------
function triangle:steiner_inellipse()
	return steiner_(self.pa, self.pb, self.pc)
end

function triangle:steiner_circumellipse()
	local e = steiner_(self.pa, self.pb, self.pc)
	local v = report_(e.center, e.vertex, e.a, e.vertex)
	local cv = report_(e.center, e.covertex, e.b, e.covertex)
	return conic:new(EL_points(e.center, v, cv))
end

function triangle:euler_ellipse()
	if self:check_acutangle() then
		local x, y = intersection_lc_(self.orthocenter, self.circumcenter, self.eulercenter, self.ab.mid)
		local a = 0.5 * length(x, y)
		return conic:new(EL_bifocal(self.orthocenter, self.circumcenter, a))
	end
end

--  kiepert ellipse
function triangle:kiepert_hyperbola()
	-- center
	local center = self:kimberling(115)
	local O = self.circumcenter
	local G = self.centroid
	--  Brocard axis
	local L = self:brocard_axis()
	local M, N = intersection_lc_(L.pa, L.pb, O, self.pa)
	-- simson lines
	local Lsa = self:simson_line(M)
	local Lsb = self:simson_line(N)
	local axis = bisector(center, Lsa.pa, Lsb.pa)
	-- new frame system
	local U = report_(axis.pa, axis.pb, -1, center)
	local V = rotation_(center, math.pi / 2, U)
	--
	local minor = axis:ortho_from(center)
	local sys = occs:new(minor, center)
	local x, y = sys:coordinates(self.pa)
	-- x=-x
	-- y=-y
	-- local x,y       = newcoordinates (self.pa,center,U,V)
	local a = math.sqrt(x ^ 2 - y ^ 2)
	local c = math.sqrt(2) * a
	local Fa = report_(center, axis.pb, -c, center)
	local Fb = report_(center, axis.pb, c, center)
	local K = report_(center, axis.pb, -a ^ 2 / c, center)
	local directrix = axis:ortho_from(K)
	return conic:new(Fa, directrix, math.sqrt(2))
end
--  kiepert parabola
function triangle:kiepert_parabola()
	if (self.a == self.b) or (self.a == self.c) or (self.c == self.b) then
		tex.error("An error has occurred", { "No X(110)" })
	else
		L = self:euler_line()
		F = self:kimberling(110)
		return conic:new(F, L, 1)
	end
end
-------------------
-- Result -> miscellaneous
-------------------
function triangle:get_angle(n)
	local a, b, c
	a = self.pa
	b = self.pb
	c = self.pc
	if n == 1 then
		return point.arg((a - b) / (c - b))
	elseif n == 2 then
		return point.arg((b - c) / (a - c))
	else
		return point.arg((c - a) / (b - a))
	end
end

function triangle:projection(p)
	local x = projection_(self.pb, self.pc, p)
	local y = projection_(self.pa, self.pc, p)
	local z = projection_(self.pa, self.pb, p)
	return x, y, z
end

function triangle:parallelogram()
	local x = self.pc + self.pa - self.pb
	return x
end

function triangle:area() -- obsolete
	return area_(self.pa, self.pb, self.pc)
end

function triangle:barycentric_coordinates(pt)
	return barycentric_coordinates_(self.pa, self.pb, self.pc, pt)
end

function triangle:in_out(pt)
	return in_out_(self.pa, self.pb, self.pc, pt)
end

function triangle:check_equilateral()
	return check_equilateral_(self.pa, self.pb, self.pc)
end

function triangle:check_acutangle()
	local asq = self.a * self.a
	local bsq = self.b * self.b
	local csq = self.c * self.c
	if asq + bsq > csq and bsq + csq > asq and csq + asq > bsq then
		return true
	else
		return false
	end
end

-- Circle tangent to two straight lines passing through a given point
function triangle:c_ll_p(p)
	-- Compute the bisector of the triangle
	local lbi = bisector(self.pa, self.pb, self.pc)

	if lbi:in_out(p) then
		-- Orthogonal projection of p onto the bisector
		local lp = lbi:ortho_from(p)

		-- Intersection of line from p to its projection with self.pa and self.pb
		local i = intersection_ll_(p, lp.pb, self.pa, self.pb)

		-- Intersection points of the line with the circle defined by (i, p)
		local t1, t2 = intersection_lc_(self.pa, self.pb, i, p)

		-- Create the main line and find orthogonal projections from t1 and t2
		local lab = line:new(self.pa, self.pb)
		local x = lab:ortho_from(t1).pb
		local y = lab:ortho_from(t2).pb

		-- Return two circles based on the orthogonal projections and points t1, t2
		return circle:new(intersection_ll_(x, t1, self.pa, p), t1), circle:new(intersection_ll_(y, t2, self.pa, p), t2)
	else
		local lab = line:new(self.pa, self.pb)
		-- Reflection of p across the bisector
		local q = lbi:reflection(p)

		-- Compute circles from the Wallis construction
		local c1, c2 = lab:c_l_pp(p, q)

		-- Return two circles with centers and points on their circumference
		return c1, c2
	end
end

return triangle
