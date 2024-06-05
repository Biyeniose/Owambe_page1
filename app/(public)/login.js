import { View, Text, TouchableOpacity } from "react-native";
import { Stack, router, Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const loginScreen = () => {
  //login logic
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View>
        <Text>This is the login screen</Text>
        <TouchableOpacity
          onPress={() => {
            router.push("/home");
          }}
        >
          <Text>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default loginScreen;
