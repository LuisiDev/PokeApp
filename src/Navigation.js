import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';

import AboutScreen from './screen/AboutScreen';
import HomeScreen from './screen/HomeScreen';
import PrincipalScreen from './screen/PrincipalScreen';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Pokemon" 
        component={PrincipalScreen} 
        options={{
          tabBarIcon: () => (
            <Image 
              source={require("./assets/principal.png")} 
              style={{
                width: 80,
                height: 80,
                bottom: 30,
              }} 
            />
          ),
        }} 
      />
      <Tab.Screen 
        name="About" 
        component={AboutScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" size={size} color={color} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}