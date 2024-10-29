import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "@/components/EmptyState";
import useAppWrite from "@/lib/useAppWrite";
import VideoCard from "@/components/VideoCard";
import { useGlobalContext } from "@/context/GlobalProvider";
import { getUserPosts, logout } from "@/lib/appwriter";
import { icons } from "@/constants";
import { router } from "expo-router";

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const username = user[0].username;
  const userId = user[0].$id;
  const { data: posts, refreshing: refresh } = useAppWrite(() =>
    getUserPosts({ userId })
  );
  const logOut = async () => {
    await logout();
    setIsLoggedIn(false);
    router.replace("/sign-in");
  };

  return (
    <SafeAreaView className="bg-primary flex-1">
      <FlatList
        data={posts ?? []}
        keyExtractor={(item: any) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={
          <View className=" my-6 relative px-4 space-y-6">
            <TouchableOpacity
              onPress={logOut}
              activeOpacity={0.7}
              className="absolutes w-[24px] h-[24px] self-end"
            >
              <Image
                source={icons.logout}
                resizeMode="contain"
                className="w-full h-full"
              ></Image>
            </TouchableOpacity>
            <View className=" w-full  items-center justify-center">
              <View className="w-[92px] h-[88px]  items-center justify-between">
                <View className="w-[56px] h-[56px] items-center justify-center rounded-[8px] border-2 border-secondary">
                  <Image
                    source={{ uri: user[0].avatar }}
                    className="h-[90%] w-[90%] rounded-lg"
                    resizeMode="contain"
                  ></Image>
                </View>
                <Text className="font-pmedium text-white  text-lg">
                  {username}
                </Text>
              </View>
              <View className="flex-row gap-[30px] py-5 ">
                <View className=" items-center justify-center">
                  <Text className="text-white text-xl font-psemibold">
                    {posts?.length || []}
                  </Text>
                  <Text className="text-gray-100 font-pmedium">Posts</Text>
                </View>
                <View className=" items-center justify-center">
                  <Text className="text-white text-xl font-psemibold">12k</Text>
                  <Text className="text-gray-100 font-pmedium">Views</Text>
                </View>
              </View>
            </View>
          </View>
        }
        ListEmptyComponent={() => (
          <EmptyState title="No videos found" subtitle="No video found" />
        )}
      ></FlatList>
    </SafeAreaView>
  );
};

export default Profile;
