-- tkz_elements_vectors.lua
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

-- ----------------------------------------------------------------------------
vector = {}
-- Constructor for creating a new vector
function vector:new(za, zb)
    local type          = 'vector'
    local slope         = angle_normalize_(point.arg(zb-za))
    local norm          = point.mod(zb-za)
    local mtx           = matrix:new { { za }, { zb } }
    local vect =  {tail    = za, 
                head    = zb,
                norm    = norm,
                mtx     = mtx,
                slope   = slope,
                type    = type }
    setmetatable(vect, self)
    self.__index = self
    return vect
end

function vector.__add(v1,v2)
  return v1 : add (v2)
end

function vector.__sub(v1,v2)
  return v1:add(v2:scale(-1))
end

function vector.__unm(v)
 return v:scale(-1)
end

function vector.__mul(r,v)
  return v : scale(r)
end
-- Normalize the vector (unit vector)
function vector: normalize  ()
   local z  = self.head-self.tail
   local d  = point.abs(z)
   local nz = point(z.re / d, z.im / d)
   return vector:new(self.tail, nz + self.tail)
end

  function vector: add (ve)
    return vector :new (self.tail,self.head+ve.head-ve.tail)
  end
-- Create an orthogonal vector 
function vector:orthogonal (d)
if d == nil then
   return vector : new (self.tail, rotation_(self.tail,math.pi/2,self.head))
else
  local z = self.tail+ point (d*math.cos(self.slope),d*math.sin(self.slope))
 return vector : new (self.tail, rotation_(self.tail,math.pi/2,z))
end
end

-- Scale the vector by a scalar
function vector:scale(d)
    local z = self.tail + point(d * self.norm * math.cos(self.slope), d * self.norm * math.sin(self.slope))
    return vector:new(self.tail, z)
end
 
function vector:at (zc)
     return vector:new(zc, zc + self.head - self.tail)
end

return vector
