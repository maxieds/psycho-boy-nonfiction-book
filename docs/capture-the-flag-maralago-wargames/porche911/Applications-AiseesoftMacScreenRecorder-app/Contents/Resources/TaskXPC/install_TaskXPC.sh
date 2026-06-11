#先卸载
LIBEXEC_FILE="/usr/local/libexec"
XPC_DAEMON_FILE="${LIBEXEC_FILE}/com.sr.xpctaskdaemon"
SERVICE_PLIST="com.sr.xpctaskdaemon.plist"
PLIST_DST_FILE="/Library/LaunchDaemons/${SERVICE_PLIST}"

#卸载 launch.plist 
launchctl unload -w "${PLIST_DST_FILE}"
rm "${PLIST_DST_FILE}"

#删除 进程 目录
rm -R "${XPC_DAEMON_FILE}"



SHDIR=$(dirname "$0")
PLIST_SRC_FILE="${SHDIR}/${SERVICE_PLIST}"

#拷贝 进程到对应路径
mkdir ${LIBEXEC_FILE}
mkdir ${XPC_DAEMON_FILE}
cp "$SHDIR"/XPCTaskDaemon "${XPC_DAEMON_FILE}"

#拷贝 plist 到对应路径
cp "${PLIST_SRC_FILE}" "${PLIST_DST_FILE}"

#启动 launch.plist 
launchctl load -w "${PLIST_DST_FILE}"
