import React, { useEffect,useState } from 'react'
import { View, Text,TouchableOpacity,StyleSheet, FlatList, ScrollView, KeyboardAvoidingView,TextInput, ToastAndroid } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import CalendarPicker from "react-native-calendar-picker";
import Heading from './Heading';
import {useNavigation} from "@react-navigation/native";
import BookingScreen from './BookingScreen';
import {useUser} from '@clerk/clerk-expo';


export default function Addtocart({hidemodal}) {
    const navigation=useNavigation();
    const [timeList, settimeList] = useState()
    const [selectedtime, setselectedtime] = useState()
    const [selectedDate, setselectedDate] = useState()
    const [note, setnote] = useState()
  const  {user}=useUser();
  
    useEffect(()=>{
        getTime()
    },[])
    const getTime=()=>{
        const timeList=[];
        for(let i=8; i<=12;i++){
            timeList.push({time:i+':00 AM'})
            timeList.push({time:i+':30 AM'})
     

     
        }
        for(let i=1; i<=7;i++){
            timeList.push({time:i+':00 PM'})
            timeList.push({time:i+':30 PM'})
     

     
        }
        settimeList(timeList);
    }

    const [dataArray, setDataArray] = useState({id:businessid,
        pickerValue: '',
    inputValue: '',

    });
   // let array=[];
    const handleAddToArray = () => {
       // event.preventDefault();
      // array.push(dataArray)
        if (note.trim() !== '') {
          setDataArray([...dataArray,selectedtime ,note]);
          setnote(''); // Clear the input field after adding to the array
         setselectedtime("")

        // setFormData({ ...formData, pickerValue: value });
 
        }
      }

    //  const handleNavigation = () => {
    ////    navigation.navigate("Booking", { Business: dataArray });
      //};
      
      const handleNavigation = () => {
         
        // Navigate to the "BusinessDetails" screen within the Bottom Tab Navigator
        navigation.navigate('Booking', {
          screen: 'BookingScreen',
          params: { Business: dataArray },
        });
      };
    


    
    /*


 const handleNavigation = () => {
    // Navigate to the "BusinessDetails" screen within the Bottom Tab Navigator
    navigation.navigate('BusinessTab', {
      screen: 'BusinessDetails',
      params: { Business: dataArray },
    });
  };





    const createnewbooking=()=>{
        if(!selectedtime||!selectedDate){
            ToastAndroid.show('please select Date and Time',ToastAndroid.LONG)
            return;
        }
 dataArray={pickerValue:user.moment(selectedDate).format('DD-MMM-YYYY'),
    inputValue:user.inputValue,
businessid:businessid}
    }*/

  //  const [input, setinput] = useState([])
    return (
        <ScrollView>
        <KeyboardAvoidingView style={{padding:20}}>
               <TouchableOpacity style={styles.backbtncontainer}   onPress={()=>hidemodal()}>
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text>
                Addtocart
            </Text>
            </TouchableOpacity>
            <Heading text={"Select Date"}/>
            <View style={styles.Calendarcontainer}>
                <CalendarPicker  onDateChange={setselectedDate} width={30}  minDate={Date.now()}todayBackgroundColor={"black"}selectedDayColor={"#8E3FFF"} todayTextStyle={"white"}selectedDayTextColor={"white"}/>
            </View>
            <View  style={{marginTop:20}}>
                <Heading text={"Select Time Slot"}/>
                <FlatList data={timeList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item,index})=>(<TouchableOpacity style={{marginRight:10}} onPress={()=>setselectedtime(item.time)} >
                    <Text style={[selectedtime==item.time? styles.selectedtime:styles.unselectedtime]}>{item.time}</Text>
                </TouchableOpacity>)}/>
            </View>
            <View style={{paddingTop:20}}>
                <Heading text="Any Suggestion NOTE"/>
                <TextInput placeholder="note" numberOfLines={4} value={note}
 multiline={true} style={styles.note} onChangeText={(text)=>setnote(text)}/>
            </View>
            <TouchableOpacity style={{marginTop:15}} onPress={() => {
       handleAddToArray()
        //handleNavigation(); // Call the navigation function after adding to the array
      }}>
                <Text style={styles.confirmbtn}>Confirm & Book</Text>
            </TouchableOpacity>


{dataArray.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}


 
        </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    confirmbtn:{textAlign:"center",
     fontFamily:"outfit-medium",
    fontSize:17,
    backgroundColor:"#8E3FFF",
   color:"white",
padding:13,
borderRadius:99,
elevation:2},
    note:{
     borderRadius:15,
     borderWidth:1,
     textAlignVertical:"top",
     padding:20,
     fontSize:16,
     fontFamily:"outfit",
     color:"black"

    },
    selectedtime:{padding:10,
        color:"White",
        paddingHorizontal:18,
    borderWidth:1,
borderRadius:99,
borderColor:"#8E3FFF",
backgroundColor:"#8E3FFF",},
    unselectedtime:{padding:10,
        color:"#8E3FFF",
        paddingHorizontal:18,
    borderWidth:1,
borderRadius:99,
borderColor:"#8E3FFF",},
    backbtncontainer:{
      //  position:"absolute",
        //zIndex:10,
      //  padding:20
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      marginBottom:20,
    },
    Calendarcontainer:{
        backgroundColor:"#8E3FFF",
        padding:20,
        borderRadius:15,


    }
})