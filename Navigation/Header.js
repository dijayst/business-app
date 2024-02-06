
import { Text, View ,StyleSheet, Image,TextInput} from 'react-native';
import SearchBar from './SearchBar';
//import Colors from './Colors';
import {FontAwesome} from "@expo/vector-icons";
//import { useState } from 'react';
import React,{useState,useEffect} from 'react'


export default function Header() {
  const [user, setuser] = useState() 

  return (
        <View style={styles.container}>
          {/*Header*/}
          <View style={styles.ProfileMainContainer}>
          <View style={styles.ProfileContainer}>
              <Image source={require("../image1/alpha.jpg")} style={styles.userimage}/>
              <View>
                <Text style={{color:"white",fontFamily:'oufit-medium'}}>Welcome,</Text>
                <Text style={{color:"white",fontSize:20,fontFamily:'oufit'}}>Game Play</Text>
              </View>
            </View>
          
          <FontAwesome name="bookmark-o" size={24} color="white"/>
            
            </View>

            <View style={styles.searchBarContainer}>
           <TextInput placeholder="search" style={styles.textinput}/>
           <FontAwesome name="search" color={"#8E3FFF"} size={24} style={styles.searchbtn}/>
       </View>
        </View>
    )
}


//{ flex: 1, justifyContent: 'center', alignItems: 'center' }
const styles =StyleSheet.create({
    container:{
      backgroundColor:"#8E3FFF",
      padding:20,
     // margin:-20,
      width:"100%",
      paddingTop:19,
      borderBottomLeftRadius:25,
      borderBottomRightRadius:25,

     // backgroundColor: "#c542f5",
     // flex:1,
     // color:"grey",
    //  height: 250,
    //paddingHorizontal:0,
    //borderRadius:5
    },ProfileMainContainer:{
      
      display:"flex",
      flexDirection:"row",
      alignContent:"center",
      justifyContent:"space-between"
    },
    body:{
      backgroundColor:'pink',
      padding:40,
      marginTop:5,
      fontSize:20,
  
    },
    bold:{
      fontWeight:'bold',
      backgroundColor:'white',
      borderRadius:12,
      width:150,
      height:30
  
    },
    ProfileContainer:{
      display:"flex",
      flexDirection:"row",
      alignContent:"center",
      gap:10
    },
  textinput:{
    padding:7,
    paddingHorizontal:16,
    backgroundColor:"white",
    borderRadius:8,
    width:"85%",
    fontSize:16,
   // fontFamily:'oufit'
  },
  searchBarContainer:{
    marginTop:15,
    display:"flex",
    flexDirection:"row",
    gap:10

  },
  searchbtn:{
    backgroundColor:"white",
    padding:10,
    borderRadius:8
  },
  userimage:{
    width:45,
    height:45,
    borderRadius:99
  }
  })