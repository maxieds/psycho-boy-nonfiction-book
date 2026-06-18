#!/bin/sh
"/Applications/Android Studio Chipmunk.app/Contents/jre/Contents/Home/bin/java" -cp "/Applications/Android Studio Chipmunk.app/Contents/plugins/git4idea/lib/git4idea-rt.jar:/Applications/Android Studio Chipmunk.app/Contents/lib/xmlrpc-2.0.1.jar:/Applications/Android Studio Chipmunk.app/Contents/lib/commons-codec-1.15.jar" git4idea.http.GitAskPassApp "$@"
