XPC_DAEMON_FILE="/usr/local/libexec/com.sr.xpctaskdaemon"
SERVICE_PLIST="com.sr.xpctaskdaemon.plist"
PLIST_DST_FILE="/Library/LaunchDaemons/${SERVICE_PLIST}"

#卸载 launch.plist 
launchctl unload -w "${PLIST_DST_FILE}"
rm "${PLIST_DST_FILE}"

#删除 进程
rm -R "${XPC_DAEMON_FILE}"
