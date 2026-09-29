-- tkz_elements_circles.lua
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
circle = {}
function circle: new (c, t) -- c --> center t --> through
   local type              = 'circle'
   local ct                = line :new (c,t) 
   local opp               = antipode_ (c,t)
   local radius            = point.abs (c - t)
   local south             = c - point (0,radius)
   local east              = c + point (radius,0)
   local north             = c + point (0,radius)
   local west              = c - point (radius,0)
   local perimeter         = 2 * math.pi * radius
   local area              = 4 * math.pi * radius*radius
   local cir = { center      = c, 
               through     = t, 
               ct          = ct,
               opp         = opp,
               radius      = radius,
               south       = south,
               east        = east,
               north       = north,
               west        = west,
               type        = type,
               perimeter   = perimeter,
               area        = area}
   setmetatable(cir, self)
   self.__index = self
   return cir
end
-- other definition

function circle:radius(center, radius)
    return circle:new(center, center + point(radius, 0))
end

function circle:diameter(za, zb)
    return circle:new(midpoint_(za, zb), zb)
end
-----------------------
-- boolean --
-----------------------
function circle:in_out(pt)
    return math.abs(point.abs(pt - self.center) - self.radius) < tkz_epsilon
end

function circle:in_out_disk(pt)
    return point.abs(pt - self.center) <= self.radius
end

function circle:circles_position (C)
   return circles_position_ (self.center,self.radius,C.center,C.radius)
end

function circle:is_tangent(l)
  local a, b = intersection(self, l)
  -- Checks whether the intersection produces valid points
  if not a or not b then
    return false
  end
  -- Checks whether the distance between the two intersection points is less than a given tolerance
  return (point.abs(b - a) < tkz_epsilon)
end

-----------------------
-- real --
-----------------------
function circle:power(pt)
    local d = point.abs(self.center - pt)
    return d * d - self.radius * self.radius
end
-----------------------
-- points --
-----------------------
function circle: antipode(pt)
   return 2 * self.center - pt
end

function circle:set_inversion(...)
	local tp = table.pack(...)
	local i
  local t = {}
	for i=1,tp.n do
        table.insert(t, inversion_( self.center, self.through, tp[i])) 
	end
  return table.unpack(t)
end

function circle:midarc(z1,z2)
   local phi = 0.5 * get_angle (self.center, z1, z2)
   return rotation_(self.center, phi, z1)
end

function circle:point(t)
   local phi = 2 * t * math.pi
   return rotation_ (self.center, phi, self.through) 
end

function circle:random_pt(lower, upper)
    -- Initialisation du générateur de nombres aléatoires
    math.randomseed(os.time() + math.random())

    -- Génération d'un angle aléatoire dans l'intervalle [lower, upper]
    local phi = lower + math.random() * (upper - lower)

    -- Calcul des coordonnées du point aléatoire sur le cercle
    return point(
        self.center.re + self.radius * math.cos(phi),
        self.center.im + self.radius * math.sin(phi)
    )
end

function circle:internal_similitude(C)
    return internal_similitude_(self.center, self.radius, C.center, C.radius)
end

function circle:external_similitude(C)
    return external_similitude_(self.center, self.radius, C.center, C.radius)
end

-----------------------
-- lines --
-----------------------
function circle:tangent_at(pt)
    return line:new(
        rotation_(pt, math.pi / 2, self.center), 
        rotation_(pt, -math.pi / 2, self.center)
    )
end
 
function circle:tangent_from(pt)
    local t1, t2 = tangent_from_(self.center, self.through, pt)
    return line:new(pt, t1), line:new(pt, t2)
end

function circle:radical_axis(C)
    local t1, t2
    if self.radius > C.radius then
        t1, t2 = radical_axis_(self.center, self.through, C.center, C.through)
    else
        t1, t2 = radical_axis_(C.center, C.through, self.center, self.through)
    end
    return line:new(t1, t2)
end

function circle:polar(p)
    local q = self:inversion(p)
    local qa = (p - q):orthogonal(1):at(q)
    local qb = (q - p):orthogonal(1):at(q)
    return line:new(qa, qb)
