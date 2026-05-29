import { Link } from 'expo-router';
import { Image, StyleSheet, View, Text } from 'react-native';
import { Input } from '@/shared/ui/Input';
import { colors } from '@/shared/themes';
import { Button } from '@/shared/ui/Button';
import { ErrorNotification } from '@/shared/ui/ErrorNotification';
import { useState } from 'react';

export default function Login() {
  const [error, setError] = useState<string | undefined>();
  const alert = () => {
    setError('Wrong login or password');
    setTimeout(() => {
      setError(undefined);
    }, 4000);
  };
  return (
    <View style={styles.container}>
      <ErrorNotification error={error} />
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
        />
        <View style={styles.form}>
          <Input placeholder="Email" />
          <Input isPassword placeholder="Password" />
          <Button text="Sign In" onPress={alert} />
        </View>
        <Link href="/restore">
          <Text>Reset password</Text>
        </Link>
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
    gap: 50,
  },
  form: {
    alignSelf: 'stretch',
    gap: 16,
  },
  logo: {
    width: 220,
  },
});
