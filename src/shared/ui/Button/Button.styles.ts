import { StyleSheet } from "react-native";
import { colors, variables } from "@/shared/themes";

export const useButtonStyles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: variables.inputHeight,
    borderRadius: 10,
    backgroundColor: colors.violetPrimary,
  },
  text: {
    color: colors.white,
    fontSize: 18,
  }
});
