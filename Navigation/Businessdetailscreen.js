import React,{useState} from 'react'
import { View, Text,Image, TouchableOpacity,StyleSheet ,TextInput,Modal, Linking} from 'react-native'
import {useNavigation} from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome6 } from '@expo/vector-icons';
import Heading from './Heading';
import { ScrollView } from 'react-native-gesture-handler';
import Businessphote from './Businessphote';
import Addtocart from './Addtocart';



export default function Businessdetailscreen({navigation,route}) {
    const {business,id,image1,price,description,shoetype,icon,icon1,icon2,icon3,icon4,reviews,cart,title}=route.params.Business;
   // const navigation=useNavigation();
   
   const [readmore, setreadmore] = useState(false)
   const handlereadmore=()=>{
     setreadmore(!readmore)
   }
   
   const [showModal, setshowmodal] = useState(false)
   const handleshowmodal=()=>{
     setshowmodal(!showModal)
   }

   const [icons, seticon] = useState(false)
   const handleicon=()=>{
   if(icons===false){
     setreviews(reviews+1)
     seticon(!icons)
         }
         return false
   }
     const [icons1, seticon1] = useState(false)
     const handleicon1=()=>{
       if(icons1===false){
         setreviews(reviews+1)
         seticon1(!icons1)
             }
             return false
       }
     const [icons2, seticon2] = useState(false)
     const handleicon2=()=>{
       if(icons2===false){
         seticon2(!icons2)
         setreviews(reviews+1)
       }
       return false
       }
     const [icons3, seticon3] = useState(false)
     const handleicon3=()=>{
       if(icons3===false){
         seticon3(!icons3)
         setreviews(reviews+1)
       }
       return false
     }
     const [icons4, seticon4] = useState(false)
     const handleicon4=()=>{
       if(icons4===false){
         setreviews(reviews+1)
         seticon4(!icons4)
       }
       return false
     }
     
     console.log(icons)
     console.log(icons1)
     console.log(icons2)
     console.log(icons3)
     console.log(icons4)
     
     
     
    const onMessagebtnclick=()=>{
      Linking.openURL('mailto:'+business?.email+"?subject=I am looking for your service&body=Hi There,");
    }

    return  (
        <View>
        <ScrollView style={{height:"92%"}}>
   <TouchableOpacity style={styles.backbtncontainer}   onPress={()=>navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Image source={image1} alt="img" style={styles.image}/>
         <View style={styles.infocontainer}>
             <Text style={{fontFamily:"outfit-bold",fontSize:25}}>{shoetype}</Text>
           <View style={styles.subcontainer}>
             <Text style={{fontFamily:"outfit-medium",color:"#8E3FFF",fontSize:20}}>{title}</Text>
             <Text style={{color:"#8E3FFF",padding:5,borderRadius:5,fontSize:14}}><FontAwesome6 name="naira-sign" size={14} color="#8E3FFF" />{price}</Text>

        </View>
         </View>
         <View >
             <View style={{marginTop:6}}>
                 <Heading text={"Product Details"}/>
               
                 <Text style={{fontFamily:"outfit",color:"black",lineHeight:18,fontSize:16}} numberOfLines={readmore?10:5}>{description}</Text>
<TouchableOpacity onPress={setreadmore}>
    <Text style={{color:"#8E3FFF",fontSize:16,fontFamily:"outfit"}}> Read More </Text>
</TouchableOpacity>
             </View>

         <View style={{borderWidth:0.4,borderColor:"black",marginBottom:20}}></View>

         <Businessphote business={business}/>

       </View>
        </ScrollView>



        <View style={{display:"flex",flexDirection:"row",gap:8,margin:8}}>
          <TouchableOpacity style={styles.messagebtn} onPress={onMessagebtnclick}>
          <Text style={{textAlign:"center",fontFamily:"outfit-medium",fontSize:18,color:"#8E3FFF"}}> Message </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bookingbtn} onPress={()=>setshowmodal(true)}>
          <Text style={{textAlign:"center",fontFamily:"outfit-medium",fontSize:18,color:"white"}}>Add to Cart </Text>
      </TouchableOpacity>
</View>
<Modal animationType="slide"
 visible={showModal}>
<Addtocart  hidemodal={()=>setshowmodal(false)}/>
</Modal>
</View>
    )
}

/*
 <View style={{display:"flex",flexDirection:"row",gap:8,margin:8}}>
          <TouchableOpacity style={styles.messagebtn}>
          <Text style={{textAlign:"center",fontFamily:"outfit-medium",fontSize:18,color:"#8E3FFF"}}> Message </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bookingbtn}>
          <Text style={{textAlign:"center",fontFamily:"outfit-medium",fontSize:18,color:"white"}}> {cart} </Text>
      </TouchableOpacity>
</View>*/

const styles = StyleSheet.create({
    messagebtn:{padding:10,
        backgroundColor:"white",
        borderWidth:1,
        borderRadius:99,
        borderColor:"#8E3FFF",
      //  flex:1
    },
    image:{
        width:"100%",
        height:300
    },
    backbtncontainer:{
        position:"absolute",
        zIndex:10,
        padding:20
    },
    
jsicon:{
    display:"flex",
    flexWrap:"wrap",
    flexDirection:"row",
    //justifyContent:"flex-start",
  marginRight:130
    },
    infocontainer:{
        padding:20,
        display:"flex",
        gap:-5,
        marginTop:5
    },
    subcontainer:{
        display:"flex",
        flexDirection:"column",
        gap:5,
        alignContent:"center",
    },
    bookingbtn:{
        padding:10,
        backgroundColor:"#8E3FFF",
        borderWidth:1,
        borderRadius:99,
        borderColor:"#8E3FFF",
        flex:1
    }
})

/*             <View style={styles.jsicon}>
          {icons?<Icon name={icon} color="yellow" size={20} onPress={handleicon}/>:<Icon name={icon} color="white" onPress={handleicon} size={20} />}
          {icons1?<Icon name={icon1} color="yellow" size={20} onPress={handleicon1}/>:<Icon name={icon} color="white" size={20} onPress={handleicon1} />}
          {icons2?<Icon name={icon2} color="yellow" size={20} onPress={handleicon2}/>:<Icon name={icon} color="white" size={20} onPress={handleicon2}/>}
          {icons3?<Icon name={icon3} color="yellow" size={20} onPress={handleicon3}/>:<Icon name={icon} color="white" size={20} onPress={handleicon3} />}
          {icons4?<Icon name={icon4} color="yellow" size={20} onPress={handleicon4}/>:<Icon name={icon} color="white" size={20} onPress={handleicon4} />}
        
        </View>*/