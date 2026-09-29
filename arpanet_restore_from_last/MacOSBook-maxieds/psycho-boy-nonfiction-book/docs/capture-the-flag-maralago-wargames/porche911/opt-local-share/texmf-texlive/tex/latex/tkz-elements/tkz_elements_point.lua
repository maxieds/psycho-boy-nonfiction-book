-- tkz_elements_point.lua
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

-- point.lua
require("tkz_elements_class")

point = class(function(p, re, im)
	if type(re) == "number" then
		p.re = re
		p.im = im
	else
		p.re = re.re
		p.im = re.im
	end
	p.type = "point"
	p.argument = math.atan(p.im, p.re)
	p.modulus = math.sqrt(p.re * p.re + p.im * p.im)
	p.mtx = matrix:new({ { p.re }, { p.im } })
end)

local sqrt = math.sqrt
local cos = math.cos
local sin = math.sin
local exp = math.exp
local atan = math.atan
local min = math.min
local max = math.max
local abs = math.abs

local function topoint(z1)
	if type(z1) == "number" then
		return point(z1, 0)
	else
		return z1
	end
end

local function check(z1, z2)
	if type(z1) == "number" then
		return point(z1, 0), z2
	elseif type(z2) == "number" then
		return z1, point(z2, 0)
	else
		return z1, z2
	end
end
-- -------------------------------------------------------------------
-- metamethods
-- -------------------------------------------------------------------
-- redefine arithmetic operators!
function point.__add(z1, z2)
	local c1, c2 = check(z1, z2)
	return point(c1.re + c2.re, c1.im + c2.im)
end

function point.__sub(z1, z2)
	local c1, c2 = check(z1, z2)
	return point(c1.re - c2.re, c1.im - c2.im)
end

function point.__unm(z)
	local z = topoint(z)
	return point(-z.re, -z.im)
end

function point.__mul(z1, z2)
	local c1, c2 = check(z1, z2)
	return point(c1.re * c2.re - c1.im * c2.im, c1.im * c2.re + c1.re * c2.im)
end

-- dot product is '..'  (a+ib) (c-id) = ac+bd + i(bc-ad)
function point.__concat(z1, z2)
	local z
	z = z1 * point.conj(z2)
	return z.re
end

-- determinant  is '^'   (a-ib) (c+id) = ac+bd + i(ad - bc)
function point.__pow(z1, z2)
	local z
	z = point.conj(z1) * z2
	return z.im
end

function point.__div(x, y)
	local xx = topoint(x)
	local yy = topoint(y)
	return point(
		(xx.re * yy.re + xx.im * yy.im) / (yy.re * yy.re + yy.im * yy.im),
		(xx.im * yy.re - xx.re * yy.im) / (yy.re * yy.re + yy.im * yy.im)
	)
end

function point.__tostring(z)
	local real = z.re
	local imag = z.im
	if real == 0 then
		if imag == 0 then
			return "0"
		else
			if imag == 1 then
				return "" .. "i"
			else
				if imag == -1 then
					return "" .. "-i"
				else
					local imag = string.format("%." .. tkz_dc .. "f", imag)
					return "" .. imag .. "i"
				end
			end
		end
	else
		if imag > 0 then
			if imag == 1 then
				if is_integer(real) then
					real = math.round(real)
				else
					real = string.format("%." .. tkz_dc .. "f", real)
				end
				return "" .. real .. "+" .. "i"
			else
				if is_integer(real) then
					real = math.round(real)
				else
					real = string.format("%." .. tkz_dc .. "f", real)
				end
				imag = string.format("%." .. tkz_dc .. "f", imag)
				return "" .. real .. "+" .. imag .. "i"
			end
		elseif imag < 0 then
			if imag == -1 then
				if is_integer(real) then
					real = math.round(real)
				else
					real = string.format("%." .. tkz_dc .. "f", real)
				end
				imag = string.format("%." .. tkz_dc .. "f", imag)
				return "" .. real .. "-" .. "i"
			else
				if is_integer(real) then
					real = math.round(real)
				else
					real = string.format("%." .. tkz_dc .. "f", real)
				end
				imag = string.format("%." .. tkz_dc .. "f", imag)
				return "" .. real .. imag .. "i"
			end
		else
			if is_integer(real) then
				real = math.round(real)
			else
				real = string.format("%." .. tkz_dc .. "f", real)
			end
			return "" .. real
		end
	end
end

function point.__tonumber(z)
	if z.im == 0 then
		return z.re
	else
		return nil
	end
end

function point.__eq(z1, z2)
	return z1.re == z2.re and z1.im == z2.im
end
-- -------------------------------------------------------------------
local function pyth(a, b)
	if a == 0 and b == 0 then
		return 0
	end
	a, b = abs(a), abs(b)
	a, b = max(a, b), min(a, b)
	return a * sqrt(1 + (b / a) ^ 2)
end

function point.conj(z)
	local cx = topoint(z)
	return point(cx.re, -cx.im)
end

function point.mod(z)
	local cx = topoint(z)
	local function sqr(x)
		return x * x
	end
	return pyth(cx.re, cx.im)
end

function point.abs(z)
	local cx = topoint(z)
	local function sqr(x)
		return x * x
	end
	return sqrt(sqr(cx.re) + sqr(cx.im))
end

function point.norm(z)
	local cx = topoint(z)
	local function sqr(x)
		return x * x
	end
	return (sqr(cx.re) + sqr(cx.im))
end

function point.power(z, n)
	if type(z) == number then
		return z ^ n
	else
		local m = z.modulus ^ n
		local a = angle_normalize(z.argument * n)
		return polar_(m, a)
	end
end

function point.arg(z)
	cx = topoint(z)
	return math.atan(cx.im, cx.re)
