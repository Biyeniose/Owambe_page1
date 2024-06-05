import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, router, Redirect } from "expo-router";
import ProfileScreen from "../../components/profile/ProfileScreen";

const profile = () => {
  return <ProfileScreen />;
};

export default profile;
