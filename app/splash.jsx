import Icon from "@/components/Icon";
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
      <Image
        source={require("@/assets/images/logo-coffee.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon
          family="MaterialCommunityIcons"
          name="coffee-maker"
          size={34}
          color="#7B3F00"
        />
        <Text style={[styles.title, { marginLeft: 6 }]}>
          Welcome to CoffeeHub
        </Text>
      </View>

      <ActivityIndicator
        size="large"
        color="#7B3F00"
        style={{ marginTop: 20 }}
      />
    </View>
  );
}
