# Setup -- Username = maxieds

```bash
Lab15s-iMac:~ lab15$ sudo dscl . -create /Users/maxieds PrimaryGroupID 80
Lab15s-iMac:~ lab15$ sudo sysadminctl -keepHome -UID 80 -admin -fullName "Maxie D Schmidt (personal account)" maxieds
Lab15s-iMac:~ lab15$ sudo sysadminctl -keepHome -UID 80 -adminUser maxieds -fullName "Maxie D Schmidt (personal account)" -addUser maxieds -password -
2023-04-27 20:10:07.389 sysadminctl[1487:88838] ----------------------------
2023-04-27 20:10:07.389 sysadminctl[1487:88838] No clear text password or interactive option was specified (adduser, change/reset password will not allow user to use FDE) !
2023-04-27 20:10:07.390 sysadminctl[1487:88838] ----------------------------
2023-04-27 20:10:07.458 sysadminctl[1487:88838] Creating user record…
User password:
2023-04-27 20:10:13.711 sysadminctl[1487:88838] ### Error:-14135 File:/BuildRoot/Library/Caches/com.apple.xbs/Sources/Admin/Admin-679/DSRecord.m Line:496
2023-04-27 20:10:13.711 sysadminctl[1487:88838] Assigning UID: 80
2023-04-27 20:10:14.416 sysadminctl[1487:88838] Creating home directory at /Users/maxieds
2023-04-27 20:10:14.416 sysadminctl[1487:88838] Directory at path:/Users/maxieds already exists
Lab15s-iMac:~ lab15$ sudo su - maxieds
Lab15s-iMac:~ maxieds$ whoami
maxieds
Lab15s-iMac:~ maxieds$ sudo visudo
Lab15s-iMac:~ lab15$ sudo sysadminctl -keepHome -UID 80 -admin -fullName "Lab #15 MacOS Desktop Local Administrator" -addUser localadmin -password -
Lab15s-iMac:~ maxieds$ sudo sysadminctl -keepHome -UID 80 -adminUser -fullName "Lab #15 MacOS Desktop Local Administrator" -addUser localadmin -password -
Password:
Sorry, try again.
Password:
2023-04-27 20:20:50.746 sysadminctl[1533:91380] ----------------------------
2023-04-27 20:20:50.746 sysadminctl[1533:91380] No clear text password or interactive option was specified (adduser, change/reset password will not allow user to use FDE) !
2023-04-27 20:20:50.746 sysadminctl[1533:91380] ----------------------------
2023-04-27 20:20:50.812 sysadminctl[1533:91380] Creating user record…
User password:
2023-04-27 20:20:57.564 sysadminctl[1533:91380] Assigning UID: 80
2023-04-27 20:20:57.574 sysadminctl[1533:91380] ### Error:-14135 File:/BuildRoot/Library/Caches/com.apple.xbs/Sources/Admin/Admin-679/DSRecord.m Line:418
2023-04-27 20:20:57.687 sysadminctl[1533:91380] Creating home directory at /Users/localadmin
Lab15s-iMac:~ maxieds$ sysadminctl
2023-04-27 20:21:11.002 sysadminctl[1549:91638] Usage: sysadminctl
        -adminUser <admin user name> -adminPassword <admin user password>
        -deleteUser <user name> [-secure || -keepHome] (interactive || -adminUser <administrator user name> -adminPassword <administrator password>)
        -newPassword <new password> -oldPassword <old password> [-passwordHint <password hint>]
        -resetPasswordFor <local user name> -newPassword <new password> [-passwordHint <password hint>] (interactive] || -adminUser <administrator user name> -adminPassword <administrator password>)
        -addUser <user name> [-fullName <full name>] [-UID <user ID>] [-shell <path to shell>] [-password <user password>] [-hint <user hint>] [-home <full path to home>] [-admin] [-picture <full path to user image>] (interactive] || -adminUser <administrator user name> -adminPassword <administrator password>)
        -secureTokenStatus <user name>
        -secureTokenOn <user name> -password <password> (interactive || -adminUser <administrator user name> -adminPassword <administrator password>)
        -secureTokenOff <user name> -password <password> (interactive || -adminUser <administrator user name> -adminPassword <administrator password>)
        -guestAccount <on || off || status>
        -afpGuestAccess <on || off || status>
        -smbGuestAccess <on || off || status>
        -automaticTime <on || off || status>
        -filesystem status
Pass '-' instead of password in commands above to request prompt.
Lab15s-iMac:~ maxieds$ sudo sysadminctl -keepHome -UID 80 -fullName "Lab #15 MacOS Desktop Default User" -addUser lab15
2023-04-27 20:22:21.630 sysadminctl[1561:91993] ----------------------------
2023-04-27 20:22:21.630 sysadminctl[1561:91993] No clear text password or interactive option was specified (adduser, change/reset password will not allow user to use FDE) !
2023-04-27 20:22:21.630 sysadminctl[1561:91993] ----------------------------
2023-04-27 20:22:21.684 sysadminctl[1561:91993] Creating user record…
2023-04-27 20:22:21.687 sysadminctl[1561:91993] ### Error:-14135 File:/BuildRoot/Library/Caches/com.apple.xbs/Sources/Admin/Admin-679/DSRecord.m Line:496
2023-04-27 20:22:21.687 sysadminctl[1561:91993] Assigning UID: 80
2023-04-27 20:22:21.709 sysadminctl[1561:91993] ### Error:-14135 File:/BuildRoot/Library/Caches/com.apple.xbs/Sources/Admin/Admin-679/DSRecord.m Line:326
2023-04-27 20:22:21.908 sysadminctl[1561:91993] Creating home directory at /Users/lab15
2023-04-27 20:22:21.909 sysadminctl[1561:91993] Directory at path:/Users/lab15 already exists
Lab15s-iMac:~ maxieds$ sudo sysadminctl -keepHome -UID 80 -fullName "Lab #15 MacOS Desktop Default User" -addUser lab15 -password -
2023-04-27 20:22:29.864 sysadminctl[1566:92124] ----------------------------
2023-04-27 20:22:29.864 sysadminctl[1566:92124] No clear text password or interactive option was specified (adduser, change/reset password will not allow user to use FDE) !
2023-04-27 20:22:29.864 sysadminctl[1566:92124] ----------------------------
2023-04-27 20:22:29.932 sysadminctl[1566:92124] Creating user record…
User password:
2023-04-27 20:22:32.544 sysadminctl[1566:92124] ### Error:-14135 File:/BuildRoot/Library/Caches/com.apple.xbs/Sources/Admin/Admin-679/DSRecord.m Line:496
2023-04-27 20:22:32.544 sysadminctl[1566:92124] Assigning UID: 80
2023-04-27 20:22:32.559 sysadminctl[1566:92124] ### Error:-14135 File:/BuildRoot/Library/Caches/com.apple.xbs/Sources/Admin/Admin-679/DSRecord.m Line:326
2023-04-27 20:22:33.257 sysadminctl[1566:92124] Creating home directory at /Users/lab15
2023-04-27 20:22:33.257 sysadminctl[1566:92124] Directory at path:/Users/lab15 already exists
```
Then followed by some basic setup:
```bash
Lab15s-iMac:~ maxieds$ pwd
/Users/maxieds
Lab15s-iMac:~ maxieds$ sudo chown maxieds .
```
See also the associated changes in the file ``/etc/sudoers`` edited with ``visudo`` and
copied into this directory.
