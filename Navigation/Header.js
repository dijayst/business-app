
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
              <View >
                <Text style={{color:"white",fontFamily:'oufit-medium',fontSize:11}}>Welcome,</Text>
                <Text style={{color:"white",fontSize:16,fontFamily:'oufit',fontWeight:"bold"}}>Game Play</Text>
              </View>
            </View>
          <View style={{marginTop:34}}>
          <FontAwesome  style={{}} name="bookmark-o" size={24} color="white"/>
            </View>
            </View>

            <View style={styles.searchBarContainer}>
           <TextInput placeholder="Search" style={styles.textinput}/>
           <FontAwesome name="search" color={"#8E3FFF"} size={16} style={styles.searchbtn}/>
       </View>
        </View>
    )
}


//{ flex: 1, justifyContent: 'center', alignItems: 'center' }
const styles =StyleSheet.create({
    container:{
      backgroundColor:"#8E3FFF",
      //padding:20,
     // margin:-20,
      width:"100%",
      paddingTop:19,
      borderBottomLeftRadius:25,
      borderBottomRightRadius:25,

     // backgroundColor: "#c542f5",
     // flex:1,
     // color:"grey",
      height: 160,
    //paddingHorizontal:0,
    //borderRadius:5
    },ProfileMainContainer:{
      
      display:"flex",
      flexDirection:"row",
      alignContent:"center",
      justifyContent:"space-between",
      marginLeft:20,
      marginRight:25,
      //marginTop:18
      
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
      gap:10,
      //marginBottom:10
      marginTop:22
    },
  textinput:{
    padding:7,
    paddingHorizontal:16,
    backgroundColor:"white",
    borderRadius:8,
    width:"76%",
    marginLeft:20,
    fontSize:16,
    fontFamily:'oufit'
  },
  searchBarContainer:{
    marginTop:12,
    display:"flex",
    flexDirection:"row",
    gap:8,
    height:38

  },
  searchbtn:{
    backgroundColor:"white",
    padding:10,
    borderRadius:8
  },
  userimage:{
    width:37,
    height:37,
    borderRadius:99,
    marginTop:3
  }
  })