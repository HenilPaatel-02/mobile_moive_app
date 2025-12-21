import { StyleSheet } from "react-native";
import { theme, ui } from "./theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background ,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: theme.colors.textDark,
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  image: {
    width: "80%",
    height: "30%",
    borderRadius: 15,
    marginBottom: 25,
    resizeMode: 'cover',
    shadowColor: ui.shadow,
    shadowRadius: 6,
    elevation: 6,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.08)'
  },
  mainButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 12,
    marginBottom: 25,
    elevation: 4,
  },
  mainButtonText: {
    color: theme.colors.background,
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  counterContainer: {
    alignItems: 'center',
    backgroundColor: ui.glass,
    padding: 20,
    borderRadius: 15,
    width: '85%',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  counterText: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    gap: 15,
  },
  smallButton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: theme.colors.textLight,
    fontSize: 16,
    fontWeight: '600',
  },
});

