import { theme } from "@/styles/theme";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: "#fff",
        drawerActiveBackgroundColor: theme.colors.coffeeBrownColor,
        drawerInactiveTintColor: "#aaa",
        drawerLabelStyle: { fontSize: 15 },
        drawerStyle: { backgroundColor: "#2C2C2C", width: 240 },
        headerStyle: { backgroundColor: theme.colors.coffeeBrownColor },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
      }}
    >
      <Drawer.Screen name="home" options={{ title: "Home" }} />
      <Drawer.Screen name="contact" options={{ title: "Contact Us" }} />
      <Drawer.Screen name="profile" options={{ title: "Profile" }} />
      <Drawer.Screen name="products" options={{ title: "Products" }} />
      <Drawer.Screen name="categories" options={{ title: "Categories" }} />
      <Drawer.Screen
        name="sectionListScreen"
        options={{ title: "Section List" }}
      />
      <Drawer.Screen name="settings" options={{ title: "Settings" }} />
      {/* 🔥 Logout entry */}
      <Drawer.Screen
        name="logout"
        options={{
          title: "Logout",
          drawerLabelStyle: {
            color: "#FF6B6B",
            fontWeight: "bold",
          },
        }}
        // listeners={{
        //   focus: handleLogout,
        // }}
      />
    </Drawer>
  );
}
