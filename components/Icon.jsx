import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const Icon = ({ name, size = 24, color = "#000" }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

export default Icon;
