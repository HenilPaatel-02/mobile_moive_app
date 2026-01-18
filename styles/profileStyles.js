import { COLORS, SPACING } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.bgPrimary,
    padding: SPACING.xl,
    paddingTop: SPACING.xxl,
  },
  header: {
    fontSize: 26,
    fontWeight: "700",
    color: "#7B3F00",
    textAlign: "center",
    marginVertical: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginLeft: 15,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C9C7A3",
    padding: 15,
    borderRadius: 12,
    justifyContent: "center",
    marginTop: 25,
  },
  logoutText: {
    color: "#3A3A3A",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 8,
  },
});
