import Login from '../pages/AuthStack/Login/Index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from '../pages/AuthStack/Started/Index';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
