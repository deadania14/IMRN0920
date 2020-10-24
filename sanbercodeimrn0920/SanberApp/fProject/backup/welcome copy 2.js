import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import NameForm from './nameForm';

class Welcome extends Component {
	static navigationOptions = {
		header: null,
	};

	render() {
		const { navigation } = this.props;
		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={{ backgroundColor: 'blue', padding: 10, marginBottom: 10 }}
					onPress={() => {
						navigation.navigate('Home');
					}}
				>
					<Text style={{ color: '#fff' }}>Go</Text>
				</TouchableOpacity>
				<NameForm />
			</View>
		);
	}
}

export default Welcome;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
