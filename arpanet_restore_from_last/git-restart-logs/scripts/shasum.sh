#!/bin/bash

largefile=$1
lfpath=$(dirname $largefile)

algs=("1" "224" "256" "384" "512" "512224" "512256")
opts=("binary" "text" "01" "U")

for alg in ${algs[@]}; do
     for opt in ${opts[@]}; do
	  echo -e "shasum on $(basename $largefile) [ALG: $alg] [OPT: $opt]"
          shasum -a $alg --$opt $largefile > $largefile.shasum_${alg}_${opt}.1.out 2>&1
	  shasum -a $alg --$opt --tag $largefile > $largefile.shasum_${alg}_${opt}_bsdtag.2.out 2>&1
     done
done

exit 0
