// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Button } from 'react-native';
import Login from "./Components/login";
import About from "./Components/about";
import Register from "./Components/register"
import Icon from 'react-native-vector-icons/MaterialIcons';

const lightBlue =  "#3EC6FF"
const darkBlue = "#003366"
const grayBackground = "#EFEFEF"

export default class Tugas13 extends Component{
    render(){
        return(
          // <Login />            
          // <About />          
          <Register />  

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logoBar: {
        paddingTop: 40,
        backgroundColor: "white",
        flexDirection: 'row',
        alignItems: 'center',
    },
    form:{
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    textInput: {
      margin: 15,
      padding:5,
      height: 40,
      borderColor: "#003366",
      borderWidth: 1      
    },
    buttonSub: {
      backgroundColor: '#003366',
      width:100,
      margin: 15,
    }
})

