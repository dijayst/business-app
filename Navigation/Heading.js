//import React from 'react'
import React,{useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Heading({text,isViewAll=false}) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{text}</Text>
            
            {isViewAll && <Text style={{color:"#8E3FFF",marginRight:20,fontSize:10.2,fontWeight:"bold"}}>View All</Text>}
        </View>
    )
}



const styles=StyleSheet.create({  
    container:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
marginTop:-2
    },
    heading:{
        fontSize:16,
       fontFamily:"outfit-medium",
        marginBottom:19,
        padding:2,
        marginLeft:15,
        fontWeight:"bold",
        marginBottom:11
    //  backgroundColor:'red'
    },

})
  