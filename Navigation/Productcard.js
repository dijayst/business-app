import React from 'react'
import { View, Text,StyleSheet,ScrollView,TouchableOpacity,Image, } from 'react-native'
import { print } from './GlobalApi'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState,useEffect } from 'react'
export default function BookingScreen (props,{route,navigation}) {
    
  const [comment, setcomment] = useState("")
  const handlecomment=(val)=>{
setcomment(val)
  }
  const [storecomment, setstorecomment] = useState([])
const  handlestorecomment =()=>{
  setstorecomment((storecomment)=>[...storecomment,comment])
  //props.navigation.navigate("Cart",{...cartt})
}
  const {id,title,description,Instock,sizes,sizem,sizel,image,icon,icon1,icon2,icon3,icon4,Cart,price}=props.route.params.item
  
  const { addItemToCart } = useContext(CartContext);
  
  function onAddToCart() {
    
  props.navigation.navigate("Addtocart",{
    addItemToCart})

    //addItemToCart(id);
  }

  const [cartt, setcartt] = useState([])
  const newimage={...props.route.params.item}
  const handleimage=(item)=>{
    console.log(cartt)
     //navigation.push('Cart')
 
    const newimage={...props.route.params.item}
  //setcartt([...cartt,newimage])
  
    setcartt(cartt=>[...cartt,newimage])

  //props.navigation.navigate("Addtocart",{cartt:cartt})
  
}
//console.log(cartt)
//console.log("whyy")
//console.log(cartt)




const amount=1


    
const handleClick = (item) => {
  // Update cart item quantity if already in cart
   if (cartt.some((cartItem) => cartItem.title === item.title)) {
    setcartt((cartt) =>
      cartt.map((cartItem) =>
        cartItem.title === item.title
          ? {
              ...cartItem,
              amount: cartItem.amount + 1
            }
          : cartItem
      )
    );
    return;
  }

  // Add to cart
  setcartt((cartt) => [
    ...cartt,
    { ...item, amount:1 } // <-- initial amount 1
  ]);
  
  props.navigation.navigate("Addtocart",{cartt:cartt})

};


  const [reviews, setreviews] = useState(0)
 
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
  
  
  
  
 // console.log(cartt)
  console.log(storecomment)
  console.log(comment)
/*
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>{
      console.log(res)
      console.log(res.data)
      setmyArray(res.data)
    })
    .catch(err=>{console.log(err)})
  })*/

  
 
  console.log(props.route.params.item)
  const scrollA=useRef(new Animated.Value(0)).current;
  //console.log("gfghjhgjh");
  //console.log(cartt);
    return (
        
      <View>
      <ScrollView>

      <View>
         
         {print.data.map((item)=>{return(
            
<TouchableOpacity  style={styles.jstouch} key={item.id} >
              <Image source={item.image}style={styles.jsimage}/>
              <Text style={{fontWeight:"bold",color:"#525252",fontSize:16}}>{item.price}</Text>
              <Text  style={{color:"grey",fontSize:12,height:17}}>{item.title}</Text>
          
             <View style={styles.jsicon}>
              <Icon  name={item.icon} color="yellow" size={17}/>
              <Icon name={item.icon1} color="yellow" size={17}/>
              <Icon name={item.icon2} color="yellow" size={17}/>
           </View>
           <View>
           <TouchableOpacity style={{backgroundColor:"#40ac01"}} ><Text>{item.Cart}</Text></TouchableOpacity>
           </View>
            </TouchableOpacity>
            
          )})}
    

  
          </View>
      {/* 
      
      
      
      
      <ScrollView>
           {myArray.map((item)=>{
      return(
        <View key={item.id}>
          <Text>{item.body}</Text>
   
          <Text>{item.title}</Text>
   
        </View>
      )
           })}
         </ScrollView>
         onPress={()=>navigation.navigate("Contact",item)}
        {navigation.getParam("title")}
        style={styles.banner(scrollA)}
        */}
   <View style={styles.bannerContainer}>
   
         <Image source={image} style={{borderRadius:10,width:"90%",marginVertical:10}} />
         <Text style={{fontSize:21,fontWeight:"bold",marginRight:130}}>{title}</Text>
       
         <Text>{description}</Text>
         <View style={styles.jsicon}>
           {icons?<Icon name={icon} color="yellow" size={20} onPress={handleicon}/>:<Icon name={icon} color="pink" onPress={handleicon} size={20} />}
           {icons1?<Icon name={icon1} color="yellow" size={20} onPress={handleicon1}/>:<Icon name={icon} color="pink" size={20} onPress={handleicon1} />}
           {icons2?<Icon name={icon2} color="yellow" size={20} onPress={handleicon2}/>:<Icon name={icon} color="pink" size={20} onPress={handleicon2}/>}
           {icons3?<Icon name={icon3} color="yellow" size={20} onPress={handleicon3}/>:<Icon name={icon} color="pink" size={20} onPress={handleicon3} />}
           {icons4?<Icon name={icon4} color="yellow" size={20} onPress={handleicon4}/>:<Icon name={icon} color="pink" size={20} onPress={handleicon4} />}
         <Text>{reviews}Review</Text>
         </View>
         <View>
           <TextInput style={{backgroundColor:"green",width:180,height:33,marginLeft:5}} placeholder="write a comment" onChangeText={handlecomment}/>
           <TouchableOpacity style={{backgroundColor:"red",width:50,height:33,marginTop:-33,marginLeft:189}} onPress={handlestorecomment}><Text>clicked</Text></TouchableOpacity>
     {storecomment.map((item)=>{return(<View key={item}><Text>{item}</Text></View>)})}
         </View>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
           <Text style={{justifyContent:"flex-start"}}>{Instock} out of stock</Text> 
           <Text style={{marginLeft:170,fontSize:15,fontWeight:"bold"}}>{price}</Text>
         </View>
         <View style={{ display: "flex",
     flexWrap: "wrap",
     flexDirection: "row",marginRight:150,width:150}}>
       
           <TouchableOpacity style={{backgroundColor:"green",width:30,borderRadius:5}} ><Text>{sizes}</Text></TouchableOpacity> 
         <TouchableOpacity style={{marginLeft:15,backgroundColor:"green",width:30,borderRadius:5,borderColor:"red"}}><Text>{sizem}</Text></TouchableOpacity>
         <TouchableOpacity style={{marginLeft:15,backgroundColor:"green",width:30,borderRadius:5}}><Text>{sizel}</Text></TouchableOpacity>
              </View>
       
         <TouchableOpacity style={{backgroundColor:"green"}} onPress={handleimage}><Text>{Cart}</Text></TouchableOpacity>
       </View>
          
           <Text>hellopo</Text>
           <View>
             
           {cartt.map((item)=>{return(<View key={item.id}>
             <Text>{item.title}</Text></View>)})}
            
   </View>
   </ScrollView></View>
          
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
    
    