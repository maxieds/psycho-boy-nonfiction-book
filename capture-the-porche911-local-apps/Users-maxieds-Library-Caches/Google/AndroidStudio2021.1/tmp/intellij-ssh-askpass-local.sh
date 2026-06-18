#!/bin/sh
"/Applications/Android Studio Bumblebee.app/Contents/jre/Contents/Home/bin/java" -cp "/Applications/Android Studio Bumblebee.app/Contents/plugins/git4idea/lib/git4idea-rt.jar:/Applications/Android Studio Bumblebee.app/Contents/lib/xmlrpc-2.0.1.jar:/Applications/Android Studio Bumblebee.app/Contents/lib/commons-codec-1.15.jar" org.jetbrains.git4idea.nativessh.GitNativeSshAskPassApp "$@"
