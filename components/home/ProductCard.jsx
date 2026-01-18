import { addFavorite, removeFavorite } from "@/src/store/favoritesSlice";
import { styles } from "@/styles/homeStyles";
import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import React, { memo, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../Icon";

const ProductCard = memo(
  ({ item, highlightText = (text) => text, debouncedSearch = "" }) => {
    const dispatch = useDispatch();

    const [isPressed, setIsPressed] = useState(false);

    const favorites = useSelector((state) => state.favorites.items);

    const isFavorite = favorites.some((fav) => fav.id === item.id);

    // heart animation and haptic

    const scale = useSharedValue(1);
    const heartAnimationStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
    }));

    const handleFavoritePress = () => {
      //haptic feedback
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

      //heart pop animation
      scale.value = withSpring(1.05, {}, () => {
        scale.value = withSpring(1);
      });

      //redux toggle
      if (isFavorite) {
        dispatch(removeFavorite(item));
      } else {
        dispatch(addFavorite(item));
      }
    };

    return (
      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.productTouchable}
        onPress={() => router.push(`/product/${item.id}`)}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        <Animated.View
          entering={FadeIn.duration(300)}
          exiting={FadeOut.duration(200)}
          style={[
            styles.productCard,
            isPressed && { shadowOpacity: 0.18 }, // Enhanced shadow on press
          ]}
        >
          {/* Image */}
          <View style={styles.productImageWrapper}>
            <Image
              source={{ uri: item.img }}
              style={styles.productImage}
              resizeMode="cover"
            />

            {/* Favorite Icon */}
            <TouchableOpacity
              style={styles.favoriteBtn}
              onPress={handleFavoritePress}
              activeOpacity={0.8}
            >
              <Animated.View style={heartAnimationStyle}>
                <Feather
                  name="heart"
                  size={16}
                  color={isFavorite ? "#E53935" : "#fff"}
                />
              </Animated.View>
            </TouchableOpacity>

            {/* Badge */}
            <View style={styles.productQuickBadge}>
              <Text style={styles.badgeText}>
                <Icon name="fire" size={10} color="#fff" />
                {item.badge || "Popular"}
              </Text>
            </View>
          </View>

          {/* Info */}
          <View style={styles.productInfoWrapper}>
            <Text style={styles.productName} numberOfLines={2}>
              {highlightText(item.name, debouncedSearch)}
            </Text>
            <Text style={styles.productCategory}>{item.category}</Text>

            {/* Footer */}
            <View style={styles.productActionFooter}>
              <Text style={styles.productPrice}>{item.price}</Text>
              <TouchableOpacity
                style={[
                  styles.productQuickAddBtn,
                  isPressed && styles.productAddBtnActive,
                ]}
                onPress={() => router.push(`/product/${item.id}`)}
              >
                <Feather name="plus" size={16} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  }
);

ProductCard.displayName = "ProductCard";
export default ProductCard;
