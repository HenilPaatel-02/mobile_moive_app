// src/components/home/ShimmerLoader.jsx
import { styles } from "@/styles/homeStyles";
import { LinearGradient } from "expo-linear-gradient";
import React, { memo } from "react";
import { FlatList, View } from "react-native";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";

const Shimmer = createShimmerPlaceholder(LinearGradient);

const SHIMMER_DATA = Array.from({ length: 4 });

const ShimmerLoader = () => {
  return (
    <View style={styles.productContainer}>
      <FlatList
        data={SHIMMER_DATA}
        keyExtractor={(_, index) => `shimmer-${index}`}
        numColumns={2}
        scrollEnabled={false}
        renderItem={() => (
          <View style={styles.productTouchable}>
            <Shimmer
              style={{
                width: "100%",
                height: 260,
                borderRadius: 20,
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default memo(ShimmerLoader);
