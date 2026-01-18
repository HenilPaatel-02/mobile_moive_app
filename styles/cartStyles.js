import { SPACING } from "@/constants/colors";
import { StyleSheet } from "react-native";

const tabBarHeight = "10%"; 

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBEA",
    paddingTop: SPACING.xxl,
  },

  /* ================= HEADER ================= */

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    marginBottom: 12,
    justifyContent: "space-between",
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2C2C2C",
  },

  emptyText: {
    textAlign: "center",
    marginTop: 80,
    color: "#888",
    fontSize: 16,
  },

  /* ================= CART ITEM ================= */

  cartItem: {
    flexDirection: "row",
    padding: 16,
    marginHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
  },

  cartImage: {
    width: 72,
    height: 72,
    borderRadius: 14,
    backgroundColor: "#EEE",
  },

  cartName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },

  cartSize: {
    fontSize: 13,
    color: "#8A8A8A",
    marginVertical: 3,
  },

  cartPrice: {
    fontSize: 15,
    fontWeight: "700",
    color: "#333",
  },

  /* ================= QUANTITY ================= */

  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 22,
    paddingHorizontal: 10,
    height: 38,
  },

  qtyBtn: {
    fontSize: 20,
    fontWeight: "700",
    paddingHorizontal: 8,
    color: "#444",
  },

  qtyText: {
    fontSize: 15,
    fontWeight: "600",
    marginHorizontal: 6,
    color: "#333",
  },

  /* ================= SWIPE DELETE ================= */

  deleteBg: {
    position: "absolute",
    right: 16,
    top: 0,
    bottom: 0,
    width: 96,
    backgroundColor: "#E53935",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
  },

  deleteText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 14,
  },

  /* ================= CHECKOUT ================= */

  checkoutContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: tabBarHeight,
    padding: 18,
    backgroundColor: "#FFF",
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  totalText: {
    fontSize: 16,
    color: "#777",
  },

  totalPrice: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },

  checkoutBtn: {
    backgroundColor: "#C9C7A3",
    paddingVertical: 16,
    borderRadius: 32,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
  },

  checkoutText: {
    color: "#3A3A3A",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
});
