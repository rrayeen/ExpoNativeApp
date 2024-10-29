import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { getCurrentUser, loginUser } from "@/lib/appwriter";
import { useGlobalContext } from "@/context/GlobalProvider";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "rayen@gmail.com",
    password: "123456789",
  });
  const [submitting, setIsSubmitting] = useState(false);
  const { setUser, setIsLoggedIn, user, isLoggedIn } = useGlobalContext();

  const formSubmit = async function () {
    if (!form.email || !form.password)
      Alert.alert("Error", "Please fill in all the fields");
    setIsSubmitting(true);
    try {
      await loginUser(form);
      const result = await getCurrentUser();
      setUser(result);
      setIsLoggedIn(true);

      //

      Alert.alert("Success", "User signed in successfuly");
      router.replace("/home");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 py-6">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode="contain"
          ></Image>
          <Text className="text-2xl text-white font-psemibold mt-10">
            Sign in
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            OtherStyles="mt-7"
            keyboardType="email-address"
            placeholder="Email"
          ></FormField>
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: any) => setForm({ ...form, password: e })}
            OtherStyles="mt-7"
            keyboardType=""
            placeholder="Password"
          ></FormField>
          <CustomButton
            title="Sign in"
            textStyle=""
            containerStyle="mt-7"
            isLoading={submitting}
            handlePress={formSubmit}
          ></CustomButton>
          <View className="flex-row gap-2 pt-5 justify-center">
            <Text className="text-gray-100 text-lg font-pregular">
              Don't have an account?
            </Text>
            <Link
              href={"/sign-up"}
              className="text-secondary font-psemibold text-lg"
            >
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
