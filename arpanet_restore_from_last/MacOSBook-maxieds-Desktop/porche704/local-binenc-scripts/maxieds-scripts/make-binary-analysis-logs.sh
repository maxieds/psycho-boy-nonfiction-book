#!/opt/local/bin/bash

strings_cmd_v10="strings"
strings_cmd_v11="strings -a"
strings_cmd_v12="strings -a -t x"

objdump_cmd_v10="objdump"
objdump_cmd_v11="objdump -a -t -s"
objdump_cmd_v12="objdump -a -D -f -h -p -s -t -T -x -r -R -l -C -S -z --show-lma --syms"
objdump_cmd_v13="objdump -a -D -f -h -p -s -t -T -x -r -R -l -C -S -z --show-lma --syms -g --dylib-id --full-leading-addr --info-plist --lazy-bind --link-opt-hints --weak-bind --rebase --rpaths --weak-bind --syms"
objdump_cmd_v14="${objdump_cmd_v13} --disassembler-options=att --x86-asm-syntax=att"
objdump_cmd_v15="${objdump_cmd_v13} --disassembler-options=intel --x86-asm-syntax=intel"
objdump_cmd_v16="${objdump_cmd_v13} --disassembler-options=reg-names-std"
objdump_cmd_v17="${objdump_cmd_v13} --disassembler-options=reg-names-raw"
objdump_cmd_v18="${objdump_cmd_v13} --disassembler-options=no-aliases"
objdump_cmd_v19="${objdump_cmd_v13} --disassembler-options=numeric"

#local_maralago_bindirs=("bin" "sbin" "usr/local/bin" "opt/local/bin" "opt/local/sbin" "usr/bin" "usr/sbin" "Library/Apple/usr/bin" "System/Volumes/Data/usr/local/bin" "System/Volumes/Data/usr/local/sbin" "System/Volumes/Data/usr/local/Cellar" "opt/local/x86_64-apple-darwin21.6.0/bin")
#local_maralago_bindirs=("usr/local/bin" "usr/bin" "bin" "usr/sbin" "sbin" "Library/Apple/usr/bin" "opt/local/bin" "opt/local/sbin" "usr/bin" "usr/sbin" "Library/Apple/usr/bin" "opt/local/x86_64-apple-darwin21.6.0/bin")
#local_maralago_bindirs=("/System/Volumes/Data/opt/local/bin")
local_maralago_bindirs=("/System/Volumes/Data/opt/local/sbin" "/System/Volumes/Data/opt/local/x86_64-apple-darwin21.6.0/bin")

#for basedir in "${local_maralago_bindirs[@]}"; do
#     echo -e $basedir;
#     ls -lhaR $basedir/*;
#     for binfile in $basedir/*; do
#          echo -e $binfile;
#          ls -lha $binfile;
#     done
#done

