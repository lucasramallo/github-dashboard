import * as React from 'react';
import { StatusBar } from 'react-native';
import Router from './src/routes/router';
import 'react-native-gesture-handler';
import {
  useFonts,
  Inter_900Black,
  Inter_400Regular,
  Inter_700Bold,
  Inter_600SemiBold
} from '@expo-google-fonts/inter';


export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_900Black, Inter_400Regular, Inter_700Bold, Inter_600SemiBold
  });

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
      />
      <Router />
    </>
  );
}