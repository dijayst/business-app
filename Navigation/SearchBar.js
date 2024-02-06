import React,{useState} from 'react'
import { Text, TextInput, View,StyleSheet } from 'react-native'

import {Fontisto} from "@expo/vector-icons";

const SearchBar = () => {
    return (
       <View>
           <TextInput placeholder="search" style={styles.container}/>
           <Fontisto name="search" color="red" size={24} />
       </View>
    )
}

export default SearchBar

const styles=StyleSheet.create({
      
    container:{
      height:40,
      width:250,
      backgroundColor:"white",
      borderRadius:5,
      alignContent:"center"
  
    },})



    /*
    /*
 <View >
     <Text style={styles.category}>category</Text>
 </View>
 <View>
 <ScrollView onScroll={({nativeEvent}) =>onchange(nativeEvent)}
 showsHorizontalScrollIndicator={false}
 pagingEnabled
 horizontal
 >
     {print.data.map((item)=>{return(  <TouchableOpacity  onPress={()=>setimgActive(index)} 
 style={[styles.minibutton11,imgActive === item &&{backgroundColor:"#40ac01"}]} key={item.id}  >
   <Text >{item.shoetype}</Text>
   <Image source={item.image} alt="img" style={styles.minibutton11}/>
 </TouchableOpacity> )
  })
}
 </ScrollView>
 </View>
 
 <View>
 {print.data.map((item)=>{return(  <TouchableOpacity  onPress={()=>setimgActive(index)} 
 style={[styles.minibutton11,imgActive === item &&{backgroundColor:"#40ac01"}]}  key={item.id} >
   <Image source={item.image} alt="img" style={styles.minibutton11}/>
   <Text >{item.shoetype}</Text>
 </TouchableOpacity> )
  })
}
 </View>
 <View>
<Text>
    Latest Business
</Text>
 </View>
 <View style={styles.last}>
 {print.data.map((item)=>{return(  <TouchableOpacity  onPress={()=>setimgActive(index)} 
 style={[styles.minibutton11,imgActive === item &&{backgroundColor:"#40ac01"}]} key={item.id}  >
  <View> 
      <Image source={item.image} alt="img" style={styles.minibutton11}/>
   <Text >{item.shoetype}</Text>
   <Text>{item.price}</Text>

   </View>
 </TouchableOpacity> )
  })
}
 </View>*/