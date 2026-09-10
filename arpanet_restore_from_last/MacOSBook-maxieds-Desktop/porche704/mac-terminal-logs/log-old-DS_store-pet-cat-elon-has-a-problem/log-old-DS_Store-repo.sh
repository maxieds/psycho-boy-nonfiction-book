#!/opt/local/bin/bash

findout=~/Desktop/porche704/mac-terminal-logs/log-old-DS_store-pet-cat-elon-has-a-problem/tmp/find_v6.out

for fitem in $(cat $findout); do
     outpath=~/Desktop/porche704/mac-terminal-logs/$(echo "${fitem:1}" | /opt/local/bin/gsed 's/\.//g' | /opt/local/bin/gsed 's/\//-/g').strings.out;
     echo -e "Found Item: $fitem ==> $outpath";
     strings_out=$(cat $fitem | strings -a -arch x86_64);
     echo -e $strings_out > $outpath;
     /opt/local/bin/git rm -rf $fitem;
done

exit
