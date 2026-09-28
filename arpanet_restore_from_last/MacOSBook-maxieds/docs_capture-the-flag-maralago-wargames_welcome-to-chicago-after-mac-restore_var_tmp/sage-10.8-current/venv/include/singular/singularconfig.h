#ifndef _SINGULAR_SINGULARCONFIG_H
#define _SINGULAR_SINGULARCONFIG_H 1
 
/* singularconfig.h. Generated automatically at end of configure. */
 
/* _config.h.  Generated from _config.h.in by configure.  */
/* _config.h.in.  Generated from configure.ac by autoheader.  */

/* ac_configure_args */
#ifndef AC_CONFIGURE_ARGS
#define AC_CONFIGURE_ARGS " '--prefix=/private/var/tmp/sage-10.8-current/local' '--libdir=/private/var/tmp/sage-10.8-current/local/lib' '--disable-maintainer-mode' '--disable-dependency-tracking' '--exec-prefix=/private/var/tmp/sage-10.8-current/local' '--bindir=/private/var/tmp/sage-10.8-current/local/bin' '--with-ntl=/private/var/tmp/sage-10.8-current/local' '--with-flint=/private/var/tmp/sage-10.8-current/local' '--enable-gfanlib' '--enable-Singular' '--enable-factory' '--disable-doc' '--disable-polymake' '--without-python' '--without-pythonmodule' '--disable-python' '--disable-python_module' '--disable-python-module' '--disable-static' '--with-libparse' 'CC=gcc' 'CFLAGS=-O2 -mmacosx-version-min=10.13 -mno-avx2 -mno-bmi2 -I/var/tmp/sage-10.8-current/local/include' 'LDFLAGS=-L/private/var/tmp/sage-10.8-current/local/lib -L/private/var/tmp/sage-10.8-current/local/lib -Wl,-platform_version,macos,10.13,10.13 -L/var/tmp/sage-10.8-current/local/lib' 'CPPFLAGS=-I/var/tmp/sage-10.8-current/local/include' 'CXX=g++ -std=gnu++11' 'CXXFLAGS=-O2 -mmacosx-version-min=10.13 -mno-avx2 -mno-bmi2 -I/var/tmp/sage-10.8-current/local/include' --enable-omalloc  OMALLOC_LIBS='/private/var/tmp/sage-10.8-current/local/var/tmp/sage/build/singular-4.4.1/src/omalloc/libomalloc.la' OMALLOC_INCLUDES='-I/private/var/tmp/sage-10.8-current/local/var/tmp/sage/build/singular-4.4.1/src' --htmldir=${prefix}/share/doc/singular --with-Singular RESOURCES_LIBS='/private/var/tmp/sage-10.8-current/local/var/tmp/sage/build/singular-4.4.1/src/resources/libsingular_resources.la' RESOURCES_INCLUDES='-I/private/var/tmp/sage-10.8-current/local/var/tmp/sage/build/singular-4.4.1/src ' FACTORY_LIBS='/private/var/tmp/sage-10.8-current/local/var/tmp/sage/build/singular-4.4.1/src/factory/libfactory.la' FACTORY_INCLUDES='-I/private/var/tmp/sage-10.8-current/local/var/tmp/sage/build/singular-4.4.1/src -I/private/var/tmp/sage-10.8-current/local/var/tmp/sage/build/singular-4.4.1/src/factory -I/private/var/tmp/sage-10.8-current/local/var/tmp/sage/build/singular-4.4.1/src/factory/include'"
#endif

/* bindir */
#ifndef BIN_DIR
#define BIN_DIR "/private/var/tmp/sage-10.8-current/local/bin"
#endif

/* CC */
#ifndef CC
#define CC "gcc"
#endif

/* CFLAGS */
#ifndef CFLAGS
#define CFLAGS " -O2 -mmacosx-version-min=10.13 -mno-avx2 -mno-bmi2 -I/var/tmp/sage-10.8-current/local/include  -pipe -fno-common -g0 -O3 -Wno-unused-function -Wno-trigraphs -Wno-unused-parameter -Wunknown-pragmas -Wno-unused-variable -fomit-frame-pointer -fwrapv -fvisibility=default -finline-functions -fno-exceptions -fno-threadsafe-statics -funroll-loops -Qunused-arguments -pthread"
#endif

/* CPPFLAGS */
#ifndef CPPFLAGS
#define CPPFLAGS "-I/var/tmp/sage-10.8-current/local/include"
#endif

