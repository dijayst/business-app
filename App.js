///import * as React from 'react';
import React,{useState} from 'react'
import { Text, View ,FlatList,TouchableOpacity,Image,ScrollView,StyleSheet,Dimensions, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from  "./Navigation/HomeScreen";
import Productlist from  "./Navigation/Productlist";
import Productcard from  "./Navigation/Productcard";
import Header from './Navigation/Header';
import {print} from "./Navigation/GlobalApi"
import { Colors } from './Navigation/Colors';
import {Fontisto,Feather,MaterialCommunityIcons} from "@expo/vector-icons";
//import {useFonts} from  "expo-font";
import LoginScreen from './Navigation/LoginScreen';
import { ClerkProvider,SignedIn,SignedOut } from '@clerk/clerk-expo';
//import Signin from './Navigation/Signin';
//import Signedout from './Navigation/Signedout';
//import LoginScreen from'./Navig'
import SecureStore from 'expo-secure-store';
import Tabnavigation from './Navigation/Tabnavigation';
import { useFonts } from 'expo-font';


const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
 

export default function App() {


const[fontsLoaded]= useFonts({
   'outfit':require('./assets/fonts/Outfit-Regular.ttf'),
   'outfit-medium':require('./assets/fonts/Outfit-Medium.ttf'),
   'outfit-bold':require('./assets/fonts/Outfit-Bold.ttf'),
});

  return (
    
    <ClerkProvider
    publishableKey='pk_test_aGlwLXJhbS03Ny5jbGVyay5hY2NvdW50cy5kZXYk'
    tokenCache={tokenCache}
  >
      <View style={styles.container}>
{/* SIGN IN*/}
<SignedIn style={{backgroundColor:"green"}}>
<NavigationContainer>
    <Tabnavigation/>
  </NavigationContainer>
</SignedIn>
<SignedOut>
  <LoginScreen/>
</SignedOut>
<StatusBar style="auto"/>
</View>
</ClerkProvider>

    
  )}


/*


    <ClerkProvider
    publishableKey='pk_test_aGlwLXJhbS03Ny5jbGVyay5hY2NvdW50cy5kZXYk'
    tokenCache={tokenCache}
  >
      <View style={styles.container}>
{/* SIGN IN
<SignedIn>
<NavigationContainer>
  <Tabnavigation/>
</NavigationContainer>
</SignedIn>
<SignedOut>
<NavigationContainer>
  <Tabnavigation/>
</NavigationContainer>
</SignedOut>

</View>
</ClerkProvider>







    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor:"#8E3FFF",
        headerShown:false,
        tabBarStyle:{height:45}
      }}>
     <Tab.Screen name="Home" component={HomeScreen} options={{
       tabBarLabel:({color})=>(<Text style={{color:color,fontSize:12,marginTop:-7}}>Home</Text>),
       tabBarIcon:()=>(<Fontisto name="home"  color="#c542f5" size={29}/>) }} />

       
        <Tab.Screen name="Booking" component={BookingScreen} 
        options={{
          tabBarIcon:()=>(<Feather name="bookmark" color="#c542f5" size={29} />),
           tabBarLabel:({color})=>(<Text style={{color:color,fontSize:12,marginTop:-7}}>BookingScreen</Text>), }}/>
        <Tab.Screen name="Profiles" component={ProfilesScreen} 
        options={{
          tabBarIcon:()=>(<MaterialCommunityIcons name="account-circle-outline" color="#c542f5" size={29} />) ,
           tabBarLabel:({color})=>(<Text style={{color:color,fontSize:12,marginTop:-7}}>ProfilesScreen</Text>),}}/>
      
      </Tab.Navigator>
    </NavigationContainer>
    */

//<Tab.Screen name="Prductlist" component={Productlist} options={{tabBarStyle:{display:"none"},headerShown:"false" }} />
       

const styles=StyleSheet.create({
      
  indicator:{
    height:2.5,
    width:10,
    backgroundColor:"grey",
    marginHorizontal:3,
    borderRadius:2,

  },
  container:{
    backgroundColor:"white",
    flex:1,
    paddingTop:20

  },
  category:{
    marginBottom:50,
    marginLeft:60,
  fontSize:30,
  },
 jsvarra:{
display:"flex",
flexWrap:"wrap",
flexDirection:"row",
//justifyContent:"center",
},
jsicon:{
  display:"flex",
  flexWrap:"wrap",
  flexDirection:"row",
  //justifyContent:"center",
  },
//jsicon:{display:"flex",flexDirection:"row",},
  jstouch:{
backgroundColor:"red",
width:120,
height:120,
borderRadius:5,
marginTop:17,
marginLeft:17,
padding:5,

  },
  jsimage:{
    width:214,
    height:90,
    borderRadius:5,
    margin:-2,
    padding:5,
    marginTop:15,
  },
  text:{
    backgroundColor:"yellow",
    height:45,
    borderRadius:5,
    margin:-2,
    width:114,
    marginTop:3,
  },
minibtn:{
flexDirection:"row",
width:199,
height:40,
//backgroundColor:"red",
//justifyContent:"space-between",
//marginTop:-175,
//marginLeft:-5,
},
minibutton:{
  backgroundColor:"white",
width:55,
height:90,
borderRadius:25,
marginLeft:10,
padding:10,
fontSize:100,
//alignItems:"center",
},
minibutton1:{
height:60,
width:48,
borderRadius:25,
//marginLeft:-2,
marginTop:-5,
},
clickimage:{

width:155,
height:190,
marginLeft:10,
padding:10,
fontSize:100,
},
imageview:{
//backgroundColor:"red",
  marginTop:-90,
  height:250,
  width:280,
  //alignContent:"center",
  
},

imageview1:{
 // backgroundColor:"red",
  marginTop:70,
  height:250,
  width:280,
 // alignContent:"center",
  
},
imagev:{
  width:240,
  //height:240,
  borderRadius:5,
  margin:2,
  flexDirection:"row",
},
wrap:{
position:"absolute",
bottom:0,
flexDirection:"row",
//alignSelf:"center",
},
dotactive:{margin:3,
  color:"red",
},
dot:{
//margin:3,
//color:"black"
height:2.5,
width:10,
backgroundColor:"grey",
marginHorizontal:3,
}
})
