import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: "black",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)", // a bit darker for better text contrast
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 32,
    justifyContent: "space-between",
  },

  // --- Top title ---
  header: {
    alignItems: "center",
    marginTop: 16,
  },

  brand: {
    fontSize: 40,
    fontWeight: "900",
    color: "#D7B49E", 
    textAlign: "center",
    letterSpacing: 2,
    textTransform: "toUpperCase",
    opacity: 0.95,
    marginBottom: 6,
  },

  // --- Bottom content ---
  bottomSection: {
    paddingBottom: 24,
    paddingHorizontal: 10,
  },

  taglineWrapper: {
    marginBottom: 24,
  },

  taglineLine1: {
    fontSize: 20,
    color: "#F2E2D2",
    textAlign: "center",
    marginBottom: 4,
  },

  taglineLine2: {
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0.5,
  },

  // CTA button
  ctaButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",

    backgroundColor: "#C67C4E", // caramel coffee
    paddingVertical: 14,
    paddingHorizontal: 26,
    borderRadius: 45,

    borderWidth: 1,
    borderColor: "rgba(255, 243, 224, 0.25)",

    shadowColor: "rgba(0, 0, 0, 0.55)",
    shadowOpacity: 0.42,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 10,

    transform: [{ translateY: -2 }],
  },

  ctaIconWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#FEE8D0",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  ctaIconText: {
    fontSize: 18,
  },

  ctaText: {
    color: "#FFFDF7",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.7,
    textTransform: "uppercase",
  },
});
