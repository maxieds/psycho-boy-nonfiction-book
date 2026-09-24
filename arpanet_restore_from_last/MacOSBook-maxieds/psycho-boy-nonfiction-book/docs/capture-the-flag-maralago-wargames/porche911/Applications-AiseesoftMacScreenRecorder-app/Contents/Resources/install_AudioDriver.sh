launchctl bootout system /Library/LaunchDaemons/com.aisee.xpc.ExtendedAudio.plist &>/dev/null || \
launchctl unbootstrap system /Library/LaunchDaemons/com.aisee.xpc.ExtendedAudio.plist &>/dev/null || \
launchctl unload /Library/LaunchDaemons/com.aisee.xpc.ExtendedAudio.plist &>/dev/null || \
true

killall AISEEAudioServer
rm -R /usr/local/libexec/AISEEAudioServer.xpc
rm /Library/LaunchDaemons/com.aisee.xpc.ExtendedAudio.plist
rm -R /Library/Audio/Plug-Ins/HAL/AISEEAudioDriver.driver

launchctl bootout system /Library/LaunchDaemons/com.apeak.xpc.ExtendedAudio.plist &>/dev/null || \
launchctl unbootstrap system /Library/LaunchDaemons/com.apeak.xpc.ExtendedAudio.plist &>/dev/null || \
launchctl unload /Library/LaunchDaemons/com.apeak.xpc.ExtendedAudio.plist &>/dev/null || \
true

killall APAudioServer
rm -R /usr/local/libexec/APAudioServer.xpc
rm /Library/LaunchDaemons/com.apeak.xpc.ExtendedAudio.plist
rm -R /Library/Audio/Plug-Ins/HAL/APAudioDriver.driver

launchctl bootout system /Library/LaunchDaemons/com.enskysoft.xpc.ExtendedAudio.plist &>/dev/null || \
launchctl unbootstrap system /Library/LaunchDaemons/com.enskysoft.xpc.ExtendedAudio.plist &>/dev/null || \
launchctl unload /Library/LaunchDaemons/com.enskysoft.xpc.ExtendedAudio.plist &>/dev/null || \
true

killall ESAudioServer
rm -R /usr/local/libexec/ESAudioServer.xpc
rm /Library/LaunchDaemons/com.enskysoft.xpc.ExtendedAudio.plist
rm -R /Library/Audio/Plug-Ins/HAL/ESAudioDriver.driver

launchctl bootout system /Library/LaunchDaemons/com.fonepaw.xpc.ExtendedAudio.plist &>/dev/null || \
launchctl unbootstrap system /Library/LaunchDaemons/com.fonepaw.xpc.ExtendedAudio.plist &>/dev/null || \
launchctl unload /Library/LaunchDaemons/com.fonepaw.xpc.ExtendedAudio.plist &>/dev/null || \
true

killall FPAudioServer
rm -R /usr/local/libexec/FPAudioServer.xpc
rm /Library/LaunchDaemons/com.fonepaw.xpc.ExtendedAudio.plist
rm -R /Library/Audio/Plug-Ins/HAL/FPAudioDriver.driver

launchctl bootout system /Library/LaunchDaemons/com.tunefab.xpc.ExtendedAudio.plist &>/dev/null || \
launchctl unbootstrap system /Library/LaunchDaemons/com.tunefab.xpc.ExtendedAudio.plist &>/dev/null || \
launchctl unload /Library/LaunchDaemons/com.tunefab.xpc.ExtendedAudio.plist &>/dev/null || \
true

killall TFAudioServer
rm -R /usr/local/libexec/TFAudioServer.xpc
rm /Library/LaunchDaemons/com.tunefab.xpc.ExtendedAudio.plist
rm -R /Library/Audio/Plug-Ins/HAL/TFAudioDriver.driver

launchctl bootout system /Library/LaunchDaemons/com.yide.xpc.ExtendedAudio.plist &>/dev/null || \
launchctl unbootstrap system /Library/LaunchDaemons/com.yide.xpc.ExtendedAudio.plist &>/dev/null || \
launchctl unload /Library/LaunchDaemons/com.yide.xpc.ExtendedAudio.plist &>/dev/null || \
true

killall YDAudioServer
rm -R /usr/local/libexec/YDAudioServer.xpc
rm /Library/LaunchDaemons/com.yide.xpc.ExtendedAudio.plist
rm -R /Library/Audio/Plug-Ins/HAL/YDAudioDriver.driver

sleep 1

SHDIR=$(dirname "$0")
cp -R "$SHDIR"/APAudioDriver.driver /Library/Audio/Plug-Ins/HAL/
chown -R root:wheel /Library/Audio/Plug-Ins/HAL/APAudioDriver.driver

launchctl kickstart -k system/com.apple.audio.coreaudiod &>/dev/null
launchctl kill SIGTERM system/com.apple.audio.coreaudiod &>/dev/null
launchctl kill TERM system/com.apple.audio.coreaudiod &>/dev/null
launchctl kill 15 system/com.apple.audio.coreaudiod &>/dev/null
launchctl kill -15 system/com.apple.audio.coreaudiod &>/dev/null
killall coreaudiod &>/dev/null
sleep 5
