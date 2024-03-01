import React,{useEffect} from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import {Fontisto,FontAwesome,Feather,MaterialCommunityIcons} from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Businesslistbycategoryhome from './gghHomeNavigation';
//import HomeNavigation from./gghHomeNavigationon';
import {createStackNavigator} from "@react-navigation/stack"
import Businesslistbycategoryscreen from './Businesslistbycategoryscreen';
import Businessdetail from './Businessdetailscreen';
import Businessdetailscreen from './Businessdetailscreen';
import Profile from './ProfileScreen';
import Booking from './Booking';
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
        tabBarStyle:{height:49}
      }}>
        
     <Tab.Screen name="Home" component={HomeNavigation} options={{
       tabBarLabel:({color})=>(<Text style={{color:color,fontSize:10,marginTop:-7}}>Home</Text>),
       tabBarIcon:()=>(<FontAwesome name="home"  color="#c542f5" size={25}/>)}} />

       
        <Tab.Screen name="Booking" component={Booking} 
        options={{
          tabBarIcon:({color})=>(<Feather name="bookmark" color="#c542f5" size={25} />),
           tabBarLabel:({color})=>(<Text style={{color:color,fontSize:10,marginTop:-7}}>Booking</Text>), }}/>
        <Tab.Screen name="Profiles" component={Profile} 
        options={{
          tabBarIcon:()=>(<MaterialCommunityIcons name="account-circle-outline" color="#c542f5" size={25} />) ,
           tabBarLabel:({color})=>(<Text style={{color:color,fontSize:10,marginTop:-7}}>Profile</Text>),}}/>
      
      </Tab.Navigator>
    )
}
