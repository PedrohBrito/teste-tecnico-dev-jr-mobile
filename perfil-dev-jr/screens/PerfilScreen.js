import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
export default function PerfilScreen() {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Image
				source={require('../assets/foto-pedro.png')}
				style={styles.avatar}
			/>
			<Text style={styles.name}>Seu Nome</Text>
			<Text style={styles.title}>Desenvolvedor de Sistemas</Text>
			<Text style={styles.bio}>
				Sou um desenvolvedor iniciante com interesse em React Native, Back-end e Front-end criando
				interfaces limpas e apps/sites responsivos. Aqui estão alguns detalhes sobre
				mim e minha experiência.
			</Text>
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Contato</Text>
				<Text style={styles.item}>Email: cunha.pedrobrito@gmail.com</Text>
				<Text style={styles.item}>Local: Valinhos, São Paulo</Text>
			</View>
			<StatusBar style="auto" />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	avatar: {
		width: 140,
		height: 140,
		borderRadius: 70,
		marginBottom: 16,
	},
	name: {
		fontSize: 22,
		fontWeight: '700',
	},
	title: {
		fontSize: 16,
		color: '#666',
		marginBottom: 12,
	},
	bio: {
		fontSize: 14,
		color: '#333',
		textAlign: 'center',
		marginBottom: 16,
	},
	section: {
		alignSelf: 'stretch',
		marginTop: 8,
	},
	sectionTitle: {
		fontSize: 16,
		fontWeight: '600',
		marginBottom: 6,
	},
	item: {
		fontSize: 14,
		color: '#333',
		marginBottom: 4,
	},
});
