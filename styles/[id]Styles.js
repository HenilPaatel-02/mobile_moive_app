import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFBEA" },

  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFBEA",
    overflow: "hidden",
    zIndex: 10,
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },

  backBtn: {
    position: "absolute",
    top: 40,
    left: 16,
    zIndex: 20,
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 8,
    borderRadius: 20,
  },

  headerTitle: {
    position: "absolute",
    bottom: 16,
    left: 60,
    right: 16,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    zIndex: 20,
  },
  infoWrapper: {
    padding: 20,
  },

  name: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#6F4E37",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  price: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#C62828",
  },

  rating: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 6,
    borderRadius: 10,
  },

  ratingText: {
    marginLeft: 5,
    fontWeight: "600",
  },

  desc: {
    fontSize: 15,
    color: "#666",
    marginBottom: 20,
    lineHeight: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  sizeRow: {
    flexDirection: "row",
    marginBottom: 25,
  },

  sizeBox: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
  },

  sizeBoxActive: {
    backgroundColor: "#C9C7A3",
    borderColor: "#C9C7A3",
  },

  sizeText: {
    fontSize: 16,
    color: "#444",
  },

  sizeTextActive: {
    color: "#000",
    fontWeight: "bold",
  },

  stickyContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 15,
  },

  stickyButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#C9C7A3",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  stickyText: {
    color: "#3A3A3A",
    fontSize: 18,
    fontWeight: "bold",
  },
  stickyPrice: {
    color: "#3A3A3A",
    fontSize: 18,
    fontWeight: "bold",
  },
});
