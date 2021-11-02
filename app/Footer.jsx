import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, Button, Image } from 'react-native';

function Footer()
{
    return(
        <View 
           style={{
               flexDirection: "row",
               flex: 1,
               height: 40,
               justifyContent: "space-around",
               alignItems: "flex-end",
               // backgroundColor: "black",
           }}
        >
           <View>
              <Image 
                style={{
                    width:35,
                    height:35,
                }}
                source={require('.././assets/home.png')}
             />
              <Text>Home</Text>   
           </View>
           <View>
              <Image 
                style={{
                    width:35,
                    height:35,
                }}
                source={require('.././assets/search.png')}
             />
              <Text>Search</Text>   
           </View>
           <View>
              <Image 
                style={{
                    width:35,
                    height:35,
                }}
                source={require('.././assets/download.png')}
             />
              <Text>Downloads</Text>   
           </View>
           <View>
              <Image 
                style={{
                    width:35,
                    height:35,
                }}
                source={require('.././assets/home.png')}
             />
              <Text>Home</Text>   
           </View>
        </View>
    );   
}

export default Footer;