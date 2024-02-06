import React from 'react'
import { View, Text } from 'react-native'

export default 
function BookingScreen({route}) {
////const { Business } = route.params
//const businessId = route.params?.id;


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>BookingScreen!</Text>
      
{dataArray.map((item, index) => (<View key={item}>
        <Text >{item.selectedtim}</Text>
        <Text>{item.note1}</Text></View>
      ))}
    </View>

  );
}