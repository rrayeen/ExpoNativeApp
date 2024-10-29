import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="sign-in"></Stack.Screen>
        <Stack.Screen name="sign-up"></Stack.Screen>
      </Stack>
      <StatusBar backgroundColor="#161623" style="light"></StatusBar>
    </>
  );
};

export default AuthLayout;
