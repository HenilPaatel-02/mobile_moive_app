// app/_layout.jsx
import { Stack } from "expo-router";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../src/store/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      {/* <AuthLoader> */}
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="splash" />
          <Stack.Screen name="login" />
          <Stack.Screen name="register" />

          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        </Stack>
      {/* </AuthLoader> */}
    </Provider>
  );
}
