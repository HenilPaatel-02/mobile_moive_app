import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { SwipeToDeleteItem } from "@/components/cart/SwipeToDeleteItem";
import { clearCart } from "@/src/store/cartSlice";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { styles } from "../../styles/cartStyles";

export default function CartScreen() {
  const dispatch = useDispatch();
  const tabBarHeight = useBottomTabBarHeight();

  const cartItems = useSelector((state) =>
    Array.isArray(state.cart.items) ? state.cart.items : []
  );

  const total = cartItems.reduce((sum, item) => {
    const price = Number(item.price.replace("₹", ""));
    return sum + price * item.qty;
  }, 0);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={{ width: 26 }}>
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="arrow-left" size={26} />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Your Cart</Text>

        <View style={{ width: 26 }}>
          {cartItems.length > 0 && (
            <TouchableOpacity onPress={() => dispatch(clearCart())}>
              <Feather name="trash-2" size={22} color="red" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* CART LIST */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => `${item.id}-${item.size}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: tabBarHeight + 160 }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Your cart is empty</Text>
        }
        renderItem={({ item }) => (
          <SwipeToDeleteItem item={item} dispatch={dispatch} />
        )}
      />

      {/* CHECKOUT */}
      {cartItems.length > 0 && (
        <View style={styles.checkoutContainer}>
          <View style={styles.totalRow}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalPrice}>₹{total.toFixed(2)}</Text>
          </View>

          <TouchableOpacity style={styles.checkoutBtn}>
            <Text style={styles.checkoutText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
