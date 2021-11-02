import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, SafeAreaView, Button, TextInput } from 'react-native';

function LoginScreen()
{
    var loggedIn="false"
    return(
        <View 
        style={{
            backgroundColor: "black",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            fontColor: "#fff",
         }}>
         <Text style={styles.text}>Login</Text>
         <TextInput  
          style={styles.input}
          placeholder="Your Email ID"
          placeholderTextColor= "#fff"
          textContentType="emailAddress"
          color="#fff"
         />
         <TextInput  
          style={styles.input}
          placeholder="Password"
          placeholderTextColor= "#fff"
          textContentType="password"
          color="#fff"
          secureTextEntry={true}
         />
         <View
           style={{
              width:180,
              flexDirection:"row",
              justifyContent:"space-around",
            }}
         >
            <Button
               title="log In"
               color="grey"
               style={styles.button}
               onPress={WelcomeBack}
             />
             <Button
               title="Sign Up"
               color="grey"
               style={styles.button}
               onPress={Welcome}
             />
          </View>
      </View>
    );
}
const styles = StyleSheet.create({
  button:{
     width:50,
     padding:10,
     marginTop:70,     
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height:50,
    width:300,
    margin:12,
    borderWidth:1,
    borderColor: "#fff",
    backgroundColor:"#000",
    borderRadius: 10,
    padding:10,
  },
  text:{
    fontSize: 40,
    color: "#fff",
    padding: 20,
    
  }
  
});

export default LoginScreen;

