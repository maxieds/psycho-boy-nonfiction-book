-- tkz_elements_regular.lua
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
-- za = center zb a vertex
regular_polygon = {}
function regular_polygon:new(za, zb, nb)
	local type = "regular_polygon"
	local vertices = regular_(za, zb, nb)
	local center = za
	local through = zb
	local angle = 2 * math.pi / nb
	local circumradius = point.abs(zb - za)
	local circle = circle:new(za, zb)
	local inradius = circumradius * math.cos(math.pi / nb)
	local side = circumradius * math.sin(math.pi / nb)
	local proj = projection_(vertices[1], vertices[2], za)
	local perimeter = nb * side
	local area = (perimeter * inradius) / 2
	local regular = {
		type = type,
		center = center,
		through = through,
		circumradius = circumradius,
		inradius = inradius,
		vertices = vertices,
		circle = circle,
		nb = nb,
		angle = angle,
		side = side,
		proj = proj,
		perimeter = perimeter,
		area = area,
	}
	setmetatable(regular, self)
	self.__index = self
	return regular
end
-----------------------
-- points --
-----------------------
-------------------
-- Result -> line
-------------------
-----------------------
-- circles --
-----------------------
function regular_polygon:incircle()
	return circle:new(self.center, projection_(self.vertices[1], self.vertices[2], self.center))
end
-------------------
-- Result -> triangle
-------------------

-------------------
-- Result -> miscellaneous
-------------------
function regular_polygon:name(nm)
	for k, v in ipairs(self.vertices) do
		z[nm .. k] = v
	end
end

return regular_polygon
