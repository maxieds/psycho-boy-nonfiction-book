# Generic Makefile for PARI programs -- amd64 running darwin (x86-64/GMP kernel) 64-bit version
#
#  This file was created by Configure. Any change made to it will be
#  lost when Configure is run.
#
# make all will create
#  extgcd (linked with libpari)
#  libextgcd.so (to be used by "install" under GP)
#
# Under GP: install("extgcd", "GG&&", "f", "./libextgcd.so") enables
# you to subsequently use f(a,b) to call extgcd(a,b)

# change this TARGET to compile your own programs
TARGET = extgcd
SHELL  = /bin/sh

DBGFLAGS   = -g -Wall
CFLAGS     = -O3 -Wall -fno-strict-aliasing
EXTRACFLAGS=
#CFLAGS    = $(DBGFLAGS)

CC         = gcc
CPPFLAGS   = -I. -I/private/var/tmp/sage-10.8-current/local/include
LD         = gcc
LDFLAGS    = -O3 -Wall -fno-strict-aliasing  -O2 -mmacosx-version-min=10.13 -mno-avx2 -mno-bmi2 -I/var/tmp/sage-10.8-current/local/include -I/var/tmp/sage-10.8-current/local/include -Wl,-search_paths_first -L/private/var/tmp/sage-10.8-current/local/lib -L/private/var/tmp/sage-10.8-current/local/lib -Wl,-platform_version,macos,10.13,10.13 -L/var/tmp/sage-10.8-current/local/lib
MODLD      = gcc
MODLDFLAGS = -bundle -undefined dynamic_lookup -L/private/var/tmp/sage-10.8-current/local/lib -lpari $(CFLAGS) $(DLCFLAGS)
EXTRAMODLDFLAGS = 
EXTRALIBS  =

RUNPTH     = 
DLCFLAGS   = -fPIC -fno-common
LIBS       =  -L/private/var/tmp/sage-10.8-current/local/lib -lpari

RM = rm -f

OBJS = $(TARGET).o
DYN = lib$(TARGET).dylib
ALL = $(TARGET) $(DYN)

all: $(ALL)

dynlib: $(DYN)

$(DYN): $(OBJS)
	$(MODLD) -o $@ $(MODLDFLAGS) $(EXTRACFLAGS) $(OBJS) $(EXTRAMODLDFLAGS)

$(TARGET): $(OBJS)
	$(LD) -o $@ $(LDFLAGS) $(EXTRACFLAGS) $< $(EXTRALIBS) $(RUNPTH) $(LIBS)

%.o: %.c
	$(CC) -c $(CFLAGS) $(EXTRACFLAGS) $(CPPFLAGS) $(DLCFLAGS) $<
clean:
	-$(RM) *.o $(ALL)
