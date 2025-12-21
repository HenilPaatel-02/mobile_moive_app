import { logoutUser } from "@/utils/auth";
import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { logoutThunk } from "../../src/store/authSlice";

export default function Logout() {
  const dispatch = useDispatch();
  useEffect(() => {
    const logout = async () => {
      await logoutUser();
      await dispatch(logoutThunk());
      router.replace("/login");
    };
    logout();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#6F4E37" />
      <Text style={styles.text}>Logging out...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF8E7",
  },
  text: {
    marginTop: 15,
    fontSize: 18,
    color: "#6F4E37",
    fontWeight: "600",
  },
});
