-- tkz_elements_line.lua
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

-- -------------------------------------------------------------------------
--                           Lines
-- -------------------------------------------------------------------------
line = {}
-- Function to create a new line object with two points za and zb.
function line:new(za, zb)
    local type = 'line'
    local mid = (za + zb) / 2
    local north_pa = rotation_(za, math.pi / 2, zb)
    local south_pa = rotation_(za, -math.pi / 2, zb)
    local north_pb = rotation_(zb, -math.pi / 2, za)
    local south_pb = rotation_(zb, math.pi / 2, za)
    local west = rotation_(za, math.pi / 2, north_pa)
    local east = rotation_(zb, math.pi / 2, south_pb)
    local slope = angle_normalize_(point.arg(zb - za))
    local length = point.mod(zb - za)
    local vec = vector:new(za, zb)
    local li = {
        pa = za,
        pb = zb,
        north_pa = north_pa,
        south_pa = south_pa,
        west = west,
        east = east,
        north_pb = north_pb,
        south_pb = south_pb,
        slope = slope,
        mid = mid,
        type = type,
        vec = vec,
        length = length
    }
    setmetatable(li, self)
    self.__index = self
    return li
end

-------------------
-- Résultats -> réel
-------------------

-- Calculate the distance between a point and a line
function line:distance(pt)   
    return point.mod(projection(self, pt) - pt)
end

-------------------
-- Résultats -> booléen
-------------------

-- Vérifie si un point est sur la ligne (hors segment)
function line:in_out(pt)
    return math.abs((pt - self.pa) ^ (pt - self.pb)) <= tkz_epsilon
end

-- Vérifie si un point est sur le segment de la ligne
function line:in_out_segment(pt)
    return point.mod(pt - self.pa) + point.mod(pt - self.pb) - point.mod(self.pb - self.pa) <= tkz_epsilon
end

-- Vérifie si deux lignes sont parallèles
function line:is_parallel(L)
    return math.abs(self.slope - L.slope) < tkz_epsilon
end

-- Vérifie si deux lignes sont orthogonales
function line:is_orthogonal(L)
    local alpha = angle_between_vectors(self.pa, self.pb, L.pa, L.pb)
    return math.abs(alpha - math.pi / 2) < tkz_epsilon
end

-- Vérifie si un point est équidistant des deux points définissant la ligne
function line:is_equidistant(p)
    return math.abs(point.mod(self.pa - p) - point.mod(self.pb - p)) < tkz_epsilon
end
-------------------
-- Résultats -> point
-------------------

-- Calcule le barycentre de deux points sur la ligne avec les poids ka et kb
function line:barycenter(ka, kb)
    return barycenter_({self.pa, ka}, {self.pb, kb})
end

-- Calcule un point sur la ligne donné t (t=0 -> A, t=1 -> B, t=AM/AB)
function line:point(t)
    return barycenter_({self.pa, 1 - t}, {self.pb, t})
end

-- Calcule le milieu du segment
function line:midpoint()
    return (self.pa + self.pb) / 2
end

-- Calcule le point d'intensité harmonique interne à la ligne
function line:harmonic_int(pt)
    return div_harmonic_int_(self.pa, self.pb, pt)
end

-- Calcule le point d'intensité harmonique externe à la ligne
function line:harmonic_ext(pt)
    return div_harmonic_ext_(self.pa, self.pb, pt)
end

-- Calcule le point d'intensité harmonique des deux côtés à partir du point k
function line:harmonic_both(k)
    return div_harmonic_both_(self.pa, self.pb, k)
end

-- Retourne le point correspondant au ratio d'or sur la ligne
function line:gold_ratio()
    return self.pa + (self.pb - self.pa) * tkzinvphi
end

-- Normalise la ligne (point à une unité de distance)
function line:normalize()
    return self.pa + (self.pb - self.pa) / point.mod(self.pb - self.pa)
end

-- Normalise inversement la ligne
function line:normalize_inv()
    return normalize_(self.pb, self.pa)
end

-- Calcule un point à l'est de la ligne à une distance d spécifiée
function line:_east(d)
    d = d or 1
    return self.pb + d / self.length * (self.pb - self.pa)
end

