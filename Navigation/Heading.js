//import React from 'react'
import React,{useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Heading({text,isViewAll=false}) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{text}</Text>
            
            {isViewAll && <Text style={{color:"#8E3FFF",}}>View All</Text>}
        </View>
    )
}



const styles=StyleSheet.create({  
    container:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
marginTop:-10
    },
    heading:{
        fontSize:20,
      //  fontFamily:"outfit-medium",
        marginBottom:18,
        padding:2,
        
       // backgroundColor:'red'
    },

})
  