import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 16,
    color: theme.colors.coffeeBrownColor,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },

  leftSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  icon: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },

  details: {
    flex: 1,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2121",
    marginBottom: 4,
  },

  desc: {
    fontSize: 12,
    color: "#7B7B7B",
    marginBottom: 6,
    lineHeight: 16,
  },

  price: {
    fontSize: 14,
    fontWeight: "600",
    color: "#7B3F00",
  },

  rightSection: {
    alignItems: "center",
    gap: 8,
  },

  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
  },

  countText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#7B3F00",
    minWidth: 24,
    textAlign: "center",
  },

  addButton: {
    backgroundColor: "#7B3F00",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 110,
  },

  button: {
    backgroundColor: theme.colors.coffeeBrownColor,
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    paddingHorizontal: 20,
  },
  cartSection: {
    marginTop: 20,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    flexDirection: "row", //icon + text in a row
    alignItems: "center",
    justifyContent: "center",
  },
  cartText: {
    fontSize: 18,
    fontWeight: "600",
    color: theme.colors.coffeeBrownColor,
    textAlign: "center",
  },
  cartSubText: {
    fontSize: 14,
    color: "#7B3F00",
    marginTop: 4,
  },

  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D8C4B6",
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
  },

  bannerScroll: {
    marginVertical: 10,
  },
  bannerItem: {
    height: 140,
    marginHorizontal: 5,
    overflow: "hidden",
    borderRadius: 16,
  },
  bannerImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  bannerImageRadius: {
    borderRadius: 16,
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
    borderRadius: 16,
  },
  bannerContent: {
    padding: 12,
  },
  bannerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  bannerSubtitle: {
    color: "#f5f5f5",
    fontSize: 12,
    marginTop: 4,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 6,
    marginBottom: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: "#7B3F00",
    width: 14,
  },
  emptryState: { alignItems: "center", justifyContent: "center", flex: 1 },
  emptyText: {
    fontSize: 18,
    color: "#7B3F00",
    textAlign: "center",
  },
});
