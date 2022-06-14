import { StyleSheet, Platform } from "react-native";

const globalStyle = StyleSheet.create({
  header1: {
    fontFamily: "SourceSansBold",
    fontSize: 36,
  },
  header2: {
    fontFamily: "SourceSansBold",
    fontSize: 28,
  },
  header3: {
    fontFamily: "SourceSansBold",
    fontSize: 24,
  },
  header4: {
    fontFamily: "SourceSansBold",
    fontSize: 18,
  },
  body1: {
    fontFamily: "SourceSansRegular",
    fontSize: 16,
  },
  body1Bold: {
    fontFamily: "SourceSansBold",
    fontSize: 16,
  },
  body2: {
    fontFamily: "SourceSansRegular",
    fontSize: 14,
  },
  body2Bold: {
    fontFamily: "SourceSansBold",
    fontSize: 14,
  },
  body3: {
    fontFamily: "SourceSansRegular",
    fontSize: 12,
  },
  body3Bold: {
    fontFamily: "SourceSansBold",
    fontSize: 12,
  },
  body4: {
    fontFamily: "SourceSansRegular",
    fontSize: 10,
  },
  body4Bold: {
    fontFamily: "SourceSansBold",
    fontSize: 10,
  },
  androidNavigationTitle: {
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
  dropShadow: {
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 3,
    elevation: 3,
  },
});

export default globalStyle;
