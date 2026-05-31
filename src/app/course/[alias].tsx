import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function CoursePage() {
  const { alias } = useLocalSearchParams();
  return (
    <View>
      <Text style={{ color: '#fff' }}>Course Page: {alias}</Text>
    </View>
  );
}