-- Calcule un point à l'ouest de la ligne à une distance d spécifiée
function line:_west(d)
    d = d or 1
    return self.pa + d / self.length * (self.pa - self.pb)
end

-- Calcule un point au nord de pa sur la ligne à une distance d
function line:_north_pa(d)
    d = d or 1
    return d / self.length * (self.north_pa - self.pa) + self.pa
end

-- Calcule un point au sud de pa sur la ligne à une distance d
function line:_south_pa(d)
    d = d or 1
    return d / self.length * (self.south_pa - self.pa) + self.pa
end

-- Calcule un point au sud de pb sur la ligne à une distance d
function line:_south_pb(d)
    d = d or 1
    return d / self.length * (self.south_pb - self.pb) + self.pb
end

-- Calcule un point au nord de pb sur la ligne à une distance d
function line:_north_pb(d)
    d = d or 1
    return d / self.length * (self.north_pb - self.pb) + self.pb
end

-- Rapporte un point sur la ligne à une distance d de pa (optionnellement modifié par pt)
function line:report(d, pt)
    if not self.length or self.length == 0 then
        tex.error("self.length must be non-zero")
    end
    local t = d / self.length
    local result = barycenter_({self.pa, 1 - t}, {self.pb, t})
    if pt then
        return result + pt - self.pa
    else
        return result
    end
end

-- Vérifie la colinéarité d'un point pt par rapport à la ligne (avec un facteur k si spécifié)
function line:colinear_at(pt, k)
    if k == nil then
        return colinear_at_(self.pa, self.pb, pt, 1)
    else
        return colinear_at_(self.pa, self.pb, pt, k)
    end
end

-------------------
-- Transformations
-------------------

-- Translation d'un point donné selon la direction de la ligne (pb - pa)
function line:translation_pt(pt)
    return translation_(self.pb - self.pa, pt)
end

-- Translation d'un objet de type cercle selon la direction de la ligne
function line:translation_C(obj)
    local pa = obj.center
    local pb = obj.through
    local x, y = set_translation_(self.pb - self.pa, pa, pb)
    return circle:new(x, y)
end

-- Translation d'un objet de type triangle selon la direction de la ligne
function line:translation_T(obj)
    local pa = obj.pa
    local pb = obj.pb
    local pc = obj.pc
    local x, y, z = set_translation_(self.pb - self.pa, pa, pb, pc)
    return triangle:new(x, y, z)
end

-- Translation d'un objet de type ligne selon la direction de la ligne
function line:translation_L(obj)
    local pa = obj.pa
    local pb = obj.pb
    local x, y = set_translation_(self.pb - self.pa, pa, pb)
    return line:new(x, y)
end

-- Fonction générale pour effectuer une translation d'un ou plusieurs objets
function line:translation(...)
    local tp = table.pack(...)  -- Regroupe tous les arguments dans une table
    local obj = tp[1]  -- Le premier objet est récupéré
    local nb = tp.n  -- Nombre d'objets à traiter

    -- Si un seul objet est passé
    if nb == 1 then
        if obj.type == "point" then
            return translation_(self.pb - self.pa, obj)  -- Traduction du point
        elseif obj.type == "line" then
            return self:translation_L(obj)  -- Traduction de la ligne
        elseif obj.type == "triangle" then
            return self:translation_T(obj)  -- Traduction du triangle
        elseif obj.type == "circle" then
            return self:translation_C(obj)  -- Traduction du cercle
        else
            tex.error("Unsupported object type for translation")
        end
    else
        -- Si plusieurs objets sont passés, on les traduit un par un
        local t = {}
        for i = 1, nb do
            -- Traduction de chaque objet avec le vecteur de translation
            table.insert(t, translation_(self.pb - self.pa, tp[i]))
        end
        return table.unpack(t)  -- Retourne les objets traduits
    end
end

-- Fonction pour effectuer une translation d'un objet en utilisant la direction de la ligne
function line:set_translation(...)
    return set_translation_(self.pb - self.pa, ...)
end

