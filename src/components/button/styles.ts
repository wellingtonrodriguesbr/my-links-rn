import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 52,
    width: "100%",
    backgroundColor: colors.green[300],
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  text: {
    color: colors.gray[900],
    fontSize: 16,
    fontWeight: "600",
  },
  loading: {
    width: 24,
    height: 24,
    color: colors.gray[900],
  },
});
