import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const lightBlue =  "#3EC6FF"
const darkBlue = "#003366"
const grayBackground = "#EFEFEF"

export default class About extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.profilTop}>
                    <Text style={styles.profilItems, {fontSize: 30, color:darkBlue, fontWeight:"bold"}}>Tentang Saya</Text>
                    <Icon name="user-circle" style={styles.profilItems} size={200} />
                    <Text style={styles.profilItems, {fontSize: 25, color:darkBlue, fontWeight:"bold"}}>Dea Dania</Text>
                    <Text style={styles.profilItems, {fontSize: 15, color:lightBlue, fontWeight:"bold"}}>React Native Developer</Text>
                </View>
                <View style={styles.category}>
                    <Text style={styles.catTitle}>Portofolio</Text>
                    <View style={styles.subCat}>
                        <TouchableOpacity style={styles.subCatItem}>  
                            <Icon name="github" size={50} color={lightBlue}/>
                            <Text style={styles.subCatTitle}>deadania14</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.subCatItem}>  
                            <Icon name="bitbucket" size={50} color={lightBlue}/>
                            <Text style={styles.subCatTitle}>deadania14</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.category}>
                    <Text style={styles.catTitle}>Hubungi Saya</Text>
                    <View style={styles.subCat, {flexDirection: "column"}}>
                        <TouchableOpacity style={styles.subCatItem}>  
                            <Icon name="facebook-square" size={50} color={lightBlue} />
                            <Text style={styles.subCatTitle}>Dea Dania</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.subCatItem}>  
                            <Icon name="twitter" size={50} color={lightBlue}/>
                            <Text style={styles.subCatTitle}>dea.dania</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    profilTop: {
        paddingTop: 50,
        flexDirection: "column",
        alignItems: "center",
    },
    profilItems: {
        paddingTop: 10,
        justifyContent: "center",
    },
    category: {
        margin: 10,
        width:350,
        // height:100,
        backgroundColor:grayBackground,
        padding:10,
        borderRadius: 10,
        
    },
    catTitle: {
        padding:5,
        borderBottomColor: darkBlue,
        borderBottomWidth:2,
        fontSize:15,
        color: darkBlue
    },
    subCat: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    subCatItem: {
        padding:15,
        color:darkBlue,
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold"
    },
    subCatTitle: {

    }

    
})

