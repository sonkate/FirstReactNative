import * as React from 'react'
import { Text, View } from 'react-native'

import SettingScreen from './SettingScreen';
import AutoScreen from './AutoScreen';
import HomePage from './HomePage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from 'react-native-elements';

import Icon from 'react-native-vector-icons/MaterialIcons';

import styled from 'styled-components';


const Tab = createBottomTabNavigator()
const HomeScreen: React.FC = () => {
  
  return (
    
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: 'rgb(253,201,0)', // Thiết lập màu sắc cho label và icon khi tab đang được chọn
      inactiveTintColor: 'rgb(0,0,0)', // Thiết lập màu sắc cho label và icon khi tab không được chọn
    }}
    >
      <Tab.Screen 
      
      name="Setting" 
      options={{
        tabBarLabel: 'Setting',
        tabBarIcon: ({ color, size }) => (
          <Icon name="settings" color={color} size={size} />
        ),
        }}
      component={SettingScreen} />

      <Tab.Screen 
      name="Home"
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),
        }}
      component={HomePage} />

      <Tab.Screen 
      name="Auto"
      options={{
        tabBarLabel: 'Auto',
        tabBarIcon: ({ color, size }) => (
          <Icon name="auto-awesome-motion" color={color} size={size} />
        ),
        
        }}
      component={AutoScreen} />
      
    </Tab.Navigator>
  )
}

export default HomeScreen