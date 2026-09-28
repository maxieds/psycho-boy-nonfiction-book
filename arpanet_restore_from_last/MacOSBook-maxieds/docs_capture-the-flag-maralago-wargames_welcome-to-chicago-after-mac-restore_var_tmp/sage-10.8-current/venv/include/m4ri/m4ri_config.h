#ifndef M4RI_M4RI_CONFIG_H
#define M4RI_M4RI_CONFIG_H

// Defines determined during configuration of m4ri.
#define __M4RI_HAVE_MM_MALLOC		1
#define __M4RI_HAVE_POSIX_MEMALIGN	1
#define __M4RI_HAVE_SSE2		0
#define __M4RI_HAVE_OPENMP		0
#define __M4RI_CPU_L1_CACHE		32768
#define __M4RI_CPU_L2_CACHE		0
#define __M4RI_CPU_L3_CACHE		0
#define __M4RI_DEBUG_DUMP		(0 || 0)
#define __M4RI_DEBUG_MZD		0
#define __M4RI_HAVE_LIBPNG              1

#define __M4RI_CC                       "gcc"
#define __M4RI_CFLAGS                   " -O2 -mmacosx-version-min=10.13 -mno-avx2 -mno-bmi2 -I/var/tmp/sage-10.8-current/local/include -I/private/var/tmp/sage-10.8-current/local/include -g -fPIC -Wall -pedantic"
#define __M4RI_OPENMP_CFLAGS            ""

// Helper macros.
#define __M4RI_USE_MM_MALLOC		(__M4RI_HAVE_MM_MALLOC && __M4RI_HAVE_SSE2)
#define __M4RI_USE_POSIX_MEMALIGN	(__M4RI_HAVE_POSIX_MEMALIGN && __M4RI_HAVE_SSE2)
#define __M4RI_DD_QUIET			(0 && !0)

#define __M4RI_ENABLE_MZD_CACHE         1
#define __M4RI_ENABLE_MMC               1

#endif // M4RI_M4RI_CONFIG_H
