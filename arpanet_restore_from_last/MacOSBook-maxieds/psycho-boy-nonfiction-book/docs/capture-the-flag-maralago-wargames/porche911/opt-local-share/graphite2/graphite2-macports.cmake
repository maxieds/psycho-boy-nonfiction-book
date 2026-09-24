#----------------------------------------------------------------
# Generated CMake target import file for configuration "MacPorts".
#----------------------------------------------------------------

# Commands may need to know the format version.
set(CMAKE_IMPORT_FILE_VERSION 1)

# Import target "gr2_graphite2" for configuration "MacPorts"
set_property(TARGET gr2_graphite2 APPEND PROPERTY IMPORTED_CONFIGURATIONS MACPORTS)
set_target_properties(gr2_graphite2 PROPERTIES
  IMPORTED_LINK_INTERFACE_LIBRARIES_MACPORTS "c"
  IMPORTED_LOCATION_MACPORTS "${_IMPORT_PREFIX}/lib/libgraphite2.3.2.1.dylib"
  IMPORTED_SONAME_MACPORTS "/opt/local/lib/libgraphite2.3.dylib"
  )

list(APPEND _cmake_import_check_targets gr2_graphite2 )
list(APPEND _cmake_import_check_files_for_gr2_graphite2 "${_IMPORT_PREFIX}/lib/libgraphite2.3.2.1.dylib" )

# Commands beyond this point should not need to know the version.
set(CMAKE_IMPORT_FILE_VERSION)
