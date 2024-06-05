import { StyleSheet, Text, View, Image } from "react-native";

let color;

const Tab = ({ iconUrl, col }) => {
  color = col;
  return (
    <View style={[styles.calendar_tab, styles.tab]}>
      <Image
        style={[styles.tab_icon]}
        source={require("../../assets/Webinar.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    width: "100%",
    flex: 1,
    borderRadius: 4,
    justifyContent: "center",
    padding: 1,
    color: "#980606",
  },
  tab_icon: {
    width: 50,
    height: 50,
  },
});

export default Tab;
