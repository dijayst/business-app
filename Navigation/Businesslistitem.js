import React from 'react'
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
import { print } from './GlobalApi';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";

export default function Businesslistitem({business,Booking}) {
    const navigation=useNavigation();
    
    return (
        <TouchableOpacity style={styles.container} onPress={()=>navigation.push("Businessdetails",{Business:business})}>
        <Image source={business.image1} alt="img" style={styles.image}/>
        <View style={styles.subcontainer}>
            <Text style={{fontFamily:"outfit",color:"#EDEDED",fontSize:15}}>{business.title}</Text>
            <Text style={{fontFamily:"outfit-bold",fontSize:18}}>{business.price}</Text>
            <Text style={{fontFamily:"outfit",color:"#EDEDED",fontSize:16}}>
            <Ionicons name="location-sharp" size={24} color="#8E3FFF" />{business.shoetype}
            </Text>
    
        </View>

   </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    subcontainer:{display:"flex",
gap:7},
    container:{padding:10,
    backgroundColor:"white",
    borderRadius:15,
    marginBottom:15,
    display:"flex",
    flexDirection:"row",
    gap:10
},

    image:{width:100,
    height:100,
borderRadius:15,


}
})