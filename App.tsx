import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'react-native-elements'
import { HeaderTitle, createStackNavigator } from '@react-navigation/stack';

import RegisterScreen from './src/screens/Register'
import LoginScreen from './src/screens/Login'
import HomeScreen from './src/screens/HomeScreen'
import { Title } from 'chart.js'

const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        {/* <NavigationContainer>
          <HomeScreen />
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Register' component={RegisterScreen} />
          <StatusBar />
        </NavigationContainer> */}
        <NavigationContainer>
          <Stack.Navigator>
            {/* <Stack.Screen name="Login" component={LoginScreen} options={{
              headerShown: false,
            }} /> */}
            {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
