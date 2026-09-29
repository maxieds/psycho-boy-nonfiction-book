
############################################################
###
###   . O ¡ o STRUCTURE MEME ¡ . O o
###
###   Chimera command file generated from TeXshade logo data
###   use '.cmd' or '.com' suffix
###
###   Reference sequence: 'E_coli_GlpF', e.g. PDB 1FX8
###
############################################################

############################################################
###   residue colors: (set with \memeRed{residues} etc.)
###   DE (Red)
###   HKR (Blue)
###   CGNQSTY (Yellow)
###   FILMW (Black)
###   APV (White)
############################################################

############################################################
###   residues in labels: (\memelabelcutoff{bit-value})
###   0.1 bit required to appear
###   > : . indicate 3, 2, and 1 bit levels
############################################################

############################################################
###   initialize & load structure
############################################################
close session; background solid white;
echo load structure file for 'E_coli_GlpF', e.g. PDB 1FX8
open #0; ~ribbon; ~surface

############################################################
###   to set ball scale, change factor ]0.0 - 1.0]
###   in 'setattr m ballScale <factor> #0' below,
###   or use the \chimeraballScale{factor} command
############################################################
setattr m ballScale 1.0 #0

############################################################
###   display alpha-carbons only
############################################################
represent bs @ca; show @ca

############################################################
###   name structure model
############################################################
setattr m name logo #0

