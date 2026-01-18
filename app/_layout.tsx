import { Stack } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "../src/store/store";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <Stack screenOptions={{ headerShown: false }}>
          {/* Auth Screens */}
          <Stack.Screen name="splash" />
          <Stack.Screen name="login" />
          <Stack.Screen name="register" />

          {/* Main Tabs */}
          <Stack.Screen name="(tab)" />

          {/* Product Details */}
          <Stack.Screen name="product/[id]" />
        </Stack>
      </Provider>
    </GestureHandlerRootView>
  );
}
