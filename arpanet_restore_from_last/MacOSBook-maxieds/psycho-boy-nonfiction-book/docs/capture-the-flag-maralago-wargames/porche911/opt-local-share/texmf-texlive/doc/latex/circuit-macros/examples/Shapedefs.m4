ifdef(`View3d',,`threeD_init')
divert(-1)
# Shapedefs.m4
# 3D structures with complex surfaces and hidden lines are the domain of more
# sophisticated software packages, but basic shapes can be drawn with pic.

#####################################################

                           `cylinder3D(xdispl,ydispl,zdispl,diameter,
                              [colored "color"])'
define(`cylinder3D',`[ Start: (0,0)
 xdispl = `$1'; ydispl = `$2'; zdispl = `$3'
 define(`M4CL',`xdispl,ydispl,zdispl')dnl
 lenc = length3D(M4CL)
 diamc = ifelse(`$4',,(lenc/2),`$4') ; radc = diamc/2
 cs = dot3D(View3D,M4CL)/lenc
 End: Project(M4CL)
 az = atan2(ydispl,xdispl)
 ae = atan2(zdispl,sqrt(xdispl^2+ydispl^2))
 CL: line invis from Start to End; C: CL.c
 nls = int(twopi_*radc/lthick)
 define(`M4PP',`rot3Dz(az,rot3Dy(-ae,rot3Dx(-i/nls*twopi_,0,0,radc)))')dnl
 for i=0 to nls-1 do { if dot3D(View3D,M4PP) > 0 then {
   P: Project(M4PP)
   ql = sqrta(dot3D(Light3D,M4PP)/radc)
   line from P to End+P outlined rgbstring(ql,ql,ql) `$5' } }
 Perp: (vperp(CL,radc))
 if cs > 0 then { T: End; B: Start } else { T: Start; B: End }
 rpoint_(from Start to Perp)
 css = sqrta(cs)
 Top: rotellipse(diamc,diamc*cs,
   thick linethick/3 shaded rgbstring(css,css,css)) with .c at T
 W: line thick linethick/3 from T+Perp to B+Perp
 Bot: ellipsearc(diamc,diamc*cs,pi_,twopi_,rp_ang,cw,
   thick linethick/3) with .C at B
 E: line thick linethick/3 from B-Perp to T-Perp
 rpoint_(from Start to End)
`$6']')

                           `cone3D(xdispl,ydispl,zdispl,diameter,
                              [colored "color"])'
                           `internal positions:
                              Start (centre of base),
                              End (point),
                              C (axis centre)'
define(`cone3D',`[ Start: (0,0)
 xdispl = `$1'; ydispl = `$2'; zdispl = `$3'
 define(`M4CL',`xdispl,ydispl,zdispl')dnl
 lenc = length3D(M4CL)
 diamc = ifelse(`$4',,(lenc/2),`$4') ; radc = diamc/2
 End: Project(M4CL)
 cs = dot3D(View3D,M4CL)/lenc
 az = atan2(ydispl,xdispl)
 ae = atan2(zdispl,sqrt(xdispl^2+ydispl^2))
 CL: line invis from Start to End; C: CL.c
 nls = int(twopi_*radc/lthick)
 lt = sqrt(radc^2+lenc^2)
 b = 0
 for i=0 to nls-1 do { if dot3D(View3D,
   rot3Dz(az,rot3Dy(-ae,rot3Dx(-i/nls*twopi_,radc,0,lenc)))) > 0 then {
     ql = sqrta(dot3D(Light3D,
       rot3Dz(az,rot3Dy(-ae,rot3Dx(-i/nls*twopi_,radc,0,lenc))))/lt)
     P: Project(rot3Dz(az,rot3Dy(-ae,rot3Dx(-i/nls*twopi_,0,0,radc))))
     line from P to End outlined rgbstring(ql,ql,ql) `$5'
     if !b then { WB: P; b = 1 } 
     } else { if b then { BW: P; b = 0 } } }
 if vlength(CL.x,CL.y) != 0 then { Perp: (vperp(CL,radc,R)) } \
 else { Perp: (radc,0) } 
 if cs >= 0 then { T: End; B: Start } else {T: Start; B: End }
 rpoint_(from Start to Perp)
 pout = (vlength(End.x,End.y) > abs(radc*cs))
 if cs < 0 then { css = sqrta(cs)
   if pout then { line thick linethick/3 from BW to End then to WB }
   Bot: rotellipse(diamc,diamc*cs,thick linethick/3 \
     ifelse(`$5',,`shaded rgbstring(css,css,css)',`$5')) with .c at T } \
 else { if pout then {
   line thick linethick/3 from BW to End then to WB
   a = acos((WB.x*Perp.x+WB.y*Perp.y)/radc^2)
   Bot: ellipsearc(diamc,diamc*cs,a,pi_-a,rp_ang,cw, thick linethick/3) \
     with .C at B } \
 else {
   Bot: rotellipse(diamc,diamc*cs,thick linethick/3) with .c at B } }
 rpoint_(from Start to End)
`$6']')
                               `Arrow3D(xdispl,ydispl,zdispl,
                                        diam,arrowwid,arrowht)'
define(`Arrow3D',`[ diam_Ar = ifelse(`$4',,linewid/10,`$4')
 wid_Ar = ifelse(`$5',,diam_Ar*2,`$5')
 ht_Ar = ifelse(`$6',,wid_Ar*2,`$6')
 x_Ar = ifelse(`$1',,1,`$1')
 y_Ar = ifelse(`$2',,1,`$2')
 z_Ar = ifelse(`$3',,1,`$3')
 define(`M4Arrow3D',`x_Ar,y_Ar,z_Ar')dnl
 len_Ar = length3D(M4Arrow3D)
 len_Shaft = len_Ar - ht_Ar
 cs_Ar = dot3D(View3D,M4Arrow3D)
 if cs_Ar >= 0 then {
   Shaft: cylinder3D(sprod3D(len_Shaft/len_Ar,M4Arrow3D),diam_Ar)
   Head: cone3D(sprod3D(ht_Ar/len_Ar,M4Arrow3D),wid_Ar) \
     with .Start at Shaft.End } \
 else {
   Head: cone3D(sprod3D(ht_Ar/len_Ar,M4Arrow3D),wid_Ar)
   Shaft: cylinder3D(sprod3D(len_Shaft/len_Ar,M4Arrow3D),diam_Ar) \
     with .End at Head.Start }
 Start: Shaft.Start; End: Head.End
 `$7']')

define(`f2xyz3D',``$1'x = `$2'
 `$1'y = `$3'
 `$1'z = `$4' ')

                           `prism3D(xdispl,ydispl,zdispl,endwid,endht,
                              (rad)rotation)
                            args1-3 are the 3D coords of .End wrt .Start
                            arg6 is rotation about x axis
                            Defined points .Start, .End, .C'
define(`prism3D',`[ Start: (0,0)
 xdispl = ifelse(`$1',,linewid,`$1')
 ydispl = ifelse(`$2',,linewid,`$2')
 zdispl = ifelse(`$3',,linewid,`$3')
 widp = ifelse(`$4',,(linewid/5),`$4')
 htp = ifelse(`$5',,(linewid/10),`$5')
 rotp = ifelse(`$6',,0,`$6')
 End: Project(xdispl,ydispl,zdispl); C: 0.5 between Start and End
 lenp = length3D(xdispl,ydispl,zdispl)
 az = atan2(ydispl,xdispl); ae = atan2(zdispl,sqrt(xdispl^2+ydispl^2))
 wp2 = widp/2; hp2 = htp/2
#                           3D coords of corners (B=back, F=front)
 f2xyz3D(nwB,rot3Dz(az,rot3Dy(-ae,rot3Dx(rotp,   0,-wp2, hp2))))
 f2xyz3D(swB,rot3Dz(az,rot3Dy(-ae,rot3Dx(rotp,   0,-wp2,-hp2))))
 f2xyz3D(seB,rot3Dz(az,rot3Dy(-ae,rot3Dx(rotp,   0, wp2,-hp2))))
 f2xyz3D(neB,rot3Dz(az,rot3Dy(-ae,rot3Dx(rotp,   0, wp2, hp2))))
 f2xyz3D(nwF,rot3Dz(az,rot3Dy(-ae,rot3Dx(rotp,lenp,-wp2, hp2))))
 f2xyz3D(swF,rot3Dz(az,rot3Dy(-ae,rot3Dx(rotp,lenp,-wp2,-hp2))))
 f2xyz3D(seF,rot3Dz(az,rot3Dy(-ae,rot3Dx(rotp,lenp, wp2,-hp2))))
 f2xyz3D(neF,rot3Dz(az,rot3Dy(-ae,rot3Dx(rotp,lenp, wp2, hp2))))
#                           facets
 M4Facet3D(neF,nwF,swF,seF)
 M4Facet3D(neB,seB,swB,nwB)
 M4Facet3D(neF,seF,seB,neB)
 M4Facet3D(neF,neB,nwB,nwF)
 M4Facet3D(seF,swF,swB,seB)
 M4Facet3D(nwF,nwB,swB,swF)
`$7']')

                           `M4Facet3D( a,b,c,d )'
define(`M4Facet3D',`
define(`PFacet',`cross3D(diff3D(`$2'x,`$2'y,`$2'z,`$1'x,`$1'y,`$1'z),
                         diff3D(`$3'x,`$3'y,`$3'z,`$2'x,`$2'y,`$2'z))')
  if dot3D(View3D,PFacet) > 0 then {
    fFacet = sqrta(dot3D(Light3D,PFacet)/length3D(PFacet))
    P1: Project(`$1'x,`$1'y,`$1'z)
    P2: Project(`$2'x,`$2'y,`$2'z)
    P3: Project(`$3'x,`$3'y,`$3'z)
    P4: Project(`$4'x,`$4'y,`$4'z)
    line fill_(fFacet) invis from P1 to P2 then to P3 then to P4 then to P1
    line from P1 to P2; round
    line to P3; round
    line to P4; round
    line to P1; round } ')

                           `M4Pgram3D( c,dne,dnw )'
define(`M4Pgram3D',`
 f2xyz3D(ne,sum3D(`$1'x,`$1'y,`$1'z,`$3'x,`$3'y,`$3'z))
 f2xyz3D(nw,sum3D(`$1'x,`$1'y,`$1'z,`$2'x,`$2'y,`$2'z))
 f2xyz3D(sw,diff3D(`$1'x,`$1'y,`$1'z,`$2'x,`$2'y,`$2'z))
 f2xyz3D(se,diff3D(`$1'x,`$1'y,`$1'z,`$3'x,`$3'y,`$3'z))
 define(`PPgrapm',`cross3D(
  diff3D(nwx,nwy,nwz,nex,ney,nez),
  diff3D(swx,swy,swz,nwx,nwy,nwz))')
  if dot3D(View3D,PPgram) > 0 then {
    fPgram = sqrta(dot3D(Light3D,PPgram)/length3D(PPgram))
    P1: Project(`$1'x,`$1'y,`$1'z)
    P2: Project(`$2'x,`$2'y,`$2'z)
    P3: Project(`$3'x,`$3'y,`$3'z)
    P4: Project(`$4'x,`$4'y,`$4'z)
    line fill_(fPgram) invis from P1 to P2 then to P3 then to P4 then to P1
    line from P1 to P2; round
    line to P3; round
    line to P4; round
    line to P1; round } ')
                           `prism3D(
                              xdispl,ydispl,zdispl,endwid,endht,(rad)rotation,
                              index,dataname,r,g,b)
                            Defined points .Start, .End, .C
                            args1-3 are the input 3D coords of .End wrt .Start
                            args4-5 define the end dimensions
                            arg6 is rotation about x axis
                            arg7 is the current depth of the data vector
                            arg8 is the name (e.g. X) of the vector of
                              stored face distance, color, and projected coords:
                              eg X0[n]=[d,r]; X1[n]=[g,b]
                                 X2[n]=proj(C); X3[n]=proj(NE); X4[n]=proj(NW)'
define(`prism3D',`[ Start: (0,0)
 xdispl = ifelse(`$1',,linewid,`$1')
 ydispl = ifelse(`$2',,linewid,`$2')
 zdispl = ifelse(`$3',,linewid,`$3')
 widp = ifelse(`$4',,(linewid/5),`$4')
 htp = ifelse(`$5',,(linewid/10),`$5')
 rotp = ifelse(`$6',,0,`$6')
 End: Project(xdispl,ydispl,zdispl); C: 0.5 between Start and End
 lenp = length3D(xdispl,ydispl,zdispl)
 az = atan2(ydispl,xdispl); ae = atan2(zdispl,sqrt(xdispl^2+ydispl^2))
 wp2 = widp/2; hp2 = htp/2
#                           3D coords of corners (B=back, F=front)
 f2xyz3D(nwB,rot3Dz(az,rot3Dy(-ae,rot3Dx(rotp,   0,-wp2, hp2))))
 f2xyz3D(swB,rot3Dz(az,rot3Dy(-ae,rot3Dx(rotp,   0,-wp2,-hp2))))
 f2xyz3D(seB,rot3Dz(az,rot3Dy(-ae,rot3Dx(rotp,   0, wp2,-hp2))))
 f2xyz3D(neB,rot3Dz(az,rot3Dy(-ae,rot3Dx(rotp,   0, wp2, hp2))))

 f2xyz3D(nwF,rot3Dz(az,rot3Dy(-ae,rot3Dx(rotp,lenp,-wp2, hp2))))
 f2xyz3D(swF,rot3Dz(az,rot3Dy(-ae,rot3Dx(rotp,lenp,-wp2,-hp2))))
 f2xyz3D(seF,rot3Dz(az,rot3Dy(-ae,rot3Dx(rotp,lenp, wp2,-hp2))))
 f2xyz3D(neF,rot3Dz(az,rot3Dy(-ae,rot3Dx(rotp,lenp, wp2, hp2))))
#                           facets
 M4Facet3D(neF,nwF,swF,seF)
 M4Facet3D(neB,seB,swB,nwB)
 M4Facet3D(neF,seF,seB,neB)
 M4Facet3D(neF,neB,nwB,nwF)
 M4Facet3D(seF,swF,swB,seB)
 M4Facet3D(nwF,nwB,swB,swF)
`$7']')


#####################################################
divert(0)dnl
