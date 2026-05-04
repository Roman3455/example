import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { Input } from "@/shared/ui/Input";
import { colors } from "@/shared/themes"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}
          resizeMode="contain"
        />
        <View style={styles.form}>
          <Input placeholder='Email' />
          <Input isPassword placeholder='Password' />
          <Button title="Sign In" />
        </View>
        <Text>Reset password</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackBackground,
    justifyContent: 'center',
    paddingHorizontal: 55,
  },
  content: {
    alignItems: 'center',
    gap: 50
  },
  form: {
    alignSelf: 'stretch',
    gap: 16
  },
  logo: {
    width: 220,
  }
});