end

function circle:radical_center(C1, C2)
    if C2 == nil then
        if self.radius > C1.radius then
            return radical_center_(self.center, self.through, C1.center, C1.through)
        else
            return radical_center_(C1.center, C1.through, self.center, self.through)
        end
    else
        return radical_center3(self, C1, C2)
    end
end

function circle:radical_circle(C1, C2)
    local rc = self:radical_center(C1, C2)
    if C2 == nil then
        return self:orthogonal_from(rc)
    else
        return C1:orthogonal_from(rc)
    end
end
 

function circle:external_tangent(C)
    local i, t1, t2, k, T1, T2
    -- Find the barycenter of the two circles
    i = barycenter_({C.center, self.radius}, {self.center, -C.radius})
    
    -- Calculate the tangents from the circle to the point of intersection
    t1, t2 = tangent_from_(self.center, self.through, i)
    
    -- Calculate the scaling factor for the homothety
    k = point.mod((C.center - i) / (self.center - i))
    
    -- Apply homothety to the tangents
    T1 = homothety_(i, k, t1)
    T2 = homothety_(i, k, t2)
    
    -- Return the two tangent lines
    return line:new(t1, T1), line:new(t2, T2)
end

function circle:internal_tangent(C)
    local i, t1, t2, k, T1, T2
    -- Find the barycenter of the two circles with opposite signs for radii
    i = barycenter_({C.center, self.radius}, {self.center, C.radius})
    
    -- Calculate the tangents from the circle to the point of intersection
    t1, t2 = tangent_from_(self.center, self.through, i)
    
    -- Calculate the scaling factor for the homothety
    k = -point.mod((C.center - i) / (self.center - i))
    
    -- Apply homothety to the tangents
    T1 = homothety_(i, k, t1)
    T2 = homothety_(i, k, t2)
    
    -- Return the two tangent lines
    return line:new(t1, T1), line:new(t2, T2)
end
 
function circle:common_tangent(C)
    local o, s1, s2, t1, t2
    
    -- Calcul de la similitude externe entre les deux cercles
    o = external_similitude_(self.center, self.radius, C.center, C.radius)
    
    if self.radius < C.radius then
        -- Si le rayon de 'self' est plus petit que celui de 'C'
        t1, t2 = tangent_from_(C.center, C.through, o)  -- Tangentes depuis le cercle C
        s1, s2 = tangent_from_(self.center, self.through, o)  -- Tangentes depuis 'self'
        
        -- Retourner les tangentes dans un ordre spécifique
        return s1, t1, t2, s2
    else
        -- Si le rayon de 'self' est plus grand ou égal à celui de 'C'
        s1, s2 = tangent_from_(C.center, C.through, o)  -- Tangentes depuis le cercle C
        t1, t2 = tangent_from_(self.center, self.through, o)  -- Tangentes depuis 'self'
        
        -- Retourner les tangentes dans un ordre spécifique
        return s1, t1, t2, s2
    end
end
-----------------------
 -- circles --
-----------------------
function circle:orthogonal_from(pt)
    -- Calcul des tangentes à partir du point 'pt'
    local t1, t2 = tangent_from_(self.center, self.through, pt)
    
    -- Retourne un cercle avec le centre en 'pt' et une des tangentes comme rayon
    return circle:new(pt, t1)
end

function circle:orthogonal_through(pta, ptb)
    -- Retourne un cercle défini par l'orthogonale passant par 'pta' et 'ptb'
    local o = orthogonal_through_(self.center, self.through, pta, ptb)
    return circle:new(o, pta)
end

function circle:inversion_L(L)
    -- Vérifie si le centre du cercle est à l'intérieur ou à l'extérieur de la ligne L
    if L:in_out(self.center) then
        return L  -- Retourne la ligne L inchangée si le centre est du bon côté
    else
        -- Calcul de la projection du centre sur la ligne L
        local p = L:projection(self.center)
        
        -- Inversion du point projeté par rapport au cercle défini par 'self.center' et 'self.through'
        local q = inversion_(self.center, self.through, p)
        
        -- Retourne un cercle avec le centre au milieu de 'self.center' et 'q' et comme rayon 'q'
        return circle:new(midpoint_(self.center, q), q)
    end
