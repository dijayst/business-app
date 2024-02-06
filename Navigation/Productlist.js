import React ,{useState,useEffect}from 'react'
import { View, Text,StyleSheet,FlatList,TouchableOpacity,Dimensions, Image } from 'react-native'
import { print } from './GlobalApi'

  
const WIDTH=Dimensions.get("window").width;
const HEIGHT=Dimensions.get("window").height;

export default function Productlist() {
      
  const [imgActive, setimgActive] = useState(0);
  const onchange=(nativeEvent)=>{
      if(nativeEvent){
          const slide=Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
          if(slide !=imgActive){
              setimgActive(slide);
          }
      }
  }
  
  

    return (
        <View>
            
   <View style={styles.minibtn}>
<FlatList 
pagingEnabled
horizontal
showsHorizontalScrollIndicator={false}
data={[{id:0,name:"All"},...print.data]}
style={styles.imagev}
 renderItem={({item,index})=>{return(
 <TouchableOpacity  onPress={()=>setimgActive(index)} style={[styles.minibutton,imgActive === index &&{backgroundColor:"#40ac01"}]}   >
    <Image source={item.image1} alt="img" style={styles.minibutton1} />
   <Text style={styles.minibutton1}>{item.shoetype}</Text>
 </TouchableOpacity>)}}/>
 </View>
        </View>
    )
}


