// src/components/home/CategoryTabs.jsx
import { styles } from "@/styles/homeStyles";
import * as Haptics from "expo-haptics";
import { MotiView } from "moti";
import React, { memo, useCallback } from "react";
import { FlatList, Text } from "react-native";

const CategoryTabs = ({ categories, activeCategory, onCategoryChange }) => {
  const handlePress = useCallback(
    async (item) => {
      if (item !== activeCategory) {
        //light selection haptic
        await Haptics.selectionAsync();
        onCategoryChange(item);
      }
    },
    [activeCategory, onCategoryChange]
  );

  return (
    <>
      <Text style={styles.sectionTitle}>Explore</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ paddingVertical: 10 }}
        renderItem={({ item }) => {
          const isActive = activeCategory === item;
          return (
            <MotiView
              from={{ scale: 0.9, opacity: 0.6 }}
              animate={{
                scale: isActive ? 1.15 : 1,
                opacity: 1,
              }}
              transition={{ type: "spring", damping: 40 }}
              style={{ marginRight: 12 }}
            >
              <Text
                onPress={() => handlePress(item)}
                style={[
                  styles.categoryText,
                  isActive && styles.activeCategoryText,
                ]}
              >
                {item}
              </Text>
            </MotiView>
          );
        }}
      />
    </>
  );
};

export default memo(CategoryTabs);
