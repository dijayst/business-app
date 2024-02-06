import React,{useEffect} from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import {Fontisto,Feather,MaterialCommunityIcons} from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Businesslistbycategoryhome from './gghHomeNavigation';
//import HomeNavigation from./gghHomeNavigationon';
import {createStackNavigator} from "@react-navigation/stack"
import Businesslistbycategoryscreen from './Businesslistbycategoryscreen';
import Businessdetail from './Businessdetailscreen';
import Businessdetailscreen from './Businessdetailscreen';
import ProfileScreen from './ProfileScreen';
import BookingScreen from './Productcard';
//import {Fontisto,Feather,MaterialCommunityIcons} from "@expo/vector-icons";
//import HomeScreen from './HomeScreen';
//import Businesslistcategoryscreen from './Businesslistbycategoryscreen';


const stack = createStackNavigator();
function HomeNavigation() {
    return (
        
    
      <stack.Navigator screenOptions={{
        tabBarActiveTintColor:"#8E3FFF",
        headerShown:false,
        
      }}>
     <stack.Screen name="homer" component={HomeScreen} />
       
        <stack.Screen name="Businesslistbycategoryscreen" component={Businesslistbycategoryscreen} />
       
        <stack.Screen name="Businessdetails" component={Businessdetailscreen} />
       
       </stack.Navigator>
    )
}





const Tab = createBottomTabNavigator();


export default function Tabnavigation() {
    return (
      
    
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor:"#8E3FFF",
        headerShown:false,
        tabBarStyle:{height:45}
      }}>
        
     <Tab.Screen name="Home" component={HomeNavigation} options={{
       tabBarLabel:({color})=>(<Text style={{color:color,fontSize:12,marginTop:-7}}>Home</Text>),
       tabBarIcon:()=>(<Fontisto name="home"  color="#c542f5" size={29}/>) }} />

       
        <Tab.Screen name="Booking" component={BookingScreen} 
        options={{
          tabBarIcon:()=>(<Feather name="bookmark" color="#c542f5" size={29} />),
           tabBarLabel:({color})=>(<Text style={{color:color,fontSize:12,marginTop:-7}}>BookingScreen</Text>), }}/>
        <Tab.Screen name="Profiles" component={ProfileScreen} 
        options={{
          tabBarIcon:()=>(<MaterialCommunityIcons name="account-circle-outline" color="#c542f5" size={29} />) ,
           tabBarLabel:({color})=>(<Text style={{color:color,fontSize:12,marginTop:-7}}>ProfilesScreen</Text>),}}/>
      
      </Tab.Navigator>
    )
}
