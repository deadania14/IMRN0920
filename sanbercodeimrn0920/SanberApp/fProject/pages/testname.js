import React, { Component, useEffect, useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Button, Text, TouchableOpacity } from 'react-native';

import { Field, reduxForm } from 'redux-form';

import { connect, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
const Name = (props) => {
	const GlobalState = useSelector((state) => state.NameReducer);

	return (
		<View style={styles.container}>
			<View>
				<Text>{GlobalState.name}</Text>
			</View>
		</View>
	);
};

export default Name;
const styles = StyleSheet.create({});
