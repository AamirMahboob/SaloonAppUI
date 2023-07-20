import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View , Text} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Bookme from '../screens/Bookme';
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
       <Tab.Navigator screenOptions={{
        headerShown:false,
       
       
        activeTintColor: 'gray', // Set the active (focused) icon color
        inactiveTintColor: 'gray', // Set the inactive (non-focused) icon color
       
    }}
       >
          <Tab.Screen name='Home' component={Home} options={{
            tabBarIcon:({ })=>{
                return <Ionicons name="home" size={30}  color={'orange'} />
            },
            
          }} />
          <Tab.Screen name='Bookme' component={Bookme} options={{
            tabBarIcon:()=>{
                return <Ionicons name="book" size={30}  color={'orange'} 
                  />
            }
          }} />
          <Tab.Screen name='Messages' component={Messages} options={{
            tabBarIcon:()=>{
                return <Ionicons name="mail" size={30}  color={'orange'} />
            }
          }} />
          <Tab.Screen name='Profile' component={Profile}  options={{
            tabBarIcon:()=>{
                return <Ionicons name="person" size={30}  color={'orange'} />
            }
          }} />
       </Tab.Navigator>
  )
}




// <Stack.Navigator screenOptions={{
//         headerShown:false
//        }}
        
//        >
//           <Stack.Screen name='Home' component={Home} options={{
//             tabBarIcon:()=>{
//                 return <Ionicons name="home" size={20}  color={'orange'} />
//             }
//           }}
//                />