function line:projection_ll(...)
  local tp = table.pack(...)
  local c, d = tp[1].pa, tp[1].pb  -- c et d sont les deux points qui définissent la ligne de projection
  local obj = tp[2]  -- L'objet à projeter
  local nb = tp.n  -- Nombre d'objets passés en paramètres
  
  if nb == 2 then
    -- Projection de la ligne sur l'objet
    return projection_ll_(self.pa, self.pb, c, d, obj)
  else
    local t = {}
    for i = 2, tp.n do
      -- Projection de chaque objet sur la ligne
      table.insert(t, projection_ll_(self.pa, self.pb, c, d, tp[i]))
    end
    return table.unpack(t)  -- Retourne les résultats de la projection pour tous les objets
  end
end


function line:set_projection_ll(...)
  local tp = table.pack(...)
  local c, d = tp[1].pa, tp[1].pb  -- c et d sont les deux points définissant la ligne de projection
  local t = {}
  
  for i = 2, tp.n do
    -- Projection de chaque objet sur la ligne
    table.insert(t, projection_ll_(self.pa, self.pb, c, d, tp[i]))
  end
  return table.unpack(t)  -- Retourne les résultats de la projection pour tous les objets
end



function line:projection(...)
    local tp = table.pack(...)  -- Regroupe les arguments dans une table
    local obj = tp[1]           -- Récupère le premier objet
    local nb = tp.n             -- Nombre d'objets à traiter
    
    -- Si un seul objet est passé
    if nb == 1 then
        return projection_(self.pa, self.pb, obj)  -- Projette l'objet sur la ligne
    else
        local t = {}
        -- Si plusieurs objets sont passés, on projette chacun d'eux sur la ligne
        for i = 1, tp.n do
            table.insert(t, projection_(self.pa, self.pb, tp[i]))  -- Projection de chaque objet
        end
        return table.unpack(t)  -- Retourne les projections
    end
end

function line:set_projection(...)
    local tp = table.pack(...)  -- Regroupe les arguments dans une table
    local t = {}
    -- Projette chaque objet sur la ligne
    for i = 1, tp.n do
        table.insert(t, projection_(self.pa, self.pb, tp[i]))  -- Projection de chaque objet
    end
    return table.unpack(t)  -- Retourne les projections
end


function line:symmetry_axial_L( obj )
  local pa = obj.pa
  local pb = obj.pb
  local x, y = self:set_reflection(pa, pb)
  return line:new(x, y)
end

function line:symmetry_axial_T( obj )
  local pa = obj.pa
  local pb = obj.pb
  local pc = obj.pc
  local x, y, z = self:set_reflection(pa, pb, pc)
  return triangle:new(x, y, z)
end


function line:symmetry_axial_C( obj )
  local pa = obj.center
  local pb = obj.through
  local x, y = self:set_reflection(pa, pb)
  return circle:new(x, y)
end


function line:reflection(...)
  local tp = table.pack(...)
  local obj = tp[1]
  local nb = tp.n
  
  if nb == 1 then
    if obj.type == "point" then
      return symmetry_axial_(self.pa, self.pb, obj)
    elseif obj.type == "line" then
      return self:symmetry_axial_L(obj)
    elseif obj.type == "triangle" then
      return self:symmetry_axial_T(obj)
    else
      return self:symmetry_axial_C(obj)
    end
  else
    local t = {}
    for i = 1, tp.n do
      table.insert(t, symmetry_axial_(self.pa, self.pb, tp[i]))
    end
    return table.unpack(t)
  end
end

function line:set_reflection(...)
  return set_symmetry_axial_(self.pb, self.pa, ...)
end

function line:affinity(...)
  local tp = table.pack(...)
  local c,d = tp[1].pa,tp[1].pb
  local k = tp[2]
  local obj = tp[3]
  local nb = tp.n
  if nb == 3 then
       return  affinity_(self.pa,self.pb,c,d,k,obj)
       else
         local  t = {}
        for i=3,tp.n do
            table.insert( t , affinity_ (self.pa, self.pb,c,d, k,tp[i])  )
         end
       return table.unpack ( t )
     end
end

