.PS
# Planes.m4
# https://tex.stackexchange.com/questions/727666/gate-all-around-fet-gaafet-nanosheet-3d-illustration
threeD_init
NeedDpicTools

# These 3D diagrams are like many others: define the surface facets,
# use normal vectors to determine visibility, sort and plot the visible
# facets from back to front.

divert(-1)
#####################################################################
#                           Recover point coordinates
define(`triple',`x_[$1], y_[$1], z_[$1]')
#                           Store a point as x_[i], y_[i], z_[i]
define(`mktriple',
 `x_[$1] = $2
  y_[$1] = $3
  z_[$1] = $4 ')

#                           Normal vector to stored facet
define(`facetnormal',`cross3D(
 diff3D(triple((`$1')*3+1),triple((`$1')*3)),
 diff3D(triple((`$1')*3+2),triple((`$1')*3+1)))')

define(`facetcenter',`sprod3D(0.5,sum3D(triple($1*3),triple($1*3+2)))')

#                           Facets are rectangles; store NW, NE, SE corners
#                           `mkpfacet(index,NW2D,NE2D,-d)'
define(`mkpfacet',`
  mktriple((`$1')*3,     0,`$2'.x,`$2'.y) # This uses a right-hand set of
  mktriple((`$1')*3+1,   0,`$3'.x,`$3'.y) # coords with depth 1st value
  mktriple((`$1')*3+2,`$4',`$3'.x,`$3'.y)
  mktriple(0,facetnormal(`$1'))
  if dot3D(triple(0),View3D) < 0 then {
    mktriple((`$1')*3,`$4',`$3'.x,`$3'.y)
    mktriple((`$1')*3+2, 0,`$2'.x,`$2'.y) }
  ')

#                           View angles azimuth, elevation, rotation (degrees),
#                           Implicitly increments m4x
define(`mkthreeplanes',`
#mkthreeplanes( wd2h param, ht param, dpth param )
#                           Size parameters
  define(`m4a',`ifelse(`$1',,1.5,(`$1'))')
  define(`m4b',`ifelse(`$1',,0.4,(`$2'))')
  define(`m4d',`ifelse(`$1',,0.5,(`$3'))')
#                           Define intersecting lines in the plane
  A0: -m4a,-m4b; A1:  m4a,-m4b
  B0: Rot_(A0,120); B1: Rot_(A1,120)
  C0: Rot_(A0,240); C1: Rot_(A1,240)
  AB: intersect_(A0,A1,B0,B1)
  BC: intersect_(B0,B1,C0,C1)
  CA: intersect_(C0,C1,A0,A1)
#                           Define the 9 visible facets
  mkpfacet(m4inx,A0,CA,-m4d)
  mkpfacet(m4inx,CA,AB,-m4d)
  mkpfacet(m4inx,AB,A1,-m4d)

  mkpfacet(m4inx,B0,AB,-m4d)
  mkpfacet(m4inx,AB,BC,-m4d)
  mkpfacet(m4inx,BC,B1,-m4d)

  mkpfacet(m4inx,C0,BC,-m4d)
  mkpfacet(m4inx,BC,CA,-m4d)
  mkpfacet(m4inx,CA,C1,-m4d)
')

# Cuboid
# Requires centre plus three lengths plus 3 angles or equivalent, e.g. 9 dof
# plus, somehow, color information.  Implicitly increments m4cux
#
define(`mkcuboid',`# ( xC,yC,zC, wdh,hgt,depth, xrot,yrot,zrot)
 pushdef(`m4cubx',`define(`m4cux',ifdef(`m4cux',`incr(m4cux)',1))m4cux')
 pushdef(`xr',`$7') pushdef(`yr',`$8') pushdef(`zr',`$9') dnl
 pushdef(`wd2',ifelse(`$4',,boxwd,(`$4'))/2) dnl
 pushdef(`hg2',ifelse(`$5',,boxht,(`$5'))/2) dnl
 pushdef(`de2',ifelse(`$6',,boxwd,(`$6'))/2) dnl
 pushdef(`dx',`ifelse(`$1',,0,`$1')') pushdef(`dy',`ifelse(`$2',,0,`$2')') dnl
 pushdef(`dz',`ifelse(`$3',,0,`$3')') dnl
 ixc = m4cubx # Front:
 placecorner(ixc*3,de2,wd2,-hg2)      # FSE
 placecorner(ixc*3+1,de2,wd2,hg2)     # FNE
 placecorner(ixc*3+2,de2,-wd2,hg2)    # FNW
 mktriple(0,facetnormal(ixc))
 if dot3D(triple(0),View3D) < 0 then {
   placecorner(ixc*3,-de2,-wd2,-hg2)  # FSE
   placecorner(ixc*3+1,-de2,-wd2,hg2) # FNE
   placecorner(ixc*3+2,-de2,wd2,hg2)} # FNW
 ixc = m4cubx  # Right:
 placecorner(ixc*3,-de2,wd2,-hg2)     # RSE
 placecorner(ixc*3+1,-de2,wd2,hg2)    # RNE
 placecorner(ixc*3+2,de2,wd2,hg2)     # RNW
 mktriple(0,facetnormal(ixc))
 if dot3D(triple(0),View3D) < 0 then {
   placecorner(ixc*3,de2,-wd2,-hg2)   # LSE
   placecorner(ixc*3+1,de2,-wd2,hg2)  # LNE
   placecorner(ixc*3+2,-de2,-wd2,hg2)}# LNW
 ixc = m4cubx  # Top:
 placecorner(ixc*3,de2,wd2,hg2)       # TSE
 placecorner(ixc*3+1,-de2,wd2,hg2)    # TNE
 placecorner(ixc*3+2,-de2,-wd2,hg2)   # TNW
 mktriple(0,facetnormal(ixc))
 if dot3D(triple(0),View3D) < 0 then {
   placecorner(ixc*3,-de2,wd2,-hg2)   # USE U=underside
   placecorner(ixc*3+1,de2,wd2,-hg2)  # UNE
   placecorner(ixc*3+2,de2,-wd2,-hg2)}# UNW
 popdef(`m4cubx',`xr',`yr',`zr',`wd2',`hg2',`de2',`dx',`dy',`dz')
')
define(`rots',`rot3Dz(ifelse(zr,,0,(zr)*dtor_),rot3Dy(ifelse(yr,,0,(yr)*dtor_),
 rot3Dx(ifelse(xr,,0,(xr)*dtor_),`$1',`$2',`$3')))')
define(`placecorner',`mktriple(`$1',sum3D(dx,dy,dz,rots(`$2',`$3',`$4')))')

#                           Recover the 4th (SW) corner and draw
#                          `drawfacet(index,r,g,b)'
#                          `drawfacet(index,line attributes)'
define(`drawfacet',`
dnl print "`$0'($@)"
  SE[`$1']: project(triple((`$1')*3))
  NE[`$1']: project(triple((`$1')*3+1))
  NW[`$1']: project(triple((`$1')*3+2))
  SW[`$1']: NW[`$1']+SE[`$1']-NE[`$1']
  N[`$1']: 0.5 between NW[`$1'] and NE[`$1']
  C[`$1']: 0.5 between NW[`$1'] and SE[`$1']
  Line[`$1']: line from N[`$1'] to NE[`$1'] then to SE[`$1'] \
    then to SW[`$1'] then to NW[`$1'] then to N[`$1'] invis `$2'
  ')

#                           Shortcut `processfacets(nfacets)'
define(`processfacets',
 `indexfacets(`$1',nvisible)
  drawfacets(nvisible) ')

#                           Create nvisible, arrays dircos[1..nvisible],
#                           dist[1..nvisible], and index
#                           sorted[1..nvisible] of facets; then sort.
#                           Uses macros facetnormal(i) and facetcenter(i)
define(`indexfacets',`nvis = 0
  for i=1 to `$1' do {
    mktriple(0,facetnormal(i))
    dx = dot3D(triple(0),View3D)
    if dx > 0 then { nvis +=1
      dircos[nvis] = abs(dx/length3D(triple(0))) # dir cosine normal wrt View3D
      dist[nvis] = dot3D(facetcenter(i),View3D)  # distance along View3D
      sorted[nvis] = i }
    }; `$2' = nvis
  if nvis > 1 then { dpquicksort(dist,1,nvis,sorted) } ')

#                           Compute posefactor and color, then draw.
define(`drawfacets',
 `for i=1 to `$1' do {
    posefactor=sqrt(dircos[i]*i/(`$1'))
    ifdef(`facetcolor', facetcolor,
      mktriple(1,(2+posefactor)/3,(2+posefactor)/3,(2+posefactor)/3) )
    drawfacet(sorted[i],shaded rgbstring(triple(1)))
    }
  ifdef(`facetcolor',`popdef(`facetcolor')')
 ')
#####################################################################
divert(0)dnl

# Threeplanes
[
  setview( 10, 40 )
  define(`m4x',0)
  mkthreeplanes(3/2,0.4,1); nfacets = m4x
  pushdef(`facetcolor',`mktriple(1,max(0,1-2*dircos[sorted[i]]),
    dircos[sorted[i]],dircos[sorted[i]])')
  processfacets(nfacets)
  ]

  define setfacetcolor { dnl This reduces color saturation depending on pose
   mktriple(1,
     (2*($1)+posefactor)/3,(2*($2)+posefactor)/3,(2*($3)+posefactor)/3) }
  
# Transistor
[
  hsvtorgb(220,0.75,1, r1,g1,b1) # blueish
  hsvtorgb(60,0.75,1, r2,g2,b2) # greenish
  setview(-40, 20 )
  skale = 1/2
  footw = 5*skale
  footh = 0.5*skale
  footd = 3.5*skale
  cstripd = footd*0.3
  bludp = (footd-cstripd)/2
  twd = cstripd
  srch = 0.35*skale
  twh = 7.5*srch
  define(`footcolor',`0.45,0.45,0.45')
  define(`m4cux',0)
# ( xC,yC,zC, wd2h,hg2t,depth, xrot,yrot,zrot)
  mkcuboid(0,0,footh/2,footw,footh,footd)
  mkcuboid(0,0,footh+bludp/2,footw,bludp,cstripd)
  mkcuboid( footd/2-bludp/2,0,footh+bludp/2,footw,bludp,bludp)
  mkcuboid(-footd/2+bludp/2,0,footh+bludp/2,footw,bludp,bludp)
  mkcuboid(0,0,footh+bludp+twh/2,twd,twh,footd)
  shelfw = (footw-twd)/2
  for_(0,2,1,
   `mkcuboid(0,-footw/2+shelfw/2,footh+bludp+srch*(3/2+2*m4x),
      shelfw,srch,cstripd)
    mkcuboid(0, footw/2-shelfw/2,footh+bludp+srch*(3/2+2*m4x),
      shelfw,srch,cstripd) ')
  nfacets = m4cux
  pushdef(`facetcolor',
   `if sorted[i]<=6 then { setfacetcolor(footcolor) } \# first two blocks
    else { if sorted[i] <=12 then { setfacetcolor(r1,g1,b1) } \# blue blocks
    else { if sorted[i] <=15 then {setfacetcolor(r2,g2,b2) } \
    else { setfacetcolor(footcolor) }}}')
  indexfacets(nfacets,nvisible) # Tweak the sort:
    t = sorted[17]; sorted[17] = sorted[18]; sorted[18] = t
    t = sorted[10]; sorted[10] = sorted[6]; sorted[6] = t
  drawfacets(nvisible)
  ] with .sw at last [].se+(0.2,0)

.PE
