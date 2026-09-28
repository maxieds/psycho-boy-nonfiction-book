#ifndef _LIBPOLYS_LIBPOLYSCONFIG_H
#define _LIBPOLYS_LIBPOLYSCONFIG_H 1
 
/* libpolysconfig.h. Generated automatically at end of configure. */
 
/* _config.h.  Generated from _config.h.in by configure.  */
/* _config.h.in.  Generated from configure.ac by autoheader.  */

/* DISABLE_GMP_CPP */
#ifndef DISABLE_GMP_CPP
#define DISABLE_GMP_CPP 1
#endif

/* GMP_CPPFLAGS */
#ifndef GMP_CPPFLAGS
#define GMP_CPPFLAGS ""
#endif

/* GMP_LIBS */
#ifndef GMP_LIBS
#define GMP_LIBS "-lgmp"
#endif

/* enable dynamic modules */
#ifndef HAVE_DL
#define HAVE_DL 1
#endif

/* Define to 1 if you have the <dlfcn.h> header file. */
#ifndef HAVE_DLFCN_H
#define HAVE_DLFCN_H 1
#endif

/* Define to 1 if you don't have 'vprintf' but do have '_doprnt.' */
/* #undef HAVE_DOPRNT */

/* enable dynamic modules */
#ifndef HAVE_DYNAMIC_LOADING
#define HAVE_DYNAMIC_LOADING 1
#endif

/* enable dynamic p-procs */
#ifndef HAVE_DYNAMIC_PPROCS
#define HAVE_DYNAMIC_PPROCS 1
#endif

/* Define to 1 if you have the <execinfo.h> header file. */
#ifndef HAVE_EXECINFO_H
#define HAVE_EXECINFO_H 1
#endif

/* Define to 1 if you have the <factory/factory.h> header file. */
/* #undef HAVE_FACTORY_FACTORY_H */

/* Define if FLINT is installed */
#ifndef HAVE_FLINT
#define HAVE_FLINT 1
#endif

/* Define to 1 if you have the <float.h> header file. */
#ifndef HAVE_FLOAT_H
#define HAVE_FLOAT_H 1
#endif

/* define if the compiler supports GCC C++ ABI name demangling */
/* #undef HAVE_GCC_ABI_DEMANGLE */

/* use branch for addition in Z/p otherwise it uses a generic add */
#ifndef HAVE_GENERIC_ADD
#define HAVE_GENERIC_ADD 1
#endif

/* multiplication is fast on the cpu: a*b is with mod otherwise using tables
   of logartihms */
/* #undef HAVE_GENERIC_MULT */

/* Define to 1 if you have the <inttypes.h> header file. */
#ifndef HAVE_INTTYPES_H
#define HAVE_INTTYPES_H 1
#endif

/* division via a table of logarithms */
/* #undef HAVE_INVTABLE */

/* Define if julia is installed */
/* #undef HAVE_JULIA */

/* Define to 1 if you have the <limits.h> header file. */
#ifndef HAVE_LIMITS_H
#define HAVE_LIMITS_H 1
#endif

/* Define to 1 if you have the 'memmove' function. */
#ifndef HAVE_MEMMOVE
#define HAVE_MEMMOVE 1
#endif

/* Define to 1 if you have the 'memset' function. */
#ifndef HAVE_MEMSET
#define HAVE_MEMSET 1
#endif

/* Define if NTL is installed */
#ifndef HAVE_NTL
#define HAVE_NTL 1
#endif

/* define if build with OMALLOC */
#ifndef HAVE_OMALLOC
#define HAVE_OMALLOC 1
#endif

/* Define to 1 if you have the <omalloc/omalloc.h> header file. */
/* #undef HAVE_OMALLOC_OMALLOC_H */

/* Enable non-commutative subsystem */
#ifndef HAVE_PLURAL
#define HAVE_PLURAL 1
#endif

/* Define to 1 if you have the 'pow' function. */
#ifndef HAVE_POW
#define HAVE_POW 1
#endif

/* Define to 1 if you have the 'putenv' function. */
#ifndef HAVE_PUTENV
#define HAVE_PUTENV 1
#endif

/* Define to 1 if you have the <pwd.h> header file. */
#ifndef HAVE_PWD_H
#define HAVE_PWD_H 1
#endif

