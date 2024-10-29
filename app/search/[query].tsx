import { View, Text, FlatList, Image, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import SearchField from "@/components/SeachField";
import Trending from "@/components/Trending";
import EmptyState from "@/components/EmptyState";
import { getFiltredPosts } from "@/lib/appwriter";
import useAppWrite from "@/lib/useAppWrite";
import VideoCard from "@/components/VideoCard";
import { useLocalSearchParams } from "expo-router";

const Home = () => {
  const { query } = useLocalSearchParams();
  const { data: filtredPost, refreshing: refresh } = useAppWrite(() =>
    getFiltredPosts({ query })
  );

  useEffect(() => {
    refresh();
  }, [query]);

  return (
    <SafeAreaView className="bg-primary flex-1">
      <FlatList
        data={filtredPost ?? []}
        keyExtractor={(item: any) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={
          <View className=" my-6 px-4 space-y-6">
            <View className=" justify-between items-start flex-row mb-6">
              <View>
                <Text className=" font-pmedium text-sm text-gray-100">
                  Search results
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  {query}
                </Text>
              </View>
            </View>
            <SearchField initialState={query}></SearchField>
          </View>
        }
        ListEmptyComponent={() => (
          <EmptyState title="No videos found" subtitle="No video found" />
        )}
      ></FlatList>
    </SafeAreaView>
  );
};

export default Home;
