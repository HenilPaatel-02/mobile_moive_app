import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    justifyContent: "center",
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    marginHorizontal: 20,
    padding: 22,
    borderRadius: 18,

    backgroundColor: "rgba(255, 255, 255, 0.20)",

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.32)",

    shadowColor: "rgba(0,0,0,0.28)",
    shadowOpacity: 0.28,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
    overflow: "hidden",
    position: "relative",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FCEBD1",
    textAlign: "center",
    marginBottom: 24,
    letterSpacing: 1.2,
    textTransform: "uppercase",

    textShadowColor: "rgba(0, 0, 0, 0.45)",
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 6,
  },

  input: {
    borderWidth: 1,
    borderColor: "rgba(110, 78, 55, 0.38)",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,

    backgroundColor: "rgba(255, 255, 255, 0.86)",
    fontSize: 16,
    color: "#3B2A22",

    shadowColor: "rgba(0,0,0,0.18)",
    shadowOpacity: 0.18,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,

    letterSpacing: 0.2,
  },

  inputError: {
    borderColor: "#E53935",
    borderWidth: 2,
    backgroundColor: "rgba(229, 57, 53, 0.06)",
  },
  errorText: {
    color: "#E53935",
    fontSize: 14,
    marginTop: -12,
    marginBottom: 8,
    fontWeight: "600",
    letterSpacing: 0.15,
  },

  button: {
    backgroundColor: "#6F4E37",
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignItems: "center",
    marginTop: 8,

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.22)",

    shadowColor: "#2A1A14",
    shadowOpacity: 0.32,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,

    transform: [{ scale: 1 }],
  },

  buttonText: {
    color: "#FFF7E7",
    fontWeight: "800",
    fontSize: 18,
    letterSpacing: 1,
    textTransform: "uppercase",
    textAlign: "center",

    textShadowColor: "rgba(0, 0, 0, 0.35)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
});