/* CXX */
#ifndef CXX
#define CXX "g++ -std=gnu++11"
#endif

/* CXXFLAGS */
#ifndef CXXFLAGS
#define CXXFLAGS "-O2 -mmacosx-version-min=10.13 -mno-avx2 -mno-bmi2 -I/var/tmp/sage-10.8-current/local/include -pipe -fno-common -g0 -O3 -Wno-unused-function -Wno-trigraphs -Wno-unused-parameter -Wunknown-pragmas -Wno-unused-variable -fomit-frame-pointer -fwrapv -fvisibility=default -finline-functions -fno-exceptions -fno-threadsafe-statics -funroll-loops -fno-rtti -Qunused-arguments -fno-delete-null-pointer-checks"
#endif

/* htmldir */
#ifndef DATA_DIR
#define DATA_DIR "/private/var/tmp/sage-10.8-current/local/share/doc/singular"
#endif

/* DEFS */
#ifndef DEFS
#define DEFS ""
#endif

/* exec_prefix */
#ifndef EXEC_PREFIX
#define EXEC_PREFIX "/private/var/tmp/sage-10.8-current/local"
#endif

/* FLINT_CFLAGS */
#ifndef FLINT_CFLAGS
#define FLINT_CFLAGS "-I/private/var/tmp/sage-10.8-current/local/include/"
#endif

/* FLINT_LIBS */
#ifndef FLINT_LIBS
#define FLINT_LIBS "-L/private/var/tmp/sage-10.8-current/local/lib -Wl,-rpath,/private/var/tmp/sage-10.8-current/local/lib -lflint -lmpfr -lgmp"
#endif

/* GMP_CPPFLAGS */
#ifndef GMP_CPPFLAGS
#define GMP_CPPFLAGS ""
#endif

/* GMP_LIBS */
#ifndef GMP_LIBS
#define GMP_LIBS "-lgmp"
#endif

/* whether google perftools support is enabled */
/* #undef GOOGLE_PERFTOOLS_ENABLED */

/* whether google profiling support is enabled */
#ifndef GOOGLE_PROFILE_ENABLED
#define GOOGLE_PROFILE_ENABLED 0
#endif

/* Define to 1 if you have the <asm/sigcontext.h> header file. */
/* #undef HAVE_ASM_SIGCONTEXT_H */

/* Define if Ccluster is installed */
/* #undef HAVE_CCLUSTER */

/* Define to 1 if you have the <cddlib/setoper.h> header file. */
#ifndef HAVE_CDDLIB_SETOPER_H
#define HAVE_CDDLIB_SETOPER_H 1
#endif

/* Define to 1 if you have the <cdd/setoper.h> header file. */
#ifndef HAVE_CDD_SETOPER_H
#define HAVE_CDD_SETOPER_H 1
#endif

/* Define to have dbm links */
#ifndef HAVE_DBM
#define HAVE_DBM 1
#endif

/* enable dynamic modules */
#ifndef HAVE_DL
#define HAVE_DL 1
#endif

/* Define to 1 if you have the <dlfcn.h> header file. */
#ifndef HAVE_DLFCN_H
#define HAVE_DLFCN_H 1
#endif

/* enable dynamic modules */
#ifndef HAVE_DYNAMIC_LOADING
#define HAVE_DYNAMIC_LOADING 1
#endif

/* enable dynamic p-procs */
#ifndef HAVE_DYNAMIC_PPROCS
#define HAVE_DYNAMIC_PPROCS 1
#endif

/* Use dynamic readline */
/* #undef HAVE_DYN_RL */

/* Define to 1 if you have the <fcntl.h> header file. */
#ifndef HAVE_FCNTL_H
#define HAVE_FCNTL_H 1
#endif

/* Define if FLINT is installed */
#ifndef HAVE_FLINT
#define HAVE_FLINT 1
#endif

/* Define to 1 if you have the <fstream.h> header file. */
/* #undef HAVE_FSTREAM_H */

/* use branch for addition in Z/p otherwise it uses a generic add */
#ifndef HAVE_GENERIC_ADD
#define HAVE_GENERIC_ADD 1
#endif

/* multiplication is fast on the cpu: a*b is with mod otherwise using tables
   of logartihms */
/* #undef HAVE_GENERIC_MULT */

/* Define to 1 if you have the 'getcwd' function. */
#ifndef HAVE_GETCWD
#define HAVE_GETCWD 1
#endif

