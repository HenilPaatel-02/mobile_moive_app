import Icon from "@/components/Icon";
import { logoutUser } from "@/utils/auth";
import { router } from "expo-router";
import React from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/settingStyles";

export default function Settings() {
  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        onPress: async () => {
          await logoutUser();
          router.replace("/login");
        },
      },
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.card}>
        <Icon name="account-circle-outline" size={30} color="#7B3F00" />
        <Text style={styles.cardText}>Profile Settings</Text>
      </View>

      <View style={styles.card}>
        <Icon name="bell-outline" size={30} color="#7B3F00" />
        <Text style={styles.cardText}>Notifications</Text>
      </View>

      <View style={styles.card}>
        <Icon name="palette-outline" size={30} color="#7B3F00" />
        <Text style={styles.cardText}>Theme & Appearance</Text>
      </View>

      <View style={styles.card}>
        <Icon name="shield-lock-outline" size={30} color="#7B3F00" />
        <Text style={styles.cardText}>Privacy & Security</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Icon name="logout" size={26} color="#fff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
