import { Stack } from 'expo-router';
import { colors } from '@/shared/themes';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

/**
 * Slot
 * Stack
 * Tab
 */
export default function RootLayout() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colors.blackBackground,
            paddingTop: insets.top,
          },
        }}>
        <Stack.Screen name="index" />
        <Stack.Screen
          name="restore"
          options={{
            presentation: 'modal',
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