/* Define to 1 if you have the 'getwd' function. */
#ifndef HAVE_GETWD
#define HAVE_GETWD 1
#endif

/* whether gfanlib support is enabled */
#ifndef HAVE_GFANLIB
#define HAVE_GFANLIB 1
#endif

/* Define to 1 if you have the <inttypes.h> header file. */
#ifndef HAVE_INTTYPES_H
#define HAVE_INTTYPES_H 1
#endif

/* division via a table of logarithms */
/* #undef HAVE_INVTABLE */

/* Define to 1 if you have the <iomanip.h> header file. */
/* #undef HAVE_IOMANIP_H */

/* Define to 1 if you have the <iostream.h> header file. */
/* #undef HAVE_IOSTREAM_H */

/* Define to 1 if you have the 'curses' library (-lcurses). */
/* #undef HAVE_LIBCURSES */

/* Define to 1 if you have the 'mathic' library (-lmathic). */
/* #undef HAVE_LIBMATHIC */

/* Define to 1 if you have the 'mathicgb' library (-lmathicgb). */
/* #undef HAVE_LIBMATHICGB */

/* Define to 1 if you have the 'memtailor' library (-lmemtailor). */
/* #undef HAVE_LIBMEMTAILOR */

/* Define to 1 if you have the 'ncurses' library (-lncurses). */
#ifndef HAVE_LIBNCURSES
#define HAVE_LIBNCURSES 1
#endif

/* Define to 1 if you have the 'readline' library (-lreadline). */
#ifndef HAVE_LIBREADLINE
#define HAVE_LIBREADLINE 1
#endif

/* Define to 1 if you have the 'rt' library (-lrt). */
/* #undef HAVE_LIBRT */

/* Define to 1 if you have the 'tbb' library (-ltbb). */
/* #undef HAVE_LIBTBB */

/* Define to 1 if you have the 'termcap' library (-ltermcap). */
/* #undef HAVE_LIBTERMCAP */

/* Define to 1 if you have the <limits.h> header file. */
#ifndef HAVE_LIMITS_H
#define HAVE_LIMITS_H 1
#endif

/* Define if mathicgb is to be used */
/* #undef HAVE_MATHICGB */

/* Define to 1 if you have the <minix/config.h> header file. */
/* #undef HAVE_MINIX_CONFIG_H */

/* Define to 1 if you have the <mpfr.h> header file. */
#ifndef HAVE_MPFR_H
#define HAVE_MPFR_H 1
#endif

/* Define if NTL is installed */
#ifndef HAVE_NTL
#define HAVE_NTL 1
#endif

/* Enable non-commutative subsystem */
#ifndef HAVE_PLURAL
#define HAVE_PLURAL 1
#endif

/* Define to 1 if you have the 'poll' function. */
#ifndef HAVE_POLL
#define HAVE_POLL 1
#endif

/* Define to 1 if you have the <poll.h> header file. */
#ifndef HAVE_POLL_H
#define HAVE_POLL_H 1
#endif

/* Define if you have POSIX threads libraries and header files. */
#ifndef HAVE_PTHREAD
#define HAVE_PTHREAD 1
#endif

/* Have PTHREAD_PRIO_INHERIT. */
#ifndef HAVE_PTHREAD_PRIO_INHERIT
#define HAVE_PTHREAD_PRIO_INHERIT 1
#endif

/* Define to 1 if you have the 'putenv' function. */
#ifndef HAVE_PUTENV
#define HAVE_PUTENV 1
#endif

/* Define to 1 if you have the <pwd.h> header file. */
#ifndef HAVE_PWD_H
#define HAVE_PWD_H 1
#endif

/* can embed python */
/* #undef HAVE_PYTHON */

/* Define to 1 if you have the 'qsort_r' function. */
#ifndef HAVE_QSORT_R
#define HAVE_QSORT_R 1
#endif

/* Enable RatGB support */
/* #undef HAVE_RATGRING */

/* Use readline */
#ifndef HAVE_READLINE
#define HAVE_READLINE 1
#endif

/* Define to 1 if you have the <readline/history.h> header file. */
#ifndef HAVE_READLINE_HISTORY_H
#define HAVE_READLINE_HISTORY_H 1
#endif

/* Define to 1 if you have the <readline/readline.h> header file. */
#ifndef HAVE_READLINE_READLINE_H
#define HAVE_READLINE_READLINE_H 1
#endif

