if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/ttpl-apl-013/.gradle/caches/transforms-3/0443f8c6429cf3a7fc86ad5122bee572/transformed/jetified-hermes-android-0.73.5-debug/prefab/modules/libhermes/libs/android.x86_64/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/ttpl-apl-013/.gradle/caches/transforms-3/0443f8c6429cf3a7fc86ad5122bee572/transformed/jetified-hermes-android-0.73.5-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