end

 function circle:inversion_C(C)
    local p, q, x, y, X, Y
    if C:in_out(self.center) then
        p = C:antipode(self.center)
        q = inversion_(self.center, self.through, p)
        x = ortho_from_(q, self.center, p)
        y = ortho_from_(q, p, self.center)
        return line:new(x, y)
    else
        x, y = intersection_lc_(self.center, C.center, C.center, C.through)
        X = inversion_(self.center, self.through, x)
        Y = inversion_(self.center, self.through, y)
        return circle:new(midpoint_(X, Y), X)
    end
 end
 
 function circle:inversion(...)
     local tp = table.pack(...)
     local obj = tp[1]
     local nb = tp.n
     if nb == 1 then
         if obj.type == "point" then
             return inversion_(self.center, self.through, obj)
         elseif obj.type == "line" then
             return self:inversion_L(obj)
         else
             return self:inversion_C(obj)
         end
     else
         local t = {}
         for i = 1, nb do
             table.insert(t, inversion_(self.center, self.through, tp[i]))
         end
         return table.unpack(t)
     end
 end
 
 function circle:draw()
     -- Récupère les coordonnées du centre et le rayon du cercle
     local x, y = self.center:get()
     local r = self.radius
    
     -- Format de la commande LaTeX pour dessiner le cercle
     local frmt = '\\draw (%0.3f,%0.3f) circle [radius=%0.3f];'
    
     -- Affiche la commande LaTeX en formatant les valeurs de x, y et r
     tex.sprint(string.format(frmt, x, y, r))
 end

 function circle:midcircle(C)
     -- Retourne le cercle médian entre 'self' et 'C'
     return midcircle_(self, C)
 end

-- -----------------------------------------------------------
-- Circle tangent to a circle passing through two points
function circle : c_c_pp(a,b)
  
  -- test If one point is inside the disk and the other is outside, there is no solution.
  if (self:in_out_disk(a) and not self:in_out_disk(b)) or  ( self:in_out_disk(b) and not self:in_out_disk(a)) then  
  tex.error("An error has occurred", {"Bad configuration. Only one point is in the disk"})
return end

-- Find the mediator of the current line
local  lab = line : new (a,b)
local  lmed = lab : mediator()

if self : is_tangent (lab) then
  local c = intersection (self,lab)
  local d = self : antipode (c)

  return circle:new (circum_circle_(a, b, d),a),
         circle:new (circum_circle_(a, b, d),a)
end 

-- pb are (AB) tgt to circle A and B equidistant of O tgt and equidistant
if lab : is_equidistant (self.center) then 
  local t1,t2 = intersection (lmed,self)
   return circle:new (circum_circle_(a, b, t1),t1),
          circle:new (circum_circle_(a, b, t2),t2)
else 
  -- Create a circumcircle passing through a, b, and a point on C
  local Cc = circle:new(circum_circle_(a, b, self.center), a)
  -- Find the intersection points of C and Cc
  local c, d = intersection(self, Cc)
  -- Create a line passing through the two intersection points
  local lcd = line:new(c, d)
  -- Find the intersection of the current line (self) with the line lcd
  local i = intersection(lab, lcd)
  -- Create tangents from the intersection point to C
  local lt, ltp = self:tangent_from(i)
  -- Get the tangent points
  local t, tp = lt.pb, ltp.pb
  -- Return two new circles tangent to C and passing through the tangent points
  return circle:new(intersection(lmed, line:new(self.center, t)), t),
         circle:new(intersection(lmed, line:new(self.center, tp)), tp)
end
end

