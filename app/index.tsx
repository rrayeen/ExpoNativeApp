import { router, Redirect } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import CustomButton from "@/components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { useGlobalContext } from "@/context/GlobalProvider";

export default function Index() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && isLoggedIn) return <Redirect href={"/home"}></Redirect>;
  return (
    <SafeAreaView className="bg-primary  h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full  h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-4">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilies with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -right-8 -bottom-2"
              resizeMode="contain"
            ></Image>
          </View>
          <Text className=" mt-7 text-center text-sm font-pregular text-gray-100">
            Where creativity meets inovation: embark on a journey of limitless
            exploration with Aora
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => {
              router.push("/sign-up");
            }}
            containerStyle="w-full mt-5"
            textStyle=""
            isLoading={false}
          ></CustomButton>
        </View>
        <StatusBar style="light" backgroundColor="#161623"></StatusBar>
      </ScrollView>
    </SafeAreaView>
  );
}
