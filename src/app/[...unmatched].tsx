import { View, Text, Image, StyleSheet } from 'react-native';
import { colors } from '@/shared/themes/configs/colors';
import { CustomLink } from '@/shared/ui/CustomLink/CustomLink';

export default function UnmatchedCustom() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require('../../assets/images/unmatched.png')}
          resizeMode="contain"
        />
        <Text style={styles.text}>
          Oops, something went wrong. Please try to return on the main page.
        </Text>
        <CustomLink href="/" text="To the main page" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 55,
  },
  content: {
    alignItems: 'center',
    gap: 50,
  },
  image: {
    width: 204,
    height: 282,
  },
  text: {
    color: colors.white,
    fontFamily: 'FiraSans',
    fontSize: 18,
    textAlign: 'center',
  },
});
