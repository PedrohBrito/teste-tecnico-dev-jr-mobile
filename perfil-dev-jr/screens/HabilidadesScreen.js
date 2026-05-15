import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const habilidades = [
	{ id: '1', name: 'JavaScript' },
	{ id: '2', name: 'React Native' },
	{ id: '3', name: 'Expo' },
	{ id: '4', name: 'Git' },
	{ id: '5', name: 'HTML e CSS' },
];

export default function HabilidadesScreen() {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>Habilidades</Text>
			<View style={styles.list}>
				{habilidades.map((h) => (
					<View key={h.id} style={styles.item}>
						<View style={styles.bullet} />
						<Text style={styles.itemText}>{h.name}</Text>
					</View>
				))}
			</View>
			<StatusBar style="auto" />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 22,
		fontWeight: '700',
		marginBottom: 12,
	},
	list: {
		marginTop: 8,
	},
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 10,
	},
	bullet: {
		width: 10,
		height: 10,
		borderRadius: 5,
		backgroundColor: '#333',
		marginRight: 12,
	},
	itemText: {
		fontSize: 16,
		color: '#333',
	},
});

