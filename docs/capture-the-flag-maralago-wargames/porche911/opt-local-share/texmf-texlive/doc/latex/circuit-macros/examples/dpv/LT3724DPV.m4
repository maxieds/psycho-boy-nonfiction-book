.PS
# LT3724.m4
# https://pdf1.alldatasheet.com/datasheet-pdf/view/547351/LINER/LT3724.html

cct_init
include(icsDPV.m4)

  linethick = 1.2

svg_font(sans-serif,9bp__)

define(`pinsep',`svg_baselineskip*2.5')
define(`hght',`9*pinsep')
define(`wdth',`0.6*hght')

[
  Q: LT3724

  line left_ dimen_/2 from Q.SYNC; ground
  line left_ dimen_/2 from Q.FSET
  R7: resistor(down_ dimen_); rlabel(,"49.9 k"); ground(,T)
  line left_ dimen_ from Q.VC
  {dot; capacitor(down_ pinsep); llabel(,"120 p"); ground(,T)}
  resistor(left_ dimen_*5/4); rlabel(,"10 k")
  capacitor(down_ pinsep); llabel(,"680 p"); ground(,T)
  line left_ dimen_/2 from Q.BURST_EN then down_ Q.BURST_EN.y-Q.VFB.y; dot

  DL: dot(at Q.VFB-(dimen_*13/4,0))
  resistor(down_ pinsep*2); llabel(,"14.7 k"); ground(,T)

  line left_ dimen_/2 from Q.VIN then up_ Q.n.y-Q.VIN.y+dimen_/3; VINL: dot
  line left_ dimen_*3/2 from Q.SHDN; dot
  {resistor(down_ dimen_); rlabel(,"82.5 k"); H: ground(,T)
  capacitor(left_ dimen_ from Q.CSS); rlabel(,"1000 p")
  line to (Here,H); ground(,T)}
  resistor(up_ to (Here,VINL)); rlabel(,"1 M"); dot 
  dot(at (Here.x-dimen_,Here.y))
  {capacitor(down_ pinsep); {"22 svg_micro" at last [].e ljust}
   line left_ dimen_}
  dot(at (Here.x-dimen_,Here.y))
  {capacitor(down_ pinsep); {"68 svg_micro" at last [].e ljust}
   dot; ground}
  VIN: (Here.x-dimen_/2,Here.y); {line invis left_ 60bp__ from VIN} 
  "V`'svg_sub(IN)" at VIN rjust
  "36 V TO 60 V" at VIN+(0,-svg_baselineskip*1.2) rjust

  line right_ dimen_/2 from Q.SGND; dot; ground(at (Here,R7.end),T)
  line to (Here,Q.PGND) then to Q.PGND
  dot(at Q.VCC+(dimen_/2,0))
  { capacitor(down_ pinsep); llabel(,"1 svg_micro"); dot }
  dot(at Here+(dimen_*3/4,0))
  { reversed(`diode',to (Here,Q.SENSEM)); DV: dot}
  { line to Q.VCC }
  diode(right_ dimen_*2/3); DP: dot
  { line to (Here,Q.BOOST) then to Q.BOOST }
  capacitor(right_ dimen_); {"22 svg_micro" at last [].n above}
  DZ: dot; reversed(`diode',down_ pinsep,Z); ground(,T)
   "PDS5100H" at last [].w rjust below
  resistor(right_ from Q.SW to (DP,Q.SW)); llabel(,"10")
  line to (DZ,Here); dot
  {up_; M1: mosfet(,,TEDSQuB) with .e at (DZ,Q.TG); "Si850DP" at M1.e ljust
  line from M1.G to Q.TG}
  line from DZ to M1.S
  line from M1.D up_ VIN.y-M1.D.y then to VIN
  inductor(right_ dimen_ from DZ); llabel(,"10 svg_micro"); dot
  {line to (Here,Q.SENSEP) then to Q.SENSEP}
  resistor(right_ dimen_); llabel(,"0.015"); DQ: dot
  line from Q.VFB to DL-(dimen_/2,0)
  resistor(down_ Here.y-R7.end.y+dimen_/2); llabel(,"130 k")
  line to (DV,Here) then to DV
  line from Q.SENSEM to (DQ,Q.SENSEM) then to DQ
  { dot(at DQ+(dimen_/2,0))
    capacitor(down_ pinsep); llabel(,"68 svg_micro"); ground(,T) }
  { dot(at DQ+(dimen_*3/2,0))
    capacitor(down_ pinsep); llabel(,"33 svg_micro"); ground(,T) }
  line from DQ right_ dimen_*2.25; {line invis right_ 24bp__} 
  VOUT: Here
  "V`'svg_sub(OUT)" at VOUT ljust
  "12 V" at VOUT+(0,-svg_baselineskip*1.2) ljust
  "50 W" at VOUT+(0,-svg_baselineskip*1.2*2) ljust

  "High voltage step-down regulator" ljust at (M1.e.x+10bp__,Q.n.y) \
  "48 V TO 12 V, 50 W" ljust
  ]
#showbox_

command "</g>" # font
.PE
