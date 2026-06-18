.PS
# LT3757DPV.m4
# https://html.alldatasheet.com/html-pdf/349964/LINER/LT3757/1234/8/LT3757.html
# https://en.wikipedia.org/wiki/Single-ended_primary-inductor_converter
# https://www.analog.com/media/en/technical-documentation/data-sheets/lt3757-3757a.pdf
#
# This diagram does not contain much repetitive structure so the code is long
# but straightforward.
cct_init
include(icsDPV.m4)
  linethick = 1.2

ifelse(1,1,`
# This draws the symbolic chip with external circuitry
svg_font(sans-serif,9bp__)

define(`pinsep',`svg_baselineskip*2.5')
define(`hght',`9*pinsep')
define(`wdth',`0.6*hght')

Q1: LT3757

  resistor(down_ dimen_*3/4 from Q1.VC); llabel(,22 k)
  capacitor(down_ dimen_/2); llabel(6.8 nF); GNDL: dot
  line from Q1.SS left_ dimen_/2; continue down_ to (Here,Q1.VC)
  capacitor(to (Here,GNDL)); llabel(0.1 svg_micro`'F); dot
  up_; M1: mosfet(,,TEDSQuB) with .G at Q1.GATE
  dot(at (M1.S,Q1.SENSE)); {line to Q1.SENSE}; line from M1.S to (M1.S,Q1.VC)
  resistor(down_ to (Here,GNDL)); llabel(,0.01 svg_ohm); dot
  line from Q1.GND to (Q1.GND,GNDL); dot
  capacitor(down_ from Q1.INTVCC to (Q1.INTVCC,GNDL))
  llabel(,"4.7 svg_micro(F)" ljust "10 V" ljust "X5R" ljust); dot 
  ground
  line up_ dimen_/3 from M1.D; DD: dot
  diode(right_ dimen_,Z); DE: dot
  { resistor(down_ to (Here,Q1.FBX)); llabel(,"226 k")
    line to(Here,Q1.VC); resistor(to (Here,GNDL)); llabel(,"16.2 k"); dot }
  dot(at Here+(dimen_,0))
  { capacitor(down_ to (Here,GNDL),C+);
    llabel(,"47 svg_micro(F)" ljust "35 V" ljust "x2"); dot }
  dot(at Here+(dimen_,0))
  { capacitor(down_ to (Here,GNDL));
    llabel(,"10 svg_micro(F)" ljust "25 V" ljust "X5R"); GG: dot; ground }
  line from DE to Here+(dimen_/2,0); {line invis right dimen_}
  "V`'svg_sub(OUT)" ljust at Here+(2bp__,5bp__) "24 V" ljust "2 A" ljust
  line from Q1.RT left_ dimen_; continue down_ to (Here,Q1.VC)
  resistor(to (Here,GNDL)); rlabel(,"41.2 k" rjust "300 kHz" rjust)
  line to GG
  line from Q1.VIN up_ dimen_/3; dot
  dot(at (Q1.w,Here)-(dimen_,0))
  {resistor(down_ to (Here,Q1.SHU)); llabel(,"200 k"); dot; {line to Q1.SHU}
   resistor(down_ to (Here,Q1.SYNC)); llabel(,"43.2 k"); dot
   {line to Q1.SYNC}; ground }
  dot(at Here-(dimen_,0))
  {capacitor(down_ to (Here,Q1.SHU))
   llabel(,"10 svg_micro(F)" ljust "25 V" ljust "X5R" ljust); ground }
  VIN: Here+(-dimen_/2,0); {line invis left_ 70bp__}
  {"V`'svg_sub(IN)" at VIN rjust "8 V TO 16 V" rjust}
  line from VIN to (DD,VIN); inductor(down_ to DD); llabel(,"10 svg_micro(H)")

	"High efficiency" ljust below at (DE,Q1.n) "boost converter" ljust

  command "</g>" # end font
',`
# The operational diagram of the chip interior with external circuitry
maxpswid = 10

  textht = 5bp__
  lw = dimen_/4

  define(`Pin',`P`'in`$1': box wid dimen_/3 ht dimen_/3 "`$1'" fill_(1)')

  boardw = 13.5
  boardh = 14
 Board: box thick 2 wid boardw*dimen_ ht boardh*dimen_
  define(`coord',`Board.sw+(`$1',`$2')*dimen_')
 A11: opamp at coord(2.5,boardh-5)
  LH_symbol(,wdth=0.5) at A11.C; "A11" at A11.NE above ljust
 A12: opamp at A11+(0,-A11.ht*5/4); LH_symbol(,wdth=0.5) at A12.C
  "A12" at A12.NE above ljust
 D1112: dot(at (A11.In2.x-lw,(A11.y+A12.y)/2))
  line from A11.In2 to (D1112,A11.In2) then to (D1112,A12.In1) then to A12.In1
 G6: OR_gate with .w at (A11.Out.x+3*L_unit,(A11.y+A12.y)/2); {"G6" at G6}
  line from G6.In1 left_ lw*5/4 then up A11.Out.y-G6.In1.y then to A11.Out
  line from G6.In2 left_ lw*5/4 then up A12.Out.y-G6.In2.y then to A12.Out
  line left_ lw from A11.In1; { "1.72 V" rjust }
  line left_ lw from A12.In2; { "-0.88 V" rjust }

  up_; Q3: bi_tr(,R) with .C at G6.Out+(3*lw,A11.ht*2)
  "Q3" at Q3.ne above rjust
  ground(at Q3.E); line up_ lw then left_ lw from Q3.C; Q3C: dot
 S2: source(down_ elen_ with .end at Q3C,G); "2.5 V" at S2.n above
  rlabel(,"S2"); larrow; "10 svg_micro(A)" at last arrow ljust
  left_; G4: OR_gate(3) with .Out at Q3.B+(lw,0); line from G4.Out to Q3.B 
  G3: NAND_gate with .Out at G4.In2+(lw*3/2,0); line from G3.Out to G4.In2 
  line from G3.In2 right_ lw then up_ A11.Out.y-G6.In1.y # then right_ lw
  left_; A9: opamp with .Out at Here
  left_; A8: opamp at A9-(0,A9.ht*5/4); LH_symbol(,wdth=0.5) at A8.C
   "A8" at A8.SE above rjust
  line from G3.In1 to (A8.Out,G3.In1) then to A8.Out
 D89: dot(at (A9.In2.x+lw,(A9.y+A8.y)/2))
  line from A9.In1 to (D89,A9.In1) then to (D89,A8.In2) then to A8.In2
  line from A9.In2 right_ lw; "17.5 V" ljust above at A9.In2
  line from A8.In1 right_ lw;"2.7 V UP" ljust "2.6 V DOWN" ljust

  line from G4.In1 right_ lw then down_ 3/2*G3.ht then right_ lw
  box wid boxwid*2/3 ht boxht*2/3 "TSD" "165 svg_deg`'C"

  D8: dot(at D89+(boxwid*1.75,0))
  down_; INTVcc: mosfet(,R,TEDSQdB) with .D at D8+(0,lw)
 B72: box ht boxht/3 "7.2 V LDO" with .e at INTVcc.G
  dot(at (B72,D89)); line to B72.s; line from D8 to INTVcc.D
  Pin(8) at (Board.e,D8); "INTV`'svg_sub(CC)" at Pin8.n+(0,2bp__) above rjust
  line from D89 to Pin8.w
  line from B72.n up_ lw/2
 CL: box ht boxht*2/3 "CURRENT" "LIMIT" with .s at Here
  line from CL.e to (INTVcc.S,CL); dot

  line from G4.In3 right_ lw then up_ CL.n.y-G4.In3.y-boxht/2+lw
 UVLO: box "INTERNAL" "REGULATOR" "AND UVLO" with .s at Here
  "UVLO" at UVLO.sw below ljust
  line from UVLO.e to (D8,UVLO.e); dot
  Pin(10) at (Here,Board.n); "V`'svg_sub(IN)" at Pin10.se below ljust
  line from INTVcc.S to Pin10.s

  line up_ 2*lw from UVLO.n; DUV: dot; left_
 A10: opamp(,,,,R) at (UVLO.e,Here); LH_symbol at A10.C
  "A10" at A10.SE above rjust
  line from A10.In1 right_ lw; "1.22 V" ljust
  arrow from A10.Out left A10.Out.x-UVLO.w.x+lw
 S1: source(down_ elen_ with .c at Here+(-dimen_/6,0),G)
  rarrow; "I`'svg_sub(S1)" rjust at last arrow above "2 svg_micro(A)" rjust
  ground(at S1.end,T)
  line from A10.In2 right_ lw then up_ S1.start.y-A10.In2.y
  dot; { "SHDN/UVLO" at last [].e ljust }
  { line from last [].e+(textoffset,3bp__) right_ 16bp__  }
  { line to S1.start }
  { Pin(9) at (Here,Board.n)}; line to Pin9.s

  right_; A7: opamp with .n at (UVLO.x,G6.y-lw); "VC" at A7.nw rjust
  line from A7.Out right_ A8.Out.x-A7.Out.x+lw
 G5: OR_gate(3) with .In2 at Here
  line from G5.In1 left_ lw then up G6.Out.y-G5.In1.y then to G6.Out; right_
 G2: opamp(right_ dimen_,"","") with .NE at (D8.x,G5.y+A9.ht/4)
  ground(at G2.SE)
  Pin(7) at (Board.e,G2); "GATE" at Pin7.n above rjust
  line from G2.E to Pin7.w; line from D8 to G2.NE
  line from G2.w left_ dimen_*2/3
 SR1: box ht G2.ht wid boxwid*2/3; "SR1" at SR1.n above
  "R" at SR1.w ljust; "O" at SR1.e rjust; "S" at SR1.s above
  line right_ from G5.Out to SR1.w

 Pin(3) at (Q3C,Board.s); line from Q3C to Pin3.n; "SS" at Pin3.ne above ljust
 D67: dot(at (G6.Out+(lw,0),A7.In1)); line to A7.In1
  dot(at (Q3C.x,D67.y-dimen_)); down_
 Q2: bi_tr(,R,P) with .B at Here; ground(at Q2.C); "Q2" at Q2.e ljust
  line from Q2.E to (Q2.E,A7.In1); dot

 A1: opamp(right_ dimen_,,,,R) at A12+(0,-3/2*dimen_); T1: dot(at (D67,A1))
 A2: opamp(right_ dimen_,,,,R) at A1+(0,-A1.ht*5/4)
 D12: dot(at (A1.w.x-lw,(A1.y+A2.y)/2))
  Pin(2) at (Board.w,D12); line from Pin2.e to D12; "FBX" at Pin2.ne above ljust
  line from A1.In2 to (D12,A1.In2) then to (D12,A2.In1) then to A2.In1
  line from A1.In1 left_ lw; "1.6 V" rjust
  line from A2.In2 left_ lw; "-0.8 V" rjust

  Pin(1) at (Board.w,Q3C); "V`'svg_sub(CC)" at Pin1.ne above ljust
 S3: source(down_ elen_ at ((Board.w+Pin3)/2,S2),G);rlabel(,"S3")
  larrow("I`'svg_sub(S3)")
  "2.5 V" at S3.start above; line from S3.end to (S3,Pin1); dot

  diode(from T1 to A1.Out)
 D2: diode(from (T1,A2) to A2.Out)
  line from D2.start to (D2.start,Pin1) then to Pin1.e

  left_; A6: opamp(,,,,R) with .Out at (SR1,A1)
 A5: opamp at (A6,A6+(0,-A6.ht*5/4))
  line from A6.In2 right_ lw; "108 mV" ljust
  line from A5.In2 right_ lw; { dot; line to (Here,A6.In1) then to A6.In1 }
  {Pin(6) at (Board.e,Here)}; line to Pin6.w; "SENSE" at Pin6.n above rjust
  line from A5.In1 right_ lw then down_ dimen_
  dot; ground; {Pin(11) at (Board.e,Here)}; line to Pin11.w
  "GND" at Pin11.n above rjust 
  line from G5.In3 left_ lw then down G5.In3.y-A6.y then to A6.Out

 Summer: circle rad 0.15 "svg_Sigma" with .w at (G5.Out,A5)
  line from A7.In2 left lw then down_ A7.In2.y-Summer.y then to Summer.w
  line from Summer.e to A5.Out
  "V`'svg_sub(ISENSE)" at Summer.ne above ljust; "SLOPE" at Summer.nw above rjust
  "RAMP" at Summer.sw below rjust
  line down_ 2*lw from Summer.s
  box ht boxht*2/3 with .n at Here "RAMP" "GENERATOR"
  {[ line for_(1,3,1,`up_ dimen_/4 right_ dimen_/6 then down_ dimen_/4 then') \
     up_ dimen_/4 right_ dimen_/6 ] with .sw at last box.n+(lw/2,lw/2)}
  line down_ lw*3/2
  OSC: box ht boxht*2/3 \
   "100 kHZ-1 MHZ" "OSCILLATOR"
  {[line right_ dimen_/2; [for_(1,4,1,`line from (m4x*dimen_/10,0) \
    up_ dimen_/4')] with .s at last line ] with .sw at OSC.n+(lw/2,2bp__)}
  line right_ from OSC.e to (SR1,OSC.e) then to SR1.s
 G1: OR_gate with .Out at OSC.w+(-2*lw,0); line from G1.Out to OSC.w
 A3: opamp with .Out at G1.In1+(-lw,0); line from A3.Out to G1.In1
  line left_ lw from A3.In1; "1.25 V" rjust

  line from OSC.s down_ A2.ht*3/4; up_
 Q1: bi_tr with .C at Here; right_
 A4: opamp(,,,,R) with .E at Q1.B; "+" at A4.w +(4pt__,0)
  "FREQ" at A4.SE+(0,-lw) below ljust "PROG" ljust
  line from A4.In2 left lw then down_ A4.ht/2; continue to  (Q1.E,Here); dot
  {Pin(4) at (Here,Board.s); "R`'svg_sub(T)" at Pin4.ne above ljust};
  line from Q1.E to Pin4.n
  line from A4.In1 left_ lw; "1.25 V  " above
  Pin(5) at (A4.w.x-3*lw,Board.s.y); "SYNC" at Pin5.ne above ljust
  line from Pin5.n to (Pin5,G1.In2) then to G1.In2
  line from A3.In2 left_ lw; continue to (Here,A4.w) then to A4.w
  "FREQ" at (A3.In2.x-lw,A4.w.y+dimen_/2) ljust above "FOLD" ljust "BACK" ljust

 D3: dot(at A3.In2-(lw,0)); right_
 FFB: box ht boxht*2/3 "FREQUENCY" "FOLDBACK" at (A2,D3); line to D3
 DFFB: dot(at Pin2.e+(2*lw,0))
  line from FFB.w to (DFFB,FFB); continue to (Here,D1112) then to D1112
 DF: dot(at (DFFB,FFB)); line down_ boxht
  resistor(right_ elen_); llabel(,"R5") rlabel(,"8 k")
  diode(right_ dimen_/3); llabel(,"D2")
  reversed(`diode',right_ dimen_*2/3,Z); llabel(,"D3"); ground

  foreach_(`gate',`"gate" at gate.C',A1,A2,A3,A4,A5,A6,A7,A9,G1,G2,G3,G4,G5)

  line from Pin9.n up_ dimen_*2/3; dot
  {resistor(left_ dimen_); rlabel(,"R4"); ground}
  resistor(right_ dimen_); llabel(,"R3"); line up_ dimen_/2; VCC: dot
  dot(at Here+(dimen_/2,0)); {capacitor(down_ dimen_/2,C+)
  llabel(,"C`'svg_sub(IN)"); ground(,T)}
  L1D: dot(at (Pin10,Here)); {line to Pin10.n}; {line to (Board.n,Here)
   "V`'svg_sub(IN)" rjust}

 line from Pin8.e right_ dimen_/4; capacitor(down_ dimen_/3)
  {"C`'svg_sub(VCC)" at Pin8.ne ljust above}; ground
  up_; M1: mosfet(,,TEDSQuB) with .G at Pin7.e; "M1" at M1.n above
  inductor(right_ from L1D to (Board.e.x+lw,L1D.y),,,M); llabel(,"L1"); DL1: dot
  line down_ 3*dimen_; continue to (M1.D,Here) then to M1.D 
  line from M1.S to (M1.S,Pin6); dot; {line to Pin6.e}
  resistor(down_ to (Here,Pin11)); llabel(,"R`'svg_sub(SENSE)"); dot
  ground; line to Pin11.e

  capacitor(from DL1 right_ dimen_/2); llabel(,"C`'svg_sub(DC)"); T2: dot
  diode(right_ dimen_,Z); { line right_ dimen_; "V`'svg_sub(OUT)" above}
  dot(at Here+(dimen_/2,0)); line down_ lw; dot;
 P3: parallel_(`Sep=dimen_*2/3; capacitor(down_ elen_)
                 rlabel("C`'svg_sub(OUT2)"); line down_ elen_/3',
            `line down_ elen_/3; capacitor(down_ elen_*2/3,C)
                 llabel("C`'svg_sub(OUT1)")',
            `resistor(down_ elen_*2/3); llabel(,"R2"); dot
             { line left_ lw; "FBX" above }
             R1: resistor(down_ elen_*2/3); llabel(,"R1"); dot')
  dot; ground
  inductor(from T2 to (T2,P3.E3.R1.end),,,M); rlabel(,"L2")
  line to P3.E3.R1.end

  resistor(from Pin4.s down_ dimen_*2/3); llabel(,"R`'svg_sub(T)"); ground(,T)
  capacitor(from Pin3.s down_ dimen_*2/3); llabel(,"C`'svg_sub(SS)"); ground(,T)
  line from Pin2.w left_ lw; "FBX" rjust
 TV: dot(at Pin1-(dimen_/2,0))
  resistor(down_ dimen_*2/3); llabel(,"R`'svg_sub(C)")
  capacitor(down_ dimen_*2/3); llabel("C`'svg_sub(C1)"); dot; ground
  line left_ dimen_*0.6
  capacitor(down_ from (Here,TV) to Here); llabel("C`'svg_sub(C2)")
  line from Pin1.w to last line.start

  move to Board.se+(5bp__,20bp__)
  "LT3757 block diagram" ljust "working as a" ljust "SEPIC converter" ljust
')

.PE
