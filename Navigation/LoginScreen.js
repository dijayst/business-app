import React from 'react'
import { View, Text,Image,StyleSheet, TouchableOpacity } from 'react-native'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../hooks/warmUpBrowser';



WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
    useWarmUpBrowser();

 
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
 
    return (
        <View style={{alignItems:"center"}}>
              <Image source={require("../image1/downloadh.jpg")} style={styles.Loginimg}/>
              <View style={styles.subContainer}>
                  <Text style={{fontSize:27,color:'white',textAlign:'center'}}>Let's Find 
                      <Text style={{fontWeight:'bold'}}>Professional Cleaning and repair
                      </Text> Service
                  </Text>
                  <Text style={{fontSize:17,color:'white',textAlign:"center",marginTop:20}}>
                      Best App to find services near you which delivers you a proffesional service
                  </Text>
                  <TouchableOpacity style={styles.button} onPress={onPress} >
                      <Text style={{textAlign:'center',
                    fontSize:17,
                    color:"#8E3FFF"}}>
                          Let's get Started
                      </Text>
                  </TouchableOpacity>
              </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Loginimg:{
        width:230,
        height:450,
        marginTop:70,
        borderWidth:4,
        borderColor:"#000000",
        borderRadius:15
    },
    subContainer:{
        width:'100%',
        backgroundColor:"#8E3FFF",
        height:'70%',
        marginTop:-140,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        padding :20
    },button:{
        padding:15,
        backgroundColor:'white',
        borderRadius:99,
        marginTop:18
    }
})