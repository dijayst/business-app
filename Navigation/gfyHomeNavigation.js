import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack"
import Businesslistbycategoryscreen from './Businesslistbycategoryscreen';
import {Fontisto,Feather,MaterialCommunityIcons} from "@expo/vector-icons";
import HomeScreen from './HomeScreen';


const stack = createStackNavigator();
export default function HomeNavigation() {
    return (
        
    
      <stack.Navigator screenOptions={{
        tabBarActiveTintColor:"#8E3FFF",
        headerShown:false,
        
      }}>
     <stack.Screen name="homer" component={HomeScreen} />
       
        <stack.Screen name="Businesslistbycategoryscreen" component={Businesslistbycategoryscreen} />
       
       </stack.Navigator>
    )
}