function line:set_affinity(...)
  local tp = table.pack(...)  -- Rassemble tous les arguments passés dans la table tp
  local c, d = tp[1].pa, tp[1].pb  -- Extrait les deux points de la ligne de référence (tp[1])
  local k = tp[2]  -- Le coefficient de l'affinité
  local t = {}

  -- Applique l'affinité pour chaque objet passé en paramètre (à partir du 3ème objet)
  for i = 3, tp.n do
    table.insert(t, affinity_(self.pa, self.pb, c, d, k, tp[i]))  -- Applique l'affinité sur chaque objet
  end
  
  return table.unpack(t)  -- Retourne les objets transformés
end
-------------------
-- Result -> line
-------------------
function line:ll_from( pt )
	return line:new(pt, pt + self.pb - self.pa) 
end

function line:ortho_from( pt )
	return line:new(pt + (self.pb - self.pa) * point(0, -1),
                  pt + (self.pb - self.pa) * point(0, 1))
end

function line:mediator() 
   local m = midpoint_(self.pa, self.pb)
  return line:new(rotation_(m, -math.pi / 2, self.pb), rotation_(m, math.pi / 2, self.pb)) 
end

function line:perpendicular_bisector()
   local m = midpoint_(self.pa, self.pb)  -- Calcule le milieu de la ligne
   return line:new(rotation_ (m,-math.pi / 2, self.pb), rotation_(m, math.pi / 2, self.pb))
   -- Crée une ligne passant par les deux points de la rotation de 90° autour du milieu
end

function line:swap_line()
  self.pa, self.pb = self.pb, self.pa  -- Inverse les points pa et pb
  return line:new(self.pa, self.pb)  -- Crée et retourne la ligne avec les points permutés
end

-------------------
-- Result -> circle
-------------------

function line:circle(swap)
  swap = swap or false
  if swap then
    return circle:new(self.pb, self.pa)
  else
    return circle:new(self.pa, self.pb)
  end
end

function line:circle_swap()   
    return circle:new(self.pb,self.pa)
end

function line:diameter()
   local c = midpoint_(self.pa, self.pb)
  return circle:new(c, self.pb)
end

function line:apollonius(k)
   local z1,z2,c
    z1 = barycenter_({self.pa, 1}, {self.pb, k})
    z2 = barycenter_({self.pa, 1}, {self.pb, -k})
    c = midpoint_(z1, z2)
  return circle:new(c, z2)
end

function line:test(x,y) 
  
end

-- Circle tangent to a line passing through two points
-- In general, there are two solutions
function line:c_l_pp(a, b) -- a and b on the same side
  -- Initialisation
  local lab = line:new(a, b) -- Line through a and b
  local Cab = circle:diameter(a, b) -- Circle with a and b diameters
  local i = intersection(lab, self) -- Intersection with current line
 
  -- One point on the line  (a)
   if self:in_out(a) and not self:in_out(b) 
   then
    local lmed = lab : mediator()
    local laperp = self:ortho_from(a)
    local o = intersection(lmed,laperp)
    return circle:new(o,a),
           circle:new(o,a)
    end
      -- One point on the line  (b)
    if self:in_out(b) and not self:in_out(a) then
     local lmed  = lab:mediator()
     local laperp = self:ortho_from(b)
     local o = intersection(lmed, laperp)
     return circle:new(o, b),
            circle:new(o, b)
    end    
  -- Check: if the intersection exists and lies on the segment [a, b].
   if i and lab:in_out_segment(i) then
    return nil, nil -- No circle is possible
   end

  -- If the current line is orthogonal to lab
  if self:is_orthogonal(lab) then
    local lmed = lab:mediator() 
    local m = midpoint(a, b) 
    local r = length(m, i) 
    local pt1 = lab:isosceles_s(r)
    local pt2 = lab:isosceles_s(r, true)
    return circle:new(pt1, a),
           circle:new(pt2, a)
  end

  -- If the two lines are parallel
  if lab:is_parallel(self) then
    local mid = midpoint(a, b) -- Midpoint of segment [a, b]
    local proj = self:projection(mid) -- Mid projection on the running line

    return circle:new(circum_center_(a, b, proj), proj),
           circle:new(circum_center_(a, b, proj), proj)
  end

  -- General case
  local t = Cab:tangent_from(i).pb
  local x, y = intersection(self, circle:new(i, t))
  return circle:new(intersection(self:ortho_from(x), lab:mediator()), x),
         circle:new(intersection(self:ortho_from(y), lab:mediator()), y)
