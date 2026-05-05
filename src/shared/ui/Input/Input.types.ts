import { TextInputProps } from 'react-native';

export type InputProps = TextInputProps & {
  isPassword?: boolean;
};
