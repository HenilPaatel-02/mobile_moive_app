// src/components/home/HomeHeader.jsx
import { styles } from "@/styles/homeStyles";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

const HomeHeader = () => {
  const cartItem = useSelector((state) =>
    Array.isArray(state.cart.items) ? state.cart.items : []
  );
  const cartCount = cartItem.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.cartIconWrapper}
          onPress={() => router.push("/(tab)/cart")}
        >
          <Feather name="shopping-cart" size={20} color="#8D6E63" />
          {cartCount > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cartCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </>
  );
};

export default memo(HomeHeader);
