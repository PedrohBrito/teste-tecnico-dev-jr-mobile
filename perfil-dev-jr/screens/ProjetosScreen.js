import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';

const projetos = [
	{
		id: '1',
		title: 'App de Portfólio',
		description: 'App simples mostrando perfil, habilidades e projetos (este app).',
        link: ''
	},
	{
		id: '2',
		title: 'Tela Checkout',
		description: 'App simples de check.',
	},
];

export default function ProjetosScreen() {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>Projetos</Text>
			{projetos.map((p) => (
				<View key={p.id} style={styles.card}>
					<Text style={styles.cardTitle}>{p.title}</Text>
					<Text style={styles.cardDesc}>{p.description}</Text>
					<TouchableOpacity
						style={styles.link}
						onPress={() => {
							Linking.openURL('https://github.com/PedrohBrito');
						}}
					>
						<Text style={styles.linkText}>Ver repositório</Text>
					</TouchableOpacity>
				</View>
			))}
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
	card: {
		backgroundColor: '#f7f7f7',
		padding: 12,
		borderRadius: 8,
		marginBottom: 12,
	},
	cardTitle: {
		fontSize: 16,
		fontWeight: '600',
	},
	cardDesc: {
		fontSize: 14,
		color: '#444',
		marginTop: 6,
	},
	link: {
		marginTop: 10,
	},
	linkText: {
		color: '#1e90ff',
		fontWeight: '600',
	},
});

