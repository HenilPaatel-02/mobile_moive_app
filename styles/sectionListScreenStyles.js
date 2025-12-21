import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingVertical: 16,
    backgroundColor: theme.colors.background,
  },

  header: {
    fontSize: 26,
    fontWeight: "800",
    textAlign: "center",
    color: "#7B3F00",
    marginBottom: 18,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    // subtle shadow so it stands out on light backgrounds
    textShadowColor: "rgba(0,0,0,0.18)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },

  sectionHeader: {
    fontSize: 18,
    fontWeight: "700",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#FFE5B4",
    borderRadius: 10,
    marginTop: 18,
    marginBottom: 8,
    color: "#5A2E0C",
    // make it feel like a small label chip
    alignSelf: "flex-start",
  },

  item: {
    fontSize: 15.5,
    paddingVertical: 6,
    paddingHorizontal: 10,
    color: "#333",
    fontWeight: "500",
    marginBottom: 4,
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,0.9)",
    // very soft divider-like shadow
    shadowColor: "rgba(0,0,0,0.06)",
    shadowOpacity: 0.06,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
});
