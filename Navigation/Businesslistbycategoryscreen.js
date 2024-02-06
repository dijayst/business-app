import React,{useEffect} from 'react'
import { View, Text, FlatList ,StyleSheet,TouchableOpacity} from 'react-native'
import {useRoute,usenavigation} from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons'
import { print } from './GlobalApi';
import {useNavigation} from "@react-navigation/native";
import Businesslistitem from './Businesslistitem';
import BusinessList from './BusinessList';
export default function Businesslistcategoryscreen({navigation,route}) {
    const {category}=route.params;

   //const navigation=usenavigation();
  /*  useEffect(() => {
        effect
console.log("category",param.category);
    }, [])*/

    
    return (
        
  <View style={{padding:20,paddingTop:30}}>
      <TouchableOpacity style={{display:"flex",flexDirection:"row",gap:10,alignItems:"center"}} 
      onPress={()=>navigation.goBack()}>
          
  <Ionicons name="arrow-back-outline" size={30} color="black"/>
       
         <Text style={{fontSize:25,fontFamily:"outfit-medium"}}>{category}</Text>
         </TouchableOpacity>

        {print.data?.length>0? <FlatList
                data={print.data}
                style={{marginTop:15}}
                renderItem={({ item, index }) =>(
                    <Businesslistitem business={item}/>
          
                    )} />:
                    <Text style={{fontFamily:"outfit-medium",color:"#EDEDED",fontSize:20,textAlign:"center",marginTop:"20%"}}>No Business Found</Text>}
              
        </View>
    )
}




const styles = StyleSheet.create({
    
})