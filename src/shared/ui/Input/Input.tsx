import { Pressable, TextInput, View } from 'react-native';
import { InputProps } from '@/shared/ui/Input/Input.types';
import { useInputStyles } from '@/shared/ui/Input/Input.styles';
import { colors } from '@/shared/themes';
import { useState } from 'react';
import { EyeClosedIcon, EyeOpenedIcon } from '@/shared/assets/icons';

export function Input(props: InputProps) {
  const { isPassword, ...rest } = props;
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const setPasswordVisibility = () => setIsPasswordVisible((state) => !state);
  return (
    <View>
      <TextInput
        style={useInputStyles.input}
        secureTextEntry={isPassword && !isPasswordVisible}
        placeholderTextColor={colors.grayPlaceholder}
        {...rest}
      />
      {isPassword && (
        <Pressable onPress={setPasswordVisibility} style={useInputStyles.icon}>
          {isPasswordVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}
        </Pressable>
      )}
    </View>
  );
}
