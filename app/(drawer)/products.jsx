import { styles } from "@/styles/productStyles";
import React from "react";
import { FlatList, Text, View } from "react-native";
import Icon from "../../components/Icon";

const DATA = [
  { id: "1", name: "Espresso", price: "$3.00", icon: "coffee" },
  { id: "2", name: "Cappuccino", price: "$4.00", icon: "coffee-to-go" },
  { id: "3", name: "Latte", price: "$4.50", icon: "cup" },
  { id: "4", name: "Mocha", price: "$5.00", icon: "cup-outline" },
  { id: "5", name: "Americano", price: "$3.50", icon: "coffee-outline" },
];

const Products = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Icon name="coffee" size={32} color="#7B3F00" /> Coffee Products
      </Text>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Icon name={item.icon} size={30} color="#7B3F00" />
            <Text style={styles.name}>{item.name}</Text>

            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Products;
