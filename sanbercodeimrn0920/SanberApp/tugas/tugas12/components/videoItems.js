import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class VideoItems extends Component{
    render(){
        let video= this.props.video;
        return(
            <View style={styles.vidCont}>
                <Image source={{uri:video.snippet.thumbnails.medium.url}} style={{height:200}}/>
                <View style={styles.vidDesc}>
                    <Image source= {{uri:"https://randomuser.me/api/portraits/men/75.jpg"}} style={{width: 50, height:50, borderRadius:25}}/>
                    <View style={styles.vidDetails}>
                        <Text numberOfLines={2} style={styles.vidTitle}>{video.snippet.title}</Text>
                        {/* <Text style={styles.vidTitle}>{video.snippet.channelTitle + " · " + nFormatter(video.statistics.viewCount,1)+ " · " +timeSince(JSON.parse(video.snippet.publishedAt))+ " ago" }</Text> */}
                        <Text style={styles.vidStats}>{video.snippet.channelTitle + " · " + nFormatter(video.statistics.viewCount,1)+ " · " +" 3 months ago" }</Text>
                    </View>
                    <TouchableOpacity>
                        <Icon name="more-vert" size={20} style={{color:"#999999"}}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    vidCont: {
      padding: 15,
    },
    vidDesc: {
        flexDirection: 'row',
        paddingTop:15
    },
    vidDetails: {
        paddingHorizontal:15,
        flex: 1
    },
    vidTitle: {
        fontSize: 16,
        color: '#3c3c3c'
    },
    vidStats: {
        fontSize:15,
        paddingTop:3,
        color: "#888888"
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

  function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }