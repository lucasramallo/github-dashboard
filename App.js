import * as React from 'react';
import { StatusBar } from 'react-native';
import Router from './src/routes/router';
import 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import {
  useFonts,
  Inter_900Black,
  Inter_400Regular,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_500Medium,
} from '@expo-google-fonts/inter';


export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_900Black, 
    Inter_400Regular, 
    Inter_700Bold, 
    Inter_600SemiBold, 
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
    <PaperProvider>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
      />
      <Router />
    </PaperProvider>
    </>
  );
}