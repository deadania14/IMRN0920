import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VideoItems from './components/videoItems';
import data from './data.json';

export default class Tugas12 extends Component{
  render(){
    return(
      <View style={styles.container}>
        <StatusBar barStyle = "dark-content" hidden = {true} backgroundColor = "#00BCD4" translucent = {true}/>
        <View style={styles.navBar}>
          <Image source={require('./images/logo.png')} style={{width:98, height: 22}}/> 
          <TouchableOpacity>
            <Icon style={styles.navItems} name="search" size={25} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon style={styles.navItems} name="account-circle" size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          {/* <VideoItems video = {data.items[0]}/> */}
          <FlatList
            data={data.items}
            renderItem={(video)=><VideoItems video={video.item}/>}
            keyExtractor={(item)=>item.id}
            ItemSeparatorComponent={()=><View style={{height:0.5, backgroundColor:'#E5E5E5'}}/>}
          />
        </View>
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>  
            <Icon name="home" size={25} />
            <Text style={styles.tabTitle}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>  
            <Icon name="whatshot" size={25} />
            <Text style={styles.tabTitle}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>  
            <Icon name="subscriptions" size={25} />
            <Text style={styles.tabTitle}>Subscriptions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>  
            <Icon name="folder" size={25} />
            <Text style={styles.tabTitle}>Library</Text>
          </TouchableOpacity>
        </View>
    </View>
    
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    height: 55,
    backgroundColor: "white",
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rightNav:{
    flexDirection: 'row'
  },
  navItems: {
    marginLeft: 25
  },
  body: {
    flex: 1
  },
  tabBar:{
    backgroundColor: 'white',
    height: 60,
    borderWidth:0.5,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  tabItem:{
    alignItems: "center",
    justifyContent: "center"
  },
  tabTitle:{
    fontSize:11,
    color: '#3C3C3C'
  }
  
});