end

function point.get(z)
	return z.re, z.im
end

function point.sqrt(z)
	local cx = topoint(z)
	local len = math.sqrt(cx.re ^ 2 + cx.im ^ 2)
	local sign = (cx.im < 0 and -1) or 1
	return point(math.sqrt((cx.re + len) / 2), sign * math.sqrt((len - cx.re) / 2))
end

-- methods ---

function point:new(a, b)
	return point(a, b)
end

function point:polar(radius, phi)
	return point:new(radius * math.cos(phi), radius * math.sin(phi))
end

function point:polar_deg(radius, phi)
	return polar_(radius, phi * math.pi / 180)
end

function point:north(d)
	local d = d or 1
	return self + polar_(d, math.pi / 2)
end

function point:south(d)
	local d = d or 1
	return self + polar_(d, 3 * math.pi / 2)
end

function point:east(d)
	local d = d or 1
	return self + polar_(d, 0)
end

function point:west(d)
	local d = d or 1
	return self + polar_(d, math.pi)
end
-- ----------------------------------------------------------------
-- transformations
-- ----------------------------------------------------------------
-- function point: symmetry(pt)
--     return symmetry_ (self ,pt)
-- end

function point:symmetry(...)
	local tp = table.pack(...) -- Pack arguments into a table
	local nb = tp.n -- Number of arguments
	local obj = tp[1] -- The first object in the arguments

	if nb == 1 then -- If there's only one argument
		if obj.type == "point" then
			return symmetry_(self, obj) -- Apply symmetry on the point
		elseif obj.type == "line" then
			return line:new(set_symmetry_(self, obj.pa, obj.pb)) -- Create a new line
		elseif obj.type == "circle" then
			return circle:new(set_symmetry_(self, obj.center, obj.through)) -- Create a new circle
		else
			return triangle:new(set_symmetry(self, obj.pa, obj.pb, obj.pc)) -- Create a new triangle
		end
	else -- If there are multiple arguments
		local results = {} -- Initialize a table to store results
		for i = 1, nb do
			table.insert(results, symmetry_(self, tp[i])) -- Apply symmetry on each object
		end
		return table.unpack(results) -- Return the results as separate values
	end
end

function point:set_symmetry(...)
	return set_symmetry_(self, ...)
end

function point:rotation_pt(angle, pt)
	return rotation_(self, angle, pt)
end

function point:set_rotation(angle, ...)
	return set_rotation_(self, angle, ...)
end

function point:rotation(angle, ...)
	local tp = table.pack(...) -- Pack arguments into a table
	local nb = tp.n -- Number of arguments
	local obj = tp[1] -- The first object in the arguments

	if nb == 1 then -- If there's only one argument
		if obj.type == "point" then
			return rotation_(self, angle, obj) -- Rotate the point
		elseif obj.type == "line" then
			return line:new(set_rotation_(self, angle, obj.pa, obj.pb)) -- Rotate the line
		elseif obj.type == "triangle" then
			return triangle:new(set_rotation_(self, angle, obj.pa, obj.pb, obj.pc)) -- Rotate the triangle
		elseif obj.type == "circle" then
			return circle:new(set_rotation_(self, angle, obj.center, obj.through)) -- Rotate the circle
		else -- For other shapes like square
			return square:new(set_rotation_(self, angle, obj.pa, obj.pb, obj.pc, obj.pd)) -- Rotate the square
		end
	else -- If there are multiple arguments
		local results = {} -- Initialize a table to store results
		for i = 1, nb do
			table.insert(results, rotation_(self, angle, tp[i])) -- Rotate each object
		end
		return table.unpack(results) -- Return the results as separate values
	end
end

function point:homothety(coeff, ...)
	local tp = table.pack(...) -- Pack arguments into a table
	local nb = tp.n -- Number of arguments
	local obj = tp[1] -- The first object in the arguments
	local t = {} -- Initialize a table to store results

	if nb == 1 then -- If there's only one argument
		if obj.type == "point" then
			return homothety_(self, coeff, obj) -- Apply homothety to the point
		elseif obj.type == "line" then
			return line:new(set_homothety_(self, coeff, obj.pa, obj.pb)) -- Apply homothety to the line
		elseif obj.type == "triangle" then
			return triangle:new(set_homothety_(self, coeff, obj.pa, obj.pb, obj.pc)) -- Apply homothety to the triangle
		elseif obj.type == "circle" then
			return circle:new(set_homothety_(self, coeff, obj.center, obj.through)) -- Apply homothety to the circle
		else -- For other shapes like square
			return square:new(set_homothety_(self, coeff, obj.pa, obj.pb, obj.pc, obj.pd)) -- Apply homothety to the square
		end
	else -- If there are multiple arguments
		for i = 1, nb do
			table.insert(t, homothety_(self, coeff, tp[i])) -- Apply homothety to each object
		end
		return table.unpack(t) -- Return the results as separate values
	end
end

function point:normalize()
	local d = point.abs(self)
	return point(self.re / d, self.im / d)
end

function point:normalize_from(p)
  local u = (self - p)
	local d = point.abs(u)
	return point(u.re / d, u.im / d) + p
end

function point:identity(pt)
	return point.abs(self - pt) < tkz_epsilon
end

function point:orthogonal(d)
	local m
	if d == nil then
		-- If no scaling factor d is provided, return the point rotated 90 degrees counterclockwise
		return point(-self.im, self.re)
	else
		m = point.mod(self) -- Get the modulus (magnitude) of the current point
		return point(-self.im * d / m, self.re * d / m) -- Return the scaled orthogonal point
	end
end

function point:at(z)
	return point(self.re + z.re, self.im + z.im)
end

function point:print()
	tex.print(tostring(self))
end