-- Circle  tangent to two circles passing through a point
function circle:c_cc_p(C, p)
    -- Calcule la similitude externe entre les cercles 'self' et 'C'
    local i = self:external_similitude(C)
    
    -- Crée la ligne passant par les centres des cercles 'self' et 'C'
    local lofcenters = line:new(self.center, C.center)
    
    -- Trouve les intersections de la ligne avec 'self' et avec 'C'
    local u1, u2 = intersection(lofcenters, self)
    local v1, v2 = intersection(lofcenters, C)
    
    -- Trouve les tangentes communes entre 'self' et 'C'
    local u1, v1 = self:common_tangent(C)
    
    -- Calcule le cercle circonscrit passant par u1, v1 et p
    local o = circum_circle_(u1, v1, p)
    
    -- Trouve les intersections du cercle 'o' avec la ligne i et le point p
    local a, b = intersection_lc_(i, p, o, p)
    
    -- Si les deux intersections sont très proches, retourne un cercle défini par la ligne et l'intersection
    if (point.abs(a - b) < tkz_epsilon) then
        local li = line:new(i, p)
        return C:c_lc_p(li, a)
    else
        local q
        -- Résout le cas où p et q sont égaux
        if (point.abs(a - p) < tkz_epsilon) then
            q = b
        else
            q = a
        end
        
        -- Retourne le cercle défini par p et q
        return C:c_c_pp(p, q)
    end
end

-- Circle  tangent to one circle, on line and passing through a point
function circle:c_lc_p(l, p, inside)
    inside = inside or false  -- Définit la valeur par défaut de 'inside' si elle n'est pas fournie
    
    -- Vérifie si le point p est à l'intérieur ou à l'extérieur du cercle
    if self:in_out(p) then
        -- Trouve les intersections de la ligne avec les deux bords du cercle
        local t1 = intersection_ll_(self.north, p, l.pa, l.pb)
        local t2 = intersection_ll_(self.south, p, l.pa, l.pb)
        
        -- Trouve les lignes orthogonales aux tangentes
        local l1 = l:ortho_from(t1)
        local l2 = l:ortho_from(t2)
        
        -- Trouve les intersections de ces lignes avec le cercle
        local o1 = intersection_ll_(self.center, p, l1.pa, l1.pb)
        local o2 = intersection_ll_(self.center, p, l2.pa, l2.pb)
        
        -- Retourne les cercles définis par les points d'intersection
        return circle:new(o1, t1), circle:new(o2, t2)
    else
        -- Si le point p est à l'extérieur du cercle, on vérifie si p est dans ou hors de la ligne
        if l:in_out(p) then
            -- Calcule la projection de 'self.center' sur la ligne
            local i = l:projection(self.center)
            
            -- Trouve les lignes orthogonales passant par p
            local lortho = l:ortho_from(p)
            
            -- Trouve les points de rapport pour l'orthogonale
            local u = lortho:report(self.radius, p)
            local v = lortho:report(-self.radius, p)
            
            -- Trouve les médiateurs entre le centre du cercle et les points de rapport
            local ux, uy = mediator_(self.center, u)
            local vx, vy = mediator_(self.center, v)
            
            -- Trouve les intersections des médiateurs
            local o1 = intersection_ll_(u, v, ux, uy)
            local o2 = intersection_ll_(u, v, vx, vy)
            
            -- Retourne les cercles définis par les points d'intersection et p
            return circle:new(o1, p), circle:new(o2, p)
        else
            -- Cas général
            local u = self.north
            local v = self.south
            local h = intersection_ll_(u, v, l.pa, l.pb)
            
            if inside then
                -- Calcule le cercle circonscrit entre p, u et h
                local o = circum_circle_(p, u, h)
                
                -- Trouve l'intersection du cercle et retourne le résultat
                local q = intersection_lc_(p, v, o, p)
                return self:c_c_pp(p, q)
            else
                -- Si 'inside' est faux, on calcule l'autre cercle circonscrit
                local o = circum_circle_(p, v, h)
                
                -- Trouve l'intersection du cercle et retourne le résultat
                local q = intersection_lc_(u, p, o, v)
                return self:c_c_pp(p, q)
            end
        end
    end
end


return circle