import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import Tab from "../tab/Tab";
import { calendar_icon } from "../../assets/Webinar.png";
import Calendar from "./Calendar/Calendar.jsx";
import { useState, useEffect } from "react";

const Main = () => {
  const [currentView, setCurrentView] = useState("calendar");

  return (
    <View style={styles.container}>
      <View style={styles.tabs_container}>
        <TouchableOpacity
          onPress={() => {
            setCurrentView("calendar");
          }}
          style={[styles.calendar_tab, styles.tab]}
        >
          <Image
            style={[styles.tab_icon]}
            source={require("../../assets/Webinar.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCurrentView("contacts");
          }}
          style={[styles.contacts_tab, styles.tab]}
        >
          <Image
            style={[styles.tab_icon]}
            source={require("../../assets/Webinar.png")}
          />
        </TouchableOpacity>
      </View>
      {currentView === "calendar" ? (
        <View style={styles.calendar_container}>
          <Image
            style={[styles.upper_quad_c]}
            source={require("../../assets/widget-quad-upper-c.png")}
          />
          <Image
            style={[styles.lower_quad_c]}
            source={require("../../assets/widget-quad-lower-c.png")}
          />
          <Calendar />
        </View>
      ) : (
        <View style={styles.contacts_container}>
          <Text style={styles.contacts_title}>Contacts</Text>
          <Image
            style={[styles.upper_quad_c]}
            source={require("../../assets/widget-quad-upper.png")}
          />
          <Image
            style={[styles.lower_quad_c]}
            source={require("../../assets/widget-quad-lower.png")}
          />
          <View style={styles.contacts_content}>
            <Text style={styles.contactsHeaderText}>Contacts on Owambe</Text>
            <View style={styles.contacts_section}>
              <TouchableOpacity style={styles.contact}>
                <Image
                  style={styles.contactImg}
                  source={require("../../assets/profile.png")}
                />
                <Text style={styles.contactName}>Stephanie Oleku</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.contact}>
                <Image
                  style={styles.contactImg}
                  source={require("../../assets/profile.png")}
                />
                <Text style={styles.contactName}>Kwabena Aboa</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.contactsHeaderText}>Invite people</Text>
            <View style={styles.contacts_section}>
              <TouchableOpacity style={styles.syncBtn}>
                <Text style={styles.syncBtnText}>Sync Your Contacts</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
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
    left: -4,
    width: "80%",
    height: "70%",
    borderTopLeftRadius: 10,
  },
  lower_quad_c: {
    position: "absolute",
    bottom: -5,
    right: -3,
    width: "30%",
    height: "20%",
    borderBottomRightRadius: 18,
  },
  contacts_container: {
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
  contacts_title: {
    position: "absolute",
    color: "#ffffff",
    zIndex: 1,
    marginTop: 10,
    fontSize: 15,
  },
  contacts_content: {
    position: "absolute",
    top: 50,
    width: "90%",
    height: "80%",
    backgroundColor: "#ffffff",
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
  contacts_section: {
    width: "100%",
    marginTop: 10,
    display: "flex",
    alignItems: "center",
  },
  contact: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    gap: 12,
    marginBottom: 10,
  },
  contactName: {
    fontSize: 12,
    fontWeight: "500",
  },
  contactImg: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  contactsHeaderText: {
    textTransform: "uppercase",
    fontSize: 10,
    fontWeight: "200",
    color: "#7A7373",
    marginTop: 10,
    marginLeft: 10,
  },
  syncBtn: {
    width: "90%",
    height: 40,
    backgroundColor: "#FBBC05",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  syncBtnText: {
    color: "#ffffff",
    fontSize: 11,
  },
});
