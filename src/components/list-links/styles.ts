import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
  },
  content: {
    gap: 20,
    padding: 24,
    paddingRight: 18,
    paddingBottom: 100,
  },
  modal: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: colors.gray[900],
    borderTopWidth: 1,
    borderTopColor: colors.gray[800],
    padding: 24,
    paddingBottom: 42,
    borderRadius: 8,
  },
  modalHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  modalCategory: {
    flex: 1,
    color: colors.gray[400],
    fontSize: 16,
    fontWeight: "500",
  },
  modalLinkName: {
    color: colors.gray[200],
    fontSize: 18,
    fontWeight: "600",
  },
  modalLinkUrl: {
    fontSize: 14,
    color: colors.gray[400],
  },
  modalOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 32,
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
    paddingVertical: 14,
  },
});
