.PS
# diamondDPV.m4
gen_init
NeedDpicTools
# See LaTeX Graphics Companion pp 57-58 and
# https://tex.stackexchange.com/questions/730392/rotating-triangle
ifdpic(`
  dimen = 1.3
  ratio = 0.9
  n = 30

  North: (0,dimen)
  East: (dimen,0)
  South: (0,-dimen)
  West: (-dimen,0)

define(`diamond',`[
for i = 2 to n do { 
  ifelse(`$1',,
   `hsvtorgb(hue,1,1,r0,g0,b0)
    line from North to East then to South then to West then to North \
      shaded rgbstring(r0,g0,b0)
    hue = hue+360/(n-1)',
   `shade(`$1',
      line from North to East then to South then to West then to North)')
  Tmp: North
  North: ratio between East and North
  East: ratio between South and East
  South: ratio between West and South
  West: ratio between Tmp and West
  }]')

define(`triangle',`[
for i = 2 to n do { 
  hue = 180+(i-2)/(n-1)*360
  hsvtorgb(hue,1,1,r0,g0,b0)
  line from North to East then to West then to North shaded rgbstring(r0,g0,b0)
  Tmp: North
  North: ratio between East and North
  East: ratio between West and East
  West: ratio between Tmp and West
  }]')

  linethick = 0.4
  diamond( (n-i)/(n-2) )
  hue = 0
  diamond with .w at last [].e+(0.125,0)
  North: (0,dimen*sqrt(3)/2)
  East: (dimen,-dimen*sqrt(3)/2)
  West: (-dimen,-dimen*sqrt(3)/2)
  hue = 180
  triangle with .w at last [].e
',
`box "diamond.m4" "requires" "dpic"')

.PE
