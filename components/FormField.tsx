import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import icons from "@/constants/icons";

const FormField = ({
  title,
  value,
  handleChangeText,
  OtherStyles,
  keyboardType,
  placeholder,
}: {
  title: string;
  value: string;
  handleChangeText: any;
  OtherStyles: string;
  keyboardType: string;
  placeholder: string;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${OtherStyles}`}>
      <Text className={`text-base text-gray-100 font-pmedium`}>{title}</Text>
      <View className="border-2  flex-row  border-black-200 w-full h-16 px-4 bg-black-100  rounded-2xl focus:border-secondary items-center">
        <TextInput
          className="flex-1 text-white    w-full px-4 font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#7b7b8b"}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        ></TextInput>
        {title === "Password" && (
          <TouchableOpacity
            className=""
            onPress={() => setShowPassword((p) => !p)}
          >
            <Image
              source={showPassword === true ? icons.eye : icons.eyeHide}
              resizeMode="contain"
              className="w-6 h-6"
            ></Image>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
