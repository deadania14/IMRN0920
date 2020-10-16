import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

const lightBlue =  "#B4E9FF"
const darkBlue = "#003366"
const grayBackground = "#EFEFEF"

export default class SkillItem extends Component{
    render(){
        let skill= this.props.skill;
        let iconN = skill.iconName;
        return(
            <View style={styles.skillItem}>
                {/* <Image source={skill.logoUrl}/> */}
                {/* <Icon style={styles.skillIcon} name="account-circle" size={100} /> */}
                <Icon style={styles.skillIcon} name={iconN} size={100} />
                <View style={styles.skillText}>
                    <Text style={styles.skillTitle}>{skill.skillName}</Text>
                    <Text style={styles.skillTitle,{ fontSize:15, color:"#3EC6FF"}}>{skill.categoryName}</Text>
                    <View style={{alignItems:"flex-end"}}>
                        <Text style={styles.skillPercent}>{skill.percentageProgress}</Text>
                    </View>
                </View>
                
                <Icon2 style={styles.skillIcon} name="keyboard-arrow-right" size={90} />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    skillItem:{
        marginLeft:15,
        marginRight:15,
        marginTop:7.5,
        padding: 10,
        flexDirection: "row",
        backgroundColor:lightBlue,
        borderRadius:20,
        justifyContent:"space-between"
    },
    skillText:{
        marginLeft:15,
        flexDirection:"column",
        // color:"white",
        // backgroundColor:"white"
    },
    skillTitle:{
        fontSize:30,
        color:darkBlue,
        fontWeight:"bold"
    },
    skillPercent:{
        fontSize:40,
        // justifyContent: "flex-end"
        color: "white",
        fontWeight:"bold"
    }
});
