import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './app/LoginScreen.jsx';
import Header from './app/Header.jsx';
import Footer from './app/Footer.jsx';
import HomePage from './app/HomePage.jsx';
import Card from './app/Card.jsx';
import data from './app/Items.js';
import Next from './app/Next.jsx';
import HorizontalScroll from './app/HorizontalScroll.jsx';
import { Dimensions, StyleSheet, Text, View, SafeAreaView, SectionList, FlatList, ScrollView, TouchableOpacity } from 'react-native';


const datalist=[
    {
        id:'1',
        title:'Homepage',
    }
];





const HomeScreen =({ navigation })=>{  
  
        return (  
            <View style={{width: '100%', backgroundColor: '#000', alignSelf: 'center', flex:1}}>
                <HomePage />
               
                    <FlatList 
                    data={data}
                    nestedScrollEnabled
                    // extraData={this.state}
                    style={{flex:1}}
                    renderItem={({ item }) =>
                           <View style={{marginTop: 0, width: '100%', flex:1 }} >
                                <View style={{paddingTop: 10,paddingBottom:0, flex:1,flexDirection: 'column', }}>
                                    <View style={{backgroundColor: '#000000',flex:1, paddingHorizontal: 20, borderRadius: 10, elevation: 1, shadowColor: "#0000002B", shadowRadius: 3, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 1.0}}>
                                        <Text style={{ color: "#fff", fontSize : 25,flex:1, fontWeight: 'bold', padding:7 }}>{item.title}</Text>
                                    </View>

                                   
                                    <FlatList data={item.innerArray}
                                      // extraData={this.state}
                                      horizontal={true}
                                      style={{marginTop: 10}}
                                      renderItem={({ item: innerData, index }) =>
                                      <View 
                                      style={{width: 130 , height: 180,flex:1, backgroundColor: "#000", padding: 5}}
                                      >
                                      <TouchableOpacity
                                       style={{width: '100%', height: '100%'}}
                                       onPress={()=>navigation.navigate('Profile',{
                                         id: innerData.id,
                                         url: innerData.url,
                                         year: innerData.year,
                                         time: innerData.time,
                                         age: innerData.age,
                                         info: innerData.info,
                                         cast: innerData.cast,
                                         director: innerData.director,

                                         })} >
                              
                                        <Card
                                             key={innerData.id}
                                             url={innerData.url} 
                                         />
                                      </TouchableOpacity>
                                      </View>
                                    }
                                      
                                    />

                                </View>
                          </View>
                        }
                    /> 
                
      </View>
        );  
      
}  

const ProfileScreen =({ navigation, route })=>{   
       const { id, url, year, age, time, info, cast, director }= route.params;
       console.log(route.params);
        return ( 
            <View>  
                 
                 <Next
                    id={id}
                    url={url}
                    year={year}
                    age={age}
                    info={info}
                    cast={cast}
                    director={director}
                    time={time}
                  />
            </View>  
    );  
}  

const Stack = createStackNavigator();


function App(){
  return (
      <NavigationContainer>
       <Stack.Navigator>     
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            // options={{
            //    headerStyle: {
            //       backgroundColor: 'transparent',
            //     },
            //    headerTitle: props=> <Header />
            //    }}
             />
          <Stack.Screen name="Profile" component={ProfileScreen} />
       </Stack.Navigator>
      </NavigationContainer>           
  );
  
}



export default App;