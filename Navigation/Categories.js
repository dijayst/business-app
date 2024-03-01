//import React from 'react'
import React,{useState,useEffect} from 'react'
import { View, Text,FlatList,StyleSheet, Image, TouchableOpacity} from 'react-native'
import Heading from './Heading';
import { print } from './GlobalApi';
import {useNavigation} from "@react-navigation/native";
export default function Categories() {
    const [categorie, setcategorie] = useState([])
    const navigation=useNavigation();
 
     useEffect(() => {
     setcategorie
       
   }, [])

    return (
        <View style={{marginTop:10}}>
            <Heading text={"Categories"} isViewAll={true}/>

            <FlatList
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                data={print.data}
                renderItem={({ item, index }) => index<=3&&(
                    <TouchableOpacity style={styles.container} onPress={()=>navigation.push("Businesslistbycategoryscreen",{category:item.shoetype})}>
                    <View style={styles.iconcontainer}>
                      <Image source={item.image1} alt="img" style={{width:39,height:39,marginTop:-19 ,borderRadius:20,
        }} />
                    </View>
                    
                    <Text style={{marginTop:-12,fontSize:10,fontFamily:"outfit-medium",fontWeight:"bold"}}>{item.shoetype}</Text>
                    </TouchableOpacity>)} />
                
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
flex:1,
alignItems:"center",
marginRight:5,
marginLeft:10,
//height:50,
//backgroundColor:"red",
//padding:5,
//borderRadius:15
    },
    iconcontainer:{
        //backgroundColor:"#8E3FFF",
        padding:17,
        borderRadius:99,
        
      },
})