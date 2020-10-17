import React from 'react'
import { StyleSheet, TextInput, Text, View, Button, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SignIn = ({navigation})=>(
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTextA}>Welcome Back</Text>
            <Text style={styles.headerTextB}>Sign in to continue</Text>
        </View>
        <View style={styles.form}>
            <View style={styles.formInput}>
                <Text style={styles.formText}>Email</Text>
                <TextInput style={styles.formTextInput}
                value="dea.dania@gmail.com"
                // placeholder="deadania"
                // selectionColor={lightBlue}
                // style={styles.textInput}
                />
            </View>
            <View style={styles.formInput}>
                <Text style={styles.formText}>Password</Text>
                <TextInput
                    value="cobacobacoba"
                    secureTextEntry={true}
                    placeholder="Password"
                    style={styles.formTextInput}
                />
            </View>
            <View style={styles.formf}>
                <Text >Forgot Password ?</Text>
            </View>
            <TouchableOpacity style={styles.formButton} onPress={() => navigation.push('Home')} >
                <Text style={styles.fButtonText}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.formT}>
                <Text >-OR-</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <TouchableOpacity style={styles.bMed}>
                    <Icon color={"#3B5998"} name="facebook" size={20} />
                    <Text style={styles.bText}>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bMed}>
                    <Icon style={"#F14336"} name="google" size={20} />
                    <Text style={styles.bText}>Google</Text>
                </TouchableOpacity>
            </View>
        </View>
        

    </View>
) 
const styles = StyleSheet.create({
    container:{
        flex:1,
        fontFamily:"Montserrat",
        backgroundColor:"white"
    },
    header:{
        marginTop:100,
        marginLeft:30
    },
    headerTextA:{
        fontSize:25,
        fontWeight:"bold"
    },
    headerTextB:{
        fontSize:15,
        color:"#4D4D4D"
    },
    form:{
        margin:25,
        paddingVertical:50,
        padding:30,
        backgroundColor:"white",
        borderRadius:20,
        elevation:3
    },
    formInput:{
        paddingVertical:10
    },
    formTextInput:{
        color: "#4D4D4D",
        borderBottomColor: "#E6EAEE",
        borderBottomWidth:1
    },
    formf:{
        alignItems:"flex-end",
        paddingBottom:20
    },
    formButton:{
        borderRadius:5,
        backgroundColor:"#F77866",
        alignItems:"center",
        elevation:2,
    },
    fButtonText:{
        padding: 10,
        color:"white",
        fontWeight:"bold",
        fontSize:15

    },
    formT:{
        paddingVertical:20,
        alignItems:"center",
    },
    bMed:{
        padding:5,
        paddingHorizontal:25,
        borderRadius:5,
        backgroundColor:"white",
        alignItems:"center",
        elevation:2,
        flexDirection:"row"
    },
    bText:{
        padding:5,
        color:"#4D4D4D",
        fontWeight:"bold"
    }

})

export default SignIn
