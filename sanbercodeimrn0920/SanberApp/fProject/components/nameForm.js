import React, { Component, useEffect, useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Button, Text, TouchableOpacity } from 'react-native';

import { Field, reduxForm } from 'redux-form';

import { connect, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
const NameForm = (props) => {
	const GlobalState = useSelector((state) => state.NameReducer);
	const prevProps = GlobalState.name;
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<View>
				<Text>{GlobalState.name}</Text>
				<Field name="Text" component={fieldNombre} ph="Enter Text" />
				<Button title="Save your Name" onPress={props.handleSubmit((values) => props.SendDispatch(values))} />
				<TouchableOpacity style={styles.formButton} onPress={() => navigation.navigate('Home')}>
					<Text style={styles.fButtonText}>Sign In</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const fieldNombre = (props) => (
	<View style={styles.textInput}>
		<TextInput
			placeholder={props.ph}
			onChangeText={props.input.onChange}
			value={props.input.value}
			autoCapitalize="none"
			onBlur={props.input.onBlur}
		/>
		<View style={styles.linea} />
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
		backgroundColor: 'white',
	},
	textInput: {
		marginBottom: 16,
	},
	linea: {
		backgroundColor: '#DCDCDC',
		height: 2,
	},
	formButton: {
		borderRadius: 5,
		backgroundColor: '#F77866',
		alignItems: 'center',
		elevation: 2,
	},
	fButtonText: {
		padding: 10,
		color: 'white',
		fontWeight: 'bold',
		fontSize: 15,
	},
	formT: {
		paddingVertical: 20,
		alignItems: 'center',
	},
});

const mapDispatchToProps = (dispatch) => {
	return {
		SendDispatch: (values) => {
			dispatch({ type: 'ACTION_TYPE', Text: values.Text });
		},
	};
};
const mapStateToProps = (state) => {
	return {
		name: state.name,
	};
};

export default reduxForm({
	form: 'NameForm',
})(connect(mapStateToProps, mapDispatchToProps)(NameForm));
