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
            <Heading text={"categories"} isViewAll={true}/>

            <FlatList
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                data={print.data}
                renderItem={({ item, index }) => index<=4&&(
                    <TouchableOpacity style={styles.container} onPress={()=>navigation.push("Businesslistbycategoryscreen",{category:item.shoetype})}>
                    <View style={styles.iconcontainer}>
                      <Image source={item.image1} alt="img" style={{width:39,height:39,marginTop:-19 ,borderRadius:20,
        }} />
                    </View>
                    
                    <Text style={{marginTop:-12,fontFamily:"outfit-medium"}}>{item.shoetype}</Text>
                    </TouchableOpacity>)} />
                
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
flex:1,
alignItems:"center"
    },
    iconcontainer:{
        //backgroundColor:"#8E3FFF",
        padding:17,
        borderRadius:99,
        
      },
})