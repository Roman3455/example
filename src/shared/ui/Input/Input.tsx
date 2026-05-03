import { TextInput } from "react-native";
import { InputProps } from "@/shared/ui/Input/Input.types";
import { useInputStyles } from "@/shared/ui/Input/Input.styles";
import { colors } from "@/shared/themes"

export function Input(props: InputProps) {
  const { ...rest } = props;
  return(
    <TextInput
      style={useInputStyles.input}
      placeholderTextColor={colors.grayPlaceholder}
      {...rest}
    />
  );
}
