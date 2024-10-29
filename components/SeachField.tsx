import { View, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import React, { useState } from "react";
import icons from "@/constants/icons";
import { router, usePathname } from "expo-router";

const SearchField = ({ initialState }: { initialState: any }) => {
  const [query, setQuery] = useState(initialState);
  const pathname = usePathname();
  return (
    <View className="border-2  flex-row  border-black-200 w-full h-16 px-4 space-x-4 bg-black-100  rounded-2xl focus:border-secondary items-center">
      <TextInput
        className="flex-1 text-white    mt-0.5 font-pregular text-base"
        value={query}
        placeholder="Search for a title"
        placeholderTextColor={"#CDCDE0"}
        onChangeText={(e) => {
          setQuery(e);
        }}
      ></TextInput>
      <TouchableOpacity
        className=""
        onPress={() => {
          if (!query) {
            return Alert.alert(
              "Missing query",
              "Please input somrthing to search results across database"
            );
          }
          if (pathname.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <Image
          source={icons.search}
          resizeMode="contain"
          className="w-6 h-6"
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

export default SearchField;
