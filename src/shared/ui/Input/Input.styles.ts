import { StyleSheet } from 'react-native';
import { colors, variables } from '@/shared/themes';

export const useInputStyles = StyleSheet.create({
  input: {
    height: variables.inputHeight,
    paddingHorizontal: 24,
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 20, // coefficient 1.2
    backgroundColor: colors.grayForm,
    color: colors.white,
  },
  icon: {
    position: 'absolute',
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
});