/* Enable RatGB support */
/* #undef HAVE_RATGRING */

/* Enable arithmetical rings */
#ifndef HAVE_RINGS
#define HAVE_RINGS 1
#endif

/* Define to 1 if you have the 'setenv' function. */
#ifndef HAVE_SETENV
#define HAVE_SETENV 1
#endif

/* Enable letterplace */
#ifndef HAVE_SHIFTBBA
#define HAVE_SHIFTBBA 1
#endif

/* Define to 1 if you have the 'sqrt' function. */
#ifndef HAVE_SQRT
#define HAVE_SQRT 1
#endif

/* Define to 1 if stdbool.h conforms to C99. */
#ifndef HAVE_STDBOOL_H
#define HAVE_STDBOOL_H 1
#endif

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

/* Define to 1 if you have the 'strchr' function. */
#ifndef HAVE_STRCHR
#define HAVE_STRCHR 1
#endif

/* Define to 1 if you have the <strings.h> header file. */
#ifndef HAVE_STRINGS_H
#define HAVE_STRINGS_H 1
#endif

/* Define to 1 if you have the <string.h> header file. */
#ifndef HAVE_STRING_H
#define HAVE_STRING_H 1
#endif

/* Define to 1 if you have the <sys/param.h> header file. */
#ifndef HAVE_SYS_PARAM_H
#define HAVE_SYS_PARAM_H 1
#endif

/* Define to 1 if you have the <sys/stat.h> header file. */
#ifndef HAVE_SYS_STAT_H
#define HAVE_SYS_STAT_H 1
#endif

/* Define to 1 if you have the <sys/types.h> header file. */
#ifndef HAVE_SYS_TYPES_H
#define HAVE_SYS_TYPES_H 1
#endif

/* Define to 1 if you have the <unistd.h> header file. */
#ifndef HAVE_UNISTD_H
#define HAVE_UNISTD_H 1
#endif

/* Define to 1 if you have the 'vprintf' function. */
#ifndef HAVE_VPRINTF
#define HAVE_VPRINTF 1
#endif

/* Define if vsnprintf exists. */
#ifndef HAVE_VSNPRINTF
#define HAVE_VSNPRINTF 1
#endif

/* Define to 1 if the system has the type '_Bool'. */
#ifndef HAVE__BOOL
#define HAVE__BOOL 1
#endif

/* Define to the sub-directory where libtool stores uninstalled libraries. */
#ifndef LT_OBJDIR
#define LT_OBJDIR ".libs/"
#endif

/* DISABLE_GMP_CPP */
#ifndef NOSTREAMIO
#define NOSTREAMIO 1
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
#define PACKAGE "libpolys"
#endif

/* Define to the address where bug reports for this package should be sent. */
#ifndef PACKAGE_BUGREPORT
#define PACKAGE_BUGREPORT ""
#endif

/* Define to the full name of this package. */
#ifndef PACKAGE_NAME
#define PACKAGE_NAME "libpolys"
#endif

/* Define to the full name and version of this package. */
#ifndef PACKAGE_STRING
#define PACKAGE_STRING "libpolys 4.4.1"
#endif

/* Define to the one symbol short name of this package. */
#ifndef PACKAGE_TARNAME
#define PACKAGE_TARNAME "libpolys"
#endif

/* Define to the home page for this package. */
#ifndef PACKAGE_URL
#define PACKAGE_URL ""
#endif

/* Define to the version of this package. */
#ifndef PACKAGE_VERSION
#define PACKAGE_VERSION "4.4.1"
#endif

/* SINGULAR */
#ifndef SINGULAR
#define SINGULAR 1
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

/* Version number of package */
#ifndef VERSION
#define VERSION "4.4.1"
#endif

/* Define to empty if 'const' does not conform to ANSI C. */
/* #undef const */

/* Define to '__inline__' or '__inline' if that's what the C compiler
   calls it, or to nothing if 'inline' is not supported under any name.  */
#ifndef __cplusplus
/* #undef inline */
#endif

/* Define as 'unsigned int' if <stddef.h> doesn't define. */
/* #undef size_t */
 
/* once: _LIBPOLYS_LIBPOLYSCONFIG_H */
#endif
