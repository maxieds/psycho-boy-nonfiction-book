#!/opt/local/bin/bash

#findout=log-old-DS_store-pet-cat-elon-has-a-problem/tmp/DS_Store-find_v2.out
#find ~/psycho-boy-nonfiction-book2 -iname '\.DS_Store' > $findout;
#findout=log-old-DS_store-pet-cat-elon-has-a-problem/tmp/find_v3.out
#findout=log-old-DS_store-pet-cat-elon-has-a-problem/tmp/find_v4.out
findout=log-old-DS_store-pet-cat-elon-has-a-problem/tmp/find_v5.out

for fitem in $(cat $findout); do
     outpath=$(echo "${fitem:1}" | /opt/local/bin/gsed 's/\.//g' | /opt/local/bin/gsed 's/\//-/g').strings.out;
     echo -e "Found Item: $fitem ==> $outpath";
     strings_out=$(cat $fitem | strings -a -arch x86_64);
     echo -e $strings_out > $outpath;
     rm -rf $fitem;
done

exit
