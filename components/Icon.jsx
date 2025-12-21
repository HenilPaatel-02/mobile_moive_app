import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

/**
 * Reusable Icon component using MaterialCommunityIcons
 * Props:
 * - name: icon name from MaterialCommunityIcons
 * - size: number (default 24)
 * - color: color string (default #000)
 */
const Icon = ({ name, size = 24, color = "#000" }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

export default Icon;
