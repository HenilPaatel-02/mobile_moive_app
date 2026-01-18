import { COLORS, SPACING } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.xxl,
    backgroundColor: COLORS.bgPrimary,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyTitle: {
    marginTop: SPACING.lg,
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.textDark,
  },
  emptySubtitle: {
    marginTop: SPACING.sm,
    fontSize: 14,
    color: COLORS.textMuted,
    textAlign: "center",
    paddingHorizontal: SPACING.lg,
  },
});
