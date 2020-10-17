import React from 'react'
import { StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity,
Button } from 'react-native'

const SignUp = ({navigation})=>(
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTextA}>Welcome</Text>
            <Text style={styles.headerTextB}>Sign up to continue</Text>
        </View>
        <View style={styles.form}>
            <View style={styles.formInput}>
                <Text style={styles.formText}>Name</Text>
                <TextInput style={styles.formTextInput}
                value="Dea Dania"
                />
            </View>
            <View style={styles.formInput}>
                <Text style={styles.formText}>Email</Text>
                <TextInput style={styles.formTextInput}
                value="dea.dania@gmail.com"
                />
            </View>
            <View style={styles.formInput}>
                <Text style={styles.formText}>Phone number</Text>
                <TextInput style={styles.formTextInput}
                value="+44 213 032 578"
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
            <TouchableOpacity style={styles.formButton} onPress={() => navigation.push('Home')} >
                <Text style={styles.fButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.formT}>
                <Text >Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')} >
                    <Text style={{color:"#F77866"}} > Sign In</Text>
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
        flexDirection:"row",
        justifyContent: "center"
    },
})

export default SignUp
