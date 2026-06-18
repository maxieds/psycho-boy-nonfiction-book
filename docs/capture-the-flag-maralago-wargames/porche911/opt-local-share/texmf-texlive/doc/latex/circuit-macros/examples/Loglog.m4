.PS
# Loglog.m4
gen_init
s_init(Loglog)
sinclude(tst.dim)
scale = 1/0.8

define(`rint',`sign(`$1')*int(abs(`$1')+.5)')
S:[
  horiz = 4
  vert = horiz*2/3
  tmax = 10
  tmin = 1
  vmax = 100
  vmin = 0.1
  tic = 0.08
  denv = log(vmax) - log(vmin)
  denh = log(tmax) - log(tmin)

  Origin: Here
  define(`coord',
    `Origin+((log(`$1')-log(tmin))/denh*horiz,(log(`$2')-log(vmin))/denv*vert)')

thinlines_
# Left axes and labels
  psset_(linecolor=gray)
  vm = log(vmin); if vm!=0 then { vm=rint(vm) }
  vM = log(vmax); if vM!=0 then { vM=rint(vM) }
  for i = vm to vM do {
    move to coord(tmin,exp(i))
    line right horiz
    s_box(\sf %g,exp(i)) rjust at last line.start ifgpic(`-(0.05,0)')
    if i < rint(log(vmax)) then {
      for j = 2 to 9 do {
        move to coord(tmin,j*exp(i))
        line right horiz
        if (j==2) || (j==5) then {
          s_box(\sf %g,j*exp(i)) rjust at last line.start ifgpic(`-(0.05,0)') }
        } } }

#Horizontal axis and labels
  tm = log(tmin); if tm!=0 then { tm=rint(tm) }
  tM = log(tmax); if tM!=0 then { tM=rint(tM) }
  for t = tm to tM do {
    move to coord(exp(t),vmin)
    line up vert
    s_box(\sf %g,exp(t)) below at last line.start ifgpic(`-(0,0.05)')
    if t < rint(log(tmax)) then {
      for j = 2 to 9 do { move to coord(j*exp(t),vmin)
        line up vert
        if (j==2) || (j==5) then {
          s_box(\sf %g,j*exp(t)) below at last line.start ifgpic(`-(0,0.05)') }
        } } }
  psset_(linecolor=black)

# arrow from Origin up vert chop 0 chop -.1
  line from Origin up vert
  s_box($y(t)$) at Origin+(-.1,.5*vert) rjust

# arrow from Origin right horiz chop 0 chop -.1
  line from Origin right horiz
  s_box($t$) at Origin+(.5*horiz,-.1) below

thicklines_
  alpha = 2.5
  beta = 3.0
  tm = max(tmin,(vmin/alpha)^(1/beta))
  tM = min(tmax,(vmax/alpha)^(1/beta))
  line from coord(tm,alpha*tm^beta) to coord(tM,alpha*tM^beta)
  f_box(invis fill_(1),`$y(t) = %g\,t^{%g}$',alpha,beta) \
    with .sw at coord(2.1,11)

  alpha = 0.05
  beta = 2.0
  tm = max(tmin,(vmin/alpha)^(1/beta))
  tM = min(tmax,(vmax/alpha)^(1/beta))
  line from coord(tm,alpha*tm^beta) to coord(tM,alpha*tM^beta)
  f_box(invis fill_(1),`$y(t) = %g\,t^{%g}$',alpha,beta) \
    with .se at coord(4.6,1.1)

]

#.PE
#.PS
# ex06.m4
#gen_init

[
F: box invis wid 1.6i ht 1.8i
E: box invis wid F.wid ht F.ht
G: box invis wid 1i ht F.ht

  ell = F.ht-0.6i
  r = 0.3i
  offset = 8bp__
  hatch = 0.1i
  dhs = hatch * sqrt(2)
  qmell = F.ht - ell
  kwid = F.wid-qmell-r

  hatchbox(wid G.e.x-F.w.x ht F.ht,hatch) with .sw at F.sw
  box invis fill_(1) ht ell wid E.e.x-F.w.x with .nw at F.nw

  box wid G.e.x-F.w.x ht F.ht with .sw at F.sw thick linethick*3/2
  foreach_(`B',
   `B`'T: B.se + (-qmell,qmell)
    line invis fill_(1) from B.se to (B.se,B`'T) then to B`'T then to B.se
    line from (B.w,B`'T) to B`'T chop 0 chop -offset
    line from B`'T up ell chop -offset chop 0
    line from B`'T + (-r,0) up ell
    line dashed from B`'T to B.se
    "\large $0$" at B`'T + (-r/2,ell/2)
    "\large $0$" at B`'T + (qmell/2,ell/2)
    "$t$" at (B`'T,B.n) + (-offset/2,offset)
    sprintf("$\overbrace{\phantom{\hbox to %gin{}}}^{\hbox{$k$}}$",kwid/scale) \
      at B.nw + (kwid/2,0) above
    hatchbox(wid kwid ht ell,hatch,,90) with .nw at B.nw
    line from B.ne to B.se thick linethick*3/2
   ',F,E)

  line from (G.w,ET) right G.wid
  line from ET + (0,r) left ET.x-E.w.x
  hatchbox(wid r ht r,hatch,,0) with .se at ET

  "$q$" at F.sw + (-offset,offset/3)
  "$\ell$" at (F.w,FT) + (-offset,offset/3)

  "$n{+}p{+}m$" at G.ne + (0,offset)
  
  foreach_(`B',`"\Large $B$" ht 0.2 with .n at B.s + (0,-offset/2)',F,E,G)

                           # extra left brace to avoid a psfrag problem (bug?)
  sprintf(\
   "$\vphantom{\{}\left.\vrule height %gin depth0pt width0pt\right\}r$",\
     r/2*0.9) at ET + (offset,r/2)

#  Adjust the bounding box without using s_box:
# move from F.nw+(-12bp__,21bp__) to G.se+(20bp__,-15bp__)
  ] with .sw at last [].se+(0.15,0)
.PE
