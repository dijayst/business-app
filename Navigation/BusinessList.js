import React,{useState,useEffect} from 'react'
import { View, Text,StyleSheet,Dimensions,FlatList,Image,TouchableOpacity} from 'react-native';
import Heading from './Heading';
import { print } from './GlobalApi';
import Businesslistsmall from './Businesslistsmall';


const WIDTH=Dimensions.get("window").width;
const HEIGHT=Dimensions.get("window").height;

export default function BusinessList() {
    
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
        <View style={{marginTop:9}}>
            <Heading text={"Latest Business"} isViewAll={true}/>
                 
          
<FlatList 
horizontal
showsHorizontalScrollIndicator={false}
data={print.data}
 renderItem={({item,index})=>(
     <View style={{marginRight:10}}><Businesslistsmall  business={item}/></View>
                
              )}
 />

        </View>
    )
}



const styles=StyleSheet.create({
    catcontainer:{
flex:1,
alignItems:"center"
    },
    Heading:{
      fontSize:20,
     fontFamily:"outfit-medium",
      marginBottom:10,
    },
    sliderimg:{
      width:270,
      height:150,
      borderRadius:20,
      objectFit:"contain"
    },
    categorycontainer:{
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between"
    },
    iconcontainer:{
      backgroundColor:"#8E3FFF",
      padding:17,
    },






    last:{height:50,
  backgroundColor:"blue",

  },
  scro:{},
    indicator:{
      height:2.5,
      width:10,
      backgroundColor:"grey",
      marginHorizontal:3,
      borderRadius:2,
  
    },
    container:{
     // backgroundColor:"#ecf9e0"#fff,
   
  backgroundColor:"#efe8f9",
  height:"100%",
  width:"100%",
  flex:1,

    },
    category:{
    
    marginTop:10,
    fontWeight:"bold",
    fontSize:22,
    color:"black",
    marginLeft:9
    },
   jsvarra:{
  display:"flex",
  flexWrap:"wrap",
  flexDirection:"row",
  //justifyContent:"center",
  },
  jsicon:{
    display:"flex",
    flexWrap:"wrap",
    flexDirection:"row",
    //justifyContent:"center",
    },
  //jsicon:{display:"flex",flexDirection:"row",},
    jstouch:{
  //backgroundColor:"red",
  width:120,
  height:180,
  borderRadius:5,
  marginTop:0,
  marginLeft:17,

 // padding:5,
  
    },underimg:{
      verticalAlign:"top",
      display:"inline-block",
      width:"120px",
      marginLeft:-90,
      marginTop:20,
      backgroundColor:"green"
    },
    list:{flexDirection:"row",
  flexWrap:"wrap"},
    jsimage:{
      backgroundColor:"red",
      width:"100%",
      height:90,
      borderRadius:5,
      margin:-2,
      padding:5,
      marginTop:15,
      //padding
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
    marginTop:10,
    fontWeight:"bold",
    fontSize:20,
    color:"#000000",
    marginLeft:9,
  //flexDirection:"row",
  //width:199,
  //height:40,
  //backgroundColor:"red",
  //justifyContent:"space-between",
  //marginTop:-175,
  //marginLeft:-5,
  },
  minibutton11:{
  flex:1,resizeMode:"stretch"},
  
  minibutton12:{borderRadius:150,
    flex:1,resizeMode:"stretch"},
  minibutton:{
    //backgroundColor:"red",
  width:265,
  height:170,
  //borderRadius:25,
  //padding:10,
  marginTop:0
  //fontSize:100,
  //alignItems:"center",
  },
  minibutton1:{
      width:350,
      height:350,
      borderRadius:5,
      marginLeft:-325,
      padding:10,
      fontSize:100,
  marginTop:-30,
  objectFit:"cover",
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
    //alignContent:"center",
    
  },
  
  imageview1:{
   // backgroundColor:"red",
    marginTop:70,
    height:250,
    width:280,
   // alignContent:"center",
    
  },
  imagev:{
    width:"100%",
    height:"29%",
   // backgroundColor:"yellow",
    borderRadius:25,
   // marginLeft:20,
    marginTop:20,

   // margin:2,
   // flexDirection:"row",
  },
  wrap:{
    width:WIDTH,
    height:HEIGHT*0.25,
    marginTop:10,
    marginLeft:9,
   // marginLeft:25,
   // padding:20,
 // position:"absolute",
  //bottom:0,
  //flexDirection:"row",
  //alignSelf:"center",
  },minibutton4:{
    flexDirection:"row",
    flexWrap:"wrap"
  },
  
  wrap1:{
    width:"20%",
    height:HEIGHT*0.25,
    marginTop:10,
    marginLeft:9,
   // marginLeft:25,
   // padding:20,
 // position:"absolute",
  //bottom:0,
  //flexDirection:"row",
  //alignSelf:"center",
  },
  dotactive:{margin:3,
    color:"red",
  },
  dot:{
  //margin:3,
  //color:"black"
  height:2.5,
  width:10,
  backgroundColor:"#EDEDED",
  marginHorizontal:3,
  }
  })
  
