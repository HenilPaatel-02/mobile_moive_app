/* eslint-disable no-unused-vars */
// styles/homeStyles.js
import { Dimensions, StyleSheet } from "react-native";
import { COLORS, SPACING } from "../constants/colors";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

// responsive
const isTablet = screenWidth > 600;
const gridColumns = isTablet ? 3 : 2;
const cardWidth = (screenWidth - SPACING.lg * 2) / gridColumns;

export const styles = StyleSheet.create({
  //  SCROLL CONTAINER
  scrollContainer: {
    flex: 1,
    backgroundColor: COLORS.bgPrimary,
  },

  scrollContent: {
    paddingBottom: 140,
    flexGrow: 1,
  },

  contrainer: {
    padding: SPACING.xl,
    paddingTop: SPACING.xxl,
    backgroundColor: COLORS.bgPrimary,
  },

  // HEADER WITH CART ICON
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: SPACING.lg,
  },

  cartIconWrapper: {
    position: "relative",
    padding: SPACING.sm,
  },

  cartBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: COLORS.accentRed,
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SPACING.xs,
    shadowColor: COLORS.accentRed,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },

  cartBadgeText: {
    color: COLORS.textWhite,
    fontSize: 10,
    fontWeight: "700",
  },

  //  TITLE SECTION
  titleSmall: {
    fontSize: 13,
    color: COLORS.textGray,
    marginBottom: SPACING.xs,
    fontWeight: "600",
    letterSpacing: 0.5,
  },

  titleMain: {
    fontSize: 32,
    fontWeight: "800",
    color: COLORS.textDark,
    lineHeight: 38,
    letterSpacing: -0.5,
  },

  titleHighlight: {
    color: COLORS.accentBrown,
  },

  // SEARCH BAR
  searchWrapper: {
    marginVertical: SPACING.lg,
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.bgSecondary,
    borderRadius: 18,
    paddingHorizontal: SPACING.md,
    height: 48,
    borderWidth: 0.8,
    borderColor: COLORS.bgLight,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    color: COLORS.textDark,
    marginHorizontal: SPACING.sm,
    fontWeight: "500",
  },

  // BANNER CAROUSEL
  bannerContainer: {
    height: 160,
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: SPACING.lg,
    backgroundColor: COLORS.bgLight,
  },

  bannerSlide: {
    flex: 1,
  },

  bannerImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.overlay35,
  },

  bannerContent: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.lg,
  },

  bannerTitle: {
    color: COLORS.textWhite,
    fontSize: 22,
    fontWeight: "800",
    letterSpacing: -0.3,
  },

  bannerSubtitle: {
    color: COLORS.textWhite,
    fontSize: 16,
    marginVertical: SPACING.sm,
    fontWeight: "600",
  },

  bannerBtnGradient: {
    alignSelf: "flex-start",
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
    borderRadius: 20,
    marginTop: SPACING.sm,
  },

  bannerBtn: {
    backgroundColor: COLORS.textWhite,
    alignSelf: "flex-start",
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
    borderRadius: 20,
    marginTop: SPACING.sm,
  },

  bannerBtnText: {
    color: COLORS.textDark,
    fontWeight: "700",
    fontSize: 13,
    letterSpacing: 0.3,
  },

  dot: {
    backgroundColor: "rgba(255,255,255,0.5)",
    width: 6,
    height: 6,
    borderRadius: 3,
    marginBottom: -12,
  },

  activeDot: {
    backgroundColor: COLORS.textWhite,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginBottom: -12,
  },

  // CATEGORY TABS
  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    marginTop: SPACING.xl,
    marginBottom: SPACING.md,
    color: COLORS.textDark,
    letterSpacing: -0.3,
  },

  categoryText: {
    fontSize: 14,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
    borderRadius: 20,
    backgroundColor: COLORS.bgMuted,
    color: COLORS.accentBrown,
    fontWeight: "600",
    borderWidth: 0.8,
    borderColor: "rgba(111, 78, 55, 0.1)",
  },

  activeCategoryText: {
    backgroundColor: COLORS.accentBrown,
    fontWeight: "700",
    color: COLORS.textWhite,
    borderColor: COLORS.accentBrown,
  },

  // PRODUCT CARDS - Premium Design
  productContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: SPACING.lg,
    paddingHorizontal: SPACING.xs,
  },

  productTouchable: {
    width: `${100 / gridColumns}%`,
    marginBottom: SPACING.xl,
    paddingHorizontal: SPACING.xs,
  },

  productCard: {
    backgroundColor: COLORS.textWhite,
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
    borderWidth: 0.8,
    borderColor: COLORS.brown40,
  },

  productImageWrapper: {
    width: "100%",
    height: 160,
    backgroundColor: COLORS.accentGreen,
    position: "relative",
    overflow: "hidden",
  },

  productImage: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.bgLight,
  },

  favoriteBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 6,
    borderRadius: 20,
  },

  productBadge: {
    position: "absolute",
    top: SPACING.md,
    right: SPACING.md,
    backgroundColor: "rgba(111, 78, 55, 0.95)",
    paddingHorizontal: 10,
    paddingVertical: SPACING.xs,
    borderRadius: 12,
    shadowColor: COLORS.accentBrown,
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    borderWidth: 0.5,
    borderColor: COLORS.white20,
  },

  productBadgeText: {
    color: COLORS.textWhite,
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 0.3,
  },

  productQuickBadge: {
    position: "absolute",
    top: SPACING.sm,
    left: SPACING.sm,
    backgroundColor: COLORS.accentRed,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: 8,
    shadowColor: COLORS.accentRed,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },

  badgeText: {
    color: COLORS.textWhite,
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 0.2,
  },

  productInfo: {
    padding: SPACING.md,
    paddingBottom: SPACING.md,
  },

  productInfoWrapper: {
    padding: SPACING.md,
    paddingBottom: SPACING.md,
  },

  productName: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.textDark,
    marginBottom: SPACING.xs,
    lineHeight: 18,
    letterSpacing: -0.3,
  },

  productCategory: {
    fontSize: 11,
    color: COLORS.textGray,
    marginBottom: SPACING.md,
    fontWeight: "600",
    textTransform: "capitalize",
  },

  productFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: SPACING.sm,
    borderTopWidth: 0.5,
    borderTopColor: COLORS.brown20,
  },

  productActionFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: SPACING.sm,
    borderTopWidth: 0.5,
    borderTopColor: COLORS.brown20,
  },

  productPrice: {
    fontSize: 16,
    fontWeight: "800",
    color: COLORS.accentRed,
    letterSpacing: -0.4,
  },

  productAddBtn: {
    backgroundColor: COLORS.accentBrown,
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: COLORS.accentBrown,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },

  productQuickAddBtn: {
    backgroundColor: COLORS.accentBrown,
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: COLORS.accentBrown,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },

  productAddBtnActive: {
    backgroundColor: COLORS.accentBrownDark,
    shadowOpacity: 0.15,
  },

  // EMPTY STATE
  emptyState: {
    alignItems: "center",
    paddingHorizontal: SPACING.lg,
    flex: 1,
    justifyContent: "center",
  },

  emptyStateIcon: {
    marginBottom: SPACING.lg,
  },

  emptyStateTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.textDark,
    marginBottom: SPACING.sm,
  },

  emptyStateSubtitle: {
    fontSize: 14,
    color: COLORS.textMuted,
    textAlign: "center",
    lineHeight: 20,
  },
});
