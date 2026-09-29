.PS
# `Jack.m4'
cct_init
# https://tex.stackexchange.com/questions/720858/is-there-a-tikz-or-circuitikz-headphone-jack-connector-diagram

P: [
  P1: plug
    foreach_(`Y',`"\sl Y" wid 0.1 at P1.Y rjust',A,B)
    "\sl TB" at P1.TB ljust above
    "\sl TA" at P1.TA ljust below

  P2: plug(,R) with .B at P1.A+(0.85,0)
    foreach_(`Y',`"\sl Y" wid 0.1 at P2.Y rjust',A,B)

  P4: plug(,3) with .A at P2.B+(0.85,0)
    foreach_(`Y',`"\sl Y" at P4.Y rjust',A,B,C)

  P5: plug(L,3R) with .A at P4.A+(1,0)
    foreach_(`Y',`"\sl Y" wid 0.1 at P5.Y ljust',A,B,C)
  `"\tt plug"' below at P1.s+(0,-0.1)
  `"\tt plug(,R)"' below at P2.s+(0,-0.1)
  `"\tt plug(,3)"' below at P4.s+(-0.1,-0.1)
  `"\tt plug(L,3R)"' below at P5.s+(0.1,-0.1)
]

L: [ right_
 J1: jack
   thinlines_
   "\sl L" wid 0.1 rjust at J1.L
   arrow <- right 0.1 from J1.F; "\sl F" ljust
   arrow <- down 0.1 left 0.1 from J1.G ; "\sl G" rjust
   arrow <- up 0.1 left 0.1 from J1.H ; "\sl H" rjust
   thicklines_

 J3: jack(L,RLS) with .F at J1.F+(0.4,0)
   "\sl L" ljust at J3.L
   "\sl S" ljust at J3.S

 J2: jack(,LMBS) with .F at J3.F+(1.5,0)
   thinlines_
   "\sl L" rjust at J2.L
   arrow <- from J2.LM left 0.25; "\sl LM" wid 0.18 rjust
   arrow <- from J2.LB left 0.25; "\sl LB" rjust
   "\sl S" rjust at J2.S
   thicklines_

 J11: jack(,LMBSX) with .w at last [].e+(0.5,0)
   foreach_(`Y',`"\small\sl Y" rjust at J11.Y.w', L,LM,LB,S,G)

 J8: jack(,XLLBSSBC) with .sw at last [].se+(0.75,0)
   foreach_(`Y',`"\small\sl Y" rjust at J8.Y.w', L,L1,LB1,S,S1,SB1,G,C)

  `"\tt jack"' ht 0.15 below at J1.s+(0,-0.15)
  `"\tt ..(,LMBS)"' below at (J2,last "")
  `"\tt ..(L,RLS)"' below at (J3,last "")
  `"\tt ..(,LMBSX)"' below at (J11,last "")
  `"\tt ..(,XLLBSSBC)"' below at (J8, last "")
] with .nw at last [].sw + (0,0.1)

.PE
