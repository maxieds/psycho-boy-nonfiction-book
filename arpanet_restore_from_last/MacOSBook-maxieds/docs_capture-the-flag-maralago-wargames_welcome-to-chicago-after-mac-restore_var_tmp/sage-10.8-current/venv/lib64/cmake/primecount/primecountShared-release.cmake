#----------------------------------------------------------------
# Generated CMake target import file for configuration "Release".
#----------------------------------------------------------------

# Commands may need to know the format version.
set(CMAKE_IMPORT_FILE_VERSION 1)

# Import target "primecount::libprimecount" for configuration "Release"
set_property(TARGET primecount::libprimecount APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(primecount::libprimecount PROPERTIES
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/libprimecount.7.18.dylib"
  IMPORTED_SONAME_RELEASE "@rpath/libprimecount.7.dylib"
  )

list(APPEND _cmake_import_check_targets primecount::libprimecount )
list(APPEND _cmake_import_check_files_for_primecount::libprimecount "${_IMPORT_PREFIX}/lib/libprimecount.7.18.dylib" )

# Commands beyond this point should not need to know the version.
set(CMAKE_IMPORT_FILE_VERSION)
