import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const lightBlue =  "#3EC6FF"
const darkBlue = "#003366"
const grayBackground = "#EFEFEF"

export default class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.logoBar}>
                    {/* <Image source={require('../Images/logo2.png')} style={{width: 400, height: 100}}/>  */}
                </View>
                <View style={styles.form}>
                  <Text style={styles.formLabel}>Username / Email</Text>
                  <TextInput 
                    placeholder="Username / Email"
                    selectionColor={lightBlue}
                    style={styles.textInput}
                    />
                  <Text style={styles.formLabel}>Password</Text>
                  <TextInput
                    secureTextEntry={true}
                    placeholder="Password"
                    style={styles.textInput}
                  />
                  <View style={styles.buttonAlign}>

                  <TouchableOpacity >  
                    <Button
                      title="LOGIN"
                      color="#003366"
                      style={styles.theButton}
                      ></Button>
                  </TouchableOpacity>
                  <Text style={{}}>atau</Text>
                  <TouchableOpacity>  
                    <Button
                      title="REGISTER"
                      color="grey"
                      ></Button>
                  </TouchableOpacity>
                  </View>
                </View>

            </View>


        )
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
        marginBottom:0
    },
    form:{
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
        flexDirection: "column",
        justifyContent:"space-between"
    },
    formLabel:{
      paddingLeft: 20,

    },
    textInput: {
      margin: 15,
      padding:5,
      height: 40,
      borderColor: "#003366",
      borderWidth: 1,
    },
    buttonAlign: {
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },
    // theButton: {
    //   padding: 20,
    //   margin: 30
    // }
})

