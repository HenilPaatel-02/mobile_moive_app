import { getUserSession } from "@/utils/auth";
import { APP_CONSTANTS } from "@/utils/constants";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
import { styles } from "../styles/splashStyles";

export default function Splash() {
  useEffect(() => {
    const checkSession = async () => {
      try {
        const user = await getUserSession();
        setTimeout(() => {
          if (user) {
            router.replace(APP_CONSTANTS.ROUTES.HOME);
          } else {
            router.replace(APP_CONSTANTS.ROUTES.LOGIN);
          }
        }, 3000); // 3-second splash
      } catch (error) {
        console.error("Error checking session:", error);
        router.replace(APP_CONSTANTS.ROUTES.LOGIN);
      }
    };

    checkSession();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color="#7B3F00"
        style={{ marginBottom: 30 }}
      />
      <Image
        source={require("@/assets/images/logo-coffee.svg")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.title, { marginLeft: 6 }]}>
          Discover CoffeeHub
        </Text>
      </View>
    </View>
  );
}