end

-- Circle tangent to two straight lines passing through a given point
function line:c_ll_p(a, p)
  
  -- Compute the bisector of the triangle formed by self.pa, self.pb, and a
  local lbi = bisector(self.pa, self.pb, a)

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
    return circle:new(intersection_ll_(x, t1, self.pa, p), t1),
           circle:new(intersection_ll_(y, t2, self.pa, p), t2)
  else
    -- Reflection of p across the bisector
    local q = lbi : reflection (p)

    -- Compute circles from the Wallis construction
    local c1, c2 = self:c_l_pp(p, q)

    -- Return two circles with centers and points on their circumference
    return  c1,c2
  end
end

----------------------
-- Result -> triangle
----------------------
function line:equilateral(swap)
    swap = swap or false
    if swap then
        return triangle:new(self.pa, self.pb, rotation_(self.pa, -math.pi / 3, self.pb))
    else
        return triangle:new(self.pa, self.pb, rotation_(self.pa, math.pi / 3, self.pb))
    end
end

function line:isosceles(phi, swap)
  local pta, ptb
  swap = swap or false  -- Si 'swap' est nil ou false, il est défini comme false
  if swap then
    -- Si 'swap' est vrai, effectuer les rotations dans un sens inverse
    pta = rotation_(self.pa, -phi, self.pb)
    ptb = rotation_(self.pb, phi, self.pa)
    return triangle : new(self.pa, self.pb, intersection_ll_(self.pa, pta, self.pb, ptb))
  else
    -- Si 'swap' est faux, effectuer les rotations normales
    pta = rotation_(self.pa, phi, self.pb)
    ptb = rotation_(self.pb, -phi, self.pa)
    return triangle : new(self.pa, self.pb, intersection_ll_(self.pa, pta, self.pb, ptb))
  end
end

line.isosceles_a = line.isosceles  -- Alias pour la méthode isosceles

function line:isosceles_s(a, swap)
  local c1, c2, pta, ptb, pt1, pt2
  -- Création des cercles de rayon 'a' centrés en self.pa et self.pb
  c1 = circle : radius (self.pa, a)
  c2 = circle : radius (self.pb, a)
  
  -- Calcul des points d'intersection des deux cercles
  pta, ptb = intersection_cc(c1, c2)
  
  -- On compare les angles pour déterminer lequel des deux points d'intersection est le plus petit
  if get_angle(self.pa, self.pb, pta) < get_angle(self.pa, self.pb, ptb) then
    pt1 = pta
    pt2 = ptb
  else
    pt1 = ptb
    pt2 = pta
  end
  
  -- Si 'swap' est vrai, on retourne le triangle avec pt2, sinon avec pt1
  swap = swap or false
  if swap then
    return triangle : new (self.pa, self.pb, pt2)
  else
    return triangle : new (self.pa, self.pb, pt1)
  end
end

function line:two_angles(alpha, beta, swap)
    local pta, ptb, pt
    swap = swap or false
    
    if swap then
        pta = rotation_(self.pa, -alpha, self.pb)
        ptb = rotation_(self.pb, beta, self.pa)
    else
        pta = rotation_(self.pa, alpha, self.pb)
        ptb = rotation_(self.pb, -beta, self.pa)
    end
    
    pt = intersection_ll_(self.pa, pta, self.pb, ptb)
    return triangle:new(self.pa, self.pb, pt)
end


function line:school(swap)
   local pta, ptb, pt
   swap = swap or false

   if swap then
       pta = rotation_(self.pa, -math.pi / 6, self.pb)
       ptb = rotation_(self.pb, math.pi / 3, self.pa)
   else
       pta = rotation_(self.pa, math.pi / 6, self.pb)
       ptb = rotation_(self.pb, -math.pi / 3, self.pa)
   end

   pt = intersection_ll_(self.pa, pta, self.pb, ptb)
   return triangle:new(self.pa, self.pb, pt)
end


function line:half(swap)
   local x, pt
   x = midpoint_(self.pa, self.pb)
   swap = swap or false

   if swap then
       pt = rotation_(self.pb, math.pi / 2, x)
   else
       pt = rotation_(self.pb, -math.pi / 2, x)
   end

   return triangle:new(self.pa, self.pb, pt)
