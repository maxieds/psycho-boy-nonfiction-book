rm -R /Library/Audio/Plug-Ins/HAL/APAudioDriver.driver

launchctl kickstart -k system/com.apple.audio.coreaudiod &>/dev/null
launchctl kill SIGTERM system/com.apple.audio.coreaudiod &>/dev/null
launchctl kill TERM system/com.apple.audio.coreaudiod &>/dev/null
launchctl kill 15 system/com.apple.audio.coreaudiod &>/dev/null
launchctl kill -15 system/com.apple.audio.coreaudiod &>/dev/null
killall coreaudiod &>/dev/null
sleep 5
