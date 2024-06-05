import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";

import { router } from "expo-router";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.chatbot_icon}
        source={require("../../assets/chatbot-icon.png")}
      />
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <TouchableOpacity onPress={() => router.push("/profile")}>
        <Image
          style={[styles.profile_img, styles.img]}
          source={require("../../assets/profile.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 15,
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
});
