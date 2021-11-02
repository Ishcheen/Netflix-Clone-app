import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, Button, Image } from 'react-native';

function Header()
{
    return (
        <View style={styles.container}>
        <Image 
           style={{
               width:50,
               height:50,
           }}
           source={{
               uri:'https://cdn.vox-cdn.com/thumbor/AwKSiDyDnwy_qoVdLPyoRPUPo00=/39x0:3111x2048/1400x1400/filters:focal(39x0:3111x2048):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png',
           }}
        />
        <Text style={styles.text}>TV Shows</Text>
        <Text style={styles.text}>Movies</Text>
        <Text style={styles.text}>My List</Text>
        </View>
    );
}
const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "transparent"
  },
  text:{
    fontSize: 18,
    color: "white",
    padding: 10,
    
  },
  
});

export default Header;