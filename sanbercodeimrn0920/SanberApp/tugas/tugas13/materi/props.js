import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Card =({title})=>{
  return(
    <TouchableOpacity style={styles.Button2}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}
const App=()=> {
  return (
    <View style={styles.container}>    
        <Card title="monkey"/>    
        <Card title="One Piece"/>  
        <Card title="Naruto"/>   
        <Card title="Saitama"/>    
        <Card title="Dragon ball"/>  
        <Card title="Boku No Hero"/>          
    </View>
  )
}

export default App
const styles = StyleSheet.create({
  Button2:{
    width: 300,
    height: 30,
    backgroundColor:'grey',
    justifyContent:'center',
    alignItems:'center'
  },
  container:{
    padding: 16
  }
})
