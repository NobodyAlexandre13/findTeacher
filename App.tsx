import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import Loading from './src/components/Loading';
import { themes } from './src/global/themes';
import { View } from 'react-native';
import { Signin } from './src/screen/Signin';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';

export default function App() {
  const [ fontsLoaded ] = useFonts([
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  ]);

  if(!fontsLoaded){
    return(
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Loading width={60} height={60} color={themes.colors.primary}/>
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
