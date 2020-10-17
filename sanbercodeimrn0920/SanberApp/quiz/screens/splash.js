import React, { Component, useEffect } from 'react'
import { 
    Text, 
    StyleSheet, 
    View,
    Image } from 'react-native'
const Splash = ({navigation})=>{
    useEffect(() => {
        setTimeout(()=>{
            navigation.navigate("SignUp")
        },3000);
    }, [])
    return(
        <View style={styles.splash}>
                <Image source={require('../images/logoSplash.png')}/>
            </View>
    )
}
// export default class Splash extends Component {
//     render() {
//         useEffect(() => {
//             setTimeout(()=>{
//                 naviation
//             },3000);
//         }, [input])
//         return (
//             <View style={styles.splash}>
//                 <Image source={require('../images/logoSplash.png')}/>
//             </View>
//         )
//     }
// }

const styles = StyleSheet.create({
    splash: {
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    }
})
export default Splash