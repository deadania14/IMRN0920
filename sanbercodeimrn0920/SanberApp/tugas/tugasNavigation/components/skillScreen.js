import React from 'react';
import { View, 
    Text, 
    ScrollView, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet,
    Image,
    FlatList
   } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import data from '../skillData.json';
import SkillItem from './skillItem';

const lightBlue =  "#B4E9FF"
const darkBlue = "#003366"
const grayBackground = "#EFEFEF"

export default class SkillScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            test:"",
            skillArray: [],
            skillArrTemp: [],
        }
      }
    componentDidMount(){
        this.getData()
    }
    getData = ()=>{
        this.setState({
            skillArray: data.items,
            skillArrTemp: data.items,
            test: "satu"
        })
    }
    filCat=(event)=>{
        var query = event
        this.setState({
            query: query
        });
        
        var d = this.state.skillArrTemp;
        d = d.filter(a => a.categoryName.match(query));
        this.setState({
            skillArray: d,
            test:"dua"
        })

    }
    filCatLib =()=>{
        this.filCat("Framework / Library")
    }
    filCatLang =()=>{
        this.filCat("Bahasa Pemrograman")
    }
    filCatTech =()=>{
        this.filCat("Teknologi")
    }
    render() {
    return (
        <View style={styles.container}>
            <Image source={require('../Images/logo2.png')}/>
            <View style={styles.navBar}>
                <Icon style={styles.navBarIcon} name="user-circle" size={50} color={lightBlue}/>
                <View style={styles.navBarText}>
                    <Text style={{fontSize:15}}>Hai</Text>
                {/* <Text>{this.state.test}</Text> */}
                    <Text style={{fontSize:20, color:darkBlue}}>Dea Dania</Text>
                </View>
            </View>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>SKILLS</Text>
            </View>
            <View style={styles.category}>
                <TouchableOpacity onPress={this.filCatLib.bind(this)} >
                    <Text style={styles.catTitle}>Library / Framework</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.filCatLang.bind(this)} >
                    <Text style={styles.catTitle}>Bahasa Pemrograman</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.filCatTech.bind(this)} >
                    <Text style={styles.catTitle}>Teknologi</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={this.state.skillArray}
                renderItem={(skill)=><SkillItem skill={skill.item}/>}
                keyExtractor={(item)=>item.id}
                // ItemSeparatorComponent={()=><View style={{height:0.5, backgroundColor:'#E5E5E5'}}/>}
            />
            
        </View>
        )
        
    }
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    navBar:{
        marginLeft:15,
        flexDirection: "row",
        // backgroundColor:"grey",
    },
    navBarText:{
        marginLeft:5,
        flexDirection:"column",
        // backgroundColor:"white"
    },
    header:{
        margin: 15,
        padding: 5,
        borderBottomColor: lightBlue,
        borderBottomWidth:2,
        // backgroundColor: "grey"
    },
    headerTitle:{
        fontSize: 30,
        color: darkBlue
    },
    category:{
        marginLeft:10,
        flexDirection:"row"
    },
    catTitle:{
        margin:5,
        padding: 3,
        borderRadius:5,
        color:darkBlue,
        backgroundColor: lightBlue,
        fontSize:14
    },
    
})