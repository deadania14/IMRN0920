import React from 'react';
import { connect, useSelector } from 'react-redux';

import { StyleSheet, View, ActivityIndicator, FlatList, Text, TouchableOpacity, Image, Button } from 'react-native';

// export default class Source extends React.Component {
// 	static navigationOptions = ({ navigation }) => {
// 		return {
// 			title: 'Source Listing',
// 			headerStyle: { backgroundColor: '#fff' },
// 			headerTitleStyle: { textAlign: 'center', flex: 1 },
// 		};
// 	};

// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			loading: true,
// 			dataSource: null,
// 		};
// 		this.navigate = this.props.navigation.navigate;
// 		// this.navigation = this.props.navigation;
// 	}
// 	componentDidMount() {
// 		var url = 'http://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=453817020ac849d28ea1c03c1a990e70';
// 		var req = new Request(url);
// 		fetch(req)
// 			.then((response) => response.json())
// 			.then((responseJson) => {
// 				this.setState({
// 					loading: false,
// 					dataSource: responseJson.articles,
// 				});
// 			})
// 			.catch((error) => console.log(error)); //to catch the errors if any
// 	}
// 	FlatListItemSeparator = () => {
// 		return (
// 			<View
// 				style={{
// 					height: 0.5,
// 					width: '100%',
// 					backgroundColor: 'rgba(0,0,0,0.5)',
// 				}}
// 			/>
// 		);
// 	};
// 	renderItem = (data) => (
// 		// <TouchableOpacity style={styles.list} onPress={() => this.navigation.navigate('Details', { item: data.item })}>
// 		<TouchableOpacity
// 			style={styles.list}
// 			onPress={() =>
// 				this.navigate('Details', {
// 					itemId: 86,
// 					otherParam: 'anything you want here',
// 				})
// 			}
// 		>
// 			<Image source={{ uri: data.item.urlToImage }} style={styles.img} />
// 			<Text style={styles.lightText}>{data.item.title}</Text>
// 			<Text style={styles.lightText}>{data.item.publishedAt}</Text>
// 		</TouchableOpacity>
// 	);
// 	render() {
// 		const { navigation } = this.props;
// 		if (this.state.loading) {
// 			return (
// 				<View style={styles.loader}>
// 					<ActivityIndicator size="large" color="#0c9" />
// 				</View>
// 			);
// 		}
// 		return (
// 			<View style={styles.container}>
// 				<FlatList
// 					data={this.state.dataSource}
// 					ItemSeparatorComponent={this.FlatListItemSeparator}
// 					renderItem={(item) => this.renderItem(item)}
// 					keyExtractor={(item, index) => index.toString()}
// 					// keyExtractor={(item) => item.publishedAt}
// 				/>
// 			</View>
// 		);
// 	}
// }
function Home({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Button
				title="Go to Details"
				onPress={() => {
					/* 1. Navigate to the Details route with params */
					navigation.navigate('Details', {
						itemId: 86,
						otherParam: 'anything you want here',
					});
				}}
			/>
		</View>
	);
}
export default Home;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	loader: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	img: {
		height: 200,
	},
	list: {
		paddingVertical: 4,
		margin: 5,
		backgroundColor: '#fff',
	},
});
