import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Start from '../pages/Start/Index';
import Walcome from '../pages/Walcome/Index';
import TabNavigator from './TabNavigator'

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Start" component={Walcome} />
      <Stack.Screen name="Login" component={Start} options={{ 
        title: "Start",
        headerShown: true, 
        headerTitleAlign: 'center',
        headerTintColor: '#FFFFFF',
        headerStyle: {
          backgroundColor: '#1F1D2B',
          margin: 20
        },
        headerTitleStyle: {
          fontFamily: 'Inter_400Regular',
          fontSize: 18,
        }, 
      }}/>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
}
