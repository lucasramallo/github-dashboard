import Login from '../pages/Login/Index';
import { createNativeStackNavigator, HeaderBackButton} from '@react-navigation/native-stack';
import Start from '../pages/Started/Index';
import TabNavigator from './TabNavigator'

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
      <Stack.Screen name="Tab" component={TabNavigator} />
    </Stack.Navigator>
  );
}
