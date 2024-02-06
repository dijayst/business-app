import React from 'react'
import { View, Text ,TouchableOpacity,FlatList,StyleSheet,Image} from 'react-native';
import { print } from './GlobalApi';
import Heading from './Heading';

export default function Businessphote({business}) {
    return (
        <View>
           <Heading text={"Photos"}/>
           <Image source={require("../image1/images21.jpg")} style={{width:"100%",flex:1,height:250,marginTop:-19 ,borderRadius:15,margin:7,  }} />
       
        </View>
    )
}


const styles = StyleSheet.create({
    iconcontainer:{},
    container:{}
})