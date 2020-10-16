import React, { Component } from 'react';
import { Platform, 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  ScrollView,
  Image, 
  TouchableOpacity, 
  Button, 
  KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const lightBlue =  "#3EC6FF"
const darkBlue = "#003366"
const grayBackground = "#EFEFEF"

export default class Register extends Component{
    render(){
        return(
          <KeyboardAvoidingView
            behavior= {Platform.OS=="ios"? "padding" : "height"}
            style= {styles.container}
          >
            <ScrollView>
              <View>
                  <View style={styles.logoBar}>
                      {/* <Image source={require('../Images/logo2.png')} style={{width: 400, height: 100}}/>  */}
                  </View>
                  <Text style={styles.loginText}>LOGIN</Text>
                  <View style={styles.form}>
                    <Text style={styles.formLabel}>Username</Text>
                    <TextInput 
                      placeholder="Username"
                      selectionColor={lightBlue}
                      style={styles.textInput}
                      />
                  </View>
                  <View style={styles.form}>
                    <Text style={styles.formLabel}>Email</Text>
                    <TextInput 
                      placeholder="Email"
                      selectionColor={lightBlue}
                      style={styles.textInput}
                      />
                  </View>
                  <View style={styles.form}>
                    <Text style={styles.formLabel}>Password</Text>
                    <TextInput
                      secureTextEntry={true}
                      placeholder="Password"
                      style={styles.textInput}
                      />
                  </View>
                  <View style={styles.form}>
                    <Text style={styles.formLabel}>Ulangi Password</Text>
                    <TextInput
                      secureTextEntry={true}
                      placeholder="Ulangi Password"
                      style={styles.textInput}
                      />
                  </View>

                    <View style={styles.buttonAlign}>
                      <TouchableOpacity >  
                        <Button
                          title="LOGIN"
                          color="grey"
                          style={styles.theButton}
                          ></Button>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.atau}>ATAU</Text>
                    <View style={styles.buttonAlign}>
                      <TouchableOpacity>  
                        <Button
                          title="REGISTER"
                          color="#003366"
                          ></Button>
                      </TouchableOpacity>
                    </View>
                  </View>


            </ScrollView>
          </KeyboardAvoidingView>

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
    loginText:{
      fontSize:24,
      textAlign:"center",
      color:darkBlue,
      marginVertical:20
    },
    form:{
        marginHorizontal:30,
        marginVertical:5,
        alignContent: "center",
    },
    formLabel:{
      color:darkBlue

    },
    textInput: {
      padding:10,
      height: 40,
      borderColor: "#003366",
      borderWidth: 1,
    },
    buttonAlign: {
      justifyContent: "center",
      // flexDirection: "column",
      backgroundColor: "grey",
      alignItems: "center",
      padding:10,
      borderRadius:15,
      marginHorizontal:30,
      marginBottom:10
    },
    atau: {

      fontSize:20, 
      color: lightBlue, 
      alignItems:"center"
    }
})

