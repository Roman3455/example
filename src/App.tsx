import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';

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
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
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
    backgroundColor: '#16171d',
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
  input: {
    backgroundColor: "#2e2d3d",
  },
  logo: {
    width: 220,
  }
});
