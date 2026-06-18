.PS
# shapesDPV.m4
threeD_init
include(../Shapedefs.m4)

azimuth = 60
elev = 10
setview(azimuth,elev)
[ Orig: (0,0)
 setlight
 Arrow3D(1,0,0) with .Start at Orig; move left 12bp__ from last [].End "x"
 Arrow3D(0,1,0) with .Start at Orig; "y" ljust at last [].End
 Arrow3D(0,0,1.2) with .Start at Orig; "z" above at last [].End
 setlight(0,0,0)
 cylinder3D(1,1,1,0.6) with .Start at Project(0.5,0.5,0.5)
]
 Ball: shadedball(0.5) with .nw at last [].ne+(-0.25,0)
[
 setview(45,10)
 setlight(40,70)
 n = 9; len = 1.5; thmin = m4azim+pi_/2*0.8; thmax = thmin+twopi_
 for i=0 to n do {
  r = i/n*(thmax-thmin)+thmin
  prism3D(rot3Dz(r,rot3Dy(pi_/4,len,0,0)),0.2,0.1) \
    with .Start at Project(rot3Dz(r,rot3Dy(pi_/4,len*0.5,0,0))) }
] with .nw at last [].ne
[
 setlight(0,0)
 movewid = 0.1
 len = 1.5; ni = 5; nj = 5
 for i=1 to ni-1 do {
  {for j = 0 to nj by 2 do {
    setview(0,i/ni*180-90,j/nj*90)
    cylinder3D(0,0,len*(j+1)/(nj+1),0.4)
    if j < nj then {move right} } }
 if i < ni then {move down 0.85; right_} } #else { move down movewid } }
] with .nw at 1st [].sw+(0,-0.1)
[
 setlight(0,0)
 len = 1.5; ni = 4; nj = 6
 for i=1 to ni do {
  {for j = 0 to nj by 2 do {
    setview(0,i/ni*180-90,j/nj*90)
    cone3D(0,0,len*(j+1)/(nj+1),0.4)
    if i==2 && j==(nj-2) then { move up_ 0.2 right_ -0.4 } \
    else { if j < nj then {move right_ 0.1}} } }
 if i < ni then {move down_ 0.75; right_} }
] with .nw at last [].ne+(0.2,0)
.PE
