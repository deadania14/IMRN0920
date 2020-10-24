import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button, Text } from 'react-native';

import { Field, reduxForm } from 'redux-form';

import { connect, useSelector } from 'react-redux';

const ScreenFormHome = (props) => {
	const GlobalState = useSelector((state) => state.NameReducer);

	return (
		<View>
			<Text>{GlobalState.name}</Text>
			<Field name="Text" component={fieldNombre} ph="Enter Text" />
			<Button title="Send Dispatch" onPress={props.handleSubmit((values) => props.SendDispatch(values))} />
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
	textInput: {
		marginBottom: 16,
	},
	linea: {
		backgroundColor: '#DCDCDC',
		height: 2,
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
	form: 'ScreenFormHome',
})(connect(mapStateToProps, mapDispatchToProps)(ScreenFormHome));
