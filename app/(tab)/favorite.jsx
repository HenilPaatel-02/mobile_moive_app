import HomeHeader from "@/components/home/HomeHeader";
import ProductCard from "@/components/home/ProductCard";
import { COLORS } from "@/constants/colors";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "../../styles/favoriteStyles";

const Favorite = () => {
  const favorites = useSelector((state) => state.favorites.items);

  return (
    <View style={styles.contrainer}>
      <HomeHeader />
      {favorites.length === 0 ? (
        <View style={styles.emptyState}>
          <Feather name="heart" size={64} color={COLORS.textMuted} />
          <Text style={styles.emptyTitle}>No Favorites Yet</Text>
          <Text style={styles.emptySubtitle}>
            Tap the heart icon on products to save them here
          </Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => <ProductCard item={item} />}
        />
      )}
    </View>
  );
};

export default Favorite;
