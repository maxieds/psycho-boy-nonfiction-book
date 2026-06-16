
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
###   duplicate structure;
###   to alter direction or Angstrom distance, set
###   'move <x, y, or z> 1 <distance> models #1' below,
###   or use the \chimeraaxisdistance{x}{y}{z} command
############################################################
combine #0
move x 1 40 models #1

############################################################
###   focus view and name structure models
############################################################
wait; focus #0#1
setattr m name GlpFs #0
setattr m name AQPs #1

############################################################
###   logo data
############################################################
setattr a radius 1.413 #0:7@ca
setattr a color #017A017A046F #0:7@ca
setattr a name '|| .LWMK' #0:7@ca
setattr a radius 1.408 #1:7@ca
setattr a color #17361752081A #1:7@ca
setattr a name '|| FSA' #1:7@ca
setattr a radius 0.795 #0:8@ca
setattr a color #368759C23733 #0:8@ca
setattr a name '|| .MKVA' #0:8@ca
setattr a radius 0.799 #1:8@ca
setattr a color #26AC26AC0000 #1:8@ca
setattr a name '|| .WY' #1:8@ca
setattr a radius 1.377 #0:9@ca
setattr a color #BB08AF463B97 #0:9@ca
setattr a name '|| .VSGTAN' #0:9@ca
setattr a radius 1.386 #1:9@ca
setattr a color #00000137DFF9 #1:9@ca
setattr a name '|| .RK' #1:9@ca
setattr a radius 2.223 #0:10@ca
setattr a color #A97E52390E6C #0:10@ca
setattr a name '|| .EQKWND' #0:10@ca
setattr a radius 2.225 #1:10@ca
setattr a color #F078F5B6E5FC #1:10@ca
setattr a name '|| A:.' #1:10@ca
setattr a radius 0.931 #0:11@ca
setattr a color #33DA33DA03B6 #0:11@ca
setattr a name '|| .FCT' #0:11@ca
setattr a radius 0.930 #1:11@ca
setattr a color #ABB8ABB867E3 #1:11@ca
setattr a name '|| .VGL' #1:11@ca
setattr a radius 0.906 #0:12@ca
setattr a color #02C102C10000 #0:12@ca
setattr a name '|| .L' #0:12@ca
setattr a radius 0.907 #1:12@ca
setattr a color #51EA51EA37E3 #1:12@ca
setattr a name '|| .IVT' #1:12@ca
setattr a radius 1.929 #0:13@ca
setattr a color #E361E3610000 #0:13@ca
setattr a name '|| .GSTM' #0:13@ca
setattr a radius 1.931 #1:13@ca
setattr a color #F042F042F042 #1:13@ca
setattr a name '|| A.V' #1:13@ca
setattr a radius 0.001 #0:14@ca
setattr a color #FFFF00000000 #0:14@ca
setattr a name '|| .' #0:14@ca
setattr a radius 0.001 #1:14@ca
setattr a color #000000000000 #1:14@ca
setattr a name '|| .' #1:14@ca
setattr a radius 0.947 #0:15@ca
setattr a color #DA0DDA0D2AE9 #0:15@ca
setattr a name '|| .CVTG' #0:15@ca
setattr a radius 0.949 #1:15@ca
setattr a color #000000000000 #1:15@ca
setattr a name '|| .F' #1:15@ca
setattr a radius 1.205 #0:16@ca
setattr a color #008300830000 #0:16@ca
setattr a name '|| L.' #0:16@ca
setattr a radius 1.201 #1:16@ca
setattr a color #23C025AE1D9F #1:16@ca
setattr a name '|| .IV' #1:16@ca
setattr a radius 2.268 #0:17@ca
setattr a color #FFFFFFFF0000 #0:17@ca
setattr a name '|| G:.' #0:17@ca
setattr a radius 2.265 #1:17@ca
setattr a color #FFA8FFA8D161 #1:17@ca
setattr a name '|| A.S' #1:17@ca
setattr a radius 0.610 #0:18@ca
setattr a color #FFFFFFFF0000 #0:18@ca
setattr a name '|| .T' #0:18@ca
setattr a radius 0.610 #1:18@ca
setattr a color #0A3D0A3D0000 #1:18@ca
setattr a name '|| .MS' #1:18@ca
setattr a radius 1.223 #0:19@ca
setattr a color #B26AB26A77B3 #0:19@ca
setattr a name '|| .AMYG' #0:19@ca
setattr a radius 1.224 #1:19@ca
setattr a color #00C100C10000 #1:19@ca
setattr a name '|| .LFI' #1:19@ca
setattr a radius 1.021 #0:20@ca
setattr a color #3F1F3F1F3F1F #0:20@ca
setattr a name '|| .IV' #0:20@ca
setattr a radius 1.016 #1:20@ca
setattr a color #00BA00BA0000 #1:20@ca
setattr a name '|| .LWM' #1:20@ca
setattr a radius 3.234 #0:21@ca
setattr a color #004900490049 #0:21@ca
setattr a name '|| L:.MV' #0:21@ca
setattr a radius 3.235 #1:21@ca
setattr a color #006A006A0000 #1:21@ca
setattr a name '|| F>:.Y' #1:21@ca
setattr a radius 2.123 #0:22@ca
setattr a color #000000000000 #0:22@ca
setattr a name '|| I.M' #0:22@ca
setattr a radius 2.122 #1:22@ca
setattr a color #503B503B503B #1:22@ca
setattr a name '|| V.L' #1:22@ca
setattr a radius 1.631 #0:23@ca
setattr a color #198619861986 #0:23@ca
setattr a name '|| .IVLMA' #0:23@ca
setattr a radius 1.630 #1:23@ca
setattr a color #494249420000 #1:23@ca
setattr a name '|| .YF' #1:23@ca
setattr a radius 1.693 #0:24@ca
setattr a color #005A005A0000 #0:24@ca
setattr a name '|| .FL' #0:24@ca
setattr a radius 1.691 #1:24@ca
setattr a color #47B447B4371E #1:24@ca
setattr a name '|| .IAVG' #1:24@ca
setattr a radius 1.749 #0:25@ca
setattr a color #FFFFFFFF0000 #0:25@ca
setattr a name '|| G.' #0:25@ca
setattr a radius 1.746 #1:25@ca
setattr a color #FF8EFF8E163F #1:25@ca
setattr a name '|| T.SA' #1:25@ca
setattr a radius 0.938 #0:26@ca
setattr a color #FFFFFFFF26C1 #0:26@ca
setattr a name '|| .NCAGT' #0:26@ca
setattr a radius 0.936 #1:26@ca
setattr a color #849179BF529B #1:26@ca
setattr a name '|| .VIS' #1:26@ca
setattr a radius 1.511 #0:27@ca
setattr a color #FFFFFFFF0000 #0:27@ca
setattr a name '|| G.S' #0:27@ca
setattr a radius 1.507 #1:27@ca
setattr a color #201720172017 #1:27@ca
setattr a name '|| .LAV' #1:27@ca
setattr a radius 1.494 #0:28@ca
setattr a color #FFFFFFFF8BA6 #0:28@ca
setattr a name '|| .VCA' #0:28@ca
setattr a radius 1.496 #1:28@ca
setattr a color #FA8BFA8B0000 #1:28@ca
setattr a name '|| .TS' #1:28@ca
setattr a radius 1.126 #0:29@ca
setattr a color #9E249E24761D #0:29@ca
setattr a name '|| .VIC' #0:29@ca
setattr a radius 1.125 #1:29@ca
setattr a color #FFC4FFC4C29C #1:29@ca
setattr a name '|| .ATG' #1:29@ca
setattr a radius 1.985 #0:30@ca
setattr a color #FFFFFFFFF274 #0:30@ca
setattr a name '|| A.' #0:30@ca
setattr a radius 1.980 #1:30@ca
setattr a color #055E055E033D #1:30@ca
setattr a name '|| .IMLV' #1:30@ca
setattr a radius 0.860 #0:31@ca
setattr a color #73229C7B0000 #0:31@ca
setattr a name '|| .QHM' #0:31@ca
setattr a radius 0.853 #1:31@ca
setattr a color #90879CBE1EEE #1:31@ca
setattr a name '|| .G' #1:31@ca
setattr a radius 0.902 #0:32@ca
setattr a color #6306630650D8 #0:32@ca
setattr a name '|| .VLMT' #0:32@ca
setattr a radius 0.905 #1:32@ca
setattr a color #2A49355B0000 #1:32@ca
setattr a name '|| .YWF' #1:32@ca
setattr a radius 0.680 #0:33@ca
setattr a color #E7C0CD29A547 #0:33@ca
setattr a name '|| .VT' #0:33@ca
setattr a radius 0.675 #1:33@ca
setattr a color #B909CA8F530E #1:33@ca
setattr a name '|| .ASG' #1:33@ca
setattr a radius 1.038 #0:34@ca
setattr a color #07C807C807C8 #0:34@ca
setattr a name '|| .LV' #0:34@ca
setattr a radius 1.025 #1:34@ca
setattr a color #038A7C8944CB #1:34@ca
setattr a name '|| .KRS' #1:34@ca
setattr a radius 0.578 #0:35@ca
setattr a color #0D49A28B664F #0:35@ca
setattr a name '|| .K' #0:35@ca
setattr a radius 0.576 #1:35@ca
setattr a color #292A184A076A #1:35@ca
setattr a name '|| .L' #1:35@ca
setattr a radius 0.646 #0:36@ca
setattr a color #00008D9294F1 #0:36@ca
setattr a name '|| .KGR' #0:36@ca
setattr a radius 0.640 #1:36@ca
setattr a color #B433A77E4332 #1:36@ca
setattr a name '|| .TP' #1:36@ca
setattr a radius 0.452 #0:37@ca
setattr a color #9ECE9ECE1FAB #0:37@ca
setattr a name '|| .TG' #0:37@ca
setattr a radius 0.450 #1:37@ca
setattr a color #CD8F816D2FDB #1:37@ca
setattr a name '|| .DN' #1:37@ca
setattr a radius 0.422 #0:38@ca
setattr a color #0D429CCA926A #0:38@ca
setattr a name '|| .KS' #0:38@ca
setattr a radius 0.418 #1:38@ca
setattr a color #D4E6630C3B33 #1:38@ca
setattr a name '|| .DP' #1:38@ca
setattr a radius 0.356 #0:39@ca
setattr a color #31ED4EDB2A76 #0:39@ca
setattr a name '|| .F' #0:39@ca
setattr a radius 0.356 #1:39@ca
setattr a color #1C6865342C63 #1:39@ca
setattr a name '|| .KT' #1:39@ca
setattr a radius 0.518 #0:40@ca
setattr a color #A11CBD470000 #0:40@ca
setattr a name '|| .G' #0:40@ca
setattr a radius 0.521 #1:40@ca
setattr a color #CCF6CCF6B3D6 #1:40@ca
setattr a name '|| .A' #1:40@ca
setattr a radius 0.325 #0:41@ca
setattr a color #406540650587 #0:41@ca
setattr a name '|| .' #0:41@ca
setattr a radius 0.330 #1:41@ca
setattr a color #000000000000 #1:41@ca
setattr a name '|| .W' #1:41@ca
setattr a radius 0.588 #0:42@ca
setattr a color #020001590000 #0:42@ca
setattr a name '|| .LI' #0:42@ca
setattr a radius 0.593 #1:42@ca
setattr a color #000000000000 #1:42@ca
setattr a name '|| .F' #1:42@ca
setattr a radius 0.355 #0:43@ca
setattr a color #D53DA87C33FE #0:43@ca
setattr a name '|| .T' #0:43@ca
setattr a radius 0.364 #1:43@ca
setattr a color #379937993799 #1:43@ca
setattr a name '|| .FA' #1:43@ca
setattr a radius 0.566 #0:44@ca
setattr a color #000000000000 #0:44@ca
setattr a name '|| .IL' #0:44@ca
setattr a radius 0.564 #1:44@ca
setattr a color #FF17FF17F185 #1:44@ca
setattr a name '|| .AVP' #1:44@ca
setattr a radius 1.724 #0:45@ca
setattr a color #FFFFFFFF2A2B #0:45@ca
setattr a name '|| N.TV' #0:45@ca
setattr a radius 1.728 #1:45@ca
setattr a color #F855F855F855 #1:45@ca
setattr a name '|| A.' #1:45@ca
setattr a radius 0.698 #0:46@ca
setattr a color #22F922F9119F #0:46@ca
setattr a name '|| .FA' #0:46@ca
setattr a radius 0.703 #1:46@ca
setattr a color #01CB01CB01CB #1:46@ca
setattr a name '|| .WL' #1:46@ca
setattr a radius 2.055 #0:47@ca
setattr a color #932593250000 #0:47@ca
setattr a name '|| G.IM' #0:47@ca
setattr a radius 2.056 #1:47@ca
setattr a color #F01EF01EBADB #1:47@ca
setattr a name '|| A.CS' #1:47@ca
setattr a radius 2.214 #0:48@ca
setattr a color #079F079F01E5 #0:48@ca
setattr a name '|| W.Y' #0:48@ca
setattr a radius 2.212 #1:48@ca
setattr a color #000002BD253F #1:48@ca
setattr a name '|| F.H' #1:48@ca
setattr a radius 0.626 #0:49@ca
setattr a color #FFFFFFFF0000 #0:49@ca
setattr a name '|| .GS' #0:49@ca
setattr a radius 0.626 #1:49@ca
setattr a color #FFFFFFFFE153 #1:49@ca
setattr a name '|| .A' #1:49@ca
setattr a radius 0.995 #0:50@ca
setattr a color #19D219D20CE9 #0:50@ca
setattr a name '|| .IFVM' #0:50@ca
setattr a radius 0.998 #1:50@ca
setattr a color #CC96CC960000 #1:50@ca
setattr a name '|| .GL' #1:50@ca
setattr a radius 1.489 #0:51@ca
setattr a color #FFFFFFFF6E34 #0:51@ca
setattr a name '|| .GA' #0:51@ca
setattr a radius 1.485 #1:51@ca
setattr a color #31B031B00834 #1:51@ca
setattr a name '|| .MSTV' #1:51@ca
setattr a radius 2.601 #0:52@ca
setattr a color #FFFFFFFFF6F0 #0:52@ca
setattr a name '|| V:.' #0:52@ca
setattr a radius 2.601 #1:52@ca
setattr a color #004400440016 #1:52@ca
setattr a name '|| I.L' #1:52@ca
setattr a radius 1.498 #0:53@ca
setattr a color #8A498A491FA6 #0:53@ca
setattr a name '|| .TMLSV' #0:53@ca
setattr a radius 1.502 #1:53@ca
setattr a color #06AE06AE0000 #1:53@ca
setattr a name '|| F.G' #1:53@ca
setattr a radius 1.328 #0:54@ca
setattr a color #000000000000 #0:54@ca
setattr a name '|| .MLF' #0:54@ca
setattr a radius 1.328 #1:54@ca
setattr a color #E272E2728541 #1:54@ca
setattr a name '|| .TAV' #1:54@ca
setattr a radius 1.775 #0:55@ca
setattr a color #FFFFFFFF7892 #0:55@ca
setattr a name '|| .GAP' #0:55@ca
setattr a radius 1.769 #1:55@ca
setattr a color #024A024A0091 #1:55@ca
setattr a name '|| L.MS' #1:55@ca
setattr a radius 1.021 #0:56@ca
setattr a color #000000000000 #0:56@ca
setattr a name '|| .IL' #0:56@ca
setattr a radius 1.021 #1:56@ca
setattr a color #FFFFFFFFFFFF #1:56@ca
setattr a name '|| .VA' #1:56@ca
setattr a radius 1.326 #0:57@ca
setattr a color #075516E60529 #0:57@ca
setattr a name '|| .LYHF' #0:57@ca
setattr a radius 1.329 #1:57@ca
setattr a color #D9F2D9F221CD #1:57@ca
setattr a name '|| .QSAW' #1:57@ca
setattr a radius 1.095 #0:58@ca
setattr a color #5D915D914A58 #0:58@ca
setattr a name '|| .VLITA' #0:58@ca
setattr a radius 1.100 #1:58@ca
setattr a color #F12AF12A0000 #1:58@ca
setattr a name '|| .CS' #1:58@ca
setattr a radius 1.021 #0:59@ca
setattr a color #FF7EFF7EA2D0 #0:59@ca
setattr a name '|| .AS' #0:59@ca
setattr a radius 1.015 #1:59@ca
setattr a color #82DD82DD07BD #1:59@ca
setattr a name '|| .TLG' #1:59@ca
setattr a radius 1.235 #0:60@ca
setattr a color #9E929E920000 #0:60@ca
setattr a name '|| .GFNS' #0:60@ca
setattr a radius 1.236 #1:60@ca
setattr a color #C6DDC6DDC6DD #1:60@ca
setattr a name '|| A.' #1:60@ca
setattr a radius 1.099 #0:61@ca
setattr a color #6465B2321012 #0:61@ca
setattr a name '|| .QSRK' #0:61@ca
setattr a radius 1.098 #1:61@ca
setattr a color #0D0BA4737082 #1:61@ca
setattr a name '|| .HN' #1:61@ca
setattr a radius 1.551 #0:62@ca
setattr a color #2B512B511F4C #0:62@ca
setattr a name '|| .LVMYF' #0:62@ca
setattr a radius 1.557 #1:62@ca
setattr a color #001500150015 #1:62@ca
setattr a name '|| I.' #1:62@ca
setattr a radius 0.725 #0:63@ca
setattr a color #5C285C281EB8 #0:63@ca
setattr a name '|| .FTNA' #0:63@ca
setattr a radius 0.726 #1:63@ca
setattr a color #F059F0590000 #1:63@ca
setattr a name '|| .S' #1:63@ca
setattr a radius 0.887 #0:64@ca
setattr a color #FFFFFFFF209C #0:64@ca
setattr a name '|| .G' #0:64@ca
setattr a radius 0.001 #1:64@ca
setattr a color #000000000000 #1:64@ca
setattr a name '|| .' #1:64@ca
setattr a radius 2.076 #0:65@ca
setattr a color #FFFFFFFFE45F #0:65@ca
setattr a name '|| A.SN' #0:65@ca
setattr a radius 2.076 #1:65@ca
setattr a color #FFFFFFFF0000 #1:65@ca
setattr a name '|| G.C' #1:65@ca
setattr a radius 0.240 #0:66@ca
setattr a color #FFFFFFFF0000 #0:66@ca
setattr a name '|| .Q' #0:66@ca
setattr a radius 0.240 #1:66@ca
setattr a color #B554B554FFFF #1:66@ca
setattr a name '|| .A' #1:66@ca
setattr a radius 1.657 #0:67@ca
setattr a color #000000000000 #0:67@ca
setattr a name '|| L.M' #0:67@ca
setattr a radius 1.655 #1:67@ca
setattr a color #248924892489 #1:67@ca
setattr a name '|| .IVF' #1:67@ca
setattr a radius 0.001 #0:68@ca
setattr a color #FFFFFFFF0000 #0:68@ca
setattr a name '|| .' #0:68@ca
setattr a radius 0.001 #1:68@ca
setattr a color #000000000000 #1:68@ca
setattr a name '|| .' #1:68@ca
setattr a radius 0.302 #0:69@ca
setattr a color #FFFFFFFFFFFF #0:69@ca
setattr a name '|| .A' #0:69@ca
setattr a radius 0.302 #1:69@ca
setattr a color #FFFFFFFFFFFF #1:69@ca
setattr a name '|| .P' #1:69@ca
setattr a radius 0.045 #0:70@ca
setattr a color #FFFFFFFFFFFF #0:70@ca
setattr a name '|| .' #0:70@ca
setattr a radius 0.045 #1:70@ca
setattr a color #FFFFFFFF0000 #1:70@ca
setattr a name '|| .' #1:70@ca
setattr a radius 0.832 #0:71@ca
setattr a color #000000000000 #0:71@ca
setattr a name '|| .ILF' #0:71@ca
setattr a radius 0.833 #1:71@ca
setattr a color #E844E844E844 #1:71@ca
setattr a name '|| .V' #1:71@ca
setattr a radius 1.245 #0:72@ca
setattr a color #FFFFFFFF0000 #0:72@ca
setattr a name '|| S.' #0:72@ca
setattr a radius 1.245 #1:72@ca
setattr a color #FFFFFFFF0804 #1:72@ca
setattr a name '|| T.' #1:72@ca
setattr a radius 1.159 #0:73@ca
setattr a color #000000000000 #0:73@ca
setattr a name '|| I.' #0:73@ca
setattr a radius 1.155 #1:73@ca
setattr a color #0393039302E3 #1:73@ca
setattr a name '|| .FLV' #1:73@ca
setattr a radius 1.632 #0:74@ca
setattr a color #763676365FEF #0:74@ca
setattr a name '|| .AFTM' #0:74@ca
setattr a radius 1.635 #1:74@ca
setattr a color #F077F0770000 #1:74@ca
setattr a name '|| G.' #1:74@ca
setattr a radius 0.982 #0:75@ca
setattr a color #1CE81CE80000 #0:75@ca
setattr a name '|| .MNFY' #0:75@ca
setattr a radius 0.983 #1:75@ca
setattr a color #2EB72EB71923 #1:75@ca
setattr a name '|| .LAC' #1:75@ca
setattr a radius 1.654 #0:76@ca
setattr a color #BF5ABF5A654C #0:76@ca
setattr a name '|| .ACW' #0:76@ca
setattr a radius 1.653 #1:76@ca
setattr a color #02C802C801DC #1:76@ca
setattr a name '|| .FLV' #1:76@ca
setattr a radius 1.133 #0:77@ca
setattr a color #562E603A2CB1 #0:77@ca
setattr a name '|| .AFSTI' #0:77@ca
setattr a radius 1.138 #1:77@ca
setattr a color #252125211C3B #1:77@ca
setattr a name '|| .LVC' #1:77@ca
setattr a radius 1.622 #0:78@ca
setattr a color #10FC18230C19 #0:78@ca
setattr a name '|| .FLVSK' #0:78@ca
setattr a radius 1.622 #1:78@ca
setattr a color #EFD9EFD966F7 #1:78@ca
setattr a name '|| .GAT' #1:78@ca
setattr a radius 1.465 #0:79@ca
setattr a color #FFFFFFFF7BB7 #0:79@ca
setattr a name '|| .GA' #0:79@ca
setattr a radius 1.460 #1:79@ca
setattr a color #0000A8A0AA5F #1:79@ca
setattr a name '|| .RC' #1:79@ca
setattr a radius 1.045 #0:80@ca
setattr a color #5F5167C712B5 #0:80@ca
setattr a name '|| .RDC' #0:80@ca
setattr a radius 1.048 #1:80@ca
setattr a color #01B689EB1A74 #1:80@ca
setattr a name '|| .KQHN' #1:80@ca
setattr a radius 1.682 #0:81@ca
setattr a color #0C0E02690000 #0:81@ca
setattr a name '|| F.ME' #0:81@ca
setattr a radius 1.682 #1:81@ca
setattr a color #149614961496 #1:81@ca
setattr a name '|| I.VL' #1:81@ca
setattr a radius 2.209 #0:82@ca
setattr a color #DC788A5884A0 #0:82@ca
setattr a name '|| .PEDA' #0:82@ca
setattr a radius 2.213 #1:82@ca
setattr a color #F075F0750000 #1:82@ca
setattr a name '|| S.T' #1:82@ca
setattr a radius 1.917 #0:83@ca
setattr a color #00C206860000 #0:83@ca
setattr a name '|| W.GK' #0:83@ca
setattr a radius 1.914 #1:83@ca
setattr a color #042104210376 #1:83@ca
setattr a name '|| L.IA' #1:83@ca
setattr a radius 0.816 #0:84@ca
setattr a color #0A7E6C7585C1 #0:84@ca
setattr a name '|| .RSK' #0:84@ca
setattr a radius 0.816 #1:84@ca
setattr a color #289C289C095F #1:84@ca
setattr a name '|| .LT' #1:84@ca
setattr a radius 1.922 #0:85@ca
setattr a color #0BCE277CDA6C #0:85@ca
setattr a name '|| K.H' #0:85@ca
setattr a radius 1.924 #1:85@ca
setattr a color #00EC1B66E059 #1:85@ca
setattr a name '|| R.T' #1:85@ca
setattr a radius 1.981 #0:86@ca
setattr a color #3A413A41375B #0:86@ca
setattr a name '|| .VFL' #0:86@ca
setattr a radius 1.981 #1:86@ca
setattr a color #FFFFFFFFA1A9 #1:86@ca
setattr a name '|| A.GS' #1:86@ca
setattr a radius 1.349 #0:87@ca
setattr a color #CEFCCEFCCEFC #0:87@ca
setattr a name '|| P.L' #0:87@ca
setattr a radius 1.349 #1:87@ca
setattr a color #54B654B654B6 #1:87@ca
setattr a name '|| .VI' #1:87@ca
setattr a radius 0.824 #0:88@ca
setattr a color #6C82805E413F #0:88@ca
setattr a name '|| .IVQPG' #0:88@ca
setattr a radius 0.823 #1:88@ca
setattr a color #0A530A5302E1 #1:88@ca
setattr a name '|| .FLM' #1:88@ca
setattr a radius 0.423 #0:89@ca
setattr a color #71C671C638E3 #0:89@ca
setattr a name '|| .GFA' #0:89@ca
setattr a radius 0.425 #1:89@ca
setattr a color #5C4E5C4E0000 #1:89@ca
setattr a name '|| .YM' #1:89@ca
setattr a radius 1.094 #0:90@ca
setattr a color #5AA65AA6252D #0:90@ca
setattr a name '|| .ISVTF' #0:90@ca
setattr a radius 1.100 #1:90@ca
setattr a color #000000000000 #1:90@ca
setattr a name '|| .WM' #1:90@ca
setattr a radius 1.272 #0:91@ca
setattr a color #06FA06FA0000 #0:91@ca
setattr a name '|| L.G' #0:91@ca
setattr a radius 1.269 #1:91@ca
setattr a color #2572257223D3 #1:91@ca
setattr a name '|| .IVA' #1:91@ca
setattr a radius 0.741 #0:92@ca
setattr a color #FFFFFFFF6D83 #0:92@ca
setattr a name '|| .GA' #0:92@ca
setattr a radius 0.741 #1:92@ca
setattr a color #064603230323 #1:92@ca
setattr a name '|| .M' #1:92@ca
setattr a radius 0.001 #0:93@ca
setattr a color #FFFFFFFF0000 #0:93@ca
setattr a name '|| .' #0:93@ca
setattr a radius 0.001 #1:93@ca
setattr a color #000000000000 #1:93@ca
setattr a name '|| .' #1:93@ca
setattr a radius 1.560 #0:94@ca
setattr a color #31CA31CA147B #0:94@ca
setattr a name '|| .FTVM' #0:94@ca
setattr a radius 1.561 #1:94@ca
setattr a color #969896980000 #1:94@ca
setattr a name '|| C.L' #1:94@ca
setattr a radius 0.472 #0:95@ca
setattr a color #FEEAFEEAFEEA #0:95@ca
setattr a name '|| .A' #0:95@ca
setattr a radius 0.467 #1:95@ca
setattr a color #650265026502 #1:95@ca
setattr a name '|| .VL' #1:95@ca
setattr a radius 0.305 #0:96@ca
setattr a color #FFFFFFFF0000 #0:96@ca
setattr a name '|| .G' #0:96@ca
setattr a radius 0.305 #1:96@ca
setattr a color #FFFFFFFFFFFF #1:96@ca
setattr a name '|| .A' #1:96@ca
setattr a radius 0.728 #0:97@ca
setattr a color #FFFFFFFFFFFF #0:97@ca
setattr a name '|| .A' #0:97@ca
setattr a radius 0.726 #1:97@ca
setattr a color #FF4AFF4A0000 #1:97@ca
setattr a name '|| .GS' #1:97@ca
setattr a radius 2.017 #0:98@ca
setattr a color #005500550000 #0:98@ca
setattr a name '|| F.M' #0:98@ca
setattr a radius 2.014 #1:98@ca
setattr a color #1FF11FF113DB #1:98@ca
setattr a name '|| I.VT' #1:98@ca
setattr a radius 1.160 #0:99@ca
setattr a color #06A706A70000 #0:99@ca
setattr a name '|| .LFIT' #0:99@ca
setattr a radius 1.165 #1:99@ca
setattr a color #F119F119A512 #1:99@ca
setattr a name '|| .ACV' #1:99@ca
setattr a radius 0.659 #0:100@ca
setattr a color #B060B0600000 #0:100@ca
setattr a name '|| .GSF' #0:100@ca
setattr a radius 0.657 #1:100@ca
setattr a color #FF38FF38F2C9 #1:100@ca
setattr a name '|| .A' #1:100@ca
setattr a radius 1.111 #0:101@ca
setattr a color #FFFFFFFF8706 #0:101@ca
setattr a name '|| .AQ' #0:101@ca
setattr a radius 1.108 #1:101@ca
setattr a color #FF4EFF4E53DF #1:101@ca
setattr a name '|| .CVS' #1:101@ca
setattr a radius 1.173 #0:102@ca
setattr a color #AD9DAD9D76CC #0:102@ca
setattr a name '|| .ATV' #0:102@ca
setattr a radius 1.179 #1:102@ca
setattr a color #9DD19DD10000 #1:102@ca
setattr a name '|| .GF' #1:102@ca
setattr a radius 0.846 #0:103@ca
setattr a color #4DAC4DAC0000 #0:103@ca
setattr a name '|| .TML' #0:103@ca
setattr a radius 0.842 #1:103@ca
setattr a color #A090A0909BC1 #1:103@ca
setattr a name '|| .VFA' #1:103@ca
setattr a radius 1.630 #0:104@ca
setattr a color #C4C1C4C182AA #0:104@ca
setattr a name '|| .VTI' #0:104@ca
setattr a radius 1.630 #1:104@ca
setattr a color #000100010001 #1:104@ca
setattr a name '|| L.' #1:104@ca
setattr a radius 1.448 #0:105@ca
setattr a color #4A794A790B40 #0:105@ca
setattr a name '|| .YFWV' #0:105@ca
setattr a radius 1.450 #1:105@ca
setattr a color #04F34DF7C711 #1:105@ca
setattr a name '|| .KS' #1:105@ca
setattr a radius 0.532 #0:106@ca
setattr a color #24E824E8028E #0:106@ca
setattr a name '|| .LTM' #0:106@ca
setattr a radius 0.532 #1:106@ca
setattr a color #8C6971544C9F #1:106@ca
setattr a name '|| .AF' #1:106@ca
setattr a radius 0.943 #0:107@ca
setattr a color #01DA0FD90000 #0:107@ca
setattr a name '|| .LHQ' #0:107@ca
setattr a radius 0.940 #1:107@ca
setattr a color #242D242D1B0E #1:107@ca
setattr a name '|| .FV' #1:107@ca
setattr a radius 1.773 #0:108@ca
setattr a color #835983590000 #0:108@ca
setattr a name '|| Y.F' #0:108@ca
setattr a radius 1.766 #1:108@ca
setattr a color #D37BC4C01F4D #1:108@ca
setattr a name '|| .TQAME' #1:108@ca
setattr a radius 1.159 #0:109@ca
setattr a color #471970900000 #0:109@ca
setattr a name '|| .YWR' #0:109@ca
setattr a radius 1.149 #1:109@ca
setattr a color #F2E9F0516CEB #1:109@ca
setattr a name '|| .PGS' #1:109@ca
setattr a radius 0.808 #0:110@ca
setattr a color #E5797E494CCA #0:110@ca
setattr a name '|| .DPN' #0:110@ca
setattr a radius 0.804 #1:110@ca
setattr a color #CEDECE913B71 #1:110@ca
setattr a name '|| .GA' #1:110@ca
setattr a radius 0.338 #0:111@ca
setattr a color #7E7B92EEEE93 #0:111@ca
setattr a name '|| .AH' #0:111@ca
setattr a radius 0.328 #1:111@ca
setattr a color #38444C451901 #1:111@ca
setattr a name '|| .' #1:111@ca
setattr a radius 0.567 #0:112@ca
setattr a color #01D501D50000 #0:112@ca
setattr a name '|| .IF' #0:112@ca
setattr a radius 0.562 #1:112@ca
setattr a color #8CDDBA777D83 #1:112@ca
setattr a name '|| .AR' #1:112@ca
setattr a radius 0.612 #0:113@ca
setattr a color #034F1EF810C0 #0:113@ca
setattr a name '|| .KWM' #0:113@ca
setattr a radius 0.612 #1:113@ca
setattr a color #F1F9F1F95E59 #1:113@ca
setattr a name '|| .YV' #1:113@ca
setattr a radius 0.416 #0:114@ca
setattr a color #8B139313B13A #0:114@ca
setattr a name '|| .A' #0:114@ca
setattr a radius 0.409 #1:114@ca
setattr a color #7322989E585B #1:114@ca
setattr a name '|| .P' #1:114@ca
setattr a radius 0.668 #0:115@ca
setattr a color #088E0B5900CF #0:115@ca
setattr a name '|| .FY' #0:115@ca
setattr a radius 0.657 #1:115@ca
setattr a color #909AA34E11A0 #1:115@ca
setattr a name '|| .GR' #1:115@ca
setattr a radius 0.718 #0:116@ca
setattr a color #E03F76216F74 #0:116@ca
setattr a name '|| .AE' #0:116@ca
setattr a radius 0.713 #1:116@ca
setattr a color #014B23BF067B #1:116@ca
setattr a name '|| .HFL' #1:116@ca
setattr a radius 0.777 #0:117@ca
setattr a color #94C899283483 #0:117@ca
setattr a name '|| .QP' #0:117@ca
setattr a radius 0.781 #1:117@ca
setattr a color #D3D8EA941C55 #1:117@ca
setattr a name '|| .SG' #1:117@ca
setattr a radius 1.279 #0:118@ca
setattr a color #A921A0853CA5 #0:118@ca
setattr a name '|| .NKADT' #0:118@ca
setattr a radius 1.280 #1:118@ca
setattr a color #2A8F2A8F01B6 #1:118@ca
setattr a name '|| .LG' #1:118@ca
setattr a radius 0.180 #0:119@ca
setattr a color #3761647415E4 #0:119@ca
setattr a name '|| .' #0:119@ca
setattr a radius 0.190 #1:119@ca
setattr a color #FE37FE3738E3 #1:119@ca
setattr a name '|| .S' #1:119@ca
setattr a radius 0.288 #0:120@ca
setattr a color #0417105E12E3 #0:120@ca
setattr a name '|| .L' #0:120@ca
setattr a radius 0.296 #1:120@ca
setattr a color #2C652C650000 #1:120@ca
setattr a name '|| .FN' #1:120@ca
setattr a radius 0.242 #0:121@ca
setattr a color #1D640EB20A09 #0:121@ca
setattr a name '|| .' #0:121@ca
setattr a radius 0.248 #1:121@ca
setattr a color #F657F6574195 #1:121@ca
setattr a name '|| .G' #1:121@ca
setattr a radius 0.480 #0:122@ca
setattr a color #9A18A34A9A18 #0:122@ca
setattr a name '|| .V' #0:122@ca
setattr a radius 0.488 #1:122@ca
setattr a color #039703970000 #1:122@ca
setattr a name '|| .FL' #1:122@ca
setattr a radius 0.398 #0:123@ca
setattr a color #54E792A624A9 #0:123@ca
setattr a name '|| .RT' #0:123@ca
setattr a radius 0.399 #1:123@ca
setattr a color #F0A3F0A3EC0E #1:123@ca
setattr a name '|| .A' #1:123@ca
setattr a radius 0.131 #0:124@ca
setattr a color #FFFFCD306792 #0:124@ca
setattr a name '|| .' #0:124@ca
setattr a radius 0.136 #1:124@ca
setattr a color #F9C4F9C40000 #1:124@ca
setattr a name '|| .G' #1:124@ca
setattr a radius 0.489 #0:125@ca
setattr a color #FFFFCE4341F6 #0:125@ca
setattr a name '|| .T' #0:125@ca
setattr a radius 0.492 #1:125@ca
setattr a color #000000000000 #1:125@ca
setattr a name '|| .F' #1:125@ca
setattr a radius 0.325 #0:126@ca
setattr a color #AC0990AF0CF4 #0:126@ca
setattr a name '|| .' #0:126@ca
setattr a radius 0.335 #1:126@ca
setattr a color #000000000000 #1:126@ca
setattr a name '|| .W' #1:126@ca
setattr a radius 0.347 #0:127@ca
setattr a color #EA584C3B0A96 #0:127@ca
setattr a name '|| .ED' #0:127@ca
setattr a radius 0.355 #1:127@ca
setattr a color #F5E5F5E5F5E5 #1:127@ca
setattr a name '|| .P' #1:127@ca
setattr a radius 0.185 #0:128@ca
setattr a color #FFFFE7169999 #0:128@ca
setattr a name '|| .P' #0:128@ca
setattr a radius 0.181 #1:128@ca
setattr a color #4AB9AFBC6D51 #1:128@ca
setattr a name '|| .' #1:128@ca
setattr a radius 0.305 #0:129@ca
setattr a color #8668866830A7 #0:129@ca
setattr a name '|| .G' #0:129@ca
setattr a radius 0.311 #1:129@ca
setattr a color #F508CA470000 #1:129@ca
setattr a name '|| .N' #1:129@ca
setattr a radius 1.450 #0:130@ca
setattr a color #CE64B5BE5329 #0:130@ca
setattr a name '|| .ASND' #0:130@ca
setattr a radius 1.456 #1:130@ca
setattr a color #D616D6160000 #1:130@ca
setattr a name '|| G.F' #1:130@ca
setattr a radius 1.096 #0:131@ca
setattr a color #4E416E140000 #0:131@ca
setattr a name '|| .TKLI' #0:131@ca
setattr a radius 1.094 #1:131@ca
setattr a color #C295CDC6BB0C #1:131@ca
setattr a name '|| .AV' #1:131@ca
setattr a radius 1.891 #0:132@ca
setattr a color #60556055520C #0:132@ca
setattr a name '|| .ALQ' #0:132@ca
setattr a radius 1.885 #1:132@ca
setattr a color #E288E28802B5 #1:132@ca
setattr a name '|| N.T' #1:132@ca
setattr a radius 0.560 #0:133@ca
setattr a color #CA26E49D0000 #0:133@ca
setattr a name '|| .G' #0:133@ca
setattr a radius 0.555 #1:133@ca
setattr a color #D667A5A34AD4 #1:133@ca
setattr a name '|| .TV' #1:133@ca
setattr a radius 0.404 #0:134@ca
setattr a color #4B394B39369D #0:134@ca
setattr a name '|| .IV' #0:134@ca
setattr a radius 0.405 #1:134@ca
setattr a color #180781C1A967 #1:134@ca
setattr a name '|| .H' #1:134@ca
setattr a radius 2.457 #0:135@ca
setattr a color #0000000000FA #0:135@ca
setattr a name '|| F:.MH' #0:135@ca
setattr a radius 2.453 #1:135@ca
setattr a color #4E694FA444DA #1:135@ca
setattr a name '|| VL.S' #1:135@ca
setattr a radius 0.822 #0:136@ca
setattr a color #DB69DB6915E9 #0:136@ca
setattr a name '|| .SCT' #0:136@ca
setattr a radius 0.821 #1:136@ca
setattr a color #7429B4513A3C #1:136@ca
setattr a name '|| .HPNQG' #1:136@ca
setattr a radius 1.179 #0:137@ca
setattr a color #FFFFFFFF056D #0:137@ca
setattr a name '|| T.' #0:137@ca
setattr a radius 1.168 #1:137@ca
setattr a color #A4EAA0014F2F #1:137@ca
setattr a name '|| .PGANHD' #1:137@ca
setattr a radius 1.997 #0:138@ca
setattr a color #8DF07F6E04F6 #0:138@ca
setattr a name '|| Y.FDTI' #0:138@ca
setattr a radius 1.998 #1:138@ca
setattr a color #F413F72602F2 #1:138@ca
setattr a name '|| G.N' #1:138@ca
setattr a radius 1.462 #0:139@ca
setattr a color #FBD0F37AE804 #0:139@ca
setattr a name '|| P.' #0:139@ca
setattr a radius 1.454 #1:139@ca
setattr a color #D7B2D30551BB #1:139@ca
setattr a name '|| .YV' #1:139@ca
setattr a radius 1.190 #0:140@ca
setattr a color #BABAB66CFBB1 #0:140@ca
setattr a name '|| .APHK' #0:140@ca
setattr a radius 1.187 #1:140@ca
setattr a color #F8E5F5740000 #1:140@ca
setattr a name '|| .TSG' #1:140@ca
setattr a radius 0.613 #0:141@ca
setattr a color #75554E993B17 #0:141@ca
setattr a name '|| .IP' #0:141@ca
setattr a radius 0.613 #1:141@ca
setattr a color #31C9A8B9A983 #1:141@ca
setattr a name '|| .KA' #1:141@ca
setattr a radius 1.519 #0:142@ca
setattr a color #328A7D2C7DC3 #0:142@ca
setattr a name '|| .HYPFKDR' #0:142@ca
setattr a radius 1.524 #1:142@ca
setattr a color #B2CEB2CE0437 #1:142@ca
setattr a name '|| G.L' #1:142@ca
setattr a radius 0.500 #0:143@ca
setattr a color #202B252F0AA7 #0:143@ca
setattr a name '|| .L' #0:143@ca
setattr a radius 0.502 #1:143@ca
setattr a color #DB21C9B923D6 #1:143@ca
setattr a name '|| .Q' #1:143@ca
setattr a radius 2.341 #0:144@ca
setattr a color #FFFFD99C0000 #0:144@ca
setattr a name '|| S.TND' #0:144@ca
setattr a radius 2.338 #1:144@ca
setattr a color #EBBFEBBF6698 #1:144@ca
setattr a name '|| G.A' #1:144@ca
setattr a radius 0.288 #0:145@ca
setattr a color #448544851350 #0:145@ca
setattr a name '|| .' #0:145@ca
setattr a radius 0.296 #1:145@ca
setattr a color #000000000000 #1:145@ca
setattr a name '|| .L' #1:145@ca
setattr a radius 0.251 #0:146@ca
setattr a color #5C63618F4C3D #0:146@ca
setattr a name '|| .' #0:146@ca
setattr a radius 0.258 #1:146@ca
setattr a color #000000000000 #1:146@ca
setattr a name '|| .W' #1:146@ca
setattr a radius 0.348 #0:147@ca
setattr a color #9B80C7372BB6 #0:147@ca
setattr a name '|| .' #0:147@ca
setattr a radius 0.362 #1:147@ca
setattr a color #00000000FA4B #1:147@ca
setattr a name '|| .K' #1:147@ca
setattr a radius 0.458 #0:148@ca
setattr a color #FFFFF4D17FFF #0:148@ca
setattr a name '|| .NA' #0:148@ca
setattr a radius 0.462 #1:148@ca
setattr a color #F23BF23B0000 #1:148@ca
setattr a name '|| .G' #1:148@ca
setattr a radius 2.142 #0:149@ca
setattr a color #000000000000 #0:149@ca
setattr a name '|| F:.' #0:149@ca
setattr a radius 2.135 #1:149@ca
setattr a color #19C219C215CC #1:149@ca
setattr a name '|| L.V' #1:149@ca
setattr a radius 1.282 #0:150@ca
setattr a color #0581058103D6 #0:150@ca
setattr a name '|| .LIFA' #0:150@ca
setattr a radius 1.283 #1:150@ca
setattr a color #EC39EC3945CB #1:150@ca
setattr a name '|| .GVT' #1:150@ca
setattr a radius 1.153 #0:151@ca
setattr a color #FFFF7B720000 #0:151@ca
setattr a name '|| .DSNT' #0:151@ca
setattr a radius 1.150 #1:151@ca
setattr a color #4FFC4B624B62 #1:151@ca
setattr a name '|| .AMLF' #1:151@ca
setattr a radius 1.491 #0:152@ca
setattr a color #FFFFFFFF0000 #0:152@ca
setattr a name '|| Q.' #0:152@ca
setattr a radius 1.489 #1:152@ca
setattr a color #E4F0067F067F #1:152@ca
setattr a name '|| E.' #1:152@ca
setattr a radius 1.807 #0:153@ca
setattr a color #355C355C2FDD #0:153@ca
setattr a name '|| .FV' #0:153@ca
setattr a radius 1.806 #1:153@ca
setattr a color #000D000D0000 #1:153@ca
setattr a name '|| I.L' #1:153@ca
setattr a radius 0.615 #0:154@ca
setattr a color #327232723272 #0:154@ca
setattr a name '|| .VF' #0:154@ca
setattr a radius 0.612 #1:154@ca
setattr a color #03F503F50151 #1:154@ca
setattr a name '|| .I' #1:154@ca
setattr a radius 0.880 #0:155@ca
setattr a color #FFFFFFFF5F20 #0:155@ca
setattr a name '|| .GAS' #0:155@ca
setattr a radius 0.881 #1:155@ca
setattr a color #016001600000 #1:155@ca
setattr a name '|| .LM' #1:155@ca
setattr a radius 0.553 #0:156@ca
setattr a color #92439243208A #0:156@ca
setattr a name '|| .SM' #0:156@ca
setattr a radius 0.555 #1:156@ca
setattr a color #BB49BB490000 #1:156@ca
setattr a name '|| .T' #1:156@ca
setattr a radius 1.589 #0:157@ca
setattr a color #B359B359631C #0:157@ca
setattr a name '|| .AGMS' #0:157@ca
setattr a radius 1.593 #1:157@ca
setattr a color #004B004B0000 #1:157@ca
setattr a name '|| F.L' #1:157@ca
setattr a radius 0.671 #0:158@ca
setattr a color #02DD02DD02B4 #0:158@ca
setattr a name '|| .IMF' #0:158@ca
setattr a radius 0.675 #1:158@ca
setattr a color #F185F18505B9 #1:158@ca
setattr a name '|| .QG' #1:158@ca
setattr a radius 0.166 #0:159@ca
setattr a color #AE5EAE5EAE5E #0:159@ca
setattr a name '|| .V' #0:159@ca
setattr a radius 0.166 #1:159@ca
setattr a color #000000000000 #1:159@ca
setattr a name '|| .M' #1:159@ca
setattr a radius 2.102 #0:160@ca
setattr a color #0AE90AE90000 #0:160@ca
setattr a name '|| .IMLQF' #0:160@ca
setattr a radius 2.110 #1:160@ca
setattr a color #F0F8F0F8F104 #1:160@ca
setattr a name '|| V.C' #1:160@ca
setattr a radius 1.524 #0:161@ca
setattr a color #5E1A5E1A362E #0:161@ca
setattr a name '|| .LGAVF' #0:161@ca
setattr a radius 1.528 #1:161@ca
setattr a color #F3B7F3B70000 #1:161@ca
setattr a name '|| Y.' #1:161@ca
setattr a radius 1.555 #0:162@ca
setattr a color #52EC52EC0BB6 #0:162@ca
setattr a name '|| .GLI' #0:162@ca
setattr a radius 1.563 #1:162@ca
setattr a color #F150F1500000 #1:162@ca
setattr a name '|| T.' #1:162@ca
setattr a radius 1.901 #0:163@ca
setattr a color #035D035D035D #0:163@ca
setattr a name '|| I.LA' #0:163@ca
setattr a radius 1.900 #1:163@ca
setattr a color #F751F751EED8 #1:163@ca
setattr a name '|| V.' #1:163@ca
setattr a radius 1.295 #0:164@ca
setattr a color #07A807A802C5 #0:164@ca
setattr a name '|| .LMS' #0:164@ca
setattr a radius 1.296 #1:164@ca
setattr a color #36373EC40000 #1:164@ca
setattr a name '|| .FY' #1:164@ca
setattr a radius 1.422 #0:165@ca
setattr a color #E2A5D46ACA97 #0:165@ca
setattr a name '|| .AV' #0:165@ca
setattr a radius 1.421 #1:165@ca
setattr a color #C3C3C3C307DF #1:165@ca
setattr a name '|| .SGM' #1:165@ca
setattr a radius 1.771 #0:166@ca
setattr a color #004D004D0000 #0:166@ca
setattr a name '|| .ILF' #0:166@ca
setattr a radius 1.769 #1:166@ca
setattr a color #FFB4FFB46329 #1:166@ca
setattr a name '|| .TAS' #1:166@ca
setattr a radius 1.649 #0:167@ca
setattr a color #A24DA24D2C9F #0:167@ca
setattr a name '|| .GVFS' #0:167@ca
setattr a radius 1.654 #1:167@ca
setattr a color #F9ABF9AB6DE8 #1:167@ca
setattr a name '|| .TAC' #1:167@ca
setattr a radius 0.766 #0:168@ca
setattr a color #0CB53F510B25 #0:168@ca
setattr a name '|| .LNK' #0:168@ca
setattr a radius 0.768 #1:168@ca
setattr a color #B3447DEE773B #1:168@ca
setattr a name '|| .VDI' #1:168@ca
setattr a radius 0.623 #0:169@ca
setattr a color #69C873DE0000 #0:169@ca
setattr a name '|| .NF' #0:169@ca
setattr a radius 0.627 #1:169@ca
setattr a color #E0C48D5AB183 #1:169@ca
setattr a name '|| .AE' #1:169@ca
setattr a radius 1.303 #0:170@ca
setattr a color #BAC897340000 #0:170@ca
setattr a name '|| .GYNDQ' #0:170@ca
setattr a radius 1.305 #1:170@ca
setattr a color #55DB55DBF063 #1:170@ca
setattr a name '|| .KPR' #1:170@ca
setattr a radius 2.176 #0:171@ca
setattr a color #76EE75450000 #0:171@ca
setattr a name '|| N.F' #0:171@ca
setattr a radius 2.177 #1:171@ca
setattr a color #0E3C15A5F8D1 #1:171@ca
setattr a name '|| R.K' #1:171@ca
setattr a radius 0.626 #0:172@ca
setattr a color #AA949E3A2663 #0:172@ca
setattr a name '|| .GLA' #0:172@ca
setattr a radius 0.625 #1:172@ca
setattr a color #1A598EC1401A #1:172@ca
setattr a name '|| .SK' #1:172@ca
setattr a radius 1.216 #0:173@ca
setattr a color #6B816B816B81 #0:173@ca
setattr a name '|| .VLAI' #0:173@ca
setattr a radius 1.221 #1:173@ca
setattr a color #F10CF10C0000 #1:173@ca
setattr a name '|| S.' #1:173@ca
setattr a radius 1.241 #0:174@ca
setattr a color #C073C073B781 #0:174@ca
setattr a name '|| .PL' #0:174@ca
setattr a radius 1.235 #1:174@ca
setattr a color #49045EA27441 #1:174@ca
setattr a name '|| .HDS' #1:174@ca
setattr a radius 1.267 #0:175@ca
setattr a color #160161409C31 #0:175@ca
setattr a name '|| .RSDQ' #0:175@ca
setattr a radius 1.267 #1:175@ca
setattr a color #46EA486F40D5 #1:175@ca
setattr a name '|| .VLI' #1:175@ca
setattr a radius 0.946 #0:176@ca
setattr a color #A851D4280000 #0:176@ca
setattr a name '|| .GN' #0:176@ca
setattr a radius 0.941 #1:176@ca
setattr a color #EDAAE160C7C1 #1:176@ca
setattr a name '|| .P' #1:176@ca
setattr a radius 1.186 #0:177@ca
setattr a color #B717B7177935 #0:177@ca
setattr a name '|| .PSM' #0:177@ca
setattr a radius 1.182 #1:177@ca
setattr a color #7F767B6E1400 #1:177@ca
setattr a name '|| .GITV' #1:177@ca
setattr a radius 0.999 #0:178@ca
setattr a color #45A045A02C3C #0:178@ca
setattr a name '|| .LVTP' #0:178@ca
setattr a radius 0.996 #1:178@ca
setattr a color #5AD85E02032A #1:178@ca
setattr a name '|| .SI' #1:178@ca
setattr a radius 1.799 #0:179@ca
setattr a color #B00162170000 #0:179@ca
setattr a name '|| .ENGH' #0:179@ca
setattr a radius 1.804 #1:179@ca
setattr a color #F0B5F0B5FD4A #1:179@ca
setattr a name '|| A.PV' #1:179@ca
setattr a radius 0.831 #0:180@ca
setattr a color #769ABB4C5BCD #0:180@ca
setattr a name '|| .ATH' #0:180@ca
setattr a radius 0.832 #1:180@ca
setattr a color #F04DF04DF672 #1:180@ca
setattr a name '|| .P' #1:180@ca
setattr a radius 1.030 #0:181@ca
setattr a color #10D110D10AA3 #0:181@ca
setattr a name '|| .FV' #0:181@ca
setattr a radius 1.027 #1:181@ca
setattr a color #01E301E30142 #1:181@ca
setattr a name '|| .LI' #1:181@ca
setattr a radius 1.770 #0:182@ca
setattr a color #2B8B2B8B14B2 #0:182@ca
setattr a name '|| .LIVT' #0:182@ca
setattr a radius 1.776 #1:182@ca
setattr a color #F0DDF0DDDF74 #1:182@ca
setattr a name '|| .APS' #1:182@ca
setattr a radius 2.168 #0:183@ca
setattr a color #E3C5E3C5C2CD #0:183@ca
setattr a name '|| V.TPLG' #0:183@ca
setattr a radius 2.173 #1:183@ca
setattr a color #000000000000 #1:183@ca
setattr a name '|| I:.' #1:183@ca
setattr a radius 0.445 #0:184@ca
setattr a color #000000000000 #0:184@ca
setattr a name '|| .ML' #0:184@ca
setattr a radius 0.447 #1:184@ca
setattr a color #F125F1250000 #1:184@ca
setattr a name '|| .G' #1:184@ca
setattr a radius 1.218 #0:185@ca
setattr a color #1F511F511342 #0:185@ca
setattr a name '|| .LAIT' #0:185@ca
setattr a radius 1.222 #1:185@ca
setattr a color #002000200000 #1:185@ca
setattr a name '|| F.' #1:185@ca
setattr a radius 2.142 #0:186@ca
setattr a color #126212621262 #0:186@ca
setattr a name '|| L.V' #0:186@ca
setattr a radius 2.142 #1:186@ca
setattr a color #A2F6A2F650AB #1:186@ca
setattr a name '|| .ASIT' #1:186@ca
setattr a radius 1.658 #0:187@ca
setattr a color #000000000000 #0:187@ca
setattr a name '|| I.F' #0:187@ca
setattr a radius 1.657 #1:187@ca
setattr a color #858A858A858A #1:187@ca
setattr a name '|| V.L' #1:187@ca
setattr a radius 1.387 #0:188@ca
setattr a color #44CB44CB39CA #0:188@ca
setattr a name '|| .VLIC' #0:188@ca
setattr a radius 1.391 #1:188@ca
setattr a color #357D357D0000 #1:188@ca
setattr a name '|| .FGT' #1:188@ca
setattr a radius 1.473 #0:189@ca
setattr a color #FFFFFFFF9896 #0:189@ca
setattr a name '|| .VGS' #0:189@ca
setattr a radius 1.471 #1:189@ca
setattr a color #079C079C0712 #1:189@ca
setattr a name '|| .LMA' #1:189@ca
setattr a radius 2.088 #0:190@ca
setattr a color #000000000000 #0:190@ca
setattr a name '|| I.L' #0:190@ca
setattr a radius 2.082 #1:190@ca
setattr a color #FAA1F3956552 #1:190@ca
setattr a name '|| .VGN' #1:190@ca
setattr a radius 2.755 #0:191@ca
setattr a color #FFFFFFFF170B #0:191@ca
setattr a name '|| G:.SV' #0:191@ca
setattr a radius 2.756 #1:191@ca
setattr a color #0000000098CE #1:191@ca
setattr a name '|| H:.I' #1:191@ca
setattr a radius 2.315 #0:192@ca
setattr a color #9274927425A3 #0:192@ca
setattr a name '|| .TVISGCM' #0:192@ca
setattr a radius 2.324 #1:192@ca
setattr a color #000000000000 #1:192@ca
setattr a name '|| L:.' #1:192@ca
setattr a radius 1.827 #0:193@ca
setattr a color #FFFFFFFF0000 #0:193@ca
setattr a name '|| S.' #0:193@ca
setattr a radius 1.824 #1:193@ca
setattr a color #5CB75CB75AC6 #1:193@ca
setattr a name '|| .ALIFV' #1:193@ca
setattr a radius 1.935 #0:194@ca
setattr a color #000000000000 #0:194@ca
setattr a name '|| .LMF' #0:194@ca
setattr a radius 1.935 #1:194@ca
setattr a color #FFFFFDBF4A38 #1:194@ca
setattr a name '|| .TGAS' #1:194@ca
setattr a radius 2.560 #0:195@ca
setattr a color #FFFFFFFF0000 #0:195@ca
setattr a name '|| G:.N' #0:195@ca
setattr a radius 2.558 #1:195@ca
setattr a color #015D015D0074 #1:195@ca
setattr a name '|| I:.T' #1:195@ca
setattr a radius 1.343 #0:196@ca
setattr a color #4DEE4DEE0000 #0:196@ca
setattr a name '|| .GMFL' #0:196@ca
setattr a radius 1.337 #1:196@ca
setattr a color #DA41CD7B9FED #1:196@ca
setattr a name '|| .PADNY' #1:196@ca
setattr a radius 1.774 #0:197@ca
setattr a color #987498742AA6 #0:197@ca
setattr a name '|| .NLTPAM' #0:197@ca
setattr a radius 1.777 #1:197@ca
setattr a color #149F149F0473 #1:197@ca
setattr a name '|| .IFYV' #1:197@ca
setattr a radius 0.725 #0:198@ca
setattr a color #FFFFFFFF4F18 #0:198@ca
setattr a name '|| .NSVA' #0:198@ca
setattr a radius 0.725 #1:198@ca
setattr a color #FFFFD0AE0000 #1:198@ca
setattr a name '|| .TD' #1:198@ca
setattr a radius 0.112 #0:199@ca
setattr a color #FFFFFFFF0000 #0:199@ca
setattr a name '|| .' #0:199@ca
setattr a radius 0.113 #1:199@ca
setattr a color #F248F2480000 #1:199@ca
setattr a name '|| .N' #1:199@ca
setattr a radius 1.791 #0:200@ca
setattr a color #917391730D77 #0:200@ca
setattr a name '|| Y.FP' #0:200@ca
setattr a radius 1.793 #1:200@ca
setattr a color #F048F04842E4 #1:200@ca
setattr a name '|| .TAGC' #1:200@ca
setattr a radius 2.823 #0:201@ca
setattr a color #FFFFFFFFF7EC #0:201@ca
setattr a name '|| A:.' #0:201@ca
setattr a radius 2.817 #1:201@ca
setattr a color #F679F6790000 #1:201@ca
setattr a name '|| SG.' #1:201@ca
setattr a radius 0.864 #0:202@ca
setattr a color #018A018A018A #0:202@ca
setattr a name '|| .LI' #0:202@ca
setattr a radius 0.866 #1:202@ca
setattr a color #000000000000 #1:202@ca
setattr a name '|| .M' #1:202@ca
setattr a radius 0.045 #0:203@ca
setattr a color #FFFFFFFF0000 #0:203@ca
setattr a name '|| .' #0:203@ca
setattr a radius 0.045 #1:203@ca
setattr a color #FFFFFFFF0000 #1:203@ca
setattr a name '|| .' #1:203@ca
setattr a radius 0.045 #0:204@ca
setattr a color #FFFFFFFFFFFF #0:204@ca
setattr a name '|| .' #0:204@ca
setattr a radius 0.045 #1:204@ca
setattr a color #FFFF00000000 #1:204@ca
setattr a name '|| .' #1:204@ca
setattr a radius 0.531 #0:205@ca
setattr a color #FFFFFFFF3035 #0:205@ca
setattr a name '|| .S' #0:205@ca
setattr a radius 0.531 #1:205@ca
setattr a color #FFFFFFFFEBBF #1:205@ca
setattr a name '|| .A' #1:205@ca
setattr a radius 0.463 #0:206@ca
setattr a color #00000000FFFF #0:206@ca
setattr a name '|| .R' #0:206@ca
setattr a radius 0.461 #1:206@ca
setattr a color #FEE3FEE3E838 #1:206@ca
setattr a name '|| .V' #1:206@ca
setattr a radius 3.759 #0:207@ca
setattr a color #FFFF00000000 #0:207@ca
setattr a name '|| D>:.' #0:207@ca
setattr a radius 3.754 #1:207@ca
setattr a color #FFA7FFA71AF7 #1:207@ca
setattr a name '|| S>:.A' #1:207@ca
setattr a radius 1.042 #0:208@ca
setattr a color #000000000000 #0:208@ca
setattr a name '|| L.' #0:208@ca
setattr a radius 1.039 #1:208@ca
setattr a color #061206120000 #1:208@ca
setattr a name '|| .FTI' #1:208@ca
setattr a radius 0.778 #0:209@ca
setattr a color #FFFFFFFF7FFF #0:209@ca
setattr a name '|| .SP' #0:209@ca
setattr a radius 0.779 #1:209@ca
setattr a color #F053F37E490C #1:209@ca
setattr a name '|| .GA' #1:209@ca
setattr a radius 1.693 #0:210@ca
setattr a color #FFFFFFFFF590 #0:210@ca
setattr a name '|| P.' #0:210@ca
setattr a radius 1.690 #1:210@ca
setattr a color #F6DBF6DBCA1F #1:210@ca
setattr a name '|| A.SV' #1:210@ca
setattr a radius 3.698 #0:211@ca
setattr a color #00000000FFFF #0:211@ca
setattr a name '|| R>:.K' #0:211@ca
setattr a radius 3.694 #1:211@ca
setattr a color #FB4FFB4FF031 #1:211@ca
setattr a name '|| A>:.' #1:211@ca
setattr a radius 1.833 #0:212@ca
setattr a color #000000000000 #0:212@ca
setattr a name '|| L.IF' #0:212@ca
setattr a radius 1.833 #1:212@ca
setattr a color #F83CF83CF83C #1:212@ca
setattr a name '|| V.' #1:212@ca
setattr a radius 1.363 #0:213@ca
setattr a color #01B201B201B2 #0:213@ca
setattr a name '|| .FMLA' #0:213@ca
setattr a radius 1.361 #1:213@ca
setattr a color #0FED0FED0D1C #1:213@ca
setattr a name '|| I.V' #1:213@ca
setattr a radius 0.857 #0:214@ca
setattr a color #07CC69D412B8 #0:214@ca
setattr a name '|| .HTL' #0:214@ca
setattr a radius 0.852 #1:214@ca
setattr a color #66F5647C04F2 #1:214@ca
setattr a name '|| .SYFM' #1:214@ca
setattr a radius 1.303 #0:215@ca
setattr a color #80BB80DF45E0 #0:215@ca
setattr a name '|| .ASF' #0:215@ca
setattr a radius 1.303 #1:215@ca
setattr a color #B7E2D4300000 #1:215@ca
setattr a name '|| .NGR' #1:215@ca
setattr a radius 0.782 #0:216@ca
setattr a color #000000000000 #0:216@ca
setattr a name '|| .LFI' #0:216@ca
setattr a radius 0.775 #1:216@ca
setattr a color #3FD578780787 #1:216@ca
setattr a name '|| .KN' #1:216@ca
setattr a radius 1.073 #0:217@ca
setattr a color #668366835BA4 #0:217@ca
setattr a name '|| .AL' #0:217@ca
setattr a radius 1.065 #1:217@ca
setattr a color #2B9916D500FA #1:217@ca
setattr a name '|| .FWD' #1:217@ca
setattr a radius 0.926 #0:218@ca
setattr a color #FFFFFFFF5C0F #0:218@ca
setattr a name '|| .GP' #0:218@ca
setattr a radius 0.913 #1:218@ca
setattr a color #357C6AF90C87 #1:218@ca
setattr a name '|| .KTSH' #1:218@ca
setattr a radius 0.424 #0:219@ca
setattr a color #0000054D0584 #0:219@ca
setattr a name '|| .W' #0:219@ca
setattr a radius 0.417 #1:219@ca
setattr a color #BF4184C574F7 #1:219@ca
setattr a name '|| .PEA' #1:219@ca
setattr a radius 0.659 #0:220@ca
setattr a color #CFD3E7E90000 #0:220@ca
setattr a name '|| .G' #0:220@ca
setattr a radius 0.661 #1:220@ca
setattr a color #00000000F0C5 #1:220@ca
setattr a name '|| .R' #1:220@ca
setattr a radius 0.256 #0:221@ca
setattr a color #6E39664B1960 #0:221@ca
setattr a name '|| .' #0:221@ca
setattr a radius 0.266 #1:221@ca
setattr a color #F9FEF9FE0000 #1:221@ca
setattr a name '|| .T' #1:221@ca
setattr a radius 0.265 #0:222@ca
setattr a color #679A4E714E71 #0:222@ca
setattr a name '|| .' #0:222@ca
setattr a radius 0.274 #1:222@ca
setattr a color #F8B0F8B00000 #1:222@ca
setattr a name '|| .G' #1:222@ca
setattr a radius 0.440 #0:223@ca
setattr a color #B600B6009C7E #0:223@ca
setattr a name '|| .VA' #0:223@ca
setattr a radius 0.001 #1:223@ca
setattr a color #000000000000 #1:223@ca
setattr a name '|| .' #1:223@ca
setattr a radius 0.612 #0:224@ca
setattr a color #024B03550000 #0:224@ca
setattr a name '|| .FLI' #0:224@ca
setattr a radius 0.001 #1:224@ca
setattr a color #000000000000 #1:224@ca
setattr a name '|| .' #1:224@ca
setattr a radius 0.371 #0:225@ca
setattr a color #AAFDB14632EB #0:225@ca
setattr a name '|| .T' #0:225@ca
setattr a radius 0.001 #1:225@ca
setattr a color #000000000000 #1:225@ca
setattr a name '|| .' #1:225@ca
setattr a radius 0.432 #0:226@ca
setattr a color #B58ECBD53459 #0:226@ca
setattr a name '|| .G' #0:226@ca
setattr a radius 0.001 #1:226@ca
setattr a color #000000000000 #1:226@ca
setattr a name '|| .' #1:226@ca
setattr a radius 0.768 #0:227@ca
setattr a color #BBFFDDFF0855 #0:227@ca
setattr a name '|| .G' #0:227@ca
setattr a radius 0.769 #1:227@ca
setattr a color #000000000000 #1:227@ca
setattr a name '|| .F' #1:227@ca
setattr a radius 0.339 #0:228@ca
setattr a color #6FD566640000 #0:228@ca
setattr a name '|| .' #0:228@ca
setattr a radius 0.346 #1:228@ca
setattr a color #F548F5480000 #1:228@ca
setattr a name '|| .N' #1:228@ca
setattr a radius 0.717 #0:229@ca
setattr a color #B4B48FD70000 #0:229@ca
setattr a name '|| .NS' #0:229@ca
setattr a radius 0.718 #1:229@ca
setattr a color #D895D895B524 #1:229@ca
setattr a name '|| .AG' #1:229@ca
setattr a radius 0.928 #0:230@ca
setattr a color #012E012E0000 #0:230@ca
setattr a name '|| .WI' #0:230@ca
setattr a radius 0.925 #1:230@ca
setattr a color #B39535CA0000 #1:230@ca
setattr a name '|| .DNH' #1:230@ca
setattr a radius 0.242 #0:231@ca
setattr a color #90CB90CB4799 #0:231@ca
setattr a name '|| .' #0:231@ca
setattr a radius 0.246 #1:231@ca
setattr a color #636F723F0000 #1:231@ca
setattr a name '|| .' #1:231@ca
setattr a radius 1.508 #0:232@ca
setattr a color #592B592B0000 #0:232@ca
setattr a name '|| .YWFI' #0:232@ca
setattr a radius 1.501 #1:232@ca
setattr a color #EA1871E80778 #1:232@ca
setattr a name '|| .DNQG' #1:232@ca
setattr a radius 2.261 #0:233@ca
setattr a color #45F645F6317B #0:233@ca
setattr a name '|| .WAFSV' #0:233@ca
setattr a radius 2.265 #1:233@ca
setattr a color #00002EAFB6F6 #1:233@ca
setattr a name '|| H.QLN' #1:233@ca
setattr a radius 1.320 #0:234@ca
setattr a color #000000000000 #0:234@ca
setattr a name '|| .ILF' #0:234@ca
setattr a radius 1.320 #1:234@ca
setattr a color #020202020157 #1:234@ca
setattr a name '|| W.' #1:234@ca
setattr a radius 0.985 #0:235@ca
setattr a color #FFFFFFFFE472 #0:235@ca
setattr a name '|| .VG' #0:235@ca
setattr a radius 0.982 #1:235@ca
setattr a color #000000000000 #1:235@ca
setattr a name '|| .IL' #1:235@ca
setattr a radius 3.345 #0:236@ca
setattr a color #FFFFFFFFFFFF #0:236@ca
setattr a name '|| P>:.' #0:236@ca
setattr a radius 3.345 #1:236@ca
setattr a color #2E332E330000 #1:236@ca
setattr a name '|| FY.' #1:236@ca
setattr a radius 3.454 #0:237@ca
setattr a color #3E863E863E86 #0:237@ca
setattr a name '|| VI.M' #0:237@ca
setattr a radius 3.452 #1:237@ca
setattr a color #001500150000 #1:237@ca
setattr a name '|| W>:.' #1:237@ca
setattr a radius 0.625 #0:238@ca
setattr a color #06D106D10000 #0:238@ca
setattr a name '|| .FIMG' #0:238@ca
setattr a radius 0.626 #1:238@ca
setattr a color #F846F846F846 #1:238@ca
setattr a name '|| .VA' #1:238@ca
setattr a radius 2.025 #0:239@ca
setattr a color #FFFFFFFFA51A #0:239@ca
setattr a name '|| A.S' #0:239@ca
setattr a radius 2.024 #1:239@ca
setattr a color #F71AF71A08B2 #1:239@ca
setattr a name '|| G.' #1:239@ca
setattr a radius 0.103 #0:240@ca
setattr a color #FFFFFFFF0000 #0:240@ca
setattr a name '|| .T' #0:240@ca
setattr a radius 0.101 #1:240@ca
setattr a color #FB0690279027 #1:240@ca
setattr a name '|| .' #1:240@ca
setattr a radius 1.079 #0:241@ca
setattr a color #063406340634 #0:241@ca
setattr a name '|| .IV' #0:241@ca
setattr a radius 1.080 #1:241@ca
setattr a color #013001300000 #1:241@ca
setattr a name '|| F.' #1:241@ca
setattr a radius 1.389 #0:242@ca
setattr a color #0B3C0B3C0498 #0:242@ca
setattr a name '|| L.SA' #0:242@ca
setattr a radius 1.389 #1:242@ca
setattr a color #2D902D902B9F #1:242@ca
setattr a name '|| .IV' #1:242@ca
setattr a radius 0.590 #0:243@ca
setattr a color #FFFFFFFFFFFF #0:243@ca
setattr a name '|| .A' #0:243@ca
setattr a radius 0.590 #1:243@ca
setattr a color #FFFFFFFF0000 #1:243@ca
setattr a name '|| .G' #1:243@ca
setattr a radius 0.563 #0:244@ca
setattr a color #FFFFFFFF0000 #0:244@ca
setattr a name '|| .S' #0:244@ca
setattr a radius 0.561 #1:244@ca
setattr a color #FF16FF165CC2 #1:244@ca
setattr a name '|| .GA' #1:244@ca
setattr a radius 1.066 #0:245@ca
setattr a color #592159211718 #0:245@ca
setattr a name '|| .IYVLC' #0:245@ca
setattr a radius 1.074 #1:245@ca
setattr a color #F152F1529C50 #1:245@ca
setattr a name '|| .AG' #1:245@ca
setattr a radius 0.719 #0:246@ca
setattr a color #931693167451 #0:246@ca
setattr a name '|| .VAF' #0:246@ca
setattr a radius 0.722 #1:246@ca
setattr a color #003F003F0000 #1:246@ca
setattr a name '|| .LI' #1:246@ca
setattr a radius 2.666 #0:247@ca
setattr a color #C231C2310000 #0:247@ca
setattr a name '|| G:.LI' #0:247@ca
setattr a radius 2.667 #1:247@ca
setattr a color #F017F017F017 #1:247@ca
setattr a name '|| A:.V' #1:247@ca
setattr a radius 0.690 #0:248@ca
setattr a color #FFFFFFFFF776 #0:248@ca
setattr a name '|| .V' #0:248@ca
setattr a radius 0.687 #1:248@ca
setattr a color #B671B6719B1F #1:248@ca
setattr a name '|| .AW' #1:248@ca
setattr a radius 0.549 #0:249@ca
setattr a color #5EC05EC01546 #0:249@ca
setattr a name '|| .WT' #0:249@ca
setattr a radius 0.550 #1:249@ca
setattr a color #0AF00AF001D2 #1:249@ca
setattr a name '|| .L' #1:249@ca
setattr a radius 0.949 #0:250@ca
setattr a color #C2E1C2E19C47 #0:250@ca
setattr a name '|| .VAF' #0:250@ca
setattr a radius 0.956 #1:250@ca
setattr a color #B212B2120000 #1:250@ca
setattr a name '|| .YL' #1:250@ca
setattr a radius 1.218 #0:251@ca
setattr a color #6760676014D5 #0:251@ca
setattr a name '|| .YF' #0:251@ca
setattr a radius 1.218 #1:251@ca
setattr a color #00000988AB68 #1:251@ca
setattr a name '|| .HW' #1:251@ca
setattr a radius 0.459 #0:252@ca
setattr a color #1F80486B54BB #0:252@ca
setattr a name '|| .KL' #0:252@ca
setattr a radius 0.457 #1:252@ca
setattr a color #D63877200AF8 #1:252@ca
setattr a name '|| .QE' #1:252@ca
setattr a radius 0.636 #0:253@ca
setattr a color #19F630091EDE #0:253@ca
setattr a name '|| .LK' #0:253@ca
setattr a radius 0.633 #1:253@ca
setattr a color #6636604B0000 #1:253@ca
setattr a name '|| .YF' #1:253@ca
setattr a radius 1.376 #0:254@ca
setattr a color #16D616D60C0F #0:254@ca
setattr a name '|| .FMATL' #0:254@ca
setattr a radius 1.380 #1:254@ca
setattr a color #88D388D38B91 #1:254@ca
setattr a name '|| .VI' #1:254@ca
setattr a radius 1.213 #0:255@ca
setattr a color #35C935C91D68 #0:255@ca
setattr a name '|| .IVY' #0:255@ca
setattr a radius 1.211 #1:255@ca
setattr a color #028E030E0080 #1:255@ca
setattr a name '|| .LF' #1:255@ca
setattr a radius 0.879 #0:256@ca
setattr a color #54FA84E50E07 #0:256@ca
setattr a name '|| .GK' #0:256@ca
setattr a radius 0.877 #1:256@ca
setattr a color #046A15B84D86 #1:256@ca
setattr a name '|| .RI' #1:256@ca
setattr a radius 0.810 #0:257@ca
setattr a color #1A9C584C0000 #0:257@ca
setattr a name '|| .CRGM' #0:257@ca
setattr a radius 0.811 #1:257@ca
setattr a color #E4A4C2EAB745 #1:257@ca
setattr a name '|| .AP' #1:257@ca
setattr a radius 0.658 #0:258@ca
setattr a color #18E657ECD0EB #0:258@ca
setattr a name '|| .H' #0:258@ca
setattr a radius 0.647 #1:258@ca
setattr a color #4F04452D13FC #1:258@ca
setattr a name '|| .IRD' #1:258@ca
setattr a radius 0.299 #0:259@ca
setattr a color #036F083F0EE3 #0:259@ca
setattr a name '|| .LI' #0:259@ca
setattr a radius 0.304 #1:259@ca
setattr a color #F4465F09283D #1:259@ca
setattr a name '|| .E' #1:259@ca
setattr a radius 0.308 #0:260@ca
setattr a color #E8B9B6DA7B02 #0:260@ca
setattr a name '|| .P' #0:260@ca
setattr a radius 0.314 #1:260@ca
setattr a color #0000884F0C77 #1:260@ca
setattr a name '|| .RN' #1:260@ca
setattr a radius 0.171 #0:261@ca
setattr a color #BAF1C65B16D5 #0:261@ca
setattr a name '|| .' #0:261@ca
setattr a radius 0.184 #1:261@ca
setattr a color #F37500000000 #1:261@ca
setattr a name '|| .E' #1:261@ca
setattr a radius 0.183 #0:262@ca
setattr a color #816881685259 #0:262@ca
setattr a name '|| .' #0:262@ca
setattr a radius 0.191 #1:262@ca
setattr a color #FB2FFB2FFB2F #1:262@ca
setattr a name '|| .P' #1:262@ca
setattr a radius 0.175 #0:263@ca
setattr a color #99794A072503 #0:263@ca
setattr a name '|| .' #0:263@ca
setattr a radius 0.183 #1:263@ca
setattr a color #FBB2FBB2FBB2 #1:263@ca
setattr a name '|| .P' #1:263@ca
setattr a radius 0.257 #0:264@ca
setattr a color #B329B329527F #0:264@ca
setattr a name '|| .' #0:264@ca
setattr a radius 0.270 #1:264@ca
setattr a color #00000000FCF2 #1:264@ca
setattr a name '|| .H' #1:264@ca
setattr a radius 0.140 #0:265@ca
setattr a color #9C298771263E #0:265@ca
setattr a name '|| .' #0:265@ca
setattr a radius 0.150 #1:265@ca
setattr a color #00000000F248 #1:265@ca
setattr a name '|| .H' #1:265@ca
setattr a radius 0.114 #0:266@ca
setattr a color #3E674C965C30 #0:266@ca
setattr a name '|| .' #0:266@ca
setattr a radius 0.120 #1:266@ca
setattr a color #74C5C11E023E #1:266@ca
setattr a name '|| .' #1:266@ca
setattr a radius 0.694 #0:267@ca
setattr a color #7FC616752E21 #0:267@ca
setattr a name '|| .EDK' #0:267@ca
setattr a radius 0.691 #1:267@ca
setattr a color #F340F3408FC9 #1:267@ca
setattr a name '|| .PAT' #1:267@ca
setattr a radius 0.559 #0:268@ca
setattr a color #FFFFB29A7B30 #0:268@ca
setattr a name '|| .AE' #0:268@ca
setattr a radius 0.560 #1:268@ca
setattr a color #000023FC3B8A #1:268@ca
setattr a name '|| .FH' #1:268@ca
setattr a radius 0.707 #0:269@ca
setattr a color #8536492225DF #0:269@ca
setattr a name '|| .EGA' #0:269@ca
setattr a radius 0.703 #1:269@ca
setattr a color #25857EE278BF #1:269@ca
setattr a name '|| .KTD' #1:269@ca
setattr a radius 0.618 #0:270@ca
setattr a color #BAEDAA09396E #0:270@ca
setattr a name '|| .TV' #0:270@ca
setattr a radius 0.613 #1:270@ca
setattr a color #AB69B4BC4B4E #1:270@ca
setattr a name '|| .SA' #1:270@ca
setattr a radius 0.334 #0:271@ca
setattr a color #FFFF855C4FB6 #0:271@ca
setattr a name '|| .EP' #0:271@ca
setattr a radius 0.336 #1:271@ca
setattr a color #00B90173E5E0 #1:271@ca
setattr a name '|| .K' #1:271@ca
setattr a radius 0.230 #0:272@ca
setattr a color #FFFFD379011C #0:272@ca
setattr a name '|| .N' #0:272@ca
setattr a radius 0.228 #1:272@ca
setattr a color #D13FE7828A03 #1:272@ca
setattr a name '|| .P' #1:272@ca
setattr a radius 0.191 #0:273@ca
setattr a color #C60EA7676FFF #0:273@ca
setattr a name '|| .' #0:273@ca
setattr a radius 0.194 #1:273@ca
setattr a color #9CD39CD30000 #1:273@ca
setattr a name '|| .' #1:273@ca
setattr a radius 0.316 #0:274@ca
setattr a color #613689B83A54 #0:274@ca
setattr a name '|| .' #0:274@ca
setattr a radius 0.322 #1:274@ca
setattr a color #2BF82BF82BF8 #1:274@ca
setattr a name '|| .LV' #1:274@ca
setattr a radius 0.255 #0:275@ca
setattr a color #1DCE28090000 #0:275@ca
setattr a name '|| .L' #0:275@ca
setattr a radius 0.258 #1:275@ca
setattr a color #F302E9E9E9E9 #1:275@ca
setattr a name '|| .PV' #1:275@ca
setattr a radius 0.182 #0:276@ca
setattr a color #A4BD906E67CF #0:276@ca
setattr a name '|| .' #0:276@ca
setattr a radius 0.184 #1:276@ca
setattr a color #016802D0F167 #1:276@ca
setattr a name '|| .' #1:276@ca
setattr a radius 0.281 #0:277@ca
setattr a color #AB458B625775 #0:277@ca
setattr a name '|| .E' #0:277@ca
setattr a radius 0.284 #1:277@ca
setattr a color #F2BAF2BAD271 #1:277@ca
setattr a name '|| .V' #1:277@ca
setattr a radius 0.255 #0:278@ca
setattr a color #1FE932E882B0 #0:278@ca
setattr a name '|| .K' #0:278@ca
setattr a radius 0.260 #1:278@ca
setattr a color #232123210000 #1:278@ca
setattr a name '|| .I' #1:278@ca
setattr a radius 0.205 #0:279@ca
setattr a color #519792A45FEC #0:279@ca
setattr a name '|| .' #0:279@ca
setattr a radius 0.209 #1:279@ca
setattr a color #F4FD00000000 #1:279@ca
setattr a name '|| .D' #1:279@ca
setattr a radius 0.204 #0:280@ca
setattr a color #4A097FFF5B9B #0:280@ca
setattr a name '|| .' #0:280@ca
setattr a radius 0.202 #1:280@ca
setattr a color #43B843B847BE #1:280@ca
setattr a name '|| .' #1:280@ca
setattr a radius 0.286 #0:281@ca
setattr a color #11C61D553638 #0:281@ca
setattr a name '|| .L' #0:281@ca
setattr a radius 0.289 #1:281@ca
setattr a color #B50400000000 #1:281@ca
setattr a name '|| .D' #1:281@ca