/* Define to 1 if you have the 'readlink' function. */
#ifndef HAVE_READLINK
#define HAVE_READLINK 1
#endif

/* Define to 1 if you have the 'setenv' function. */
#ifndef HAVE_SETENV
#define HAVE_SETENV 1
#endif

/* Define to 1 if you have the <setoper.h> header file. */
#ifndef HAVE_SETOPER_H
#define HAVE_SETOPER_H 1
#endif

/* Enable letterplace */
#ifndef HAVE_SHIFTBBA
#define HAVE_SHIFTBBA 1
#endif

/* Define to 1 if you have the <spasm.h> header file. */
/* #undef HAVE_SPASM_H */

/* Define to 1 if you have the <stdint.h> header file. */
#ifndef HAVE_STDINT_H
#define HAVE_STDINT_H 1
#endif

/* Define to 1 if you have the <stdio.h> header file. */
#ifndef HAVE_STDIO_H
#define HAVE_STDIO_H 1
#endif

/* Define to 1 if you have the <stdlib.h> header file. */
#ifndef HAVE_STDLIB_H
#define HAVE_STDLIB_H 1
#endif

/* Define to 1 if you have the <strings.h> header file. */
#ifndef HAVE_STRINGS_H
#define HAVE_STRINGS_H 1
#endif

/* Define to 1 if you have the <string.h> header file. */
#ifndef HAVE_STRING_H
#define HAVE_STRING_H 1
#endif

/* Define to 1 if you have the <sys/file.h> header file. */
#ifndef HAVE_SYS_FILE_H
#define HAVE_SYS_FILE_H 1
#endif

/* Define to 1 if you have the <sys/ioctl.h> header file. */
#ifndef HAVE_SYS_IOCTL_H
#define HAVE_SYS_IOCTL_H 1
#endif

/* Define to 1 if you have the <sys/param.h> header file. */
#ifndef HAVE_SYS_PARAM_H
#define HAVE_SYS_PARAM_H 1
#endif

/* Define to 1 if you have the <sys/stat.h> header file. */
#ifndef HAVE_SYS_STAT_H
#define HAVE_SYS_STAT_H 1
#endif

/* Define to 1 if you have the <sys/times.h> header file. */
#ifndef HAVE_SYS_TIMES_H
#define HAVE_SYS_TIMES_H 1
#endif

/* Define to 1 if you have the <sys/time.h> header file. */
#ifndef HAVE_SYS_TIME_H
#define HAVE_SYS_TIME_H 1
#endif

/* Define to 1 if you have the <sys/types.h> header file. */
#ifndef HAVE_SYS_TYPES_H
#define HAVE_SYS_TYPES_H 1
#endif

/* Define to 1 if you have the <termcap.h> header file. */
#ifndef HAVE_TERMCAP_H
#define HAVE_TERMCAP_H 1
#endif

/* Define to 1 if you have the <termios.h> header file. */
#ifndef HAVE_TERMIOS_H
#define HAVE_TERMIOS_H 1
#endif

/* Define to 1 if you have the <term.h> header file. */
#ifndef HAVE_TERM_H
#define HAVE_TERM_H 1
#endif

/* Define to 1 if you have the <unistd.h> header file. */
#ifndef HAVE_UNISTD_H
#define HAVE_UNISTD_H 1
#endif

/* Define to 1 if you have the <wchar.h> header file. */
#ifndef HAVE_WCHAR_H
#define HAVE_WCHAR_H 1
#endif

/* LDFLAGS */
#ifndef LDFLAGS
#define LDFLAGS "-L/private/var/tmp/sage-10.8-current/local/lib -L/private/var/tmp/sage-10.8-current/local/lib -Wl,-platform_version,macos,10.13,10.13 -L/var/tmp/sage-10.8-current/local/lib -pipe -fno-common -g0 -O3 -Wno-unused-function -Wno-trigraphs -Wno-unused-parameter -Wunknown-pragmas -Wno-unused-variable -fomit-frame-pointer -fwrapv -fvisibility=default -finline-functions -fno-exceptions -fno-threadsafe-statics -funroll-loops -Qunused-arguments  -rdynamic -flat_namespace -Wl,-bind_at_load -Wl,-undefined,dynamic_lookup"
#endif

/* libexecdir */
#ifndef LIBEXEC_DIR
#define LIBEXEC_DIR "/private/var/tmp/sage-10.8-current/local/libexec"
#endif

