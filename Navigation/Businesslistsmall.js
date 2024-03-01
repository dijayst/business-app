import React,{useState,} from 'react'
import { View, Text,Image,TouchableOpacity,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
//import {useNavigation} from "@react-navigation/native";
import {useNavigation} from "@react-navigation/native";
import { FontAwesome6 } from '@expo/vector-icons';

export default function Businesslistsmall({business}) {
   // const navigation=useNavigation();
      const navigation=useNavigation();
   // const {business}=route.params;

    return (
        <TouchableOpacity style={styles.container} onPress={()=>navigation.push('Businessdetails',{Business:business})}>
                  <Image source={business.image}style={styles.image}/>
                   <View style={{marginLeft:8,}}>
                      
                  <Text style={{  fontFamily:"outfit",fontSize:12,fontWeight:"bold"}}>{business.title}</Text>
    
                  <Text  style={{ fontFamily:"outfit-medium",color:"grey",fontSize:10,}}>{business.shoetype}</Text>
            
                  <Text style={{ width:55,borderRadius:5, fontFamily:"outfit",fontSize:8,color:"white",backgroundColor:"#8E3FFF"}}><FontAwesome6 name="naira-sign" size={12} color="#8E3FFF" />{business.price}</Text>
    
                 
              
               </View>
    
                
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    image:{
        width:147,
        height:90,
        borderRadius:10,
        marginTop:-4,
      // marginRight:2,
       marginLeft:-4
    },
    container:{
        padding:10,
        backgroundColor:"white",
        borderRadius:10,
    width:160,
    height:175,
    marginLeft:14,
    marginRight:-17
    },
    searchBarContainer:{
        marginTop:15,
        display:"flex",
        flexDirection:"row",
        gap:10
    
      }
})