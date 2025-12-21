import { styles } from "@/styles/profileStyles";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { logoutThunk } from "../../src/store/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const handleReload = () => {
    setCount(0);
  };

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrease = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const smallButton = [
    { onPress: handleIncrease, title: "Increase", bgColor: "#4CAF50" },
    { onPress: handleDecrease, title: "Decrease", bgColor: "#FF9800" },
    { onPress: handleReload, title: "Reload", bgColor: "#f44336" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmVlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        }}
        style={styles.image}
      />

      <TouchableOpacity
        style={styles.mainButton}
        onPress={() =>
          Alert.alert("Button Pressed!", "You clicked the button.")
        }
      >
        <Text style={styles.mainButtonText}>Click Me</Text>
      </TouchableOpacity>

      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>Count: {count}</Text>

        <View style={styles.row}>
          {smallButton.map(({ onPress, title, bgColor }) => (
            <TouchableOpacity
              key={title}
              style={[styles.smallButton, { backgroundColor: bgColor }]}
              onPress={onPress}
            >
              <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={[styles.smallButton, { backgroundColor: "#2196F3", marginTop: 20 }]}
        onPress={async () => {
          try {
            await dispatch(logoutThunk()).unwrap();
            router.replace("/login");
          } catch (e) {
            Alert.alert("Error", e.message || e);
          }
        }}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
