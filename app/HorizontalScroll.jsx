import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, Button, Image, ScrollView, ImageBackground } from 'react-native';
import arr from './Items.js';
import Card from './Card.jsx'

function CreateCard(item)
{
    return (
        <Card
            key={item.id}
            url={item.url} 
        />
    );
}
function HorizontalScroll()
{
    return(
        <View
           style={{
                    flexDirection:"row",
                    flex:1,
                    justifyContent:'space-around',
                    // alignItems:'center'
                }}
        >
            <ScrollView
                horizontal={true}
                contentContainerStyle={{
                    width:1070,
                    justifyContent: 'space-between',
                }}
            >
            {arr.map(CreateCard)}
            </ScrollView>
        </View>
    );
}

export default HorizontalScroll;