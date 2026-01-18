// src/components/home/SearchBar.jsx
import { styles } from "@/styles/homeStyles";
import { Feather } from "@expo/vector-icons";
import { MotiView } from "moti";
import React, { memo } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const SearchBar = ({ search, onSearchChange, onClear }) => {
  return (
    <MotiView
      from={{ width: "90%", opacity: 0, translateY: 10 }}
      animate={{ width: "100%", opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 400 }}
      style={styles.searchWrapper}
    >
      <View style={styles.searchBar}>
        <Feather
          name="search"
          size={20}
          color="#8D6E63"
          style={{ marginRight: 8 }}
        />
        <TextInput
          placeholder="Search coffee..."
          placeholderTextColor="#9E9E9E"
          style={styles.searchInput}
          value={search}
          onChangeText={onSearchChange}
        />
        {search.length > 0 && (
          <Feather
            name="x"
            size={18}
            color="#8D6E63"
            onPress={onClear}
          />
        )}
      </View>
    </MotiView>
  );
};

export default memo(SearchBar);