end

function line:sss(a, b, swap)
   local pta, ptb, i, j
   swap = swap or false

   pta = self.pa + point(a, 0)
   ptb = self.pb + point(-b, 0)

   i, j = intersection_cc_(self.pa, pta, self.pb, ptb)

   if swap then
       return triangle:new(self.pa, self.pb, j)
   else
       return triangle:new(self.pa, self.pb, i)
   end
end

function line:ssa(a, phi, swap)
    local x, y, i, j
    swap = swap or false

    x = rotation_(self.pb, -phi, self.pa)
    y = self.pa + polar_(a, self.slope)

    i, j = intersection_lc_(self.pb, x, self.pa, y)

    if swap then
        return triangle:new(self.pa, self.pb, j)
    else
        return triangle:new(self.pa, self.pb, i)
    end
end

function line:sas(a, phi, swap)
    local x, pt
    swap = swap or false

    x = self.pa + polar_(a, self.slope)

    if swap then
        pt = rotation_(self.pa, -phi, x)
    else
        pt = rotation_(self.pa, phi, x)
    end

    return triangle:new(self.pa, self.pb, pt)
end

function line:asa(alpha, beta, swap)
    local pta, ptb, pt
    swap = swap or false

    if swap then
        pta = rotation_(self.pa, -alpha, self.pb)
        ptb = rotation_(self.pb, beta, self.pa)
    else
        pta = rotation_(self.pa, alpha, self.pb)
        ptb = rotation_(self.pb, -beta, self.pa)
    end

    pt = intersection_ll_(self.pa, pta, self.pb, ptb)
    return triangle:new(self.pa, self.pb, pt)
end

--------------------------
---- sacred triangles ----
--------------------------

function line:gold(swap)
    local pt
    swap = swap or false

    if swap then  
        pt = rotation_(self.pa, -math.pi / 2, self.pb)
    else
        pt = rotation_(self.pa, math.pi / 2, self.pb)
    end
    
    return triangle:new(self.pa, self.pb, self.pa + (pt - self.pa) * tkzinvphi)
end

function line:sublime(swap)
    local pta, ptb, pt
    swap = swap or false
    local angle = 2 * math.pi / 5

    if swap then  
        pta = rotation_(self.pa, -angle, self.pb)
        ptb = rotation_(self.pb, angle, self.pa)
    else
        pta = rotation_(self.pa, angle, self.pb)
        ptb = rotation_(self.pb, -angle, self.pa)
    end

    pt = intersection_ll_(self.pa, pta, self.pb, ptb)
    return triangle:new(self.pa, self.pb, pt)
end

line.euclid = line.sublime

function line:euclide(swap)
    swap = swap or false
    local angle = math.pi / 5
    return triangle:new(self.pa, self.pb, rotation_(self.pa, swap and -angle or angle, self.pb))
end

function line:divine(swap)
    swap = swap or false
    local angle = math.pi / 5
    local pta = rotation_(self.pa, swap and -angle or angle, self.pb)
    local ptb = rotation_(self.pb, swap and angle or -angle, self.pa)
    local pt = intersection_ll_(self.pa, pta, self.pb, ptb)
    return triangle:new(self.pa, self.pb, pt)
end

function line:cheops(swap)
    swap = swap or false
    local m = midpoint_(self.pa, self.pb)
    local n = rotation_(m, swap and math.pi / 2 or -math.pi / 2, self.pa)
    local pt = m + (n - m) * tkzsqrtphi
    return triangle:new(self.pa, self.pb, pt)
end

function line:egyptian(swap)
    swap = swap or false
    local n = rotation_(self.pb, swap and math.pi / 2 or -math.pi / 2, self.pa)
    local pt = self.pb + (n - self.pb) / point.mod(n - self.pb) * self.length * 0.75
    return triangle:new(self.pa, self.pb, pt)
end

line.pythagoras = line.egyptian
line.isis = line.egyptian
line.golden = line.sublime
line.golden_gnomon = line.divine

------------------------------
-- Résultat -> carré
------------------------------
function line:square(swap)
    swap = swap or false
    return square:side(self.pa, self.pb, swap and indirect or nil)
end


return line