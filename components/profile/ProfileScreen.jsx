import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Switch,
  StyleSheet,
  Modal,
  Button,
  ScrollView,
} from "react-native";
import { Stack, router, Redirect } from "expo-router";

import Icon from "react-native-vector-icons/FontAwesome";
import style from "./styles";

const ProfileScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");
  const [birthday, setBirthday] = useState("2001-10-11");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reNewPassword, setReNewPassword] = useState("");

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const toggleConfirmModal = () => {
    setIsConfirmModalVisible(!isConfirmModalVisible);
  };

  const toggleUpdateModal = () => {
    setIsUpdateModalVisible(!isUpdateModalVisible);
  };

  const handleSavePassword = () => {
    // Ensure new passwords match
    if (newPassword !== reNewPassword) {
      alert("New passwords do not match.");
      return;
    }

    toggleConfirmModal();
    setIsModalVisible(false);
  };

  const confirmPasswordChange = () => {
    // Handle password change logic here
    console.log("Old Password:", oldPassword);
    console.log("New Password:", newPassword);
    toggleConfirmModal();
    // Clear password fields after change
    setOldPassword("");
    setNewPassword("");
    setReNewPassword("");
  };

  const handleUpdateDetails = () => {
    toggleUpdateModal();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity style={styles.profileBox}>
          <Image
            style={styles.profileImage}
            source={{ uri: "https://via.placeholder.com/150" }} // replace with your image URL
          />
          <Text style={styles.profileName}>Biyeniose Onyeagwu</Text>
          <Text style={styles.profileBirthday}>Oct 11, 2001</Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ACCOUNT DETAILS</Text>
          <View style={styles.infoContainer}>
            <Icon
              name="envelope"
              size={20}
              color="#FF8C00"
              style={styles.icon}
            />
            <Text style={styles.infoText}>red.cat@example.com</Text>
          </View>
          <View style={styles.infoContainer}>
            <Icon name="phone" size={20} color="#FF8C00" style={styles.icon} />
            <TextInput
              style={styles.input}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="Phone Number"
            />
          </View>

          <View style={styles.infoContainer}>
            <Icon
              name="birthday-cake"
              size={20}
              color="#FF8C00"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              value={birthday}
              onChangeText={setBirthday}
              placeholder="Birthday"
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleUpdateDetails}>
            <Text style={styles.buttonText}>Update Details</Text>
          </TouchableOpacity>
          <Text style={styles.sectionTitle}>PASSWORDS</Text>
          <TouchableOpacity
            style={styles.changePasswordContainer}
            onPress={toggleModal}
          >
            <Icon name="lock" size={20} color="#FF8C00" style={styles.icon} />
            <Text style={styles.changePasswordText}>Change Password</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>NOTIFICATION SETTINGS</Text>
          <View style={styles.switchContainer}>
            <Icon name="bell" size={20} color="#FF8C00" style={styles.icon} />
            <Text style={styles.switchLabel}>Push Notifications</Text>
            <Switch
              value={isNotificationsEnabled}
              onValueChange={setIsNotificationsEnabled}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>GENERAL</Text>
          <TouchableOpacity style={styles.contactUsContainer}>
            <Icon
              name="envelope"
              size={20}
              color="#FF8C00"
              style={styles.icon}
            />
            <Text style={styles.generalLink}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.logoutLink}>Log Out</Text>
          </TouchableOpacity>
        </View>

        <Modal
          visible={isModalVisible}
          transparent={true}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Change Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                placeholder="Enter old password"
                value={oldPassword}
                onChangeText={setOldPassword}
              />
              <TextInput
                style={styles.input}
                secureTextEntry
                placeholder="Enter new password"
                value={newPassword}
                onChangeText={setNewPassword}
              />
              <TextInput
                style={styles.input}
                secureTextEntry
                placeholder="Re-enter new password"
                value={reNewPassword}
                onChangeText={setReNewPassword}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={handleSavePassword}
              >
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={toggleModal}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal
          visible={isConfirmModalVisible}
          transparent={true}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Change Password</Text>
              <Text style={styles.modalText}>
                Are you sure you want to change your password?
              </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={confirmPasswordChange}
              >
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={toggleConfirmModal}
              >
                <Text style={styles.buttonText}>No, Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal
          visible={isUpdateModalVisible}
          transparent={true}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Success</Text>
              <Text style={styles.modalText}>
                Account Details Successfully Updated
              </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={toggleUpdateModal}
              >
                <Text style={styles.buttonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create(style);
export default ProfileScreen;
