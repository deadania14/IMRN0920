import React from 'react'
import { StyleSheet, 
    TouchableOpacity,
    Text,
    View,
    Image,
ScrollView,
FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ()=>(
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.searchBox}>
                <Icon name="magnify" size={25} color={"#727C8E"} style={{paddingHorizontal:10}}/>
                <Text style={{color:"#727C8E", paddingRight:100, paddingLeft:20}}>Search Product</Text>
                <Icon name="camera-outline" size={25} color={"#727C8E"} style={{paddingHorizontal:10}}/>
            </View>
            <View>
                <Icon name="bell-outline" size={25} color={"#727C8E"} style={{paddingHorizontal:10, paddingTop:10}}/>
            </View>
        </View>
        <View style={styles.body}>
            <Image source={require('../images/Slider.png')} style={{width:372, height: 190, margin: 10, borderRadius:5}}/>
            {/* <View style={styles.tabBar}>
                <TouchableOpacity style={styles.tabItem}>  
                <Icon name="home" size={25} color={"#F77866"}/>
                <Text style={styles.tabTitle, {color:"#727C8E"}}>Men</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>  
                <Icon name="cart" size={25} color="#727C8E"/>
                <Text style={styles.tabTitle, {color:"#727C8E"}}>Women</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>  
                <Icon name="message" size={25} color="#727C8E"/>
                <Text style={styles.tabTitle, {color:"#727C8E"}}>Kids</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>  
                <Icon name="account" size={25} color="#727C8E"/>
                <Text style={styles.tabTitle, {color:"#727C8E"}}>More</Text>
                </TouchableOpacity>
            </View> */}
            <ScrollView>
                <View style={styles.flash}>
                    <Text style={styles.fText}>Flash Sell</Text>
                    <Text style={styles.fTextDate}>03.30.30</Text>
                    <Text style={styles.fTextA}>All</Text>
                    <Icon name="chevron-right" size={25} color={"#727CBE"}/>
                </View>
                <View style={styles.itemsFlash}>
                    <View style={styles.itemBFlash}>
                        <Image source={require('../images/Slider.png')} style={{width:110, height:110}}/>
                        <View>
                            <Text style={styles.iTitleFlash}>Name of item</Text>
                            <Text style={styles.iPriceFlash}>$10.0</Text>
                        </View>
                    </View>
                    <View style={styles.itemBFlash}>
                        <Image source={require('../images/Slider.png')} style={{width:110, height:110}}/>
                        <View>
                            <Text style={styles.iTitleFlash}>Name of item</Text>
                            <Text style={styles.iPriceFlash}>$10.0</Text>
                        </View>
                    </View>
                    <View style={styles.itemBFlash}>
                        <Image source={require('../images/Slider.png')} style={{width:110, height:110}}/>
                        <View>
                            <Text style={styles.iTitleFlash}>Name of item</Text>
                            <Text style={styles.iPriceFlash}>$10.0</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.flash}>
                    <Text style={styles.fText}>New Product</Text>
                    <Text style={styles.fTextA}>All</Text>
                    <Icon name="chevron-right" size={25} color={"#727CBE"}/>
                </View>
                <View style={styles.items}>
                    <View style={styles.itemB}>
                        <Image source={require('../images/Slider.png')} style={{width:170, height:170}}/>
                        <View>
                            <Text style={styles.iTitle}>Name of item</Text>
                            <Text style={styles.iPrice}>$10.0</Text>
                        </View>
                    </View>
                    <View style={styles.itemB}>
                    <Image source={require('../images/Slider.png')} style={{width:170, height:170}}/>
                        <View>
                            <Text style={styles.iTitle}>Name of item</Text>
                            <Text style={styles.iPrice}>$10.0</Text>
                        </View>
                    </View>
                </View>


            </ScrollView>

        </View>
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>  
            <Icon name="home" size={25} color={"#F77866"}/>
            <Text style={styles.tabTitle, {color:"#F77866"}}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>  
            <Icon name="cart" size={25} color="#727C8E"/>
            <Text style={styles.tabTitle, {color:"#727C8E"}} >Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>  
            <Icon name="message" size={25} color="#727C8E"/>
            <Text style={styles.tabTitle, {color:"#727C8E"}}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>  
            <Icon name="account" size={25} color="#727C8E"/>
            <Text style={styles.tabTitle, {color:"#727C8E"}}>Profile</Text>
          </TouchableOpacity>
        </View>    
    </View>
) 
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header: {
        // flex: 1,
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    flash:{
        flexDirection: "row",
        margin:10,
        justifyContent:"space-between"
    },
    fText:{
        fontSize:25,
        fontWeight:"bold",
        color: "#4D4D4D"
    },
    fTextDate:{
        color: "#F89C52",
        fontSize:15,
        paddingLeft:10,
        flexDirection:"row-reverse"
    },
    searchBox:{
        flexDirection:"row",
        padding:5,
        justifyContent:"space-evenly",
        borderColor: "#727C8E",
        borderWidth:1,
        borderRadius:10,
        // paddingHorizontal:70
    },
    body: {
        flex: 1,
        backgroundColor:"white"
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
      },
      itemsFlash:{
        flexDirection:"row"
      },
      itemBFlash:{
          marginHorizontal: 10,
          borderRadius:5,
          borderColor:"#727C8E",
          borderWidth:0.5
      },
      iTitleFlash:{
          paddingHorizontal:10,
          paddingVertical:5,
          fontSize:12
      },
      iPriceFlash:{
          paddingHorizontal:10,
          paddingVertical:5,
          fontSize:10
      },
      
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
})

export default Home
