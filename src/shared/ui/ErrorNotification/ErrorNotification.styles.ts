import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '@/shared/themes';

export const useErrorNotificationStyles = StyleSheet.create({
  error: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    padding: 15,
    top: 50,
    backgroundColor: colors.errorRed,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'FiraSans'
  },
});
