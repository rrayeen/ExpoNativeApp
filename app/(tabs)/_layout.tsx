import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "@/constants/icons";
import { StatusBar } from "expo-status-bar";

const TabsLayout = () => {
  const TabIcon = ({
    icon,
    color,
    name,
    focused,
  }: {
    icon: any;
    color: any;
    name: any;
    focused: any;
  }) => {
    return (
      <View className="items-center justify-center gap-2">
        <Image
          source={icon}
          tintColor={color}
          resizeMode="contain"
          className="w-6 h-6"
        ></Image>
        <Text
          className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
          style={{ color: color }}
        >
          {name}
        </Text>
      </View>
    );
  };

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            height: 84,
            borderTopColor: "#161622",
            backgroundColor: "#232533",
            borderTopWidth: 1,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="home"
                focused={focused}
              ></TabIcon>
            ),
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                name={"Create"}
                focused={focused}
              ></TabIcon>
            ),
          }}
        ></Tabs.Screen>

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name={"Profile"}
                focused={focused}
              ></TabIcon>
            ),
          }}
        ></Tabs.Screen>
      </Tabs>
      <StatusBar style="light"></StatusBar>
    </>
  );
};

export default TabsLayout;
