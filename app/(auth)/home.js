import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Link, router, Redirect, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header/Header";
import Searchbar from "../../components/searchbar/Searchbar";
import Main from "../../components/main/Main";

export default function homeScreen() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <View style={styles.content_container}>
          <Header />
          <Searchbar />
          <Main />
          <Text>This is the Homepage</Text>
          <TouchableOpacity
            onPress={() => {
              router.push("/login");
            }}
          >
            <Text>Go back to login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  content_container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  top_container: {
    width: "100%",
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: 60,
  },
  chatbot_icon: {
    width: 48,
    height: 34,
  },
  logo: {
    width: 50,
    height: 50,
  },
  profile_img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  events_container: {
    marginTop: 10,
    position: "relative",
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  tabs_container: {
    position: "absolute",
    top: 70,
    left: 9,
    width: "13%",
    height: "35%",
    gap: 15,
  },
  tab: {
    width: "100%",
    flex: 1,
    borderRadius: 4,
    justifyContent: "center",
    padding: 1,
  },
  calendar_tab: {
    backgroundColor: "#980606",
  },
  contacts_tab: {
    backgroundColor: "#F29727",
  },
  tab_icon: {
    width: "60%",
    height: "40%",
  },
  calendar_container: {
    position: "relative",
    width: "78%",
    height: "90%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderRadius: 4,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    elevation: 9,
  },
  upper_quad_c: {
    position: "absolute",
    top: 0,
    left: -1,
    width: "80%",
    height: "70%",
  },
  lower_quad_c: {
    position: "absolute",
    bottom: -7,
    right: -3,
    width: "30%",
    height: "20%",
    borderBottomRightRadius: 18,
  },
});
