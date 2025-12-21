import { StyleSheet } from "react-native";
import { theme, ui } from "./theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:theme.colors.background,
    padding: 16,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    color: "#3E2723",
    marginBottom: 16,
  },

  item: {
    backgroundColor: ui.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },

  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#5D4037",
  },

  price: {
    fontSize: 16,
    color: "#8D6E63",
    marginTop: 4,
  },
});
