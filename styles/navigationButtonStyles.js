import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const styles = StyleSheet.create({
  button: {
    height: 55,
    borderRadius: 15,
    backgroundColor: theme.colors.coffeeBrownColor,
    justifyContent: "center",
    padding: 10,
    marginHorizontal: "auto",
    marginVertical: 8,
    width: 180,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.16,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 6 },
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
