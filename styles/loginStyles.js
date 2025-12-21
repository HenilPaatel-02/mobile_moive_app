import { StyleSheet } from "react-native";
import { theme, ui } from "./theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: theme.colors.background,
  },
  card: {
    backgroundColor: ui.glass,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 16,
    elevation: 6,
    shadowColor: ui.shadow,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    color: "#7B3F00",
  },
  subtitle: {
    textAlign: "center",
    color: "#9C6B3B",
    fontSize: 16,
    marginBottom: 30,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.95)",
    padding: 14,
    borderRadius: 12,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#E0C097",
    fontSize: 16,
    color: "#333",
  },
  inputError: {
    borderColor: "#E53935",
    borderWidth: 1.4,
    backgroundColor: "rgba(229, 57, 53, 0.06)",

  },
  errorText: {
    color: "#E53935",
    fontSize: 13,
    marginBottom: 6,
    marginLeft: 4,
    fontWeight: "600",
  },

  button: {
    backgroundColor: "#7B3F00",
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
  linkText: {
    textAlign: "center",
    marginTop: 18,
    color: "#7B3F00",
    fontWeight: "600",
  },
});
