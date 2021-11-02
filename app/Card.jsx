import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, Button, Image, ScrollView, ImageBackground } from 'react-native';

function Card(props)
{
    return(
            <View style={{
                height: 180,
                width: 130,
                flex:1
                
            }}
            >
            <ImageBackground 
                source={props.url}
                style={{width: '100%', height: '100%', flex:1}}
            />
            </View>
    );
}

export default Card;