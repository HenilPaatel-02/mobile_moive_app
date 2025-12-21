import Icon from "@/components/Icon";
import React from "react";
import { SectionList, Text, View } from "react-native";
import { styles } from "../../styles/sectionListScreenStyles";

const listItem = [
  {
    title: "Hot Coffees",
    data: ["Espresso", "Cappuccino", "Latte"],
  },
  {
    title: "Cold Coffees",
    data: ["Iced Latte", "Cold Brew", "Frappuccino"],
  },
  {
    title: "Snacks",
    data: ["Croissant", "Muffin", "Donut"],
  },
];

const sectionListScreen = () => {
  const renderItem = ({ item }) => (
    <View>
      <Text style={styles.item}>{item}</Text>
    </View>
  );

  const renderSectionHeader = ({ section }) => (
    <View>
      <Text style={styles.sectionHeader}>{section.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        <Icon name="coffee" size={24} color="#7B3F00" /> Coffee Menu
      </Text>
      <SectionList
        sections={listItem}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

export default sectionListScreen;
