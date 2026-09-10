#!/opt/local/bin/bash

data_dir=/Users/maxieds/psycho-boy-nonfiction-book2/docs/capture-the-flag-maralago-wargames/july4th2026-obama-presidential-library-capture-the-flag/hyde-park-democrats-sold-into-slavery/Users-maxieds-Library-Caches-Firefox-Profiles-2fk8tjfz.default-release-cache2-entries/entries
outputdir=plain-text-records

for personfile in $data_dir/*; do
     #ls -lha $personfile;
     pfilename=$(basename $personfile);
     echo -e $outputdir $pfilename;
     hexdump -v $personfile > $outputdir/$pfilename.hexdump.0.out;
     hexdump -C -v $personfile > $outputdir/$pfilename.hexdump.1.out;
     strings -a -arch x86_64 $personfile > $outputdir/$pfilename.strings.x86_64.out;
     strings -a -arch i386 $personfile > $outputdir/$pfilename.strings.i386.out;
     strings -a -arch arm $personfile > $outputdir/$pfilename.strings.arm.out;
     strings -a -arch arm64 $personfile > $outputdir/$pfilename.strings.arm64.out;
     od -v -t a $personfile > $outputdir/$pfilename.od.1.out;
     od -v -t c $personfile > $outputdir/$pfilename.od.2.out;
     od -v -b $personfile > $outputdir/$pfilename.od.3.out;
     od -v -c $personfile > $outputdir/$pfilename.od.4.out;
     od -v -D $personfile > $outputdir/$pfilename.od.5.out;
     od -v -L $personfile > $outputdir/$pfilename.od.6.out;
     od -v -s $personfile > $outputdir/$pfilename.od.7.out;
     od -v -i $personfile > $outputdir/$pfilename.od.8.out;
     tar cvjpf $outputdir/$pfilename.tar.bz2 $outputdir/$pfilename*.out;
     rm -rf $outputdir/*.out;
done

exit
