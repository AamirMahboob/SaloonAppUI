
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import Home from '../screens/Home';
import TabNavigation from './TabNavigation';
import Signin from '../screens/Signin';
import RegisterNow from '../screens/RegisterNow';
import ChatConversation from '../components/ChatConversation';
import OnBoarding from '../screens/OnBoarding';
import OnBoarding2 from '../screens/OnBoarding2';


const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false

      }}>
         
         <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
            <Stack.Screen  name='Root' component={TabNavigation}  />
                
          <Stack.Screen  name='Signin' component={Signin} /> 
                <Stack.Screen  name='RegisterNow' component={RegisterNow} />  

        </Stack.Navigator>
    </NavigationContainer>
  )
}