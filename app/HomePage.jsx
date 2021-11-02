import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, Dimensions, StyleSheet, Text, View, SafeAreaView, Button, TextInput, Image, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function HomePage()
{
    return(
        
        <ImageBackground source={require('.././assets/hoc1.jpg')} style={{width: '100%', height: '60%'}}>
           <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,justifyContent: 'flex-end', alignItems: 'center'}}>
             
             <View style={{position: 'absolute', borderColor: 'none',backgroundColor: 'rgba(0, 0, 0, 0.2)', height: 300, width: '100%', top:200 }}>
             </View>
             
             <View style={{ flexDirection: "row", justifyContent:'space-around',width:'45%'}}>
             <Text style={{ color: "#fff", fontSize : 12, alignItems: 'center', }}>Cerebral</Text>
             <Text style={{ color: "#fff", fontSize : 9, alignItems: 'center', }}>{'\u2B24'}</Text>
             <Text style={{ color: "#fff", fontSize : 12, alignItems: 'center', }}>Dark</Text>
             <Text style={{ color: "#fff", fontSize : 9,  alignItems: 'center', }}>{'\u2B24'}</Text>
             <Text style={{ color: "#fff", fontSize : 12, alignItems: 'center', }}>Thriller</Text>
             </View>

             {/* icons &text */}
            <View style={{
                flexDirection: "row",
                width: '80%',
                top:20,
                justifyContent: "space-around",
            }}>
              <View>
              <Image 
                style={{
                    width:35,
                    height:35,
                }}
                source={require('.././assets/plus.png')}
             />
              <Text style={{ color: "#fff"}}>My List</Text>   
           </View>
            <View >
              <TouchableOpacity style={{ flexDirection: "row", width: 80, height: 40, backgroundColor: "#fff", justifyContent: 'center', alignItems:'center', borderRadius:5 }} activeOpacity={0.5}>
                <Image
                 style={{
                     height: 20,
                     width: 20,
                 }}
                 source={require('.././assets/play.png')}
                />
                <Text style={{ fontSize: 16}}> Play</Text>
              </TouchableOpacity>
           </View>
            <View>
              <Image 
                style={{
                    width:35,
                    height:35,
                }}
                source={require('.././assets/info.png')}
             />
              <Text style={{ color: "#fff", left:5}}>Info</Text>   
           </View>
           </View>
            
             <Text style={{ color: "#000", fontSize : 45 }}></Text>
            </View>
           
        </ImageBackground>
        
    );
}

export default HomePage;