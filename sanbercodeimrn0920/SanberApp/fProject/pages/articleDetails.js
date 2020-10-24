import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Nama from './testname';

// class ArticleDetails extends Component {
// 	static navigationOptions = ({ navigation }) => {
// 		return {
// 			title: 'details',
// 			headerStyle: { backgroundColor: '#fff' },
// 			headerTitleStyle: { textAlign: 'center', flex: 1 },
// 		};
// 	};
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			// data: this.props.navigation.state.params;}
// 			title: this.props.route.params,
// 		};
// 		// this.params = this.props.navigation.state.params;
// 		this.params = this.props.route.params;
// 	}
// 	render() {
// 		// console.log(this.props.route.params);
// 		// const { title } = this.state;
// 		// const { params } = this.props.navigation.state;
// 		// console.log(title);
// 		// const {params} = this.props.navigation.state
// 		console.log(this.params.name);
// 		console.log(this.params.about);
// 		return (
// 			<View>
// 				{/* // 	<Text>DetailScreen{this.state.title}</Text>
// 			// 	<Nama /> */}
// 				{/* <FlatList
// 					data={this.props.navigation.state.params.item}
// 					renderItem={({ item }) => <Text>{item.title}</Text>}
// 				/> */}
// 			</View>
// 			// <Content style={stylesWindow.ContentStyleColor}>
// 			// </Content>
// 		);
// 	}
// }

function ArticleDetails({ route, navigation }) {
	/* 2. Get the param */
	const { itemId, otherParam } = route.params;
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Details Screen</Text>
			<Text>itemId: {JSON.stringify(itemId)}</Text>
			<Text>otherParam: {JSON.stringify(otherParam)}</Text>
			<Button
				title="Go to Details... again"
				onPress={() =>
					navigation.push('Details', {
						itemId: Math.floor(Math.random() * 100),
					})
				}
			/>
			<Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
			<Button title="Go back" onPress={() => navigation.goBack()} />
		</View>
	);
}
export default ArticleDetails;
const styles = StyleSheet.create({});