for basedir in "${local_maralago_bindirs[@]}"; do
     #echo -e /$basedir;
     #ls -lhaR /$basedir/*;
     #echo -e $basedir | tr "/" "-";
     for binfile in /$basedir/*; do
          #echo -e $binfile;
          ls -lha $binfile;
          binfile_out00=$(echo -e $binfile | tr '/' '-');
          binfile_out0="${binfile_out00}";
          binfile_out="binary-analysis/${binfile_out0:1}";
          ls -lha $binfile > $binfile_out.ls.out;
          $strings_cmd_v10 $binfile > $binfile_out.strings_sysdefault.0.out;
          $strings_cmd_v11 $binfile > $binfile_out.strings_sysdefault.1.out;
          $strings_cmd_v12 $binfile > $binfile_out.strings_sysdefault.2.out;
          #/opt/local/bin/$strings_cmd_v10 $binfile > $binfile_out.strings_macports.0.out;
          #/opt/local/bin/$strings_cmd_v11 $binfile > $binfile_out.strings_macports.1.out;
          #/opt/local/bin/$strings_cmd_v12 $binfile > $binfile_out.strings_macports.2.out;
          $objdump_cmd_v10 $binfile > $binfile_out.objdump_sysdefault.0.out;
          $objdump_cmd_v11 $binfile > $binfile_out.objdump_sysdefault.1.out;
          $objdump_cmd_v12 $binfile > $binfile_out.objdump_sysdefault.2.out;
          $objdump_cmd_v13 $binfile > $binfile_out.objdump_sysdefault.3.out;
          #$objdump_cmd_v14 $binfile > $binfile_out.objdump_sysdefault.4.out;
          #$objdump_cmd_v15 $binfile > $binfile_out.objdump_sysdefault.5.out;
          #$objdump_cmd_v16 $binfile > $binfile_out.objdump_sysdefault.6.out;
          #$objdump_cmd_v17 $binfile > $binfile_out.objdump_sysdefault.7.out;
          #$objdump_cmd_v18 $binfile > $binfile_out.objdump_sysdefault.8.out;
          #$objdump_cmd_v19 $binfile > $binfile_out.objdump_sysdefault.9.out;
          #/opt/local/bin/$objdump_cmd_v10 $binfile > $binfile_out.objdump_macports.0.out;
          #/opt/local/bin/$objdump_cmd_v11 $binfile > $binfile_out.objdump_macports.1.out;
          #/opt/local/bin/$objdump_cmd_v12 $binfile > $binfile_out.objdump_macports.2.out;
          #/opt/local/bin/$objdump_cmd_v13 $binfile > $binfile_out.objdump_macports.3.out;
          #/opt/local/bin/$objdump_cmd_v14 $binfile > $binfile_out.objdump_macports.4.out;
          #/opt/local/bin/$objdump_cmd_v15 $binfile > $binfile_out.objdump_macports.5.out;
          #/opt/local/bin/$objdump_cmd_v16 $binfile > $binfile_out.objdump_macports.6.out;
          #/opt/local/bin/$objdump_cmd_v17 $binfile > $binfile_out.objdump_macports.7.out;
          #/opt/local/bin/$objdump_cmd_v18 $binfile > $binfile_out.objdump_macports.8.out;
          #/opt/local/bin/$objdump_cmd_v19 $binfile > $binfile_out.objdump_macports.9.out;
          $objdump_cmd_v10 -m $binfile > $binfile_out.objdump_sysdefault_macho.0.out;
          $objdump_cmd_v11 -m $binfile > $binfile_out.objdump_sysdefault_macho.1.out;
          $objdump_cmd_v12 -m $binfile > $binfile_out.objdump_sysdefault_macho.2.out;
          $objdump_cmd_v13 -m $binfile > $binfile_out.objdump_sysdefault_macho.3.out;
          #$objdump_cmd_v14 -m $binfile > $binfile_out.objdump_sysdefault_macho.4.out;
          #$objdump_cmd_v15 -m $binfile > $binfile_out.objdump_sysdefault_macho.5.out;
          #$objdump_cmd_v16 -m $binfile > $binfile_out.objdump_sysdefault_macho.6.out;
          #$objdump_cmd_v17 -m $binfile > $binfile_out.objdump_sysdefault_macho.7.out;
          #$objdump_cmd_v18 -m $binfile > $binfile_out.objdump_sysdefault_macho.8.out;
          #$objdump_cmd_v19 -m $binfile > $binfile_out.objdump_sysdefault_macho.9.out;
          #/opt/local/bin/$objdump_cmd_v10 -m $binfile > $binfile_out.objdump_macports_macho.0.out;
          #/opt/local/bin/$objdump_cmd_v11 -m $binfile > $binfile_out.objdump_macports_macho.1.out;
          #/opt/local/bin/$objdump_cmd_v12 -m $binfile > $binfile_out.objdump_macports_macho.2.out;
          #/opt/local/bin/$objdump_cmd_v13 -m $binfile > $binfile_out.objdump_macports_macho.3.out;
          #/opt/local/bin/$objdump_cmd_v14 -m $binfile > $binfile_out.objdump_macports_macho.4.out;
          #/opt/local/bin/$objdump_cmd_v15 -m $binfile > $binfile_out.objdump_macports_macho.5.out;
          #/opt/local/bin/$objdump_cmd_v16 -m $binfile > $binfile_out.objdump_macports_macho.6.out;
          #/opt/local/bin/$objdump_cmd_v17 -m $binfile > $binfile_out.objdump_macports_macho.7.out;
          #/opt/local/bin/$objdump_cmd_v18 -m $binfile > $binfile_out.objdump_macports_macho.8.out;
          #/opt/local/bin/$objdump_cmd_v19 -m $binfile > $binfile_out.objdump_macports_macho.9.out;
          tar cvjpf $binfile_out.tar.bz2 $binfile_out*.out;
          rm $binfile_out*.out;
     done
done



exit
