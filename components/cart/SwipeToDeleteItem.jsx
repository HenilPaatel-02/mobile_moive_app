import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  FadeOutLeft,
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { addToCart, decreaseQty, removeFromCart } from "@/src/store/cartSlice";
import { Feather } from "@expo/vector-icons";
import { styles } from "../../styles/cartStyles";

export function SwipeToDeleteItem({ item, dispatch }) {
  const translateX = useSharedValue(0);

  const onDelete = () => {
    dispatch(removeFromCart(item));
  };

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      if (e.translationX < 0) {
        translateX.value = e.translationX;
      }
    })
    .onEnd(() => {
      if (translateX.value < -120) {
        translateX.value = withSpring(-400);
        runOnJS(onDelete)();
      } else {
        translateX.value = withSpring(0);
      }
    });

  // ONLY swipe animation here
  const swipeStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  // delete Animated
  const deleteBgStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        translateX.value,
        [-300, -150, 0], // swipe distances
        ["#B71C1C", "#E53935", "#F44336"] // dark → normal → light
      ),
    };
  });

  const trashIconStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        translateX.value,
        [-140, -60], // start → fully visible
        [1, 0],
        "clamp"
      ),
      transform: [
        {
          scale: interpolate(translateX.value, [-140, -60], [1, 0.8], "clamp"),
        },
      ],
    };
  });

  return (
    <View style={{ marginBottom: 12 }}>
      {/* Background */}
      <Animated.View style={[styles.deleteBg, deleteBgStyle]}>
        <Animated.View style={trashIconStyle}>
          <Feather name="trash-2" size={22} color="#fff" />
        </Animated.View>
      </Animated.View>

      {/* OUTER = layout animation */}
      <Animated.View exiting={FadeOutLeft}>
        {/* INNER = swipe animation */}
        <GestureDetector gesture={panGesture}>
          <Animated.View style={[styles.cartItem, swipeStyle]}>
            <Image source={{ uri: item.img }} style={styles.cartImage} />

            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.cartName}>{item.name}</Text>
              <Text style={styles.cartSize}>Size: {item.size}</Text>
              <Text style={styles.cartPrice}>{item.price}</Text>
            </View>

            <View style={styles.qtyBox}>
              <TouchableOpacity
                onPress={() =>
                  item.qty === 1
                    ? dispatch(removeFromCart(item))
                    : dispatch(decreaseQty(item))
                }
              >
                <Text style={styles.qtyBtn}>−</Text>
              </TouchableOpacity>

              <Text style={styles.qtyText}>{item.qty}</Text>

              <TouchableOpacity onPress={() => dispatch(addToCart(item))}>
                <Text style={styles.qtyBtn}>+</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </GestureDetector>
      </Animated.View>
    </View>
  );
}
