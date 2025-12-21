import Icon from "@/components/Icon";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/categoriesStyles";

const CategoryCard = ({ item, quantity, onAdd, onRemove }) => {
  return (
    <View style={styles.card}>
      <View style={styles.leftSection}>
        <Image source={item.image} style={styles.icon} />

        <View style={styles.details}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.desc}>{item.description}</Text>
          <Text style={styles.price}>Rs {item.price}</Text>
        </View>
      </View>

      <View style={styles.rightSection}>
        <View style={styles.quantityControls}>
          <TouchableOpacity onPress={onRemove} disabled={quantity === 0}>
            <Icon
              name="minus-circle-outline"
              size={26}
              color={quantity === 0 ? "#CCAA99" : "#7B3F00"}
            />
          </TouchableOpacity>

          <Text style={styles.countText}>{quantity}</Text>

          <TouchableOpacity onPress={onAdd}>
            <Icon name="plus-circle-outline" size={26} color="#7B3F00" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.addButton} onPress={onAdd}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoryCard;
