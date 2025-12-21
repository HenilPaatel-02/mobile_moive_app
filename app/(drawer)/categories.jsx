import Icon from "@/components/Icon";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "../../src/components/CategoryCard";
import {
  addToCart,
  clearCart,
  removeFromCart,
} from "../../src/store/cartSlice";
import { loadCategoriesThunk } from "../../src/store/categoriesSlice";
import { styles } from "../../styles/categoriesStyles";

const BANNERS = [
  {
    id: "1",
    title: "20% OFF on Espresso",
    subtitle: "Today only - grab your favorite shot!",
    image: require("../../assets/banners/espresso_banner.png"),
  },
  {
    id: "2",
    title: "Combo Offer",
    subtitle: "Latte + Muffin only $5.99!",
    image: require("../../assets/banners/combo_banner.png"),
  },
  {
    id: "3",
    title: "New Arrivals",
    subtitle: "Try our Mocha Special",
    image: require("../../assets/banners/mocha_banner.png"),
  },
];

const Categories = () => {
  const dispatch = useDispatch();
  const { categories, loading: categoriesLoading } = useSelector(
    (s) => s.categories
  );
  const { items: cartItems, totalCount } = useSelector((s) => s.cart);

  useEffect(() => {
    if (!categories || categories.length === 0) dispatch(loadCategoriesThunk());
  }, [dispatch, categories]);

  const add = (item) => dispatch(addToCart({ id: item.id }));
  const remove = (item) => dispatch(removeFromCart({ id: item.id }));
  const { width } = useWindowDimensions();
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [search, setSearch] = useState("");
  const filteredCategories = (categories || []).filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  const totalPrice = useMemo(() => {
    if (!categories) return 0;

    return categories.reduce((sum, item) => {
      const qty = cartItems[item.id] || 0;
      const price = parseFloat(item.price);
      return sum + qty * (isNaN(price) ? 0 : price);
    }, 0);
  }, [categories, cartItems]);

  // Auto-slide effect
  useEffect(() => {
    if (!scrollRef.current) return;

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % BANNERS.length;

      scrollRef.current.scrollTo({
        x: nextIndex * (width - 30), // same width as banner
        animated: true,
      });

      setCurrentIndex(nextIndex);
    }, 3000); // every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, [currentIndex, width]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coffee Categories</Text>

      {/* 🔹 Search bar */}
      <View style={styles.searchWrapper}>
        <Icon name="magnify" size={22} color="#7B3F00" />
        <TextInput
          placeholder="Search your coffee..."
          placeholderTextColor="#8B6E5C"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>

      {/* 🔹 Banner slider at the top */}
      <View>
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.bannerScroll}
          onMomentumScrollEnd={(e) => {
            // update currentIndex when user swipes manually
            const offsetX = e.nativeEvent.contentOffset.x;
            const newIndex = Math.round(offsetX / (width - 40));
            setCurrentIndex(newIndex);
          }}
        >
          {BANNERS.map((banner, index) => (
            <View
              key={banner.id}
              style={[styles.bannerItem, { width: width - 40 }]} // responsive width
            >
              <ImageBackground
                source={banner.image}
                style={styles.bannerImage}
                imageStyle={styles.bannerImageRadius}
              >
                <View style={styles.bannerOverlay} />
                <View style={styles.bannerContent}>
                  <Text style={styles.bannerTitle}>{banner.title}</Text>
                  <Text style={styles.bannerSubtitle}>{banner.subtitle}</Text>
                </View>
              </ImageBackground>
            </View>
          ))}
        </ScrollView>

        {/* 🔹 Dots indicator */}
        <View style={styles.dotsContainer}>
          {BANNERS.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, index === currentIndex && styles.dotActive]}
            />
          ))}
        </View>
      </View>

      {categoriesLoading ? (
        <View
          style={[
            styles.container,
            { justifyContent: "center", alignItems: "center" },
          ]}
        >
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={filteredCategories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const quantity = cartItems[item.id] || 0;

            return (
              <CategoryCard
                item={item}
                quantity={quantity}
                onAdd={() => add(item)}
                onRemove={() => remove(item)}
              />
            );
          }}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>
                No coffee found. Try a different name
                <Icon name="emoticon-sad-outline" size={18} color="#7B3F00" />
              </Text>
            </View>
          }
        />
      )}

      <View style={styles.cartSection}>
        <View>
          <Text style={styles.cartText}>
            <Icon name="cart-outline" size={18} color="#7B3F00" /> Items in
            Cart: {totalCount}
          </Text>
          <Text style={styles.cartSubText}>
            Total: Rs{totalPrice.toFixed(2)}
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.button, { marginLeft: 12 }]}
          onPress={() => dispatch(clearCart())}
          disabled={totalCount === 0}
        >
          <Text style={styles.buttonText}>Clear Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Categories;
