import { View, Text } from "react-native";
import { Link, router, Redirect, Stack } from "expo-router";
import { useState } from "react";

export default function Page() {
  //check authentication

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Redirect href={"/login"} />
    </>
  );
}
