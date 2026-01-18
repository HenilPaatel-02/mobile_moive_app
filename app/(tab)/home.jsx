// app/(tabs)/home.jsx
import BannerSlider from "@/components/home/BannerSlider";
import CategoryTabs from "@/components/home/CategoryTabs";
import EmptyState from "@/components/home/EmptyState";
import HomeHeader from "@/components/home/HomeHeader";
import HomeTitle from "@/components/home/HomeTitle";
import ProductCard from "@/components/home/ProductCard";
import SearchBar from "@/components/home/SearchBar";
import ShimmerLoader from "@/components/home/ShimmerLoader";
import { IMAGES } from "@/constants/image";
import PRODUCTS from "@/src/data/products";
import { styles } from "@/styles/homeStyles";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

const banners = [
  {
    id: 1,
    image: IMAGES.comboBanner,
    title: "Today's Special",
    subtitle: "Flat 20% OFF",
    cta: "Order Now",
  },
  {
    id: 2,
    image: IMAGES.espressoBanner,
    title: "Cold Coffee",
    subtitle: "Buy 1 Get 1 Free",
    cta: "Grab Deal",
  },
  {
    id: 3,
    image: IMAGES.mochaBanner,
    title: "New Arrival",
    subtitle: "Caramel Latte",
    cta: "Try Now",
  },
];

const categories = [
  "All",
  "Hot Coffee",
  "Cold Coffee",
  "Black Coffee",
  "Mocha",
  "Latte",
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Simulate loading
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);

  // Filter products
  const getFilteredProducts = () => {
    let result =
      activeCategory === "All"
        ? PRODUCTS
        : PRODUCTS.filter((item) => item.category === activeCategory);

    if (debouncedSearch.trim()) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(debouncedSearch.trim().toLowerCase())
      );
    }
    return result;
  };

  const filteredProducts = getFilteredProducts();

  const highlightText = (text, highlight) => {
    if (!highlight.trim()) return text;
    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) =>
      regex.test(part) ? (
        <Text key={index} style={{ color: "#C62828", fontWeight: "bold" }}>
          {part}
        </Text>
      ) : (
        <Text key={index}>{part}</Text>
      )
    );
  };

  return (
    <ScrollView
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.contrainer}>
        <HomeHeader />
        <HomeTitle />
        <SearchBar
          search={search}
          onSearchChange={setSearch}
          onClear={() => setSearch("")}
        />
        <BannerSlider banners={banners} />
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Products */}
        {loading ? (
          <ShimmerLoader />
        ) : (
          <View style={styles.productContainer}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  highlightText={highlightText}
                  debouncedSearch={debouncedSearch}
                />
              ))
            ) : (
              <EmptyState
                debouncedSearch={debouncedSearch}
                activeCategory={activeCategory}
              />
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
}
