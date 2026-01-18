import PRODUCTS from "@/src/data/products";
import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useDispatch } from "react-redux";
import { addToCart } from "../../src/store/cartSlice";
import { styles } from "../../styles/[id]Styles";

export default function ProductDetails() {
  const { id } = useLocalSearchParams();
  const dispatch = useDispatch();

  // Example product data — replace later with API or state
  const products = PRODUCTS;

  const product = products.find((p) => p.id === Number(id));

  const [size, setSize] = useState("M");

  const handleAddToCart = () => {
    //Press Animation
    scale.value = withSpring(0.95, {}, () => {
      scale.value = withSpring(1);
    });

    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.img,
        size,
      })
    );
    router.push("/(tab)/cart");
  };

  // header highlight
  const HEADER_MAX_HEIGHT = 320;
  const HEADER_MIN_HEIGHT = 90;
  const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

  // Sticky button animations
  const slideY = useSharedValue(100);
  const scale = useSharedValue(1);

  useEffect(() => {
    slideY.value = withSpring(0, {
      damping: 40,
      stiffness: 120,
    });
  }, [slideY]);

  const stickyAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: slideY.value }, { scale: scale.value }],
  }));

  // scroll shared value
  const scrollY = useSharedValue(0);
  const scrollHandler = (event) => {
    scrollY.value = event.nativeEvent.contentOffset.y;
  };

  // collapsing header
  const headerAnimatedStyle = useAnimatedStyle(() => {
    const height = interpolate(
      scrollY.value,
      [0, HEADER_SCROLL_DISTANCE],
      [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      Extrapolation.CLAMP
    );

    return {
      height,
    };
  });

  const titleAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      [0, 1],
      Extrapolation.CLAMP
    );

    return { opacity };
  });

  // parallax animated style
  const imageAnimatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollY.value,
      [-200, 0, 200],
      [1.25, 1, 0.95],
      Extrapolation.CLAMP
    );

    const translateY = interpolate(
      scrollY.value,
      [-200, 0, 200],
      [-40, 0, 40],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ translateY }, { scale }],
    };
  });

  return (
    <>
      <View style={{ flex: 1 }}>
        <Animated.View style={[styles.headerContainer, headerAnimatedStyle]}>
          {/* back button */}
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
          >
            <Feather name="arrow-left" size={26} color="#fff" />
          </TouchableOpacity>

          {/* Collapsing title */}
          <Animated.Text
            style={[styles.headerTitle, titleAnimatedStyle]}
            numberOfLine={1}
          >
            {product.name}
          </Animated.Text>

          {/* parallax image */}
          <Animated.Image
            source={{ uri: product.img }}
            style={[styles.headerImage, imageAnimatedStyle]}
            resizeMode="cover"
          />
        </Animated.View>

        <Animated.ScrollView
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          style={styles.container}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: HEADER_MAX_HEIGHT,
            paddingBottom: 120,
          }}
        >
          {/* Info Section */}
          <View style={styles.infoWrapper}>
            <Text style={styles.name}>{product.name}</Text>

            <View style={styles.row}>
              <Text style={styles.price}>{product.price}</Text>

              <View style={styles.rating}>
                <Feather name="star" size={16} color="#ffbf00" />
                <Text style={styles.ratingText}>{product.rating}</Text>
              </View>
            </View>

            <Text style={styles.desc}>{product.desc}</Text>

            {/* Size Selection */}
            <Text style={styles.sectionTitle}>Choose Size</Text>

            <View style={styles.sizeRow}>
              {["S", "M", "L"].map((s) => (
                <TouchableOpacity
                  key={s}
                  onPress={() => setSize(s)}
                  style={[styles.sizeBox, size === s && styles.sizeBoxActive]}
                >
                  <Text
                    style={[
                      styles.sizeText,
                      size === s && styles.sizeTextActive,
                    ]}
                  >
                    {s}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Animated.ScrollView>

        {/* sticky add to cart */}
        <Animated.View style={[styles.stickyContainer, stickyAnimatedStyle]}>
          <TouchableOpacity
            activeOpacity={0.95}
            style={styles.stickyButton}
            onPress={async () => {
              //tap feedback
              await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              handleAddToCart();
            }}
          >
            <Text style={styles.stickyText}>Add to Cart</Text>
            <Text style={styles.stickyPrice}>{product.price}</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </>
  );
}
