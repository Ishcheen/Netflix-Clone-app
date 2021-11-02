import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, Button, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';

function Next(props)
{
    return(
        <View
            style={{
                  alignItems: 'center',
                 backgroundColor: "#000",
                 height:'100%',
               }}
        >
        <ImageBackground blurRadius={4} source={props.url} style={{ height: 600, width: '200%', justifyContent:'center', alignItems: 'center' }} >
           <Image
              style={{ 
                  height:200,
                  width:150,
                  flexDirection: 'row',
                  borderRadius: 10,
                  position: 'absolute',
                  top:50,
                  

              }}
              source={props.url}
           />
           <View style={{ flexDirection: 'row', justifyContent:'space-around', width:'30%'}}>
               <Text style={{ color:"grey", fontSize:15, top: 85}}>{props.year}</Text>
               <Text style={{ color:"grey", fontSize:15, top: 85}}>{props.age}</Text>
                <Text style={{ color:"grey", fontSize:15, top: 85}}>{props.time}</Text>
           </View>
           
           <TouchableOpacity style={{ flexDirection: "row", width: '70%', top:95, height: 40, backgroundColor: "#fff", justifyContent: 'center', alignItems:'center', borderRadius:5 }} activeOpacity={0.5}>
                <Image
                 style={{
                     height: 20,
                     width: 20,
                 }}
                 source={require('.././assets/play.png')}
                />
                <Text style={{ fontSize: 16}}> Play</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection: "row", width: '70%', top:105, height: 40,backgroundColor: 'rgba(0, 0, 0, 0.2)', justifyContent: 'center', alignItems:'center', borderRadius:5 }} activeOpacity={0.5}>
                <Image
                 style={{
                     height: 20,
                     width: 20,
                 }}
                 source={require('.././assets/download1.png')}
    
                />
                <Text style={{ fontSize: 16, color:"#fff"}}> Download</Text>
              </TouchableOpacity>
              <View style={{ flexDirection:'row', flexShrink:1,width:'50%', left:10, zIndex:1}}>
              <Text style={{ fontSize: 15, color:"#fff", top:130, flex:1, flexWrap:'wrap'}}>{props.info}</Text>
              </View>
              <View style={{position: 'absolute', borderColor: 'none',backgroundColor: 'rgba(0, 0, 0, 0.6)', height: 300, width: '100%', top:400 }}>
            </View>
              <View style={{ justifyContent:'flex-start', alignItems:'flex-start',left:-10,zIndex:1}}>
              <Text style={{ color: "#909090", fontSize: 12, top:135,}}><Text style={{ fontWeight:'bold'}}>Starring:</Text>{props.cast}</Text>
              <Text style={{ color: "#909090", fontSize: 12, top:139,}}><Text style={{ fontWeight:'bold'}}>Director:</Text>{props.director}</Text>
              </View>


              <View style={{ flexDirection:'row', justifyContent:'space-around', top:150, left:10,width:'50%'}}>
                 <View>
                   <Image 
                     style={{
                         width:30,
                         height:30,
                     }}
                     source={require('.././assets/plus.png')}
                    />
                   <Text style={{ color: "#fff"}}>My List</Text>   
                </View>
                <View>
                   <Image 
                     style={{
                         width:30,
                         height:30,
                     }}
                     source={require('.././assets/thumbs.png')}
                    />
                   <Text style={{ color: "#fff"}}>Rate</Text>   
                </View>
                <View>
                   <Image 
                     style={{
                         width:30,
                         height:30,
                     }}
                     source={require('.././assets/share.png')}
                    />
                   <Text style={{ color: "#fff"}}>Share</Text>   
                </View>
              
              </View>
        </ ImageBackground>
        </View>
    );
}

export default Next;