############################################################
###   logo data
############################################################
setattr a radius 1.473 #0:7@ca
setattr a color #0CC010570517 #0:7@ca
setattr a name '|| .FLS' #0:7@ca
setattr a radius 1.061 #0:8@ca
setattr a color #22962541099F #0:8@ca
setattr a name '|| .WYLF' #0:8@ca
setattr a radius 2.096 #0:9@ca
setattr a color #09032F7DC2EF #0:9@ca
setattr a name '|| R.KQ' #0:9@ca
setattr a radius 2.178 #0:10@ca
setattr a color #CA40C889AC09 #0:10@ca
setattr a name '|| A.EKQ' #0:10@ca
setattr a radius 1.232 #0:11@ca
setattr a color #8A718A714538 #0:11@ca
setattr a name '|| .VGAYLF' #0:11@ca
setattr a radius 1.913 #0:12@ca
setattr a color #09F109F105D4 #0:12@ca
setattr a name '|| .ILFV' #0:12@ca
setattr a radius 3.112 #0:13@ca
setattr a color #FC8DFC8DCC2F #0:13@ca
setattr a name '|| A:.GSV' #0:13@ca
setattr a radius 4.322 #0:14@ca
setattr a color #FFFF00000000 #0:14@ca
setattr a name '|| E>:.' #0:14@ca
setattr a radius 3.440 #0:15@ca
setattr a color #016B016B0083 #0:15@ca
setattr a name '|| F:.LC' #0:15@ca
setattr a radius 2.230 #0:16@ca
setattr a color #075807A505D3 #0:16@ca
setattr a name '|| .LIVF' #0:16@ca
setattr a radius 2.657 #0:17@ca
setattr a color #FFFFFFFF783D #0:17@ca
setattr a name '|| A.GS' #0:17@ca
setattr a radius 3.773 #0:18@ca
setattr a color #D7E8D7E80000 #0:18@ca
setattr a name '|| T>:.M' #0:18@ca
setattr a radius 2.097 #0:19@ca
setattr a color #088A088A0420 #0:19@ca
setattr a name '|| .LFA' #0:19@ca
setattr a radius 2.481 #0:20@ca
setattr a color #00F200F200BD #0:20@ca
setattr a name '|| L.IFVW' #0:20@ca
setattr a radius 3.057 #0:21@ca
setattr a color #004A004A000E #0:21@ca
setattr a name '|| F.L' #0:21@ca
setattr a radius 2.701 #0:22@ca
setattr a color #3BC23BC23BC2 #0:22@ca
setattr a name '|| V.LI' #0:22@ca
setattr a radius 2.024 #0:23@ca
setattr a color #1ECB1ECB069F #0:23@ca
setattr a name '|| .FYLV' #0:23@ca
setattr a radius 1.768 #0:24@ca
setattr a color #1B441B441476 #0:24@ca
setattr a name '|| .IFALV' #0:24@ca
setattr a radius 2.841 #0:25@ca
setattr a color #FFFFFFFF08A6 #0:25@ca
setattr a name '|| G.TS' #0:25@ca
setattr a radius 1.326 #0:26@ca
setattr a color #879582864490 #0:26@ca
setattr a name '|| .VILC' #0:26@ca
setattr a radius 2.916 #0:27@ca
setattr a color #9F8A9F8A175B #0:27@ca
setattr a name '|| G.LA' #0:27@ca
setattr a radius 2.371 #0:28@ca
setattr a color #EF03EF032197 #0:28@ca
setattr a name '|| S.TAVC' #0:28@ca
setattr a radius 2.180 #0:29@ca
setattr a color #E860E860B33C #0:29@ca
setattr a name '|| V.AGC' #0:29@ca
setattr a radius 1.761 #0:30@ca
setattr a color #1CBC1CBC1779 #0:30@ca
setattr a name '|| .IMALV' #0:30@ca
setattr a radius 1.470 #0:31@ca
setattr a color #C42ECDFE4527 #0:31@ca
setattr a name '|| .GAQN' #0:31@ca
setattr a radius 1.181 #0:32@ca
setattr a color #5DEA64CE3980 #0:32@ca
setattr a name '|| .VYFWA' #0:32@ca
setattr a radius 0.902 #0:33@ca
setattr a color #75B6A8AB46D8 #0:33@ca
setattr a name '|| .KNV' #0:33@ca
setattr a radius 0.889 #0:34@ca
setattr a color #10BD5883373D #0:34@ca
setattr a name '|| .KLR' #0:34@ca
setattr a radius 0.906 #0:35@ca
setattr a color #74E177B12C96 #0:35@ca
setattr a name '|| .SLA' #0:35@ca
setattr a radius 0.623 #0:36@ca
setattr a color #83EF89E63287 #0:36@ca
setattr a name '|| .T' #0:36@ca
setattr a radius 0.820 #0:37@ca
setattr a color #D292B0543AE0 #0:37@ca
setattr a name '|| .SA' #0:37@ca
setattr a radius 0.623 #0:38@ca
setattr a color #925787241E9C #0:38@ca
setattr a name '|| .S' #0:38@ca
setattr a radius 0.436 #0:39@ca
setattr a color #4EE56E191F33 #0:39@ca
setattr a name '|| .' #0:39@ca
setattr a radius 0.550 #0:40@ca
setattr a color #B86FC42D53F3 #0:40@ca
setattr a name '|| .GA' #0:40@ca
setattr a radius 0.420 #0:41@ca
setattr a color #19491949024C #0:41@ca
setattr a name '|| .W' #0:41@ca
setattr a radius 0.498 #0:42@ca
setattr a color #01D201360000 #0:42@ca
setattr a name '|| .LI' #0:42@ca
setattr a radius 0.312 #0:43@ca
setattr a color #CCB5A5D24091 #0:43@ca
setattr a name '|| .' #0:43@ca
setattr a radius 2.906 #0:44@ca
setattr a color #1B971B971B0A #0:44@ca
setattr a name '|| I.VA' #0:44@ca
setattr a radius 2.647 #0:45@ca
setattr a color #FC87FC87A050 #0:45@ca
setattr a name '|| A.SN' #0:45@ca
setattr a radius 1.815 #0:46@ca
setattr a color #04BD04BD0447 #0:46@ca
setattr a name '|| .LWIVF' #0:46@ca
setattr a radius 2.362 #0:47@ca
setattr a color #E816E81695BC #0:47@ca
setattr a name '|| A.GCST' #0:47@ca
setattr a radius 2.672 #0:48@ca
setattr a color #006602D30BD3 #0:48@ca
setattr a name '|| F.HW' #0:48@ca
setattr a radius 3.512 #0:49@ca
setattr a color #FFFFFFFF284F #0:49@ca
setattr a name '|| G:.A' #0:49@ca
setattr a radius 2.212 #0:50@ca
setattr a color #142D142D00F9 #0:50@ca
setattr a name '|| .LGFI' #0:50@ca
setattr a radius 2.009 #0:51@ca
setattr a color #8C0F8C0F44B5 #0:51@ca
setattr a name '|| .AMGS' #0:51@ca
setattr a radius 2.611 #0:52@ca
setattr a color #1CAF1CAF1AFA #0:52@ca
setattr a name '|| I.VL' #0:52@ca
setattr a radius 1.862 #0:53@ca
setattr a color #329F329F1E62 #0:53@ca
setattr a name '|| .FAGMTL' #0:53@ca
setattr a radius 1.664 #0:54@ca
setattr a color #760E760E49F7 #0:54@ca
setattr a name '|| .VTAMILF' #0:54@ca
setattr a radius 1.938 #0:55@ca
setattr a color #3AB33AB324F0 #0:55@ca
setattr a name '|| .LAGM' #0:55@ca
setattr a radius 2.923 #0:56@ca
setattr a color #A74DA74DA74D #0:56@ca
setattr a name '|| V.IA' #0:56@ca
setattr a radius 1.937 #0:57@ca
setattr a color #BBE9C06E0F4D #0:57@ca
setattr a name '|| .YQSAL' #0:57@ca
setattr a radius 1.734 #0:58@ca
setattr a color #BF91BF91517A #0:58@ca
setattr a name '|| .CAVSIT' #0:58@ca
setattr a radius 1.519 #0:59@ca
setattr a color #94C794C73679 #0:59@ca
setattr a name '|| .TAVLGFS' #0:59@ca
setattr a radius 2.729 #0:60@ca
setattr a color #E1A0E1A074F3 #0:60@ca
setattr a name '|| AG.' #0:60@ca
setattr a radius 1.939 #0:61@ca
setattr a color #7125B8920DDC #0:61@ca
setattr a name '|| .GHN' #0:61@ca
setattr a radius 2.932 #0:62@ca
setattr a color #102110210EDC #0:62@ca
setattr a name '|| I.VL' #0:62@ca
setattr a radius 4.044 #0:63@ca
setattr a color #F914F91401AF #0:63@ca
setattr a name '|| S>:.' #0:63@ca
setattr a radius 0.728 #0:64@ca
setattr a color #FFFFFFFF20B3 #0:64@ca
setattr a name '|| .G' #0:64@ca
setattr a radius 3.132 #0:65@ca
setattr a color #FFFFFFFF5555 #0:65@ca
setattr a name '|| GA.' #0:65@ca
setattr a radius 3.981 #0:66@ca
setattr a color #06F10C37FAC9 #0:66@ca
setattr a name '|| H>:.A' #0:66@ca
setattr a radius 2.420 #0:67@ca
setattr a color #06C906C906C9 #0:67@ca
setattr a name '|| I.LVF' #0:67@ca
setattr a radius 4.322 #0:68@ca
setattr a color #FFFFFFFF0000 #0:68@ca
setattr a name '|| N>:.' #0:68@ca
setattr a radius 4.218 #0:69@ca
setattr a color #FFFFFFFFFFFF #0:69@ca
setattr a name '|| P>:.' #0:69@ca
setattr a radius 4.264 #0:70@ca
setattr a color #FFFFFFFFFE41 #0:70@ca
setattr a name '|| A>:.' #0:70@ca
setattr a radius 3.811 #0:71@ca
setattr a color #DB83DB83DB83 #0:71@ca
setattr a name '|| V>:.I' #0:71@ca
setattr a radius 3.595 #0:72@ca
setattr a color #FFFFFFFF01B5 #0:72@ca
setattr a name '|| T:.S' #0:72@ca
setattr a radius 2.524 #0:73@ca
setattr a color #03D603D603A0 #0:73@ca
setattr a name '|| F.LIV' #0:73@ca
setattr a radius 2.925 #0:74@ca
setattr a color #EF21EF214BCA #0:74@ca
setattr a name '|| G.A' #0:74@ca
setattr a radius 2.254 #0:75@ca
setattr a color #0D920D920731 #0:75@ca
setattr a name '|| L.MAFC' #0:75@ca
setattr a radius 1.789 #0:76@ca
setattr a color #2518251817DB #0:76@ca
setattr a name '|| .FLACW' #0:76@ca
setattr a radius 1.947 #0:77@ca
setattr a color #226A230D1A05 #0:77@ca
setattr a name '|| .LVI' #0:77@ca
setattr a radius 1.627 #0:78@ca
setattr a color #B633B9314FD0 #0:78@ca
setattr a name '|| .AGSF' #0:78@ca
setattr a radius 2.199 #0:79@ca
setattr a color #50ACA8551176 #0:79@ca
setattr a name '|| .GRCAS' #0:79@ca
setattr a radius 1.325 #0:80@ca
setattr a color #17719FE59351 #0:80@ca
setattr a name '|| .KRQHN' #0:80@ca
setattr a radius 2.039 #0:81@ca
setattr a color #0B5509E10989 #0:81@ca
setattr a name '|| .ILVFM' #0:81@ca
setattr a radius 2.139 #0:82@ca
setattr a color #EBA3E17B31D8 #0:82@ca
setattr a name '|| S.PT' #0:82@ca
setattr a radius 1.836 #0:83@ca
setattr a color #0885099206BB #0:83@ca
setattr a name '|| .LIWV' #0:83@ca
setattr a radius 1.108 #0:84@ca
setattr a color #257E35D21A7C #0:84@ca
setattr a name '|| .LTIA' #0:84@ca
setattr a radius 2.072 #0:85@ca
setattr a color #09DB2D14C16B #0:85@ca
setattr a name '|| R.KT' #0:85@ca
setattr a radius 1.938 #0:86@ca
setattr a color #B352B3527D7B #0:86@ca
setattr a name '|| .AGVLSF' #0:86@ca
setattr a radius 1.921 #0:87@ca
setattr a color #40DE40DE40DE #0:87@ca
setattr a name '|| .VILPA' #0:87@ca
setattr a radius 1.176 #0:88@ca
setattr a color #2C092D871C5C #0:88@ca
setattr a name '|| .FLPV' #0:88@ca
setattr a radius 3.969 #0:89@ca
setattr a color #EEE0EEE001AE #0:89@ca
setattr a name '|| Y>:.M' #0:89@ca
setattr a radius 2.150 #0:90@ca
setattr a color #093809380797 #0:90@ca
setattr a name '|| .IWMV' #0:90@ca
setattr a radius 2.112 #0:91@ca
setattr a color #463346333E14 #0:91@ca
setattr a name '|| .IVAL' #0:91@ca
setattr a radius 2.760 #0:92@ca
setattr a color #BC20B92EA154 #0:92@ca
setattr a name '|| A.MS' #0:92@ca
setattr a radius 4.322 #0:93@ca
setattr a color #FFFFFFFF0000 #0:93@ca
setattr a name '|| Q>:.' #0:93@ca
setattr a radius 1.979 #0:94@ca
setattr a color #4BD14BD1101F #0:94@ca
setattr a name '|| .CLVIF' #0:94@ca
setattr a radius 2.917 #0:95@ca
setattr a color #09F209F209F2 #0:95@ca
setattr a name '|| L:.VIA' #0:95@ca
setattr a radius 4.045 #0:96@ca
setattr a color #FFFFFFFF0C26 #0:96@ca
setattr a name '|| G>:.A' #0:96@ca
setattr a radius 3.214 #0:97@ca
setattr a color #FFFFFFFFBD68 #0:97@ca
setattr a name '|| A:.SG' #0:97@ca
setattr a radius 2.067 #0:98@ca
setattr a color #106310630AA7 #0:98@ca
setattr a name '|| I.VFMT' #0:98@ca
setattr a radius 1.755 #0:99@ca
setattr a color #89AB89AB53A6 #0:99@ca
setattr a name '|| .CVAIL' #0:99@ca
setattr a radius 3.132 #0:100@ca
setattr a color #FC93FC93634B #0:100@ca
setattr a name '|| GA.' #0:100@ca
setattr a radius 2.092 #0:101@ca
setattr a color #FFFFFFFF9C24 #0:101@ca
setattr a name '|| A.CVTS' #0:101@ca
setattr a radius 2.127 #0:102@ca
setattr a color #9C4D9C4D48B2 #0:102@ca
setattr a name '|| .GALF' #0:102@ca
setattr a radius 2.026 #0:103@ca
setattr a color #16D316D311A8 #0:103@ca
setattr a name '|| .LIVTF' #0:103@ca
setattr a radius 2.680 #0:104@ca
setattr a color #3D723D723930 #0:104@ca
setattr a name '|| LV.AI' #0:104@ca
setattr a radius 1.577 #0:105@ca
setattr a color #0B586EDB1869 #0:105@ca
setattr a name '|| .KYS' #0:105@ca
setattr a radius 1.426 #0:106@ca
setattr a color #74436E742DDA #0:106@ca
setattr a name '|| .GALFV' #0:106@ca
setattr a radius 1.409 #0:107@ca
setattr a color #1E7B205718D6 #0:107@ca
setattr a name '|| .FVIL' #0:107@ca
setattr a radius 1.493 #0:108@ca
setattr a color #B93CAEE1162B #0:108@ca
setattr a name '|| .TYQFA' #0:108@ca
setattr a radius 1.141 #0:109@ca
setattr a color #AB61C5D44348 #0:109@ca
setattr a name '|| .PSGY' #0:109@ca
setattr a radius 1.168 #0:110@ca
setattr a color #B827B85D369C #0:110@ca
setattr a name '|| .GPKA' #0:110@ca
setattr a radius 0.603 #0:111@ca
setattr a color #61F26B8B1B77 #0:111@ca
setattr a name '|| .L' #0:111@ca
setattr a radius 0.534 #0:112@ca
setattr a color #33354166273D #0:112@ca
setattr a name '|| .A' #0:112@ca
setattr a radius 0.728 #0:113@ca
setattr a color #791975332C70 #0:113@ca
setattr a name '|| .YV' #0:113@ca
setattr a radius 0.443 #0:114@ca
setattr a color #7D67851D497E #0:114@ca
setattr a name '|| .' #0:114@ca
setattr a radius 0.645 #0:115@ca
setattr a color #809B8FD62A4E #0:115@ca
setattr a name '|| .G' #0:115@ca
setattr a radius 0.848 #0:116@ca
setattr a color #3774413D1985 #0:116@ca
setattr a name '|| .LAYHF' #0:116@ca
setattr a radius 1.620 #0:117@ca
setattr a color #E965E3C01878 #0:117@ca
setattr a name '|| .GSNT' #0:117@ca
setattr a radius 1.568 #0:118@ca
setattr a color #67CA6B080B2C #0:118@ca
setattr a name '|| .GL' #0:118@ca
setattr a radius 0.157 #0:119@ca
setattr a color #5BDC80002424 #0:119@ca
setattr a name '|| .' #0:119@ca
setattr a radius 0.277 #0:120@ca
setattr a color #0E4B1D010000 #0:120@ca
setattr a name '|| .L' #0:120@ca
setattr a radius 0.250 #0:121@ca
setattr a color #22AB181D0A2C #0:121@ca
setattr a name '|| .' #0:121@ca
setattr a radius 0.396 #0:122@ca
setattr a color #5CF9625257A0 #0:122@ca
setattr a name '|| .V' #0:122@ca
setattr a radius 0.343 #0:123@ca
setattr a color #8894B31F5515 #0:123@ca
setattr a name '|| .' #0:123@ca
setattr a radius 0.490 #0:124@ca
setattr a color #FFFFF50615F1 #0:124@ca
setattr a name '|| .G' #0:124@ca
setattr a radius 0.400 #0:125@ca
setattr a color #F0DDC24E3E14 #0:125@ca
setattr a name '|| .T' #0:125@ca
setattr a radius 0.267 #0:126@ca
setattr a color #A41789990BF7 #0:126@ca
setattr a name '|| .' #0:126@ca
setattr a radius 0.286 #0:127@ca
setattr a color #EAF7540A1494 #0:127@ca
setattr a name '|| .' #0:127@ca
setattr a radius 0.331 #0:128@ca
setattr a color #E10FE8CB5CCE #0:128@ca
setattr a name '|| .' #0:128@ca
setattr a radius 0.314 #0:129@ca
setattr a color #96CE89AA19A7 #0:129@ca
setattr a name '|| .' #0:129@ca
setattr a radius 1.806 #0:130@ca
setattr a color #E28BDE5F3880 #0:130@ca
setattr a name '|| G.A' #0:130@ca
setattr a radius 1.235 #0:131@ca
setattr a color #884B94166CF0 #0:131@ca
setattr a name '|| .AVTL' #0:131@ca
setattr a radius 1.615 #0:132@ca
setattr a color #B60EB60E2063 #0:132@ca
setattr a name '|| .NALT' #0:132@ca
setattr a radius 0.847 #0:133@ca
setattr a color #CBE0BC7D3F78 #0:133@ca
setattr a name '|| .GATS' #0:133@ca
setattr a radius 0.494 #0:134@ca
setattr a color #39A84CAA1FFF #0:134@ca
setattr a name '|| .I' #0:134@ca
setattr a radius 2.132 #0:135@ca
setattr a color #292A2B572577 #0:135@ca
setattr a name '|| .VLFS' #0:135@ca
setattr a radius 1.717 #0:136@ca
setattr a color #D340E65C7367 #0:136@ca
setattr a name '|| .ASHPN' #0:136@ca
setattr a radius 1.055 #0:137@ca
setattr a color #BFCBBC894344 #0:137@ca
setattr a name '|| .TPAG' #0:137@ca
setattr a radius 2.127 #0:138@ca
setattr a color #DE03DC6B04E4 #0:138@ca
setattr a name '|| G.YN' #0:138@ca
setattr a radius 1.372 #0:139@ca
setattr a color #BEF8BA9E5CAA #0:139@ca
setattr a name '|| .YVPL' #0:139@ca
setattr a radius 1.504 #0:140@ca
setattr a color #E7D3EB661D9D #0:140@ca
setattr a name '|| .STNGA' #0:140@ca
setattr a radius 0.797 #0:141@ca
setattr a color #55ED82B25517 #0:141@ca
setattr a name '|| .KVA' #0:141@ca
setattr a radius 1.416 #0:142@ca
setattr a color #885D96A80FA1 #0:142@ca
setattr a name '|| .GL' #0:142@ca
setattr a radius 0.600 #0:143@ca
setattr a color #9522810D182C #0:143@ca
setattr a name '|| .Q' #0:143@ca
setattr a radius 2.204 #0:144@ca
setattr a color #F158EBEE4AFF #0:144@ca
setattr a name '|| G.AS' #0:144@ca
setattr a radius 0.303 #0:145@ca
setattr a color #282728270B60 #0:145@ca
setattr a name '|| .' #0:145@ca
setattr a radius 0.233 #0:146@ca
setattr a color #43BB474C3871 #0:146@ca
setattr a name '|| .' #0:146@ca
setattr a radius 0.290 #0:147@ca
setattr a color #8E7EC0482A0F #0:147@ca
setattr a name '|| .' #0:147@ca
setattr a radius 0.584 #0:148@ca
setattr a color #FFFFF8FB5037 #0:148@ca
setattr a name '|| .GNA' #0:148@ca
setattr a radius 2.455 #0:149@ca
setattr a color #0A9E0A9E0937 #0:149@ca
setattr a name '|| L.FV' #0:149@ca
setattr a radius 1.604 #0:150@ca
setattr a color #744574453878 #0:150@ca
setattr a name '|| .GVLAF' #0:150@ca
setattr a radius 1.186 #0:151@ca
setattr a color #7DAE68F55464 #0:151@ca
setattr a name '|| .AVDM' #0:151@ca
setattr a radius 3.778 #0:152@ca
setattr a color #F922148501AB #0:152@ca
setattr a name '|| E>:.Q' #0:152@ca
setattr a radius 2.401 #0:153@ca
setattr a color #0531053104B5 #0:153@ca
setattr a name '|| I.LFV' #0:153@ca
setattr a radius 2.400 #0:154@ca
setattr a color #214121412006 #0:154@ca
setattr a name '|| I.VFL' #0:154@ca
setattr a radius 2.040 #0:155@ca
setattr a color #53A153A10AE6 #0:155@ca
setattr a name '|| .GLIM' #0:155@ca
setattr a radius 3.786 #0:156@ca
setattr a color #F5D2F5D20361 #0:156@ca
setattr a name '|| T>:.S' #0:156@ca
setattr a radius 2.596 #0:157@ca
setattr a color #093B093B059E #0:157@ca
setattr a name '|| F.ALMG' #0:157@ca
setattr a radius 1.530 #0:158@ca
setattr a color #8F9F8F9F5639 #0:158@ca
setattr a name '|| .VQIAGL' #0:158@ca
setattr a radius 3.733 #0:159@ca
setattr a color #000200020002 #0:159@ca
setattr a name '|| L>:.F' #0:159@ca
setattr a radius 2.438 #0:160@ca
setattr a color #92229222851F #0:160@ca
setattr a name '|| V.LIM' #0:160@ca
setattr a radius 2.187 #0:161@ca
setattr a color #4BCB4BCB0B56 #0:161@ca
setattr a name '|| .YLFV' #0:161@ca
setattr a radius 2.103 #0:162@ca
setattr a color #C540C540185C #0:162@ca
setattr a name '|| T.CVIG' #0:162@ca
setattr a radius 3.048 #0:163@ca
setattr a color #7B427B4278EE #0:163@ca
setattr a name '|| V:.I' #0:163@ca
setattr a radius 1.928 #0:164@ca
setattr a color #16A918E9051A #0:164@ca
setattr a name '|| .FLY' #0:164@ca
setattr a radius 2.345 #0:165@ca
setattr a color #E4D0E3298B54 #0:165@ca
setattr a name '|| A.SGVM' #0:165@ca
setattr a radius 1.698 #0:166@ca
setattr a color #A81CA81C5372 #0:166@ca
setattr a name '|| .ATSIVL' #0:166@ca
setattr a radius 2.140 #0:167@ca
setattr a color #E572E5723D0A #0:167@ca
setattr a name '|| T.AGC' #0:167@ca
setattr a radius 2.367 #0:168@ca
setattr a color #D7F7436B34AF #0:168@ca
setattr a name '|| D.VA' #0:168@ca
setattr a radius 1.108 #0:169@ca
setattr a color #A9827F5A49E1 #0:169@ca
setattr a name '|| .DPAS' #0:169@ca
setattr a radius 1.558 #0:170@ca
setattr a color #352B5625BC11 #0:170@ca
setattr a name '|| .KRP' #0:170@ca
setattr a radius 1.995 #0:171@ca
setattr a color #113C4342B925 #0:171@ca
setattr a name '|| .RKNA' #0:171@ca
setattr a radius 1.077 #0:172@ca
setattr a color #79A6B0F7151D #0:172@ca
setattr a name '|| .NSKT' #0:172@ca
setattr a radius 1.117 #0:173@ca
setattr a color #CD2DCD2D2C1C #0:173@ca
setattr a name '|| .SV' #0:173@ca
setattr a radius 1.221 #0:174@ca
setattr a color #3DB56D3C278A #0:174@ca
setattr a name '|| .HSDP' #0:174@ca
setattr a radius 1.262 #0:175@ca
setattr a color #4AC15B844421 #0:175@ca
setattr a name '|| .VLRI' #0:175@ca
setattr a radius 1.507 #0:176@ca
setattr a color #D5BAD946595C #0:176@ca
setattr a name '|| .GP' #0:176@ca
setattr a radius 1.273 #0:177@ca
setattr a color #88E986162BA8 #0:177@ca
setattr a name '|| .GITV' #0:177@ca
setattr a radius 1.967 #0:178@ca
setattr a color #10FF1171032A #0:178@ca
setattr a name '|| .LSIF' #0:178@ca
setattr a radius 2.318 #0:179@ca
setattr a color #DE99D13DB6D6 #0:179@ca
setattr a name '|| A.PEGI' #0:179@ca
setattr a radius 3.108 #0:180@ca
setattr a color #F913FC89ECF8 #0:180@ca
setattr a name '|| P:.AG' #0:180@ca
setattr a radius 2.738 #0:181@ca
setattr a color #008F008F0066 #0:181@ca
setattr a name '|| L.IF' #0:181@ca
setattr a radius 1.791 #0:182@ca
setattr a color #B391B3919978 #0:182@ca
setattr a name '|| .APSL' #0:182@ca
setattr a radius 3.459 #0:183@ca
setattr a color #063D063D04E3 #0:183@ca
setattr a name '|| I:.V' #0:183@ca
setattr a radius 4.160 #0:184@ca
setattr a color #F5C3F5C30000 #0:184@ca
setattr a name '|| G>:.' #0:184@ca
setattr a radius 2.710 #0:185@ca
setattr a color #00BE00BE005F #0:185@ca
setattr a name '|| F.LI' #0:185@ca
setattr a radius 1.819 #0:186@ca
setattr a color #78E478E44447 #0:186@ca
setattr a name '|| .ASLIV' #0:186@ca
setattr a radius 3.278 #0:187@ca
setattr a color #9F729F729F72 #0:187@ca
setattr a name '|| V:.IL' #0:187@ca
setattr a radius 1.622 #0:188@ca
setattr a color #57A257A227B5 #0:188@ca
setattr a name '|| .FAGTV' #0:188@ca
setattr a radius 1.771 #0:189@ca
setattr a color #339633962976 #0:189@ca
setattr a name '|| .LAMVI' #0:189@ca
setattr a radius 1.839 #0:190@ca
setattr a color #80527CAC33D7 #0:190@ca
setattr a name '|| .VIGN' #0:190@ca
setattr a radius 2.490 #0:191@ca
setattr a color #0AC7457E76A2 #0:191@ca
setattr a name '|| H.IGV' #0:191@ca
setattr a radius 2.864 #0:192@ca
setattr a color #0531053101BB #0:192@ca
setattr a name '|| L:.TM' #0:192@ca
setattr a radius 2.174 #0:193@ca
setattr a color #9F7F9F7F7A81 #0:193@ca
setattr a name '|| A.SVLIF' #0:193@ca
setattr a radius 1.675 #0:194@ca
setattr a color #880886CE2770 #0:194@ca
setattr a name '|| .TGALM' #0:194@ca
setattr a radius 2.890 #0:195@ca
setattr a color #3BA53BA501AA #0:195@ca
setattr a name '|| IG.' #0:195@ca
setattr a radius 1.530 #0:196@ca
setattr a color #C85DC1DB8318 #0:196@ca
setattr a name '|| .PGAY' #0:196@ca
setattr a radius 1.528 #0:197@ca
setattr a color #2A8E2A8E0CB4 #0:197@ca
setattr a name '|| .IFYNV' #0:197@ca
setattr a radius 3.127 #0:198@ca
setattr a color #FFFFF9090370 #0:198@ca
setattr a name '|| T:.S' #0:198@ca
setattr a radius 3.941 #0:199@ca
setattr a color #FFFFFFFF0000 #0:199@ca
setattr a name '|| G>:.N' #0:199@ca
setattr a radius 1.755 #0:200@ca
setattr a color #E8A2E8A23372 #0:200@ca
setattr a name '|| .TACYG' #0:200@ca
setattr a radius 2.477 #0:201@ca
setattr a color #F96DF96D36FC #0:201@ca
setattr a name '|| .SGA' #0:201@ca
setattr a radius 2.727 #0:202@ca
setattr a color #02A902A902A9 #0:202@ca
setattr a name '|| MI.VL' #0:202@ca
setattr a radius 4.264 #0:203@ca
setattr a color #FFFFFFFF0000 #0:203@ca
setattr a name '|| N>:.' #0:203@ca
setattr a radius 4.264 #0:204@ca
setattr a color #FFFFFE41FE41 #0:204@ca
setattr a name '|| P>:.' #0:204@ca
setattr a radius 4.017 #0:205@ca
setattr a color #FFFFFFFFF90C #0:205@ca
setattr a name '|| A>:.' #0:205@ca
setattr a radius 3.906 #0:206@ca
setattr a color #115E1312FE4A #0:206@ca
setattr a name '|| R>:.V' #0:206@ca
setattr a radius 3.077 #0:207@ca
setattr a color #FFFFC4C214CC #0:207@ca
setattr a name '|| S:.DA' #0:207@ca
setattr a radius 2.971 #0:208@ca
setattr a color #004B004B0000 #0:208@ca
setattr a name '|| FL.T' #0:208@ca
setattr a radius 3.624 #0:209@ca
setattr a color #FFFFFE4C169A #0:209@ca
setattr a name '|| G>:.A' #0:209@ca
setattr a radius 2.802 #0:210@ca
setattr a color #FC89FC89E7D9 #0:210@ca
setattr a name '|| P.AS' #0:210@ca
setattr a radius 3.028 #0:211@ca
setattr a color #B86EC26DF40F #0:211@ca
setattr a name '|| A:.RK' #0:211@ca
setattr a radius 2.586 #0:212@ca
setattr a color #3F353F353F35 #0:212@ca
setattr a name '|| V.IL' #0:212@ca
setattr a radius 1.898 #0:213@ca
setattr a color #28F028F026D5 #0:213@ca
setattr a name '|| .IVFAL' #0:213@ca
setattr a radius 1.162 #0:214@ca
setattr a color #75D481051BA5 #0:214@ca
setattr a name '|| .TYFSA' #0:214@ca
setattr a radius 1.263 #0:215@ca
setattr a color #7EBC93D410C6 #0:215@ca
setattr a name '|| .NGWA' #0:215@ca
setattr a radius 0.680 #0:216@ca
setattr a color #263344180922 #0:216@ca
setattr a name '|| .KL' #0:216@ca
setattr a radius 0.989 #0:217@ca
setattr a color #382C25100F84 #0:217@ca
setattr a name '|| .FWDA' #0:217@ca
setattr a radius 0.854 #0:218@ca
setattr a color #7292989422BA #0:218@ca
setattr a name '|| .GSK' #0:218@ca
setattr a radius 0.528 #0:219@ca
setattr a color #2BFF271C138E #0:219@ca
setattr a name '|| .W' #0:219@ca
setattr a radius 0.541 #0:220@ca
setattr a color #BAE9DD740000 #0:220@ca
setattr a name '|| .G' #0:220@ca
setattr a radius 0.224 #0:221@ca
setattr a color #77206FBD1802 #0:221@ca
setattr a name '|| .' #0:221@ca
setattr a radius 0.218 #0:222@ca
setattr a color #6FF9650C3FB9 #0:222@ca
setattr a name '|| .' #0:222@ca
setattr a radius 0.362 #0:223@ca
setattr a color #B5B9B5B99C1A #0:223@ca
setattr a name '|| .VA' #0:223@ca
setattr a radius 0.503 #0:224@ca
setattr a color #024503560000 #0:224@ca
setattr a name '|| .F' #0:224@ca
setattr a radius 0.309 #0:225@ca
setattr a color #A983B04B333B #0:225@ca
setattr a name '|| .T' #0:225@ca
setattr a radius 0.357 #0:226@ca
setattr a color #B502CB36347C #0:226@ca
setattr a name '|| .G' #0:226@ca
setattr a radius 0.692 #0:227@ca
setattr a color #934FAD710688 #0:227@ca
setattr a name '|| .G' #0:227@ca
setattr a radius 0.400 #0:228@ca
setattr a color #9C38955F0000 #0:228@ca
setattr a name '|| .N' #0:228@ca
setattr a radius 0.777 #0:229@ca
setattr a color #D807CC3C6F1E #0:229@ca
setattr a name '|| .AS' #0:229@ca
setattr a radius 0.857 #0:230@ca
setattr a color #624829810000 #0:230@ca
setattr a name '|| .DW' #0:230@ca
setattr a radius 0.253 #0:231@ca
setattr a color #5E8E817C33F6 #0:231@ca
setattr a name '|| .' #0:231@ca
setattr a radius 1.421 #0:232@ca
setattr a color #BF4F7782047F #0:232@ca
setattr a name '|| .DYN' #0:232@ca
setattr a radius 1.940 #0:233@ca
setattr a color #109D39D6842F #0:233@ca
setattr a name '|| H.WQA' #0:233@ca
setattr a radius 3.685 #0:234@ca
setattr a color #001B001B0012 #0:234@ca
setattr a name '|| W>:.' #0:234@ca
setattr a radius 2.966 #0:235@ca
setattr a color #2AAD2AAD29F8 #0:235@ca
setattr a name '|| IV.' #0:235@ca
setattr a radius 2.740 #0:236@ca
setattr a color #4F9C4F9C20FB #0:236@ca
setattr a name '|| F.YP' #0:236@ca
setattr a radius 3.026 #0:237@ca
setattr a color #0440044003D1 #0:237@ca
setattr a name '|| W:.VI' #0:237@ca
setattr a radius 2.881 #0:238@ca
setattr a color #9FA19FA19E4C #0:238@ca
setattr a name '|| V:.IAL' #0:238@ca
setattr a radius 3.342 #0:239@ca
setattr a color #FCA3FCA325F8 #0:239@ca
setattr a name '|| G:.AS' #0:239@ca
setattr a radius 4.160 #0:240@ca
setattr a color #FFFFFE45FAD3 #0:240@ca
setattr a name '|| P>:.' #0:240@ca
setattr a radius 2.345 #0:241@ca
setattr a color #00460046001C #0:241@ca
setattr a name '|| .LFIM' #0:241@ca
setattr a radius 2.392 #0:242@ca
setattr a color #19081908176D #0:242@ca
setattr a name '|| I.VL' #0:242@ca
setattr a radius 4.017 #0:243@ca
setattr a color #FFFFFFFF0DE4 #0:243@ca
setattr a name '|| G>:.A' #0:243@ca
setattr a radius 3.083 #0:244@ca
setattr a color #FFFFFFFF924E #0:244@ca
setattr a name '|| AG.S' #0:244@ca
setattr a radius 1.637 #0:245@ca
setattr a color #82C582C559C0 #0:245@ca
setattr a name '|| .AGVIL' #0:245@ca
setattr a radius 2.327 #0:246@ca
setattr a color #0B420B42097B #0:246@ca
setattr a name '|| L.IAV' #0:246@ca
setattr a radius 3.218 #0:247@ca
setattr a color #F5EAF5EAB6C2 #0:247@ca
setattr a name '|| A:.G' #0:247@ca
setattr a radius 2.479 #0:248@ca
setattr a color #F258F25887A4 #0:248@ca
setattr a name '|| A.GVS' #0:248@ca
setattr a radius 1.773 #0:249@ca
setattr a color #0F440F4409C4 #0:249@ca
setattr a name '|| .LIFAV' #0:249@ca
setattr a radius 1.935 #0:250@ca
setattr a color #445F445F1DAC #0:250@ca
setattr a name '|| .IYVL' #0:250@ca
setattr a radius 2.590 #0:251@ca
setattr a color #501E8C4C048C #0:251@ca
setattr a name '|| Y.HWF' #0:251@ca
setattr a radius 0.903 #0:252@ca
setattr a color #92D47EB2186D #0:252@ca
setattr a name '|| .QE' #0:252@ca
setattr a radius 1.003 #0:253@ca
setattr a color #46EF47CA1A99 #0:253@ca
setattr a name '|| .FYVL' #0:253@ca
setattr a radius 1.957 #0:254@ca
setattr a color #2F9A30592D5E #0:254@ca
setattr a name '|| .VLIFM' #0:254@ca
setattr a radius 1.931 #0:255@ca
setattr a color #04C505050243 #0:255@ca
setattr a name '|| .LIF' #0:255@ca
setattr a radius 0.984 #0:256@ca
setattr a color #192B52294732 #0:256@ca
setattr a name '|| .RI' #0:256@ca
setattr a radius 1.032 #0:257@ca
setattr a color #BC94BC948612 #0:257@ca
setattr a name '|| .AP' #0:257@ca
setattr a radius 0.726 #0:258@ca
setattr a color #501D60C71220 #0:258@ca
setattr a name '|| .SI' #0:258@ca
setattr a radius 0.319 #0:259@ca
setattr a color #115914170EEA #0:259@ca
setattr a name '|| .L' #0:259@ca
setattr a radius 0.267 #0:260@ca
setattr a color #D5CFB5356B62 #0:260@ca
setattr a name '|| .P' #0:260@ca
setattr a radius 0.155 #0:261@ca
setattr a color #BD3DB2331614 #0:261@ca
setattr a name '|| .' #0:261@ca
setattr a radius 0.220 #0:262@ca
setattr a color #A69CA69C854A #0:262@ca
setattr a name '|| .' #0:262@ca
setattr a radius 0.231 #0:263@ca
setattr a color #B9C28208662A #0:263@ca
setattr a name '|| .' #0:263@ca
setattr a radius 0.215 #0:264@ca
setattr a color #A565AD6A4F30 #0:264@ca
setattr a name '|| .' #0:264@ca
setattr a radius 0.120 #0:265@ca
setattr a color #8C0082AA2555 #0:265@ca
setattr a name '|| .' #0:265@ca
setattr a radius 0.133 #0:266@ca
setattr a color #6CD88C653BF1 #0:266@ca
setattr a name '|| .' #0:266@ca
setattr a radius 0.684 #0:267@ca
setattr a color #CCC3A7885B01 #0:267@ca
setattr a name '|| .PA' #0:267@ca
setattr a radius 0.598 #0:268@ca
setattr a color #215145631FCA #0:268@ca
setattr a name '|| .F' #0:268@ca
setattr a radius 0.897 #0:269@ca
setattr a color #3ED96AAF3F60 #0:269@ca
setattr a name '|| .KE' #0:269@ca
setattr a radius 0.771 #0:270@ca
setattr a color #7DFB8C3642F1 #0:270@ca
setattr a name '|| .SLPA' #0:270@ca
setattr a radius 0.412 #0:271@ca
setattr a color #62D273CCB108 #0:271@ca
setattr a name '|| .K' #0:271@ca
setattr a radius 0.237 #0:272@ca
setattr a color #EEB6E6125BD0 #0:272@ca
setattr a name '|| .' #0:272@ca
setattr a radius 0.254 #0:273@ca
setattr a color #CAABA0853237 #0:273@ca
setattr a name '|| .' #0:273@ca
setattr a radius 0.262 #0:274@ca
setattr a color #4A0258CF3B35 #0:274@ca
setattr a name '|| .' #0:274@ca
setattr a radius 0.253 #0:275@ca
setattr a color #841384135601 #0:275@ca
setattr a name '|| .' #0:275@ca
setattr a radius 0.200 #0:276@ca
setattr a color #49027CD3A992 #0:276@ca
setattr a name '|| .' #0:276@ca
setattr a radius 0.300 #0:277@ca
setattr a color #C28EAE1351EB #0:277@ca
setattr a name '|| .' #0:277@ca
setattr a radius 0.264 #0:278@ca
setattr a color #22614CB10DE2 #0:278@ca
setattr a name '|| .' #0:278@ca
setattr a radius 0.288 #0:279@ca
setattr a color #434B36849955 #0:279@ca
setattr a name '|| .K' #0:279@ca
setattr a radius 0.192 #0:280@ca
setattr a color #558E6CE37C71 #0:280@ca
setattr a name '|| .' #0:280@ca
setattr a radius 0.232 #0:281@ca
setattr a color #2E471A71358C #0:281@ca
setattr a name '|| .' #0:281@ca
