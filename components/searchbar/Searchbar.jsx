import { StyleSheet, Text, View, Image, TextInput } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.searchbar_container}>
      <Image
        style={styles.searchbar_star}
        source={require("../../assets/star_searchbar.png")}
      />
      <TextInput
        style={styles.searchbar}
        placeholder="How can I assist you today?"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchbar_container: {
    position: "relative",
    width: "80%",
    justifyContent: "center",
    marginTop: 15,
  },
  searchbar: {
    height: 40,
    borderRadius: 15,
    borderColor: "#000",
    borderStyle: "solid",
    borderWidth: 1,
    paddingHorizontal: 15,
    fontSize: 10,
  },
  searchbar_star: {
    width: 28,
    height: 28,
    position: "absolute",
    right: 10,
  },
});
