import React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function Profile() {
    const profilemenu=[{
        id:1,
        name:"Home",
        icon:"home"
    },{
        id:2,
        name:"My booking",
        icon:"bookmark-sharp"
    },{
        id:3,
        name:"Logout",
        icon:"log-out"
    },
]
//const {user}=useUser();

    return (
        <View>
        <View style={{padding:20,paddingTop:30,backgroundColor:"#8E3FFF"}}>
            <Text style={{fontSize:30,fontFamily:"outfit-bold",color:"white"}}>Profile</Text>
            <View style={{display:"flex",justifyContent:"center",alignItems:"center",padding:20,}}>
                <Image source={require("../image1/alpha.jpg")} style={{width:90,height:90,borderRadius:99}}/>
                <Text style={{fontFamily:"outfit-medium",fontSize:26,marginTop:8,color:"white"}}>Game Play</Text>
                <Text style={{fontFamily:"outfit-medium",fontSize:18,marginTop:8,color:"white"}}>lois@gmail.com</Text>
         
            </View>
        </View>
        <View style={{paddingTop:60}}>
            <FlatList data={profilemenu}
            renderItem={({item,index})=>
            <TouchableOpacity style={{display:"flex",flexDirection:"row",alignItems:'center',gap:10,marginBottom:40,paddingHorizontal:80}}>
                <Ionicons name={item.icon} size={35}  color="#8E3FFF"/>
                <Text style={{fontSize:20,fontFamily:"outfit",}}>{item.name}</Text>
            </TouchableOpacity>}/>
        </View>
        </View>
    )
}
