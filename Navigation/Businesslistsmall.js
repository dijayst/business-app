import React,{useState,} from 'react'
import { View, Text,Image,TouchableOpacity,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
//import {useNavigation} from "@react-navigation/native";
import {useNavigation} from "@react-navigation/native";

export default function Businesslistsmall({business}) {
   // const navigation=useNavigation();
      const navigation=useNavigation();
   // const {business}=route.params;

    return (
        <TouchableOpacity style={styles.container} onPress={()=>navigation.push('Businessdetails',{Business:business})}>
                  <Image source={business.image}style={styles.image}/>
                  <View>
                      
                  <Text  style={{ fontFamily:"outfit-medium",color:"grey",fontSize:17,height:17}}>{business.shoetype}</Text>
                  
                  <Text style={{  fontFamily:"outfit",fontSize:13}}>{business.price}</Text>
    
                 
              
               </View>
    
                
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    image:{
        width:150,
        height:120,
        borderRadius:10
    },
    container:{
        padding:10,
        backgroundColor:"white",
        borderRadius:10,
    marginTop:-10
    },
    searchBarContainer:{
        marginTop:15,
        display:"flex",
        flexDirection:"row",
        gap:10
    
      }
})