/* LIBS */
#ifndef LIBS
#define LIBS "-lreadline -lncurses  -lgmp "
#endif

/* libdir */
#ifndef LIB_DIR
#define LIB_DIR "/private/var/tmp/sage-10.8-current/local/lib"
#endif

/* Define to the sub-directory where libtool stores uninstalled libraries. */
#ifndef LT_OBJDIR
#define LT_OBJDIR ".libs/"
#endif

/* NTL_CPPFLAGS */
#ifndef NTL_CPPFLAGS
#define NTL_CPPFLAGS "-I/private/var/tmp/sage-10.8-current/local/include"
#endif

/* NTL_LIBS */
#ifndef NTL_LIBS
#define NTL_LIBS "-L/private/var/tmp/sage-10.8-current/local/lib -lntl"
#endif

/* "Disable OM Debug" */
#ifndef OM_NDEBUG
#define OM_NDEBUG 1
#endif

/* Name of package */
#ifndef PACKAGE
#define PACKAGE "singular"
#endif

/* Define to the address where bug reports for this package should be sent. */
#ifndef PACKAGE_BUGREPORT
#define PACKAGE_BUGREPORT "singular@mathematik.uni-kl.de"
#endif

/* Define to the full name of this package. */
#ifndef PACKAGE_NAME
#define PACKAGE_NAME "singular"
#endif

/* Define to the full name and version of this package. */
#ifndef PACKAGE_STRING
#define PACKAGE_STRING "singular 4.4.1"
#endif

/* Define to the one symbol short name of this package. */
#ifndef PACKAGE_TARNAME
#define PACKAGE_TARNAME "singular"
#endif

/* Define to the home page for this package. */
#ifndef PACKAGE_URL
#define PACKAGE_URL ""
#endif

/* Define to the version of this package. */
#ifndef PACKAGE_VERSION
#define PACKAGE_VERSION "4.4.1"
#endif

/* prefix */
#ifndef PREFIX
#define PREFIX "/private/var/tmp/sage-10.8-current/local"
#endif

/* PTHREAD_CFLAGS */
#ifndef PTHREAD_CFLAGS
#define PTHREAD_CFLAGS "-pthread"
#endif

/* Define to necessary symbol if this constant uses a non-standard name on
   your system. */
/* #undef PTHREAD_CREATE_JOINABLE */

/* PTHREAD_LIBS */
#ifndef PTHREAD_LIBS
#define PTHREAD_LIBS ""
#endif

/* Use readline.h */
#ifndef READLINE_READLINE_H_OK
#define READLINE_READLINE_H_OK 1
#endif

/* SINGULAR_CFLAGS */
#ifndef SINGULAR_CFLAGS
#define SINGULAR_CFLAGS "-DSING_NDEBUG -DOM_NDEBUG"
#endif

/* "Disable Singular Debug" */
#ifndef SING_NDEBUG
#define SING_NDEBUG 1
#endif

/* The size of 'long', as computed by sizeof. */
#ifndef SIZEOF_LONG
#define SIZEOF_LONG 8
#endif

/* Refined list of builtin modules */
/* #undef SI_BUILTINMODULES */

/* Add(list) for Builtin modules */
#ifndef SI_BUILTINMODULES_ADD
#define SI_BUILTINMODULES_ADD(add) 
#endif

/* Enable autoloading of reference counted types */
/* #undef SI_COUNTEDREF_AUTOLOAD */

/* "i686" */
/* #undef SI_CPU_I386 */

/* "ia64" */
/* #undef SI_CPU_IA64 */

/* "PPC" */
/* #undef SI_CPU_PPC */

/* "SPARC" */
/* #undef SI_CPU_SPARC */

/* "x86-64" */
#ifndef SI_CPU_X86_64
#define SI_CPU_X86_64 1
#endif

/* Define to 1 if all of the C89 standard headers exist (not just the ones
   required in a freestanding environment). This macro is provided for
   backward compatibility; new code need not use it. */
#ifndef STDC_HEADERS
#define STDC_HEADERS 1
#endif

/* Singular\'s own uname\ */
#ifndef S_UNAME
#define S_UNAME "x86_64-Darwin"
#endif

