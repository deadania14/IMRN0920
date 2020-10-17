import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import data from '../data.json';

export default class Items extends Component{
    render(){
        let item= this.props.item;
        return(
            <>
                <View style={styles.itemB}>
                    {/* <Image source={{require('../images/Slider.png')}} style={{width:170, height:170}}/> */}
                    <Image source={require('../images/Slider.png')} style={{width:170, height:170}}/>
                    <View>
                        <Text style={styles.iTitle}>Name of item</Text>
                        <Text style={styles.iPrice}>$10.0</Text>
                    </View>
                </View>
                {/* <Image source={{uri:video.snippet.thumbnails.medium.url}} style={{height:200}}/>
                <Image source= {{uri:"https://randomuser.me/api/portraits/men/75.jpg"}} style={{width: 50, height:50, borderRadius:25}}/>
                <Text numberOfLines={2} style={styles.vidTitle}>{video.snippet.title}</Text> */}
            </>     
        )
    }
}

const styles = StyleSheet.create({
    items:{
        flexDirection:"row",
        flexWrap: 'wrap'
    },
    itemB:{
        marginHorizontal: 10,
        borderRadius:5,
        borderColor:"#727C8E",
        borderWidth:0.5
    },
    iTitle:{
        paddingHorizontal:10,
        paddingVertical:5,
        fontSize:12
    },
    iPrice:{
        paddingHorizontal:10,
        paddingVertical:5,
        fontSize:10
    }
});

function nFormatter(num, digits) {
    var si = [
      { value: 1, symbol: "" },
      { value: 1E3, symbol: "k" },
      { value: 1E6, symbol: "M" },
      { value: 1E9, symbol: "G" },
      { value: 1E12, symbol: "T" },
      { value: 1E15, symbol: "P" },
      { value: 1E18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
  }
