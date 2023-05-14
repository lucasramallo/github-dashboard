import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../pages/Home';
import About from '../pages/About';

const Tab = createBottomTabNavigator();

export default function AppStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
      })}
      >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Settings" component={About} />
    </Tab.Navigator>
  );
}