// src/components/home/EmptyState.jsx
import { COLORS } from "@/constants/colors";
import { styles } from "@/styles/homeStyles";
import { Feather } from "@expo/vector-icons";
import React, { memo } from "react";
import { Text, View } from "react-native";

const EmptyState = ({ debouncedSearch, activeCategory }) => {
  return (
    <View style={styles.emptyState}>
      <Feather
        name="search"
        size={60}
        color={COLORS.textMuted}
        style={styles.emptyStateIcon}
      />
      <Text style={styles.emptyStateTitle}>No products found</Text>
      <Text style={styles.emptyStateSubtitle}>
        {debouncedSearch
          ? `No results for "${debouncedSearch}"`
          : `No products in "${activeCategory}" category`}
      </Text>
    </View>
  );
};

export default memo(EmptyState);
