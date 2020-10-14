// import { StatusBar } from 'expo-status-bar';
// import React, { Component } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// // import t from 'tcomb-form-native';
// var t = require('tcomb-form-native');

// const Form = t.form.Form;
// const User = t.struct({
//     email: t.String,
//     username: t.String,
//     password: t.String,
//     terms: t.Boolean
//   });
// export default class Tugas13 extends Component{
//     render(){
//         return(
//             <View style={styles.container}>
//                 <View style={styles.logoBar}>
//                     <Image source={require('./Images/logo.png')} style={{width: 400, height: 100}}/> 
//                 </View>
//                 <View style={styles.form}>
//                     {/* <Form type={User} /> Notice the addition of the Form component */}
//                     {/* <Text>Test</Text> */}


//                 </View>

//             </View>

//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     },
//     logoBar: {
//         paddingTop: 20,
//         backgroundColor: "white",
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     form:{
//         justifyContent: 'center',
//         marginTop: 50,
//         padding: 20,
//         backgroundColor: '#ffffff',
//     }
// })

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Toggle from './toggle'

export default class App extends Component {

  state = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }

  render() {
    const {flexDirection, alignItems, justifyContent} = this.state
    const layoutStyle = {flexDirection, justifyContent, alignItems}

    const primaryAxis = flexDirection === 'row' ? 'Horizontal' : 'Vertical'
    const secondaryAxis = flexDirection === 'row' ? 'Vertical' : 'Horizontal'

    return (
      <View style={styles.container}>
        <Toggle
          label={'Primary axis (flexDirection)'}
          value={flexDirection}
          options={['row', 'column']}
          onChange={(option) => this.setState({flexDirection: option})}
        />
        <Toggle
          label={primaryAxis + ' distribution (justifyContent)'}
          value={justifyContent}
          options={['flex-start', 'center', 'flex-end', 'space-around', 'space-between', 'space-evenly']}
          onChange={(option) => this.setState({justifyContent: option})}
        />
        <Toggle
          label={secondaryAxis + ' alignment (alignItems)'}
          value={alignItems}
          options={['flex-start', 'center', 'flex-end', 'stretch', 'baseline']}
          onChange={(option) => this.setState({alignItems: option})}
        />
        <View style={[styles.layout, layoutStyle]}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  box: {
    padding: 25,
    backgroundColor: 'steelblue',
    margin: 5,
  },
})