/* Enable extensions on AIX, Interix, z/OS.  */
#ifndef _ALL_SOURCE
# define _ALL_SOURCE 1
#endif
/* Enable general extensions on macOS.  */
#ifndef _DARWIN_C_SOURCE
# define _DARWIN_C_SOURCE 1
#endif
/* Enable general extensions on Solaris.  */
#ifndef __EXTENSIONS__
# define __EXTENSIONS__ 1
#endif
/* Enable GNU extensions on systems that have them.  */
#ifndef _GNU_SOURCE
# define _GNU_SOURCE 1
#endif
/* Enable X/Open compliant socket functions that do not require linking
   with -lxnet on HP-UX 11.11.  */
#ifndef _HPUX_ALT_XOPEN_SOCKET_API
# define _HPUX_ALT_XOPEN_SOCKET_API 1
#endif
/* Identify the host operating system as Minix.
   This macro does not affect the system headers' behavior.
   A future release of Autoconf may stop defining this macro.  */
#ifndef _MINIX
/* # undef _MINIX */
#endif
/* Enable general extensions on NetBSD.
   Enable NetBSD compatibility extensions on Minix.  */
#ifndef _NETBSD_SOURCE
# define _NETBSD_SOURCE 1
#endif
/* Enable OpenBSD compatibility extensions on NetBSD.
   Oddly enough, this does nothing on OpenBSD.  */
#ifndef _OPENBSD_SOURCE
# define _OPENBSD_SOURCE 1
#endif
/* Define to 1 if needed for POSIX-compatible behavior.  */
#ifndef _POSIX_SOURCE
/* # undef _POSIX_SOURCE */
#endif
/* Define to 2 if needed for POSIX-compatible behavior.  */
#ifndef _POSIX_1_SOURCE
/* # undef _POSIX_1_SOURCE */
#endif
/* Enable POSIX-compatible threading on Solaris.  */
#ifndef _POSIX_PTHREAD_SEMANTICS
# define _POSIX_PTHREAD_SEMANTICS 1
#endif
/* Enable extensions specified by ISO/IEC TS 18661-5:2014.  */
#ifndef __STDC_WANT_IEC_60559_ATTRIBS_EXT__
# define __STDC_WANT_IEC_60559_ATTRIBS_EXT__ 1
#endif
/* Enable extensions specified by ISO/IEC TS 18661-1:2014.  */
#ifndef __STDC_WANT_IEC_60559_BFP_EXT__
# define __STDC_WANT_IEC_60559_BFP_EXT__ 1
#endif
/* Enable extensions specified by ISO/IEC TS 18661-2:2015.  */
#ifndef __STDC_WANT_IEC_60559_DFP_EXT__
# define __STDC_WANT_IEC_60559_DFP_EXT__ 1
#endif
/* Enable extensions specified by C23 Annex F.  */
#ifndef __STDC_WANT_IEC_60559_EXT__
# define __STDC_WANT_IEC_60559_EXT__ 1
#endif
/* Enable extensions specified by ISO/IEC TS 18661-4:2015.  */
#ifndef __STDC_WANT_IEC_60559_FUNCS_EXT__
# define __STDC_WANT_IEC_60559_FUNCS_EXT__ 1
#endif
/* Enable extensions specified by C23 Annex H and ISO/IEC TS 18661-3:2015.  */
#ifndef __STDC_WANT_IEC_60559_TYPES_EXT__
# define __STDC_WANT_IEC_60559_TYPES_EXT__ 1
#endif
/* Enable extensions specified by ISO/IEC TR 24731-2:2010.  */
#ifndef __STDC_WANT_LIB_EXT2__
# define __STDC_WANT_LIB_EXT2__ 1
#endif
/* Enable extensions specified by ISO/IEC 24747:2009.  */
#ifndef __STDC_WANT_MATH_SPEC_FUNCS__
# define __STDC_WANT_MATH_SPEC_FUNCS__ 1
#endif
/* Enable extensions on HP NonStop.  */
#ifndef _TANDEM_SOURCE
# define _TANDEM_SOURCE 1
#endif
/* Enable X/Open extensions.  Define to 500 only if necessary
   to make mbstate_t available.  */
#ifndef _XOPEN_SOURCE
/* # undef _XOPEN_SOURCE */
#endif


/* Version number of package */
#ifndef VERSION
#define VERSION "4.4.1"
#endif

/* release date */
#ifndef VERSION_DATE
#define VERSION_DATE "Jan 2025"
#endif
 
/* once: _SINGULAR_SINGULARCONFIG_H */
#endif
