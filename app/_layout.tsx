import { GeneroProvider } from '@/contexts/genero';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout() {

  return (
    <GeneroProvider>
      <Stack screenOptions={{ headerShown: false }}/>
    </GeneroProvider>
  )
}
