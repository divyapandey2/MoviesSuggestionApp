import React, {useState, useContext} from "react";
import {Text, View, Linking, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
// import MovieDetails from "./movieDetails";
import {PracticeContext, PracticeProvider} from './Context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HelpCenter() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingTxt}>-:Feel free to reach out:-</Text>
      <Text style={styles.headingTxt}>Divya Kumari</Text>
      <Text style={styles.headingTxt}>Contact Details</Text>

      <View style={styles.contactContainer}>
        <View style={styles.singleElement}>
            <Image source={require('./images/divimg.jpg')} style={styles.img}></Image>
            <Text style={styles.headingTxt}>Divya Kumari</Text>
            <Text style={styles.discTxt}>divyapandey090901@gmail.com</Text>
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={()=>{Linking.openURL('https://www.linkedin.com/in/divya-kumari-b2b755181/')}}>
                <Image source={require('./images/Linkedin.png')} style={styles.logoimg}></Image>
                <Text style={styles.discTxt}>Linkedin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={()=>{Linking.openURL('https://github.com/divyapandey2')}}>
                <Image source={require('./images/Github.png')} style={styles.logoimg}></Image>
                <Text style={styles.discTxt}>Github</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height:windowHeight,
        width: windowWidth,
        backgroundColor: '#ffffff' ,
        alignItems: 'center',

    },
    headingTxt: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 10
    },
    img:{
        margin: 15,
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    logoimg:{
        margin: 8,
        height: 25,
        width: 25,
        borderRadius: 200,
    },
    discTxt:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
        margin: 4
    },
    contactContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        elevation: 10,
    },
    singleElement:{
        marginLeft: 10,
        height: 350,
        width: 300,
        alignItems: 'center',
        backgroundColor: '#bdb8b7',
        elevation: 25,
        borderRadius: 10
    }
})