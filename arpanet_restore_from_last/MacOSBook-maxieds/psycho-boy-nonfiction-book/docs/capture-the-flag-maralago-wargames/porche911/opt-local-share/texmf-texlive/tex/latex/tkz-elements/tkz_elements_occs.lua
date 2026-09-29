-- tkz_elements_occs.lua
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

occs = {}
function occs:new(L, zO)
	local type = "occs"
	local origin = zO
	local y = get_v(L, zO)
	local x = rotation_(zO, -math.pi / 2, y)
	local abscissa = line:new(zO, x)
	local ordinate = line:new(zO, y)
	local o = { origin = origin, 
  x = x, 
  y = y, 
  abscissa = abscissa, 
  ordinate = ordinate, 
  type = type }
	setmetatable(o, self)
	self.__index = self
	return o
end
-----------------------
function occs:coordinates(pt) -- S,U,V orthonormé
	local xs = self.origin.re
	local ys = self.origin.im
	local x = pt.re
	local y = pt.im
	local xsu = (self.x - self.origin).re
	local ysu = (self.x - self.origin).im
	local xsv = (self.y - self.origin).re
	local ysv = (self.y - self.origin).im
	local xxs = x - xs
	local yys = y - ys
	return checknumber(xsu * xxs + ysu * yys), checknumber(xsv * xxs + ysv * yys)
end

return occs
