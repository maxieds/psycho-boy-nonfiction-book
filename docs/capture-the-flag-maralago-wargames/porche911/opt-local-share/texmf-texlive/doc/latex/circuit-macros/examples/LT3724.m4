.PS
# LT3724.m4
# https://pdf1.alldatasheet.com/datasheet-pdf/view/547351/LINER/LT3724.html

log_init
include(ics.m4)
iflatex{command "{\scriptsize\sf"}

# This draws the symbolic chip with external circuitry

pinsep=0.25
hght= 9*pinsep
wdth=0.6*hght
blskip = 0.1

[ QR: LT3724
  line left_ dimen_/2 from QR.SYNC; ground
  line left_ dimen_/2 from QR.FSET
  R7: resistor(down_ dimen_); rlabel(,"\SI{49.9}{\kilo\ohm}"); ground(,T)
  line left_ dimen_ from QR.VC
  {dot; capacitor(down_ pinsep); llabel(,"\SI{120}{\pico\farad}"); ground(,T)}
  resistor(left_ dimen_*5/4); rlabel(,\SI{10}{\kilo\ohm})
  capacitor(down_ pinsep); llabel(,\SI{680}{\pico\farad}); ground(,T)
  line left_ dimen_/2 from QR.BURST_EN then down_ QR.BURST_EN.y-QR.VFB.y; dot

  DL: dot(at QR.VFB-(dimen_*13/4,0))
  resistor(down_ pinsep*2); llabel(,"\SI{14.7}{\kilo\ohm}"); ground(,T)

  line left_ dimen_/2 from QR.VIN then up_ QR.n.y-QR.VIN.y+dimen_/3; VINL: dot
  line left_ dimen_*3/2 from QR.SHDN; dot
  {resistor(down_ dimen_); rlabel(,"\SI{82.5}{\kilo\ohm}"); H: ground(,T)
  capacitor(left_ dimen_ from QR.CSS); rlabel(,\SI{1000}{\pico\farad})
  line to (Here,H); ground(,T)}
  resistor(up_ to (Here,VINL)); rlabel(,"\SI{1}{\mega\ohm}"); dot 
  dot(at (Here.x-dimen_,Here.y))
  {capacitor(down_ pinsep); {"\SI{22}{\micro\farad}" at last [].e ljust}
   line left_ dimen_}
  dot(at (Here.x-dimen_,Here.y))
  {capacitor(down_ pinsep); {"\SI{68}{\micro\farad}" at last [].e ljust}
   dot; ground}
  VIN: (Here.x-dimen_/2,Here.y); {line invis left_ 25bp__ from VIN} 
  "V$_{\hbox{\tiny IN}}$" at VIN rjust
 "\SI{36}{\volt}" rjust at VIN-(0,blskip*2.5)  \
  "TO" rjust "\SI{60}{\volt}" rjust

  line right_ dimen_/2 from QR.SGND; dot; ground(at (Here,R7.end),T)
  line to (Here,QR.PGND) then to QR.PGND
  dot(at QR.VCC+(dimen_/2,0))
  { capacitor(down_ pinsep); llabel(,\SI{1}{\micro\farad}); dot }
  dot(at Here+(dimen_*3/4,0))
  { reversed(`diode',to (Here,QR.SENSEM)); DV: dot}
  { line to QR.VCC }
  diode(right_ dimen_*2/3); DP: dot
  { line to (Here,QR.BOOST) then to QR.BOOST }
  capacitor(right_ dimen_); {"\SI{22}{\micro\farad}" at last [].n above}
  DZ: dot; reversed(`diode',down_ pinsep,Z); ground(,T)
   "PDS5100H" at last [].w rjust below
  resistor(right_ from QR.SW to (DP,QR.SW)); llabel(,\SI{10}{\ohm})
  line to (DZ,Here); dot
  {up_; M1: mosfet(,,TEDSQuB) with .e at (DZ,QR.TG); "Si850DP" at M1.e ljust
  line from M1.G to QR.TG}
  line from DZ to M1.S
  line from M1.D up_ VIN.y-M1.D.y then to VIN
  inductor(right_ dimen_ from DZ); llabel(,\SI{10}{\micro\henry}); dot
  {line to (Here,QR.SENSEP) then to QR.SENSEP}
  resistor(right_ dimen_); llabel(,\SI{0.015}{\ohm}); DQ: dot
  line from QR.VFB to DL-(dimen_/2,0)
  resistor(down_ Here.y-R7.end.y+dimen_/2); llabel(,\SI{130}{\kilo\ohm})
  line to (DV,Here) then to DV
  line from QR.SENSEM to (DQ,QR.SENSEM) then to DQ
  { dot(at DQ+(dimen_/2,0))
    capacitor(down_ pinsep); llabel(,\SI{68}{\micro\farad}); ground(,T) }
  { dot(at DQ+(dimen_*3/2,0))
    capacitor(down_ pinsep); llabel(,\SI{33}{\micro\farad}); ground(,T) }
  line from DQ right_ dimen_*2.25; {line invis right_ 24bp__} 
  VOUT: Here
  "V$_{\hbox{\tiny OUT}}$" at VOUT ljust
  "\SI{12}{\volt}" at VOUT+(0,-blskip*1.2) ljust
  "\SI{50}{\watt}" at VOUT+(0,-blskip*1.2*2) ljust

  "High voltage step-down regulator" ljust at (M1.e.x+10bp__,QR.n.y) \
  "\SI{48}{\volt} TO \SI{12}{\volt}, \SI{50}{\watt}" ljust
  ]
#showbox_
#print last [].wid,last [].ht

iflatex(command "}%")

.PE