const styles=StyleSheet.create({
  container:{
    backgroundColor:"white"
  },
  category:{
    marginBottom:50,
    marginLeft:60,
  fontSize:30,
  },
 jsvarra:{
display:"flex",
flexWrap:"wrap",
flexDirection:"row",
justifyContent:"center",
},
jsicon:{
  display:"flex",
  flexWrap:"wrap",
  flexDirection:"row",
  justifyContent:"center",
  },
  jstouch:{
backgroundColor:"red",
width:120,
height:120,
borderRadius:5,
marginTop:17,
marginLeft:17,
padding:5,

  },
  jsimage:{
    width:114,
    height:90,
    borderRadius:5,
    margin:-2,
  },
  text:{
    backgroundColor:"yellow",
    height:45,
    borderRadius:5,
    margin:-2,
    width:114,
    marginTop:3,
  },
minibtn:{
flexDirection:"row",
width:199,
height:40,
//backgroundColor:"red",
justifyContent:"space-between",
},
minibutton:{
  backgroundColor:"coral",
width:55,
height:90,
borderRadius:25,
marginLeft:10,
padding:10,
fontSize:100,
},

sandleimage:{

width:155,
height:190,
marginLeft:10,
padding:10,
fontSize:100,
},
imageview:{
  backgroundColor:"red",
  marginTop:70,
  height:250,
  width:280,
  alignContent:"center",
  
},
imagev:{
  width:240,
  //height:240,
  borderRadius:5,
  margin:2,
  flexDirection:"row",
},
wrap:{
position:"absolute",
bottom:0,
flexDirection:"row",
alignSelf:"center",
},
dotactive:{margin:3,
  color:"red",
},
dot:{
//margin:3,
//color:"black"
height:2.5,
width:10,
backgroundColor:"grey",
marginHorizontal:3,
},/*
    container:{
      backgroundColor:"white"
    },
    category:{
      marginBottom:50,
      marginLeft:60,
    fontSize:30,
    },
   jsvarra:{
  display:"flex",
  flexWrap:"wrap",
  flexDirection:"row",
  justifyContent:"center",
  },
  jsicon:{
    display:"flex",
    flexWrap:"wrap",
    flexDirection:"row",
    justifyContent:"center",
    },
  jsicon:{
  display:"flex",
  flexDirection:"row",
  
  },
    jstouch:{
  backgroundColor:"red",
  width:120,
  height:120,
  borderRadius:5,
  marginTop:17,
  marginLeft:17,
  padding:5,
  
    },
    jsimage:{
      width:114,
      height:70,
      borderRadius:5,
      margin:-2,
    },
    text:{
      backgroundColor:"yellow",
      height:45,
      borderRadius:5,
      margin:-2,
      width:114,
      marginTop:3,
    },
  */
  
  

    container2:{
      backgroundColor:"#ecf9e0",
  
    },
    category:{
      marginBottom:50,
      marginLeft:60,
    fontSize:30,
    },
   jsvarra:{
  display:"flex",
  flexWrap:"wrap",
  flexDirection:"row",
  justifyContent:"center",
  },
  jsicon:{
    display:"flex",
    flexWrap:"wrap",
    flexDirection:"row",
    justifyContent:"center",
    },
  //jsicon:{display:"flex",flexDirection:"row",},
    jstouch:{
  backgroundColor:"red",
  width:120,
  height:120,
  borderRadius:5,
  marginTop:17,
  marginLeft:17,
  padding:5,
  
    },
    jsimage:{
      width:214,
      height:90,
      borderRadius:5,
      margin:-2,
      padding:5,
      marginTop:15,
    },
    text:{
      backgroundColor:"yellow",
      height:45,
      borderRadius:5,
      margin:-2,
      width:114,
      marginTop:3,
    },
  minibtn:{
  flexDirection:"row",
  //width:399,
  height:25,
  //backgroundColor:"red",
  //justifyContent:"space-between",
  marginTop:7,
  //marginLeft:-5,
  },
  minibutton:{
    backgroundColor:"#40ac01",
  //width:75,
  height:25,
  borderColor:"black",
  borderRadius:25,
  marginLeft:10,
  padding:10,
  fontSize:100,
  alignItems:"center",
  },
  minibutton1:{
  //height:60,
  //width:48,
  fontSize:13,
  borderRadius:25,
  //marginLeft:-2,
  marginTop:-9.5,
  },
  clickimage:{
  width:155,
  height:190,
  marginLeft:10,
  padding:10,
  fontSize:100,
  },
  imageview:{
  //backgroundColor:"red",
    marginTop:-90,
    height:250,
    width:280,
    alignContent:"center",
    
  },
  
  imageview1:{
   // backgroundColor:"red",
    marginTop:70,
    height:250,
    width:280,
    alignContent:"center",
    
  },
  imagev:{
   // backgroundColor:"red",
   // width:240,
    //height:240,
    borderRadius:5,
    margin:2,
    flexDirection:"row",
  },
  wrap:{
  position:"absolute",
  bottom:0,
  flexDirection:"row",
  alignSelf:"center",
  },
  dotactive:{margin:3,
    color:"red",
  },
  dot:{
  //margin:3,
  //color:"black"
  height:2.5,
  width:10,
  backgroundColor:"grey",
  marginHorizontal:3,
  },container1:{
      backgroundColor:"green"
    },
    bannerContainer:{
      marginTop:-1000,
      paddingTop:1000,
      alignItems:"center",
      overflow:"hidden",
    },/*
    banner:scrollA=>({
    //  width:260,
      height:290,
      justifyContent:"center",
  width:'200%',
  transform:[{
    translateY:scrollA,
  },{
    scale:scrollA.interpolate({
      inputRange:[-Banner_H,0,]
    })
  }]
  
  }),*/
    category:{
      marginBottom:50,
      marginLeft:60,
    fontSize:30,
    },
   jsvarra:{
  display:"flex",
  flexWrap:"wrap",
  flexDirection:"row",
  justifyContent:"center",
  },
  jsicon:{
    display:"flex",
    flexWrap:"wrap",
    flexDirection:"row",
    //justifyContent:"flex-start",
  marginRight:130
    },
    jstouch:{
  backgroundColor:"white",
  width:120,
  height:130,
  borderRadius:5,
  marginTop:17,
  marginLeft:17,
  padding:5,
    },
    jsimage:{
      width:114,
      height:70,
      borderRadius:5,
      margin:-2,
     // alignItems:"center",
    },
    text:{
      backgroundColor:"white",
      height:45,
      borderRadius:5,
      margin:-2,
      width:114,
      marginTop:3,
    },
  
  })
  
  